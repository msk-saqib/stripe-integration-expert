export default function ServicesLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <div className="mx-auto h-4 w-40 animate-pulse rounded bg-muted" />
      <div className="mx-auto mt-4 h-10 w-96 max-w-full animate-pulse rounded bg-muted" />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-2xl border border-border bg-muted" />
        ))}
      </div>
    </div>
  );
}
