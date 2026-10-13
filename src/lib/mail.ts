import "server-only";

type Mail = { subject: string; text: string; replyTo: string };
export type MailResult = { ok: true } | { ok: false; reason: "not_configured" | "failed" };

/**
 * Sends via Resend's REST API. Requires RESEND_API_KEY, MAIL_FROM and MAIL_TO.
 * Returns `not_configured` rather than pretending delivery succeeded.
 */
export async function sendMail({ subject, text, replyTo }: Mail): Promise<MailResult> {
  const { RESEND_API_KEY, MAIL_FROM, MAIL_TO } = process.env;
  if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) return { ok: false, reason: "not_configured" };
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: MAIL_FROM, to: [MAIL_TO], reply_to: replyTo, subject, text }),
    });
    return res.ok ? { ok: true } : { ok: false, reason: "failed" };
  } catch {
    return { ok: false, reason: "failed" };
  }
}
