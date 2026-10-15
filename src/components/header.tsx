
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, btn, container } from "@/components/ui";
import { nav } from "@/config/firm";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const link = (href: string) =>
    `relative py-2 text-sm font-medium text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gold after:origin-left after:transition-transform ${
      pathname.startsWith(href)
        ? "after:scale-x-100"
        : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div
        className={`${container} flex h-20 items-center justify-between`}
      >
        <Link
          href="/"
          aria-label="Cynergy Attorneys home"
          onClick={() => setOpen(false)}
          className="shrink-0"
        >
          <Logo className="h-12 sm:h-14" />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={link(n.href)}
              aria-current={
                pathname.startsWith(n.href) ? "page" : undefined
              }
            >
              {n.label}
            </Link>
          ))}

          <Link
            href="/book-consultation"
            className={btn("primary")}
          >
            Book a consultation
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center text-navy transition-colors hover:bg-line/50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? (
            <X size={26} aria-hidden="true" />
          ) : (
            <Menu size={26} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`absolute left-0 right-0 top-full z-[100] max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-paper shadow-xl transition-[opacity,visibility] duration-200 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <ul className={`${container} py-5`}>
          {nav.map((n) => (
            <li key={n.href} className="border-b border-line">
              <Link
                href={n.href}
                tabIndex={open ? 0 : -1}
                aria-current={
                  pathname.startsWith(n.href) ? "page" : undefined
                }
                onClick={() => setOpen(false)}
                className={`block py-4 font-serif text-2xl transition-colors hover:text-gold ${
                  pathname.startsWith(n.href)
                    ? "text-gold"
                    : "text-navy"
                }`}
              >
                {n.label}
              </Link>
            </li>
          ))}

          <li className="pt-6">
            <Link
              href="/book-consultation"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={`${btn("primary")} flex w-full justify-center`}
            >
              Book a consultation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
