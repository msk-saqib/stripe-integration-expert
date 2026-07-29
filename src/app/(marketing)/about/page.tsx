import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { GlassCard } from "@/components/shared/glass-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Target, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Ledger & Co. is an independent team of Stripe integration specialists — not a Stripe clone, not a payment gateway, just the engineering layer done right.",
  path: "/about",
});

const VALUES = [
  {
    icon: Target,
    title: "Stripe-Only Focus",
    description:
      "We don't spread across every payment provider. Depth in one platform beats breadth across ten.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-First",
    description:
      "PCI scope, tax nexus, and fraud rules are considered from the first architecture conversation, not bolted on after launch.",
  },
  {
    icon: Users,
    title: "Long-Term Partners",
    description:
      "Most engagements start with a single integration and turn into an ongoing support relationship as clients scale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <FadeIn>
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
              About Ledger & Co.
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink-foreground md:text-5xl">
              We Only Build on Stripe. That&apos;s the Whole Pitch.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              Most agencies treat payments as one line item in a broader dev contract.
              We treat it as the entire job — because a broken webhook or a
              misconfigured Connect account costs real revenue, not just engineering time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <SectionHeading
          eyebrow="What We Believe"
          title="Three Principles Behind Every Engagement"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((value) => (
            <GlassCard key={value.title} className="h-full p-6">
              <value.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want to Work With Us?"
        description="Tell us what you're building and we'll scope it within 24 hours."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
        secondaryHref="/case-studies"
        secondaryLabel="See Our Work"
      />
    </>
  );
}
