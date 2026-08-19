import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { PlatformsSection } from "@/components/sections/platforms-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/shared/cta-band";
import { buildFaqPageSchema } from "@/lib/seo/structured-data";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Stripe Experts | Trusted Stripe Integration Services",
  description:
    "Expert Stripe integration services for SaaS, marketplaces, and eCommerce. Checkout, Billing, Connect, subscriptions, and webhooks — built secure, scalable, and right the first time.",
  path: "/",
  ogKicker: "Stripe Integration Specialists",
  absoluteTitle: true,
});

export default function Home() {
  const faqSchema = buildFaqPageSchema(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CoreServicesSection />
      <IndustriesSection />
      <PlatformsSection />
      <FeaturesSection />
      <ProcessSection />
      <FaqSection />
      <CtaBand
        title="Ready to Get Your Stripe Integration Right?"
        description="Book a free, no-obligation consultation and get a clear scope within 24 hours."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
        secondaryHref="/services"
        secondaryLabel="Browse Services"
        microcopy="No obligation. Response within 24h."
      />
    </>
  );
}
