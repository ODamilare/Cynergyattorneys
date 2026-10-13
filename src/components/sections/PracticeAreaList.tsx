import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { practiceAreas } from "@/content/practiceAreas";

export function PracticeAreaList() {
  return (
    <section aria-labelledby="practice-areas" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <SectionHeading
          id="practice-areas"
          title="Practice areas"
          intro="The areas of law the firm is proposing to advise on. The final list is subject to the firm's confirmation."
          className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
        />
        <ul className="lg:col-span-8">
          {practiceAreas.map((area) => (
            <li key={area.slug} className="grid gap-3 border-t border-mist py-8 last:border-b sm:grid-cols-5 sm:gap-8">
              <h3 className="font-display text-3xl font-medium leading-tight sm:col-span-2">{area.title}</h3>
              <div className="sm:col-span-3">
                <p className="text-slate-deep">{area.summary}</p>
                {!area.confirmed && (
                  <p className="mt-3 text-xs font-medium text-gold-deep">Proposed area, pending firm confirmation</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
