import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Skyline } from "@/components/sections/Skyline";
import { firm } from "@/config/firm";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-ink text-white">
      <Container className="grid items-end gap-12 lg:grid-cols-12">
        <div className="py-20 sm:py-28 lg:col-span-7 lg:py-36">
          <h1
            id="hero-title"
            className="max-w-2xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl xl:text-7xl"
          >
            Clear legal advice, built around your objectives.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/75">
            {firm.name} is a law firm committed to practical, well-reasoned counsel, from the first conversation
            to the final outcome.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/book" variant="onDark">
              Book a consultation
            </Button>
            <Button href="/practice-areas" variant="outlineOnDark">
              View practice areas
            </Button>
          </div>
        </div>
        <div className="-mb-px hidden self-end lg:col-span-5 lg:block">
          <Skyline className="ml-auto h-auto w-full max-w-md" />
        </div>
      </Container>
      <div className="lg:hidden">
        <Container>
          <Skyline className="ml-auto h-auto w-3/4 max-w-xs" />
        </Container>
      </div>
    </section>
  );
}
