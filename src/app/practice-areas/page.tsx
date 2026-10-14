import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink, container } from "@/components/ui";
import { PracticeAreaItem } from "@/components/items";
import { practiceAreas } from "@/content/data";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore the legal practice areas of Cynergy Attorneys, spanning dispute resolution, corporate transactions, property, employment, and more.",
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Practice Areas Hero */}
      <section className="relative isolate min-h-[420px] overflow-hidden bg-navy sm:min-h-[500px] lg:min-h-[560px]">
        <Image
          src="/images/practice-areas-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Navy overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/35"
          aria-hidden="true"
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/40 to-transparent"
          aria-hidden="true"
        />

        <div
          className={`${container} relative z-10 flex min-h-[420px] items-end py-16 sm:min-h-[500px] sm:py-20 lg:min-h-[560px] lg:py-28`}
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold sm:text-sm">
              Our Expertise
            </p>

            <h1 className="font-serif text-4xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Practice Areas
            </h1>

            <div className="mt-6 h-1 w-16 bg-gold sm:w-20" />

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
              Thoughtful legal guidance across a range of practice areas,
              informed by experience, collaboration, and a commitment to our
              clients&apos; interests.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className={`${container} py-16 sm:py-20 lg:py-24`}>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            How We Can Help
          </p>

          <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">
            Our Areas of Expertise
          </h2>

          <p className="mt-4 leading-7 text-slate sm:text-lg sm:leading-8">
            Our lawyers bring experience across a range of legal disciplines.
            We work collaboratively to understand each matter and provide
            considered legal support.
          </p>
        </div>

        <div className="border-b border-line">
          {practiceAreas.map((area) => (
            <PracticeAreaItem key={area.slug} area={area} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-2xl text-navy">
              Need help with a legal matter?
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">
              Contact the firm to discuss your circumstances and possible
              next steps.
            </p>
          </div>

          <ButtonLink href="/contact" variant="outline">
            Contact the Firm
          </ButtonLink>
        </div>
      </section>
    </>
  );
}