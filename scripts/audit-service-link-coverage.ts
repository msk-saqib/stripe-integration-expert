/**
 * Informational only (not wired into prebuild — this is a content-planning signal,
 * not a build gate): reports which service pages currently receive zero inbound
 * links from blog content, so new posts can be pointed at the least-linked services.
 */
import { SERVICES } from "../src/content/services-data";
import { BLOG_POSTS } from "../src/content/blog-posts";

const linked = new Set(BLOG_POSTS.flatMap((post) => post.relatedServiceSlugs));
const uncovered = SERVICES.filter((service) => !linked.has(service.slug));

console.log(`${BLOG_POSTS.length} posts link to ${linked.size}/${SERVICES.length} services.`);
console.log(`${uncovered.length} services have zero inbound blog links:`);
for (const service of uncovered) {
  console.log(`  - ${service.slug} (${service.category})`);
}
