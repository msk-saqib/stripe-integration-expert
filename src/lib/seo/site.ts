/**
 * Single source of truth for every identity/SEO value that appears in more than
 * one place (metadata, JSON-LD, sitemap, robots, llms.txt, OG images).
 *
 * Anything here that is not yet known is `null` rather than a placeholder string —
 * emitting a fake handle or an empty `sameAs` is worse for SEO than emitting nothing.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stripe-experts.com"
).replace(/\/$/, "");

export const SITE_NAME = "Stripe Experts";

export const SITE_DESCRIPTION =
  "Trusted Stripe integration services for SaaS, marketplaces, and e-commerce. Checkout, Billing, Connect, and custom Stripe development, done right the first time.";

export const SITE_TAGLINE = "Independent Stripe Integration Specialists";

export const CONTACT_EMAIL = process.env.LEAD_INBOX ?? "stripeexpertdev@gmail.com";

/** Absolute URL to the square brand mark used as the JSON-LD Organization logo. */
export const LOGO_URL = `${SITE_URL}/icon-512.png`;
export const LOGO_SIZE = 512;

/**
 * X/Twitter handle, including the leading "@". Emitted as twitter:site and
 * twitter:creator. Must match a live account — a handle pointing at a
 * non-existent account suppresses the card rather than improving it.
 */
export const TWITTER_HANDLE: string | null = "@stripe_experts";

/**
 * Live profile URLs, published as the Organization's schema.org `sameAs`. This is
 * how Google reconciles the site and the social accounts into a single entity, so
 * only add profiles that genuinely exist and are publicly reachable.
 */
export const SOCIAL_PROFILE_URLS: readonly string[] = ["https://x.com/stripe_experts"];

// Search Console ownership is verified by DNS TXT record at the registrar, which
// establishes it at the domain level for every subdomain and protocol. No
// verification meta tag belongs in this codebase.

/** Locale advertised to Open Graph consumers. */
export const OG_LOCALE = "en_US";

/** Absolute URL helper — every canonical/JSON-LD URL should go through this. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Widens a `YYYY-MM-DD` content date to full ISO 8601 with a timezone, which is
 * what Google and the Open Graph article:* properties ask for. Already-full
 * timestamps pass through unchanged.
 */
export function toIsoDate(date: string): string {
  return new Date(date).toISOString();
}

/** URL of the dynamically rendered OG image for a given title/kicker pair. */
export function ogImageUrl(title: string, kicker?: string): string {
  const params = new URLSearchParams({ title });
  if (kicker) params.set("kicker", kicker);
  return `${SITE_URL}/og?${params.toString()}`;
}
