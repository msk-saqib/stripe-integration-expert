import { CtaButton } from "@/components/shared/cta-button";

export default function CaseStudyNotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center md:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Case Study Not Found</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        That case study doesn&apos;t exist, or the link may be out of date.
      </p>
      <div className="mt-8">
        <CtaButton href="/case-studies" showArrow>
          View All Case Studies
        </CtaButton>
      </div>
    </section>
  );
}
