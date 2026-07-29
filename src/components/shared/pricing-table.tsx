import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/shared/cta-button";
import { PRICING_TIERS } from "@/lib/constants";

export function PricingTable() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PRICING_TIERS.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            "flex flex-col rounded-2xl border p-8",
            tier.highlighted
              ? "border-accent bg-card shadow-[0_0_40px_-12px_rgba(13,148,136,0.35)]"
              : "border-border bg-card",
          )}
        >
          {tier.highlighted && (
            <span className="mb-4 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Most Popular
            </span>
          )}
          <h3 className="text-lg font-semibold">{tier.name}</h3>
          <p className="mt-2 text-3xl font-semibold tracking-tight">{tier.price}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {tier.description}
          </p>
          <ul className="mt-6 flex-1 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <CtaButton
            href="/book-a-consultation"
            variant={tier.highlighted ? "primary" : "secondary"}
            className="mt-8 w-full"
          >
            Get Started
          </CtaButton>
        </div>
      ))}
    </div>
  );
}
