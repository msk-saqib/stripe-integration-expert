import Link from "next/link";

export function CategoryBadge({ slug, name }: { slug: string; name: string }) {
  return (
    <Link
      href={`/blog/category/${slug}`}
      className="inline-flex rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-accent transition-colors hover:bg-accent/20"
    >
      {name}
    </Link>
  );
}
