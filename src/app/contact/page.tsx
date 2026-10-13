import type { Metadata } from "next";
import { PageHero, Value, container } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { firm } from "@/config/firm";

export const metadata: Metadata = { title: "Contact", description: "Contact Cynergy Attorneys." };

export default function ContactPage() {
  const rows: [string, React.ReactNode][] = [
    ["Office", firm.address.map((l) => <p key={l}><Value v={l} /></p>)],
    ["Telephone", <Value key="p" v={firm.phone} />],
    ["WhatsApp", <Value key="w" v={firm.whatsapp} />],
    ["Email", <Value key="e" v={firm.email} />],
    ["Opening hours", <Value key="h" v={firm.hours} />],
  ];
  return (
    <>
      <PageHero title="Contact the firm" intro="Send us a message and we will respond as soon as we can." />
      <div className={`${container} grid gap-16 py-16 lg:grid-cols-[1fr_1.3fr]`}>
        <div>
          <dl className="space-y-6">
            {rows.map(([t, v]) => (
              <div key={t} className="border-t border-line pt-4"><dt className="text-sm text-slate">{t}</dt><dd className="mt-1 font-serif text-2xl text-navy">{v}</dd></div>
            ))}
          </dl>
          <div className="mt-10">
            {firm.mapEmbedUrl ? (
              <iframe title="Office location map" src={firm.mapEmbedUrl} loading="lazy" className="aspect-[4/3] w-full border border-line" />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-line bg-mist p-6 text-center text-sm text-slate">
                Map will appear here once the office address is added in src/config/firm.ts.
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="mb-8 border-l-4 border-gold bg-gold/10 p-4 text-sm leading-relaxed text-slate">
            Please do not send confidential information through this form, and do not use it for urgent legal matters. Contact the firm by telephone instead.
          </p>
          <ContactForm />
          <p className="mt-8 text-xs leading-relaxed text-slate">
            Privacy: we use the details you provide only to respond to your enquiry. We do not sell or share them for marketing.
          </p>
        </div>
      </div>
    </>
  );
}
