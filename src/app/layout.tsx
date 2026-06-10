import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Curtain from "@/components/Curtain";
import ScrollAnimations from "@/components/ScrollAnimations";
import MagneticCursor from "@/components/MagneticCursor";

const bodoniModa = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mouss. — Design & E-commerce sur-mesure",
  description:
    "Studio indépendant spécialisé en création de boutiques e-commerce sur-mesure. Design, développement Next.js, Stripe, mise en ligne — par une seule personne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bodoniModa.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-ivory focus:text-ink focus:rounded-full focus:text-sm focus:font-medium focus:outline-none focus:ring-2 focus:ring-oxblood"
        >
          Passer au contenu
        </a>
        <Curtain />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        <ScrollAnimations />
        <MagneticCursor />
      </body>
    </html>
  );
}
