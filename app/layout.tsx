import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Everything Girly by Nana | Beauty & Accessories — Lagos",
  description:
    "Premium lip gloss, lip balm, bonnets and accessories handpicked for you. Based in Lagos, Nigeria. Order via WhatsApp.",
  keywords: ["lip gloss", "bonnets", "lip balm", "beauty", "Lagos", "Nigeria", "accessories"],
  openGraph: {
    title: "Everything Girly by Nana",
    description: "Premium beauty & accessories from Lagos. Girly, affordable, and made with love. 💕",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything Girly by Nana",
    description: "Premium beauty & accessories from Lagos. 💕",
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
      className={`${cormorant.variable} ${dancing.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
