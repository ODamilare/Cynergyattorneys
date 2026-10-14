
import "server-only";

type Mail = {
  subject: string;
  text: string;
  replyTo: string;
};

export type MailResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "failed" };

type FormSubmitResponse = {
  success?: boolean | string;
  message?: string;
};

export async function sendMail({
  subject,
  text,
  replyTo,
}: Mail): Promise<MailResult> {
  const recipient = process.env.FORMSUBMIT_EMAIL?.trim();

  if (!recipient || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    return { ok: false, reason: "not_configured" };
  }

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: subject,
          _replyto: replyTo,
          _template: "table",
          message: text,
        }),
        signal: AbortSignal.timeout(15000),
        cache: "no-store",
      },
    );

    const result = (await response
      .json()
      .catch(() => null)) as FormSubmitResponse | null;

    const accepted =
      result?.success === true || result?.success === "true";

    if (!response.ok || !accepted) {
      console.error("[Mail] FormSubmit rejected the request.", {
        status: response.status,
      });

      return { ok: false, reason: "failed" };
    }

    return { ok: true };
  } catch (error) {
    console.error(
      "[Mail] FormSubmit request failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return { ok: false, reason: "failed" };
  }
}
