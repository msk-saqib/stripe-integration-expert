export interface IndustryContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  context: string;
  relevantServices: string[];
  faqs: { question: string; answer: string }[];
}

export const INDUSTRIES_DATA: IndustryContent[] = [
  {
    slug: "saas",
    name: "SaaS",
    metaTitle: "Stripe Integration for SaaS | Ledger & Co.",
    metaDescription:
      "Stripe integration built for SaaS — subscription billing, upgrades/downgrades, dunning, and self-serve customer portals.",
    heroHeadline: "Stripe Integration for SaaS Products",
    heroSubhead: "Subscription billing that handles upgrades, proration, and churn recovery correctly.",
    context:
      "SaaS billing lives or dies on the details — proration math, failed-payment recovery, and self-serve plan changes all compound at scale. We build this once, correctly, rather than patching it repeatedly as you grow.",
    relevantServices: ["stripe-billing", "customer-portal", "usage-billing", "recurring-payments"],
    faqs: [
      {
        question: "Can you help us pick a pricing model, not just implement one?",
        answer: "We advise on the tradeoffs (seat-based, usage-based, hybrid) based on what Stripe Billing supports well, though final pricing strategy is your call.",
      },
      {
        question: "Do you handle plan migrations for our existing subscriber base?",
        answer: "Yes, this is a common part of SaaS billing re-architecture engagements.",
      },
    ],
  },
  {
    slug: "marketplace",
    name: "Marketplace",
    metaTitle: "Stripe Integration for Marketplaces | Ledger & Co.",
    metaDescription:
      "Stripe Connect integration for two-sided marketplaces — split payments, seller payouts, and compliant onboarding.",
    heroHeadline: "Stripe Integration for Marketplace Platforms",
    heroSubhead: "Split payments, seller onboarding, and payouts — architected correctly from day one.",
    context:
      "Marketplaces carry payment complexity most businesses never encounter — multi-party refunds, payout timing, and KYC compliance. Getting the Connect account-type choice wrong early is expensive to unwind later.",
    relevantServices: ["stripe-connect-standard", "stripe-connect-express", "marketplace-development", "stripe-identity"],
    faqs: [
      {
        question: "Which Connect account type is right for a new marketplace?",
        answer: "Usually Express — it balances onboarding UX with Stripe handling compliance; we confirm based on your specific model.",
      },
      {
        question: "How do you handle disputes between buyers and sellers?",
        answer: "We architect refund/dispute routing explicitly (platform-funded vs. seller-funded) before launch.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    metaTitle: "Stripe Integration for Healthcare | Ledger & Co.",
    metaDescription:
      "Stripe integration for healthcare and healthtech platforms — compliant payment flows for patient billing and telehealth.",
    heroHeadline: "Stripe Integration for Healthcare Platforms",
    heroSubhead: "Payment flows built with healthcare's compliance realities in mind.",
    context:
      "Healthcare payment flows need to account for patient billing nuances (co-pays, payment plans, insurance-adjacent invoicing) alongside general data-handling caution — Stripe itself isn't HIPAA-certified as a BAA by default, so architecture matters.",
    relevantServices: ["stripe-checkout", "stripe-invoicing", "ach", "pci-compliance"],
    faqs: [
      {
        question: "Is Stripe HIPAA-compliant?",
        answer: "Stripe offers a BAA for qualifying accounts — we help architect your integration to keep PHI out of Stripe's scope where possible, and advise on the BAA process where needed.",
      },
      {
        question: "Can patients pay in installments?",
        answer: "Yes, via Stripe Billing or Invoicing with a payment plan structure.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    metaTitle: "Stripe Integration for EdTech | Ledger & Co.",
    metaDescription:
      "Stripe integration for education platforms — course payments, cohort billing, and institutional invoicing.",
    heroHeadline: "Stripe Integration for Education Platforms",
    heroSubhead: "Course payments, subscriptions, and institutional billing for EdTech products.",
    context:
      "EdTech payment models range from one-time course purchases to cohort-based subscriptions to institutional bulk billing — we've built for all three and know where Stripe's defaults need extending.",
    relevantServices: ["stripe-checkout", "stripe-billing", "stripe-invoicing"],
    faqs: [
      {
        question: "Can you support cohort-based or seasonal enrollment billing?",
        answer: "Yes, via scheduled subscription starts and custom proration logic where needed.",
      },
      {
        question: "Do you support institutional/bulk invoicing for schools?",
        answer: "Yes, via Stripe Invoicing configured for purchase-order-style institutional billing.",
      },
    ],
  },
  {
    slug: "food-delivery",
    name: "Food Delivery",
    metaTitle: "Stripe Integration for Food Delivery Platforms | Ledger & Co.",
    metaDescription:
      "Stripe Connect integration for food delivery and on-demand platforms — restaurant payouts, driver payments, and split fees.",
    heroHeadline: "Stripe Integration for Food Delivery Platforms",
    heroSubhead: "Multi-party payouts across restaurants, drivers, and your platform fee.",
    context:
      "Food delivery is a three-sided payment problem — restaurant payout, driver payout, and platform commission all need to be split and reconciled per order, often with different payout schedules per party.",
    relevantServices: ["marketplace-development", "stripe-connect-express", "stripe-terminal"],
    faqs: [
      {
        question: "Can payout schedules differ between restaurants and drivers?",
        answer: "Yes, Connect supports per-account payout scheduling.",
      },
      {
        question: "How are refunds split when an order is only partially fulfilled?",
        answer: "We build custom partial-refund logic that correctly re-splits the restaurant, driver, and platform portions.",
      },
    ],
  },
  {
    slug: "travel",
    name: "Travel",
    metaTitle: "Stripe Integration for Travel Platforms | Ledger & Co.",
    metaDescription:
      "Stripe integration for travel booking platforms — deposits, installment payments, and multi-currency handling.",
    heroHeadline: "Stripe Integration for Travel Booking Platforms",
    heroSubhead: "Deposits, balance payments, and multi-currency support for travel bookings.",
    context:
      "Travel bookings often involve a deposit now, balance later structure, plus multi-currency pricing for international customers — both need explicit handling beyond a simple one-time Checkout.",
    relevantServices: ["stripe-checkout", "stripe-invoicing", "financial-connections"],
    faqs: [
      {
        question: "Can you handle deposit-now, balance-later bookings?",
        answer: "Yes, via a two-stage PaymentIntent or invoicing flow with a scheduled balance charge.",
      },
      {
        question: "How do you handle multi-currency pricing?",
        answer: "Stripe Checkout supports multi-currency presentment; we configure this based on customer locale.",
      },
    ],
  },
  {
    slug: "events",
    name: "Events",
    metaTitle: "Stripe Integration for Event Ticketing | Ledger & Co.",
    metaDescription:
      "Stripe integration for event ticketing platforms — timed sales, capacity limits, and organizer payouts.",
    heroHeadline: "Stripe Integration for Event Ticketing Platforms",
    heroSubhead: "Ticket sales with capacity limits, early-bird pricing, and organizer payouts.",
    context:
      "Event ticketing needs inventory-aware checkout (no overselling), time-limited pricing tiers, and — for multi-organizer platforms — payout splitting similar to a marketplace.",
    relevantServices: ["stripe-checkout", "stripe-connect-express", "payment-links"],
    faqs: [
      {
        question: "How do you prevent overselling limited-capacity tickets?",
        answer: "Via inventory checks tied to the Checkout Session creation, not just at payment confirmation.",
      },
      {
        question: "Can organizers get paid out directly for their own events?",
        answer: "Yes, via Connect Express if you're running a multi-organizer platform.",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    metaTitle: "Stripe Integration for Fintech | Ledger & Co.",
    metaDescription:
      "Stripe integration for fintech platforms — Financial Connections, Identity, and compliance-aware architecture.",
    heroHeadline: "Stripe Integration for Fintech Platforms",
    heroSubhead: "Compliance-aware Stripe architecture for lending, underwriting, and financial products.",
    context:
      "Fintech products carry the highest compliance bar of any vertical we work in — Identity verification, Financial Connections for underwriting data, and careful Radar/fraud tuning all need to be considered together, not bolted on separately.",
    relevantServices: ["financial-connections", "stripe-identity", "stripe-radar", "pci-compliance"],
    faqs: [
      {
        question: "Can Stripe support underwriting use cases, not just payments?",
        answer: "Yes, via Financial Connections for bank data access, paired with your own underwriting logic.",
      },
      {
        question: "Do you help with the compliance side, or only the code?",
        answer: "We advise on architecture-level compliance considerations; we're not a law firm, so complex regulatory questions still need your counsel's sign-off.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    metaTitle: "Stripe Integration for Real Estate | Ledger & Co.",
    metaDescription:
      "Stripe integration for real estate platforms — rent collection, deposits, and large-value ACH/bank transfer payments.",
    heroHeadline: "Stripe Integration for Real Estate Platforms",
    heroSubhead: "Rent collection and deposit handling built around ACH and bank transfers.",
    context:
      "Real estate payments skew toward large-value, recurring transactions where card fees are prohibitive — ACH and bank transfers are usually the primary rail, with cards as a fallback option.",
    relevantServices: ["ach", "bank-transfers", "stripe-invoicing", "stripe-billing"],
    faqs: [
      {
        question: "Why use ACH instead of cards for rent payments?",
        answer: "Card fees on large recurring rent amounts add up fast — ACH's flat, lower fee structure is a better fit.",
      },
      {
        question: "Can you handle security deposits held separately from rent?",
        answer: "Yes, via separate Payment Intents or a held-funds pattern depending on your legal requirements.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    metaTitle: "Stripe Integration for Logistics Platforms | Ledger & Co.",
    metaDescription:
      "Stripe integration for logistics and freight platforms — invoicing, B2B payment terms, and multi-party payouts.",
    heroHeadline: "Stripe Integration for Logistics Platforms",
    heroSubhead: "B2B invoicing and multi-party payouts for freight and logistics platforms.",
    context:
      "Logistics payments are largely B2B — net-30/60 invoicing terms, large transaction values suited to bank transfers, and sometimes multi-party payouts across carriers and brokers.",
    relevantServices: ["stripe-invoicing", "bank-transfers", "marketplace-development"],
    faqs: [
      {
        question: "Can Stripe handle net-30/60 payment terms?",
        answer: "Yes, via Stripe Invoicing with custom due dates and automated reminder sequencing.",
      },
      {
        question: "Do you support multi-party payouts across carriers and brokers?",
        answer: "Yes, using the same Connect architecture we apply to marketplace platforms.",
      },
    ],
  },
];
