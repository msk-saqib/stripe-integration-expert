import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CreditCard,
  RefreshCw,
  Store,
  Wallet,
  Briefcase,
  Code2,
} from "lucide-react";
import type { CategoryContent, ServiceContent } from "@/lib/content/services";

const CATEGORY_ICONS = {
  "core-payments": CreditCard,
  "billing-subscriptions": RefreshCw,
  "connect-marketplaces": Store,
  "payment-methods": Wallet,
  "business-tools": Briefcase,
  "developer-services": Code2,
} as const;

export function CategoryGrid({
  categories,
  services,
}: {
  categories: CategoryContent[];
  services: ServiceContent[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const Icon = CATEGORY_ICONS[category.slug as keyof typeof CATEGORY_ICONS] ?? CreditCard;
        const count = services.filter((s) => s.category === category.slug).length;
        return (
          <Link
            key={category.slug}
            href={`/services/${category.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
          >
            <Icon className="h-7 w-7 text-accent" />
            <h2 className="mt-4 text-xl font-semibold">{category.name}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {category.heroDescription}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {count} services
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
