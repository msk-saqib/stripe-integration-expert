import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { STRIPE_FEATURES } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Stripe Features We Implement"
        title="Deep Stripe Coverage, Not Surface-Level Setup"
      />

      <StaggerContainer className="mt-14 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {STRIPE_FEATURES.map((feature) => (
          <StaggerItem key={feature} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm font-medium">{feature}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
