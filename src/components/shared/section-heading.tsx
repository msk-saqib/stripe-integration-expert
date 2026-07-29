import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "inverted";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-mono text-xs font-medium uppercase tracking-[0.15em]",
            tone === "inverted" ? "text-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl",
          tone === "inverted" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            tone === "inverted" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
