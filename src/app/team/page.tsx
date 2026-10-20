/*
"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, X, BriefcaseBusiness } from "lucide-react";
import { PageHero, container } from "@/components/ui";
import { practiceAreas, team } from "@/content/data";

type Lawyer = (typeof team)[number];

export default function TeamPage() {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  useEffect(() => {
    if (!selectedLawyer) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedLawyer(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLawyer]);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .filter((part) => !["esq.", "esq"].includes(part.toLowerCase()))
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();

  const getAreaTitle = (slug: string) =>
    practiceAreas.find((area) => area.slug === slug)?.title ??
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <>
      
      <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-ink text-white sm:min-h-[420px] lg:min-h-[460px]">
        <Image
          src="/images/team-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/35"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/15"
        />

        <div
          className={`${container} relative z-10 w-full py-14 sm:py-20 lg:py-24`}
        >
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
              Experienced professionals. Thoughtful counsel. A shared
              commitment to practical legal solutions.
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#D9A441] via-[#D9A441]/30 to-transparent"
        />
      </section>

     
      <section className={`${container} py-14 sm:py-20 lg:py-24`}>
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-line pb-7 sm:mb-12 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A87520]">
              Our People
            </p>

            <h2 className="font-display text-3xl font-medium leading-tight text-navy sm:text-4xl">
              Meet our team
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
              Get to know the people behind our legal practice. Select a name
              to explore their experience and areas of focus.
            </p>
          </div>

          <p className="shrink-0 text-xs font-medium uppercase tracking-[0.15em] text-slate">
            {String(team.length).padStart(2, "0")} Team Members
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
          {team.map((lawyer, index) => (
            <article key={lawyer.slug} className="group min-w-0">
             
              <button
                type="button"
                onClick={() => setSelectedLawyer(lawyer)}
                aria-label={`View profile of ${lawyer.name}`}
                className="relative block w-full overflow-hidden bg-[#EDE8DF] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A87520] focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[4/4.5] overflow-hidden">
                  {lawyer.photo ? (
                    <Image
                      src={lawyer.photo}
                      alt={`Portrait of ${lawyer.name}`}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#F0EBE1] via-[#E4DCCE] to-[#D3C6B1]">
                      <span className="font-display text-6xl font-medium tracking-tight text-[#8B704A]/80 sm:text-7xl">
                        {getInitials(lawyer.name)}
                      </span>
                      <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8B704A]/75">
                        Cynergy Attorneys
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/50 bg-white/95 text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={19} strokeWidth={1.5} />
                  </div>

                  <span className="absolute left-4 top-4 text-[10px] font-semibold tracking-[0.2em] text-white drop-shadow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </button>

           
              <div className="border-b border-line py-5">
                <button
                  type="button"
                  onClick={() => setSelectedLawyer(lawyer)}
                  className="group/name flex w-full items-start justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A87520] focus-visible:ring-offset-4"
                >
                  <span className="min-w-0">
                    <span className="block font-display text-xl font-medium leading-snug text-navy transition-colors group-hover/name:text-[#A87520] sm:text-2xl">
                      {lawyer.name}
                    </span>
                    <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A87520] sm:text-[11px]">
                      {lawyer.title}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-slate/60 transition-all group-hover/name:-translate-y-0.5 group-hover/name:translate-x-0.5 group-hover/name:text-[#A87520]"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

  
      {selectedLawyer && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/75 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedLawyer(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="lawyer-profile-name"
            className="relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden bg-paper shadow-2xl sm:max-h-[88dvh] sm:flex-row"
          >
         
            <button
              type="button"
              onClick={() => setSelectedLawyer(null)}
              aria-label="Close profile"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border border-white/40 bg-paper/95 text-navy transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A87520] sm:right-4 sm:top-4"
            >
              <X size={20} />
            </button>

           
            <div className="relative hidden w-[36%] shrink-0 bg-[#E7DFD2] sm:block">
              {selectedLawyer.photo ? (
                <Image
                  src={selectedLawyer.photo}
                  alt={`Portrait of ${selectedLawyer.name}`}
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F0EBE1] to-[#D3C6B1]">
                  <span className="font-display text-7xl text-[#8B704A]/80">
                    {getInitials(selectedLawyer.name)}
                  </span>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 pt-20">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#E6BD6A]">
                  Cynergy Attorneys
                </p>
              </div>
            </div>

         
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="p-6 pt-16 sm:p-9 sm:pt-10 lg:p-11">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A87520]">
                  Professional Profile
                </p>

                <h2
                  id="lawyer-profile-name"
                  className="max-w-xl pr-2 font-display text-3xl font-medium leading-tight text-navy sm:text-4xl"
                >
                  {selectedLawyer.name}
                </h2>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#A87520]">
                  {selectedLawyer.title}
                </p>

                <div className="my-7 h-px w-full bg-line" />

                <div className="flex items-center gap-2 text-navy">
                  <BriefcaseBusiness
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#A87520]"
                  />
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Biography
                  </h3>
                </div>

                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate">
                  {selectedLawyer.bio}
                </p>

                {selectedLawyer.areas.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">
                      Areas of Practice
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedLawyer.areas.map((area) => (
                        <span
                          key={area}
                          className="border border-[#D9C8A8] bg-[#F5F0E7] px-3 py-2 text-xs leading-5 text-[#6F542B]"
                        >
                          {getAreaTitle(area)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-9 border-t border-line pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedLawyer(null)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:text-[#A87520]"
                  >
                    Close profile
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
**/