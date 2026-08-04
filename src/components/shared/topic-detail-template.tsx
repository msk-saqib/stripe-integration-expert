import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaBand } from "@/components/shared/cta-band";
import { RelatedServicesRail } from "@/components/services/related-services-rail";
import { RelatedPosts } from "@/components/blog/related-posts";
import { PostContent } from "@/components/blog/post-content";
import { RiseIn } from "@/components/motion/rise-in";
import { getServiceBySlug, type ServiceContent } from "@/lib/content/services";
import { getPostsByTag, type ContentBlock } from "@/lib/content/blog";
import { SITE_URL } from "@/lib/seo/site";

interface TopicDetailTemplateProps {
  breadcrumbItems: { name: string; href: string }[];
  eyebrow: string;
  heroHeadline: string;
  heroSubhead: string;
  context: string;
  body?: ContentBlock[];
  relevantServiceSlugs: string[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaSecondaryHref: string;
  ctaSecondaryLabel: string;
  blogTag?: string;
}

export function TopicDetailTemplate({
  breadcrumbItems,
  eyebrow,
  heroHeadline,
  heroSubhead,
  context,
  body,
  relevantServiceSlugs,
  faqs,
  ctaTitle,
  ctaSecondaryHref,
  ctaSecondaryLabel,
  blogTag,
}: TopicDetailTemplateProps) {
  const relevantServices = relevantServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceContent => Boolean(s));
  const relatedPosts = blogTag ? getPostsByTag(blogTag, 3) : [];

  return (
    <>
      <Breadcrumbs siteUrl={SITE_URL} items={breadcrumbItems} />

      <section className="mx-auto max-w-3xl px-6 pt-10 pb-16 text-center md:px-8">
        <RiseIn>
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            {heroHeadline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {heroSubhead}
          </p>
        </RiseIn>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <p className="text-sm leading-relaxed text-foreground/90">{context}</p>
        </div>
      </section>

      {body && body.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
          <PostContent body={body} />
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
        <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {relevantServices.length > 0 && <RelatedServicesRail services={relevantServices} />}
      <RelatedPosts posts={relatedPosts} />

      <CtaBand
        title={ctaTitle}
        description="Get a scoped estimate within 24 hours, no obligation to proceed."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
        secondaryHref={ctaSecondaryHref}
        secondaryLabel={ctaSecondaryLabel}
      />
    </>
  );
}
