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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-paper/95 backdrop-blur-sm">
      <Container className="flex min-h-28 items-center justify-between gap-6 py-3">
        <Link href="/" aria-label={`${firm.name}, home`} className="shrink-0">
         <Image
  src="/logo1.png"
  alt={firm.name}
  width={1275}
  height={485}
  priority
  className="h-20 w-auto sm:h-24"
/>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink transition-colors hover:text-brand">
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

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden size={26} /> : <Menu aria-hidden size={26} />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-mist bg-paper lg:hidden">
          <Container className="flex flex-col py-4">
            {[...primaryNav, headerCta].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-mist py-4 font-display text-2xl text-ink last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
