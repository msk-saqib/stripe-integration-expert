import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { MetricHighlight } from "@/components/case-studies/metric-highlight";
import { RelatedServicesRail } from "@/components/services/related-services-rail";
import { CtaBand } from "@/components/shared/cta-band";
import { FadeIn } from "@/components/motion/fade-in";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
} from "@/lib/content/case-studies";
import { getServiceBySlug, type ServiceContent } from "@/lib/content/services";
import { INDUSTRIES } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ledgerandco.example.com";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const servicesUsed = study.servicesUsed
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceContent => Boolean(s));
  const industry = INDUSTRIES.find((i) => i.slug === study.industry);

  return (
    <>
      <Breadcrumbs
        siteUrl={SITE_URL}
        items={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
          { name: study.client, href: `/case-studies/${study.slug}` },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 pt-10 pb-16 text-center md:px-8">
        <FadeIn>
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {study.client}
            {industry ? ` · ${industry.name}` : ""}
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            {study.title}
          </h1>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {study.results.map((result) => (
            <MetricHighlight key={result.label} metric={result.metric} label={result.label} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">The Challenge</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">{study.challenge}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">The Solution</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">{study.solution}</p>
          </div>
        </div>

        {study.testimonial && (
          <blockquote className="mt-10 rounded-2xl border border-border bg-muted/40 p-6">
            <p className="text-base italic leading-relaxed text-foreground/90">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium">
              {study.testimonial.name}
              <span className="font-normal text-muted-foreground">
                {" "}
                — {study.testimonial.role}
              </span>
            </footer>
          </blockquote>
        )}
      </section>

      {servicesUsed.length > 0 && <RelatedServicesRail services={servicesUsed} />}

      <CtaBand
        title="Want Results Like These?"
        description="Book a free consultation and get a clear scope within 24 hours."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
        secondaryHref="/case-studies"
        secondaryLabel="See More Case Studies"
      />
    </>
  );
}
