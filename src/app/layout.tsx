import type { Metadata, Viewport } from "next";
import { fontHeading, fontBody, fontMono } from "@/lib/fonts";
import { buildSiteSchema } from "@/lib/seo/structured-data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/seo/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Trusted Stripe Integration Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  manifest: "/manifest.json",
  // Google reads the homepage <link rel="icon"> and prefers a square icon that is a
  // multiple of 48px, so /favicon.ico carries a 48x48 frame and icon-48.png is
  // declared explicitly. Both live at stable, unhashed URLs — Googlebot caches the
  // favicon by URL and re-fetches it far less often than the page itself.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  ...(TWITTER_HANDLE ? { twitter: { site: TWITTER_HANDLE, creator: TWITTER_HANDLE } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSchema = buildSiteSchema();

  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
