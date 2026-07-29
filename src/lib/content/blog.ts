import { BLOG_POSTS, type BlogPost, type ContentBlock } from "@/content/blog-posts";
import { BLOG_CATEGORIES, type BlogCategoryContent } from "@/content/blog-categories";

export type { BlogPost, ContentBlock, BlogCategoryContent };

const MIN_POSTS_FOR_INDEXABLE_TAG = 4;

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogCategories(): BlogCategoryContent[] {
  return BLOG_CATEGORIES;
}

export function getBlogCategoryBySlug(slug: string): BlogCategoryContent | undefined {
  return BLOG_CATEGORIES.find((category) => category.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === categorySlug);
}

export function getPostsByTag(tag: string, limit?: number): BlogPost[] {
  const posts = getAllPosts().filter((post) => post.tags.includes(tag));
  return limit ? posts.slice(0, limit) : posts;
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of BLOG_POSTS) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function isTagIndexable(tag: string): boolean {
  return getPostsByTag(tag).length >= MIN_POSTS_FOR_INDEXABLE_TAG;
}

export function getPostsRelatedToService(serviceSlug: string, limit = 2): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.relatedServiceSlugs.includes(serviceSlug))
    .slice(0, limit);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = getAllPosts().filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const sharingTags = getAllPosts().filter(
    (p) =>
      p.slug !== post.slug &&
      p.category !== post.category &&
      p.tags.some((tag) => post.tags.includes(tag)),
  );
  return [...sameCategory, ...sharingTags].slice(0, limit);
}

export function extractHeadings(body: ContentBlock[]) {
  return body.filter((block): block is Extract<ContentBlock, { type: "heading" }> => block.type === "heading");
}
