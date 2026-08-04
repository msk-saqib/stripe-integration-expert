import type { NextConfig } from "next";

// Scoped to this app's actual third-party surface: react-calendly (booking widget) only.
// 'unsafe-eval' is required in dev only — Next's webpack HMR/React Refresh runtime uses
// eval() for fast source-mapped reloads; production bundles don't need it and don't get it.
const isDev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}https://calendly.com https://assets.calendly.com`,
  "frame-src https://calendly.com",
  "style-src 'self' 'unsafe-inline' https://calendly.com https://assets.calendly.com",
  "img-src 'self' data: https://calendly.com",
  "connect-src 'self' https://calendly.com",
  "font-src 'self' data:",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
