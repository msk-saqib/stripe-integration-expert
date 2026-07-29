"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
    >
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        Services
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-40 w-[min(90vw,860px)] -translate-x-1/2 pt-4">
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 rounded-xl border border-border bg-card/95 p-6 shadow-lg backdrop-blur-xl">
            {SERVICE_CATEGORIES.map((category) => (
              <div key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-accent"
                >
                  {category.name}
                </Link>
                <ul className="mt-3 space-y-2">
                  {category.services.slice(0, 5).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${category.slug}/${service.slug}`}
                        className="text-sm text-foreground/80 transition-colors hover:text-accent"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between rounded-xl border border-border bg-muted px-6 py-3">
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-accent"
            >
              View all services →
            </Link>
            <Link
              href="/book-a-consultation"
              className="text-sm font-medium text-accent hover:text-[#0f766e]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
