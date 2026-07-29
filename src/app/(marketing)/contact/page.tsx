import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with our Stripe integration team. We respond to every inquiry within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:px-8 md:py-32">
      <div>
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Contact
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight">
          Let&apos;s Talk About Your Integration
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          For a scoped project estimate, use{" "}
          <a href="/book-a-consultation" className="font-medium text-accent underline-offset-4 hover:underline">
            Book a Free Consultation
          </a>{" "}
          instead — it gets you a faster, more accurate response. This form is for
          general questions.
        </p>

        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-accent" />
            <span>hello@ledgerandco.example.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span>We respond within 1 business day</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8">
        <ContactForm />
      </div>
    </section>
  );
}
