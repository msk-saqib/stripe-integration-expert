import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Clients Say After Launch" />

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <TestimonialCard {...testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
