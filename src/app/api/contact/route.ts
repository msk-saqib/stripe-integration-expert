import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { sendLeadEmail } from "@/lib/email/resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    await sendLeadEmail({
      subject: `New contact form message from ${parsed.data.firstName} ${parsed.data.lastName}`,
      replyTo: parsed.data.workEmail,
      fields: {
        Name: `${parsed.data.firstName} ${parsed.data.lastName}`,
        "Work Email": parsed.data.workEmail,
        Company: parsed.data.company || "—",
        Topic: parsed.data.topic,
        Message: parsed.data.message,
      },
    });
  } catch (error) {
    console.error("[contact] failed to send email", error);
    return NextResponse.json(
      { error: "Something went wrong submitting your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
