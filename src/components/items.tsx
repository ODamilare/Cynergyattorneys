import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { TextLink, Value } from "@/components/ui";
import { formatDate, practiceAreas, type Article, type Lawyer, type PracticeArea } from "@/content/data";

export function PracticeAreaItem({ area }: { area: PracticeArea }) {
  return (
    <article className="grid gap-3 border-t border-line py-8 md:grid-cols-[1fr_1.4fr_auto] md:items-baseline md:gap-10">
      <h3 className="font-serif text-3xl font-medium text-navy">
        <Link href={`/book-consultation?area=${area.slug}`} className="hover:text-blue">{area.title}</Link>
      </h3>
      <p className="leading-relaxed text-slate">{area.summary}</p>
      <TextLink href={`/book-consultation?area=${area.slug}`}>Enquire</TextLink>
    </article>
  );
}

export function LawyerProfile({ lawyer }: { lawyer: Lawyer }) {
  const areaNames = lawyer.areas.map((s) => practiceAreas.find((a) => a.slug === s)?.title).filter(Boolean);
  return (
    <article>
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        {lawyer.photo ? (
          <Image src={lawyer.photo} alt={`Portrait of ${lawyer.name}`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-slate">
            <User size={56} strokeWidth={1} aria-hidden />
            <span className="text-xs">Photograph to be supplied</span>
          </div>
        )}
      </div>
      <h3 className="mt-5 font-serif text-2xl font-semibold text-navy"><Value v={lawyer.name} /></h3>
      <p className="mt-1 text-sm text-blue"><Value v={lawyer.title} /></p>
      <p className="mt-3 text-sm leading-relaxed text-slate"><Value v={lawyer.bio} /></p>
      {areaNames.length > 0 && <p className="mt-3 text-xs text-slate">Practice areas: {areaNames.join(", ")}</p>}
      {lawyer.profileUrl && <div className="mt-3"><TextLink href={lawyer.profileUrl}>Professional profile</TextLink></div>}
    </article>
  );
}

export function ArticlePreview({ article, large = false }: { article: Article; large?: boolean }) {
  return (
    <article className="border-t border-line pt-6">
      <p className="text-xs text-slate">{article.category} · <time dateTime={article.date}>{formatDate(article.date)}</time></p>
      <h3 className={`mt-3 font-serif font-medium text-navy ${large ? "text-4xl sm:text-5xl" : "text-2xl"}`}>
        <Link href={`/insights/${article.slug}`} className="hover:text-blue">{article.title}</Link>
      </h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-slate">{article.excerpt}</p>
      <div className="mt-4"><TextLink href={`/insights/${article.slug}`}>Read article</TextLink></div>
    </article>
  );
}
