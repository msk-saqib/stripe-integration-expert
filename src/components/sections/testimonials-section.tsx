import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/content/testimonials-data";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Client Feedback"
        title="What Clients Say"
        description="Reviews from completed Stripe integration engagements."
      />

      <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((testimonial, index) => (
          <StaggerItem key={`${testimonial.author}-${index}`}>
            <GlassCard className="flex h-full flex-col p-6">
              <div className="flex gap-0.5 text-highlight">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border/60 pt-4">
                <p className="text-sm font-semibold">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                  {testimonial.service}
                </p>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
