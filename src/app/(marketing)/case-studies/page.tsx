import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { CtaBand } from "@/components/shared/cta-band";
import { getAllCaseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real Stripe integration projects with real metrics — billing migrations, marketplace builds, and webhook recovery.",
  path: "/case-studies",
});

export default function CaseStudiesHubPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center md:px-8 md:pt-32">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Case Studies
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Real Integrations, Real Metrics
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          A look at how we scope, build, and ship Stripe integrations for real clients.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <CtaBand
        title="Want Results Like These?"
        description="Book a free consultation and get a clear scope within 24 hours."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
