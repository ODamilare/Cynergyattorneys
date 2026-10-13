import { contactSchema } from "@/lib/schemas";
import { handleSubmission } from "@/lib/handle-submission";

export function POST(req: Request) {
  return handleSubmission(req, contactSchema, (d) => ({
    subject: `Website enquiry: ${d.category}`,
    replyTo: d.email,
    text: `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || "-"}\nCategory: ${d.category}\n\n${d.message}`,
  }));
}
