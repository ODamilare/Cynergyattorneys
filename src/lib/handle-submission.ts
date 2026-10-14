import "server-only";
import { NextResponse } from "next/server";
import type { ZodType } from "zod";
import { flatten } from "@/lib/schemas";
import { sendMail } from "@/lib/mail";

export async function handleSubmission<T>(
  req: Request,
  schema: ZodType<T>,
  compose: (data: T) => { subject: string; text: string; replyTo: string },
) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  // Honeypot: bots fill the hidden "company" field. Drop silently.
  if (typeof body === "object" && body && (body as Record<string, unknown>).company) {
    return NextResponse.json({ ok: true });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ fieldErrors: flatten(parsed.error.issues) }, { status: 400 });
  }
  const result = await sendMail(compose(parsed.data));

if (result.ok === true) {
  return NextResponse.json({ ok: true });
}

if (result.ok === false && result.reason === "not_configured") {
    return NextResponse.json(
      { message: "Email delivery has not been configured on this website yet, so your message was not sent." },
      { status: 503 },
    );
  }
  return NextResponse.json({ message: "We could not send your message. Please try again shortly." }, { status: 502 });
}
