"use client";
import { useState } from "react";
import type { ZodType } from "zod";
import { flatten } from "@/lib/schemas";

export type Status = "idle" | "loading" | "success" | "error" | "unconfigured";

export function useSubmit<T>(url: string, schema: ZodType<T>) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function submit(raw: Record<string, unknown>) {
    setErrors({});
    setMessage("");
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      setErrors(flatten(parsed.error.issues));
      return false;
    }
    setStatus("loading");
    try {
      const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(raw) });
      const data = (await res.json().catch(() => ({}))) as { fieldErrors?: Record<string, string>; message?: string };
      if (res.ok) { setStatus("success"); return true; }
      if (res.status === 400 && data.fieldErrors) { setErrors(data.fieldErrors); setStatus("idle"); return false; }
      setMessage(data.message ?? "");
      setStatus(res.status === 503 ? "unconfigured" : "error");
    } catch {
      setMessage("Check your connection and try again.");
      setStatus("error");
    }
    return false;
  }
  return { status, errors, message, submit };
}
