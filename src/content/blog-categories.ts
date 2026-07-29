export interface BlogCategoryContent {
  slug: string;
  name: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategoryContent[] = [
  { slug: "guides", name: "Stripe Guides", description: "Broad, top-of-funnel guides to Stripe products and concepts." },
  { slug: "tutorials", name: "Stripe Tutorials", description: "Step-by-step, framework-specific implementation walkthroughs." },
  { slug: "api-examples", name: "Stripe API Examples", description: "Developer-reference patterns for working with the Stripe API." },
  { slug: "webhooks", name: "Stripe Webhooks", description: "Setup, debugging, and reliability patterns for Stripe webhooks." },
  { slug: "testing", name: "Stripe Testing", description: "Test mode, test cards, and CI/CD patterns for Stripe integrations." },
  { slug: "best-practices", name: "Stripe Best Practices", description: "Patterns we recommend after shipping dozens of integrations." },
  { slug: "error-fixes", name: "Stripe Error Fixes", description: "Fixes for the Stripe errors developers hit most often." },
  { slug: "comparisons", name: "Stripe Comparisons", description: "Stripe vs. alternatives, and Connect account types compared." },
  { slug: "security", name: "Stripe Security", description: "Security and compliance considerations for Stripe integrations." },
  { slug: "architecture", name: "Stripe Architecture", description: "System design for complex, high-scale Stripe integrations." },
];
