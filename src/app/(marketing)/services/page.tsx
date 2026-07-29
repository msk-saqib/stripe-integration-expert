import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CategoryGrid } from "@/components/services/category-grid";
import { FilterableServiceDirectory } from "@/components/services/filterable-service-directory";
import { CtaBand } from "@/components/shared/cta-band";
import { getAllCategories, getAllServices } from "@/lib/content/services";

export const metadata: Metadata = buildMetadata({
  title: "Stripe Integration Services",
  description:
    "Every Stripe integration service, in-house — Checkout, Billing, Connect, payment methods, compliance, and developer support across 34 services.",
  path: "/services",
});

export default function ServicesHubPage() {
  const categories = getAllCategories();
  const services = getAllServices();

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center md:px-8 md:pt-32">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Services
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Every Stripe Integration Service, In-House
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {services.length} services across {categories.length} categories — from a single
          Checkout page to a full multi-party marketplace.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <CategoryGrid categories={categories} services={services} />
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight">
            Browse All Services
          </h2>
          <div className="mt-10">
            <FilterableServiceDirectory categories={categories} services={services} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Not Sure Which Service You Need?"
        description="Book a free consultation and we'll help you scope the right engagement."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
