import Link from "next/link";
import { MAIN_NAV } from "@/lib/constants";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { CtaButton } from "@/components/shared/cta-button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          Ledger<span className="text-accent">&</span>Co.
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <MegaMenu />
          {MAIN_NAV.filter((item) => item.name !== "Services").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <CtaButton href="/book-a-consultation" size="default">
              Book a Free Consultation
            </CtaButton>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
