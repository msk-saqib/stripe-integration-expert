import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
              Stripe <span className="text-accent">Experts</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Trusted Stripe integration services for SaaS, marketplaces, and e-commerce.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Stripe Experts. All rights reserved.</p>
          <p>Not affiliated with Stripe, Inc. Independent Stripe integration partner.</p>
        </div>
      </div>
    </footer>
  );
}
