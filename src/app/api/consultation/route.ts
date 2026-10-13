import { consultationSchema } from "@/lib/schemas";
import { handleSubmission } from "@/lib/handle-submission";

export function POST(req: Request) {
  return handleSubmission(req, consultationSchema, (d) => ({
    subject: `Consultation request: ${d.date} (${d.time})`,
    replyTo: d.email,
    text: `CONSULTATION REQUEST (unconfirmed)\n\nName: ${d.fullName}\nEmail: ${d.email}\nPhone: ${d.phone}\nArea: ${d.area}\nPreferred date: ${d.date}\nPreferred time: ${d.time}\nMethod: ${d.method}\n\n${d.description || "(no description)"}`,
  }));
}
