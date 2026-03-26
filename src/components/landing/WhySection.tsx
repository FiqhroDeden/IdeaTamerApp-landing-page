import Link from "next/link";

const REASONS = [
  {
    title: "Privacy-first",
    description:
      "Zero data collection. No accounts, no cloud, no tracking. Your ideas stay on your device and nowhere else.",
    href: "/blog/privacy-first-productivity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Offline by design",
    description:
      "IdeaTamer never connects to the internet. Works everywhere — on a plane, in a cafe, or off the grid.",
    href: "/blog/privacy-first-productivity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
        <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    title: "One quest focus",
    description:
      "Only one active idea at a time. This deliberate constraint is what makes IdeaTamer different from every other productivity tool.",
    href: "/use-cases/indie-developers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Gamified accountability",
    description:
      "XP, levels, streaks, badges, and Weekly Duels against your past self. Productivity that feels like a game.",
    href: "/blog/why-ideatamer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export function WhySection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Why IdeaTamer?
          </h2>
          <p className="mt-3 text-text-mid text-lg max-w-2xl mx-auto">
            Most productivity apps help you collect ideas. IdeaTamer helps you
            finish them. Here&apos;s what makes it different.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REASONS.map((reason) => (
            <Link
              key={reason.title}
              href={reason.href}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-hero-blue-lighter transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-hero-blue-bg text-hero-blue flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-hero-blue transition-colors">
                {reason.title}
              </h3>
              <p className="text-text-mid text-sm leading-relaxed">
                {reason.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog/why-ideatamer"
            className="text-hero-blue font-semibold text-sm hover:underline"
          >
            Read the full story &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
