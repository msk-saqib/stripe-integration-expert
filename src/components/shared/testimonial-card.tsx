import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
      <div className="flex gap-0.5 text-highlight" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-foreground/90">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <div
          aria-hidden
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-heading text-sm font-semibold text-foreground"
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
