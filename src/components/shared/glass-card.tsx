import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "ink";
}

export function GlassCard({ children, className, tone = "light" }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border backdrop-blur-xl",
        tone === "ink"
          ? "border-white/10 bg-white/5"
          : "border-border/60 bg-white/60",
        className,
      )}
    >
      {children}
    </div>
  );
}
