
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { firm } from "@/config/firm";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      {/* Restrained background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgba(184,142,77,0.12),transparent_42%)]"
      />

      <Container className="relative">
        {/* Compact editorial hero */}
        <div className="grid items-center gap-8 py-8 sm:py-10 lg:min-h-[570px] lg:grid-cols-12 lg:gap-5 lg:py-12">
          {/* Headline and CTA */}
          <div className="relative z-10 lg:col-span-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-deep" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                {firm.name}
              </span>
            </div>

            <h1
              id="hero-title"
              className="max-w-2xl font-display text-[clamp(3.25rem,6.2vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.055em]"
            >
              Law, with
              <br />
              <span className="italic text-gold-deep">perspective.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/65 sm:text-base sm:leading-7">
              Clear, practical legal advice shaped around your objectives.
              Thoughtful counsel for the decisions that matter.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button href="/book" variant="onDark">
                Book a consultation <span aria-hidden="true">↗</span>
              </Button>

              <Link
                href="/practice-areas"
                className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-gold-deep"
              >
                Our expertise
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="mt-8 hidden items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/40 sm:flex">
              <span>Integrity</span>
              <span className="text-gold-deep">/</span>
              <span>Experience</span>
              <span className="text-gold-deep">/</span>
              <span>Commitment</span>
            </div>
          </div>

          {/* Image-led visual */}
          <div className="relative lg:col-span-6">
            <div className="relative h-[280px] overflow-hidden sm:h-[360px] lg:h-[440px]">
              <Image
                src="/images/law-firm-architecture.jpg"
                alt="Modern architectural facade illuminated by warm evening light"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/10"
              />

              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink/30 to-transparent"
              />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                <div>
<p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D9A441]">
                    The Cynergy approach
                  </p>
                  <p className="mt-2 font-display text-xl italic text-white sm:text-2xl">
                    Clarity in every decision.
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="mb-1 h-8 w-8 shrink-0 border border-white/50"
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-2 -right-2 -z-10 h-20 w-20 border-b border-r border-gold-deep/60"
            />
          </div>
        </div>

        {/* Slim bottom strip */}
        <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-3">
          {[
            ["01", "Practical advice"],
            ["02", "Broad legal expertise"],
            ["03", "Professional integrity"],
          ].map(([number, label], index) => (
            <div
              key={number}
              className={`flex items-center gap-3 py-4 ${
                index === 1
                  ? "border-y border-white/10 sm:border-x sm:border-y-0 sm:px-5"
                  : index === 2
                    ? "sm:pl-5"
                    : "sm:pr-5"
              }`}
            >
              <span className="font-display text-lg text-gold-deep">
                {number}
              </span>
              <span className="text-xs tracking-wide text-white/70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
