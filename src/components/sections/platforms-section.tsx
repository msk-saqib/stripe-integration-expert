import { SectionHeading } from "@/components/shared/section-heading";
import { LogoCloud } from "@/components/shared/logo-cloud";
import { CtaButton } from "@/components/shared/cta-button";
import { FRAMEWORKS, CMS_PLATFORMS } from "@/lib/constants";

export function PlatformsSection() {
  return (
    <section className="bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Supported Platforms"
          title="We Integrate With Whatever You've Already Built"
          description="No rip-and-replace required — Stripe integrated correctly on top of your existing stack."
        />

        <div className="mt-14 space-y-10">
          <div>
            <p className="mb-4 text-center font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Frameworks
            </p>
            <LogoCloud items={FRAMEWORKS} />
          </div>
          <div>
            <p className="mb-4 text-center font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              CMS & E-commerce Platforms
            </p>
            <LogoCloud items={CMS_PLATFORMS} />
          </div>
        </div>

        <div className="mt-12 text-center">
          <CtaButton href="/platforms" variant="secondary" showArrow>
            See All Platforms
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
