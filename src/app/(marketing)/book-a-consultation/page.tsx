import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { BookingWidget } from "@/components/forms/booking-widget";
import { ContactForm } from "@/components/forms/contact-form";
import { ShieldCheck, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Consultation",
  description:
    "Book a free, no-obligation 30-minute Stripe integration consultation directly on our calendar, or send us a message.",
  path: "/book-a-consultation",
});

const REASSURANCE_POINTS = [
  { icon: Clock, text: "30-minute call, pick a time that works for you" },
  { icon: MessageCircle, text: "Honest, no-pressure advice on what it'll take" },
  { icon: ShieldCheck, text: "No obligation to proceed" },
];

export default function BookAConsultationPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
      <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
        Free Consultation
      </span>
      <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight">
        Let&apos;s Talk About Your Integration
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
        Pick a time that works for you, or send us a message: no sales pitch,
        just an honest assessment of what it&apos;ll take.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-lg font-semibold">Schedule Your Call</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            30 minutes, no obligation to proceed.
          </p>
          <div className="mt-6">
            <BookingWidget />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-lg font-semibold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            We respond to every inquiry within one business day.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-8">
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
    </section>
  );
}
