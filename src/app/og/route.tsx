import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? "Stripe Experts").slice(0, 120);
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
          background: "#0a0e1a",
          color: "#f5f7f6",
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
              background: "#3fd6c4",
            }}
          />
          STRIPE EXPERTS
        </div>
        {kicker && (
          <div
            style={{
              marginTop: 40,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#3fd6c4",
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
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
