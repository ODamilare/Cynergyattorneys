"use client";
import { Loader2 } from "lucide-react";
import { Field, StatusNotice, inputClass } from "@/components/fields";
import { btn } from "@/components/ui";
import { contactCategories, contactSchema } from "@/lib/schemas";
import { useSubmit } from "@/lib/use-submit";

export function ContactForm() {
  const { status, errors, message, submit } = useSubmit("/api/contact", contactSchema);
  const a = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    if (await submit(raw)) form.reset();
  }

  return (
    <form  action="https://formsubmit.app/f/vaxjuw9zbs" method="POST" noValidate className="space-y-6">

      <Field id="name" label="Full name" error={errors.name}><input id="name" name="name" autoComplete="name" required className={inputClass} {...a("name")} /></Field>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="email" label="Email" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" required className={inputClass} {...a("email")} /></Field>
        <Field id="phone" label="Telephone" optional error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} {...a("phone")} /></Field>
      </div>
      <Field id="category" label="Enquiry category" error={errors.category}>
        <select id="category" name="category" defaultValue="" required className={inputClass} {...a("category")}>
          <option value="" disabled>Choose a category</option>
          {contactCategories.map((c) => <option key={c}>{c}</option>)}
        </select>
      </Field>
      <Field id="message" label="Message" error={errors.message} hint="Please do not include confidential details.">
        <textarea id="message" name="message" rows={6} required className={inputClass} {...a("message")} />
      </Field>
   <button
  type="submit"
  disabled={status === "loading"}
  className={`${btn("primary")} w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto`}
>
  {status === "loading" && (
    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
  )}
  {status === "loading"
    ? "Sending..."
    : "Request a consultation"}
</button>
      <StatusNotice status={status} message={message} success={{ title: "Message sent", body: "Thank you. The firm will respond to your enquiry as soon as it can." }} />
    </form>
  );
}
