"use client";

import { useState } from "react";
import { PostCard } from "@/components/blog/post-card";
import { cn } from "@/lib/utils";
import type { BlogCategoryContent, BlogPost } from "@/lib/content/blog";

export function FilterablePostList({
  categories,
  posts,
}: {
  categories: BlogCategoryContent[];
  posts: BlogPost[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all" ? posts : posts.filter((post) => post.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter posts by category">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          className={cn(
            "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border bg-card text-muted-foreground hover:border-accent/40",
          )}
        >
          All ({posts.length})
        </button>
        {categories.map((category) => {
          const count = posts.filter((p) => p.category === category.slug).length;
          if (count === 0) return null;
          return (
            <button
              key={category.slug}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category.slug
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent/40",
              )}
            >
              {category.name} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
