import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { generateArticleSchema, generateFAQSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/compare`;
const DATE_PUBLISHED = "2026-03-26";
const DATE_MODIFIED = "2026-03-26";

const faqs = [
  {
    question: "Can I use IdeaTamer alongside Notion?",
    answer:
      "Absolutely. Many users keep Notion for team collaboration and project documentation while using IdeaTamer as their personal idea pipeline. IdeaTamer handles the early stage — capturing raw ideas, scoring them, and deciding which one to pursue next. Once you activate a quest and start building, you can use Notion or any other tool for the detailed project work.",
  },
  {
    question: "Is IdeaTamer a replacement for a to-do app?",
    answer:
      "No. IdeaTamer is not a task manager. It is an idea management and focus tool. It helps you decide which idea to work on and keeps you focused on one quest at a time. For daily tasks within that quest, you can use any to-do app you like. IdeaTamer sits upstream of your task manager — it answers the question 'what should I be working on?' rather than 'what do I need to do today?'",
  },
  {
    question: "Why doesn't IdeaTamer have cloud sync?",
    answer:
      "By design. Cloud sync would require servers, accounts, and data collection — all things IdeaTamer deliberately avoids. Your ideas stay on your device, which means zero privacy risk, zero subscription fees for server costs, and zero dependency on an internet connection. The trade-off is that your data lives on one device, but for personal idea management, that is usually exactly what you want.",
  },
  {
    question: "Does IdeaTamer work on iPad or Mac?",
    answer:
      "IdeaTamer is currently available for iPhone running iOS 26 or later. iPad and Mac versions are being considered for the future. Because all data is stored locally on-device, each platform version would maintain its own separate idea library.",
  },
];

export const metadata: Metadata = {
  title: "IdeaTamer vs Notion vs Obsidian vs Apple Notes — Idea Management Compared",
  description:
    "Honest comparison of IdeaTamer with Notion, Obsidian, and Apple Notes for managing ideas and side projects. Find the right tool for your workflow.",
  alternates: { canonical: PAGE_URL },
};

export default function ComparePage() {
  const articleSchema = generateArticleSchema({
    title: "IdeaTamer vs Notion vs Obsidian vs Apple Notes — Idea Management Compared",
    description:
      "Honest comparison of IdeaTamer with Notion, Obsidian, and Apple Notes for managing ideas and side projects. Find the right tool for your workflow.",
    url: PAGE_URL,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-5">
        <Breadcrumbs crumbs={[{ name: "Compare", href: "/compare" }]} />

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-3">
          IdeaTamer vs Notion vs Obsidian vs Apple Notes
        </h1>
        <time dateTime={DATE_PUBLISHED} className="block text-text-light text-sm mb-10">
          Published March 26, 2026
        </time>

        <section className="space-y-10">
          {/* --- Quick Comparison Table --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto -mx-5 px-5">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="bg-surface text-text-primary font-semibold border border-gray-200 px-4 py-3 text-left">
                      &nbsp;
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
                  {[
                    ["Best For", "Shipping ideas", "Team workspaces", "Knowledge management", "Quick capture"],
                    ["Idea Scoring", "Yes (1\u2013100)", "No", "No", "No"],
                    ["Single-Quest Focus", "Yes", "No", "No", "No"],
                    ["Gamification", "XP, Levels, Duels", "No", "No", "No"],
                    ["Weekly Self-Competition", "Yes (Weekly Duel)", "No", "No", "No"],
                    ["Privacy", "Zero data collection", "Cloud-based", "Local (optional sync)", "iCloud sync"],
                    ["Offline", "100%", "No", "Yes", "Yes"],
                    ["Account Required", "No", "Yes", "Optional", "Apple ID"],
                    ["Price", "Free to download", "Free + paid plans", "Free + paid plans", "Free"],
                    ["Platform", "iOS", "All platforms", "All platforms", "Apple only"],
                    ["Complexity", "Simple, focused", "Complex, flexible", "Moderate", "Simple"],
                  ].map(([label, ideatamer, notion, obsidian, apple]) => (
                    <tr key={label}>
                      <td className="border border-gray-200 px-4 py-3 text-text-mid font-medium">
                        {label}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-text-mid bg-hero-blue-bg">
                        {ideatamer}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-text-mid">{notion}</td>
                      <td className="border border-gray-200 px-4 py-3 text-text-mid">{obsidian}</td>
                      <td className="border border-gray-200 px-4 py-3 text-text-mid">{apple}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* --- IdeaTamer --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              IdeaTamer: Best for Shipping Ideas, Not Storing Them
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              IdeaTamer is purpose-built for people who have too many ideas and struggle to finish
              any of them. It is not a general-purpose note-taking app or a team collaboration
              platform. It is a focused system designed around a single workflow: Score your ideas,
              pick the best one, and ship it before moving on to the next.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              Every idea you capture gets rated on three dimensions &mdash; Impact, Effort, and
              Alignment &mdash; producing a score from 1 to 100. Your highest-scored idea becomes
              your active Quest, and IdeaTamer keeps you locked onto that single quest until you
              complete it. Along the way, you earn XP for every milestone you hit, level up through
              ranks from Spark to Legend, and compete against your own performance from the previous
              week in the Weekly Duel.
            </p>
            <p className="text-text-mid leading-relaxed">
              The app is 100% offline with zero data collection. No accounts, no cloud, no tracking.
              Your ideas live on your device and nowhere else. IdeaTamer is free to download on the
              App Store and works without an internet connection, ever. If you want a deeper look at
              the privacy architecture, read our{" "}
              <Link
                href="/blog/privacy-first-productivity"
                className="text-hero-blue hover:underline"
              >
                privacy-first productivity guide
              </Link>
              .
            </p>
          </div>

          {/* --- Notion --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Notion: Best for Teams and Complex Workflows
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Notion is an exceptional tool for teams that need a flexible, all-in-one workspace.
              Its database system, rich templates, and real-time collaboration features make it ideal
              for project management, documentation, wikis, and shared knowledge bases. If you are
              managing a team of five or fifty, Notion is hard to beat.
            </p>
            <p className="text-text-mid leading-relaxed">
              Where Notion falls short is in personal idea execution. Its flexibility is also its
              weakness for solo makers: you can spend hours designing the perfect dashboard, tweaking
              database properties, and building elaborate templates &mdash; all without actually
              making progress on the idea itself. Notion is optimized for organizing information, not
              for forcing you to choose one thing and finish it. It also requires an account, stores
              all data in the cloud, and includes analytics tracking, which makes it a poor choice if
              privacy is a priority.
            </p>
          </div>

          {/* --- Obsidian --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Obsidian: Best for Knowledge Management
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Obsidian excels at building a personal knowledge base. Its bidirectional linking, graph
              view, and plugin ecosystem make it one of the best tools for connecting thoughts,
              building a second brain, and managing research. If your primary goal is to capture
              knowledge and discover relationships between ideas over time, Obsidian is a strong
              choice.
            </p>
            <p className="text-text-mid leading-relaxed">
              However, Obsidian is a knowledge management tool, not an idea execution tool. It helps
              you link and organize thoughts, but it does not help you decide which idea to pursue
              next or keep you focused on finishing it. There is no scoring system, no single-quest
              focus, and no gamification to maintain momentum. Obsidian stores data locally by
              default, which is great for privacy, though its optional sync service and some plugins
              do introduce network connections.
            </p>
          </div>

          {/* --- Apple Notes --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Apple Notes: Best for Quick Capture
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              Apple Notes is the simplest option on this list. It comes pre-installed on every Apple
              device, syncs seamlessly via iCloud, and is completely free. For quick capture &mdash;
              jotting down a thought, saving a link, sketching a rough diagram &mdash; it is hard to
              beat.
            </p>
            <p className="text-text-mid leading-relaxed">
              The limitation is that Apple Notes has no system for prioritization, scoring, or
              completion tracking. Ideas go in and stay in, with no mechanism to surface the best
              ones or push you toward finishing them. It is a notepad, not a productivity system.
              Notes also syncs to iCloud by default, which means your data is stored on Apple&rsquo;s
              servers even if you are not sharing it with anyone.
            </p>
          </div>

          {/* --- Which Tool Is Right for You? --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              Which Tool Is Right for You?
            </h2>
            <p className="text-text-mid leading-relaxed mb-4">
              The right tool depends entirely on what problem you are trying to solve. Here is a
              simple decision guide:
            </p>
            <ul className="space-y-3 text-text-mid leading-relaxed">
              <li>
                <strong className="text-text-primary">Choose IdeaTamer</strong> if you have too many
                ideas and want to finish them one at a time. It is built for makers who need a system
                to score, prioritize, and ship &mdash; not just store.
              </li>
              <li>
                <strong className="text-text-primary">Choose Notion</strong> if you need a flexible
                workspace for your team. It is the best option for collaborative project management
                and documentation.
              </li>
              <li>
                <strong className="text-text-primary">Choose Obsidian</strong> if you want to build
                a personal knowledge base. It is ideal for researchers, writers, and anyone who wants
                to connect ideas across a large corpus of notes.
              </li>
              <li>
                <strong className="text-text-primary">Choose Apple Notes</strong> if you just need
                quick, simple notes with zero setup. It is the fastest path from thought to text on
                any Apple device.
              </li>
            </ul>
            <p className="text-text-mid leading-relaxed mt-4">
              Many people use more than one of these tools. IdeaTamer works well as the
              &ldquo;front end&rdquo; of your creative process &mdash; the place where raw ideas get
              captured, evaluated, and turned into focused quests &mdash; while Notion, Obsidian, or
              Apple Notes handle the downstream work.
            </p>
          </div>

          {/* --- FAQs --- */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-semibold text-text-primary mb-2">{faq.question}</dt>
                  <dd className="text-text-mid leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* --- Internal Links --- */}
          <div>
            <p className="text-text-mid leading-relaxed">
              Want to see how IdeaTamer fits specific workflows? Read our guides for{" "}
              <Link
                href="/use-cases/indie-developers"
                className="text-hero-blue hover:underline"
              >
                indie developers
              </Link>{" "}
              and{" "}
              <Link href="/use-cases/creators" className="text-hero-blue hover:underline">
                creators
              </Link>
              . Or learn more about why{" "}
              <Link
                href="/blog/privacy-first-productivity"
                className="text-hero-blue hover:underline"
              >
                privacy-first productivity matters
              </Link>
              .
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
