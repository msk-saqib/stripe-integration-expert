import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/content/blog";
import { getBlogCategoryBySlug } from "@/lib/content/blog";

export function PostCard({ post }: { post: BlogPost }) {
  const category = getBlogCategoryBySlug(post.category);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
    >
      {category && (
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {category.name}
        </span>
      )}
      <h3 className="mt-2 text-lg font-semibold leading-snug">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <time dateTime={post.publishedAt} className="text-xs text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          Read
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
