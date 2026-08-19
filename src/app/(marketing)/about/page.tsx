import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { GlassCard } from "@/components/shared/glass-card";
import { RiseIn } from "@/components/motion/rise-in";
import { cn } from "@/lib/utils";
import { Target, Users, ShieldCheck, KeyRound } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Stripe Experts",
  description:
    "Stripe Experts is an independent team of Stripe integration specialists: not a Stripe clone, not a payment gateway, just the engineering layer done right.",
  path: "/about",
});

interface TeamMember {
  name: string;
  role: string;
  /** Renders only when set — better an absent line than a placeholder one. */
  bio?: string;
}

// TODO: add a headshot for each member.
const TEAM: TeamMember[] = [
  {
    name: "Zeeshan",
    role: "Founder",
    bio: "Senior lead full-stack developer with 8+ years building mobile apps, websites, and payment integrations.",
  },
];

// These are public commitments to clients — every line here must stay true of how
// engagements actually run.
const SECURITY_PRACTICES = [
  "We request restricted API keys scoped to only the permissions an engagement needs, never full secret-key access.",
  "An NDA is available on request before any account access is shared.",
];

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
          <RiseIn>
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
              About Stripe Experts
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink-foreground md:text-5xl">
              We Only Build on Stripe. That&apos;s the Whole Pitch.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              Most agencies treat payments as one line item in a broader dev contract.
              We treat it as the entire job, because a broken webhook or a
              misconfigured Connect account costs real revenue, not just engineering time.
            </p>
          </RiseIn>
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

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <SectionHeading eyebrow="Who You'd Work With" title="The Team" />
        {/* A lone card stretched across a 3-column grid reads as "two people left".
            The grid only kicks in once there is more than one member. */}
        <div
          className={cn(
            "mt-14 grid gap-6",
            TEAM.length > 1 ? "md:grid-cols-3" : "max-w-md",
          )}
        >
          {TEAM.map((member) => (
            <GlassCard key={member.name} className="h-full p-6">
              <div className="h-16 w-16 rounded-full bg-muted" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-accent">{member.role}</p>
              {member.bio && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              )}
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-8 md:pb-32">
        <SectionHeading
          eyebrow="Handling Your Credentials"
          title="How We Treat Your Stripe Keys"
        />
        <ul className="mt-10 space-y-4">
          {SECURITY_PRACTICES.map((practice) => (
            <li key={practice} className="flex items-start gap-3">
              <KeyRound className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-foreground/90">{practice}</span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Want to Work With Us?"
        description="Tell us what you're building and we'll scope it within 24 hours."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
        secondaryHref="/services"
        secondaryLabel="See Our Services"
      />
    </>
  );
}
