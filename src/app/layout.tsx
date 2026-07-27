import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Lato, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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

/** Matches page background so iOS Safari chrome / safe areas blend */
const PAGE_BG = "#ffffff";

export const viewport: Viewport = {
  themeColor: PAGE_BG,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "TruTalk Therapy",
  description: "A calming and trusted space for parents to connect with a lead child psychologist, book personalized autism consultations, and learn through guided modules designed to support their child'tps growth and well-being.",
  icons: {
    icon: "/profile-circular.png",
    shortcut: "/profile-circular.png",
    apple: "/profile-circular.png",
  },
  appleWebApp: {
    statusBarStyle: "default",
    capable: true,
  },
  other: {
    "theme-color": PAGE_BG,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white" style={{ backgroundColor: PAGE_BG }}>
      <body
        className={`${lato.variable} ${cormorant.variable} ${geistSans.variable} ${geistMono.variable} font-sans text-chocolate-800 bg-white antialiased`}
        style={{ backgroundColor: PAGE_BG }}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
