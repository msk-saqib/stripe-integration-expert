import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildServiceSchema, buildFaqPageSchema } from "@/lib/seo/structured-data";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { getAllServices, getCategoryBySlug, getServiceBySlug } from "@/lib/content/services";
import { absoluteUrl } from "@/lib/seo/site";

interface ServicePageProps {
  params: Promise<{ category: string; service: string }>;
}

export function generateStaticParams() {
  return getAllServices().map((service) => ({
    category: service.category,
    service: service.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service || service.category !== categorySlug) return {};

  const category = getCategoryBySlug(categorySlug);

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.category}/${service.slug}`,
    ogKicker: category?.name,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!service || !category || service.category !== categorySlug) {
    notFound();
  }

  const url = absoluteUrl(`/services/${service.category}/${service.slug}`);
  const serviceSchema = buildServiceSchema({
    name: service.name,
    description: service.metaDescription,
    url,
  });
  const faqSchema = buildFaqPageSchema(service.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceDetailTemplate service={service} category={category} />
    </>
  );
}
