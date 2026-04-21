export type GalleryAccent = "blue" | "amber" | "red" | "emerald" | "ink";

export interface GalleryItem {
  index: number;
  slug: string;
  eyebrow: string;
  headline: string;
  subCopy: string;
  accent: GalleryAccent;
  screenshot?: string;
  secondaryScreenshot?: string;
  variant: "problem" | "feature" | "duel";
}

export const GALLERY_ITEMS: Record<string, GalleryItem> = {
  problem: {
    index: 1,
    slug: "problem",
    eyebrow: "The problem",
    headline: "You have 47 ideas.\nYou've finished 0.",
    subCopy: "Sound familiar?",
    accent: "ink",
    variant: "problem",
  },
  capture: {
    index: 2,
    slug: "capture",
    eyebrow: "Capture",
    headline: "Capture ideas\nin seconds.",
    subCopy: "Drop it in. Score it later. Max 10 unscored keeps you honest.",
    accent: "blue",
    screenshot: "/screenshots/features/free-private.webp",
    variant: "feature",
  },
  scoring: {
    index: 3,
    slug: "scoring",
    eyebrow: "Score",
    headline: "Find the one\nthat matters.",
    subCopy: "Three sliders — Impact, Effort, Alignment. One score. Your best idea rises.",
    accent: "blue",
    screenshot: "/screenshots/features/smart-scoring.webp",
    variant: "feature",
  },
  quest: {
    index: 4,
    slug: "quest",
    eyebrow: "Focus",
    headline: "Activate ONE quest.\nEverything else waits.",
    subCopy: "Your highest-scored idea becomes your Quest. Stay locked in until you ship.",
    accent: "amber",
    screenshot: "/screenshots/features/one-quest.webp",
    variant: "feature",
  },
  duel: {
    index: 5,
    slug: "duel",
    eyebrow: "Compete",
    headline: "Beat last week's\nversion of you.",
    subCopy: "Every Monday, four rounds: XP, milestones, quests shipped, streak. Level up.",
    accent: "red",
    screenshot: "/screenshots/features/weekly-duel.webp",
    secondaryScreenshot: "/screenshots/features/xp-levels.webp",
    variant: "duel",
  },
  legacy: {
    index: 6,
    slug: "legacy",
    eyebrow: "Legacy",
    headline: "Finished ideas\nlive here.",
    subCopy: "Your Hall of Fame. Proof you beat yourself, again and again.",
    accent: "emerald",
    screenshot: "/screenshots/features/hall-of-fame.webp",
    variant: "feature",
  },
};

export const GALLERY_SLUGS = Object.keys(GALLERY_ITEMS);
