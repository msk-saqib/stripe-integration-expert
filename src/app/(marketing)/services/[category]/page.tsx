import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ServiceCard } from "@/components/services/service-card";
import { CtaBand } from "@/components/shared/cta-band";
import {
  getAllCategories,
  getCategoryBySlug,
  getServicesByCategory,
} from "@/lib/content/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ledgerandco.example.com";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return buildMetadata({
    title: category.name,
    description: category.heroDescription,
    path: `/services/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const services = getServicesByCategory(category.slug);

  return (
    <>
      <Breadcrumbs
        siteUrl={SITE_URL}
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: category.name, href: `/services/${category.slug}` },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 pt-10 pb-16 text-center md:px-8">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {category.name}
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          {category.heroTitle}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {category.heroDescription}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${category.slug}/${service.slug}`}
              name={service.name}
              description={service.heroSubhead}
            />
          ))}
        </div>
      </section>

      <CtaBand
        title={`Ready to Get Started With ${category.name}?`}
        description="Book a free consultation and get a clear scope within 24 hours."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
        secondaryHref="/services"
        secondaryLabel="View All Categories"
      />
    </>
  );
}
