"use client";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Field, StatusNotice, inputClass } from "@/components/fields";
import { btn } from "@/components/ui";
import { practiceAreas } from "@/content/data";
import { METHODS, TIME_WINDOWS } from "@/lib/booking";
import { consultationSchema } from "@/lib/schemas";
import { useSubmit } from "@/lib/use-submit";

export function BookingForm({ defaultArea = "" }: { defaultArea?: string }) {
  const { status, errors, message, submit } = useSubmit("/api/consultation", consultationSchema);
  const [today, setToday] = useState("");
  useEffect(() => {
    const d = new Date();
    setToday(new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10));
  }, []);
  const a = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });
  const radio = "flex cursor-pointer items-center gap-3 border border-line bg-white px-4 py-3 text-sm has-[:checked]:border-navy has-[:checked]:bg-navy/5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = { ...Object.fromEntries(fd), acknowledge: fd.get("acknowledge") === "on" };
    if (await submit(raw)) form.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName}><input id="fullName" name="fullName" autoComplete="name" required className={inputClass} {...a("fullName")} /></Field>
        <Field id="phone" label="Phone number" error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" required className={inputClass} {...a("phone")} /></Field>
      </div>
      <Field id="email" label="Email" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" required className={inputClass} {...a("email")} /></Field>
      <Field id="area" label="Area of legal assistance" error={errors.area}>
        <select id="area" name="area" defaultValue={defaultArea} required className={inputClass} {...a("area")}>
          <option value="" disabled>Choose an area</option>
          {practiceAreas.map((p) => <option key={p.slug} value={p.slug}>{p.title}</option>)}
          <option value="not-sure">I am not sure</option>
        </select>
      </Field>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="date" label="Preferred date" error={errors.date}><input id="date" name="date" type="date" min={today} required className={inputClass} {...a("date")} /></Field>
        <Field id="time" label="Preferred time" error={errors.time}>
          <select id="time" name="time" defaultValue="" required className={inputClass} {...a("time")}>
            <option value="" disabled>Choose a time</option>
            {TIME_WINDOWS.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </Field>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-navy">Consultation method</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {METHODS.map((m) => (
            <label key={m.id} className={radio}><input type="radio" name="method" value={m.id} className="accent-navy" />{m.label}</label>
          ))}
        </div>
        {errors.method && <p role="alert" className="mt-1.5 text-sm text-red-800">{errors.method}</p>}
      </fieldset>
      <Field id="description" label="Brief description" optional error={errors.description} hint="A few lines is enough. Please do not include confidential details.">
        <textarea id="description" name="description" rows={4} className={inputClass} {...a("description")} />
      </Field>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-slate">
          <input type="checkbox" name="acknowledge" className="mt-1 size-4 accent-navy" aria-invalid={!!errors.acknowledge} />
          I understand that my details will be used only to respond to this request, and that submitting it does not create a lawyer-client relationship.
        </label>
        {errors.acknowledge && <p role="alert" className="mt-1.5 text-sm text-red-800">{errors.acknowledge}</p>}
      </div>
      <button type="submit" disabled={status === "loading"} className={`${btn("primary")} w-full disabled:opacity-60 sm:w-auto`}>
        {status === "loading" && <Loader2 size={16} className="animate-spin" aria-hidden />}
        {status === "loading" ? "Sending request…" : "Request consultation"}
      </button>
      <StatusNotice status={status} message={message} success={{ title: "Request received", body: "This is a request only. Your date and time are not confirmed until the firm replies to you." }} />
    </form>
  );
}
