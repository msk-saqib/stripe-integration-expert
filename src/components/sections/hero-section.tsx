import { CtaButton } from "@/components/shared/cta-button";
import { FadeIn } from "@/components/motion/fade-in";
import { ShieldCheck, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(13,148,136,0.2),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
        <FadeIn>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            <ShieldCheck className="h-3.5 w-3.5" />
            Independent Stripe Integration Specialists
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink-foreground md:text-6xl">
            Stripe Integrations Built by People Who Ship Them Every Day.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Checkout, Billing, Connect, and everything in between — architected,
            tested, and launched by a team that only does Stripe.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton href="/book-a-consultation" size="lg" showArrow>
              Book a Free Consultation
            </CtaButton>
            <CtaButton
              href="/services"
              variant="secondary"
              size="lg"
              className="border-white/15 bg-transparent text-ink-foreground hover:bg-white/5"
            >
              Explore Our Services
            </CtaButton>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5 text-highlight">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span>Rated 4.9/5 by clients</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden />
            <span>50+ integrations shipped</span>
            <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden />
            <span>PCI-aware from day one</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
