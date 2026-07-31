/**
 * Pre-generates robots.txt, sitemap*.xml, and manifest.json as static files in /public.
 *
 * Workaround: Next's next-metadata-route-loader embeds the project's absolute path into a
 * generated error string using an unescaped single-quoted template literal. When the project
 * path contains an apostrophe (e.g. "Saqib's Work"), that generated code is a syntax error,
 * breaking sitemap.ts/robots.ts/manifest.ts as dynamic App Router conventions. Generating
 * these as plain static files in /public sidesteps that loader entirely.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { SERVICES } from "../src/content/services-data";
import { CATEGORY_CONTENT } from "../src/content/service-categories";
import { FRAMEWORKS_DATA } from "../src/content/frameworks-data";
import { CMS_DATA } from "../src/content/cms-data";
import { INDUSTRIES_DATA } from "../src/content/industries-data";
import { BLOG_POSTS } from "../src/content/blog-posts";
import { BLOG_CATEGORIES } from "../src/content/blog-categories";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stripe-experts.com";
const PUBLIC_DIR = resolve(__dirname, "..", "public");
const now = new Date().toISOString();

function urlEntry(loc: string, priority: number, changefreq: string) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

function wrapUrlset(entries: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}

// ---- sitemap-core.xml ----
const CORE_PATHS = [
  "",
  "/about",
  "/faq",
  "/book-a-consultation",
  "/services",
  "/platforms",
  "/industries",
  "/privacy",
  "/terms",
];
const coreXml = wrapUrlset(
  CORE_PATHS.map((path) =>
    urlEntry(`${SITE_URL}${path}`, path === "" ? 1 : 0.8, path === "" ? "weekly" : "monthly"),
  ),
);

// ---- sitemap-services.xml ----
const categories = Object.values(CATEGORY_CONTENT);
const services = SERVICES;
const servicesXml = wrapUrlset([
  ...categories.map((c) => urlEntry(`${SITE_URL}/services/${c.slug}`, 0.7, "monthly")),
  ...services.map((s) =>
    urlEntry(`${SITE_URL}/services/${s.category}/${s.slug}`, 0.6, "monthly"),
  ),
]);

// ---- sitemap-platforms.xml ----
const platformsXml = wrapUrlset([
  ...FRAMEWORKS_DATA.map((f) => urlEntry(`${SITE_URL}/platforms/frameworks/${f.slug}`, 0.6, "monthly")),
  ...CMS_DATA.map((c) => urlEntry(`${SITE_URL}/platforms/cms/${c.slug}`, 0.6, "monthly")),
]);

// ---- sitemap-industries.xml ----
const industriesXml = wrapUrlset(
  INDUSTRIES_DATA.map((i) => urlEntry(`${SITE_URL}/industries/${i.slug}`, 0.6, "monthly")),
);

// ---- sitemap-blog.xml ----
const MIN_POSTS_FOR_INDEXABLE_TAG = 4;
const tagCounts = new Map<string, number>();
for (const post of BLOG_POSTS) {
  for (const tag of post.tags) tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
}
const indexableTags = Array.from(tagCounts.entries())
  .filter(([, count]) => count >= MIN_POSTS_FOR_INDEXABLE_TAG)
  .map(([tag]) => tag);

const blogXml = wrapUrlset([
  urlEntry(`${SITE_URL}/blog`, 0.8, "weekly"),
  ...BLOG_CATEGORIES.map((c) => urlEntry(`${SITE_URL}/blog/category/${c.slug}`, 0.6, "monthly")),
  ...indexableTags.map((tag) => urlEntry(`${SITE_URL}/blog/tag/${tag}`, 0.4, "monthly")),
  ...BLOG_POSTS.map((post) => urlEntry(`${SITE_URL}/blog/${post.slug}`, 0.6, "monthly")),
]);

// ---- sitemap.xml (index) ----
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
  "sitemap-core.xml",
  "sitemap-services.xml",
  "sitemap-platforms.xml",
  "sitemap-industries.xml",
  "sitemap-blog.xml",
]
  .map(
    (file) =>
      `  <sitemap>\n    <loc>${SITE_URL}/${file}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
  )
  .join("\n")}\n</sitemapindex>\n`;

// ---- robots.txt ----
const robotsTxt = `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /book-a-consultation/thank-you\nDisallow: /book-a-consultation/confirmation\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

// ---- manifest.json ----
const manifest = {
  name: "Stripe Experts | Independent Stripe Integration Specialists",
  short_name: "Stripe Experts",
  description: "Trusted Stripe integration services for SaaS, marketplaces, and e-commerce.",
  start_url: "/",
  display: "standalone",
  background_color: "#0a0e1a",
  theme_color: "#0a0e1a",
  icons: [
    {
      src: "/stripe-experts-logo.png",
      sizes: "1254x1254",
      type: "image/png",
    },
  ],
};

writeFileSync(resolve(PUBLIC_DIR, "sitemap.xml"), sitemapIndex);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-core.xml"), coreXml);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-services.xml"), servicesXml);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-platforms.xml"), platformsXml);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-industries.xml"), industriesXml);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-blog.xml"), blogXml);
writeFileSync(resolve(PUBLIC_DIR, "robots.txt"), robotsTxt);
writeFileSync(resolve(PUBLIC_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));

console.log("Generated: sitemap.xml (+5 sub-sitemaps), robots.txt, manifest.json");
