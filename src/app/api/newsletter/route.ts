import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/newsletter";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // TODO: wire to newsletter provider (e.g. Resend Audiences, Mailchimp).
  console.log("[newsletter] new subscriber", parsed.data);

  return NextResponse.json({ ok: true });
}
