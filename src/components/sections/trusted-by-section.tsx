import { LogoCloud } from "@/components/shared/logo-cloud";

const CLIENT_LOGOS = [
  { name: "Fieldnote" },
  { name: "Craftly" },
  { name: "Runway Health" },
  { name: "Lumen SaaS" },
  { name: "Northbeam" },
  { name: "Voyage Labs" },
] as const;

export function TrustedBySection() {
  return (
    <section className="border-y border-border bg-muted/40 py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-center font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by funded startups and Stripe-powered platforms
        </p>
        <div className="mt-8">
          <LogoCloud items={CLIENT_LOGOS} marquee />
        </div>
      </div>
    </section>
  );
}
