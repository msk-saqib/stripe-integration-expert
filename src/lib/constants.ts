export const SERVICE_CATEGORIES = [
  {
    name: "Core Stripe Services",
    slug: "core-payments",
    services: [
      { name: "Stripe Checkout", slug: "stripe-checkout" },
      { name: "Payment Element", slug: "payment-element" },
      { name: "Embedded Checkout", slug: "embedded-checkout" },
      { name: "Payment Links", slug: "payment-links" },
    ],
  },
  {
    name: "Subscription Services",
    slug: "billing-subscriptions",
    services: [
      { name: "Stripe Billing", slug: "stripe-billing" },
      { name: "Recurring Payments", slug: "recurring-payments" },
      { name: "Customer Portal", slug: "customer-portal" },
      { name: "Usage Billing", slug: "usage-billing" },
    ],
  },
  {
    name: "Marketplace Services",
    slug: "connect-marketplaces",
    services: [
      { name: "Connect Standard", slug: "stripe-connect-standard" },
      { name: "Connect Express", slug: "stripe-connect-express" },
      { name: "Connect Custom", slug: "stripe-connect-custom" },
      { name: "Marketplace Development", slug: "marketplace-development" },
    ],
  },
  {
    name: "Payment Methods",
    slug: "payment-methods",
    services: [
      { name: "Apple Pay", slug: "apple-pay" },
      { name: "Google Pay", slug: "google-pay" },
      { name: "ACH", slug: "ach" },
      { name: "SEPA", slug: "sepa" },
      { name: "Klarna", slug: "klarna" },
      { name: "Afterpay", slug: "afterpay" },
      { name: "Link", slug: "link" },
      { name: "Bank Transfers", slug: "bank-transfers" },
    ],
  },
  {
    name: "Business Features",
    slug: "business-tools",
    services: [
      { name: "Tax", slug: "stripe-tax" },
      { name: "Radar", slug: "stripe-radar" },
      { name: "Identity", slug: "stripe-identity" },
      { name: "Invoicing", slug: "stripe-invoicing" },
      { name: "Financial Connections", slug: "financial-connections" },
      { name: "Terminal", slug: "stripe-terminal" },
    ],
  },
  {
    name: "Developer Services",
    slug: "developer-services",
    services: [
      { name: "API Integration", slug: "api-integration" },
      { name: "Webhooks", slug: "webhooks" },
      { name: "Stripe SDK", slug: "stripe-sdk" },
      { name: "Migration", slug: "migration" },
      { name: "Bug Fixes", slug: "bug-fixes" },
      { name: "Performance Optimization", slug: "performance-optimization" },
      { name: "PCI Compliance", slug: "pci-compliance" },
      { name: "Security Review", slug: "security-review" },
    ],
  },
] as const;

export const MAIN_NAV = [
  { name: "Services", href: "/services" },
  { name: "Platforms", href: "/platforms" },
  { name: "Industries", href: "/industries" },
  { name: "Blog", href: "/blog" },
] as const;

export const FOOTER_LINKS = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/book-a-consultation" },
  ],
  Services: [
    { name: "All Services", href: "/services" },
    { name: "Stripe Checkout", href: "/services/core-payments/stripe-checkout" },
    { name: "Stripe Connect", href: "/services/connect-marketplaces/stripe-connect-standard" },
    { name: "Stripe Billing", href: "/services/billing-subscriptions/stripe-billing" },
  ],
  Industries: [
    { name: "SaaS", href: "/industries/saas" },
    { name: "Marketplace", href: "/industries/marketplace" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Fintech", href: "/industries/finance" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
} as const;

export const INDUSTRIES = [
  { name: "SaaS", slug: "saas" },
  { name: "Marketplace", slug: "marketplace" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Education", slug: "education" },
  { name: "Food Delivery", slug: "food-delivery" },
  { name: "Travel", slug: "travel" },
  { name: "Events", slug: "events" },
  { name: "Finance", slug: "finance" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Logistics", slug: "logistics" },
] as const;

export const FRAMEWORKS = [
  { name: "Next.js", slug: "nextjs" },
  { name: "React", slug: "react" },
  { name: "React Native", slug: "react-native" },
  { name: "Flutter", slug: "flutter" },
  { name: "Laravel", slug: "laravel" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Express", slug: "express" },
  { name: "Django", slug: "django" },
  { name: "ASP.NET", slug: "aspnet" },
  { name: "PHP", slug: "php" },
  { name: "Ruby on Rails", slug: "ruby-on-rails" },
] as const;

export const CMS_PLATFORMS = [
  { name: "Shopify", slug: "shopify" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Magento", slug: "magento" },
  { name: "BigCommerce", slug: "bigcommerce" },
  { name: "Webflow", slug: "webflow" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Wix", slug: "wix" },
] as const;

export const STRIPE_FEATURES = [
  "Checkout Sessions",
  "Payment Intents",
  "Webhooks",
  "Connect Onboarding",
  "Subscriptions & Metering",
  "Tax Calculation",
  "Radar Fraud Rules",
  "Invoicing",
  "Payouts",
  "Multi-currency Support",
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We review your product, existing payment flow (if any), and compliance requirements.",
  },
  {
    step: "02",
    title: "Architecture & Planning",
    description:
      "We map the exact Stripe products, account types, and data flow your business needs.",
  },
  {
    step: "03",
    title: "Integration & Testing",
    description:
      "Build against Stripe's test mode with full webhook, edge-case, and load testing.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Go live with a monitored cutover and rollback plan in place.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description:
      "Post-launch monitoring, bug fixes, and optimization as you scale.",
  },
] as const;

export const FAQS = [
  {
    question: "How long does a typical Stripe integration take?",
    answer:
      "Most Checkout or Payment Element integrations ship in 1–2 weeks. Connect marketplaces and complex Billing setups typically run 4–8 weeks depending on account-type and compliance requirements.",
  },
  {
    question: "Do you work with our existing tech stack?",
    answer:
      "Yes, we integrate across Next.js, React, React Native, Flutter, Laravel, Node.js, Django, and more, plus CMS platforms like Shopify, WooCommerce, and Webflow.",
  },
  {
    question: "Can you fix an integration you didn't originally build?",
    answer:
      "Yes, this is one of our most common engagements: webhook failures, billing discrepancies, and checkout bugs on integrations built by other teams.",
  },
  {
    question: "Do you help with PCI compliance?",
    answer:
      "Yes. We assess PCI scope, recommend the correct SAQ type for your architecture, and provide documentation ready for your own compliance audits.",
  },
  {
    question: "What does a free consultation actually include?",
    answer:
      "A 30-minute call to understand your current setup and goals, followed by a written scope and estimate within 24 hours. No obligation to proceed.",
  },
] as const;
