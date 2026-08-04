import { CtaButton } from "@/components/shared/cta-button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center md:px-8">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
        That page moved or never existed.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Check the URL, or jump back into our services directory, guides, or book a free
        consultation.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <CtaButton href="/services" showArrow>
          Browse Services
        </CtaButton>
        <CtaButton href="/blog" variant="secondary">
          Read the Blog
        </CtaButton>
        <CtaButton href="/book-a-consultation" variant="ghost">
          Book a Consultation
        </CtaButton>
      </div>
    </section>
  );
}
