import { CtaButton } from "@/components/shared/cta-button";

export default function FrameworkNotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center md:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Framework Not Found</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        That framework page doesn&apos;t exist. Browse all supported platforms below.
      </p>
      <div className="mt-8">
        <CtaButton href="/platforms" showArrow>
          View All Platforms
        </CtaButton>
      </div>
    </section>
  );
}
