import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validations/consultation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = consultationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // TODO: wire to email/CRM provider (e.g. Resend, HubSpot) once credentials exist.
  console.log("[consultation] new booking request", parsed.data);

  return NextResponse.json({ ok: true });
}
