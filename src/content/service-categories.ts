export interface CategoryContent {
  slug: string;
  name: string;
  heroTitle: string;
  heroDescription: string;
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  "core-payments": {
    slug: "core-payments",
    name: "Core Stripe Services",
    heroTitle: "The Stripe Payment Flow, Built Right the First Time",
    heroDescription:
      "Checkout, Payment Element, Embedded Checkout, and Payment Links — the foundational products every Stripe integration starts with.",
  },
  "billing-subscriptions": {
    slug: "billing-subscriptions",
    name: "Subscription Services",
    heroTitle: "Recurring Revenue, Engineered Correctly",
    heroDescription:
      "Stripe Billing, recurring payments, customer self-service, and usage-based pricing — built to scale from 10 to 100,000 subscribers.",
  },
  "connect-marketplaces": {
    slug: "connect-marketplaces",
    name: "Marketplace Services",
    heroTitle: "Multi-Party Payments, Done by People Who've Shipped Them",
    heroDescription:
      "Stripe Connect in every account-type flavor, plus full marketplace architecture — split payments, payouts, and compliance handled.",
  },
  "payment-methods": {
    slug: "payment-methods",
    name: "Payment Methods",
    heroTitle: "Every Way Your Customers Want to Pay",
    heroDescription:
      "Apple Pay, Google Pay, ACH, SEPA, Klarna, Afterpay, Link, and bank transfers — configured correctly and tested across regions.",
  },
  "business-tools": {
    slug: "business-tools",
    name: "Business Features",
    heroTitle: "The Operational Layer Behind Every Great Payments Stack",
    heroDescription:
      "Tax, Radar, Identity, Invoicing, Financial Connections, and Terminal — the Stripe products that keep a business compliant and running.",
  },
  "developer-services": {
    slug: "developer-services",
    name: "Developer Services",
    heroTitle: "The Engineering Layer Most Agencies Skip",
    heroDescription:
      "API integration, webhooks, SDKs, migrations, bug fixes, performance, PCI compliance, and security review — for teams that need it done right.",
  },
};
