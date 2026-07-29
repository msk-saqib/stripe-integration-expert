export function MetricHighlight({ metric, label }: { metric: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center">
      <p className="font-heading text-3xl font-semibold text-accent">{metric}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
