import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { generateFAQSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with IdeaTamer. Frequently asked questions about idea scoring, quests, Weekly Duel, gamified productivity, and offline privacy.",
};

const FAQ = [
  {
    question: "How do I score an idea?",
    answer:
      "Tap any idea in your inbox, then use the three sliders to rate it on Impact (how big is the potential?), Effort (how hard to complete?), and Alignment (how well does it match your goals?). IdeaTamer calculates a combined score from 1 to 100.",
  },
  {
    question: "How many quests can I have active at once?",
    answer:
      "One. That's the point. IdeaTamer enforces single-quest focus so you stop juggling and start finishing. Complete or park your current quest before activating a new one.",
  },
  {
    question: "Will I lose my data if I delete the app?",
    answer:
      "Yes. All data is stored locally on your device — there is no cloud backup or sync. If you delete the app, your ideas, quests, XP, and badges are permanently removed.",
  },
  {
    question: "How does the Weekly Duel work?",
    answer:
      "Every Monday, IdeaTamer compares your performance this week against last week across four rounds: XP earned, milestones completed, quests shipped, and streak days. Win more rounds than your past self to claim victory.",
  },
  {
    question: "Is it free?",
    answer:
      "IdeaTamer is free to download with no ads. Core features are included at no cost. Premium features may be offered in future updates.",
  },
  {
    question: "Does IdeaTamer work offline?",
    answer:
      "100% offline. IdeaTamer never connects to the internet. No account needed, no data sync, no network requests. Everything runs on your device.",
  },
  {
    question: "How is IdeaTamer different from Notion?",
    answer:
      "Notion is a flexible workspace for notes, databases, and team collaboration. IdeaTamer is purpose-built for one thing: helping you finish ideas. Instead of infinite flexibility, IdeaTamer gives you a focused system — score your ideas, activate one as a quest, and ship it. It also adds gamification (XP, levels, Weekly Duels) and works 100% offline with zero data collection.",
  },
  {
    question: "Is IdeaTamer good for managing side project ideas?",
    answer:
      "Yes — it was built specifically for this. If you have too many side project ideas and struggle to finish any of them, IdeaTamer helps you score each idea objectively, pick the best one, and focus on it as a quest with milestones until you ship it. The gamification keeps you motivated and the single-quest limit prevents you from context-switching.",
  },
  {
    question: "Can designers and creators use IdeaTamer?",
    answer:
      "Absolutely. IdeaTamer works for anyone with too many creative ideas — designers, writers, musicians, content creators, indie developers. The scoring system helps you prioritize objectively, and the quest system keeps you focused on shipping one project at a time instead of jumping between ideas.",
  },
  {
    question: "How does IdeaTamer gamify productivity?",
    answer:
      "Every action in IdeaTamer earns XP — scoring an idea, completing a milestone, shipping a quest. You level up from Spark to Legend, collect badges, maintain streaks, and compete against yourself in Weekly Duels. It turns the process of finishing ideas into a game where you're always trying to beat your past self.",
  },
  {
    question: "Is IdeaTamer really private?",
    answer:
      "Yes. IdeaTamer collects zero data. There are no accounts, no analytics, no tracking SDKs, no ads, no network requests, and no access to your contacts, location, or camera. All data is stored exclusively on your device using Apple SwiftData. Your ideas never leave your phone.",
  },
  {
    question: "Does IdeaTamer require an internet connection?",
    answer:
      "No. IdeaTamer is 100% offline and never makes any network requests. You can use it on a plane, in the wilderness, or anywhere without internet. This also means your data stays completely private — nothing is ever sent to a server.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQ)),
        }}
      />

      <div className="max-w-3xl mx-auto px-5">
        <Breadcrumbs crumbs={[{ name: "Support", href: "/support" }]} />

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary dark:text-gray-100 mb-2">
          Support
        </h1>
        <p className="text-text-mid dark:text-gray-400 mb-12">
          Answers to common questions about IdeaTamer.
        </p>

        {/* FAQ */}
        <section className="space-y-4 mb-16">
          <h2 className="text-xl font-bold text-text-primary dark:text-gray-100 mb-6">
            Frequently Asked Questions
          </h2>

          {FAQ.map((item, i) => (
            <details
              key={i}
              className="group bg-surface dark:bg-[#18181B] rounded-xl border border-gray-100 dark:border-[#2E2E33]"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-text-primary dark:text-gray-100 font-semibold select-none">
                {item.question}
                <svg
                  className="w-5 h-5 text-text-light transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-text-mid dark:text-gray-400 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </section>

        {/* Contact */}
        <section className="bg-hero-blue-bg dark:bg-hero-blue/10 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-text-primary mb-3">
            Still have questions?
          </h2>
          <p className="text-text-mid mb-4">
            We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as
            possible.
          </p>
          <a
            href="mailto:ideatamerapp@gmail.com"
            className="inline-flex items-center gap-2 bg-hero-blue text-white font-semibold px-6 py-3 rounded-xl hover:bg-hero-blue-dim transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
            ideatamerapp@gmail.com
          </a>
          <p className="mt-6 text-text-light text-sm">
            IdeaTamer v1.0 &middot; iOS 26+
          </p>
        </section>
      </div>
    </div>
  );
}
