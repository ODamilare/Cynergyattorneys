import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo, Value, container } from "@/components/ui";
import { firm, isPlaceholder, nav } from "@/config/firm";

export function Footer() {
  const social = firm.social.filter((s) => !isPlaceholder(s.url));

  return (
    <footer className="border-t border-line bg-mist">
      <div
        className={`${container} grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]`}
      >
        {/* Firm Information */}
        <div>
          <Logo className="h-14" />

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate">
            This website offers general information about the firm and does not
            constitute legal advice. Sending a message does not create a
            lawyer-client relationship.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">
            The Firm
          </h2>

          <ul className="mt-4 space-y-2 text-sm">
            {[...nav, { href: "/book-consultation", label: "Book a consultation" }].map(
              (n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-slate transition-colors hover:text-navy hover:underline"
                  >
                    {n.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="font-serif text-xl font-semibold text-navy">
            Contact Us
          </h2>

          <div className="mt-5 space-y-5 text-sm">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin
                size={19}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-gold-deep"
                aria-hidden="true"
              />

              <div className="min-w-0">
                <h3 className="font-semibold text-navy">Address</h3>

                <address className="mt-1 space-y-1 not-italic leading-relaxed text-slate">
                  {firm.address.map((line) => (
                    <p key={line}>
                      <Value v={line} />
                    </p>
                  ))}

                  {firm.address2.map((line) => (
                    <p key={line}>
                      <Value v={line} />
                    </p>
                  ))}
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone
                size={18}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-gold-deep"
                aria-hidden="true"
              />

              <div className="min-w-0">
                <h3 className="font-semibold text-navy">Phone</h3>

                <p className="mt-1 leading-relaxed text-slate">
                  <Value v={firm.phone} />
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail
                size={18}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-gold-deep"
                aria-hidden="true"
              />

              <div className="min-w-0">
                <h3 className="font-semibold text-navy">Email</h3>

                <p className="mt-1 break-words leading-relaxed text-slate">
                  <Value v={firm.email} />
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          {social.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-4 text-sm">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-medium text-blue transition-colors hover:text-navy hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-line">
        <p
          className={`${container} py-5 text-xs text-slate`}
        >
          © {new Date().getFullYear()} {firm.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}