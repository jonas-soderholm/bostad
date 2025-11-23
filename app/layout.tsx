import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/NavBar";
import ContactFooter from "@/components/ContactFooter";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Jonas Söderholm – Bostadsfoto & Video i Stockholm",
  description:
    "Professionellt bostadsfoto och video i Stockholm. Stilrena, ljusa och moderna bilder och film för mäklare, bostäder och interiörer.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-200 h-full">
      <head /> {/* Next.js handles metadata here */}
      <body
        className={`bg-slate-200 antialiased min-h-screen flex flex-col ${inter.className}`}
      >
        <Navbar />

        <main className="flex-1">{children}</main>

        <ContactFooter />
      </body>
    </html>
  );
}
