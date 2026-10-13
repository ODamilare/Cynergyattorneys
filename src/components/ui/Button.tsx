import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark" | "outlineOnDark";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-brand",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-white",
  onDark: "bg-white text-ink hover:bg-gold hover:text-ink",
  outlineOnDark: "border border-white/60 text-white hover:border-white hover:bg-white hover:text-ink",
};

type CommonProps = { variant?: Variant; className?: string; children: ReactNode };
type LinkProps = CommonProps & { href: string };
type NativeProps = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

export function Button(props: LinkProps | NativeProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${className}`;
  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }
  const { variant: _v, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
