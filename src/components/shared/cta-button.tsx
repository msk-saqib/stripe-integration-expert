import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  showArrow?: boolean;
  className?: string;
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  showArrow = false,
  className,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "cursor-pointer",
        size === "default" ? "h-11 px-6 text-sm" : "h-12 px-8 text-base",
        variant === "primary" &&
          "bg-accent text-accent-foreground shadow-[0_0_0_0_rgba(13,148,136,0)] hover:bg-[#0f766e] hover:shadow-[0_0_24px_2px_rgba(13,148,136,0.35)]",
        variant === "secondary" &&
          "border border-border bg-card text-foreground hover:border-accent/50 hover:bg-muted",
        variant === "ghost" &&
          "text-foreground hover:text-accent",
        className,
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
