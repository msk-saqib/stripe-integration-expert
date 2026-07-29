import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing use of the Ledger & Co. website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
      <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2026</p>

      <div className="prose prose-slate mt-10 max-w-none space-y-6 text-sm leading-relaxed text-foreground/90">
        <p>
          [Placeholder — replace with counsel-reviewed copy before launch.] This
          page will cover acceptable use of this website, service-engagement
          terms (scope, payment, liability limitations), and intellectual
          property.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Independent Partner Disclosure</h2>
        <p>
          Ledger & Co. is an independent Stripe integration partner and is not
          affiliated with, endorsed by, or sponsored by Stripe, Inc.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>Questions about these terms can be sent to hello@ledgerandco.example.com.</p>
      </div>
    </section>
  );
}
