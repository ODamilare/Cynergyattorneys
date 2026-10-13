import type { Metadata } from "next";
import { PageHero, Pending, container } from "@/components/ui";
import { LawyerProfile } from "@/components/items";
import { team } from "@/content/data";

export const metadata: Metadata = { title: "Our team", description: "The lawyers of Cynergy Attorneys." };

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our team" intro="The people you will work with.">
        <Pending>Placeholder profiles. Real lawyer details will replace these once supplied.</Pending>
      </PageHero>
      <section className={`${container} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3`}>
        {team.map((l) => <LawyerProfile key={l.slug} lawyer={l} />)}
      </section>
    </>
  );
}
