interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  siteUrl,
}: {
  name: string;
  description: string;
  url: string;
  siteUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Ledger & Co.",
      url: siteUrl,
    },
    areaServed: "Worldwide",
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  siteUrl,
  authorName,
  publishedAt,
  updatedAt,
}: {
  title: string;
  description: string;
  url: string;
  siteUrl: string;
  authorName: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Ledger & Co.",
      url: siteUrl,
    },
  };
}

export function buildOrganizationSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ledger & Co.",
    url: siteUrl,
    description:
      "Independent Stripe integration partner for SaaS, marketplaces, and e-commerce.",
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
