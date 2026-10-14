import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink,  TextLink, container } from "@/components/ui";
import { articles, formatDate } from "@/content/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.excerpt, openGraph: { title: a.title, description: a.excerpt, type: "article" } } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <article className={`${container} max-w-3xl py-16 sm:py-24`}>
      <TextLink href="/insights">All insights</TextLink>
      <p className="mt-10 text-sm text-slate">{a.category} · <time dateTime={a.date}>{formatDate(a.date)}</time></p>
      <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-navy sm:text-6xl">{a.title}</h1>
      <div className="mt-6"></div>
      <div className="mt-10 space-y-6 text-lg leading-[1.8] text-ink/90">
        {a.body.map((p) => <p key={p}>{p}</p>)}
      </div>
      <div className="mt-16 border-t border-line pt-8"><ButtonLink href="/book-consultation" variant="outline">Book a consultation</ButtonLink></div>
    </article>
  );
}
