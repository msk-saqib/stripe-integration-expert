import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/shared/cta-band";
import {
  getAllBlogCategories,
  getBlogCategoryBySlug,
  getPostsByCategory,
} from "@/lib/content/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stripe-experts.com";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getAllBlogCategories().map((category) => ({ category: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getBlogCategoryBySlug(categorySlug);
  if (!category) return {};

  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/blog/category/${category.slug}`,
  });
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getBlogCategoryBySlug(categorySlug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);

  return (
    <>
      <Breadcrumbs
        siteUrl={SITE_URL}
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: category.name, href: `/blog/category/${category.slug}` },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 pt-10 pb-16 text-center md:px-8">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Blog Category
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          {category.name}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {category.description}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-muted-foreground">
            No posts in this category yet. Check back soon.
          </p>
        )}
      </section>

      <CtaBand
        title="Need Help With Your Own Integration?"
        description="Book a free consultation and get a clear scope within 24 hours."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
        secondaryHref="/blog"
        secondaryLabel="View All Posts"
      />
    </>
  );
}
