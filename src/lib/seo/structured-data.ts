import {
  CONTACT_EMAIL,
  LOGO_SIZE,
  LOGO_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILE_URLS,
  absoluteUrl,
} from "@/lib/seo/site";

/**
 * Stable @id values so every schema on the site references one Organization node
 * and one WebSite node, rather than re-declaring anonymous copies per page.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const organizationRef = { "@id": ORGANIZATION_ID };

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
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    provider: organizationRef,
    areaServed: "Worldwide",
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  authorName,
  publishedAt,
  updatedAt,
  image,
  section,
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  authorName: string;
  publishedAt: string;
  updatedAt: string;
  image?: string;
  section?: string;
  keywords?: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: publishedAt,
    dateModified: updatedAt,
    ...(image ? { image: [image] } : {}),
    ...(section ? { articleSection: section } : {}),
    ...(keywords && keywords.length > 0 ? { keywords: keywords.join(", ") } : {}),
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: organizationRef,
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/**
 * Emitted once, in the root layout. Uses @graph so the Organization and WebSite
 * nodes are declared together and can reference each other by @id.
 */
export function buildSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        email: CONTACT_EMAIL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: LOGO_URL,
          contentUrl: LOGO_URL,
          width: LOGO_SIZE,
          height: LOGO_SIZE,
          caption: SITE_NAME,
        },
        image: { "@id": `${SITE_URL}/#logo` },
        ...(SOCIAL_PROFILE_URLS.length > 0 ? { sameAs: [...SOCIAL_PROFILE_URLS] } : {}),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT_EMAIL,
          url: absoluteUrl("/book-a-consultation"),
          availableLanguage: ["English"],
        },
        knowsAbout: [
          "Stripe Checkout",
          "Stripe Billing",
          "Stripe Connect",
          "Payment Intents",
          "Stripe webhooks",
          "PCI DSS compliance",
          "Subscription billing",
          "Marketplace payments",
        ],
        // Not affiliated with Stripe, Inc. — stated on-page in the footer/terms too.
        disambiguatingDescription:
          "Independent Stripe integration partner. Not affiliated with, endorsed by, or sponsored by Stripe, Inc.",
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: organizationRef,
        inLanguage: "en",
      },
    ],
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
