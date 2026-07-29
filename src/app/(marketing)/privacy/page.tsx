import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Ledger & Co. collects, uses, and protects your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2026</p>

      <div className="prose prose-slate mt-10 max-w-none space-y-6 text-sm leading-relaxed text-foreground/90">
        <p>
          [Placeholder — replace with counsel-reviewed copy before launch.] This
          page will describe what personal data is collected via our contact,
          consultation, and newsletter forms, how it is stored, who it is shared
          with (e.g. CRM/email providers), and how users can request deletion.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
        <p>Name, email, company, and project details submitted through our forms.</p>
        <h2 className="text-lg font-semibold text-foreground">How We Use It</h2>
        <p>
          To respond to inquiries, scope consultation requests, and — where
          opted in — send newsletter updates.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>Questions about this policy can be sent to hello@ledgerandco.example.com.</p>
      </div>
    </section>
  );
}
