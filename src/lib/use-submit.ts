
"use client";

import { useState } from "react";
import type { ZodType } from "zod";
import { flatten } from "@/lib/schemas";

export type Status =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "unconfigured";

type SubmitResponse = {
  ok?: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
};

export function useSubmit<T>(url: string, schema: ZodType<T>) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function submit(raw: Record<string, unknown>): Promise<boolean> {
    if (status === "loading") return false;

    setErrors({});
    setMessage("");

    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const fieldErrors = flatten(parsed.error.issues);
      setErrors(fieldErrors);
      setStatus("error");
      setMessage("Please correct the highlighted fields.");
      return false;
    }

    setStatus("loading");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json().catch(() => ({}))) as SubmitResponse;

      if (
        response.ok &&
        data.ok === true
      ) {
        setStatus("success");
        setMessage("");
        return true;
      }

      if (response.status === 400 && data.fieldErrors) {
        setErrors(data.fieldErrors);
        setStatus("error");
        setMessage("Please correct the highlighted fields.");
        return false;
      }

      if (response.status === 503) {
        setStatus("unconfigured");
        setMessage(
          data.message ||
            "Email delivery is not configured yet. Your message has not been sent.",
        );
        return false;
      }

      setStatus("error");
      setMessage(
        data.message ||
          "We could not send your message. Please try again shortly.",
      );
      return false;
    } catch (error) {
      console.error("[Form] Submission failed:", error);
      setStatus("error");
      setMessage("Connection failed. Please check your internet and try again.");
      return false;
    }
  }

  return {
    status,
    errors,
    message,
    submit,
  };
}
