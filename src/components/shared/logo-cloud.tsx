import { cn } from "@/lib/utils";

interface LogoCloudProps {
  items: readonly { name: string; slug?: string }[];
  className?: string;
  marquee?: boolean;
}

export function LogoCloud({ items, className, marquee = false }: LogoCloudProps) {
  const content = (
    <>
      {items.map((item) => (
        <div
          key={item.slug ?? item.name}
          className="flex shrink-0 items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-muted-foreground grayscale transition-all duration-200 hover:text-foreground hover:grayscale-0"
        >
          {item.name}
        </div>
      ))}
    </>
  );

  if (marquee) {
    return (
      <div
        className={cn(
          "group flex gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
          className,
        )}
      >
        <div className="flex shrink-0 animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {content}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee gap-4 group-hover:[animation-play-state:paused]"
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4", className)}>
      {content}
    </div>
  );
}
