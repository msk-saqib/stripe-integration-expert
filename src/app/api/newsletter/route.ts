import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/newsletter";
import { sendLeadEmail } from "@/lib/email/resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    await sendLeadEmail({
      subject: "New newsletter subscriber",
      replyTo: parsed.data.email,
      fields: {
        Email: parsed.data.email,
      },
    });
  } catch (error) {
    console.error("[newsletter] failed to send email", error);
    return NextResponse.json(
      { error: "Something went wrong subscribing. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
