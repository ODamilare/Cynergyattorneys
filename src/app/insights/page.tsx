
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, BookOpen } from "lucide-react";

import { container } from "@/components/ui";
import { ArticlePreview } from "@/components/items";
import { articles } from "@/content/data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore legal insights, practical guidance, and perspectives from Cynergy Attorneys.",
};

export default function InsightsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-ink sm:min-h-[400px] lg:min-h-[440px]">
        <Image
          src="/images/insights-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10"
          aria-hidden="true"
        />

        <div
          className={`${container} relative z-10 w-full pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-20`}
        >
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9A441]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9A441]">
                Knowledge & Perspective
              </p>
            </div>

            <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Insights for
              <span className="block text-[#E5B85C]">
                informed decisions.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Explore legal perspectives and practical guidance designed to
              help you better understand the issues that matter.
            </p>

            <a
              href="#latest-insights"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#D9A441]/70 pb-2 text-sm font-medium text-white transition-colors hover:text-[#E5B85C]"
            >
              Explore our insights
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-0 right-0 hidden h-1 w-1/3 bg-[#D9A441] sm:block"
          aria-hidden="true"
        />
      </section>

      {/* Insights content */}
      <section
        id="latest-insights"
        className="border-b border-line bg-paper py-16 sm:py-20 lg:py-24"
      >
        <div className={container}>
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-line pb-7 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[#A87520]">
                <BookOpen size={16} aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  The Journal
                </span>
              </div>

              <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Latest insights
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate sm:text-base">
                Perspectives and information to help you navigate legal
                questions with greater clarity.
              </p>
            </div>

            <span className="text-sm text-slate">
              {articles.length} {articles.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {featured ? (
            <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
              {/* Featured article */}
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#D9A441]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A87520]">
                    Featured
                  </span>
                </div>

                <ArticlePreview article={featured} large />
              </div>

              {/* Additional articles */}
              <div className="min-w-0">
                <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
                  <h3 className="font-display text-xl font-medium text-ink">
                    More to explore
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-[#A87520]"
                    aria-hidden="true"
                  />
                </div>

                {rest.length > 0 ? (
                  <div className="divide-y divide-line">
                    {rest.map((article, index) => (
                      <div
                        key={article.slug}
                        className="group py-6 first:pt-2 last:pb-2"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-display text-2xl text-[#A87520]/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <ArrowUpRight
                            size={17}
                            className="text-slate/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#A87520]"
                            aria-hidden="true"
                          />
                        </div>

                        <ArticlePreview article={article} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-line bg-white/50 p-6">
                    <p className="font-display text-xl text-ink">
                      More insights coming soon
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate">
                      We are preparing additional articles and legal
                      perspectives for this section.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="border border-line bg-white/50 px-6 py-14 text-center sm:px-10">
              <BookOpen
                size={30}
                className="mx-auto text-[#A87520]"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                Insights are on the way
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate">
                Check back for legal updates, practical guidance, and
                perspectives from Cynergy Attorneys.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A87520] transition-colors hover:text-ink"
              >
                Contact the firm
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          )}

          <p className="mt-12 border-t border-line pt-6 text-xs leading-6 text-slate">
            Articles are provided for general informational purposes and do
            not constitute legal advice. Consult a qualified legal
            professional regarding your specific circumstances.
          </p>
        </div>
      </section>
    </>
  );
}
