import Link from "next/link";
import { Logo, Value, container } from "@/components/ui";
import { firm, isPlaceholder, nav } from "@/config/firm";

export function Footer() {
  const social = firm.social.filter((s) => !isPlaceholder(s.url));
  return (
    <footer className="border-t border-line bg-mist">
      <div className={`${container} grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]`}>
        <div>
          <Logo className="h-14" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate">
            This website offers general information about the firm and does not constitute legal advice. Sending a message does not create a lawyer-client relationship.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">The firm</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[...nav, { href: "/book-consultation", label: "Book a consultation" }].map((n) => (
              <li key={n.href}><Link href={n.href} className="text-slate hover:text-navy hover:underline">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate">
            {firm.address.map((l) => <p key={l}><Value v={l} /></p>)}
            <p><Value v={firm.phone} /></p>
            <p><Value v={firm.email} /></p>
          </address>
          {social.length > 0 && (
            <ul className="mt-4 flex gap-4 text-sm">
              {social.map((s) => <li key={s.label}><a href={s.url} rel="noopener noreferrer" target="_blank" className="text-blue hover:underline">{s.label}</a></li>)}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-line">
        <p className={`${container} py-5 text-xs text-slate`}>© {new Date().getFullYear()} {firm.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
