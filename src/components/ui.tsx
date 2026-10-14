import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { isPlaceholder } from "@/config/firm";

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";

export function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/logo1.png"
      alt="Cynergy Attorneys: Seamless Legal Solutions"
      width={1135}
      height={460}
      priority
      className={`block h-16 w-auto max-w-[180px] object-contain mix-blend-multiply sm:h-20 sm:max-w-[220px] lg:h-24 lg:max-w-[260px] ${className}`}
    />
  );
}
const base = "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200";
const variants = {
  primary: "bg-navy text-white hover:bg-blue",
  outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  light: "bg-paper text-navy hover:bg-gold",
  ghostLight: "border border-white/50 text-white hover:bg-white hover:text-navy",
} as const;
export type Variant = keyof typeof variants;
export const btn = (v: Variant = "primary") => `${base} ${variants[v]}`;

export function ButtonLink({ href, variant = "primary", children }: { href: string; variant?: Variant; children: React.ReactNode }) {
  return <Link href={href} className={btn(variant)}>{children}</Link>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue underline decoration-gold decoration-2 underline-offset-[6px] hover:text-navy">
      {children}
      <ArrowUpRight size={15} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

/** Flags content that is a sample/proposal awaiting client approval. */


/** Renders a config value, visibly marking unfilled placeholders. */
export function Value({ v }: { v: string }) {
  return isPlaceholder(v) ? <span className="bg-gold/20 px-1 text-gold-deep">{v}</span> : <>{v}</>;
}

export function PageHero({ title, intro, children }: { title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-line bg-mist">
      <div className={`${container} grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end`}>
        <div>
          <h1 className="font-serif text-5xl font-medium leading-[1.02] text-navy sm:text-6xl lg:text-7xl">{title}</h1>
          {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">{intro}</p>}
        </div>
        {children && <div>{children}</div>}
      </div>
    </section>
  );
}

export function SectionIntro({ title, children, action }: { title: string; children?: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 border-t border-navy pt-6 sm:flex-row sm:items-end">
      <div>
        <h2 className="font-serif text-3xl font-medium text-navy sm:text-4xl">{title}</h2>
        {children && <p className="mt-3 max-w-xl leading-relaxed text-slate">{children}</p>}
      </div>
      {action}
    </div>
  );
}

/** Abstract skyline and columns drawn from the logo's forms. Decorative. */
export function Motif({ className = "" }: { className?: string }) {
  const bars = [
    { x: 20, w: 56, h: 200, f: "fill-gold" }, { x: 88, w: 64, h: 330, f: "fill-blue" },
    { x: 164, w: 56, h: 420, f: "fill-gold" }, { x: 232, w: 72, h: 270, f: "fill-slate" },
    { x: 316, w: 56, h: 360, f: "fill-blue" },
  ];
  return (
    <svg viewBox="0 0 392 480" role="img" aria-label="Abstract skyline" className={className}>
      {bars.map((b, i) => (
        <g key={b.x} className="rise" style={{ animationDelay: `${i * 90}ms` }}>
          <rect x={b.x} y={460 - b.h} width={b.w} height={b.h} className={b.f} />
          {[0.25, 0.5, 0.75].map((p) => (
            <line key={p} x1={b.x + b.w * p} x2={b.x + b.w * p} y1={460 - b.h + 12} y2={460} stroke="#f5f5f2" strokeOpacity=".35" strokeWidth="1.5" />
          ))}
        </g>
      ))}
      <rect x="0" y="460" width="392" height="6" className="fill-paper" />
    </svg>
  );
}
