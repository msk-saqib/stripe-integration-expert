import type { ContentBlock } from "@/lib/content/blog";

export interface IndustryContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  context: string;
  body: ContentBlock[];
  relevantServices: string[];
  faqs: { question: string; answer: string }[];
}

export const INDUSTRIES_DATA: IndustryContent[] = [
  {
    slug: "saas",
    name: "SaaS",
    metaTitle: "Stripe Integration for SaaS",
    metaDescription:
      "Stripe integration built for SaaS — subscription billing, upgrades/downgrades, dunning, and self-serve customer portals.",
    heroHeadline: "Stripe Integration for SaaS Products",
    heroSubhead: "Subscription billing that handles upgrades, proration, and churn recovery correctly.",
    context:
      "SaaS billing lives or dies on the details — proration math, failed-payment recovery, and self-serve plan changes all compound at scale. We build this once, correctly, rather than patching it repeatedly as you grow.",
    body: [
      { type: "paragraph", text: "The part of SaaS billing that breaks in production is almost never the initial checkout — it's everything that happens after. Plan changes mid-cycle need proration handled correctly in both directions (upgrade and downgrade), failed renewal payments need a dunning sequence that doesn't just cancel a customer on the first decline, and self-serve plan changes need to respect any commitments (annual contracts, seat minimums) you've layered on top of Stripe's defaults." },
      { type: "heading", level: 2, text: "Where SaaS Billing Architectures Usually Go Wrong", id: "saas-pitfalls" },
      { type: "list", items: [
        "Prorating upgrades correctly but not downgrades, leaving credit balances that never reconcile",
        "Treating a failed card as an immediate cancellation instead of a retry-then-dunning sequence",
        "Hardcoding seat counts instead of using metered/usage records, breaking the moment pricing changes",
        "No webhook handling for `customer.subscription.updated`, so your app's plan state silently drifts from Stripe's",
      ] },
      { type: "paragraph", text: "We build the subscription lifecycle state machine explicitly — trial, active, past_due, canceled, and every transition between them — rather than letting it emerge from whatever webhooks happen to arrive first. That's the difference between a billing system that survives a Stripe outage or a customer's expired card, and one that quietly corrupts subscription state under exactly those conditions." },
    ],
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
    metaTitle: "Stripe Integration for Marketplaces",
    metaDescription:
      "Stripe Connect integration for two-sided marketplaces — split payments, seller payouts, and compliant onboarding.",
    heroHeadline: "Stripe Integration for Marketplace Platforms",
    heroSubhead: "Split payments, seller onboarding, and payouts — architected correctly from day one.",
    context:
      "Marketplaces carry payment complexity most businesses never encounter — multi-party refunds, payout timing, and KYC compliance. Getting the Connect account-type choice wrong early is expensive to unwind later.",
    body: [
      { type: "paragraph", text: "The account-type decision — Standard, Express, or Custom Connect — is the single highest-leverage choice in a marketplace build, and it's expensive to reverse once sellers have onboarded. Standard hands Stripe's own dashboard to your sellers (least platform liability, least control); Custom puts you fully in the UI and compliance seat (most control, most ongoing obligation); Express sits in between and is the right default for most two-sided marketplaces." },
      { type: "heading", level: 2, text: "The Payout and Dispute Questions to Answer Before Launch", id: "marketplace-payout" },
      { type: "list", items: [
        "Who funds a refund when the buyer disputes after the seller has already been paid out?",
        "What's your payout schedule per seller — instant, daily, or a rolling reserve for risk?",
        "Does your platform take a fee as an application fee, or via separate transfers?",
        "How does KYC/onboarding friction change between Standard, Express, and Custom?",
      ] },
      { type: "paragraph", text: "Most of the marketplace integrations we're brought in to fix weren't broken on day one — they broke when transaction volume made an unhandled edge case (a seller-funded refund with insufficient balance, a payout landing before a dispute window closes) common enough to matter. We architect for that volume from the first Connect account created, not after the first support ticket about a negative balance." },
    ],
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
    metaTitle: "Stripe Integration for Healthcare",
    metaDescription:
      "Stripe integration for healthcare and healthtech platforms — compliant payment flows for patient billing and telehealth.",
    heroHeadline: "Stripe Integration for Healthcare Platforms",
    heroSubhead: "Payment flows built with healthcare's compliance realities in mind.",
    context:
      "Healthcare payment flows need to account for patient billing nuances (co-pays, payment plans, insurance-adjacent invoicing) alongside general data-handling caution — Stripe itself isn't HIPAA-certified as a BAA by default, so architecture matters.",
    body: [
      { type: "paragraph", text: "Stripe is not HIPAA-certified by default — it offers a Business Associate Agreement (BAA) for qualifying accounts, but that BAA only covers what actually flows through Stripe. The architecture decision that matters most is keeping Protected Health Information (PHI) out of Stripe's metadata, descriptions, and custom fields entirely, so your BAA scope stays as small and defensible as possible." },
      { type: "heading", level: 2, text: "Keeping PHI Out of Stripe's Scope", id: "healthcare-phi" },
      { type: "list", items: [
        "Never pass diagnosis codes, treatment descriptions, or patient names into Checkout line-item names or metadata",
        "Reference an internal patient/invoice ID in Stripe, and resolve PHI only inside your own database",
        "Co-pay and payment-plan logic should live in Stripe Billing/Invoicing; insurance adjudication stays entirely outside Stripe",
        "Confirm your Stripe account is on a BAA-eligible plan before processing any patient billing at all",
      ] },
      { type: "paragraph", text: "Payment plans for patient balances (post-insurance) are usually the actual engineering challenge, not the initial charge — a $4,000 balance rarely gets paid in one transaction. We set this up via Stripe Billing with a fixed installment schedule or Invoicing with custom due dates, both configured so a missed installment triggers your dunning flow rather than silently going uncollected." },
    ],
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
    metaTitle: "Stripe Integration for EdTech",
    metaDescription:
      "Stripe integration for education platforms — course payments, cohort billing, and institutional invoicing.",
    heroHeadline: "Stripe Integration for Education Platforms",
    heroSubhead: "Course payments, subscriptions, and institutional billing for EdTech products.",
    context:
      "EdTech payment models range from one-time course purchases to cohort-based subscriptions to institutional bulk billing — we've built for all three and know where Stripe's defaults need extending.",
    body: [
      { type: "paragraph", text: "EdTech payment models split into three shapes that need different Stripe configurations: one-time course purchases (Checkout is enough), cohort-based programs with a fixed start date (subscriptions with a scheduled trial/start rather than immediate billing), and institutional billing where a school, not an individual learner, pays for a block of seats." },
      { type: "heading", level: 2, text: "Cohort and Institutional Billing Patterns", id: "edtech-billing" },
      { type: "list", items: [
        "Scheduled subscription starts so a cohort's billing begins on the actual course start date, not signup date",
        "Seat-based institutional invoicing, often net-30, separate from individual consumer checkout flows",
        "Refund windows tied to course start date, not payment date — a common source of support disputes",
        "Bulk/volume discounts applied at the institutional invoice level rather than per-seat coupon codes",
      ] },
      { type: "paragraph", text: "The recurring mistake we see in EdTech integrations is treating every learner the same way Stripe treats a SaaS subscriber — as an individual, self-service payer. The moment an institution is buying seats on behalf of students, the billing relationship, refund logic, and even the invoice recipient all diverge from your consumer flow, and need to be modeled as a genuinely separate path rather than a config flag on the same one." },
    ],
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
    metaTitle: "Stripe Integration for Food Delivery Platforms",
    metaDescription:
      "Stripe Connect integration for food delivery and on-demand platforms — restaurant payouts, driver payments, and split fees.",
    heroHeadline: "Stripe Integration for Food Delivery Platforms",
    heroSubhead: "Multi-party payouts across restaurants, drivers, and your platform fee.",
    context:
      "Food delivery is a three-sided payment problem — restaurant payout, driver payout, and platform commission all need to be split and reconciled per order, often with different payout schedules per party.",
    body: [
      { type: "paragraph", text: "A single food delivery order routes money to at least three parties — the restaurant, the driver, and your platform's commission — often on three different payout schedules. Stripe Connect handles the splitting mechanics, but the order in which those splits are calculated and the account structure behind each party determines whether a partial refund or a driver reassignment mid-delivery breaks your reconciliation." },
      { type: "heading", level: 2, text: "Split-Payment Edge Cases That Actually Happen at Volume", id: "delivery-splits" },
      { type: "list", items: [
        "A driver is reassigned mid-order — does the original driver keep a partial payout for distance already covered?",
        "An order is partially refunded (one item missing) — restaurant, driver, and platform shares all need re-splitting, not a flat refund",
        "Tips need to route entirely to the driver, bypassing the platform commission calculation",
        "Instant payouts to drivers vs. daily/weekly batched payouts to restaurants are usually different Connect configurations",
      ] },
      { type: "paragraph", text: "We build the split logic as an explicit, testable calculation step — not something implicit in how transfers happen to fire — specifically so partial refunds and reassignments recalculate correctly instead of requiring manual reconciliation. At delivery-platform order volumes, a splitting bug that only shows up 1% of the time is still a daily support and finance headache." },
    ],
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
    metaTitle: "Stripe Integration for Travel Platforms",
    metaDescription:
      "Stripe integration for travel booking platforms — deposits, installment payments, and multi-currency handling.",
    heroHeadline: "Stripe Integration for Travel Booking Platforms",
    heroSubhead: "Deposits, balance payments, and multi-currency support for travel bookings.",
    context:
      "Travel bookings often involve a deposit now, balance later structure, plus multi-currency pricing for international customers — both need explicit handling beyond a simple one-time Checkout.",
    body: [
      { type: "paragraph", text: "Travel bookings rarely collect full payment upfront — a deposit at booking, a balance due closer to the travel date, and sometimes a final adjustment for add-ons in between. Modeling this as a single PaymentIntent doesn't work; it needs either a scheduled Invoice with staged due dates or a deposit PaymentIntent paired with a second charge against the saved payment method." },
      { type: "heading", level: 2, text: "Deposit, Balance, and Currency Handling", id: "travel-deposits" },
      { type: "list", items: [
        "Saving the payment method from the deposit charge (via `setup_future_usage`) so the balance charge doesn't require the customer to re-enter card details",
        "Handling a declined balance charge close to travel date — grace period, retry, or automatic cancellation policy",
        "Multi-currency presentment for international travelers, with the exchange rate locked at the correct moment (booking vs. charge)",
        "Refund policy tiers (full refund, partial, non-refundable deposit) need to map to actual Stripe refund logic, not just a booking-system flag",
      ] },
      { type: "paragraph", text: "The failure mode we see most often is a balance charge that silently fails weeks after booking because the saved payment method expired or was declined, with no retry or notification logic in place — the business only finds out when the traveler shows up. We build the balance-collection flow with the same rigor as a subscription dunning sequence, because functionally, that's what it is." },
    ],
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
    metaTitle: "Stripe Integration for Event Ticketing",
    metaDescription:
      "Stripe integration for event ticketing platforms — timed sales, capacity limits, and organizer payouts.",
    heroHeadline: "Stripe Integration for Event Ticketing Platforms",
    heroSubhead: "Ticket sales with capacity limits, early-bird pricing, and organizer payouts.",
    context:
      "Event ticketing needs inventory-aware checkout (no overselling), time-limited pricing tiers, and — for multi-organizer platforms — payout splitting similar to a marketplace.",
    body: [
      { type: "paragraph", text: "Ticketing is an inventory problem wearing a payments costume. The real risk isn't the Stripe integration itself — it's a race condition where two Checkout Sessions are created for the last available ticket before either one completes, resulting in overselling a capacity-limited event." },
      { type: "heading", level: 2, text: "Inventory-Safe Checkout for Limited Capacity", id: "events-inventory" },
      { type: "list", items: [
        "Reserve inventory at Checkout Session creation, not at payment confirmation — with a short expiry if the session is abandoned",
        "Release the reservation automatically if the session expires unpaid, so real availability stays accurate",
        "Time-limited pricing tiers (early-bird, day-of) need to lock in the price shown, not the price at the moment of charge",
        "Multi-organizer platforms need Connect Express payouts scoped per event, not per organizer account balance",
      ] },
      { type: "paragraph", text: "We treat the reservation-and-release logic as the primary engineering problem and the Stripe Checkout Session as the easy part, because that's genuinely where ticketing integrations fail under load — usually during the exact high-demand on-sale moment the whole system exists to handle correctly." },
    ],
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
    metaTitle: "Stripe Integration for Fintech",
    metaDescription:
      "Stripe integration for fintech platforms — Financial Connections, Identity, and compliance-aware architecture.",
    heroHeadline: "Stripe Integration for Fintech Platforms",
    heroSubhead: "Compliance-aware Stripe architecture for lending, underwriting, and financial products.",
    context:
      "Fintech products carry the highest compliance bar of any vertical we work in — Identity verification, Financial Connections for underwriting data, and careful Radar/fraud tuning all need to be considered together, not bolted on separately.",
    body: [
      { type: "paragraph", text: "Fintech is the one vertical where we treat Stripe Identity, Financial Connections, and Radar as a single connected system rather than three separate product decisions — because in lending, underwriting, or embedded-finance products, verification, bank-data access, and fraud tuning all inform each other. A weak identity check upstream undermines whatever fraud rules you configure downstream." },
      { type: "heading", level: 2, text: "Architecting Identity, Data Access, and Fraud Together", id: "fintech-architecture" },
      { type: "list", items: [
        "Financial Connections for bank-account verification and transaction data feeding your own underwriting model",
        "Stripe Identity document/selfie verification gated at the point where regulatory KYC actually requires it, not earlier or later",
        "Radar rule tuning informed by the risk profile Identity and Financial Connections already established, not generic defaults",
        "Clear internal documentation of what Stripe's compliance coverage does and doesn't include for your specific licensing situation",
      ] },
      { type: "paragraph", text: "We're explicit about the boundary of what we do: we architect the technical integration correctly and flag where compliance decisions have technical implications, but regulatory sign-off for lending, money transmission, or underwriting products is your counsel's call, not ours. Getting that boundary right, and getting it in writing early, avoids the most expensive kind of fintech project delay." },
    ],
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
    metaTitle: "Stripe Integration for Real Estate",
    metaDescription:
      "Stripe integration for real estate platforms — rent collection, deposits, and large-value ACH/bank transfer payments.",
    heroHeadline: "Stripe Integration for Real Estate Platforms",
    heroSubhead: "Rent collection and deposit handling built around ACH and bank transfers.",
    context:
      "Real estate payments skew toward large-value, recurring transactions where card fees are prohibitive — ACH and bank transfers are usually the primary rail, with cards as a fallback option.",
    body: [
      { type: "paragraph", text: "Rent and large-deposit payments make card fees genuinely uneconomical — a 2.9% fee on a $2,500 rent payment is real money every single month. ACH and bank transfers become the primary rail by necessity, with cards offered as a convenience fallback that the tenant typically absorbs the fee for." },
      { type: "heading", level: 2, text: "Structuring Rent Collection and Deposits Correctly", id: "realestate-ach" },
      { type: "list", items: [
        "ACH settlement takes days, not seconds — rent-due logic needs to account for that lag, not treat ACH like an instant card charge",
        "Security deposits held separately from rent, often via a distinct Payment Intent, to match how landlords are legally required to segregate deposit funds",
        "Recurring rent via Stripe Billing with ACH as the default payment method, cards available but fee-adjusted",
        "Multi-property/multi-owner platforms need Connect payouts scoped correctly per property owner, not pooled into one balance",
      ] },
      { type: "paragraph", text: "The deposit-segregation requirement is where we see the most legal-adjacent risk in real estate payment integrations — many jurisdictions have specific rules about commingling deposit funds with operating revenue, and the Stripe architecture needs to reflect that separation technically, not just track it in a spreadsheet after the fact." },
    ],
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
    metaTitle: "Stripe Integration for Logistics Platforms",
    metaDescription:
      "Stripe integration for logistics and freight platforms — invoicing, B2B payment terms, and multi-party payouts.",
    heroHeadline: "Stripe Integration for Logistics Platforms",
    heroSubhead: "B2B invoicing and multi-party payouts for freight and logistics platforms.",
    context:
      "Logistics payments are largely B2B — net-30/60 invoicing terms, large transaction values suited to bank transfers, and sometimes multi-party payouts across carriers and brokers.",
    body: [
      { type: "paragraph", text: "Freight and logistics payments run on B2B terms, not consumer checkout expectations — net-30 or net-60 invoicing, large transaction values where bank transfers beat card fees by a wide margin, and often a multi-party payout structure across carriers, brokers, and the platform itself." },
      { type: "heading", level: 2, text: "B2B Invoicing and Multi-Party Payout Patterns", id: "logistics-invoicing" },
      { type: "list", items: [
        "Stripe Invoicing configured with custom net terms and automated reminder sequencing rather than immediate-due defaults",
        "Bank transfer/ACH as the default rail for high-value freight transactions, cards reserved for smaller ad hoc charges",
        "Connect-based payout splitting across carriers and brokers, using the same architecture we apply to marketplace platforms",
        "Late-payment handling that matches B2B norms (grace periods, late fees) rather than consumer dunning sequences",
      ] },
      { type: "paragraph", text: "The mistake we most often correct in existing logistics integrations is B2B invoicing bolted onto a payment flow originally built for consumer transactions — net terms and multi-party payouts are a different problem shape than a one-time card charge, and treating them as an afterthought is usually where reconciliation breaks down at scale." },
    ],
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
