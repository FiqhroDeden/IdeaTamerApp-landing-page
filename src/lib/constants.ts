export const APP_STORE_URL = "https://apps.apple.com/app/ideatamer/id0000000000";

export const SITE_URL = "https://ideatamer.app";

// Formspree endpoint — replace with your actual form ID from https://formspree.io
export const FORMSPREE_URL = "https://formspree.io/f/maqlwkgz";

// Product Hunt Coming Soon page — replace with your actual URL
export const PRODUCTHUNT_URL = "https://www.producthunt.com/products/ideatamer";

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Privacy", href: "/privacy" },
  { label: "Support", href: "/support" },
] as const;

export const FEATURES = [
  {
    id: "smart-scoring",
    title: "Smart Scoring",
    badge: "SCORING",
    badgeColor: "bg-hero-blue",
    description:
      "Three sliders. One score. Every idea rated on Impact, Effort, and Alignment — so your best ideas always rise to the top.",
    screenshot: "/screenshots/features/smart-scoring.webp",
  },
  {
    id: "one-quest",
    title: "One Quest Focus",
    badge: "FOCUS",
    badgeColor: "bg-hero-blue-deep",
    description:
      "Your highest-scored idea becomes your active Quest. Track mastery, hit milestones, and stay locked in until you ship.",
    screenshot: "/screenshots/features/one-quest.webp",
  },
  {
    id: "weekly-duel",
    title: "Weekly Duel",
    badge: "COMPETE",
    badgeColor: "bg-rival-red",
    description:
      "Compete with who you were 7 days ago. Four rounds — XP earned, milestones hit, quests shipped, streak days. Beat your shadow every week.",
    screenshot: "/screenshots/features/weekly-duel.webp",
  },
  {
    id: "xp-levels",
    title: "XP & Levels",
    badge: "GAMIFY",
    badgeColor: "bg-streak-amber",
    description:
      "Every action earns XP. Score an idea, complete a milestone, ship a quest. Level up from Spark to Legend and collect badges along the way.",
    screenshot: "/screenshots/features/xp-levels.webp",
  },
  {
    id: "hall-of-fame",
    title: "Hall of Fame",
    badge: "LEGACY",
    badgeColor: "bg-victory-emerald",
    description:
      "Your legacy of shipped ideas. Proof you beat yourself, again and again. Sort by recent, fastest, or most XP earned.",
    screenshot: "/screenshots/features/hall-of-fame.webp",
  },
  {
    id: "free-private",
    title: "Free & Private",
    badge: "PRIVACY",
    badgeColor: "bg-text-mid",
    description:
      "No accounts. No cloud. No tracking. Your ideas live on your device and nowhere else. Free to download on the App Store.",
    screenshot: "/screenshots/features/free-private.webp",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Capture",
    description: "Drop every idea into your inbox. No filter, no friction. Max 10 unscored ideas keeps you honest.",
    color: "text-hero-blue",
    bgColor: "bg-hero-blue-bg",
  },
  {
    step: 2,
    title: "Score",
    description: "Rate each idea on Impact, Effort, and Alignment. IdeaTamer calculates a 1–100 score.",
    color: "text-streak-amber",
    bgColor: "bg-streak-amber-bg",
  },
  {
    step: 3,
    title: "Focus",
    description: "Your top-scored idea becomes your Quest. One idea, full attention, with milestones to track progress.",
    color: "text-hero-blue",
    bgColor: "bg-hero-blue-bg",
  },
  {
    step: 4,
    title: "Ship",
    description: "Complete milestones, earn XP, and ship it to your Hall of Fame. Then activate the next quest.",
    color: "text-victory-emerald",
    bgColor: "bg-victory-emerald-bg",
  },
] as const;
