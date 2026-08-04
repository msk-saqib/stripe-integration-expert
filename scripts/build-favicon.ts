/**
 * Assembles public/favicon.ico from the PNG icon sources.
 *
 * Why this exists: Google's favicon crawler prefers an icon that is square and a
 * multiple of 48px, and it fetches /favicon.ico by convention. A .ico containing
 * only 16x16 and 32x32 frames is a common cause of "Google shows a generic globe
 * instead of our icon" — so the 48x48 frame is the point of this script.
 *
 * The frames are PNG-encoded inside the ICO container (valid since Vista, and
 * supported by every current browser and by Googlebot).
 *
 * Run manually after changing the brand mark: `npm run seo:favicon`.
 * Not part of prebuild — the icon sources change roughly never, and the output
 * is committed.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const PUBLIC_DIR = resolve(__dirname, "..", "public");

const SOURCES = [
  { file: "icon-16.png", size: 16 },
  { file: "icon-32.png", size: 32 },
  { file: "icon-48.png", size: 48 },
];

const ICONDIR_BYTES = 6;
const ICONDIRENTRY_BYTES = 16;

const frames = SOURCES.map(({ file, size }) => ({
  size,
  data: readFileSync(resolve(PUBLIC_DIR, file)),
}));

const header = Buffer.alloc(ICONDIR_BYTES);
header.writeUInt16LE(0, 0); // reserved, always 0
header.writeUInt16LE(1, 2); // resource type: 1 = icon
header.writeUInt16LE(frames.length, 4);

let offset = ICONDIR_BYTES + ICONDIRENTRY_BYTES * frames.length;
const entries = frames.map(({ size, data }) => {
  const entry = Buffer.alloc(ICONDIRENTRY_BYTES);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width (0 means 256)
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette size, 0 for truecolor
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(data.length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += data.length;
  return entry;
});

const ico = Buffer.concat([header, ...entries, ...frames.map((f) => f.data)]);
writeFileSync(resolve(PUBLIC_DIR, "favicon.ico"), ico);

console.log(
  `Generated favicon.ico — ${frames.map((f) => `${f.size}x${f.size}`).join(", ")} (${ico.length} bytes)`,
);
