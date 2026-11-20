import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fernway — Curated Boutique Journeys for Women | Solo, Not Alone",
  description:
    "Travel freely, travel safely, travel in style. Fernway is a luxury women-only travel collective offering handpicked stays, vetted safety charters, and small group sisterhood voyages across Meghalaya, Rajasthan, Kashmir, Bali, and beyond.",
  keywords: [
    "women only trips",
    "safe group tours for women in India",
    "female solo travel community",
    "women travel club India",
    "Fernway",
    "women wanderlust",
    "luxury women trips",
  ],
  authors: [{ name: "Pallavi Vyas", url: "https://fernway.in" }],
  openGraph: {
    title: "Fernway — Travel Freely. Travel Safely. Travel in Style.",
    description:
      "Curated boutique group journeys for women who would rather not wait. Handpicked premium stays, certified woman trip leads, and 24x7 safety protocols.",
    type: "website",
    locale: "en_US",
    siteName: "Fernway",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${caveat.variable} font-sans bg-ivory-100 text-fern-950 antialiased selection:bg-gold-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
