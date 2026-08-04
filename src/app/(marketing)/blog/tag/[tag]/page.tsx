import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/shared/cta-band";
import { getAllTags, getPostsByTag, isTagIndexable } from "@/lib/content/blog";
import { SITE_URL } from "@/lib/seo/site";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) return {};

  return buildMetadata({
    title: `Posts tagged "${tag}"`,
    description: `Stripe articles and guides tagged "${tag}".`,
    path: `/blog/tag/${tag}`,
    ogKicker: "Tagged",
    noIndex: !isTagIndexable(tag),
  });
}

export default async function BlogTagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <>
      <Breadcrumbs
        siteUrl={SITE_URL}
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: `#${tag}`, href: `/blog/tag/${tag}` },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 pt-10 pb-16 text-center md:px-8">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Tag
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          #{tag}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {posts.length} post{posts.length === 1 ? "" : "s"} tagged &ldquo;{tag}&rdquo;
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
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
