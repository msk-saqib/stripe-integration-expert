"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MAIN_NAV, SERVICE_CATEGORIES } from "@/lib/constants";
import { CtaButton } from "@/components/shared/cta-button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-foreground lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 px-4 pb-8">
          <Accordion className="w-full">
            <AccordionItem value="services">
              <AccordionTrigger className="text-base font-medium">
                Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  {SERVICE_CATEGORIES.map((category) => (
                    <div key={category.slug}>
                      <Link
                        href={`/services/${category.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        {category.name}
                      </Link>
                      <ul className="mt-2 space-y-2">
                        {category.services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${category.slug}/${service.slug}`}
                              onClick={() => setOpen(false)}
                              className="text-sm text-foreground/80"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {MAIN_NAV.filter((item) => item.name !== "Services").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 text-base font-medium text-foreground"
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-6">
            <CtaButton href="/book-a-consultation" className="w-full" showArrow>
              Book a Free Consultation
            </CtaButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
