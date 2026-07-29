import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { TESTIMONIALS } from "@/lib/constants";
import { ShieldCheck, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Consultation",
  description:
    "Book a free, no-obligation Stripe integration consultation. Get a clear project scope and estimate within 24 hours.",
  path: "/book-a-consultation",
});

const REASSURANCE_POINTS = [
  { icon: Clock, text: "30-minute call, scheduled around you" },
  { icon: MessageCircle, text: "Written scope and estimate within 24 hours" },
  { icon: ShieldCheck, text: "No obligation to proceed" },
];

export default function BookAConsultationPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-32">
      <div>
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Free Consultation
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl">
          Get a Clear Scope for Your Stripe Integration
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Answer a few quick questions and we&apos;ll follow up with a written plan —
          no sales pitch, just an honest assessment of what it&apos;ll take.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8">
          <ConsultationForm />
        </div>
      </div>

      <aside className="space-y-8">
        <div className="rounded-2xl border border-border bg-muted/40 p-6">
          <h2 className="text-sm font-semibold">What Happens Next</h2>
          <ul className="mt-4 space-y-3">
            {REASSURANCE_POINTS.map((point) => (
              <li key={point.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                <point.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <TestimonialCard {...TESTIMONIALS[0]} />
      </aside>
    </section>
  );
}
