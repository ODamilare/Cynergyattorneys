import type { Metadata } from "next";
import { PageHero, container } from "@/components/ui";
import { BookingForm } from "@/components/booking-form";
import { areaIds } from "@/lib/schemas";

export const metadata: Metadata = { title: "Book a consultation", description: "Request a consultation with Cynergy Attorneys." };

export default async function BookConsultationPage({ searchParams }: { searchParams: Promise<{ area?: string }> }) {
  const { area } = await searchParams;
  const defaultArea = area && areaIds.includes(area) ? area : "";
  return (
    <>
      <PageHero title="Request a consultation" intro="Tell us when suits you and how you would like to meet. We will reply to confirm." />
      <div className={`${container} grid gap-12 py-16 lg:grid-cols-[1fr_1.5fr]`}>
        <aside className="space-y-4 text-sm leading-relaxed text-slate">
          <h2 className="font-serif text-2xl text-navy">Before you send</h2>
          <p>Your chosen date and time are preferences. A consultation is only booked once the firm confirms it to you.</p>
          <p>Please keep your description brief and leave out confidential details.</p>
        </aside>
        <BookingForm defaultArea={defaultArea} />
      </div>
    </>
  );
}
