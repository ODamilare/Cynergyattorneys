/**
 * Central, editable firm details.
 * Anything in [square brackets] is a placeholder awaiting client information.
 * Replace the value and the site updates everywhere; placeholders are
 * automatically visually flagged via `isPlaceholder`.
 */
export const firm = {
  name: "Cynergy Attorneys",
  tagline: "Seamless Legal Solutions",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  established: "[Year Established]",
  address: ["[Office Address]"],
  phone: "[Phone Number]",
  whatsapp: "[WhatsApp Number]",
  email: "[Email Address]",
  hours: "[Opening Hours]",
  /** Paste a Google Maps *embed* URL here once the address is confirmed. */
  mapEmbedUrl: "",
  social: [
    { label: "LinkedIn", url: "[Social Media URL]" },
    { label: "X", url: "[Social Media URL]" },
    { label: "Facebook", url: "[Social Media URL]" },
  ],
} as const;

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());

export const nav = [
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/team", label: "Our team" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;
