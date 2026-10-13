import type { Metadata } from "next";
import { ButtonLink, PageHero, Pending, container } from "@/components/ui";
import { PracticeAreaItem } from "@/components/items";
import { practiceAreas } from "@/content/data";

export const metadata: Metadata = { title: "Practice areas", description: "Proposed practice areas at Cynergy Attorneys." };

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero title="Practice areas" intro="The areas in which we may advise, presented as a starting outline.">
        <Pending>Proposed areas only. The firm has not yet confirmed the services it offers.</Pending>
      </PageHero>
      <section className={`${container} py-16`}>
        <div className="border-b border-line">{practiceAreas.map((a) => <PracticeAreaItem key={a.slug} area={a} />)}</div>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <p className="text-slate">Not sure which area applies to you?</p>
          <ButtonLink href="/contact" variant="outline">Contact the firm</ButtonLink>
        </div>
      </section>
    </>
  );
}
