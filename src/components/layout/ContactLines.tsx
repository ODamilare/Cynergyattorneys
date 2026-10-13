import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Placeholder } from "@/components/ui/Placeholder";
import { firm, isPlaceholder } from "@/config/firm";

const rows = [
  { key: "address", label: "Office", Icon: MapPin },
  { key: "phone", label: "Telephone", Icon: Phone },
  { key: "email", label: "Email", Icon: Mail },
  { key: "hours", label: "Hours", Icon: Clock },
] as const;

function hrefFor(key: string, value: string): string | null {
  if (isPlaceholder(value)) return null;
  if (key === "email") return `mailto:${value}`;
  if (key === "phone") return `tel:${value.replace(/\s/g, "")}`;
  return null;
}

export function ContactLines({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <dl className="space-y-5">
      {rows.map(({ key, label, Icon }) => {
        const value: string = firm.contact[key];
        const href = hrefFor(key, value);
        return (
          <div key={key} className="flex gap-4">
            <Icon aria-hidden size={18} className={`mt-1 shrink-0 ${dark ? "text-gold" : "text-gold-deep"}`} />
            <div>
              <dt className="sr-only">{label}</dt>
              <dd className={dark ? "text-white" : "text-ink"}>
                {href ? (
                  <a href={href} className="underline decoration-gold underline-offset-4">
                    {value}
                  </a>
                ) : (
                  <Placeholder value={value} className={dark ? "!text-white/60" : ""} />
                )}
              </dd>
            </div>
          </div>
        );
      })}
    </dl>
  );
}
