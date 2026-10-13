"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, btn, container } from "@/components/ui";
import { nav } from "@/config/firm";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const link = (href: string) =>
    `relative py-2 text-sm font-medium text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gold after:origin-left after:transition-transform ${
      pathname.startsWith(href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className={`${container} flex h-20 items-center justify-between`}>
        <Link href="/" aria-label="Cynergy Attorneys home" onClick={() => setOpen(false)}><Logo className="h-12 sm:h-14" /></Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={link(n.href)} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>{n.label}</Link>
          ))}
          <Link href="/book-consultation" className={btn("primary")}>Book a consultation</Link>
        </nav>

        <button type="button" className="p-2 text-navy lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-paper lg:hidden">
          <ul className={`${container} py-6`}>
            {nav.map((n) => (
              <li key={n.href} className="border-b border-line">
                <Link href={n.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-3xl text-navy">{n.label}</Link>
              </li>
            ))}
            <li className="pt-8">
              <Link href="/book-consultation" onClick={() => setOpen(false)} className={`${btn("primary")} w-full`}>Book a consultation</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
