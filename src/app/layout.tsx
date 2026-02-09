import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutShell from "@/components/LayoutShell";
import { BASE_URL } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SBL Showcase | Prosjekter",
    template: "%s | SBL Showcase",
  },
  description: "Showcase av prosjekter innen restaurant, fastfood og håndverk",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "SBL Showcase | Prosjekter",
    description: "Showcase av prosjekter innen restaurant, fastfood og håndverk",
    url: BASE_URL,
    siteName: "SBL Showcase",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og/default.jpg`,
        width: 1200,
        height: 630,
        alt: "SBL Showcase – Prosjekter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SBL Showcase | Prosjekter",
    description: "Showcase av prosjekter innen restaurant, fastfood og håndverk",
    images: [`${BASE_URL}/og/default.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
