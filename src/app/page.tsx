import { ButtonLink, Motif,  SectionIntro, TextLink, container } from "@/components/ui";
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
        <div className="mb-4"></div>
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
           
            <div><TextLink href="/about">About the firm</TextLink></div>
          </div>
        </div>
      </section>

  
{/* The Cynergy Difference */}
<section className="border-y border-line bg-white">
  <div className={`${container} py-16 sm:py-20 lg:py-24`}>
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Section introduction */}
      <div className="lg:col-span-5">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-9 bg-[#D9A441]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A87520]">
            The Cynergy Difference
          </p>
        </div>

        <h2 className="max-w-lg font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
          Legal thinking.
          <span className="block italic text-[#A87520]">
            With purpose.
          </span>
        </h2>

        <p className="mt-6 max-w-md text-sm leading-7 text-slate sm:text-base sm:leading-8">
          Every legal matter has its own circumstances, priorities and
          challenges. Our approach is built around understanding yours and
          providing thoughtful, practical counsel.
        </p>

        <div className="mt-8">
          <TextLink href="/about">Discover our approach</TextLink>
        </div>
      </div>

      {/* Principles */}
      <div className="lg:col-span-7 bg-white">
        <div className="divide-y divide-line border-y border-line">
          <article className="grid gap-3 py-6 sm:grid-cols-[64px_1fr] sm:gap-5 sm:py-7">
            <span className="font-serif text-2xl text-[#A87520]">01</span>
            <div>
              <h3 className="font-serif text-2xl text-navy sm:text-3xl">
                Advice with clarity
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate sm:text-base">
                We aim to make complex legal matters easier to understand,
                helping clients assess their options and make informed decisions.
              </p>
            </div>
          </article>

          <article className="grid gap-3 py-6 sm:grid-cols-[64px_1fr] sm:gap-5 sm:py-7">
            <span className="font-serif text-2xl text-[#A87520]">02</span>
            <div>
              <h3 className="font-serif text-2xl text-navy sm:text-3xl">
                A considered approach
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate sm:text-base">
                We consider the circumstances, relevant legal issues and
                practical implications of each matter before advising on a way forward.
              </p>
            </div>
          </article>

          <article className="grid gap-3 py-6 sm:grid-cols-[64px_1fr] sm:gap-5 sm:py-7">
            <span className="font-serif text-2xl text-[#A87520]">03</span>
            <div>
              <h3 className="font-serif text-2xl text-navy sm:text-3xl">
                Professional integrity
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate sm:text-base">
                We value professionalism, careful judgment and a commitment
                to serving clients responsibly.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Insights */}
<section className="border-t border-line bg-mist">
  <div className={`${container} py-16 sm:py-20 lg:py-24`}>
    {/* Section heading */}
    <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-gold-deep" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Knowledge &amp; Perspective
          </p>
        </div>

        <h2 className="font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl">
          Insights for
          <span className="block text-gold-deep">
            informed decisions.
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-8 text-slate sm:text-lg">
          Explore legal perspectives and practical guidance designed to help
          you better understand the issues that matter to you and your business.
        </p>
      </div>

      <div className="shrink-0 sm:pb-2">
        <TextLink href="/insights">Explore all insights</TextLink>
      </div>
    </div>

    {/* Latest three articles */}
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {articles.slice(0, 3).map((article, index) => (
        <div
          key={article.slug}
          className="group relative flex h-full flex-col border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-deep/50 hover:shadow-[0_16px_40px_rgba(20,15,30,0.06)] sm:p-8"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-serif text-3xl text-gold-deep/60">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="flex h-10 w-10 items-center justify-center border border-line text-navy transition-colors duration-300 group-hover:border-gold-deep group-hover:bg-gold-deep group-hover:text-white">
              <span
                aria-hidden="true"
                className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </span>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="mb-4 h-px w-10 bg-gold-deep transition-all duration-300 group-hover:w-16" />

            <ArticlePreview article={article} />
          </div>
        </div>
      ))}
    </div>

    {/* Editorial note */}
    <p className="mt-7 text-xs leading-6 text-slate/80">
      Insights and articles are intended for general information and should not
      be treated as legal advice. Content is subject to the firm’s review and approval.
    </p>
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
