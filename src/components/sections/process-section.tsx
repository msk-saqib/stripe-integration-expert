import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section className="bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Development Process"
          title="How We Ship Your Integration"
        />

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <StaggerItem key={step.step} className="relative">
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                <span className="font-heading text-3xl font-semibold text-accent/30">
                  {step.step}
                </span>
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden h-px flex-1 bg-border md:mt-3 md:block md:w-full"
                  />
                )}
              </div>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
