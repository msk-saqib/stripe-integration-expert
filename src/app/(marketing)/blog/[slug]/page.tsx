import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/structured-data";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CategoryBadge } from "@/components/blog/category-badge";
import { PostToc } from "@/components/blog/post-toc";
import { PostContent } from "@/components/blog/post-content";
import { AuthorBio } from "@/components/blog/author-bio";
import { RelatedPosts } from "@/components/blog/related-posts";
import { RelatedServicesRail } from "@/components/services/related-services-rail";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import Link from "next/link";
import {
  getAllPosts,
  getPostBySlug,
  getBlogCategoryBySlug,
  getRelatedPosts,
  extractHeadings,
} from "@/lib/content/blog";
import { getServiceBySlug, type ServiceContent } from "@/lib/content/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ledgerandco.example.com";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = getBlogCategoryBySlug(post.category);
  const headings = extractHeadings(post.body);
  const relatedPosts = getRelatedPosts(post);
  const relatedServices = post.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceContent => Boolean(s));

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.metaDescription,
    url,
    siteUrl: SITE_URL,
    authorName: post.author.name,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        siteUrl={SITE_URL}
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          ...(category ? [{ name: category.name, href: `/blog/category/${category.slug}` }] : []),
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-6 pt-10 md:px-8">
        {category && <CategoryBadge slug={category.slug} name={category.name} />}
        <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <div className="mt-6">
          <AuthorBio
            name={post.author.name}
            role={post.author.role}
            publishedAt={post.publishedAt}
            updatedAt={post.updatedAt}
          />
        </div>
      </article>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_220px] md:px-8">
        <div>
          <PostContent body={post.body} />

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                #{tag}
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Stripe insights, monthly
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              One email a month — no spam, unsubscribe anytime.
            </p>
            <NewsletterForm className="mt-4" />
          </div>
        </div>

        <aside className="hidden md:block">
          <PostToc headings={headings} />
        </aside>
      </div>

      {relatedServices.length > 0 && <RelatedServicesRail services={relatedServices} />}
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}
