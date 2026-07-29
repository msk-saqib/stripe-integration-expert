import { SectionHeading } from "@/components/shared/section-heading";
import { CtaButton } from "@/components/shared/cta-button";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { getAllCaseStudies } from "@/lib/content/case-studies";

export function CaseStudiesSection() {
  const caseStudies = getAllCaseStudies().slice(0, 2);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Featured Case Studies"
        title="Real Integrations, Real Metrics"
      />

      <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <StaggerItem key={study.slug}>
            <CaseStudyCard study={study} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-12 text-center">
        <CtaButton href="/case-studies" variant="secondary" showArrow>
          View All Case Studies
        </CtaButton>
      </div>
    </section>
  );
}
