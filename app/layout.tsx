import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Kamal Guidadou Portfolio",
  description: "2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ LE SCRIPT EST ICI, SANS BALISE <HEAD> AUTOUR */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="4bb50590-c514-461e-aa76-08aab6acae1a"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}