
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { BookingForm } from "@/components/booking-form";
import { container } from "@/components/ui";
import { areaIds } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Request a consultation with Cynergy Attorneys. Tell us about your legal needs and preferred time to meet.",
};

type PageProps = {
  searchParams: Promise<{ area?: string }>;
};

const consultationSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share a brief overview of your enquiry and select the relevant area of law.",
  },
  {
    number: "02",
    title: "We review your request",
    description:
      "The firm reviews your submission and considers your preferred consultation arrangements.",
  },
  {
    number: "03",
    title: "We confirm the details",
    description:
      "The firm will contact you to discuss availability and confirm the next steps.",
  },
];

export default async function BookConsultationPage({
  searchParams,
}: PageProps) {
  const { area } = await searchParams;
  const defaultArea = area && areaIds.includes(area) ? area : "";

  return (
    <main className="bg-paper">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src="/images/consultation-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#100D18]/95 via-[#100D18]/80 to-[#100D18]/45"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#100D18]/60 via-transparent to-transparent"
        />

        <div
          className={`${container} relative z-10 flex min-h-[360px] items-end py-14 sm:min-h-[420px] sm:py-16 lg:min-h-[460px] lg:py-20`}
        >
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9A441]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E8BD69]">
                Start a Conversation
              </p>
            </div>

            <h1 className="max-w-2xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              The right advice
              <span className="block text-[#E8BD69]">
                starts with a conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Tell us a little about what you need. Our team will review your
              request and contact you about the next steps.
            </p>

            <a
              href="#consultation-form"
              className="mt-8 inline-flex items-center gap-3 border border-white/25 bg-white/[0.07] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#D9A441] hover:bg-white/[0.12]"
            >
              Request a consultation
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Consultation content */}
      <section
        id="consultation-form"
        className="scroll-mt-24 border-b border-line"
      >
        <div
          className={`${container} grid gap-12 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24`}
        >
          {/* Information column */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-deep" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                What to Expect
              </p>
            </div>

            <h2 className="max-w-md font-serif text-3xl font-medium leading-tight text-navy sm:text-4xl">
              A considered approach to your enquiry.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate sm:text-base">
              Every enquiry starts with understanding the matter at hand.
              Provide a few details so the firm can review your request and
              determine the appropriate next steps.
            </p>

            <div className="mt-9 border-y border-line">
              {consultationSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex gap-5 py-5 ${
                    index !== consultationSteps.length - 1
                      ? "border-b border-line"
                      : ""
                  }`}
                >
                  <span className="pt-0.5 font-serif text-xl text-gold-deep">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-medium text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex gap-4 border border-line bg-white/60 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold-deep/10 text-gold-deep">
                <Clock3 size={19} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy">
                  Your preferred time
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate">
                  A requested date and time are preferences, not a confirmed
                  appointment. The firm will contact you to confirm availability.
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-4 border border-line bg-white/60 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold-deep/10 text-gold-deep">
                <ShieldCheck size={19} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy">
                  Please protect your privacy
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate">
                  Keep your enquiry brief. Do not include confidential
                  documents, sensitive personal information, or urgent legal
                  details in this form.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-deep"
            >
              Prefer to contact the firm?
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </aside>

          {/* Form column */}
          <div className="min-w-0">
            <div className="border border-line bg-white shadow-[0_18px_60px_rgba(20,15,30,0.045)]">
              <div className="border-b border-line bg-[#F8F5EF] px-6 py-6 sm:px-9 sm:py-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-[#E8BD69]">
                    <CalendarDays size={21} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                      Consultation Request
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-medium text-navy sm:text-3xl">
                      Tell us about your enquiry
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate">
                      Complete the details below. Fields marked as required
                      should be filled in before submitting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-7 sm:px-9 sm:py-9">
                <BookingForm defaultArea={defaultArea} />
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 text-xs leading-6 text-slate">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-gold-deep"
                aria-hidden="true"
              />
              <p>
                Sending this request does not establish a lawyer-client
                relationship or confirm an appointment. Please wait for the
                firm to respond before treating a consultation as booked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
