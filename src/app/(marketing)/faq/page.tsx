import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFaqPageSchema } from "@/lib/seo/structured-data";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaBand } from "@/components/shared/cta-band";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Stripe integration timelines, pricing, compliance, and support.",
  path: "/faq",
});

export default function FaqPage() {
  const schema = buildFaqPageSchema(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          FAQ
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Frequently Asked Questions
        </h1>
        <div className="mt-14">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Didn't Find Your Answer?"
        description="Ask us directly. We respond within one business day."
        primaryHref="/book-a-consultation"
        primaryLabel="Contact Us"
      />
    </>
  );
}
