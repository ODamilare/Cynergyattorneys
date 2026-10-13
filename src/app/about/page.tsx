import type { Metadata } from "next";
import { Pending, PageHero, Value, container } from "@/components/ui";
import { firm } from "@/config/firm";

export const metadata: Metadata = { title: "About", description: "About Cynergy Attorneys: our approach, values and how we work with clients." };

const values = [
  ["Clarity", "Plain-language advice and honest assessments."],
  ["Discretion", "Your affairs are handled with care and confidentiality."],
  ["Diligence", "Thorough preparation and attention to detail."],
  ["Responsiveness", "Prompt communication and no unexplained silences."],
];
const steps = [
  ["Listen", "We start by understanding your circumstances and goals."],
  ["Advise", "We explain your options, the risks and a recommended path."],
  ["Act", "We carry out the agreed work and keep you updated."],
  ["Review", "We confirm the outcome and what happens next."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Cynergy Attorneys" intro="A law firm focused on clear communication and dependable service." />
      <div className={`${container} space-y-20 py-20`}>
        <section className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-serif text-3xl text-navy">Firm overview</h2>
          <div className="space-y-4 leading-relaxed text-slate">
            <p>Cynergy Attorneys exists to make legal help easier to understand and easier to use. We combine careful legal work with straightforward communication.</p>
            <Pending>Overview copy is a proposal, pending client approval</Pending>
          </div>
        </section>
        <section className="grid gap-8 border-t border-line pt-12 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-serif text-3xl text-navy">History</h2>
          <dl className="space-y-3 leading-relaxed text-slate">
            <div className="flex gap-3"><dt className="font-semibold text-navy">Established:</dt><dd><Value v={firm.established} /></dd></div>
            <dd>[Firm history and founding story to be supplied by the firm.]</dd>
          </dl>
        </section>
        <section className="border-t border-line pt-12">
          <h2 className="font-serif text-3xl text-navy">Mission and values</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">Our mission is to provide seamless legal solutions: advice that is clear, practical and delivered with integrity.</p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, d]) => (
              <div key={t} className="border-t-2 border-gold pt-4"><dt className="font-serif text-2xl text-navy">{t}</dt><dd className="mt-2 text-sm leading-relaxed text-slate">{d}</dd></div>
            ))}
          </dl>
          <div className="mt-6"><Pending>Mission and values are proposed, pending client approval</Pending></div>
        </section>
        <section className="border-t border-line pt-12">
          <h2 className="font-serif text-3xl text-navy">How we work with clients</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t}><span className="font-serif text-4xl text-gold-deep">{i + 1}</span><h3 className="mt-2 font-serif text-2xl text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-slate">{d}</p></li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
