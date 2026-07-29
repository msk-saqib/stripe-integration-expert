import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items, siteUrl }: { items: BreadcrumbItem[]; siteUrl: string }) {
  const schema = buildBreadcrumbSchema(
    items.map((item) => ({ name: item.name, url: `${siteUrl}${item.href}` })),
  );

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-6 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
