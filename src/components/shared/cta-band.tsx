import { CtaButton } from "@/components/shared/cta-button";
import { FadeIn } from "@/components/motion/fade-in";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  microcopy?: string;
}

export function CtaBand({
  eyebrow = "Get Started",
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  microcopy,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(13,148,136,0.18),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
        <FadeIn>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight text-ink-foreground md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton href={primaryHref} size="lg" showArrow>
              {primaryLabel}
            </CtaButton>
            {secondaryHref && secondaryLabel && (
              <CtaButton href={secondaryHref} variant="secondary" size="lg" className="border-white/15 bg-transparent text-ink-foreground hover:bg-white/5">
                {secondaryLabel}
              </CtaButton>
            )}
          </div>
          {microcopy && (
            <p className="mt-4 text-xs text-ink-muted">{microcopy}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
