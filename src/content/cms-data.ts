export interface CmsContent {
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

export const CMS_DATA: CmsContent[] = [
  {
    slug: "shopify",
    name: "Shopify",
    metaTitle: "Stripe Integration for Shopify",
    metaDescription:
      "Custom Stripe integration for Shopify beyond the default Shopify Payments plugin — Connect marketplaces, custom checkouts, and more.",
    heroHeadline: "Stripe Integration for Shopify, Beyond the Default Plugin",
    heroSubhead: "For when Shopify Payments alone doesn't cover your business model.",
    context:
      "Shopify Payments (built on Stripe) covers standard storefronts well, but marketplaces, custom subscription logic, and multi-vendor payouts typically need a custom Stripe integration alongside or instead of the default plugin.",
    relevantServices: ["stripe-connect-express", "stripe-billing", "webhooks"],
    faqs: [
      {
        question: "Why would we need custom Stripe integration if we already use Shopify Payments?",
        answer: "Multi-vendor marketplaces, custom subscription billing, and non-standard payout logic all fall outside what Shopify Payments supports natively.",
      },
      {
        question: "Does this work with Shopify Plus?",
        answer: "Yes, including custom checkout extensibility available on Plus plans.",
      },
    ],
  },
  {
    slug: "woocommerce",
    name: "WooCommerce",
    metaTitle: "Stripe Integration for WooCommerce",
    metaDescription:
      "Custom Stripe integration for WooCommerce — beyond the standard Stripe plugin, including Connect and custom billing logic.",
    heroHeadline: "Stripe Integration for WooCommerce, Custom-Built",
    heroSubhead: "When the standard Stripe WooCommerce plugin hits its limits.",
    context:
      "WooCommerce's official Stripe plugin handles basic checkout well, but complex subscription rules, marketplace payouts, or custom payment flows usually require direct API work on top of (or instead of) the plugin.",
    relevantServices: ["stripe-checkout", "stripe-billing", "stripe-connect-standard"],
    faqs: [
      {
        question: "Can you extend the existing Stripe WooCommerce plugin instead of replacing it?",
        answer: "Often yes — we assess whether extending the plugin or a custom integration is the better path for your specific requirements.",
      },
      {
        question: "Does this affect our existing WordPress hosting setup?",
        answer: "No, this is purely a payment-layer integration and doesn't require hosting changes.",
      },
    ],
  },
  {
    slug: "magento",
    name: "Magento",
    metaTitle: "Stripe Integration for Magento",
    metaDescription:
      "Stripe integration for Magento/Adobe Commerce — custom payment methods, subscriptions, and multi-store configurations.",
    heroHeadline: "Stripe Integration for Magento / Adobe Commerce",
    heroSubhead: "Custom Stripe payment methods and billing logic for complex Magento stores.",
    context:
      "Magento's multi-store, multi-currency architecture requires careful Stripe configuration per store view — we handle this complexity directly rather than relying on generic extension defaults.",
    relevantServices: ["stripe-checkout", "stripe-tax", "api-integration"],
    faqs: [
      {
        question: "Does this work across multiple Magento store views/currencies?",
        answer: "Yes, we configure Stripe per store view where currency or tax handling differs.",
      },
      {
        question: "Adobe Commerce or open-source Magento?",
        answer: "Both — the core Stripe integration approach is the same across editions.",
      },
    ],
  },
  {
    slug: "bigcommerce",
    name: "BigCommerce",
    metaTitle: "Stripe Integration for BigCommerce",
    metaDescription:
      "Stripe integration for BigCommerce stores needing more than the built-in payment gateway options.",
    heroHeadline: "Stripe Integration for BigCommerce",
    heroSubhead: "Custom Stripe payment flows for BigCommerce stores outgrowing default gateway options.",
    context:
      "BigCommerce supports Stripe as a gateway option, but custom checkout experiences and marketplace models often need direct API integration via BigCommerce's APIs and webhooks.",
    relevantServices: ["stripe-checkout", "payment-element"],
    faqs: [
      {
        question: "Can we keep BigCommerce's hosted checkout and still customize payments?",
        answer: "To a degree — deeper customization typically requires BigCommerce's Open Checkout or a headless setup.",
      },
      {
        question: "Do you support headless BigCommerce builds?",
        answer: "Yes, this is actually where the most flexible Stripe integrations happen.",
      },
    ],
  },
  {
    slug: "webflow",
    name: "Webflow",
    metaTitle: "Stripe Integration for Webflow",
    metaDescription:
      "Custom Stripe payment integration for Webflow sites — Checkout, Payment Links, and backend logic Webflow can't handle alone.",
    heroHeadline: "Stripe Integration for Webflow Sites",
    heroSubhead: "Real Stripe payment logic behind your Webflow front end.",
    context:
      "Webflow has no native backend, so any real Stripe logic (subscriptions, webhooks, custom pricing) needs an external service wired in via Webflow's forms/APIs or a custom embed — this is where most Webflow-Stripe projects go wrong without backend expertise.",
    relevantServices: ["stripe-checkout", "payment-links", "webhooks"],
    faqs: [
      {
        question: "Can Webflow handle subscriptions natively?",
        answer: "Not natively — we build a lightweight backend service to handle subscription logic and webhooks alongside your Webflow site.",
      },
      {
        question: "Does this work with Webflow's built-in e-commerce?",
        answer: "Yes, or independently via Payment Links/Checkout embedded into custom Webflow pages.",
      },
    ],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    metaTitle: "Stripe Integration for WordPress",
    metaDescription:
      "Custom Stripe payment integration for WordPress — beyond basic plugins, including subscriptions and custom checkout flows.",
    heroHeadline: "Stripe Integration for WordPress Sites",
    heroSubhead: "Custom Stripe logic for WordPress sites that have outgrown off-the-shelf plugins.",
    context:
      "Generic WordPress payment plugins cover simple use cases; custom membership sites, complex subscription tiers, and marketplace features usually need direct Stripe API work via a custom plugin or theme integration.",
    relevantServices: ["stripe-checkout", "stripe-billing", "customer-portal"],
    faqs: [
      {
        question: "Do you build a custom plugin or modify our theme directly?",
        answer: "Typically a lightweight custom plugin, keeping Stripe logic decoupled from theme updates.",
      },
      {
        question: "Does this work alongside membership plugins like MemberPress?",
        answer: "Yes, we can integrate alongside existing membership plugins or replace their payment layer entirely.",
      },
    ],
  },
  {
    slug: "wix",
    name: "Wix",
    metaTitle: "Stripe Integration for Wix",
    metaDescription:
      "Stripe payment integration for Wix sites using Wix's Velo custom code platform.",
    heroHeadline: "Stripe Integration for Wix Sites",
    heroSubhead: "Custom Stripe logic via Wix Velo for stores outgrowing Wix Payments.",
    context:
      "Wix's Velo platform allows custom backend code, which is what makes real Stripe integration possible beyond Wix's built-in payment options — we work within Wix's constraints to wire up Stripe correctly.",
    relevantServices: ["stripe-checkout", "payment-links"],
    faqs: [
      {
        question: "Does this require Wix's Velo (custom code) plan?",
        answer: "Yes, any custom Stripe logic beyond basic payment links requires a Velo-enabled plan.",
      },
      {
        question: "Can we migrate away from Wix Payments without migrating the whole site?",
        answer: "Yes, the payment layer can typically be swapped independently of the rest of the site.",
      },
    ],
  },
];
