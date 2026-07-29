import { PostCard } from "@/components/blog/post-card";
import type { BlogPost } from "@/lib/content/blog";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-lg font-semibold">Related Reading</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
