/** Sample content. Everything here is PROPOSED and needs client approval. */

export type PracticeArea = { slug: string; title: string; summary: string };
export const practiceAreas: PracticeArea[] = [
  { slug: "corporate-commercial", title: "Corporate and commercial", summary: "Advice on forming, running and contracting for a business, from first agreements to day-to-day commercial questions." },
  { slug: "property", title: "Property and real estate", summary: "Support with buying, selling, leasing and documenting interests in land and buildings." },
  { slug: "dispute-resolution", title: "Dispute resolution", summary: "Assessing a disagreement, exploring settlement, and representing clients where a dispute must be resolved formally." },
  { slug: "employment", title: "Employment and labour", summary: "Guidance for employers and employees on contracts, workplace policies and employment relationships." },
  { slug: "family-private-client", title: "Family and private client", summary: "Careful, discreet help with family matters, wills and the planning of personal affairs." },
  { slug: "regulatory-compliance", title: "Regulatory and compliance", summary: "Helping organisations understand the rules that apply to them and put sensible processes in place." },
];

export type Lawyer = {
  slug: string; name: string; title: string; bio: string;
  areas: string[]; photo?: string; profileUrl?: string;
};
export const team: Lawyer[] = [1, 2, 3].map((n) => ({
  slug: `placeholder-${n}`,
  name: "[Lawyer Name]",
  title: "[Professional Title]",
  bio: "[Biography to be supplied by the firm.]",
  areas: n === 1 ? ["corporate-commercial"] : n === 2 ? ["property", "dispute-resolution"] : ["family-private-client"],
}));

export type Article = {
  slug: string; title: string; category: string; date: string;
  excerpt: string; body: string[];
};
/** Generic explainers only. No legal developments or advice. Replace with approved articles. */
export const articles: Article[] = [
  {
    slug: "preparing-for-a-first-consultation",
    title: "Preparing for a first legal consultation",
    category: "Working with us",
    date: "2026-01-15",
    excerpt: "A short checklist of what to gather and what to ask so that a first conversation with a lawyer is as useful as possible.",
    body: [
      "A first consultation is mainly about understanding your situation and explaining the options. A little preparation helps both sides use the time well.",
      "Write down the key events in order, with dates. Collect any documents that relate to the matter, such as contracts, letters and emails. Note the outcome you are hoping for, and any deadlines you are aware of.",
      "Prepare questions about process, likely timeframes and how fees are charged. A good lawyer will welcome them.",
      "This article is general information, not legal advice. It is sample content pending approval by the firm.",
    ],
  },
  {
    slug: "how-a-legal-engagement-works",
    title: "How a legal engagement typically works",
    category: "Working with us",
    date: "2026-02-03",
    excerpt: "From the first conversation to the close of a matter: the stages most clients can expect, in plain language.",
    body: [
      "Most engagements begin with a conversation to understand the issue, followed by a written confirmation of what the lawyer will and will not do.",
      "During the matter, clear updates and prompt responses to requests for information keep things moving. At the end, the lawyer should explain the outcome and what, if anything, remains for you to do.",
      "This article is general information, not legal advice. It is sample content pending approval by the firm.",
    ],
  },
  {
    slug: "writing-a-clear-brief",
    title: "Writing a clear brief for your lawyer",
    category: "Guidance",
    date: "2026-03-10",
    excerpt: "Why a concise, well-organised summary of your issue saves time and usually leads to better advice.",
    body: [
      "A clear brief states who is involved, what has happened, what you want and when you need it. Keep facts separate from opinions and attach the documents you refer to.",
      "If anything is uncertain, say so. Lawyers can work with gaps in information far better than with surprises later.",
      "This article is general information, not legal advice. It is sample content pending approval by the firm.",
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
