/**
 * Pre-generates robots.txt, sitemap*.xml, manifest.json, and llms.txt as static
 * files in /public.
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

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://stripe-experts.com").replace(
  /\/$/,
  "",
);
const PUBLIC_DIR = resolve(__dirname, "..", "public");

const buildDate = new Date().toISOString();

/**
 * lastmod for content that carries no date of its own. Using the build timestamp
 * would re-date every URL on every deploy, which trains crawlers to ignore the
 * field; the newest post's date is a truthful "content last changed" signal.
 */
const latestContentDate = BLOG_POSTS.reduce(
  (latest, post) => (post.updatedAt > latest ? post.updatedAt : latest),
  BLOG_POSTS[0]?.updatedAt ?? buildDate.slice(0, 10),
);
const contentLastmod = new Date(latestContentDate).toISOString();

function urlEntry(
  loc: string,
  priority: number,
  changefreq: string,
  lastmod: string = contentLastmod,
) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
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

/** Newest updatedAt among the posts in a category, so category lastmod tracks its content. */
function newestPostDate(posts: typeof BLOG_POSTS) {
  if (posts.length === 0) return contentLastmod;
  return new Date(
    posts.reduce((latest, p) => (p.updatedAt > latest ? p.updatedAt : latest), posts[0].updatedAt),
  ).toISOString();
}

const blogXml = wrapUrlset([
  urlEntry(`${SITE_URL}/blog`, 0.8, "weekly", newestPostDate(BLOG_POSTS)),
  ...BLOG_CATEGORIES.map((c) =>
    urlEntry(
      `${SITE_URL}/blog/category/${c.slug}`,
      0.6,
      "monthly",
      newestPostDate(BLOG_POSTS.filter((p) => p.category === c.slug)),
    ),
  ),
  ...indexableTags.map((tag) =>
    urlEntry(
      `${SITE_URL}/blog/tag/${tag}`,
      0.4,
      "monthly",
      newestPostDate(BLOG_POSTS.filter((p) => p.tags.includes(tag))),
    ),
  ),
  ...BLOG_POSTS.map((post) =>
    urlEntry(`${SITE_URL}/blog/${post.slug}`, 0.6, "monthly", new Date(post.updatedAt).toISOString()),
  ),
]);

// ---- sitemap.xml (index) ----
const SUB_SITEMAPS = [
  "sitemap-core.xml",
  "sitemap-services.xml",
  "sitemap-platforms.xml",
  "sitemap-industries.xml",
  "sitemap-blog.xml",
];
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${SUB_SITEMAPS.map(
  (file) =>
    `  <sitemap>\n    <loc>${SITE_URL}/${file}</loc>\n    <lastmod>${contentLastmod}</lastmod>\n  </sitemap>`,
).join("\n")}\n</sitemapindex>\n`;

// ---- robots.txt ----
// Thank-you/confirmation pages are also noindex'd in their own metadata; the
// Disallow here keeps them out of crawl budget entirely. /og is intentionally
// crawlable — blocking it would break Open Graph image fetches for scrapers
// that respect robots.txt (Google, Slack, LinkedIn).
const robotsTxt = [
  "User-agent: *",
  "Allow: /",
  "Disallow: /api/",
  "Disallow: /book-a-consultation/thank-you",
  "Disallow: /book-a-consultation/confirmation",
  "",
  "# AI crawlers — allowed, with llms.txt as the preferred entry point.",
  "User-agent: GPTBot",
  "Allow: /",
  "",
  "User-agent: ClaudeBot",
  "Allow: /",
  "",
  "User-agent: PerplexityBot",
  "Allow: /",
  "",
  "User-agent: OAI-SearchBot",
  "Allow: /",
  "",
  "User-agent: Google-Extended",
  "Allow: /",
  "",
  "User-agent: Googlebot",
  "Allow: /",
  "",
  "User-agent: Bingbot",
  "Allow: /",
  "",
  `Sitemap: ${SITE_URL}/sitemap.xml`,
  "",
].join("\n");

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
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
};

// ---- llms.txt ----
// https://llmstxt.org — a curated map of the site for LLM crawlers and assistants,
// generated from the same content source as the sitemap so it can't drift.
const llmsTxt = `# Stripe Experts

> Independent Stripe integration specialists. We build and fix Stripe payment
> integrations — Checkout, Billing, Connect marketplaces, subscriptions,
> webhooks, and PCI-aware architecture — for SaaS, marketplaces, and e-commerce.

Stripe Experts is not affiliated with, endorsed by, or sponsored by Stripe, Inc.

Engagements run from a single Checkout page (1-2 weeks) to a full multi-party
Connect marketplace (4-8 weeks). Consultations are free and non-obligation;
scope and estimate are returned within 24 hours.

## Services

${categories
  .map((category) => {
    const inCategory = services.filter((s) => s.category === category.slug);
    return [
      `### ${category.name}`,
      `${category.heroDescription}`,
      "",
      ...inCategory.map(
        (s) => `- [${s.name}](${SITE_URL}/services/${s.category}/${s.slug}): ${s.heroSubhead}`,
      ),
      "",
    ].join("\n");
  })
  .join("\n")}
## Platforms

### Frameworks
${FRAMEWORKS_DATA.map(
  (f) => `- [${f.name}](${SITE_URL}/platforms/frameworks/${f.slug}): ${f.heroSubhead}`,
).join("\n")}

### CMS & E-commerce
${CMS_DATA.map((c) => `- [${c.name}](${SITE_URL}/platforms/cms/${c.slug}): ${c.heroSubhead}`).join("\n")}

## Industries

${INDUSTRIES_DATA.map(
  (i) => `- [${i.name}](${SITE_URL}/industries/${i.slug}): ${i.heroSubhead}`,
).join("\n")}

## Guides & Articles

${BLOG_POSTS.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`).join("\n")}

## Optional

- [About](${SITE_URL}/about): Who we are and how we handle Stripe credentials.
- [FAQ](${SITE_URL}/faq): Timelines, pricing, compliance, and support questions.
- [Book a consultation](${SITE_URL}/book-a-consultation): Free 30-minute call.
- [Privacy](${SITE_URL}/privacy)
- [Terms](${SITE_URL}/terms)
`;

writeFileSync(resolve(PUBLIC_DIR, "sitemap.xml"), sitemapIndex);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-core.xml"), coreXml);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-services.xml"), servicesXml);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-platforms.xml"), platformsXml);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-industries.xml"), industriesXml);
writeFileSync(resolve(PUBLIC_DIR, "sitemap-blog.xml"), blogXml);
writeFileSync(resolve(PUBLIC_DIR, "robots.txt"), robotsTxt);
writeFileSync(resolve(PUBLIC_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));
writeFileSync(resolve(PUBLIC_DIR, "llms.txt"), llmsTxt);

const urlCount =
  CORE_PATHS.length +
  categories.length +
  services.length +
  FRAMEWORKS_DATA.length +
  CMS_DATA.length +
  INDUSTRIES_DATA.length +
  1 +
  BLOG_CATEGORIES.length +
  indexableTags.length +
  BLOG_POSTS.length;

console.log(
  `Generated: sitemap.xml (+${SUB_SITEMAPS.length} sub-sitemaps, ${urlCount} URLs), robots.txt, manifest.json, llms.txt`,
);
