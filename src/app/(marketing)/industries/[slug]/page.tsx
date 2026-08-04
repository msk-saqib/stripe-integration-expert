import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFaqPageSchema } from "@/lib/seo/structured-data";
import { TopicDetailTemplate } from "@/components/shared/topic-detail-template";
import { getAllIndustries, getIndustryBySlug } from "@/lib/content/industries";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllIndustries().map((industry) => ({ slug: industry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const faqSchema = buildFaqPageSchema(industry.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TopicDetailTemplate
        breadcrumbItems={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: industry.name, href: `/industries/${industry.slug}` },
        ]}
        eyebrow={`Stripe for ${industry.name}`}
        heroHeadline={industry.heroHeadline}
        heroSubhead={industry.heroSubhead}
        context={industry.context}
        body={industry.body}
        relevantServiceSlugs={industry.relevantServices}
        faqs={industry.faqs}
        ctaTitle={`Get Started With Stripe for ${industry.name}`}
        ctaSecondaryHref="/industries"
        ctaSecondaryLabel="See All Industries"
      />
    </>
  );
}
