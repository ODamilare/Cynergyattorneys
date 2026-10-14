import type { Metadata } from "next";
import Image from "next/image";

import {  Value, container } from "@/components/ui";
import { firm } from "@/config/firm";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Cynergy Attorneys: our approach, values and how we work with clients.",
};

const values = [
  ["Clarity", "Plain-language advice and honest assessments."],
  [
    "Discretion",
    "Your affairs are handled with care and confidentiality.",
  ],
  [
    "Diligence",
    "Thorough preparation and attention to detail.",
  ],
  [
    "Responsiveness",
    "Prompt communication and no unexplained silences.",
  ],
];

const steps = [
  [
    "Listen",
    "We start by understanding your circumstances and goals.",
  ],
  [
    "Advise",
    "We explain your options, the risks and a recommended path.",
  ],
  [
    "Act",
    "We carry out the agreed work and keep you updated.",
  ],
  [
    "Review",
    "We confirm the outcome and what happens next.",
  ],
];

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative isolate min-h-[420px] overflow-hidden bg-navy sm:min-h-[500px] lg:min-h-[560px]">
        <Image
          src="/images/about-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay for text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/35"
          aria-hidden="true"
        />

        {/* Subtle bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/40 to-transparent"
          aria-hidden="true"
        />

        <div
          className={`${container} relative z-10 flex min-h-[420px] items-end py-16 sm:min-h-[500px] sm:py-20 lg:min-h-[560px] lg:py-28`}
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold sm:text-sm">
              Who We Are
            </p>

            <h1 className="font-serif text-4xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              About Cynergy Attorneys
            </h1>

            <div className="mt-6 h-1 w-16 bg-gold sm:w-20" />

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
              A law firm focused on clear communication, thoughtful legal
              guidance and dependable service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={`${container} space-y-16 py-16 sm:space-y-20 sm:py-20 lg:py-24`}>
        {/* Firm Overview */}
        <section className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Our Firm
            </p>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              Firm Overview
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate sm:text-lg">
            <p>
              Cynergy Attorneys is one of Nigeria’s premier legal institutions, renowned for delivering high-end legal and consultancy solutions. Within a unified institutional framework, we empower local and regional clients to navigate complex challenges and achieve their strategic objectives through world-class legal assistance.
            </p>

            <p>
              We recognise the importance of understanding each client&apos;s
              circumstances, communicating legal options clearly and
              approaching every matter with diligence and professionalism.
            </p>

            <p>
              Our approach is centred on building a clear understanding of
              each matter and providing considered legal support throughout
              the process.
            </p>

          </div>
        </section>

        {/* History */}
        <section className="grid gap-6 border-t border-line pt-10 sm:pt-12 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Our Background
            </p>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              History
            </h2>
          </div>

          <div className="space-y-4 text-base leading-8 text-slate sm:text-lg">
            <dl>
              <div className="flex flex-wrap gap-x-3">
                <dt className="font-semibold text-navy">Established:</dt>
                <dd>
                  <Value v={firm.established} />
                </dd>
              </div>
            </dl>

            <p>
              CYNERGY ATTORNEYS was formed by a group of erudite lawyers headed by Mr. Michael Enaike Ogie Esq., with the aim of engaging in the general practice of law. The firm comprises legal practitioners with experience in general legal practice and knowledge across diverse areas of law.
            </p>
          </div>
        </section>

    {/* Mission and Values */}
<section className="relative overflow-hidden border-t border-line py-16 sm:py-20 lg:py-24">
  <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
    {/* Mission Statement */}
    <div className="flex flex-col justify-between">
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gold-deep" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            What Guides Us
          </p>
        </div>

        <h2 className="max-w-lg font-serif text-4xl font-medium leading-[1.12] text-navy sm:text-5xl lg:text-6xl">
          Clear counsel.
          <span className="block text-gold-deep">
            Purposeful action.
          </span>
        </h2>

        <p className="mt-7 max-w-lg text-base leading-8 text-slate sm:text-lg">
          We aim to make the law easier to navigate through clear, practical
          advice, careful preparation and professional service delivered with
          integrity.
        </p>
      </div>

      <div className="mt-10 border-l-2 border-gold pl-5 lg:mt-14">
        <p className="font-serif text-xl italic leading-relaxed text-navy sm:text-2xl">
          &ldquo;Seamless legal solutions, thoughtfully delivered.&rdquo;
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-slate">
          The Cynergy approach
        </p>
      </div>
    </div>

    {/* Core Values */}
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
      {values.map(([title, description], index) => (
        <div
          key={title}
          className="group flex min-h-[210px] flex-col bg-paper p-6 transition-colors duration-300 hover:bg-white sm:p-8"
        >
          <div className="mb-7 flex items-center justify-between">
            <span className="font-serif text-3xl text-gold-deep/70">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-8 w-8 border border-line transition-colors duration-300 group-hover:border-gold-deep" />
          </div>

          <h3 className="font-serif text-2xl font-medium text-navy sm:text-3xl">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate sm:text-base">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* How We Work */}
        <section className="border-t border-line pt-10 sm:pt-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Our Process
            </p>

            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              How We Work With Clients
            </h2>

            <p className="mt-5 leading-7 text-slate sm:text-lg sm:leading-8">
              Every matter is different. Our proposed approach is designed
              to keep clients informed, clarify the available options and
              establish a shared understanding of the next steps.
            </p>
          </div>

          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, description], index) => (
              <li
                key={title}
                className="border-t border-line pt-5"
              >
                <span className="font-serif text-4xl text-gold-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 font-serif text-2xl text-navy">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate sm:text-base">
                  {description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8">
         
          </div>
        </section>
      </div>

      {/* Closing Call to Action */}
      <section className="bg-navy text-white">
        <div
          className={`${container} flex flex-col gap-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between`}
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Start a Conversation
            </p>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Let&apos;s discuss how we can assist you.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-white/75">
              Contact the firm to discuss your legal needs and the next steps
              for your matter.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
          >
            Contact the Firm
          </a>
        </div>
      </section>
    </>
  );
}