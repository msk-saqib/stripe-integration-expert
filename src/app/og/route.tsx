import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { SITE_NAME } from "@/lib/seo/site";

export const runtime = "edge";

// Brand tokens, mirrored from globals.css (--ink / --ink-foreground / dark --accent).
// The dark-mode accent is used because the card always renders on the ink background.
const INK = "#0a0e1a";
const INK_FOREGROUND = "#f8fafc";
const INK_MUTED = "#94a3b8";
const ACCENT = "#14b8a6";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? SITE_NAME).slice(0, 120);
  const kicker = searchParams.get("kicker")?.slice(0, 60);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: INK,
          color: INK_FOREGROUND,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: ACCENT,
            }}
          />
          {SITE_NAME.toUpperCase()}
        </div>
        {kicker && (
          <div
            style={{
              marginTop: 40,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: ACCENT,
            }}
          >
            {kicker}
          </div>
        )}
        <div
          style={{
            marginTop: kicker ? 16 : 40,
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            color: INK_MUTED,
          }}
        >
          stripe-experts.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        // Card scrapers (Google, Slack, X, LinkedIn) re-fetch this far more often
        // than it changes, and the output is a pure function of the query string.
        "Cache-Control": "public, immutable, no-transform, max-age=31536000",
      },
    },
  );
}
