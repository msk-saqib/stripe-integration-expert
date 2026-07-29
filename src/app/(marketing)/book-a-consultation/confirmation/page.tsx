import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CtaButton } from "@/components/shared/cta-button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Consultation Request Received",
  description: "We've received your consultation request and will follow up within 24 hours.",
  path: "/book-a-consultation/confirmation",
  noIndex: true,
});

export default function ConsultationConfirmationPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center md:px-8">
      <CheckCircle2 className="h-12 w-12 text-accent" />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">
        Request Received
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        We&apos;re reviewing your project details now. Expect a written scope and
        estimate in your inbox within 24 hours.
      </p>
      <div className="mt-8 flex gap-4">
        <CtaButton href="/services" variant="secondary">
          Explore Our Services
        </CtaButton>
        <CtaButton href="/">Back to Home</CtaButton>
      </div>
    </section>
  );
}
