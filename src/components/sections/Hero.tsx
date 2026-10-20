
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Skyline } from "@/components/sections/Skyline";
import { firm } from "@/config/firm";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      {/* Architectural background treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.025)_48%,transparent_49%)]" />

        <div className="absolute right-[-12%] top-[-12%] h-[680px] w-[680px] rounded-full border border-white/[0.045]" />

        <div className="absolute right-[-5%] top-[-5%] h-[540px] w-[540px] rounded-full border border-white/[0.045]" />

        <div className="absolute inset-y-0 left-[7.5%] hidden w-px bg-white/[0.045] lg:block" />

        <div className="absolute inset-y-0 right-[7.5%] hidden w-px bg-white/[0.045] lg:block" />

        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[650px] items-center gap-8 py-16 sm:py-20 lg:min-h-[760px] lg:grid-cols-12 lg:gap-4 lg:py-24">
          {/* Editorial content */}
          <div className="relative z-10 lg:col-span-7 lg:py-8">
            <div className="mb-9 flex items-center gap-4 sm:mb-12">
              <span className="h-px w-12 bg-gold-deep" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65 sm:text-xs">
                {firm.name}
              </p>
            </div>

            <h1
              id="hero-title"
              className="max-w-4xl font-display text-[clamp(3.25rem,7vw,6.75rem)] font-medium leading-[0.99] tracking-[-0.055em]"
            >
              Legal clarity.
              <span className="mt-2 block text-white/45">
                Strategic thinking.
              </span>
              <span className="mt-2 block text-gold-deep">
                Meaningful outcomes.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/65 sm:mt-10 sm:text-base sm:leading-8">
              Practical, well-reasoned legal counsel shaped around your
              objectives, your interests and the matters that matter most.
            </p>

            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row sm:mt-11 sm:gap-4">
              <Button href="/#practice-areas" variant="onDark">
                Explore our expertise
              </Button>

              <Button href="/contact" variant="secondary">
                Get in touch
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-3 sm:mt-16">
              <span className="h-px w-8 bg-gold-deep/80" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Counsel with purpose
              </span>
            </div>
          </div>

          {/* Bespoke skyline composition */}
          <div className="relative flex min-h-[300px] items-end justify-center lg:col-span-5 lg:min-h-[500px] lg:justify-end">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_55%,rgba(190,155,95,0.10),transparent_58%)]"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-5 right-0 h-px w-full bg-gradient-to-l from-gold-deep/50 via-white/10 to-transparent"
            />

            <div className="relative z-10 w-full max-w-[440px] lg:translate-y-5">
              <Skyline className="h-auto w-full" />
            </div>

            <div className="absolute bottom-8 right-0 hidden text-right lg:block">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                Perspective. Precision. Purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Structured information strip */}
        <div className="grid border-t border-white/15 sm:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:border-white/10 sm:py-7 sm:pr-6">
            <span className="font-display text-xl text-gold-deep">01</span>
            <div>
              <p className="text-xs font-medium text-white">
                Clear legal counsel
              </p>
              <p className="mt-1 text-xs text-white/45">
                Advice grounded in your objectives
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:border-white/10 sm:px-6 sm:py-7">
            <span className="font-display text-xl text-gold-deep">02</span>
            <div>
              <p className="text-xs font-medium text-white">
                Broad legal expertise
              </p>
              <p className="mt-1 text-xs text-white/45">
                Support across diverse legal matters
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-5 sm:py-7 sm:pl-6">
            <span className="font-display text-xl text-gold-deep">03</span>
            <div>
              <p className="text-xs font-medium text-white">
                Professional integrity
              </p>
              <p className="mt-1 text-xs text-white/45">
                A considered, client-focused approach
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
