import { z } from "zod";
import { practiceAreas } from "@/content/data";
import { METHODS, TIME_WINDOWS } from "@/lib/booking";

export const contactCategories = ["General enquiry", ...practiceAreas.map((a) => a.title), "Other"];
export const areaIds = [...practiceAreas.map((a) => a.slug), "not-sure"];

const phone = /^[+\d][\d\s()-]{6,19}$/;
const oneOf = (list: readonly string[], msg: string) => z.string().refine((v) => list.includes(v), msg);

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().refine((v) => v === "" || phone.test(v), "Enter a valid telephone number.").optional(),
  category: oneOf(contactCategories, "Choose an enquiry category."),
  message: z.string().trim().min(10, "Enter at least 10 characters.").max(2000, "Keep your message under 2,000 characters."),
});
export type ContactInput = z.infer<typeof contactSchema>;

export function isPastDate(d: string) {
  const t = new Date();
  t.setUTCDate(t.getUTCDate() - 1); // one day of slack for time zones
  return d < t.toISOString().slice(0, 10);
}

export const consultationSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().regex(phone, "Enter a valid telephone number."),
  area: oneOf(areaIds, "Choose an area of legal assistance."),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a preferred date.").refine((d) => !isPastDate(d), "Choose today or a future date."),
  time: oneOf(TIME_WINDOWS.map((t) => t.id), "Choose a preferred time."),
  method: oneOf(METHODS.map((m) => m.id), "Choose a consultation method."),
  description: z.string().trim().max(1000, "Keep this under 1,000 characters.").optional(),
  acknowledge: z.boolean().refine((v) => v === true, "You must acknowledge the privacy notice."),
});
export type ConsultationInput = z.infer<typeof consultationSchema>;

export function flatten(issues: { path: PropertyKey[]; message: string }[]) {
  const out: Record<string, string> = {};
  for (const i of issues) {
    const k = String(i.path[0] ?? "form");
    if (!out[k]) out[k] = i.message;
  }
  return out;
}
