import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SoulStretch | Yoga & Fitness Studio",
    template: "%s | SoulStretch",
  },
  description:
    "Elevate your movement, strength, and wellbeing with expert-led yoga and fitness experiences.",
  keywords: ["yoga studio", "fitness club", "personal training", "wellness"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SoulStretch",
    title: "SoulStretch | Yoga & Fitness Studio",
    description:
      "Elevate your movement, strength, and wellbeing with expert-led yoga and fitness experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoulStretch | Yoga & Fitness Studio",
    description:
      "Elevate your movement, strength, and wellbeing with expert-led yoga and fitness experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}