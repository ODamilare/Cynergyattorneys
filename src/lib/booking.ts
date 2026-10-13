/**
 * Booking logic, kept separate from presentation.
 * Today these are *preferred time windows*, not verified availability.
 * To integrate a real calendar, implement `SchedulingProvider` and call it from
 * src/app/api/consultation/route.ts instead of (or alongside) email.
 */
export const TIME_WINDOWS = [
  { id: "morning", label: "Morning (9:00 to 12:00)" },
  { id: "midday", label: "Midday (12:00 to 14:00)" },
  { id: "afternoon", label: "Afternoon (14:00 to 17:00)" },
] as const;

export const METHODS = [
  { id: "in-person", label: "In person" },
  { id: "telephone", label: "Telephone" },
  { id: "video", label: "Video call" },
] as const;

export interface SchedulingProvider {
  getAvailability(date: string): Promise<string[]>;
  createRequest(input: Record<string, unknown>): Promise<{ reference: string }>;
}
