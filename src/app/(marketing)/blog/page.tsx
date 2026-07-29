import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { FilterablePostList } from "@/components/blog/filterable-post-list";
import { CtaBand } from "@/components/shared/cta-band";
import { getAllPosts, getAllBlogCategories } from "@/lib/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Stripe Guides, Tutorials & Best Practices",
  description:
    "Practical Stripe guides, tutorials, and error fixes from engineers who integrate Stripe every day.",
  path: "/blog",
});

export default function BlogHubPage() {
  const posts = getAllPosts();
  const categories = getAllBlogCategories();

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center md:px-8 md:pt-32">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Blog
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Stripe Guides, Tutorials &amp; Best Practices
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Practical, engineer-written content from the team that ships Stripe
          integrations every week.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <FilterablePostList categories={categories} posts={posts} />
      </section>

      <CtaBand
        title="Need Help With Your Own Integration?"
        description="Book a free consultation and get a clear scope within 24 hours."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
