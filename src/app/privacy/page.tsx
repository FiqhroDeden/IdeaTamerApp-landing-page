import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "IdeaTamer Privacy Policy. We collect zero data. No accounts, no analytics, no tracking.",
};

export default function PrivacyPage() {
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

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-text-light text-sm mb-10">Last updated: March 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Overview</h2>
            <p className="text-text-mid leading-relaxed">
              IdeaTamer operates entirely offline. We do not collect, store,
              transmit, or share any personal data whatsoever. Your ideas are
              yours alone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Data Collection</h2>
            <p className="text-text-mid leading-relaxed">
              <strong className="text-text-primary">None.</strong> IdeaTamer has
              no accounts, no analytics, no tracking SDKs, no advertisements, no
              network requests, and no access to your contacts, location, camera,
              or microphone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Data Storage</h2>
            <p className="text-text-mid leading-relaxed">
              All data — including ideas, scores, milestones, XP, streaks, and
              badges — is stored exclusively on your device using Apple
              SwiftData. Your data never leaves your device.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Data Sharing</h2>
            <p className="text-text-mid leading-relaxed">
              We share nothing because we have no access to your data. There are
              no servers, no cloud sync, and no third-party integrations that
              receive your information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Optional Features</h2>
            <ul className="space-y-3 text-text-mid leading-relaxed">
              <li>
                <strong className="text-text-primary">Local Notifications:</strong>{" "}
                Streak reminders are scheduled locally on your device. No data is
                sent to any server.
              </li>
              <li>
                <strong className="text-text-primary">Share Cards:</strong>{" "}
                Progress images are generated on-device and shared via the
                standard iOS share sheet. We never see or store these images.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Third-Party Services</h2>
            <p className="text-text-mid leading-relaxed">
              Zero. IdeaTamer uses only Apple iOS frameworks. No third-party
              SDKs, analytics tools, or ad networks are included in the app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Children&apos;s Privacy</h2>
            <p className="text-text-mid leading-relaxed">
              IdeaTamer is safe for users of all ages because it collects no data
              whatsoever. There is nothing to protect because nothing is gathered.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">Contact</h2>
            <p className="text-text-mid leading-relaxed">
              If you have any questions about this privacy policy, contact us at{" "}
              <a
                href="mailto:support@ideatamer.app"
                className="text-hero-blue hover:underline"
              >
                support@ideatamer.app
              </a>
              .
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
