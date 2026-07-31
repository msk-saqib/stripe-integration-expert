import { Resend } from "resend";

// stripe-experts.com is verified in Resend, so leads can deliver to any inbox.
const LEAD_INBOX = process.env.LEAD_INBOX ?? "stripeexpertdev@gmail.com";

// stripe-experts.com is verified in Resend, so send from an address on that domain
// instead of the shared onboarding@resend.dev test sender.
const FROM_ADDRESS = process.env.EMAIL_FROM ?? "Stripe Experts <hello@stripe-experts.com>";

function getClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set.");
  }
  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderFields(fields: Record<string, string>) {
  return Object.entries(fields)
    .map(
      ([label, value]) =>
        `<p style="margin:0 0 12px"><strong>${escapeHtml(label)}:</strong><br />${escapeHtml(value).replace(/\n/g, "<br />")}</p>`,
    )
    .join("");
}

export async function sendLeadEmail({
  subject,
  fields,
  replyTo,
}: {
  subject: string;
  fields: Record<string, string>;
  replyTo?: string;
}) {
  const resend = getClient();
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: LEAD_INBOX,
    replyTo,
    subject,
    html: renderFields(fields),
  });

  if (error) {
    throw new Error(error.message);
  }
}
