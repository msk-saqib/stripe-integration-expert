export interface FrameworkContent {
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

export const FRAMEWORKS_DATA: FrameworkContent[] = [
  {
    slug: "nextjs",
    name: "Next.js",
    metaTitle: "Stripe Integration for Next.js | Ledger & Co.",
    metaDescription:
      "Expert Stripe integration for Next.js 13–15 — App Router, Server Actions, webhooks, and Payment Element done right.",
    heroHeadline: "Stripe Integration for Next.js, Done Right",
    heroSubhead: "App Router, Server Actions, and edge-aware Stripe patterns — not a copy-pasted tutorial.",
    context:
      "Next.js's App Router changes how Stripe integrations are typically wired — Server Actions and Route Handlers replace the old API routes pattern, and webhook handlers need to be explicitly excluded from edge runtime. We build integrations that use Next.js idioms correctly instead of forcing a Pages Router pattern into App Router.",
    relevantServices: ["stripe-checkout", "payment-element", "webhooks", "api-integration"],
    faqs: [
      {
        question: "Do you support both App Router and Pages Router?",
        answer: "Yes, though App Router is our default recommendation for new projects given its Server Component and Server Action support.",
      },
      {
        question: "Can webhooks run on the edge runtime?",
        answer: "No — Stripe webhook signature verification requires the Node.js runtime, which we configure explicitly on the route handler.",
      },
    ],
  },
  {
    slug: "react",
    name: "React",
    metaTitle: "Stripe Integration for React | Ledger & Co.",
    metaDescription:
      "Stripe Elements and Payment Element integration for React SPAs — clean state management, no framework lock-in.",
    heroHeadline: "Stripe Integration for React Applications",
    heroSubhead: "Payment Element and Checkout integration for client-rendered React apps.",
    context:
      "Pure React (Vite/CRA-style SPAs) needs a paired backend for anything beyond Payment Links — we build the API layer alongside the React frontend, or integrate against your existing backend.",
    relevantServices: ["payment-element", "stripe-checkout", "api-integration"],
    faqs: [
      {
        question: "Do we need a backend for Stripe with a React SPA?",
        answer: "Yes — creating PaymentIntents and handling webhooks requires a server; we scope this alongside your frontend work.",
      },
      {
        question: "Which state management pattern do you use for payment state?",
        answer: "We adapt to your existing stack (Redux, Zustand, React Query) rather than imposing a new one.",
      },
    ],
  },
  {
    slug: "react-native",
    name: "React Native",
    metaTitle: "Stripe Integration for React Native | Ledger & Co.",
    metaDescription:
      "Native Stripe SDK integration for React Native — Apple Pay, Google Pay, and Payment Sheet done correctly.",
    heroHeadline: "Stripe Integration for React Native Apps",
    heroSubhead: "Native Payment Sheet, wallets, and subscriptions for iOS and Android.",
    context:
      "React Native uses Stripe's native mobile SDK, not the web Elements library — wallet configuration, App Store/Play Store compliance, and native module linking all need mobile-specific handling.",
    relevantServices: ["stripe-sdk", "apple-pay", "google-pay"],
    faqs: [
      {
        question: "Does this work with both Expo and bare React Native?",
        answer: "Yes, including Expo's config plugin setup for the native Stripe SDK.",
      },
      {
        question: "Do in-app purchases conflict with Stripe on mobile?",
        answer: "For physical goods/services, Stripe is fine; digital goods sold in-app may require App Store/Play Store billing instead — we advise on this distinction.",
      },
    ],
  },
  {
    slug: "flutter",
    name: "Flutter",
    metaTitle: "Stripe Integration for Flutter | Ledger & Co.",
    metaDescription:
      "Stripe integration for Flutter apps — native Payment Sheet, Apple Pay, and Google Pay via the official Flutter SDK.",
    heroHeadline: "Stripe Integration for Flutter Apps",
    heroSubhead: "Native Payment Sheet integration across iOS and Android from one Flutter codebase.",
    context:
      "Flutter's official Stripe SDK wraps the native iOS/Android SDKs — we handle platform-specific configuration (Info.plist, AndroidManifest) that Flutter doesn't abstract away for you.",
    relevantServices: ["stripe-sdk", "apple-pay", "google-pay"],
    faqs: [
      {
        question: "Does the Flutter Stripe SDK support Payment Sheet?",
        answer: "Yes, and we configure it to match your app's theming rather than using the default appearance.",
      },
      {
        question: "Any Flutter-specific gotchas?",
        answer: "Native module linking and platform-specific wallet configuration are the most common sources of bugs — we test on real devices, not just simulators.",
      },
    ],
  },
  {
    slug: "laravel",
    name: "Laravel",
    metaTitle: "Stripe Integration for Laravel | Ledger & Co.",
    metaDescription:
      "Stripe integration for Laravel — Cashier setup or custom API integration, webhooks, and subscription billing.",
    heroHeadline: "Stripe Integration for Laravel Applications",
    heroSubhead: "Laravel Cashier configured correctly, or custom Stripe API integration when Cashier isn't the right fit.",
    context:
      "Laravel Cashier abstracts a lot of Stripe Billing, but its defaults don't always match custom pricing models — we know when to extend Cashier versus building directly against the Stripe API.",
    relevantServices: ["stripe-billing", "webhooks", "api-integration"],
    faqs: [
      {
        question: "Do you use Laravel Cashier or the raw Stripe SDK?",
        answer: "Cashier when your billing model fits its conventions; the raw SDK when you need more control (e.g. complex usage billing).",
      },
      {
        question: "How are webhooks handled in Laravel?",
        answer: "Via Cashier's webhook controller when using Cashier, or a custom signed route handler otherwise.",
      },
    ],
  },
  {
    slug: "nodejs",
    name: "Node.js",
    metaTitle: "Stripe Integration for Node.js | Ledger & Co.",
    metaDescription:
      "Custom Stripe API integration for Node.js backends — Checkout, Billing, Connect, and webhook infrastructure.",
    heroHeadline: "Stripe Integration for Node.js Backends",
    heroSubhead: "Framework-agnostic Stripe API integration for any Node.js service.",
    context:
      "Whether you're on a custom Node server, a serverless function stack, or a monorepo API, we integrate the official Stripe Node SDK with proper idempotency, retry, and webhook handling.",
    relevantServices: ["api-integration", "webhooks", "stripe-sdk"],
    faqs: [
      {
        question: "Do you work with serverless Node (Lambda, Vercel Functions)?",
        answer: "Yes — we account for cold starts and execution time limits in the webhook and API design.",
      },
      {
        question: "TypeScript or plain JavaScript?",
        answer: "We default to TypeScript for type-safe Stripe object handling, but work in either.",
      },
    ],
  },
  {
    slug: "express",
    name: "Express",
    metaTitle: "Stripe Integration for Express.js | Ledger & Co.",
    metaDescription:
      "Stripe integration for Express.js APIs — Checkout Sessions, webhook routes, and subscription billing.",
    heroHeadline: "Stripe Integration for Express.js APIs",
    heroSubhead: "Clean middleware patterns for Stripe routes, webhook verification, and error handling.",
    context:
      "Express's middleware model needs specific handling for Stripe webhooks — the raw request body must bypass JSON body-parsing middleware for signature verification to work, a detail commonly missed.",
    relevantServices: ["webhooks", "api-integration", "stripe-checkout"],
    faqs: [
      {
        question: "Why does webhook signature verification keep failing in Express?",
        answer: "Almost always because `express.json()` middleware parses the body before Stripe can verify the raw payload — we fix this with route-level raw body handling.",
      },
      {
        question: "Do you set up rate limiting on Stripe-facing routes?",
        answer: "Yes, particularly on webhook endpoints to prevent abuse while still accepting legitimate retries.",
      },
    ],
  },
  {
    slug: "django",
    name: "Django",
    metaTitle: "Stripe Integration for Django | Ledger & Co.",
    metaDescription:
      "Stripe integration for Django — dj-stripe setup or custom integration, webhooks, and subscription billing.",
    heroHeadline: "Stripe Integration for Django Applications",
    heroSubhead: "dj-stripe configured correctly, or a custom integration when you need more control.",
    context:
      "dj-stripe can sync Stripe objects into your Django models automatically, but it adds complexity you may not need for simpler integrations — we help decide, then implement either path cleanly.",
    relevantServices: ["stripe-billing", "webhooks", "api-integration"],
    faqs: [
      {
        question: "Should we use dj-stripe or the raw Stripe Python SDK?",
        answer: "dj-stripe is worth it if you need Stripe data queryable via Django's ORM; otherwise the raw SDK is simpler to reason about.",
      },
      {
        question: "How do webhooks integrate with Django's CSRF protection?",
        answer: "Webhook views are exempted from CSRF checks and instead verified via Stripe's signature header.",
      },
    ],
  },
  {
    slug: "aspnet",
    name: "ASP.NET",
    metaTitle: "Stripe Integration for ASP.NET | Ledger & Co.",
    metaDescription:
      "Stripe integration for ASP.NET Core — Checkout, Billing, and webhook handling using the official .NET SDK.",
    heroHeadline: "Stripe Integration for ASP.NET Core",
    heroSubhead: "Stripe.net SDK integration with clean dependency injection and async patterns.",
    context:
      "We integrate Stripe.net following ASP.NET Core conventions — typed HttpClient configuration, dependency-injected Stripe clients, and webhook endpoints that respect the framework's middleware pipeline.",
    relevantServices: ["api-integration", "webhooks", "stripe-billing"],
    faqs: [
      {
        question: "Do you support both .NET Framework and .NET Core?",
        answer: "We focus on ASP.NET Core (.NET 6+); legacy .NET Framework projects are evaluated case by case.",
      },
      {
        question: "How is the Stripe client configured for DI?",
        answer: "As a typed, injectable service configured once in Program.cs, not instantiated ad hoc per request.",
      },
    ],
  },
  {
    slug: "php",
    name: "PHP",
    metaTitle: "Stripe Integration for PHP | Ledger & Co.",
    metaDescription:
      "Stripe integration for plain PHP applications — Checkout, webhooks, and billing without a framework dependency.",
    heroHeadline: "Stripe Integration for PHP Applications",
    heroSubhead: "Framework-agnostic Stripe integration using the official PHP SDK.",
    context:
      "For PHP projects not built on Laravel or another framework, we integrate the Stripe PHP SDK directly — a common need for legacy applications and custom CMS-adjacent codebases.",
    relevantServices: ["stripe-checkout", "webhooks", "api-integration"],
    faqs: [
      {
        question: "Do you work with legacy PHP codebases?",
        answer: "Yes, including PHP 7.x projects, though we recommend a PHP 8+ upgrade path where feasible.",
      },
      {
        question: "How do you handle webhook signature verification in plain PHP?",
        answer: "Via the Stripe PHP SDK's built-in `Webhook::constructEvent` method against the raw request body.",
      },
    ],
  },
  {
    slug: "ruby-on-rails",
    name: "Ruby on Rails",
    metaTitle: "Stripe Integration for Ruby on Rails | Ledger & Co.",
    metaDescription:
      "Stripe integration for Rails — Stripe gem setup, webhooks, and subscription billing following Rails conventions.",
    heroHeadline: "Stripe Integration for Ruby on Rails",
    heroSubhead: "Idiomatic Rails patterns for Stripe — service objects, background jobs, and webhook controllers.",
    context:
      "We integrate the official Stripe Ruby gem using Rails conventions — webhook processing via ActiveJob for reliability, and service objects rather than fat controllers for payment logic.",
    relevantServices: ["stripe-billing", "webhooks", "api-integration"],
    faqs: [
      {
        question: "Do you process webhooks synchronously or via background jobs?",
        answer: "Via ActiveJob (Sidekiq or similar) — webhook endpoints should acknowledge quickly and process asynchronously.",
      },
      {
        question: "Does this work with Rails' credentials/encrypted secrets?",
        answer: "Yes, Stripe keys are stored via Rails encrypted credentials, not plain environment files.",
      },
    ],
  },
];
