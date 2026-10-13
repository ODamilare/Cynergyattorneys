import { ButtonLink, Motif, Pending, SectionIntro, TextLink, container } from "@/components/ui";
import { ArticlePreview, LawyerProfile, PracticeAreaItem } from "@/components/items";
import { articles, practiceAreas, team } from "@/content/data";
import Hero from "@/components/Hero"
export default function HomePage() {
  return (
   
   
   <>
      
<Hero />
      <section className={`${container} py-20 sm:py-28`}>
        <SectionIntro title="Practice areas" action={<TextLink href="/practice-areas">All practice areas</TextLink>}>
          A proposed outline of the areas the firm may advise on.
        </SectionIntro>
        <div className="mb-4"><Pending /></div>
        <div className="border-b border-line">
          {practiceAreas.slice(0, 4).map((a) => <PracticeAreaItem key={a.slug} area={a} />)}
        </div>
      </section>

      <section className="bg-mist">
        <div className={`${container} grid gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20`}>
          <h2 className="font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl">An approach built on clarity and follow-through.</h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate">
            <p>Good legal work starts with listening. We aim to understand what matters to you, explain your options in plain language, and keep you informed at every stage.</p>
            <p>Our goal is straightforward: advice you can act on, delivered with care and discretion.</p>
            <Pending>Introductory copy is a proposal, pending client approval</Pending>
            <div><TextLink href="/about">About the firm</TextLink></div>
          </div>
        </div>
      </section>

      <section className={`${container} py-20 sm:py-28`}>
        <SectionIntro title="Our team" action={<TextLink href="/team">Meet the team</TextLink>}>
          Profiles will appear here once the firm supplies them.
        </SectionIntro>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((l) => <LawyerProfile key={l.slug} lawyer={l} />)}
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className={`${container} py-20 sm:py-28`}>
          <SectionIntro title="Insights" action={<TextLink href="/insights">All insights</TextLink>}>
            General guidance on working with a lawyer. Sample articles, pending approval.
          </SectionIntro>
          <div className="grid gap-10 md:grid-cols-3">
            {articles.map((a) => <ArticlePreview key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className={`${container} flex flex-col items-start justify-between gap-8 py-16 sm:py-20 md:flex-row md:items-center`}>
          <h2 className="max-w-xl font-serif text-4xl font-medium leading-tight sm:text-5xl">Ready to talk through your matter?</h2>
          <ButtonLink href="/book-consultation" variant="light">Request a consultation</ButtonLink>
        </div>
      </section>
    </>
  );
}
