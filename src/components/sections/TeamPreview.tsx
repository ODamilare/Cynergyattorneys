import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/content/team";

function Silhouette() {
  return (
    <svg viewBox="0 0 200 250" aria-hidden className="absolute inset-0 h-full w-full text-slate/35">
      <circle cx="100" cy="95" r="40" fill="currentColor" />
      <path d="M20 250c0-55 36-90 80-90s80 35 80 90z" fill="currentColor" />
    </svg>
  );
}

export function TeamPreview() {
  return (
    <section aria-labelledby="team" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="team"
          title="The team"
          intro="Lawyer profiles will appear here once the firm supplies names, photographs and biographies."
        />
        <ul className="mt-14 grid gap-10 sm:grid-cols-3">
          {team.map((member) => (
            <li key={member.id}>
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                {member.photo ? (
                  <Image src={member.photo} alt={`Portrait of ${member.name}`} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                ) : (
                  <Silhouette />
                )}
              </div>
              <p className="mt-5 font-display text-2xl font-medium"><Placeholder value={member.name} /></p>
              <p className="text-sm text-slate-deep"><Placeholder value={member.title} /></p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
