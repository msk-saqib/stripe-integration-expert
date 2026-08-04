export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: string;
  category: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroHeadline: string;
  heroSubhead: string;
  benefits: string[];
  features: string[];
  industries: string[];
  faqs: ServiceFaq[];
  ctaLabel: string;
  relatedServices: string[];
}

export const SERVICES: ServiceContent[] = [
  // ---------- Core Stripe Services ----------
  {
    slug: "stripe-checkout",
    category: "core-payments",
    name: "Stripe Checkout",
    metaTitle: "Stripe Checkout Integration Services",
    metaDescription:
      "Launch a conversion-optimized Stripe Checkout in days, not weeks. Hosted, secure, mobile-ready. Book a free integration audit.",
    keywords: ["stripe checkout integration", "hosted checkout stripe", "stripe checkout setup service"],
    heroHeadline: "A Checkout Page That Converts, Not Just Collects",
    heroSubhead: "Fully hosted, brand-matched Stripe Checkout, live in days.",
    benefits: [
      "Fastest path to accepting payments",
      "PCI burden offloaded to Stripe",
      "Built-in localization & currency support",
      "Mobile-optimized out of the box",
    ],
    features: [
      "Custom branding & domain",
      "Dynamic tax/shipping calculation",
      "One-time & subscription modes",
      "Promo codes",
      "Multi-language checkout",
      "Post-payment redirect logic",
    ],
    industries: ["saas", "marketplace", "education"],
    faqs: [
      {
        question: "How long does a Stripe Checkout integration take?",
        answer: "Most Checkout integrations ship in 3–7 business days, including test-mode QA.",
      },
      {
        question: "Can Checkout match our brand exactly?",
        answer: "Yes — logo, colors, and custom domain are all configurable within Stripe's branding settings.",
      },
    ],
    ctaLabel: "Get My Checkout Live This Week",
    relatedServices: ["payment-element", "payment-links", "stripe-tax"],
  },
  {
    slug: "payment-element",
    category: "core-payments",
    name: "Payment Element",
    metaTitle: "Stripe Payment Element Integration",
    metaDescription:
      "Build a fully custom, embedded payment form with Stripe's Payment Element — every payment method, one integration.",
    keywords: ["stripe payment element", "embedded payment form stripe", "custom stripe checkout ui"],
    heroHeadline: "Your Checkout UI, Every Payment Method Built In",
    heroSubhead: "Fully embedded, on-brand, single-integration payment forms.",
    benefits: [
      "Total UI control vs. hosted Checkout",
      "One integration surface for 20+ payment methods",
      "Real-time validation & error handling",
      "Consistent UX across web & mobile",
    ],
    features: [
      "Dynamic payment-method ordering",
      "Address/tax auto-detection",
      "Save-card & wallet support",
      "Custom theming API",
      "Multi-step form support",
    ],
    industries: ["saas", "marketplace"],
    faqs: [
      {
        question: "Payment Element vs. Stripe Checkout — which do we need?",
        answer: "Payment Element if you need a fully custom, on-page UI; Checkout if you want the fastest path to launch.",
      },
      {
        question: "Does it support Apple Pay and Google Pay automatically?",
        answer: "Yes — wallets appear automatically based on the customer's device and browser support.",
      },
    ],
    ctaLabel: "Design My Custom Payment Form",
    relatedServices: ["stripe-checkout", "embedded-checkout", "apple-pay"],
  },
  {
    slug: "embedded-checkout",
    category: "core-payments",
    name: "Embedded Checkout",
    metaTitle: "Stripe Embedded Checkout Integration",
    metaDescription:
      "Keep customers on your site with Stripe's Embedded Checkout — hosted-grade security, native on-page experience.",
    keywords: ["stripe embedded checkout", "on-page stripe checkout", "embedded checkout integration"],
    heroHeadline: "Checkout That Never Leaves Your Site",
    heroSubhead: "The security of hosted Checkout, the UX of an on-page flow.",
    benefits: [
      "No redirect drop-off",
      "Retains site navigation/branding",
      "Faster perceived load",
      "Easier analytics/funnel tracking",
    ],
    features: [
      "iFrame-embedded secure flow",
      "Custom success/cancel handling",
      "Session-based rendering",
      "Works with existing Checkout Sessions API",
    ],
    industries: ["saas", "marketplace"],
    faqs: [
      {
        question: "Does Embedded Checkout reduce cart abandonment?",
        answer: "Yes — removing the redirect step is one of the highest-leverage changes for checkout completion rate.",
      },
      {
        question: "Is it as secure as hosted Checkout?",
        answer: "Yes, it uses the same underlying Checkout Sessions API and PCI scope reduction.",
      },
    ],
    ctaLabel: "Reduce My Checkout Drop-off",
    relatedServices: ["stripe-checkout", "payment-element"],
  },
  {
    slug: "payment-links",
    category: "core-payments",
    name: "Payment Links",
    metaTitle: "Stripe Payment Links Setup Services",
    metaDescription:
      "No-code-to-pro Stripe Payment Links — set up, automate, and connect to your invoicing and CRM workflows.",
    keywords: ["stripe payment links", "payment link automation", "stripe no-code payments"],
    heroHeadline: "Get Paid With a Link — Set Up the Right Way",
    heroSubhead: "Payment Links configured, branded, and wired into your workflows.",
    benefits: [
      "Fastest way to start collecting payments",
      "No dev work needed for simple use cases",
      "Great for invoices, quotes, one-off sales",
      "Easily embeddable in emails/socials",
    ],
    features: [
      "Branded link pages",
      "Auto-generated QR codes",
      "CRM/Zapier automation hooks",
      "Usage analytics setup",
      "Multi-product link bundles",
    ],
    industries: ["saas", "real-estate"],
    faqs: [
      {
        question: "Can Payment Links handle recurring billing?",
        answer: "Yes — a link can be configured against a recurring price, not just a one-time amount.",
      },
      {
        question: "How do we automate what happens after payment?",
        answer: "Via Stripe webhooks connected to Zapier, your CRM, or a custom endpoint we build for you.",
      },
    ],
    ctaLabel: "Automate My Payment Links",
    relatedServices: ["stripe-checkout", "stripe-invoicing", "stripe-billing"],
  },

  // ---------- Subscription Services ----------
  {
    slug: "stripe-billing",
    category: "billing-subscriptions",
    name: "Stripe Billing",
    metaTitle: "Stripe Billing Integration Services",
    metaDescription:
      "End-to-end Stripe Billing setup — plans, proration, dunning, and revenue recognition, built to scale.",
    keywords: ["stripe billing integration", "stripe subscription setup", "stripe billing developer"],
    heroHeadline: "Billing Logic That Doesn't Break at Scale",
    heroSubhead: "Full Stripe Billing implementation — plans, upgrades, dunning, all handled.",
    benefits: [
      "Eliminates manual billing errors",
      "Handles upgrades/downgrades/proration correctly",
      "Reduces failed-payment churn via smart retries",
      "Scales from 10 to 100,000 subscribers",
    ],
    features: [
      "Plan/pricing model architecture",
      "Proration logic",
      "Smart retry & dunning emails",
      "Coupon/discount engine",
      "Revenue recognition-ready data",
    ],
    industries: ["saas", "education"],
    faqs: [
      {
        question: "Can you migrate our existing billing system to Stripe Billing?",
        answer: "Yes — this is one of our most common engagements, done with zero downtime and full history intact.",
      },
      {
        question: "How does Stripe Billing handle failed payments?",
        answer: "Through configurable Smart Retries and dunning email sequences, both of which we tune to your churn data.",
      },
    ],
    ctaLabel: "Fix My Billing Architecture",
    relatedServices: ["recurring-payments", "customer-portal", "usage-billing"],
  },
  {
    slug: "recurring-payments",
    category: "billing-subscriptions",
    name: "Recurring Payments",
    metaTitle: "Stripe Recurring Payments Integration",
    metaDescription:
      "Reliable recurring payment infrastructure on Stripe — built for low churn and high uptime.",
    keywords: ["stripe recurring payments", "recurring billing integration", "subscription charging stripe"],
    heroHeadline: "Recurring Charges That Actually Recur",
    heroSubhead: "Robust, idempotent recurring-payment infrastructure on Stripe.",
    benefits: [
      "Idempotent charge handling (no double-billing)",
      "Automatic retry logic",
      "Webhook-driven state sync",
      "Currency/timezone-safe billing cycles",
    ],
    features: [
      "Subscription lifecycle webhooks",
      "Trial period logic",
      "Proration handling",
      "Failed-payment recovery flows",
    ],
    industries: ["saas"],
    faqs: [
      {
        question: "How do you prevent duplicate charges?",
        answer: "Every mutation uses Stripe idempotency keys tied to our own request-tracking layer.",
      },
      {
        question: "Can trials convert automatically to paid?",
        answer: "Yes, via `trial_end` configuration and a card-required-upfront option if you want it.",
      },
    ],
    ctaLabel: "Build My Recurring Payment Flow",
    relatedServices: ["stripe-billing", "customer-portal", "webhooks"],
  },
  {
    slug: "customer-portal",
    category: "billing-subscriptions",
    name: "Customer Portal",
    metaTitle: "Stripe Customer Portal Setup Services",
    metaDescription:
      "Self-serve billing management for your customers — branded Stripe Customer Portal, fully configured.",
    keywords: ["stripe customer portal", "self-serve subscription management", "stripe billing portal setup"],
    heroHeadline: "Let Customers Manage Their Own Billing",
    heroSubhead: "A branded, self-serve portal that cuts support tickets.",
    benefits: [
      "Reduces billing-related support volume",
      "Lets customers update cards/plans themselves",
      "Fully branded, not generic Stripe UI",
      "Configurable cancellation flows",
    ],
    features: [
      "Plan upgrade/downgrade self-service",
      "Invoice history access",
      "Payment method management",
      "Cancellation flow with retention offers",
    ],
    industries: ["saas"],
    faqs: [
      {
        question: "Can we brand the portal to match our app?",
        answer: "Yes — logo, colors, and copy are configurable through the Stripe Dashboard's branding settings.",
      },
      {
        question: "Can we add a retention offer before cancellation?",
        answer: "Yes, via the portal's cancellation flow configuration or a custom pre-cancellation step we build.",
      },
    ],
    ctaLabel: "Set Up My Customer Portal",
    relatedServices: ["stripe-billing", "recurring-payments"],
  },
  {
    slug: "usage-billing",
    category: "billing-subscriptions",
    name: "Usage Billing",
    metaTitle: "Usage-Based Billing Integration",
    metaDescription:
      "Metered and usage-based pricing on Stripe — accurate, auditable, and built for complex pricing models.",
    keywords: ["stripe usage based billing", "metered billing stripe", "stripe metering integration"],
    heroHeadline: "Charge for What They Actually Use",
    heroSubhead: "Accurate, auditable usage-based billing on Stripe.",
    benefits: [
      "Supports hybrid flat + usage pricing",
      "Real-time usage tracking",
      "Auditable billing events",
      "Scales to high-volume metering",
    ],
    features: [
      "Metered price configuration",
      "Usage record ingestion pipeline",
      "Tiered/graduated pricing setup",
      "Usage dashboards for internal teams",
    ],
    industries: ["saas"],
    faqs: [
      {
        question: "How do we track usage without overloading Stripe's API?",
        answer: "We batch usage records and use Stripe's meter events API to stay within rate limits at scale.",
      },
      {
        question: "Can we combine flat-fee and usage-based pricing?",
        answer: "Yes — hybrid pricing with a base subscription plus metered overage is a common pattern we build.",
      },
    ],
    ctaLabel: "Build My Usage Billing System",
    relatedServices: ["stripe-billing", "api-integration", "webhooks"],
  },

  // ---------- Marketplace Services ----------
  {
    slug: "stripe-connect-standard",
    category: "connect-marketplaces",
    name: "Stripe Connect Standard",
    metaTitle: "Stripe Connect Standard Integration",
    metaDescription:
      "Fast-to-launch Stripe Connect Standard integration for marketplaces that want sellers on their own Stripe accounts.",
    keywords: ["stripe connect standard integration", "stripe connect standard setup"],
    heroHeadline: "The Fastest Path to a Stripe Marketplace",
    heroSubhead: "Connect Standard integration for platforms that want minimal liability.",
    benefits: [
      "Fastest Connect option to launch",
      "Sellers manage own Stripe dashboard/compliance",
      "Lower platform liability",
      "Lower dev overhead than Custom",
    ],
    features: [
      "OAuth onboarding flow",
      "Platform fee/application fee setup",
      "Payout routing",
      "Seller dashboard access configuration",
    ],
    industries: ["marketplace"],
    faqs: [
      {
        question: "Standard vs. Express vs. Custom — which fits our marketplace?",
        answer: "Standard suits platforms fine with sellers using their own Stripe dashboard; Express and Custom trade dev effort for more UX control.",
      },
      {
        question: "Can we still take a platform fee?",
        answer: "Yes — application fees are supported on every Connect account type.",
      },
    ],
    ctaLabel: "Launch My Marketplace",
    relatedServices: ["stripe-connect-express", "stripe-connect-custom", "marketplace-development"],
  },
  {
    slug: "stripe-connect-express",
    category: "connect-marketplaces",
    name: "Stripe Connect Express",
    metaTitle: "Stripe Connect Express Integration Services",
    metaDescription:
      "Branded onboarding, platform-controlled UX — Stripe Connect Express integration for growing marketplaces.",
    keywords: ["stripe connect express integration", "express onboarding stripe"],
    heroHeadline: "Branded Onboarding. Stripe-Managed Risk.",
    heroSubhead: "Connect Express integration balancing UX control and compliance offload.",
    benefits: [
      "Platform-branded onboarding UI",
      "Stripe handles identity verification & compliance",
      "More UX control than Standard",
      "Faster to build than Custom",
    ],
    features: [
      "Embedded/branded onboarding flow",
      "Express dashboard configuration",
      "Payout schedule customization",
      "Automated tax form (1099) handling",
    ],
    industries: ["marketplace"],
    faqs: [
      {
        question: "How much of the onboarding UI can we brand?",
        answer: "Colors, logo, and copy are customizable; the core KYC steps remain Stripe-hosted for compliance reasons.",
      },
      {
        question: "Who's responsible for KYC compliance?",
        answer: "Stripe handles identity verification under Express — your platform stays out of that regulatory scope.",
      },
    ],
    ctaLabel: "Get My Express Integration Scoped",
    relatedServices: ["stripe-connect-standard", "stripe-connect-custom", "stripe-identity"],
  },
  {
    slug: "stripe-connect-custom",
    category: "connect-marketplaces",
    name: "Stripe Connect Custom",
    metaTitle: "Stripe Connect Custom Integration Services",
    metaDescription:
      "Fully white-labeled Stripe Connect Custom integration for platforms that need total control over the seller experience.",
    keywords: ["stripe connect custom integration", "white label stripe marketplace"],
    heroHeadline: "Total Control Over the Seller Experience",
    heroSubhead: "Fully white-labeled Connect Custom — no Stripe branding, ever.",
    benefits: [
      "Sellers never see Stripe branding",
      "Full control over onboarding, payouts, dashboards",
      "Best for platforms with strict UX/compliance requirements",
      "Highest flexibility of all Connect types",
    ],
    features: [
      "Fully custom onboarding & KYC flow",
      "Custom payout logic & scheduling",
      "Platform-owned risk/compliance handling",
      "Custom seller-facing dashboards",
    ],
    industries: ["marketplace", "finance"],
    faqs: [
      {
        question: "What compliance obligations fall on us with Custom?",
        answer: "More than Express — you own more of the KYC/risk surface, which we scope in detail before starting.",
      },
      {
        question: "How long does a Connect Custom build typically take?",
        answer: "6–10 weeks depending on onboarding complexity and payout logic requirements.",
      },
    ],
    ctaLabel: "Scope My Custom Connect Build",
    relatedServices: ["stripe-connect-express", "marketplace-development", "stripe-identity", "pci-compliance"],
  },
  {
    slug: "marketplace-development",
    category: "connect-marketplaces",
    name: "Marketplace Development",
    metaTitle: "Stripe Marketplace Development Services",
    metaDescription:
      "Full-stack marketplace build on Stripe Connect — from architecture to launch, payments to payouts.",
    keywords: ["stripe marketplace development", "build a marketplace with stripe", "two-sided marketplace payments"],
    heroHeadline: "Your Marketplace, Built on Stripe From Day One",
    heroSubhead: "End-to-end marketplace architecture, payments, and payout logic.",
    benefits: [
      "One team for the full payment architecture, not just integration",
      "Avoids costly re-architecture later",
      "Handles multi-party payment edge cases",
      "Built with compliance in mind from the start",
    ],
    features: [
      "Connect account-type selection & architecture",
      "Split payments & fee logic",
      "Payout automation",
      "Dispute/refund routing across parties",
      "Seller/buyer dashboard scoping",
    ],
    industries: ["marketplace", "food-delivery", "real-estate"],
    faqs: [
      {
        question: "Do you build the whole marketplace or just the payments layer?",
        answer: "Both — most engagements start with payments architecture, then extend to the surrounding product as needed.",
      },
      {
        question: "How do refunds work across two parties?",
        answer: "We architect refund routing (platform vs. seller-funded) explicitly before launch, not as an afterthought.",
      },
    ],
    ctaLabel: "Plan My Marketplace Build",
    relatedServices: ["stripe-connect-standard", "stripe-connect-express", "stripe-connect-custom"],
  },

  // ---------- Payment Methods ----------
  {
    slug: "apple-pay",
    category: "payment-methods",
    name: "Apple Pay",
    metaTitle: "Apple Pay + Stripe Integration Services",
    metaDescription:
      "Native Apple Pay integration via Stripe — verified domains, one-tap checkout, higher mobile conversion.",
    keywords: ["apple pay stripe integration", "stripe apple pay setup"],
    heroHeadline: "One-Tap Checkout for Every iPhone Customer",
    heroSubhead: "Apple Pay via Stripe, fully verified and production-ready.",
    benefits: [
      "Higher mobile conversion",
      "No card entry friction",
      "Built-in biometric fraud protection",
      "Works across Safari, iOS apps, in-app browsers",
    ],
    features: [
      "Domain verification setup",
      "Merchant ID configuration",
      "Payment Request Button integration",
      "Dynamic device detection (auto-hide when unsupported)",
    ],
    industries: ["saas", "food-delivery"],
    faqs: [
      {
        question: "Why isn't Apple Pay showing up at checkout?",
        answer: "Usually domain verification or an unsupported browser/device — we audit both during setup.",
      },
      {
        question: "Does this work in our iOS app, not just Safari?",
        answer: "Yes, via the Stripe SDK's native Apple Pay integration for in-app purchases.",
      },
    ],
    ctaLabel: "Add Apple Pay to My Checkout",
    relatedServices: ["google-pay", "link", "payment-element"],
  },
  {
    slug: "google-pay",
    category: "payment-methods",
    name: "Google Pay",
    metaTitle: "Google Pay + Stripe Integration Services",
    metaDescription:
      "Fast, secure Google Pay integration via Stripe for Android and Chrome checkout flows.",
    keywords: ["google pay stripe integration", "stripe google pay setup"],
    heroHeadline: "The Android Equivalent of One-Tap Checkout",
    heroSubhead: "Google Pay via Stripe, tuned for Chrome and Android.",
    benefits: [
      "Matches Apple Pay conversion lift on Android/Chrome",
      "Reduces manual card entry",
      "Built-in fraud signals from Google",
      "Fast to add alongside existing Checkout",
    ],
    features: [
      "Merchant verification",
      "Payment Request Button integration",
      "Cross-browser fallback handling",
      "Testing across Android device matrix",
    ],
    industries: ["saas", "marketplace"],
    faqs: [
      {
        question: "Do we need both Apple Pay and Google Pay, or just one?",
        answer: "Both — they serve different device audiences and are trivial to enable together once one is configured.",
      },
      {
        question: "Does Google Pay work on desktop Chrome?",
        answer: "Yes, provided the customer has a saved payment method in their Google account.",
      },
    ],
    ctaLabel: "Add Google Pay to My Checkout",
    relatedServices: ["apple-pay", "link", "stripe-radar"],
  },
  {
    slug: "ach",
    category: "payment-methods",
    name: "ACH",
    metaTitle: "ACH Payments via Stripe Integration",
    metaDescription:
      "Lower-fee ACH bank payments via Stripe — ideal for high-value B2B and subscription billing.",
    keywords: ["stripe ach integration", "ach bank payments stripe", "us bank debit stripe"],
    heroHeadline: "Lower Fees for High-Value Transactions",
    heroSubhead: "ACH bank debit via Stripe — built for B2B and large invoices.",
    benefits: [
      "Significantly lower fees than cards on large payments",
      "Reduces card-decline churn for subscriptions",
      "Ideal for invoicing/B2B",
      "Reduces chargeback exposure",
    ],
    features: [
      "Plaid-based instant bank verification",
      "Micro-deposit fallback verification",
      "ACH-specific dunning/retry logic (longer settlement windows)",
      "Mandate/authorization compliance",
    ],
    industries: ["saas", "real-estate", "finance"],
    faqs: [
      {
        question: "How long does ACH take to settle compared to cards?",
        answer: "Typically 3–5 business days, versus near-instant for cards — we design dunning logic around this.",
      },
      {
        question: "Is ACH good for recurring subscriptions?",
        answer: "Yes, especially for B2B where lower fees matter more than instant settlement.",
      },
    ],
    ctaLabel: "Add ACH to My Payment Flow",
    relatedServices: ["sepa", "bank-transfers", "financial-connections", "stripe-billing"],
  },
  {
    slug: "sepa",
    category: "payment-methods",
    name: "SEPA",
    metaTitle: "SEPA Direct Debit Stripe Integration",
    metaDescription:
      "SEPA Direct Debit integration via Stripe for European recurring payments and B2B billing.",
    keywords: ["stripe sepa integration", "sepa direct debit stripe", "european bank debit stripe"],
    heroHeadline: "The Default Way Europe Pays Recurring Bills",
    heroSubhead: "SEPA Direct Debit via Stripe, compliant across the EU.",
    benefits: [
      "Preferred method for EU recurring billing",
      "Lower decline rates than cards for EU customers",
      "Mandate compliance handled correctly",
      "Reduces churn from expired EU cards",
    ],
    features: [
      "SEPA mandate collection & storage",
      "Multi-currency EU support",
      "Longer-cycle dunning logic",
      "Compliance with EU mandate regulations",
    ],
    industries: ["saas", "finance"],
    faqs: [
      {
        question: "Is SEPA required for EU customers or optional?",
        answer: "Optional, but strongly recommended — it materially reduces churn compared to card-only billing in the EU.",
      },
      {
        question: "How does mandate collection work legally?",
        answer: "Stripe handles the mandate text and storage requirements; we wire the collection UI into your checkout flow.",
      },
    ],
    ctaLabel: "Add SEPA for My EU Customers",
    relatedServices: ["ach", "bank-transfers", "stripe-billing"],
  },
  {
    slug: "klarna",
    category: "payment-methods",
    name: "Klarna",
    metaTitle: "Klarna + Stripe Integration Services",
    metaDescription:
      "Add Klarna buy-now-pay-later via Stripe to increase average order value and conversion.",
    keywords: ["stripe klarna integration", "klarna buy now pay later stripe", "bnpl stripe setup"],
    heroHeadline: "Let Customers Pay Later. You Get Paid Now.",
    heroSubhead: "Klarna BNPL via Stripe — full risk handled by Klarna.",
    benefits: [
      "Increases average order value",
      "Boosts conversion for higher-ticket items",
      "No credit risk to you — Klarna assumes it",
      "Appeals to younger/BNPL-preferring demographics",
    ],
    features: [
      "Klarna payment method activation",
      "Eligibility/geo rules configuration",
      "Refund handling across BNPL installments",
      "UI placement optimization for BNPL messaging",
    ],
    industries: ["marketplace"],
    faqs: [
      {
        question: "Who bears the risk if a customer doesn't pay Klarna back?",
        answer: "Klarna does — you're paid in full upfront regardless of the customer's installment status.",
      },
      {
        question: "Does Klarna work for subscriptions or just one-time purchases?",
        answer: "Primarily one-time purchases; for recurring revenue, Stripe Billing is the better fit.",
      },
    ],
    ctaLabel: "Add Klarna to My Store",
    relatedServices: ["afterpay", "payment-element"],
  },
  {
    slug: "afterpay",
    category: "payment-methods",
    name: "Afterpay",
    metaTitle: "Afterpay + Stripe Integration Services",
    metaDescription:
      "Afterpay/Clearpay integration via Stripe for installment-based checkout and higher AOV.",
    keywords: ["stripe afterpay integration", "afterpay clearpay stripe setup"],
    heroHeadline: "Split the Payment. Keep the Sale.",
    heroSubhead: "Afterpay via Stripe — installment checkout, zero credit risk to you.",
    benefits: [
      "Reduces cart abandonment on higher-ticket items",
      "No risk exposure — Afterpay owns the credit decision",
      "Strong appeal in fashion/lifestyle verticals",
      "Straightforward Stripe-native activation",
    ],
    features: [
      "Afterpay/Clearpay activation & region configuration",
      "Eligibility threshold tuning",
      "Refund/partial-refund handling",
      "On-page installment messaging components",
    ],
    industries: ["marketplace"],
    faqs: [
      {
        question: "Afterpay vs. Klarna — do we need both?",
        answer: "Not necessarily — regional preference and audience demographics usually make one the clear primary choice.",
      },
      {
        question: "Is there a minimum/maximum order value for Afterpay?",
        answer: "Yes, Afterpay sets eligibility thresholds; we configure your checkout to respect them automatically.",
      },
    ],
    ctaLabel: "Add Afterpay to My Store",
    relatedServices: ["klarna", "payment-element"],
  },
  {
    slug: "link",
    category: "payment-methods",
    name: "Link",
    metaTitle: "Stripe Link Integration Services",
    metaDescription:
      "Enable Stripe Link for returning customers — saved payment details, one-click checkout across any Stripe merchant.",
    keywords: ["stripe link integration", "stripe one click checkout", "stripe link setup"],
    heroHeadline: "Returning Customers, One Click to Pay",
    heroSubhead: "Stripe Link integration for faster repeat checkout.",
    benefits: [
      "Cuts checkout time for returning customers",
      "Network effect — works across any Link-enabled merchant",
      "Reduces cart abandonment on repeat purchases",
      "Minimal integration effort on top of Checkout/Payment Element",
    ],
    features: [
      "Link autofill enablement",
      "Email-based recognition flow",
      "Cross-device saved payment sync",
      "A/B-testable placement",
    ],
    industries: ["saas", "marketplace"],
    faqs: [
      {
        question: "Is Link automatically included with Payment Element?",
        answer: "Yes, Link is enabled by default with Payment Element unless explicitly turned off.",
      },
      {
        question: "Can we disable Link for specific flows?",
        answer: "Yes — it's configurable per Checkout Session or Payment Intent.",
      },
    ],
    ctaLabel: "Enable Link at Checkout",
    relatedServices: ["apple-pay", "google-pay", "payment-element"],
  },
  {
    slug: "bank-transfers",
    category: "payment-methods",
    name: "Bank Transfers",
    metaTitle: "Bank Transfer Payments via Stripe",
    metaDescription:
      "Accept direct bank transfers via Stripe for large invoices, B2B deals, and international payments.",
    keywords: ["stripe bank transfer integration", "wire transfer stripe", "direct bank payment stripe"],
    heroHeadline: "For Payments Too Large for a Card",
    heroSubhead: "Bank transfer collection via Stripe — built for B2B and enterprise invoices.",
    benefits: [
      "No card network fee ceiling issues on large amounts",
      "Preferred by finance/procurement teams",
      "Reduces fraud risk on high-value transactions",
      "Works alongside invoicing",
    ],
    features: [
      "Customer-facing bank transfer instructions generation",
      "Multi-currency transfer support",
      "Reconciliation/matching automation",
      "Manual + automated confirmation workflows",
    ],
    industries: ["finance", "real-estate"],
    faqs: [
      {
        question: "How do we reconcile incoming transfers automatically?",
        answer: "Via Stripe's reference-matching plus a reconciliation script we build against your accounting system.",
      },
      {
        question: "How long do bank transfers take to confirm?",
        answer: "Typically 1–3 business days depending on the originating bank and currency.",
      },
    ],
    ctaLabel: "Set Up Bank Transfer Collection",
    relatedServices: ["ach", "sepa", "stripe-invoicing", "financial-connections"],
  },

  // ---------- Business Features ----------
  {
    slug: "stripe-tax",
    category: "business-tools",
    name: "Tax",
    metaTitle: "Stripe Tax Integration Services",
    metaDescription:
      "Automated sales tax, VAT, and GST calculation and filing-readiness with Stripe Tax, integrated correctly.",
    keywords: ["stripe tax integration", "automated sales tax stripe", "stripe vat setup"],
    heroHeadline: "Tax Compliance That Runs Itself",
    heroSubhead: "Stripe Tax integration — accurate, automated, audit-ready.",
    benefits: [
      "Removes manual tax-rate maintenance",
      "Covers sales tax, VAT, GST across jurisdictions",
      "Reduces audit risk",
      "Scales automatically as you expand markets",
    ],
    features: [
      "Nexus/registration configuration",
      "Product tax-category mapping",
      "Real-time calculation at Checkout/Invoicing",
      "Tax reporting exports",
    ],
    industries: ["saas", "marketplace"],
    faqs: [
      {
        question: "Does Stripe Tax file taxes for us or just calculate them?",
        answer: "It calculates and collects; filing/remittance is handled separately, often via a partner like Numeral or your accountant.",
      },
      {
        question: "Does this work with Checkout and Billing simultaneously?",
        answer: "Yes — Stripe Tax integrates natively with both Checkout Sessions and Billing invoices.",
      },
    ],
    ctaLabel: "Automate My Tax Compliance",
    relatedServices: ["stripe-invoicing", "stripe-checkout", "stripe-billing"],
  },
  {
    slug: "stripe-radar",
    category: "business-tools",
    name: "Radar",
    metaTitle: "Stripe Radar Fraud Prevention Setup",
    metaDescription:
      "Custom Stripe Radar rules and fraud-prevention tuning to cut chargebacks without blocking good customers.",
    keywords: ["stripe radar integration", "stripe fraud prevention setup", "stripe radar rules"],
    heroHeadline: "Block Fraud, Not Your Best Customers",
    heroSubhead: "Custom-tuned Stripe Radar rules built around your real risk profile.",
    benefits: [
      "Reduces chargebacks and fraud losses",
      "Avoids over-blocking legitimate customers",
      "Tuned to your specific business/risk pattern, not generic defaults",
      "Ongoing rule refinement, not a one-time setup",
    ],
    features: [
      "Custom Radar rule authoring",
      "Risk threshold tuning",
      "3D Secure (SCA) configuration",
      "Fraud analytics dashboard setup",
    ],
    industries: ["marketplace", "finance"],
    faqs: [
      {
        question: "How do we reduce false declines without increasing fraud risk?",
        answer: "By tuning rules against your own transaction history rather than relying on Radar's generic defaults.",
      },
      {
        question: "Do you monitor and adjust rules after launch?",
        answer: "Yes — Radar tuning is an ongoing process, available as part of our support retainers.",
      },
    ],
    ctaLabel: "Tighten My Fraud Protection",
    relatedServices: ["stripe-identity", "pci-compliance", "security-review"],
  },
  {
    slug: "stripe-identity",
    category: "business-tools",
    name: "Identity",
    metaTitle: "Stripe Identity Integration Services",
    metaDescription:
      "Identity verification and KYC flows with Stripe Identity — for marketplaces, fintech, and regulated platforms.",
    keywords: ["stripe identity integration", "stripe kyc verification", "stripe identity verification setup"],
    heroHeadline: "Know Exactly Who You're Paying",
    heroSubhead: "Stripe Identity verification flows for marketplaces and regulated platforms.",
    benefits: [
      "Meets KYC/regulatory requirements",
      "Reduces fraudulent seller/user onboarding",
      "Configurable verification depth by risk level",
      "Faster than manual document review",
    ],
    features: [
      "Document + selfie verification flow",
      "Risk-based verification tiers",
      "Webhook-driven verification-state sync",
      "Fallback/manual review workflows",
    ],
    industries: ["marketplace", "finance"],
    faqs: [
      {
        question: "How long does identity verification take for end users?",
        answer: "Usually under 2 minutes for automated document + selfie checks.",
      },
      {
        question: "Is this required for all Connect account types?",
        answer: "Verification depth varies by account type — Custom requires more platform involvement than Express.",
      },
    ],
    ctaLabel: "Add Identity Verification",
    relatedServices: ["stripe-connect-express", "stripe-connect-custom", "stripe-radar"],
  },
  {
    slug: "stripe-invoicing",
    category: "business-tools",
    name: "Invoicing",
    metaTitle: "Stripe Invoicing Integration Services",
    metaDescription:
      "Automated, professional Stripe Invoicing setup — recurring or one-off, with reminders and reconciliation built in.",
    keywords: ["stripe invoicing integration", "automated invoicing stripe", "stripe invoice setup"],
    heroHeadline: "Invoices That Chase Themselves",
    heroSubhead: "Stripe Invoicing configured for automated reminders and reconciliation.",
    benefits: [
      "Cuts time spent manually invoicing/chasing payment",
      "Automated reminders reduce late payments",
      "Branded, professional invoice output",
      "Syncs cleanly with accounting tools",
    ],
    features: [
      "Recurring & one-off invoice automation",
      "Branded invoice templates",
      "Auto-reminder sequencing",
      "Accounting software sync (QuickBooks/Xero-compatible exports)",
    ],
    industries: ["saas", "real-estate"],
    faqs: [
      {
        question: "Can invoices auto-convert from a quote/estimate?",
        answer: "Yes, via Stripe's quote-to-invoice conversion flow, which we wire into your sales process.",
      },
      {
        question: "Does this integrate with our accounting software?",
        answer: "Yes — we set up exports/sync compatible with QuickBooks, Xero, and similar tools.",
      },
    ],
    ctaLabel: "Automate My Invoicing",
    relatedServices: ["bank-transfers", "stripe-tax", "stripe-billing"],
  },
  {
    slug: "financial-connections",
    category: "business-tools",
    name: "Financial Connections",
    metaTitle: "Financial Connections Integration",
    metaDescription:
      "Securely link customer bank accounts for verification, underwriting, or ACH payments with Stripe Financial Connections.",
    keywords: ["stripe financial connections integration", "bank account linking stripe", "stripe plaid alternative"],
    heroHeadline: "Bank-Linked Data, Without the Bank-Linking Headache",
    heroSubhead: "Stripe Financial Connections for verification, underwriting, or faster ACH.",
    benefits: [
      "Native Stripe alternative to third-party bank-linking tools",
      "Speeds up ACH setup with instant verification",
      "Enables balance/transaction data for underwriting use cases",
      "Fewer vendors, one Stripe-native data flow",
    ],
    features: [
      "Account-linking flow integration",
      "Balance & transaction data retrieval",
      "Consent/permission UX",
      "Use-case-specific data scoping (payments vs. underwriting)",
    ],
    industries: ["finance"],
    faqs: [
      {
        question: "How is this different from Plaid?",
        answer: "It's Stripe-native, so it integrates directly with ACH and ties into your existing Stripe account without a separate vendor.",
      },
      {
        question: "Does this speed up ACH verification?",
        answer: "Yes — instant account verification replaces the multi-day micro-deposit flow.",
      },
    ],
    ctaLabel: "Explore Financial Connections",
    relatedServices: ["ach", "stripe-identity"],
  },
  {
    slug: "stripe-terminal",
    category: "business-tools",
    name: "Terminal",
    metaTitle: "Stripe Terminal Integration Services",
    metaDescription:
      "In-person card payments with Stripe Terminal — POS integration, hardware setup, and unified online/offline reporting.",
    keywords: ["stripe terminal integration", "stripe pos setup", "in person stripe payments"],
    heroHeadline: "Online and In-Person Payments, One System",
    heroSubhead: "Stripe Terminal integration for unified POS and e-commerce reporting.",
    benefits: [
      "One reconciliation system for online + in-person sales",
      "Supports major card readers",
      "Unified customer/payment records",
      "Real-time inventory/order sync possible",
    ],
    features: [
      "Reader provisioning & pairing",
      "POS app/SDK integration",
      "Offline-mode transaction handling",
      "Unified reporting dashboard setup",
    ],
    industries: ["marketplace", "food-delivery"],
    faqs: [
      {
        question: "Which card readers does Stripe Terminal support?",
        answer: "The BBPOS WisePOS, Stripe Reader S700, and several other certified readers depending on region.",
      },
      {
        question: "Does it work offline if wifi drops?",
        answer: "Yes — Terminal supports offline mode with transactions syncing once connectivity returns.",
      },
    ],
    ctaLabel: "Set Up In-Person Payments",
    relatedServices: ["api-integration", "webhooks"],
  },

  // ---------- Developer Services ----------
  {
    slug: "api-integration",
    category: "developer-services",
    name: "API Integration",
    metaTitle: "Stripe API Integration Services",
    metaDescription:
      "Custom Stripe API integration for unique business logic — beyond what pre-built components can handle.",
    keywords: ["stripe api integration", "custom stripe development", "stripe api developer"],
    heroHeadline: "When Off-the-Shelf Stripe Isn't Enough",
    heroSubhead: "Custom Stripe API integration for your exact business logic.",
    benefits: [
      "Handles edge cases pre-built components can't",
      "Full control over payment flow logic",
      "Scales with custom business rules",
      "Direct API access = fewer platform limitations",
    ],
    features: [
      "Custom API endpoint architecture",
      "Idempotency & retry strategy",
      "Rate-limit-aware request design",
      "Error-handling & logging strategy",
    ],
    industries: ["saas", "marketplace", "finance"],
    faqs: [
      {
        question: "When do we need custom API integration vs. pre-built components?",
        answer: "When your business logic (pricing, multi-party splits, complex eligibility rules) doesn't map cleanly onto Checkout or Payment Element alone.",
      },
      {
        question: "How do you handle Stripe API version upgrades over time?",
        answer: "We pin API versions explicitly and schedule upgrade reviews rather than auto-upgrading silently.",
      },
    ],
    ctaLabel: "Scope My Custom Integration",
    relatedServices: ["webhooks", "stripe-sdk", "migration", "performance-optimization"],
  },
  {
    slug: "webhooks",
    category: "developer-services",
    name: "Webhooks",
    metaTitle: "Stripe Webhooks Integration Services",
    metaDescription:
      "Reliable Stripe webhook infrastructure — correctly verified, idempotent, and monitored in production.",
    keywords: ["stripe webhooks integration", "stripe webhook setup", "stripe webhook debugging"],
    heroHeadline: "Webhooks That Don't Silently Fail",
    heroSubhead: "Production-grade Stripe webhook handling, verified and monitored.",
    benefits: [
      "Prevents silent data-sync failures",
      "Correct signature verification (security)",
      "Idempotent event handling (no duplicate processing)",
      "Monitoring/alerting on failures",
    ],
    features: [
      "Endpoint architecture & signature verification",
      "Event-type routing logic",
      "Retry/dead-letter handling",
      "Monitoring & alerting setup",
    ],
    industries: ["saas", "marketplace"],
    faqs: [
      {
        question: "Why are we missing webhook events in production?",
        answer: "Most commonly: signature verification failing silently, endpoint timeouts, or unhandled event types — we audit for all three.",
      },
      {
        question: "How do you prevent duplicate event processing?",
        answer: "By storing processed event IDs and checking them before acting on any webhook payload.",
      },
    ],
    ctaLabel: "Fix or Build My Webhook Infrastructure",
    relatedServices: ["api-integration", "bug-fixes", "performance-optimization"],
  },
  {
    slug: "stripe-sdk",
    category: "developer-services",
    name: "Stripe SDK",
    metaTitle: "Stripe SDK Integration Services",
    metaDescription:
      "Expert Stripe SDK integration across web, iOS, Android, and server-side stacks — done right the first time.",
    keywords: ["stripe sdk integration", "stripe react native sdk", "stripe mobile sdk developer"],
    heroHeadline: "The Right SDK, Implemented the Right Way",
    heroSubhead: "Stripe SDK integration across web, mobile, and server stacks.",
    benefits: [
      "Avoids common SDK misconfiguration pitfalls",
      "Consistent behavior across platforms",
      "Faster than learning Stripe's SDKs from scratch",
      "Native mobile support (iOS/Android/React Native)",
    ],
    features: [
      "Web (JS/React) SDK setup",
      "Mobile SDK (iOS/Android/React Native) integration",
      "Server-side SDK (Node/Python/Ruby/PHP/Go) setup",
      "Version upgrade management",
    ],
    industries: ["saas"],
    faqs: [
      {
        question: "Do you support React Native and native iOS/Android SDKs?",
        answer: "Yes, all three, including the platform-specific quirks each one has around wallets and 3DS.",
      },
      {
        question: "Can you integrate the server-side SDK into our existing backend language?",
        answer: "Yes — Node, Python, Ruby, PHP, Go, and .NET are all officially supported.",
      },
    ],
    ctaLabel: "Get My SDK Integrated Correctly",
    relatedServices: ["api-integration", "migration"],
  },
  {
    slug: "migration",
    category: "developer-services",
    name: "Migration",
    metaTitle: "Stripe Migration Services",
    metaDescription:
      "Migrate from another payment provider — or an old Stripe setup — with zero downtime and no lost billing history.",
    keywords: ["stripe migration service", "migrate to stripe", "payment provider migration"],
    heroHeadline: "Switch to Stripe Without Breaking Billing",
    heroSubhead: "Zero-downtime migration, with full billing history intact.",
    benefits: [
      "No downtime during cutover",
      "Preserves subscription/billing history",
      "De-risks a high-stakes migration",
      "Handles dual-running/cutover strategy",
    ],
    features: [
      "Data migration (customers, subscriptions)",
      "Dual-processing cutover strategy",
      "Reconciliation & validation",
      "Rollback plan",
    ],
    industries: ["saas"],
    faqs: [
      {
        question: "Can you migrate our subscribers without asking them to re-enter cards?",
        answer: "In most cases yes, via provider-to-provider card migration APIs where both providers support it.",
      },
      {
        question: "Can you migrate from PayPal/Braintree/Square to Stripe?",
        answer: "Yes, this is one of our most common migration paths.",
      },
    ],
    ctaLabel: "Plan My Migration",
    relatedServices: ["api-integration", "stripe-billing", "bug-fixes"],
  },
  {
    slug: "bug-fixes",
    category: "developer-services",
    name: "Bug Fixes",
    metaTitle: "Stripe Integration Bug Fix Services",
    metaDescription:
      "Fast, expert fixes for broken Stripe integrations — webhook failures, billing errors, checkout bugs.",
    keywords: ["stripe bug fix service", "fix stripe integration", "stripe integration support"],
    heroHeadline: "Something's Broken in Production. We Fix Stripe Fast.",
    heroSubhead: "Emergency and scheduled Stripe bug-fix support.",
    benefits: [
      "Fast turnaround on production issues",
      "Deep Stripe-specific debugging expertise",
      "Root-cause fixes, not band-aids",
      "Optional ongoing support retainer",
    ],
    features: [
      "Webhook failure diagnosis",
      "Billing/charge discrepancy resolution",
      "Checkout/Payment Element bug triage",
      "Post-fix regression testing",
    ],
    industries: ["saas", "marketplace"],
    faqs: [
      {
        question: "Do you offer emergency/same-day support?",
        answer: "Yes, for active production incidents — reach out via the consultation form and flag it as urgent.",
      },
      {
        question: "Can you fix an integration you didn't originally build?",
        answer: "Yes — this is one of our most common engagements.",
      },
    ],
    ctaLabel: "Get Emergency Support",
    relatedServices: ["webhooks", "security-review", "performance-optimization"],
  },
  {
    slug: "performance-optimization",
    category: "developer-services",
    name: "Performance Optimization",
    metaTitle: "Stripe Performance Optimization Services",
    metaDescription:
      "Speed up checkout load times, reduce API latency, and optimize your Stripe integration for scale.",
    keywords: ["stripe performance optimization", "stripe checkout speed", "stripe integration audit"],
    heroHeadline: "A Faster Checkout Converts More Customers",
    heroSubhead: "Performance-tuned Stripe integrations, benchmarked and optimized.",
    benefits: [
      "Faster checkout load = higher conversion",
      "Reduced API latency at scale",
      "Identifies bottlenecks before they cost revenue",
      "Benchmarked before/after results",
    ],
    features: [
      "Checkout load-time audit",
      "API call pattern optimization (batching, caching)",
      "Webhook processing throughput tuning",
      "Load-testing for scale events",
    ],
    industries: ["saas", "marketplace"],
    faqs: [
      {
        question: "How much can checkout speed actually improve conversion?",
        answer: "Even a 1-second improvement commonly moves conversion by several percentage points on high-traffic checkouts.",
      },
      {
        question: "Do you load-test for traffic spikes (e.g. product launches)?",
        answer: "Yes, we simulate expected peak load against your integration before major launch events.",
      },
    ],
    ctaLabel: "Audit My Checkout Performance",
    relatedServices: ["api-integration", "webhooks", "embedded-checkout"],
  },
  {
    slug: "pci-compliance",
    category: "developer-services",
    name: "PCI Compliance",
    metaTitle: "PCI Compliance for Stripe Integrations",
    metaDescription:
      "Achieve and maintain PCI DSS compliance for your Stripe integration — SAQ guidance, architecture review, documentation.",
    keywords: ["pci compliance stripe", "pci dss stripe integration", "stripe compliance audit"],
    heroHeadline: "Stay Compliant Without Slowing Down",
    heroSubhead: "PCI DSS compliance guidance built around your Stripe architecture.",
    benefits: [
      "Reduces compliance risk and audit stress",
      "Guidance on correct SAQ type for your integration",
      "Avoids common compliance-breaking mistakes",
      "Documentation ready for auditors/partners",
    ],
    features: [
      "PCI scope assessment",
      "SAQ-type guidance (A, A-EP, D)",
      "Architecture review against PCI requirements",
      "Compliance documentation package",
    ],
    industries: ["finance", "marketplace"],
    faqs: [
      {
        question: "Does using Stripe Checkout reduce our PCI scope automatically?",
        answer: "Yes, significantly — hosted Checkout typically qualifies for the simplest SAQ A designation.",
      },
      {
        question: "Do you provide documentation for our own compliance audits?",
        answer: "Yes, a full compliance documentation package tailored to your architecture.",
      },
    ],
    ctaLabel: "Get a PCI Compliance Review",
    relatedServices: ["security-review", "stripe-radar", "stripe-identity"],
  },
  {
    slug: "security-review",
    category: "developer-services",
    name: "Security Review",
    metaTitle: "Stripe Integration Security Review Services",
    metaDescription:
      "Deep security audit of your Stripe integration — API key handling, webhook verification, data exposure risks.",
    keywords: ["stripe security review", "stripe integration audit", "stripe security best practices"],
    heroHeadline: "Find the Gaps Before Someone Else Does",
    heroSubhead: "A full security audit of your Stripe integration, top to bottom.",
    benefits: [
      "Identifies API key/secret exposure risks",
      "Validates webhook signature verification",
      "Reduces fraud and data-breach exposure",
      "Delivered as a prioritized action report",
    ],
    features: [
      "API key/secret management audit",
      "Webhook signature verification check",
      "Client-side data exposure review",
      "Prioritized remediation report",
    ],
    industries: ["saas", "finance", "marketplace"],
    faqs: [
      {
        question: "What exactly do you check in a security review?",
        answer: "Key/secret handling, webhook verification, client-side exposure, and Radar/3DS configuration, among other checks.",
      },
      {
        question: "Do you fix issues found, or just report them?",
        answer: "Both options are available — a report-only audit, or an audit-plus-remediation engagement.",
      },
    ],
    ctaLabel: "Book My Security Review",
    relatedServices: ["pci-compliance", "stripe-radar", "bug-fixes", "webhooks"],
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getServicesByCategory(categorySlug: string): ServiceContent[] {
  return SERVICES.filter((service) => service.category === categorySlug);
}

export function getRelatedServices(service: ServiceContent, limit = 4): ServiceContent[] {
  const explicit = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceContent => Boolean(s));

  if (explicit.length >= limit) return explicit.slice(0, limit);

  const sameCategory = getServicesByCategory(service.category).filter(
    (s) => s.slug !== service.slug && !explicit.some((e) => e.slug === s.slug),
  );

  return [...explicit, ...sameCategory].slice(0, limit);
}
