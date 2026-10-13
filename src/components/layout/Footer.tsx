import Image from "next/image";
import Link from "next/link";
import { ContactLines } from "@/components/layout/ContactLines";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { firm } from "@/config/firm";
import { primaryNav } from "@/config/navigation";

const socialLabels = { linkedin: "LinkedIn", x: "X", facebook: "Facebook", instagram: "Instagram" } as const;

export function Footer() {
  const socials = (Object.keys(socialLabels) as (keyof typeof socialLabels)[]).filter((k) => firm.social[k]);
  return (
    <footer className="border-t-4 border-ink bg-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image src="/logo.png" alt={firm.name} width={1175} height={485} className="h-14 w-auto" />
          <p className="mt-6 max-w-sm text-sm text-slate-deep">{firm.legal.disclaimer}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <h2 className="font-display text-xl font-semibold text-ink">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-deep transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {socials.length > 0 && (
            <ul className="mt-8 flex gap-5 text-sm">
              {socials.map((k) => (
                <li key={k}>
                  <a href={firm.social[k]} rel="noopener noreferrer" target="_blank" className="text-slate-deep hover:text-brand">
                    {socialLabels[k]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>

        <div className="md:col-span-3">
          <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
          <div className="mt-4 text-sm">
            <ContactLines />
          </div>
        </div>
      </Container>
      <div className="border-t border-mist">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-deep sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {firm.name}. All rights reserved.</p>
          <p><Placeholder value={firm.legal.registration} /></p>
        </Container>
      </div>
    </footer>
  );
}
