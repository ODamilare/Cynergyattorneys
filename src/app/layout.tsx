import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { firm } from "@/config/firm";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });
const sans = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL(firm.siteUrl),
  title: { default: `${firm.name} | ${firm.tagline}`, template: `%s | ${firm.name}` },
  description: `${firm.name}: ${firm.tagline.toLowerCase()}. Clear, considered legal advice.`,
  openGraph: { type: "website", siteName: firm.name, images: [{ url: "/logo.png", width: 1135, height: 460, alt: firm.name }] },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#1b2f4b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
