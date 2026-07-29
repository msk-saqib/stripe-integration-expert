import { CtaButton } from "@/components/shared/cta-button";

export default function CategoryNotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center md:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Category Not Found</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        That service category doesn&apos;t exist. Browse the full list below.
      </p>
      <div className="mt-8">
        <CtaButton href="/services" showArrow>
          View All Services
        </CtaButton>
      </div>
    </section>
  );
}
