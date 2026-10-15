
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { firm } from "@/config/firm";
import { headerCta, primaryNav } from "@/config/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-paper/95 backdrop-blur-sm">
      <Container className="flex min-h-24 items-center justify-between gap-4 py-3 sm:min-h-28 sm:gap-6">
        <Link
          href="/"
          aria-label={`${firm.name}, home`}
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo1.png"
            alt={firm.name}
            width={1275}
            height={485}
            priority
            className="h-14 w-auto sm:h-20 lg:h-24"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={headerCta.href}
            className="border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {headerCta.label}
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((previous) => !previous)}
          className="inline-flex size-11 shrink-0 items-center justify-center border border-mist text-ink transition-colors hover:bg-mist lg:hidden"
        >
          {open ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </Container>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`absolute left-0 right-0 top-full z-50 border-t border-mist bg-paper shadow-xl transition-[opacity,visibility] duration-200 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <Container className="flex flex-col py-3">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="block border-b border-mist py-4 font-display text-xl text-ink transition-colors hover:text-brand last:border-0"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={headerCta.href}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-3 border border-ink px-5 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {headerCta.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}
