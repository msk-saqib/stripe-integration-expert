import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFaqPageSchema } from "@/lib/seo/structured-data";
import { TopicDetailTemplate } from "@/components/shared/topic-detail-template";
import { getAllCms, getCmsBySlug } from "@/lib/content/platforms";

interface CmsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCms().map((cms) => ({ slug: cms.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CmsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cms = getCmsBySlug(slug);
  if (!cms) return {};

  return buildMetadata({
    title: cms.metaTitle,
    description: cms.metaDescription,
    path: `/platforms/cms/${cms.slug}`,
  });
}

export default async function CmsPage({ params }: CmsPageProps) {
  const { slug } = await params;
  const cms = getCmsBySlug(slug);
  if (!cms) notFound();

  const faqSchema = buildFaqPageSchema(cms.faqs);

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
          { name: cms.name, href: `/platforms/cms/${cms.slug}` },
        ]}
        eyebrow={`Stripe + ${cms.name}`}
        heroHeadline={cms.heroHeadline}
        heroSubhead={cms.heroSubhead}
        context={cms.context}
        relevantServiceSlugs={cms.relevantServices}
        faqs={cms.faqs}
        blogTag={cms.slug}
        ctaTitle={`Get Stripe Integrated Into Your ${cms.name} Store`}
        ctaSecondaryHref="/platforms"
        ctaSecondaryLabel="See All Platforms"
      />
    </>
  );
}
