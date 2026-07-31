import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { CtaBand } from "@/components/shared/cta-band";
import { getAllFrameworks, getAllCms } from "@/lib/content/platforms";

export const metadata: Metadata = buildMetadata({
  title: "Supported Platforms",
  description:
    "Stripe integration across every major framework and CMS: Next.js, React, Laravel, Shopify, WordPress, and more.",
  path: "/platforms",
});

export default function PlatformsHubPage() {
  const frameworks = getAllFrameworks();
  const cmsPlatforms = getAllCms();

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center md:px-8 md:pt-32">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          Supported Platforms
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          We Integrate With Whatever You&apos;ve Already Built
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          No rip-and-replace required. Stripe integrated correctly on top of your existing stack.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <h2 className="text-xl font-semibold">Frameworks</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((framework) => (
            <Link
              key={framework.slug}
              href={`/platforms/frameworks/${framework.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
            >
              <span className="font-medium">{framework.name}</span>
              <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>

        <h2 className="mt-16 text-xl font-semibold">CMS &amp; E-commerce Platforms</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cmsPlatforms.map((cms) => (
            <Link
              key={cms.slug}
              href={`/platforms/cms/${cms.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
            >
              <span className="font-medium">{cms.name}</span>
              <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Don't See Your Stack Listed?"
        description="We integrate with far more than what's listed here. Tell us what you're building."
        primaryHref="/book-a-consultation"
        primaryLabel="Book a Free Consultation"
      />
    </>
  );
}
