import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { INDUSTRIES } from "@/lib/constants";
import {
  Building2,
  Store,
  HeartPulse,
  GraduationCap,
  Bike,
  Plane,
  Ticket,
  Landmark,
  Home,
  Truck,
} from "lucide-react";

const INDUSTRY_ICONS = {
  saas: Building2,
  marketplace: Store,
  healthcare: HeartPulse,
  education: GraduationCap,
  "food-delivery": Bike,
  travel: Plane,
  events: Ticket,
  finance: Landmark,
  "real-estate": Home,
  logistics: Truck,
} as const;

export function IndustriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Built for Your Vertical's Payment Realities"
        description="Every industry has different compliance, payout, and payment-method expectations. We've shipped for most of them."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {INDUSTRIES.map((industry) => {
          const Icon = INDUSTRY_ICONS[industry.slug];
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all duration-200 hover:border-accent/40 hover:shadow-md"
            >
              <Icon className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">{industry.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
