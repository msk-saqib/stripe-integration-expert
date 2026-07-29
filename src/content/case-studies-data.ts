export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  blurb: string;
  servicesUsed: string[];
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fieldnote-billing-rebuild",
    client: "Fieldnote",
    industry: "saas",
    title: "Rebuilding Subscription Billing Without Losing a Single Customer",
    metaTitle: "Fieldnote: Stripe Billing Migration Case Study | Ledger & Co.",
    metaDescription:
      "How Fieldnote migrated to Stripe Billing with zero downtime and cut failed-payment churn by 34%.",
    blurb:
      "Migrated a legacy billing system to Stripe Billing with zero downtime and full history intact.",
    servicesUsed: ["stripe-billing", "customer-portal", "migration"],
    challenge:
      "Fieldnote's homegrown billing system was breaking under the weight of manual proration logic and inconsistent dunning emails, and rebuilding it risked forcing thousands of subscribers to re-enter payment details.",
    solution:
      "We migrated Fieldnote's subscriber base to Stripe Billing using provider-to-provider card migration, ran both systems in parallel through one full billing cycle, and replaced the manual dunning process with Stripe's Smart Retries and a branded Customer Portal.",
    results: [
      { metric: "34%", label: "reduction in failed-payment churn" },
      { metric: "0", label: "customers required to re-enter card details" },
      { metric: "3 weeks", label: "from kickoff to full cutover" },
    ],
    testimonial: {
      quote:
        "They rebuilt our entire billing system on Stripe in three weeks. Failed-payment churn dropped almost immediately.",
      name: "Priya Nair",
      role: "CTO, Fieldnote",
    },
  },
  {
    slug: "craftly-connect-marketplace",
    client: "Craftly",
    industry: "marketplace",
    title: "A Two-Sided Marketplace Built on Stripe Connect Express",
    metaTitle: "Craftly: Stripe Connect Marketplace Case Study | Ledger & Co.",
    metaDescription:
      "How Craftly launched a compliant, two-sided marketplace on Stripe Connect Express in three weeks.",
    blurb:
      "Branded onboarding, automated payouts, and compliant KYC across thousands of sellers.",
    servicesUsed: ["stripe-connect-express", "marketplace-development", "stripe-identity"],
    challenge:
      "Craftly needed to onboard thousands of independent sellers with a branded, low-friction flow, without taking on the compliance burden of building KYC verification themselves.",
    solution:
      "We architected the marketplace on Stripe Connect Express, giving Craftly a fully branded onboarding UI while Stripe handled identity verification and 1099 tax form generation. Payout schedules were configured per-seller category to match Craftly's existing cash-flow commitments.",
    results: [
      { metric: "3 weeks", label: "from architecture to launch" },
      { metric: "2,400+", label: "sellers onboarded in the first quarter" },
      { metric: "0", label: "compliance incidents post-launch" },
    ],
    testimonial: {
      quote:
        "We needed a Connect marketplace that wouldn't fall over at scale. This was the first team that actually understood the account-type tradeoffs.",
      name: "Marcus Webb",
      role: "Founder, Craftly",
    },
  },
  {
    slug: "runway-health-webhook-recovery",
    client: "Runway Health",
    industry: "healthcare",
    title: "Finding and Fixing Silent Webhook Failures Before They Cost Revenue",
    metaTitle: "Runway Health: Stripe Webhook Audit Case Study | Ledger & Co.",
    metaDescription:
      "How Runway Health uncovered months of silently dropped Stripe webhook events and rebuilt for reliability.",
    blurb:
      "Our webhook handling was silently dropping events for months before they found it. Fixed in a day.",
    servicesUsed: ["webhooks", "bug-fixes", "security-review"],
    challenge:
      "Runway Health's patient billing records were quietly drifting out of sync with Stripe — some invoices were marked unpaid despite successful payment, and no one had noticed because the webhook endpoint was failing signature verification intermittently and returning a 200 anyway.",
    solution:
      "We audited the full webhook pipeline, found that body-parsing middleware was mutating the raw payload before verification, added idempotent event processing with proper failure alerting, and reconciled three months of drifted billing records against Stripe's own event log.",
    results: [
      { metric: "1 day", label: "to identify and patch the root cause" },
      { metric: "340+", label: "drifted billing records reconciled" },
      { metric: "100%", label: "webhook delivery success since fix" },
    ],
    testimonial: {
      quote:
        "Our webhook handling was silently dropping events for months before they found it. Fixed in a day.",
      name: "Elena Torres",
      role: "Head of Engineering, Runway Health",
    },
  },
];
