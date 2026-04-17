import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/marks/GrainOverlay";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/constants";
import {
  generateSoftwareAppSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/structured-data";

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

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "IdeaTamer: Stop collecting ideas. Start finishing them.",
    template: "%s | IdeaTamer",
  },
  description:
    "The gamified focus app for makers and creators. Score your ideas, activate one quest at a time, compete with your past self. Offline, private.",
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
    title: "IdeaTamer: Stop collecting ideas. Start finishing them.",
    description:
      "Score your ideas, focus on one quest, compete with yourself. Free for iOS.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "IdeaTamer, a gamified idea focus app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IdeaTamer: Stop collecting ideas. Start finishing them.",
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
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement,s=localStorage.getItem('theme');if(s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches))d.classList.add('dark')}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSoftwareAppSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
      </head>
      <body className="font-sans antialiased bg-paper text-ink dark:bg-ink dark:text-chalk">
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
