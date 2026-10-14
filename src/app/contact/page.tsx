import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Value, container } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { firm } from "@/config/firm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cynergy Attorneys in Ikeja, Lagos, for legal enquiries and consultation requests.",
};

export default function ContactPage() {
  const address = firm.address.join(", ");

  const mapUrl =
    firm.mapEmbedUrl ||
    `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const mapDirectionsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const contactItems: {
    label: string;
    icon: ReactNode;
    content: ReactNode;
    href?: string;
  }[] = [
    {
      label: "Visit our office",
      icon: <MapPin size={19} />,
      content: (
        <span className="leading-7">
          {firm.address.map((line) => (
            <span key={line} className="block">
              <Value v={line} />
            </span>
          ))}
        </span>
      ),
      href: mapDirectionsUrl,
    },
    {
      label: "Telephone",
      icon: <Phone size={19} />,
      content: <Value v={firm.phone} />,
      href: firm.phone ? `tel:${firm.phone.replace(/[^\d+]/g, "")}` : undefined,
    },
    {
      label: "WhatsApp",
      icon: <MessageCircle size={19} />,
      content: <Value v={firm.whatsapp} />,
      href: firm.whatsapp
        ? `https://wa.me/${firm.whatsapp.replace(/\D/g, "")}`
        : undefined,
    },
    {
      label: "Email",
      icon: <Mail size={19} />,
      content: <Value v={firm.email} />,
      href: firm.email ? `mailto:${firm.email}` : undefined,
    },
    {
      label: "Office hours",
      icon: <Clock3 size={19} />,
      content: <Value v={firm.hours} />,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[320px] items-end overflow-hidden bg-ink sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src="/images/contact-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent"
          aria-hidden="true"
        />

        <div
          className={`${container} relative z-10 w-full pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-20`}
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-deep" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E5B85C]">
                Start a Conversation
              </p>
            </div>

            <h1 className="font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Let&apos;s discuss
              <span className="block text-[#E5B85C]">
                how we can help.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Whether you have a legal enquiry or wish to discuss a potential
              engagement, our team welcomes the opportunity to hear from you.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 right-0 hidden h-1 w-1/3 bg-gold-deep sm:block"
          aria-hidden="true"
        />
      </section>

      {/* Contact information and enquiry form */}
      <section className="border-b border-line bg-paper">
        <div
          className={`${container} grid gap-12 py-14 sm:py-18 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-24`}
        >
          {/* Office details */}
          <aside className="min-w-0">
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                Contact Information
              </p>

              <h2 className="font-serif text-3xl font-medium leading-tight text-navy sm:text-4xl">
                We&apos;re here to listen.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate sm:text-base">
                Get in touch with Cynergy Attorneys or visit our office in
                Ikeja, Lagos. Choose the contact method that works best for
                you.
              </p>
            </div>

            <div className="border-y border-line">
              {contactItems.map((item, index) => {
                const details = (
                  <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate">
                        {item.label}
                      </p>

                      <div className="mt-2 break-words font-serif text-lg leading-7 text-navy sm:text-xl">
                        {item.content}
                      </div>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={17}
                        className="mt-1 shrink-0 text-gold-deep transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );

                return (
                  <div
                    key={item.label}
                    className={`flex gap-4 py-5 ${
                      index !== 0 ? "border-t border-line" : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-mist text-gold-deep">
                      {item.icon}
                    </div>

                    {item.href ? (
                      <Link
                        href={item.href}
                        target={
                          item.label === "Visit our office" ||
                          item.label === "WhatsApp"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.label === "Visit our office" ||
                          item.label === "WhatsApp"
                            ? "noreferrer"
                            : undefined
                        }
                        className="group flex min-w-0 flex-1"
                      >
                        {details}
                      </Link>
                    ) : (
                      details
                    )}
                  </div>
                );
              })}
            </div>

            {/* Working map */}
            <div className="mt-8">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    Find Us
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-navy">
                    Our Lagos office
                  </h3>
                </div>

                <Link
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-navy transition-colors hover:text-gold-deep sm:text-sm"
                >
                  Directions
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <div className="overflow-hidden border border-line bg-mist">
                <iframe
                  title="Cynergy Attorneys office location in Ikeja, Lagos"
                  src={mapUrl}
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block w-full"
                />
              </div>

              <p className="mt-3 text-xs leading-6 text-slate">
                Use the directions link to open the location in Google Maps
                and plan your journey.
              </p>
            </div>
          </aside>

          {/* Enquiry form */}
          <div className="min-w-0">
            <div className="border border-line bg-white p-6 sm:p-9 lg:p-10">
              <div className="mb-8 border-b border-line pb-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  Send an Enquiry
                </p>

                <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">
                  How can we assist you?
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate">
                  Tell us a little about your enquiry. Please avoid including
                  confidential documents or sensitive details in your initial
                  message.
                </p>
              </div>

              <div className="mb-7 border-l-2 border-gold-deep bg-mist p-4">
                <p className="text-sm leading-6 text-slate">
                  <strong className="font-semibold text-navy">
                    Important:
                  </strong>{" "}
                  This form is not intended for urgent legal matters. For
                  time-sensitive enquiries, please contact the firm by
                  telephone.
                </p>
              </div>

              <ContactForm />

              <div className="mt-8 border-t border-line pt-5">
                <p className="text-xs leading-6 text-slate">
                  <strong className="font-semibold text-navy">
                    Privacy notice.
                  </strong>{" "}
                  Information submitted through this form should be handled
                  in accordance with the firm&apos;s applicable privacy
                  notice and data protection obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
