import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";

// Weights are limited to what the UI actually uses — nothing renders at 700, so
// shipping it would only add bytes to the critical path. Check before adding a
// `font-bold` class: the weight has to be declared here or it silently synthesizes.

export const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-heading",
  display: "swap",
});

export const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

// Only used for small eyebrow/label text and code blocks — never the LCP element,
// so it stays out of the preload queue and off the critical path.
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-label",
  display: "swap",
  preload: false,
});
