import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CtaButton } from "@/components/shared/cta-button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Message Sent",
  description: "Thanks for reaching out. We'll be in touch within one business day.",
  path: "/book-a-consultation/thank-you",
  noIndex: true,
});

export default function ConsultationThankYouPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center md:px-8">
      <CheckCircle2 className="h-12 w-12 text-accent" />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">
        Message Sent
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Thanks for reaching out. We reply to every message within one business day.
      </p>
      <div className="mt-8">
        <CtaButton href="/" variant="secondary">
          Back to Home
        </CtaButton>
      </div>
    </section>
  );
}
