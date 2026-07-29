import type { Metadata } from "next";
import { fontHeading, fontBody, fontMono } from "@/lib/fonts";
import { buildOrganizationSchema } from "@/lib/seo/structured-data";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ledgerandco.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ledger & Co. — Stripe Integration Experts",
    template: "%s | Ledger & Co.",
  },
  description:
    "Certified Stripe integration partners for SaaS, marketplaces, and e-commerce. Checkout, Billing, Connect, and custom Stripe development — done right the first time.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema(SITE_URL);

  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
