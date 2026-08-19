import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { CtaBand } from "@/components/shared/cta-band";
import { getAllIndustries } from "@/lib/content/industries";

export const metadata: Metadata = buildMetadata({
  title: "Stripe Integration by Industry",
  description:
    "Stripe integration services built for your vertical's payment realities: SaaS, marketplaces, healthcare, education, and more.",
  path: "/industries",
});

export default function IndustriesHubPage() {
  const industries = getAllIndustries();

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center md:px-8 md:pt-32">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Industries
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          Stripe Integration Built for Your Industry
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Every industry has different compliance, payout, and payment-method expectations.
          We&apos;ve shipped for most of them.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
            >
              <span className="font-medium">{industry.name}</span>
              <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Don't See Your Industry Listed?"
        description="Stripe's flexible enough for almost any vertical, tell us what you're building."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
