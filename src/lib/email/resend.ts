import { Resend } from "resend";

// Resend sandbox mode only delivers to the account's own signup address until a sending
// domain is verified (resend.com/domains). Once stripe-experts.com is verified, set
// LEAD_INBOX to zeeshankhanaptech@gmail.com — until then it falls back to the verified
// test address so leads keep landing somewhere instead of silently failing.
const LEAD_INBOX = process.env.LEAD_INBOX ?? "muhammadsaqibkhan575@gmail.com";

// Resend's shared test sender works without a verified domain. Once stripe-experts.com
// is verified in the Resend dashboard, set EMAIL_FROM to an address on that domain instead.
const FROM_ADDRESS = process.env.EMAIL_FROM ?? "Ledger & Co. <onboarding@resend.dev>";

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
