
"use client";

import { useEffect, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Field, inputClass } from "@/components/fields";
import { btn } from "@/components/ui";
import { practiceAreas } from "@/content/data";
import { METHODS, TIME_WINDOWS } from "@/lib/booking";
import { consultationSchema, flatten } from "@/lib/schemas";


type FormStatus = "idle" | "loading" | "success" | "error";

export function BookingForm({
  defaultArea = "",
}: {
  defaultArea?: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const date = new Date();
    setToday(
      new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10),
    );
  }, []);

  const a = (key: string) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  const radio =
    "flex cursor-pointer items-center gap-3 border border-line bg-white px-4 py-3 text-sm has-[:checked]:border-navy has-[:checked]:bg-navy/5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue";

  
async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  console.log("[BookingForm] 1. Submit handler started");

  if (status === "loading") {
    console.log("[BookingForm] 2. Already submitting");
    return;
  }

  const form = e.currentTarget;
  
const fd = new FormData(form);

// Reject spam submissions, but don't block a legitimate empty field.


const raw = {
  ...Object.fromEntries(fd),
  acknowledge: fd.get("acknowledge") === "on",
};

const parsed = consultationSchema.safeParse(raw);

if (!parsed.success) {
  const validationErrors = flatten(parsed.error.issues);
  setErrors(validationErrors);
  setStatus("error");
  setMessage(
    "Please correct the highlighted fields: " +
      Object.values(validationErrors).join(" "),
  );
  return;
}

setErrors({});
setMessage("Sending your consultation request…");
setStatus("loading");

try {
  const response = await fetch("/api/consultation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(parsed.data),
  });

  const result = await response.json();

  if (!response.ok || result.ok !== true) {
    throw new Error(
      typeof result.message === "string"
        ? result.message
        : "We could not submit your request. Please try again.",
    );
  }

  form.reset();
  setErrors({});
  setStatus("success");
  setMessage(
    "Your consultation request has been received. The firm will contact you to confirm availability. Your appointment is not confirmed until the firm replies.",
  );
} catch (error) {
  console.error("[BookingForm] Submission failed:", error);

  setStatus("error");
  setMessage(
    error instanceof Error
      ? error.message
      : "We could not submit your request. Please try again.",
  );
}
}

  return (
   <form
  action="https://formsubmit.app/f/vaxjuw9zbs" method="POST"
  noValidate
  className="space-y-6"
>
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
      >
       

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            className={inputClass}
            {...a("fullName")}
          />
        </Field>

        <Field id="phone" label="Phone number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClass}
            {...a("phone")}
          />
        </Field>
      </div>

      <Field id="email" label="Email address" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
          {...a("email")}
        />
      </Field>

      <Field
        id="area"
        label="Area of legal assistance"
        error={errors.area}
      >
        <select
          id="area"
          name="area"
          defaultValue={defaultArea}
          required
          className={inputClass}
          {...a("area")}
        >
          <option value="" disabled>
            Choose an area
          </option>

          {practiceAreas.map((area) => (
            <option key={area.slug} value={area.slug}>
              {area.title}
            </option>
          ))}

          <option value="not-sure">I am not sure</option>
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="date" label="Preferred date" error={errors.date}>
          <input
            id="date"
            name="date"
            type="date"
            min={today || undefined}
            required
            className={inputClass}
            {...a("date")}
          />
        </Field>

        <Field id="time" label="Preferred time" error={errors.time}>
          <select
            id="time"
            name="time"
            defaultValue=""
            required
            className={inputClass}
            {...a("time")}
          >
            <option value="" disabled>
              Choose a time
            </option>

            {TIME_WINDOWS.map((time) => (
              <option key={time.id} value={time.id}>
                {time.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-navy">
          Consultation method
        </legend>

        <div className="grid gap-3 sm:grid-cols-3">
          {METHODS.map((method) => (
            <label key={method.id} className={radio}>
              <input
                type="radio"
                name="method"
                value={method.id}
                required
                className="accent-navy"
              />
              {method.label}
            </label>
          ))}
        </div>

        {errors.method && (
          <p id="method-error" role="alert" className="mt-2 text-sm text-red-800">
            {errors.method}
          </p>
        )}
      </fieldset>

      <Field
        id="description"
        label="Brief description"
        optional
        error={errors.description}
        hint="A few lines is enough. Please do not include confidential details."
      >
        <textarea
          id="description"
          name="description"
          rows={4}
          maxLength={1000}
          className={inputClass}
          {...a("description")}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-slate">
          <input
            type="checkbox"
            name="acknowledge"
            required
            className="mt-1 size-4 shrink-0 accent-navy"
            aria-invalid={!!errors.acknowledge}
            aria-describedby={
              errors.acknowledge ? "acknowledge-error" : undefined
            }
          />

          <span>
            I acknowledge that my information will be processed to respond
            to this request, including through the form delivery service,
            and that submitting this form does not create a lawyer-client
            relationship.
          </span>
        </label>

        {errors.acknowledge && (
          <p
            id="acknowledge-error"
            role="alert"
            className="mt-2 text-sm text-red-800"
          >
            {errors.acknowledge}
          </p>
        )}
      </div>

 <button
  type="submit"
  onClick={() => {
    console.log("[BookingForm] Button clicked");
    setMessage("Button click detected. Checking form submission…");
  }}
  className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 bg-[#17243A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#263954] sm:w-auto"
>
  Test consultation submission
</button>


      {message && (
        <div
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`flex gap-3 border p-4 text-sm leading-6 ${
            status === "success"
              ? "border-emerald-700/20 bg-emerald-50 text-emerald-900"
              : status === "error"
                ? "border-red-700/20 bg-red-50 text-red-900"
                : "border-line bg-[#F8F5EF] text-slate"
          }`}
        >
          {status === "success" ? (
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
          ) : status === "error" ? (
            <AlertCircle
              size={18}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
          ) : null}

          <p>{message}</p>
        </div>
      )}
    </form>
  );
}
