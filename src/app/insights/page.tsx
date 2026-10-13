import type { Metadata } from "next";
import { PageHero, Pending, container } from "@/components/ui";
import { ArticlePreview } from "@/components/items";
import { articles } from "@/content/data";

export const metadata: Metadata = { title: "Insights", description: "Guidance and articles from Cynergy Attorneys." };

export default function InsightsPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <PageHero title="Insights" intro="Practical guidance on working with a lawyer.">
        <Pending>Sample articles, pending client approval. General information only, not legal advice.</Pending>
      </PageHero>
      <section className={`${container} py-16`}>
        <ArticlePreview article={featured} large />
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {rest.map((a) => <ArticlePreview key={a.slug} article={a} />)}
        </div>
      </section>
    </>
  );
}
