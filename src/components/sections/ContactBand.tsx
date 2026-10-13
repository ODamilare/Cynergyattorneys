import { ContactLines } from "@/components/layout/ContactLines";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactBand() {
  return (
    <section aria-labelledby="contact" className="bg-ink py-20 text-white sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading id="contact" tone="dark" title="Discuss your matter with the firm" />
          <p className="mt-8 max-w-md text-white/75">
            Please do not send confidential or time-sensitive legal information through this website. Contact the
            firm directly using the details provided.
          </p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <ContactLines tone="dark" />
        </div>
      </Container>
    </section>
  );
}
