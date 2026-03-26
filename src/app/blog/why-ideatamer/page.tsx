import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { generateArticleSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/blog/why-ideatamer`;
const DATE_PUBLISHED = "2026-03-26";
const DATE_MODIFIED = "2026-03-26";

export const metadata: Metadata = {
  title: "Why IdeaTamer: The Problem with Having Too Many Ideas",
  description:
    "Most productivity apps help you collect ideas. IdeaTamer helps you finish them. Learn why the Score-Focus-Ship method works when Notion and Obsidian don't.",
  alternates: { canonical: PAGE_URL },
};

export default function WhyIdeaTamerPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: "Why IdeaTamer: The Problem with Having Too Many Ideas",
              description:
                "Most productivity apps help you collect ideas. IdeaTamer helps you finish them. Learn why the Score-Focus-Ship method works when Notion and Obsidian don't.",
              url: PAGE_URL,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
            })
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-5">
        <Breadcrumbs
          crumbs={[
            { name: "Blog", href: "/blog" },
            { name: "Why IdeaTamer", href: "/blog/why-ideatamer" },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
          Why IdeaTamer: The Problem with Having Too Many Ideas
        </h1>
        <time dateTime={DATE_PUBLISHED} className="block text-text-light text-sm mb-10">
          Published March 2026
        </time>

        <section className="space-y-10">
          {/* Opening */}
          <p className="text-text-mid leading-relaxed text-lg">
            You do not have a productivity problem. You have a finishing problem. Your notes are
            full of brilliant ideas. Your bookmarks overflow with inspiration. You have started
            more projects than you can count. But how many have you actually shipped? If the
            answer makes you uncomfortable, you are not alone — and you are exactly who IdeaTamer
            was built for.
          </p>

          {/* The Collector's Trap */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              The Collector&apos;s Trap
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              There is a specific kind of person who collects ideas the way others collect vinyl
              records or vintage cameras. Every shower thought gets captured. Every podcast episode
              sparks a new concept. Every walk produces a &quot;what if I built...&quot; note. The
              collection grows, and it feels productive. It feels like progress.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              It is not progress. It is the collector&apos;s trap.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              Capturing an idea produces a small dopamine hit — the excitement of possibility. Your
              brain registers it as accomplishment. You imagined the finished product, felt the
              satisfaction of completion, and moved on. But nothing was actually built. Nothing
              shipped. The idea joins a growing archive of good intentions, sitting alongside dozens
              of others in a notes app that you will never scroll back through.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              The more ideas you collect without executing, the harder it becomes to start any
              single one. Each new idea competes with every existing idea for your attention. The
              backlog becomes overwhelming, and overwhelm leads to paralysis. You end up doing the
              one thing that feels productive without requiring commitment: capturing another idea.
            </p>
            <p className="text-text-mid leading-relaxed">
              Your notes app is a graveyard of good intentions. The question is not how to capture
              more ideas. The question is how to finish the ones that matter.
            </p>
          </div>

          {/* Why Traditional Tools Make It Worse */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Why Traditional Tools Make It Worse
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Most productivity apps are designed to help you organize information. They are
              excellent at that job. But organizing ideas and finishing ideas are fundamentally
              different problems, and the tools that solve one often make the other worse.
            </p>

            {/* Notion */}
            <h3 className="text-lg font-bold text-text-primary mb-2 mt-6">
              Notion: Infinite Flexibility, Zero Focus
            </h3>
            <p className="text-text-mid leading-relaxed mb-4">
              Notion is one of the most powerful productivity tools ever built. It can be a wiki, a
              database, a project board, a document editor, and a habit tracker — sometimes all in
              the same workspace. For teams and structured knowledge management, it is exceptional.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              For personal idea management, that infinite flexibility becomes infinite
              procrastination. You start by creating an &quot;Ideas&quot; database. You add
              properties: status, category, priority, effort estimate. You build filtered views —
              one for high priority, one for quick wins, one by category. You design a template for
              new ideas. You tweak the layout. You add a formula property that calculates a weighted
              score.
            </p>
            <p className="text-text-mid leading-relaxed">
              Three hours later, you have a beautiful system and zero progress on any actual idea.
              Notion lets you build elaborate productivity infrastructure without ever asking the
              hard question: which one of these ideas are you going to commit to finishing right
              now? It organizes. It does not focus.
            </p>

            {/* Obsidian */}
            <h3 className="text-lg font-bold text-text-primary mb-2 mt-6">
              Obsidian: Great for Knowledge, Not for Action
            </h3>
            <p className="text-text-mid leading-relaxed mb-4">
              Obsidian is a phenomenal tool for thinking. Its bidirectional linking, graph view, and
              local-first architecture make it the gold standard for personal knowledge management.
              If you want to connect thoughts, build a second brain, or develop deep understanding
              of a topic, Obsidian is hard to beat.
            </p>
            <p className="text-text-mid leading-relaxed">
              But ideas do not need more connections. They need execution. You can link an app idea
              to your notes on market research, competitor analysis, technical architecture, and
              user personas. You can create a beautiful graph of interconnected thoughts. And you
              can do all of this without writing a single line of code or designing a single screen.
              Obsidian helps you think about ideas. It does not help you ship them.
            </p>

            {/* Apple Notes */}
            <h3 className="text-lg font-bold text-text-primary mb-2 mt-6">
              Apple Notes: Simple But No System
            </h3>
            <p className="text-text-mid leading-relaxed">
              Apple Notes wins on simplicity. It is always there, it syncs seamlessly, and it has
              zero learning curve. For quick capture, it is excellent. But that is where its
              usefulness for idea management ends. A list of ideas in Apple Notes is just a list.
              There is no way to score ideas objectively. There is no mechanism for committing to
              one. There is no progress tracking, no accountability, and no way to know whether you
              are making progress or just adding more items to an ever-growing collection. Apple
              Notes captures ideas beautifully and then abandons them.
            </p>
          </div>

          {/* The Score-Focus-Ship Method */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              The Score-Focus-Ship Method
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              IdeaTamer is built around a single philosophy: ideas are worthless until they ship.
              The app implements this philosophy through three stages that work together to move you
              from ideation to execution.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Score: Replace gut feeling with objectivity.</strong>{" "}
              Every idea gets rated on three dimensions — Impact (how valuable is this if you
              finish it?), Effort (how much time and energy does it require?), and Alignment (how
              well does it match your current skills, interests, and goals?). IdeaTamer calculates a
              composite score from 1 to 100. This transforms a vague sense of &quot;I think this
              one is better&quot; into a concrete, comparable number. You can hold up to 10 unscored
              ideas at a time, which creates gentle pressure to evaluate regularly rather than
              endlessly accumulate.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Focus: Commit to one quest.</strong> Your
              highest-scored idea becomes your active Quest. Only one quest can be active at any
              time. This is the most important constraint in IdeaTamer. It eliminates the constant
              context-switching between projects that kills creative momentum. You break your quest
              into milestones — concrete, completable steps — and work through them sequentially.
              The mastery ring fills as you progress, giving you a clear visual indicator of how
              close you are to shipping.
            </p>
            <p className="text-text-mid leading-relaxed">
              <strong className="text-text-primary">Ship: Finish and celebrate.</strong> When all
              milestones are complete, you ship your quest to the Hall of Fame. This is not just an
              archive — it is a record of accomplishment. Each shipped quest earns significant XP.
              Weekly Duels compare your shipping pace to the previous week. Streaks reward daily
              consistency. The gamification is lightweight but effective: it transforms the abstract
              satisfaction of finishing into concrete, visible progress. Then you activate your next
              quest and repeat the cycle.
            </p>
          </div>

          {/* Choosing a Productivity App for Your Private Ideas */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Choosing a Productivity App for Your Private Ideas
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Your ideas are personal. Some of them might become businesses. Some might become art.
              Some are just experiments you want to try without anyone knowing. They deserve a level
              of privacy that most productivity apps cannot offer.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              Notion stores your data on their servers. Obsidian Sync uses end-to-end encryption
              but still routes through a cloud service. Most to-do apps require an account and sync
              through proprietary infrastructure. Even when these services are trustworthy, you are
              still placing your ideas — your intellectual property, your creative seeds — on
              someone else&apos;s infrastructure.
            </p>
            <p className="text-text-mid leading-relaxed">
              IdeaTamer takes a different approach. All data is stored locally on your device using
              Apple SwiftData. There are no accounts, no servers, no cloud sync, no analytics, no
              third-party SDKs, and no network requests. Your ideas exist on your iPhone and nowhere
              else. This is not a limitation — it is a feature. For people who take their ideas
              seriously, privacy is not optional. Learn more about our approach in{" "}
              <Link href="/blog/privacy-first-productivity" className="text-hero-blue hover:underline">
                Privacy-First Productivity
              </Link>
              .
            </p>
          </div>

          {/* Who IdeaTamer Is For (And Who It's Not For) */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Who IdeaTamer Is For (And Who It&apos;s Not For)
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">IdeaTamer is for you if:</strong> you are an{" "}
              <Link href="/use-cases/indie-developers" className="text-hero-blue hover:underline">
                indie developer
              </Link>{" "}
              with a graveyard of unfinished side projects, a{" "}
              <Link href="/use-cases/creators" className="text-hero-blue hover:underline">
                creator or designer
              </Link>{" "}
              who starts more projects than you finish, a maker who has tried Notion and
              Obsidian and still cannot ship consistently, or anyone who feels overwhelmed by their
              own ideas. You work alone or in very small teams. You value privacy. You want a system
              that forces focus, not just organization.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">IdeaTamer is not for you if:</strong> you need
              team collaboration features, client project management, or a general-purpose
              note-taking app. IdeaTamer does not replace Notion for team wikis, Jira for sprint
              planning, or Obsidian for knowledge management. It operates in a specific niche: solo
              idea focus and execution. If that is not your problem, IdeaTamer is not your solution.
            </p>
            <p className="text-text-mid leading-relaxed">
              We believe in being honest about what the app does and does not do. IdeaTamer does
              one thing — helps you finish your best ideas — and it does that one thing very well.
              If you have been searching for a way to stop collecting and start shipping, give it a
              try. It is free, private, and available on the App Store.
            </p>
          </div>

          {/* Internal Links */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-xl font-bold text-text-primary mb-3">Keep Reading</h2>
            <ul className="space-y-2 text-text-mid leading-relaxed">
              <li>
                <Link href="/use-cases/indie-developers" className="text-hero-blue hover:underline">
                  IdeaTamer for Indie Developers — Stop Juggling Side Projects
                </Link>
              </li>
              <li>
                <Link href="/use-cases/creators" className="text-hero-blue hover:underline">
                  IdeaTamer for Creators &amp; Designers — One Idea, Full Focus
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-hero-blue hover:underline">
                  Compare IdeaTamer to Notion, Obsidian, and Apple Notes
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
