import Link from "next/link";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaBand } from "@/components/shared/cta-band";
import { RelatedServicesRail } from "@/components/services/related-services-rail";
import { RelatedPosts } from "@/components/blog/related-posts";
import { RiseIn } from "@/components/motion/rise-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { INDUSTRIES } from "@/lib/constants";
import { getRelatedServices, type CategoryContent, type ServiceContent } from "@/lib/content/services";
import { getPostsRelatedToService } from "@/lib/content/blog";
import { SITE_URL } from "@/lib/seo/site";

export function ServiceDetailTemplate({
  service,
  category,
}: {
  service: ServiceContent;
  category: CategoryContent;
}) {
  const related = getRelatedServices(service);
  const relatedPosts = getPostsRelatedToService(service.slug);
  const industryNames = service.industries
    .map((slug) => INDUSTRIES.find((i) => i.slug === slug))
    .filter((i): i is (typeof INDUSTRIES)[number] => Boolean(i));

  return (
    <>
      <Breadcrumbs
        siteUrl={SITE_URL}
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: category.name, href: `/services/${category.slug}` },
          { name: service.name, href: `/services/${category.slug}/${service.slug}` },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20 text-center md:px-8">
        <RiseIn>
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {category.name}
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            {service.heroHeadline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.heroSubhead}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-a-consultation"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-8 text-base font-medium text-accent-foreground transition-colors hover:bg-[#0f766e]"
            >
              {service.ctaLabel}
            </Link>
          </div>
        </RiseIn>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Why It Matters</h2>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">What&apos;s Included</h2>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {industryNames.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <h2 className="text-xl font-semibold">Common Industries</h2>
          <StaggerContainer className="mt-6 flex flex-wrap gap-3">
            {industryNames.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {industry.name}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
        <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      <RelatedServicesRail services={related} />
      <RelatedPosts posts={relatedPosts} />

      <CtaBand
        title={service.ctaLabel}
        description="Get a scoped estimate within 24 hours, no obligation to proceed."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
        secondaryHref={`/services/${category.slug}`}
        secondaryLabel={`More ${category.name}`}
      />
    </>
  );
}
