import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { generateArticleSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/blog/privacy-first-productivity`;
const DATE_PUBLISHED = "2026-03-26";
const DATE_MODIFIED = "2026-03-26";

export const metadata: Metadata = {
  title: "Privacy-First Productivity: Why Your Ideas Should Stay on Your Device",
  description:
    "Looking for a privacy-focused note taking app? IdeaTamer is 100% offline with zero data collection. No accounts, no cloud, no tracking. Simple and private.",
  alternates: { canonical: PAGE_URL },
};

export default function PrivacyFirstProductivityPage() {
  const articleSchema = generateArticleSchema({
    title: "Privacy-First Productivity: Why Your Ideas Should Stay on Your Device",
    description:
      "Looking for a privacy-focused note taking app? IdeaTamer is 100% offline with zero data collection. No accounts, no cloud, no tracking. Simple and private.",
    url: PAGE_URL,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-5">
        <Breadcrumbs
          crumbs={[
            { name: "Blog", href: "/blog" },
            { name: "Privacy-First Productivity", href: "/blog/privacy-first-productivity" },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-3">
          Privacy-First Productivity: Why Your Ideas Should Stay on Your Device
        </h1>
        <time dateTime={DATE_PUBLISHED} className="block text-text-light text-sm mb-10">
          Published March 26, 2026
        </time>

        <section className="space-y-10">
          {/* --- The Hidden Cost of Cloud Productivity Apps --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              The Hidden Cost of Cloud Productivity Apps
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Every time you jot down a half-formed startup idea in Notion, draft a personal journal
              entry in Google Docs, or brainstorm side-project names in Evernote, that data leaves
              your device. It travels across the internet, lands on a corporate server, and becomes
              part of a dataset you no longer fully control. Most productivity apps require you to
              create an account, agree to lengthy terms of service, and trust that a company will
              handle your most private creative thoughts responsibly.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              The reality is more complicated than most people realize. Even platforms that market
              themselves as &ldquo;private&rdquo; still store your notes on their infrastructure.
              Notion&rsquo;s own privacy policy states that workspace content is accessible to their
              employees for support and debugging purposes. Google scans your documents to power
              search indexing. Evernote updated its privacy policy in the past to allow employees to
              read your notes for machine-learning training. Your private thoughts are, technically
              speaking, not private at all.
            </p>
            <p className="text-text-mid leading-relaxed">
              For most people, this trade-off feels invisible. Cloud sync is convenient, and breaches
              happen to &ldquo;other people.&rdquo; But if you are a maker, founder, or creative
              professional, your ideas are your most valuable asset. The cost of trusting them to
              someone else&rsquo;s server is real &mdash; even if you never see the bill.
            </p>
          </div>

          {/* --- What "Privacy-First" Actually Means --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              What &ldquo;Privacy-First&rdquo; Actually Means
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              The phrase &ldquo;we take your privacy seriously&rdquo; has become meaningless. Nearly
              every app uses it, and nearly every app still collects data. True privacy-first
              software is defined by what it <em>does not</em> do, not by a paragraph buried in a
              terms-of-service page.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              A genuinely privacy-first application makes <strong className="text-text-primary">zero
              network requests</strong>. It stores data exclusively on the user&rsquo;s device using
              the operating system&rsquo;s native storage framework. It contains no third-party
              analytics SDKs &mdash; no Mixpanel, no Amplitude, no Firebase Analytics. It does not
              require account creation, which means there is no email address, no password, and no
              OAuth token sitting in a database somewhere.
            </p>
            <p className="text-text-mid leading-relaxed">
              This is not a marketing distinction. It is an architectural one. When an app is built
              from the ground up to never touch the network, privacy is not a feature you toggle on.
              It is a structural guarantee baked into every line of code.
            </p>
          </div>

          {/* --- IdeaTamer's Zero-Data Approach --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              IdeaTamer&rsquo;s Zero-Data Approach
            </h2>
            <p className="text-text-mid leading-relaxed mb-6">
              IdeaTamer was designed from the start to be a privacy-focused productivity app that
              collects absolutely nothing. Here is exactly what that means in practice:
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  No Accounts Required
                </h3>
                <p className="text-text-mid leading-relaxed">
                  There is no sign-up screen, no login flow, and no &ldquo;continue with
                  Apple&rdquo; prompt. You download IdeaTamer from the App Store, open it, and start
                  capturing ideas immediately. Your identity is never collected because IdeaTamer
                  does not need it.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">No Cloud Sync</h3>
                <p className="text-text-mid leading-relaxed">
                  Every idea, score, milestone, XP total, and badge is stored locally using
                  Apple&rsquo;s SwiftData framework. Your data lives in a private container on your
                  iPhone and is never uploaded to any server. There is no sync toggle to accidentally
                  leave on, because there is no sync at all.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  No Analytics or Tracking
                </h3>
                <p className="text-text-mid leading-relaxed">
                  IdeaTamer includes zero third-party SDKs. No Firebase. No Mixpanel. No Amplitude.
                  No Segment. No crash-reporting tools that phone home. We have no dashboard showing
                  how many people opened the app today, because we genuinely do not know &mdash; and
                  that is by design.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  No Network Requests
                </h3>
                <p className="text-text-mid leading-relaxed">
                  The app never connects to the internet. Not at launch, not in the background, not
                  to check for updates, not to validate a license. If you put your phone in airplane
                  mode permanently, IdeaTamer would continue working exactly the same way it always
                  has. There is nothing to phone home to.
                </p>
              </div>
            </div>
          </div>

          {/* --- Offline-First Is the New Privacy Standard --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Offline-First Is the New Privacy Standard
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              There is a growing movement toward offline-first software, and it is driven by a
              simple insight: when an app works entirely on your device, privacy becomes a natural
              byproduct rather than a policy to enforce.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              With offline-first apps, there is no data to breach because no data is stored on a
              remote server. There are no servers to hack. There are no terms of service that can
              quietly change to grant broader access to your content. There is no &ldquo;we were
              acquired and your data is now part of a different company&rdquo; email.
            </p>
            <p className="text-text-mid leading-relaxed">
              For personal idea management specifically, offline-first makes even more sense. Your
              ideas do not need to be collaborative in real time. They do not need to be accessible
              from every device on the planet. They need to be private, fast to capture, and easy to
              act on. That is exactly what local-only storage provides.
            </p>
          </div>

          {/* --- Comparison Table --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-4">
              Privacy-Focused Productivity Apps Compared
            </h2>
            <div className="overflow-x-auto -mx-5 px-5">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="bg-surface text-text-primary font-semibold border border-gray-200 px-4 py-3 text-left">
                      Feature
                    </th>
                    <th className="bg-hero-blue-bg text-text-primary font-semibold border border-gray-200 px-4 py-3 text-left">
                      IdeaTamer
                    </th>
                    <th className="bg-surface text-text-primary font-semibold border border-gray-200 px-4 py-3 text-left">
                      Notion
                    </th>
                    <th className="bg-surface text-text-primary font-semibold border border-gray-200 px-4 py-3 text-left">
                      Obsidian
                    </th>
                    <th className="bg-surface text-text-primary font-semibold border border-gray-200 px-4 py-3 text-left">
                      Apple Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid font-medium">Account Required</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid bg-hero-blue-bg">No</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Optional</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Apple ID</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid font-medium">Data Storage</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid bg-hero-blue-bg">On-device only</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Cloud</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Local (optional sync)</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">iCloud</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid font-medium">Analytics / Tracking</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid bg-hero-blue-bg">None</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Optional telemetry</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Apple analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid font-medium">Network Required</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid bg-hero-blue-bg">Never</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Always</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">No (sync optional)</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">No (sync optional)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid font-medium">Third-Party SDKs</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid bg-hero-blue-bg">Zero</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Multiple</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">Few</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">None</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid font-medium">Open Source</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid bg-hero-blue-bg">No</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">No</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">No</td>
                    <td className="border border-gray-200 px-4 py-3 text-text-mid">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* --- Your Ideas Deserve Privacy --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Your Ideas Deserve Privacy
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Your ideas are the raw material of everything you will build next. They deserve the
              same level of protection you would give a trade secret or a personal diary. Not
              because every idea is worth millions, but because the freedom to think without
              surveillance is what makes creative work possible in the first place.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              IdeaTamer exists so you can capture, score, and ship your ideas without ever wondering
              who else might be reading them. No cloud. No accounts. No tracking. Just you and your
              ideas, on your device, under your control.
            </p>
            <p className="text-text-mid leading-relaxed">
              Read our full{" "}
              <Link href="/privacy" className="text-hero-blue hover:underline">
                privacy policy
              </Link>{" "}
              to see exactly how little data we collect (spoiler: it is zero). Or explore how
              IdeaTamer stacks up in our{" "}
              <Link href="/compare" className="text-hero-blue hover:underline">
                comparison with other productivity tools
              </Link>
              . If you are an indie developer looking for a better way to manage side projects, see
              our guide on{" "}
              <Link href="/use-cases/indie-developers" className="text-hero-blue hover:underline">
                IdeaTamer for indie developers
              </Link>
              .
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
