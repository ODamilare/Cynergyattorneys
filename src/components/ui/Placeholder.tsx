import { isPlaceholder } from "@/config/firm";

/** Renders client-supplied text. Placeholders get a quiet, recognisable style and never break layout. */
export function Placeholder({ value, className = "" }: { value: string; className?: string }) {
  if (!isPlaceholder(value)) return <span className={className}>{value}</span>;
  return <span className={`italic text-slate ${className}`}>{value}</span>;
}
