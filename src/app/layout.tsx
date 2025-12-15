import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Lato, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TruTalk Therapy",
  description: "A calming and trusted space for parents to connect with a lead child psychologist, book personalized autism consultations, and learn through guided modules designed to support their child'tps growth and well-being.",
  icons: {
    icon: "/profile-circular.png",
    shortcut: "/profile-circular.png",
    apple: "/profile-circular.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
