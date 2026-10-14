
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, container } from "@/components/ui";
import { LawyerProfile } from "@/components/items";
import { team } from "@/content/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the legal professionals at Cynergy Attorneys and learn about the people behind the firm's legal services.",
};

export default function TeamPage() {
  return (
    <>
      {/* Team Hero */}
      <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-ink text-white sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/team-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlays */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/35"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/15"
        />

        {/* Hero content */}
        <div className={`${container} relative z-10 w-full py-14 sm:py-20 lg:py-24`}>
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9A441]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9A441] sm:text-xs">
                The People Behind Cynergy
              </p>
            </div>

            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Our Team
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Meet the people committed to providing thoughtful legal counsel
              and practical solutions across diverse areas of law.
            </p>
          </div>
        </div>

        {/* Bottom gold accent */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#D9A441] via-[#D9A441]/30 to-transparent"
        />
      </section>

      {/* Team Profiles */}
      <section className={`${container} py-14 sm:py-20 lg:py-24`}>
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A87520]">
            Legal Professionals
          </p>

          <h2 className="font-display text-3xl font-medium leading-tight text-navy sm:text-4xl">
            Experience and perspective
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
            Explore the profiles of our legal team and their areas of practice.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((lawyer) => (
            <LawyerProfile key={lawyer.slug} lawyer={lawyer} />
          ))}
        </div>
      </section>
    </>
  );
}
