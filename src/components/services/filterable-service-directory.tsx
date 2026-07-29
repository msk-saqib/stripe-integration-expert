"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/services/service-card";
import { cn } from "@/lib/utils";
import type { CategoryContent, ServiceContent } from "@/lib/content/services";

interface FilterableServiceDirectoryProps {
  categories: CategoryContent[];
  services: ServiceContent[];
}

export function FilterableServiceDirectory({
  categories,
  services,
}: FilterableServiceDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter services by category">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          className={cn(
            "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border bg-card text-muted-foreground hover:border-accent/40",
          )}
        >
          All ({services.length})
        </button>
        {categories.map((category) => {
          const count = services.filter((s) => s.category === category.slug).length;
          return (
            <button
              key={category.slug}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category.slug
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent/40",
              )}
            >
              {category.name} ({count})
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {filtered.length} service{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard
            key={service.slug}
            href={`/services/${service.category}/${service.slug}`}
            name={service.name}
            description={service.heroSubhead}
            categoryName={categories.find((c) => c.slug === service.category)?.name}
          />
        ))}
      </div>
    </div>
  );
}
