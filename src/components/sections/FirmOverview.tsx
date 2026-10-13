import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { firm } from "@/config/firm";

/** Draft copy, pending firm review. */
const approach = [
  { title: "Plain language", body: "Advice explained in terms you can act on, without unnecessary jargon." },
  { title: "Responsive communication", body: "Clear expectations about who is handling your matter and what happens next." },
  { title: "Careful preparation", body: "Thorough groundwork so that decisions are made on solid footing." },
];

export function FirmOverview() {
  return (
    <section aria-labelledby="firm" className="bg-white py-20 sm:py-28">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="firm" title="A firm built on clear thinking" />
          <p className="mt-8 max-w-md text-slate-deep">
            {firm.name} aims to make dealing with the law more straightforward. The firm&apos;s full background and
            history will be shared here once confirmed.
          </p>
          <dl className="mt-10 max-w-md divide-y divide-mist border-y border-mist text-sm">
            <div className="flex justify-between gap-6 py-4">
              <dt className="text-slate-deep">Established</dt>
              <dd><Placeholder value={firm.established} /></dd>
            </div>
            <div className="flex justify-between gap-6 py-4">
              <dt className="text-slate-deep">Office</dt>
              <dd className="text-right"><Placeholder value={firm.contact.address} /></dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h3 className="font-display text-2xl font-semibold">How the firm works</h3>
          <ul className="mt-6 divide-y divide-mist border-t border-mist">
            {approach.map((item) => (
              <li key={item.title} className="py-6">
                <h4 className="font-display text-2xl font-medium">{item.title}</h4>
                <p className="mt-2 max-w-lg text-slate-deep">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
