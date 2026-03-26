import { APP_STORE_URL, SITE_URL, PRODUCTHUNT_URL } from "./constants";

export function generateSoftwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "IdeaTamer",
    url: SITE_URL,
    image: `${SITE_URL}/images/app-icon.png`,
    screenshot: [
      `${SITE_URL}/screenshots/appstore/slide-1.webp`,
      `${SITE_URL}/screenshots/appstore/slide-2.webp`,
      `${SITE_URL}/screenshots/appstore/slide-3.webp`,
      `${SITE_URL}/screenshots/appstore/slide-4.webp`,
      `${SITE_URL}/screenshots/appstore/slide-5.webp`,
      `${SITE_URL}/screenshots/appstore/slide-6.webp`,
    ],
    operatingSystem: "iOS 26+",
    applicationCategory: "ProductivityApplication",
    softwareVersion: "1.0",
    downloadUrl: APP_STORE_URL,
    featureList:
      "Smart Scoring, One Quest Focus, Weekly Duel, XP & Levels, Hall of Fame, Offline & Private",
    description:
      "IdeaTamer is a gamified idea focus app for iOS. Score your ideas on Impact, Effort, and Alignment. Activate one quest at a time. Compete with your past self in Weekly Duels. Earn XP, level up, and ship your best ideas to the Hall of Fame. Fully offline, no accounts, zero data collection.",
    author: {
      "@type": "Organization",
      name: "IdeaTamer",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IdeaTamer",
    url: SITE_URL,
    logo: `${SITE_URL}/images/app-icon.png`,
    email: "ideatamerapp@gmail.com",
    sameAs: [PRODUCTHUNT_URL],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IdeaTamer",
    url: SITE_URL,
    description:
      "The gamified focus app for makers and creators. Score your ideas, activate one quest at a time, compete with your past self. Offline, private.",
    publisher: {
      "@type": "Organization",
      name: "IdeaTamer",
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "IdeaTamer",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "IdeaTamer",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/app-icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  crumbs: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
