import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { generateArticleSchema, generateFAQSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/use-cases/indie-developers`;
const DATE_PUBLISHED = "2026-03-26";
const DATE_MODIFIED = "2026-03-26";

export const metadata: Metadata = {
  title: "IdeaTamer for Indie Developers — Stop Juggling Side Projects",
  description:
    "The best iOS app to keep track of app development ideas. Score your side projects, focus on one at a time, and actually ship them. Offline, private.",
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Can I track multiple side projects in IdeaTamer?",
    answer:
      "Yes. You can capture up to 10 unscored ideas at a time and maintain a full backlog of scored ideas. However, only one idea can be your active Quest at any given moment. This is intentional — IdeaTamer forces single-tasking so you actually finish what you start. Once you ship your current quest to the Hall of Fame, your next highest-scored idea is ready to activate.",
  },
  {
    question: "Does IdeaTamer sync across devices?",
    answer:
      "IdeaTamer stores all data locally on your device using Apple SwiftData. There is no cloud sync, no accounts, and no server-side storage. This is a deliberate design choice for privacy. Your ideas never leave your device.",
  },
  {
    question: "What tech stack is IdeaTamer built with?",
    answer:
      "IdeaTamer is a native iOS app built with Swift and SwiftUI. It uses SwiftData for local persistence, zero third-party SDKs, and makes no network requests. It is designed for iOS 26 and later.",
  },
  {
    question: "Is IdeaTamer free?",
    answer:
      "Yes, IdeaTamer is completely free to download and use. There are no in-app purchases, no subscriptions, and no ads. Every feature is available from day one.",
  },
];

export default function IndieDevsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: "IdeaTamer for Indie Developers — Stop Juggling Side Projects",
              description:
                "The best iOS app to keep track of app development ideas. Score your side projects, focus on one at a time, and actually ship them.",
              url: PAGE_URL,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <article className="max-w-3xl mx-auto px-5">
        <Breadcrumbs
          crumbs={[
            { name: "Use Cases", href: "/use-cases" },
            { name: "Indie Developers", href: "/use-cases/indie-developers" },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
          IdeaTamer for Indie Developers
        </h1>
        <time dateTime={DATE_PUBLISHED} className="block text-text-light text-sm mb-10">
          Published March 2026
        </time>

        <section className="space-y-10">
          {/* Intro */}
          <p className="text-text-mid leading-relaxed text-lg">
            You became an indie developer because you love building things. But somewhere between
            the third side project and the seventh &quot;I should build this&quot; note, building
            turned into juggling. IdeaTamer is the free iOS app that helps indie developers stop
            collecting ideas and start shipping them — one focused quest at a time.
          </p>

          {/* The Side Project Graveyard */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              The Side Project Graveyard
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Open your Notes app right now. How many half-baked app ideas are sitting there?
              Twenty? Thirty? Now check your GitHub. How many repos have exactly one commit from
              three months ago? If you are anything like most indie developers, the answer is
              uncomfortable.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              This is the side project graveyard, and almost every developer has one. You had a
              flash of inspiration on a Saturday morning, scaffolded a project, maybe even got
              authentication working. Then Monday came. Then a new idea arrived. Then the original
              project started feeling less exciting than the shiny new concept, and you switched
              tracks. Again.
            </p>
            <p className="text-text-mid leading-relaxed">
              The problem is not a lack of ideas. Indie developers are drowning in ideas. The
              problem is a lack of a system for evaluating which ideas deserve your time, committing
              to one, and following through until it ships. That is exactly what IdeaTamer was
              designed to fix.
            </p>
          </div>

          {/* How IdeaTamer Solves Idea Overload */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              How IdeaTamer Solves Idea Overload
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              IdeaTamer uses a structured method called Score-Focus-Ship. It replaces gut feeling
              with a repeatable system that keeps you honest about what to work on and when to move
              on.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Score every idea objectively.</strong> When a
              new idea hits you — a weather app with a twist, a SaaS tool for freelancers, a CLI
              utility — you drop it into IdeaTamer and rate it on three axes: Impact (how big is
              this if it works?), Effort (how much time and energy to build it?), and Alignment (how
              well does it match your current skills, goals, and interests?). IdeaTamer calculates a
              composite score from 1 to 100. No more guessing which project &quot;feels&quot; more
              promising.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Focus on one quest.</strong> Your highest-scored
              idea becomes your active Quest. Only one quest can be active at a time. This is the
              core constraint that makes IdeaTamer work. You cannot start a new project until you
              either ship the current one or deliberately retire it. Want to build that React Native
              expense tracker? Great — it is your quest. The SaaS dashboard idea can wait in your
              scored backlog until the tracker ships.
            </p>
            <p className="text-text-mid leading-relaxed">
              <strong className="text-text-primary">Ship with milestones.</strong> Break your quest
              into milestones — design mockups, MVP feature set, beta testing, App Store submission.
              Each completed milestone earns XP and moves your mastery ring forward. You always know
              exactly where you stand and what comes next.
            </p>
          </div>

          {/* Gamify Your Shipping Habit */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Gamify Your Shipping Habit
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Shipping software is hard. Motivation fades. IdeaTamer adds lightweight gamification
              to keep you engaged without turning productivity into a theme park.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Weekly Duels</strong> pit you against your own
              performance from the previous week. Four rounds — XP earned, milestones completed,
              quests shipped, and streak days maintained. You are not competing with strangers on a
              leaderboard. You are competing with the version of yourself from seven days ago. Win
              the duel, and you know you are improving.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">XP and Levels</strong> reward every meaningful
              action. Score an idea, complete a milestone, ship a quest — each earns XP. As you
              accumulate experience, you level up through ranks from Spark to Legend. It sounds
              simple, but the dopamine hit of leveling up after a productive week is surprisingly
              effective at keeping you coding on Sunday evenings when Netflix is calling.
            </p>
            <p className="text-text-mid leading-relaxed">
              <strong className="text-text-primary">Streaks and Badges</strong> track your
              consistency. Maintain a daily streak by making progress on your quest. Earn badges for
              milestones like shipping your first idea, hitting a 7-day streak, or reaching Level
              10. Your Hall of Fame becomes a personal portfolio of everything you have shipped — a
              track record of finishing.
            </p>
          </div>

          {/* Why Not Just Use Notion or Apple Notes? */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Why Not Just Use Notion or Apple Notes?
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Fair question. You already have tools. But here is the honest comparison:
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Notion</strong> is incredibly powerful, but that
              power works against you for personal idea management. You can spend an entire weekend
              building the perfect idea-tracking database with linked relations, rollups, and
              filtered views — and never write a line of actual code. Notion gives you infinite
              flexibility and zero focus enforcement. There is no mechanism to say &quot;this is your
              one thing, finish it.&quot;
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Apple Notes</strong> is great for quick capture.
              But a list of ideas in Apple Notes is just a list. There is no scoring, no
              prioritization framework, no progress tracking, and no accountability system. Ideas go
              in and quietly die.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Obsidian</strong> is excellent for building a
              knowledge graph and connecting thoughts. But ideas need execution, not just
              organization. You can link an idea to fifty related notes and still never build it.
            </p>
            <p className="text-text-mid leading-relaxed">
              <strong className="text-text-primary">IdeaTamer</strong> is purpose-built for one
              thing: helping you finish. It is not a note-taking app. It is not a project management
              tool. It is a focus system for people with too many ideas and not enough shipped
              projects. For a deeper comparison, see our{" "}
              <Link href="/compare" className="text-hero-blue hover:underline">
                detailed comparison page
              </Link>
              .
            </p>
          </div>

          {/* Built for Privacy-Conscious Developers */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Built for Privacy-Conscious Developers
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              As a developer, you know what happens behind the scenes of most apps. Analytics SDKs
              phoning home. Telemetry events on every tap. Data sitting in some startup&apos;s
              PostgreSQL instance. Your ideas — some of which might become your next product —
              deserve better than that.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              IdeaTamer collects zero data. Not anonymized data. Not aggregated data. Zero. There
              are no accounts to create, no servers to connect to, no third-party SDKs bundled in
              the binary. The app uses Apple SwiftData for local persistence and makes no network
              requests of any kind. If you ran a network traffic analyzer while using IdeaTamer, you
              would see nothing.
            </p>
            <p className="text-text-mid leading-relaxed">
              This is not a marketing bullet point — it is an architectural decision. Your side
              project ideas are valuable intellectual property. They should live on your device and
              nowhere else. Read our full{" "}
              <Link href="/blog/privacy-first-productivity" className="text-hero-blue hover:underline">
                privacy-first productivity philosophy
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-text-primary font-semibold mb-1">{faq.question}</dt>
                  <dd className="text-text-mid leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Internal Links */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-xl font-bold text-text-primary mb-3">Keep Reading</h2>
            <ul className="space-y-2 text-text-mid leading-relaxed">
              <li>
                <Link href="/compare" className="text-hero-blue hover:underline">
                  Compare IdeaTamer to Notion, Obsidian, and Apple Notes
                </Link>
              </li>
              <li>
                <Link href="/blog/why-ideatamer" className="text-hero-blue hover:underline">
                  Why IdeaTamer: The Problem with Having Too Many Ideas
                </Link>
              </li>
              <li>
                <Link href="/blog/privacy-first-productivity" className="text-hero-blue hover:underline">
                  Privacy-First Productivity: Why Your Ideas Deserve Better
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
