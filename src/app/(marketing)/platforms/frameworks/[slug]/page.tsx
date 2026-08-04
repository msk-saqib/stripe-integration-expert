import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFaqPageSchema } from "@/lib/seo/structured-data";
import { TopicDetailTemplate } from "@/components/shared/topic-detail-template";
import { getAllFrameworks, getFrameworkBySlug } from "@/lib/content/platforms";

interface FrameworkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllFrameworks().map((framework) => ({ slug: framework.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: FrameworkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const framework = getFrameworkBySlug(slug);
  if (!framework) return {};

  return buildMetadata({
    title: framework.metaTitle,
    description: framework.metaDescription,
    path: `/platforms/frameworks/${framework.slug}`,
    ogKicker: `Stripe + ${framework.name}`,
  });
}

export default async function FrameworkPage({ params }: FrameworkPageProps) {
  const { slug } = await params;
  const framework = getFrameworkBySlug(slug);
  if (!framework) notFound();

  const faqSchema = buildFaqPageSchema(framework.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TopicDetailTemplate
        breadcrumbItems={[
          { name: "Home", href: "/" },
          { name: "Platforms", href: "/platforms" },
          { name: framework.name, href: `/platforms/frameworks/${framework.slug}` },
        ]}
        eyebrow={`Stripe + ${framework.name}`}
        heroHeadline={framework.heroHeadline}
        heroSubhead={framework.heroSubhead}
        context={framework.context}
        body={framework.body}
        relevantServiceSlugs={framework.relevantServices}
        faqs={framework.faqs}
        blogTag={framework.slug}
        ctaTitle={`Get Stripe Integrated Into Your ${framework.name} Project`}
        ctaSecondaryHref="/platforms"
        ctaSecondaryLabel="See All Platforms"
      />
    </>
  );
}
