import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const headlineResult = study.results[0];

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
    >
      <div>
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {study.client}
        </span>
        <h3 className="mt-3 text-xl font-semibold leading-snug">{study.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.blurb}</p>
      </div>
      {headlineResult && (
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="font-heading text-3xl font-semibold text-accent">
              {headlineResult.metric}
            </p>
            <p className="text-xs text-muted-foreground">{headlineResult.label}</p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
            Read case study
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      )}
    </Link>
  );
}
