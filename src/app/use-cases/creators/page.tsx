import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { generateArticleSchema, generateFAQSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/use-cases/creators`;
const DATE_PUBLISHED = "2026-03-26";
const DATE_MODIFIED = "2026-03-26";

export const metadata: Metadata = {
  title: "IdeaTamer for Creators & Designers — One Idea, Full Focus",
  description:
    "Simple offline-first app for creative professionals to track progress, manage solo projects, and move away from Notion. Score ideas, focus on one quest.",
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Can I use IdeaTamer for client work?",
    answer:
      "IdeaTamer is designed for personal ideas and solo creative projects rather than client project management. You could use it to prioritize which client projects to pursue or pitch, but for active client work with deadlines and deliverables, a dedicated project management tool would serve you better. IdeaTamer shines when you have too many personal creative ideas competing for your attention.",
  },
  {
    question: "Is IdeaTamer just for tech people?",
    answer:
      "Not at all. While IdeaTamer was built by developers, the Score-Focus-Ship method works for any creative discipline. Writers use it to decide which book idea to pursue. Designers use it to pick between portfolio projects. Musicians use it to choose which album concept to develop. If you have more ideas than time, IdeaTamer is for you — regardless of your medium.",
  },
  {
    question: "How is IdeaTamer different from a to-do app?",
    answer:
      "A to-do app helps you manage tasks within a project. IdeaTamer helps you decide which project deserves your energy in the first place. It operates one level above task management — at the idea-selection layer. You score ideas, commit to one, track progress through milestones, and ship it. Then you pick the next idea. It is a focus system, not a task list.",
  },
  {
    question: "Can I export my ideas or shipped projects?",
    answer:
      "IdeaTamer includes shareable progress cards that you can generate and share via the iOS share sheet. Your Hall of Fame serves as a visual record of everything you have shipped. All data stays on your device — you own it completely.",
  },
];

export default function CreatorsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: "IdeaTamer for Creators & Designers — One Idea, Full Focus",
              description:
                "Simple offline-first app for creative professionals to track progress, manage solo projects, and move away from Notion.",
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
            { name: "Creators & Designers", href: "/use-cases/creators" },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
          IdeaTamer for Creators &amp; Designers
        </h1>
        <time dateTime={DATE_PUBLISHED} className="block text-text-light text-sm mb-10">
          Published March 2026
        </time>

        <section className="space-y-10">
          {/* Intro */}
          <p className="text-text-mid leading-relaxed text-lg">
            Creative work is fueled by ideas. But when you have too many of them — a podcast
            concept, a typeface design, a YouTube channel, a zine, a photography series — the
            energy that should go into making things gets scattered across planning things.
            IdeaTamer is a free iOS app that gives creative professionals a simple system to score
            their ideas, commit to one, and ship it before starting the next.
          </p>

          {/* When Every Project Feels Urgent */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              When Every Project Feels Urgent But None Get Finished
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              You know the feeling. It is 2 AM and you are sketching out a brand identity for a
              project you thought of in the shower. By morning, you have three pages of notes and a
              color palette. By next week, you have moved on to something else entirely. The brand
              identity sits in a folder alongside the unfinished podcast outline, the half-designed
              portfolio, and the app wireframes from two months ago.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              Creative people are not short on ideas. In fact, the problem is the opposite: ideas
              arrive faster than you can execute them, and each new one feels more exciting than the
              work-in-progress. Psychologists call this the novelty bias. The beginning of a
              project is all possibility and no friction. The middle is where the real work lives —
              and that is exactly where most creative projects die.
            </p>
            <p className="text-text-mid leading-relaxed">
              The solution is not to stop having ideas. The solution is to have a system that
              captures your ideas without letting them derail your current work, and that gives you
              an honest framework for deciding which idea to pursue when you are ready.
            </p>
          </div>

          {/* A Simpler Way to Manage Creative Ideas */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              A Simpler Way to Manage Creative Ideas
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              IdeaTamer follows a four-step flow: Capture, Score, Focus, Ship.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Capture</strong> every idea the moment it
              arrives. Designing a custom typeface? Drop it in. Launching a YouTube channel about
              vintage design? Capture it. Building a personal portfolio site? Add it. IdeaTamer
              holds up to 10 unscored ideas at a time — enough to collect freely, but limited
              enough to force you to evaluate regularly.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Score</strong> each idea on three dimensions.
              Impact: how meaningful is this project if you finish it? Effort: how much time and
              energy will it realistically take? Alignment: how well does it fit your skills,
              interests, and goals right now? IdeaTamer combines these into a single score from 1 to
              100. Suddenly, the typeface project that felt equally exciting as the YouTube channel
              has a clear, objective ranking.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong className="text-text-primary">Focus</strong> on your top-scored idea by
              activating it as your Quest. Only one quest can be active at a time. This is the rule
              that changes everything. You break the quest into milestones — research inspiration,
              sketch letterforms, digitize, test at different sizes, publish — and work through them
              one by one.
            </p>
            <p className="text-text-mid leading-relaxed">
              <strong className="text-text-primary">Ship</strong> the quest when all milestones are
              complete. It moves to your Hall of Fame — a permanent record of finished work. Then,
              and only then, you activate the next idea from your backlog.
            </p>
          </div>

          {/* Track Creative Progress Without the Bloat */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Track Creative Progress Without the Bloat
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Most productivity tools are designed for teams, managers, or knowledge workers. They
              come with boards, sprints, databases, dependencies, and workflows that make sense for
              a software team but feel absurd for a designer working on a personal project.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              IdeaTamer strips away the corporate overhead. Your quest has a mastery ring that fills
              as you complete milestones — a simple visual indicator of how close you are to
              shipping. Every milestone you finish earns XP. XP accumulates into levels, from Spark
              through to Legend. Think of XP as creative currency: proof that you are putting in the
              work, not just planning it.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              Weekly Duels compare your output to the previous week across four dimensions: XP
              earned, milestones completed, quests shipped, and streak days. You are only competing
              with yourself. No social feeds, no public leaderboards, no pressure to perform for an
              audience. Just a private measure of creative consistency.
            </p>
            <p className="text-text-mid leading-relaxed">
              Your Hall of Fame becomes a personal portfolio of shipped creative work. Every
              finished project lives there with its history — a visual record that you are someone
              who finishes things.
            </p>
          </div>

          {/* Offline-First for Creative Professionals */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Offline-First for Creative Professionals
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Creative work does not always happen at a desk with a stable internet connection. You
              might be sketching on a flight, brainstorming in a cafe without Wi-Fi, or working from
              a cabin in the mountains. IdeaTamer works everywhere because it works offline. There
              is no cloud dependency, no loading spinners, no &quot;reconnecting&quot; banners.
            </p>
            <p className="text-text-mid leading-relaxed">
              Every idea you capture, every score you assign, every milestone you complete is saved
              instantly to your device using Apple SwiftData. The app launches in under a second,
              works without any network connection, and never asks you to sign in. Your creative
              workflow should not depend on someone else&apos;s servers staying online.
            </p>
          </div>

          {/* Moving Away from Notion? */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Moving Away from Notion?
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              If you are reading this page, there is a good chance you have tried managing your
              creative ideas in Notion. And there is a good chance it did not work the way you
              hoped. Notion is an extraordinary tool for teams, wikis, and structured information.
              But for personal creative idea management, its infinite flexibility becomes a trap.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              You start by building a database. Then you add properties: status, priority, category,
              tags. Then you create filtered views, maybe a Kanban board. Before long, you have
              spent more time designing your system than doing creative work. And the system itself
              offers no opinion on what you should do next. It organizes. It does not focus.
            </p>
            <p className="text-text-mid leading-relaxed">
              IdeaTamer does one thing well: it helps you finish creative projects. No databases to
              configure. No templates to browse. No learning curve. Open the app, capture an idea,
              score it, focus on your quest, and ship. If Notion feels like overkill for your
              personal creative process, IdeaTamer might be exactly what you need. See our{" "}
              <Link href="/compare" className="text-hero-blue hover:underline">
                full comparison
              </Link>{" "}
              for more detail.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              FAQ for Creative Professionals
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
                <Link href="/use-cases/indie-developers" className="text-hero-blue hover:underline">
                  IdeaTamer for Indie Developers
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
