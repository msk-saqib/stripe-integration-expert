import type { ContentBlock } from "@/lib/content/blog";

export interface CmsContent {
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
    body: [
      { type: "paragraph", text: "Shopify Payments is built on Stripe under the hood, which covers a standard single-vendor storefront well — but the moment your business model involves multiple sellers, custom subscription logic beyond Shopify's native subscription APIs, or payout splitting, you need a Stripe integration that runs alongside or instead of the default plugin." },
      { type: "heading", level: 2, text: "When to Go Beyond Shopify Payments", id: "shopify-beyond" },
      { type: "list", items: [
        "Multi-vendor marketplace models, where Shopify Payments has no native concept of splitting a sale across sellers",
        "Custom subscription billing (usage-based, complex proration) beyond what Shopify's subscription APIs or apps support",
        "Non-standard payout schedules or reserve logic for marketplace-style risk management",
        "Shopify Plus's checkout extensibility opens more integration surface than standard plans allow — relevant if you're customizing checkout directly",
      ] },
      { type: "paragraph", text: "We typically run the custom Stripe logic (Connect accounts, custom billing) alongside Shopify's own checkout rather than replacing it wholesale, since Shopify's checkout conversion optimization is genuinely good — the goal is extending what happens with the money after checkout, not rebuilding checkout itself." },
    ],
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
    body: [
      { type: "paragraph", text: "WooCommerce's official Stripe plugin handles standard checkout well for a typical single-store setup, but it wasn't built for complex subscription rules, marketplace-style seller payouts, or custom payment flows — those need direct API work layered on top of, or occasionally replacing, the plugin's default behavior." },
      { type: "heading", level: 2, text: "Extending vs. Replacing the Plugin", id: "woo-extend" },
      { type: "list", items: [
        "Custom subscription proration or usage billing rules generally require bypassing the plugin's built-in subscription handling for the specific product lines that need it",
        "Marketplace/multi-vendor payouts need Connect account architecture the plugin doesn't provide out of the box",
        "Webhook handling for custom events should run alongside the plugin's own webhook listener, not conflict with it",
        "This is purely a payment-layer change — it doesn't require touching your existing WordPress hosting setup",
      ] },
      { type: "paragraph", text: "We assess the existing plugin configuration first and extend it wherever the plugin's conventions already fit your model, reserving custom integration work for the specific gaps (usually subscriptions or marketplace payouts) rather than rebuilding what already works." },
    ],
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
    body: [
      { type: "paragraph", text: "Magento and Adobe Commerce's multi-store, multi-currency architecture means Stripe configuration often needs to vary per store view — different currencies, different tax treatment, sometimes different Stripe accounts entirely for genuinely separate business entities running on the same Magento instance." },
      { type: "heading", level: 2, text: "Multi-Store Stripe Configuration", id: "magento-multistore" },
      { type: "list", items: [
        "Per-store-view currency handling, since a single Magento instance can run multiple currencies that each need correct Stripe presentment",
        "Tax calculation differences across store views, coordinated with Stripe Tax rather than relying solely on Magento's native tax rules",
        "Custom payment methods beyond generic extension defaults, when Magento's out-of-box Stripe extension doesn't match your checkout flow",
        "Both Adobe Commerce and open-source Magento use the same core Stripe integration approach — the difference is in surrounding platform features, not the payment layer",
      ] },
      { type: "paragraph", text: "We treat each store view's payment configuration as its own scoped decision rather than assuming one Stripe setup covers every storefront on the instance — the multi-currency/multi-tax complexity is exactly where generic extension defaults tend to fall short." },
    ],
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
    body: [
      { type: "paragraph", text: "BigCommerce supports Stripe as a standard gateway option, which covers typical checkout well, but custom checkout experiences and marketplace-style models generally require direct API integration via BigCommerce's own APIs and webhooks rather than the gateway configuration alone." },
      { type: "heading", level: 2, text: "Open Checkout, Headless, and Custom Flows", id: "bigcommerce-checkout" },
      { type: "list", items: [
        "BigCommerce's Open Checkout allows deeper payment customization than the hosted checkout default, at the cost of more integration work",
        "Headless BigCommerce builds (decoupled storefront) are where the most flexible Stripe integrations actually happen, since you control the entire checkout UI",
        "Marketplace-style split payments need Connect architecture layered on top of BigCommerce's own order/webhook events",
        "Standard hosted checkout can be kept for most of the flow, with targeted customization only where BigCommerce's defaults fall short",
      ] },
      { type: "paragraph", text: "If deep checkout customization or marketplace logic is the actual requirement, we usually steer toward a headless BigCommerce architecture rather than fighting the hosted checkout's customization limits — it's more upfront work but avoids repeatedly working around constraints that a headless setup simply doesn't have." },
    ],
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
    body: [
      { type: "paragraph", text: "Webflow has no native backend, which means any real Stripe logic — subscriptions, webhooks, custom pricing — needs an external service wired in through Webflow's forms, custom code embeds, or API calls. This is the single most common place Webflow-Stripe projects go wrong: treating Webflow as capable of something it structurally isn't." },
      { type: "heading", level: 2, text: "The Lightweight Backend Webflow Actually Needs", id: "webflow-backend" },
      { type: "list", items: [
        "A small external service (serverless functions are usually sufficient) to create Checkout Sessions and handle webhooks — Webflow itself can't do either",
        "Webflow's built-in e-commerce can work alongside this for simple product sales, or be bypassed entirely via Payment Links/Checkout embedded into custom pages",
        "Subscription state (active/canceled/past_due) needs to live in your external service, then surface back into Webflow via custom code or a member-gating tool",
        "Custom embeds need to respect Webflow's designer/publish workflow so the integration survives future page edits without breaking",
      ] },
      { type: "paragraph", text: "We scope the external backend as narrowly as possible — just enough to do what Webflow structurally can't — rather than building a full application server for what's fundamentally a marketing-site-plus-payments use case." },
    ],
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
    body: [
      { type: "paragraph", text: "Generic WordPress payment plugins handle simple, single-product or single-tier checkout well. Complex membership sites, tiered subscriptions, or marketplace features consistently outgrow what an off-the-shelf plugin supports, and need direct Stripe API work — usually via a lightweight custom plugin kept deliberately decoupled from your theme." },
      { type: "heading", level: 2, text: "Custom Plugin vs. Theme Integration", id: "wp-plugin" },
      { type: "list", items: [
        "A lightweight custom plugin keeps Stripe logic isolated from theme updates, which otherwise risk breaking payment code on every theme change",
        "Integrating alongside existing membership plugins (like MemberPress) is usually possible without replacing them outright",
        "Complex tiered subscriptions or usage billing generally need direct Stripe Billing API work the plugin ecosystem doesn't cover",
        "Webhook endpoints in WordPress need to bypass some of WordPress's default request handling to receive raw Stripe payloads correctly",
      ] },
      { type: "paragraph", text: "The decoupling-from-theme decision is the one most WordPress Stripe projects skip early and regret later — a theme update that touches payment logic embedded directly in template files is a recurring, avoidable source of checkout outages." },
    ],
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
    body: [
      { type: "paragraph", text: "Wix's Velo platform is what makes a real Stripe integration possible on Wix at all — without Velo's custom backend code, you're limited to Wix's own built-in payment options, which don't support custom billing logic, Connect-style payouts, or anything beyond simple product/service payments." },
      { type: "heading", level: 2, text: "Working Within Velo's Constraints", id: "wix-velo" },
      { type: "list", items: [
        "Any custom Stripe logic beyond basic Payment Links requires a Velo-enabled plan — this is a hard platform requirement, not a preference",
        "Velo's backend code runs in a more constrained environment than a general-purpose server, which shapes how webhook handling and API calls are structured",
        "The payment layer can typically be migrated away from Wix Payments independently of the rest of the site, if a future platform migration is on the roadmap",
        "Testing webhook delivery specifically within Velo's execution model, since its constraints differ from a standard Node.js server environment",
      ] },
      { type: "paragraph", text: "We work within Velo's actual constraints rather than assuming Wix behaves like a conventional hosting environment — the platform's limitations are real, and the integration design needs to account for them rather than discover them mid-build." },
    ],
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
