import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  href: string;
  name: string;
  description: string;
  categoryName?: string;
}

export function ServiceCard({ href, name, description, categoryName }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
    >
      {categoryName && (
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {categoryName}
        </span>
      )}
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
