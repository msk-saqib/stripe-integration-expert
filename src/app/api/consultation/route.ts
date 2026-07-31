import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validations/consultation";
import { sendLeadEmail } from "@/lib/email/resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = consultationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    await sendLeadEmail({
      subject: `New consultation request from ${parsed.data.name}`,
      replyTo: parsed.data.email,
      fields: {
        Name: parsed.data.name,
        Email: parsed.data.email,
        Company: parsed.data.company || "—",
        "Project Type": parsed.data.projectType,
        Budget: parsed.data.budget,
        Timeline: parsed.data.timeline,
        Details: parsed.data.details,
      },
    });
  } catch (error) {
    console.error("[consultation] failed to send email", error);
    return NextResponse.json(
      { error: "Something went wrong submitting your request. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
