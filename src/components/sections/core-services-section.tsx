import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaButton } from "@/components/shared/cta-button";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import {
  CreditCard,
  RefreshCw,
  Store,
  Wallet,
  Briefcase,
  Code2,
  ArrowRight,
} from "lucide-react";

const CATEGORY_ICONS = {
  "core-payments": CreditCard,
  "billing-subscriptions": RefreshCw,
  "connect-marketplaces": Store,
  "payment-methods": Wallet,
  "business-tools": Briefcase,
  "developer-services": Code2,
} as const;

export function CoreServicesSection() {
  return (
    <section className="bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Core Stripe Services"
          title="Every Stripe Integration Service, In-House"
          description="34 services across 6 categories, from a single Checkout page to a full multi-party marketplace."
        />

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.slug];
            return (
              <StaggerItem key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
                >
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
                  <ul className="mt-3 flex-1 space-y-1.5 text-sm text-muted-foreground">
                    {category.services.slice(0, 3).map((service) => (
                      <li key={service.slug}>{service.name}</li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Explore category
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <CtaButton href="/services" variant="secondary" showArrow>
            View All Services
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
