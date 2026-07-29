import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { ShieldCheck, Zap, Layers, HeartHandshake } from "lucide-react";

const POINTS = [
  {
    icon: ShieldCheck,
    stat: "PCI-Aware",
    title: "Compliant by Default",
    description: "Every integration follows Stripe's own architecture guidance, not guesswork.",
  },
  {
    icon: Zap,
    stat: "1–2 Weeks",
    title: "Faster Time-to-Launch",
    description: "Checkout, Billing, and Connect flows shipped in days, not months.",
  },
  {
    icon: Layers,
    stat: "34 Services",
    title: "Full-Stack Coverage",
    description: "Payments, billing, marketplaces, and compliance — one team, not five vendors.",
  },
  {
    icon: HeartHandshake,
    stat: "30 Days",
    title: "Post-Launch Support",
    description: "We stay through the first billing cycle, not just to the demo.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="The Stripe Layer, Handled End to End"
        description="Most agencies bolt Stripe onto a broader dev contract. This is all we do — which means fewer surprises in production."
      />

      <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((point) => (
          <StaggerItem key={point.title}>
            <GlassCard className="h-full p-6">
              <point.icon className="h-6 w-6 text-accent" />
              <p className="mt-4 font-mono text-xs font-medium uppercase tracking-widest text-accent">
                {point.stat}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
