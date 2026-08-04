import { cn } from "@/lib/utils";

/**
 * Above-the-fold counterpart to <FadeIn>. Renders as a plain server component with
 * a CSS animation, so the content is in the SSR HTML at full opacity as soon as
 * styles apply — no client bundle, no hydration wait, no LCP penalty.
 *
 * Use this for hero content. Use <FadeIn> only below the fold, where the
 * scroll-into-view trigger is the actual point.
 */
export function RiseIn({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  /** Seconds. Keep small — a delayed LCP element is a slow LCP element. */
  delay?: number;
}) {
  return (
    <div
      className={cn("animate-rise-in", className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
