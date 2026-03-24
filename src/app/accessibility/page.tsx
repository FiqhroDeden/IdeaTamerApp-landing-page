import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "IdeaTamer Accessibility. Learn about our commitment to making IdeaTamer usable by everyone.",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-5 prose-custom">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-hero-blue text-sm font-medium mb-8 hover:underline"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
          Accessibility
        </h1>
        <p className="text-text-mid text-lg leading-relaxed mb-12">
          IdeaTamer is committed to making our app usable by everyone.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-5">
              Currently Supported
            </h2>

            <div className="space-y-6">
              <div className="bg-surface rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-text-primary mb-2">Dark Interface</h3>
                <p className="text-text-mid leading-relaxed">
                  IdeaTamer fully supports Dark Mode. The app automatically adapts
                  to your system appearance settings, providing a comfortable
                  experience in any lighting condition.
                </p>
              </div>

              <div className="bg-surface rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-text-primary mb-2">Sufficient Contrast</h3>
                <p className="text-text-mid leading-relaxed">
                  All text and interactive elements meet contrast guidelines for
                  readability. We use carefully chosen color combinations — never
                  pure black on white — to reduce eye strain while maintaining
                  clarity.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Coming Soon
            </h2>
            <p className="text-text-mid leading-relaxed mb-5">
              We are actively working to improve accessibility support in future
              updates:
            </p>
            <ul className="space-y-3 text-text-mid leading-relaxed">
              <li>
                <strong className="text-text-primary">VoiceOver</strong> — Full
                screen reader support with descriptive labels for all interactive
                elements
              </li>
              <li>
                <strong className="text-text-primary">Dynamic Type</strong> —
                Support for larger text sizes across all screens
              </li>
              <li>
                <strong className="text-text-primary">Reduced Motion</strong> —
                Simplified animations for users who prefer reduced motion
              </li>
              <li>
                <strong className="text-text-primary">Voice Control</strong> —
                Full navigation and interaction via voice commands
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Feedback</h2>
            <p className="text-text-mid leading-relaxed">
              If you experience any accessibility issues or have suggestions for
              improvement, please contact us at{" "}
              <a
                href="mailto:ideatamerapp@gmail.com"
                className="text-hero-blue hover:underline"
              >
                ideatamerapp@gmail.com
              </a>
              . Your feedback helps us make IdeaTamer better for everyone.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
