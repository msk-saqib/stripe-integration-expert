import type { ContentBlock } from "@/lib/content/blog";

export interface FrameworkContent {
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

export const FRAMEWORKS_DATA: FrameworkContent[] = [
  {
    slug: "nextjs",
    name: "Next.js",
    metaTitle: "Stripe Integration for Next.js",
    metaDescription:
      "Expert Stripe integration for Next.js 13–15 — App Router, Server Actions, webhooks, and Payment Element done right.",
    heroHeadline: "Stripe Integration for Next.js, Done Right",
    heroSubhead: "App Router, Server Actions, and edge-aware Stripe patterns — not a copy-pasted tutorial.",
    context:
      "Next.js's App Router changes how Stripe integrations are typically wired — Server Actions and Route Handlers replace the old API routes pattern, and webhook handlers need to be explicitly excluded from edge runtime. We build integrations that use Next.js idioms correctly instead of forcing a Pages Router pattern into App Router.",
    body: [
      { type: "paragraph", text: "App Router changes more about a Stripe integration than most teams expect going in. Server Actions replace the old \"create an API route just to POST a form\" pattern for simple cases, and Route Handlers take over the webhook and callback surface — but the runtime configuration on that webhook handler is the detail that breaks nearly every first attempt." },
      { type: "heading", level: 2, text: "The App Router Details That Actually Matter", id: "nextjs-details" },
      { type: "list", items: [
        "Webhook signature verification needs the raw request body and Node.js crypto — explicitly set `export const runtime = \"nodejs\"` on that route, or it silently fails on Edge",
        "Server Actions are the cleanest way to create a Checkout Session from a form submission, with no separate API route needed",
        "Parallel/intercepting routes can model a Checkout modal without losing the underlying page's URL — useful for embedded upgrade flows",
        "Revalidate subscription-status-dependent pages after a webhook fires, via `revalidatePath` or `revalidateTag`, so cached pages don't show stale plan state",
      ] },
      { type: "paragraph", text: "We default new Next.js Stripe integrations to App Router idioms rather than porting a Pages Router pattern into it, because most of the friction we're brought in to fix on existing projects traces back to exactly that mismatch — API route habits fighting against Server Actions and Route Handlers instead of using them." },
    ],
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
    metaTitle: "Stripe Integration for React",
    metaDescription:
      "Stripe Elements and Payment Element integration for React SPAs — clean state management, no framework lock-in.",
    heroHeadline: "Stripe Integration for React Applications",
    heroSubhead: "Payment Element and Checkout integration for client-rendered React apps.",
    context:
      "Pure React (Vite/CRA-style SPAs) needs a paired backend for anything beyond Payment Links — we build the API layer alongside the React frontend, or integrate against your existing backend.",
    body: [
      { type: "paragraph", text: "A pure client-rendered React app (Vite or CRA-style) has no server by default, and Stripe requires one — PaymentIntent creation and webhook handling can't happen entirely in the browser without exposing your secret key. Every React SPA Stripe integration is really two projects: the frontend Elements/Payment Element work, and a minimal backend to pair with it." },
      { type: "heading", level: 2, text: "What the Backend Actually Needs to Do", id: "react-backend" },
      { type: "list", items: [
        "Create PaymentIntents/Checkout Sessions server-side using your secret key — never in client code, regardless of framework",
        "Receive and verify webhooks, since your SPA has no server-side listener of its own",
        "Expose a minimal, purpose-built API rather than a full framework if you don't already have a backend",
        "Handle CORS correctly between your SPA's origin and this new API surface, which is a common first-integration snag",
      ] },
      { type: "paragraph", text: "We adapt to whatever state management pattern your React app already uses — Redux, Zustand, React Query, or plain context — rather than imposing a new one just for payment state. The Stripe-specific work is almost always the backend pairing and the Payment Element wiring, not a rewrite of how your app manages state." },
    ],
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
    metaTitle: "Stripe Integration for React Native",
    metaDescription:
      "Native Stripe SDK integration for React Native — Apple Pay, Google Pay, and Payment Sheet done correctly.",
    heroHeadline: "Stripe Integration for React Native Apps",
    heroSubhead: "Native Payment Sheet, wallets, and subscriptions for iOS and Android.",
    context:
      "React Native uses Stripe's native mobile SDK, not the web Elements library — wallet configuration, App Store/Play Store compliance, and native module linking all need mobile-specific handling.",
    body: [
      { type: "paragraph", text: "React Native uses Stripe's native mobile SDK, not the web Elements library — a common first mistake is trying to port web Stripe.js patterns directly, which don't apply. The native SDK's Payment Sheet handles Apple Pay, Google Pay, and card entry as a single native UI component, configured through the SDK rather than styled with CSS." },
      { type: "heading", level: 2, text: "Native Module and Store-Compliance Considerations", id: "rn-native" },
      { type: "list", items: [
        "Native module linking (autolinking usually handles this, but custom native code or older RN versions can still need manual steps)",
        "Wallet configuration (Apple Pay merchant ID, Google Pay gateway config) is set up per-platform, not shared config",
        "Digital goods sold in-app may be required to go through App Store/Play Store billing instead of Stripe — a distinction that trips up subscription apps specifically",
        "Testing on real devices, not just simulators — wallet behavior and some native SDK behavior differs from simulator environments",
      ] },
      { type: "paragraph", text: "For both Expo and bare React Native projects, the actual integration risk clusters around store-compliance edge cases more than the Stripe SDK itself — we scope this explicitly upfront so a subscription app doesn't build an entire Stripe Billing flow only to discover it needs to run through in-app purchase instead." },
    ],
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
    metaTitle: "Stripe Integration for Flutter",
    metaDescription:
      "Stripe integration for Flutter apps — native Payment Sheet, Apple Pay, and Google Pay via the official Flutter SDK.",
    heroHeadline: "Stripe Integration for Flutter Apps",
    heroSubhead: "Native Payment Sheet integration across iOS and Android from one Flutter codebase.",
    context:
      "Flutter's official Stripe SDK wraps the native iOS/Android SDKs — we handle platform-specific configuration (Info.plist, AndroidManifest) that Flutter doesn't abstract away for you.",
    body: [
      { type: "paragraph", text: "Flutter's official Stripe SDK wraps the native iOS and Android SDKs rather than reimplementing payment logic in Dart — which means platform-specific configuration (Info.plist entries, AndroidManifest permissions) still needs to happen even though your application code is shared across both platforms." },
      { type: "heading", level: 2, text: "Platform Configuration Flutter Doesn't Abstract Away", id: "flutter-platform" },
      { type: "list", items: [
        "Info.plist merchant identifier and Apple Pay capability entries on iOS, configured outside of Dart code",
        "AndroidManifest permissions and Google Pay gateway metadata on Android",
        "Payment Sheet theming to match your app's design system rather than shipping Stripe's default appearance",
        "Testing wallet flows on physical devices for both platforms — simulator/emulator behavior for wallets is unreliable",
      ] },
      { type: "paragraph", text: "The Payment Sheet component gives you a consistent cross-platform payment UI with one integration point, which is Flutter's real advantage here — but the platform-native configuration underneath it is still two separate jobs, and skipping either half is the most common reason a Flutter Stripe integration works in development and fails in a store review or a real device test." },
    ],
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
    metaTitle: "Stripe Integration for Laravel",
    metaDescription:
      "Stripe integration for Laravel — Cashier setup or custom API integration, webhooks, and subscription billing.",
    heroHeadline: "Stripe Integration for Laravel Applications",
    heroSubhead: "Laravel Cashier configured correctly, or custom Stripe API integration when Cashier isn't the right fit.",
    context:
      "Laravel Cashier abstracts a lot of Stripe Billing, but its defaults don't always match custom pricing models — we know when to extend Cashier versus building directly against the Stripe API.",
    body: [
      { type: "paragraph", text: "Laravel Cashier abstracts a meaningful amount of Stripe Billing — subscriptions, invoices, and webhook handling come largely pre-wired — but its conventions assume a fairly standard subscription model. Custom pricing logic (usage-based tiers, non-standard proration rules, multi-product bundles) often needs to extend Cashier or bypass it for the specific piece that doesn't fit." },
      { type: "heading", level: 2, text: "When to Extend Cashier vs. Go Direct", id: "laravel-cashier" },
      { type: "list", items: [
        "Standard per-seat or flat-rate subscriptions: Cashier's conventions fit well with minimal customization",
        "Usage-based or metered billing: usually needs direct Stripe Billing API work alongside Cashier, not purely within it",
        "Webhook handling: Cashier's controller covers common events; less common events still need custom listeners",
        "Multi-product or bundled subscriptions: often cleaner built directly against the API than forced into Cashier's single-subscription-per-model assumption",
      ] },
      { type: "paragraph", text: "We treat this as a genuine architectural decision made once, upfront, rather than defaulting to Cashier and discovering the mismatch mid-project — reversing that choice after subscribers exist is significantly more expensive than choosing correctly the first time." },
    ],
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
    metaTitle: "Stripe Integration for Node.js",
    metaDescription:
      "Custom Stripe API integration for Node.js backends — Checkout, Billing, Connect, and webhook infrastructure.",
    heroHeadline: "Stripe Integration for Node.js Backends",
    heroSubhead: "Framework-agnostic Stripe API integration for any Node.js service.",
    context:
      "Whether you're on a custom Node server, a serverless function stack, or a monorepo API, we integrate the official Stripe Node SDK with proper idempotency, retry, and webhook handling.",
    body: [
      { type: "paragraph", text: "Node.js Stripe integrations are framework-agnostic by nature — the same core patterns apply whether you're on a custom Express-less server, a serverless function stack, or a monorepo API — but the details that determine reliability are the same three every time: idempotency, retry handling, and webhook signature verification done correctly." },
      { type: "heading", level: 2, text: "The Three Things a Production Node Integration Needs", id: "nodejs-production" },
      { type: "list", items: [
        "Idempotency keys on every request that creates a charge or subscription, so a network retry can't double-charge a customer",
        "Webhook handlers that acknowledge quickly (under Stripe's timeout) and process asynchronously, rather than doing slow work inline",
        "Explicit handling for Stripe's automatic retries on failed webhook deliveries — your handler needs to be safely re-runnable",
        "Cold-start awareness on serverless (Lambda, Vercel Functions) — a webhook handler with a slow cold start can miss Stripe's response-time expectations",
      ] },
      { type: "paragraph", text: "We default to TypeScript for Stripe object handling since the official SDK's types catch a large class of \"is this field optional or not\" bugs at compile time rather than in production, but the integration approach is identical in plain JavaScript if that's your existing stack." },
    ],
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
    metaTitle: "Stripe Integration for Express.js",
    metaDescription:
      "Stripe integration for Express.js APIs — Checkout Sessions, webhook routes, and subscription billing.",
    heroHeadline: "Stripe Integration for Express.js APIs",
    heroSubhead: "Clean middleware patterns for Stripe routes, webhook verification, and error handling.",
    context:
      "Express's middleware model needs specific handling for Stripe webhooks — the raw request body must bypass JSON body-parsing middleware for signature verification to work, a detail commonly missed.",
    body: [
      { type: "paragraph", text: "Express's middleware model has one specific interaction with Stripe that breaks almost every first webhook implementation: `express.json()` (or any global body-parser middleware) consumes and parses the raw request body before your handler ever sees it, and Stripe's signature verification requires the exact, unparsed raw bytes to validate correctly." },
      { type: "heading", level: 2, text: "The Raw-Body Webhook Fix, and What Else Matters", id: "express-webhooks" },
      { type: "list", items: [
        "Apply `express.raw()` scoped to just the webhook route, before any global JSON body-parser middleware runs against it",
        "Verify the signature against that raw buffer using the Stripe SDK's `webhooks.constructEvent`, not a manually parsed body",
        "Rate-limit Stripe-facing routes to prevent abuse, while still accepting Stripe's legitimate webhook retries",
        "Return a 2xx response quickly, then process the event — a slow synchronous handler risks Stripe's delivery timeout and triggering unnecessary retries",
      ] },
      { type: "paragraph", text: "This single body-parsing detail accounts for a large share of \"webhooks work locally but fail in production\" reports we see — it's an easy fix once diagnosed, and a genuinely confusing failure mode if you don't already know to look for it." },
    ],
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
    metaTitle: "Stripe Integration for Django",
    metaDescription:
      "Stripe integration for Django — dj-stripe setup or custom integration, webhooks, and subscription billing.",
    heroHeadline: "Stripe Integration for Django Applications",
    heroSubhead: "dj-stripe configured correctly, or a custom integration when you need more control.",
    context:
      "dj-stripe can sync Stripe objects into your Django models automatically, but it adds complexity you may not need for simpler integrations — we help decide, then implement either path cleanly.",
    body: [
      { type: "paragraph", text: "dj-stripe syncs Stripe objects (customers, subscriptions, invoices) into your Django models automatically via webhooks, which is genuinely useful if you need to query Stripe data through Django's ORM — but it adds a meaningful abstraction layer that isn't worth it for simpler integrations that just need to create a Checkout Session and react to a handful of events." },
      { type: "heading", level: 2, text: "Choosing Between dj-stripe and the Raw SDK", id: "django-djstripe" },
      { type: "list", items: [
        "dj-stripe fits when you need Stripe data joinable against your own models in Django queries and admin views",
        "The raw Python SDK fits when your Stripe usage is simpler, or when dj-stripe's sync model doesn't match a custom billing shape",
        "Webhook views need CSRF exemption (Django's CSRF protection doesn't apply to Stripe's server-to-server calls) with signature verification standing in as the actual security check",
        "Either path needs explicit handling for Stripe's event ordering — webhooks aren't guaranteed to arrive in the order they occurred",
      ] },
      { type: "paragraph", text: "We make this call early based on how much of your app actually needs to query Stripe-derived data through the ORM versus just react to it — teams that adopt dj-stripe by default often end up fighting its sync model for use cases the raw SDK would have handled more directly." },
    ],
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
    metaTitle: "Stripe Integration for ASP.NET",
    metaDescription:
      "Stripe integration for ASP.NET Core — Checkout, Billing, and webhook handling using the official .NET SDK.",
    heroHeadline: "Stripe Integration for ASP.NET Core",
    heroSubhead: "Stripe.net SDK integration with clean dependency injection and async patterns.",
    context:
      "We integrate Stripe.net following ASP.NET Core conventions — typed HttpClient configuration, dependency-injected Stripe clients, and webhook endpoints that respect the framework's middleware pipeline.",
    body: [
      { type: "paragraph", text: "Stripe.net integrates cleanly with ASP.NET Core's conventions when it's configured as a typed, dependency-injected service rather than instantiated ad hoc inside controllers — the latter pattern works in a demo and becomes a testing and configuration headache the moment you need to mock Stripe calls or support multiple environments." },
      { type: "heading", level: 2, text: "DI, Async, and Webhook Patterns for .NET", id: "aspnet-di" },
      { type: "list", items: [
        "Register the Stripe client as a typed service in `Program.cs`, configured once from environment-scoped options",
        "Use Stripe.net's async methods throughout — mixing sync and async Stripe calls in an ASP.NET Core app risks thread-pool starvation under load",
        "Webhook endpoints need to respect the framework's middleware pipeline (raw body access before any body-consuming middleware runs), the .NET equivalent of the Express raw-body issue",
        "Minimal APIs or MVC controllers both work — the DI and async patterns matter more than which routing style you choose",
      ] },
      { type: "paragraph", text: "We focus on ASP.NET Core (.NET 6+) as the default target; legacy .NET Framework projects are evaluated case by case since Stripe.net's async patterns and DI conventions assume the Core-era hosting model." },
    ],
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
    metaTitle: "Stripe Integration for PHP",
    metaDescription:
      "Stripe integration for plain PHP applications — Checkout, webhooks, and billing without a framework dependency.",
    heroHeadline: "Stripe Integration for PHP Applications",
    heroSubhead: "Framework-agnostic Stripe integration using the official PHP SDK.",
    context:
      "For PHP projects not built on Laravel or another framework, we integrate the Stripe PHP SDK directly — a common need for legacy applications and custom CMS-adjacent codebases.",
    body: [
      { type: "paragraph", text: "Plain PHP projects — not built on Laravel or another framework — need the Stripe PHP SDK integrated directly, which is common for legacy applications, custom CMS-adjacent codebases, and internal tools that predate a framework decision or deliberately avoid one." },
      { type: "heading", level: 2, text: "Framework-Free Integration Considerations", id: "php-frameworkless" },
      { type: "list", items: [
        "Webhook signature verification via the SDK's `Webhook::constructEvent` against the raw request body, same principle as any framework but without middleware to fight",
        "Composer-based dependency management even in otherwise framework-free codebases, to keep the Stripe SDK and its dependencies current",
        "Session and state handling for multi-step checkout flows needs to be built explicitly, since there's no framework convention to lean on",
        "PHP 8+ is our recommended baseline for new work — legacy PHP 7.x projects are supported, but with an eye toward an upgrade path",
      ] },
      { type: "paragraph", text: "Framework-free doesn't mean unstructured — we still separate Stripe API calls, webhook handling, and business logic into distinct layers, just without a framework enforcing that separation for you. It's more discipline required, not less integration quality possible." },
    ],
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
    metaTitle: "Stripe Integration for Ruby on Rails",
    metaDescription:
      "Stripe integration for Rails — Stripe gem setup, webhooks, and subscription billing following Rails conventions.",
    heroHeadline: "Stripe Integration for Ruby on Rails",
    heroSubhead: "Idiomatic Rails patterns for Stripe — service objects, background jobs, and webhook controllers.",
    context:
      "We integrate the official Stripe Ruby gem using Rails conventions — webhook processing via ActiveJob for reliability, and service objects rather than fat controllers for payment logic.",
    body: [
      { type: "paragraph", text: "Rails conventions push Stripe logic toward service objects and background jobs rather than fat controllers — webhook processing in particular should hand off to ActiveJob (backed by Sidekiq or similar) immediately after signature verification, acknowledging Stripe's request quickly while the actual processing happens asynchronously." },
      { type: "heading", level: 2, text: "Idiomatic Rails Patterns for Stripe", id: "rails-patterns" },
      { type: "list", items: [
        "Webhook controller does signature verification and enqueues a job — nothing more — to keep response times fast and retries safe",
        "Service objects encapsulate Stripe API calls (create subscription, process refund) rather than spreading Stripe SDK calls across controllers and models",
        "Stripe API keys stored via Rails encrypted credentials, never plain environment files or committed config",
        "Idempotency keys on job-enqueued Stripe calls, since ActiveJob retries on failure and a retried job shouldn't double-charge",
      ] },
      { type: "paragraph", text: "This pattern — verify synchronously, process asynchronously, encapsulate in service objects — is the same shape we recommend across most backend frameworks, but Rails' conventions (ActiveJob, encrypted credentials, service objects as a first-class pattern) make it particularly natural to implement correctly from the start." },
    ],
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
