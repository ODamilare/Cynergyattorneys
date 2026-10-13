import type { ReactNode } from "react";

export const inputClass =
  "w-full border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-slate/60 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue aria-[invalid=true]:border-red-700";

export function Field({ id, label, error, hint, optional, children }: { id: string; label: string; error?: string; hint?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}{optional && <span className="font-normal text-slate"> (optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-xs text-slate">{hint}</p>}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-800">{error}</p>}
    </div>
  );
}

export function Notice({ tone, title, children }: { tone: "success" | "error" | "warn"; title: string; children: ReactNode }) {
  const c = { success: "border-blue bg-blue/5", error: "border-red-700 bg-red-50", warn: "border-gold-deep bg-gold/10" }[tone];
  return (
    <div role={tone === "success" ? "status" : "alert"} className={`border-l-4 p-5 ${c}`}>
      <p className="font-semibold text-navy">{title}</p>
      <div className="mt-1 text-sm leading-relaxed text-slate">{children}</div>
    </div>
  );
}

export function StatusNotice({ status, message, success }: { status: string; message: string; success: { title: string; body: ReactNode } }) {
  if (status === "success") return <Notice tone="success" title={success.title}>{success.body}</Notice>;
  if (status === "unconfigured") return <Notice tone="warn" title="Your message was not sent">{message} Please contact the firm directly using the details on this page.</Notice>;
  if (status === "error") return <Notice tone="error" title="Something went wrong">{message || "We could not send your message."} Please try again.</Notice>;
  return null;
}
