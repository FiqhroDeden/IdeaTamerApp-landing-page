import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with IdeaTamer. Frequently asked questions and contact information.",
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
    question: "Is it really free?",
    answer:
      "Yes. No ads, no in-app purchases, no subscriptions. IdeaTamer is completely free and always will be.",
  },
  {
    question: "Does IdeaTamer work offline?",
    answer:
      "100% offline. IdeaTamer never connects to the internet. No account needed, no data sync, no network requests. Everything runs on your device.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-hero-blue text-sm font-medium mb-8 hover:underline"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
          Support
        </h1>
        <p className="text-text-mid mb-12">
          Answers to common questions about IdeaTamer.
        </p>

        {/* FAQ */}
        <section className="space-y-4 mb-16">
          <h2 className="text-xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h2>

          {FAQ.map((item, i) => (
            <details
              key={i}
              className="group bg-surface rounded-xl border border-gray-100"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-text-primary font-semibold select-none">
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
              <div className="px-6 pb-4 text-text-mid leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </section>

        {/* Contact */}
        <section className="bg-hero-blue-bg rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-text-primary mb-3">
            Still have questions?
          </h2>
          <p className="text-text-mid mb-4">
            We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as
            possible.
          </p>
          <a
            href="mailto:support@ideatamer.app"
            className="inline-flex items-center gap-2 bg-hero-blue text-white font-semibold px-6 py-3 rounded-xl hover:bg-hero-blue-dim transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
            support@ideatamer.app
          </a>
          <p className="mt-6 text-text-light text-sm">
            IdeaTamer v1.0 &middot; iOS 26+
          </p>
        </section>
      </div>
    </div>
  );
}
