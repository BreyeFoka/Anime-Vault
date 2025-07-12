import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault - Discover Amazing Anime",
  description:
    "Discover, explore, and track your favorite anime series. Your ultimate anime destination with trending shows, top ratings, and personalized recommendations.",
  keywords:
    "anime, manga, japanese animation, anime series, anime movies, otaku",
  authors: [{ name: "Anime Vault Team" }],
  creator: "Anime Vault",
  publisher: "Anime Vault",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Anime Vault - Discover Amazing Anime",
    description:
      "Your ultimate anime destination with trending shows, top ratings, and personalized recommendations.",
    url: "https://anime-vault.com",
    siteName: "Anime Vault",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Vault - Discover Amazing Anime",
    description:
      "Your ultimate anime destination with trending shows, top ratings, and personalized recommendations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-[#0F1117] via-[#1a1f2e] to-[#0F1117]">
          <Navigation />
          <main className="relative">
            <Hero />
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
