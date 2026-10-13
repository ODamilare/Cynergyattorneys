type Props = { id?: string; title: string; intro?: string; tone?: "light" | "dark"; className?: string };

export function SectionHeading({ id, title, intro, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <h2
        id={id}
        className={`font-display text-4xl font-medium leading-[1.1] sm:text-5xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      <span aria-hidden className="mt-6 block h-px w-16 bg-gold" />
      {intro && (
        <p className={`mt-6 max-w-md text-base ${dark ? "text-white/75" : "text-slate-deep"}`}>{intro}</p>
      )}
    </div>
  );
}
