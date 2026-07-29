import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/shared/section-heading";
import { PricingTable } from "@/components/shared/pricing-table";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent Stripe integration pricing — from a single Checkout page to full Connect marketplace builds and ongoing support retainers.",
  path: "/pricing",
});

const PRICING_FAQS = [
  {
    question: "Is the price fixed or hourly?",
    answer:
      "Fixed-scope for defined integrations. For ongoing support or ambiguous scope (e.g. auditing an existing integration), we quote a retainer after a short discovery call.",
  },
  {
    question: "What's included in post-launch support?",
    answer:
      "Bug fixes, webhook monitoring, and answering questions about the integration we built — not new feature development, which is scoped separately.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, typically 50% upfront and 50% on launch for fixed-scope projects. Enterprise engagements can be structured in milestones.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center md:px-8 md:pt-32">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Pricing
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Scoped Pricing, No Surprises
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Every engagement gets a written scope and fixed estimate before we start —
          the ranges below are a starting point for the free consultation.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <PricingTable />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-8 md:pb-32">
        <SectionHeading eyebrow="Pricing FAQs" title="Common Questions" />
        <div className="mt-14">
          <FaqAccordion items={PRICING_FAQS} />
        </div>
      </section>

      <CtaBand
        title="Not Sure Which Tier Fits?"
        description="Book a free consultation and we'll scope the right engagement for your project."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
