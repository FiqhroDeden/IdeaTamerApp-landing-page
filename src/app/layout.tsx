import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/constants";

const plusJakarta = localFont({
  src: [
    { path: "../fonts/PlusJakartaSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/PlusJakartaSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/PlusJakartaSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/PlusJakartaSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/PlusJakartaSans-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "IdeaTamer — Stop collecting ideas. Start finishing them.",
    template: "%s | IdeaTamer",
  },
  description:
    "The gamified focus app for makers and creators. Score your ideas, activate one quest at a time, compete with your past self. Free, offline, private.",
  keywords: [
    "idea management",
    "productivity app",
    "iOS app",
    "gamified productivity",
    "idea scoring",
    "focus app",
    "quest tracker",
  ],
  authors: [{ name: "IdeaTamer" }],
  creator: "IdeaTamer",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "IdeaTamer",
    title: "IdeaTamer — Stop collecting ideas. Start finishing them.",
    description:
      "Score your ideas, focus on one quest, compete with yourself. Free for iOS.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "IdeaTamer — Gamified Idea Focus App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IdeaTamer — Stop collecting ideas. Start finishing them.",
    description:
      "Score your ideas, focus on one quest, compete with yourself. Free for iOS.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "IdeaTamer",
              operatingSystem: "iOS 26+",
              applicationCategory: "ProductivityApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Gamified idea focus app. Score, focus, and ship your best ideas. One quest at a time.",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
