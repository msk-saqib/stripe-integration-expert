import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaButton } from "@/components/shared/cta-button";
import { FAQS } from "@/lib/constants";

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
      <SectionHeading eyebrow="FAQs" title="Common Questions" />

      <div className="mt-14">
        <FaqAccordion items={FAQS} />
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">Still have questions?</p>
        <div className="mt-4">
          <CtaButton href="/faq" variant="secondary" showArrow>
            View Full FAQ
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
