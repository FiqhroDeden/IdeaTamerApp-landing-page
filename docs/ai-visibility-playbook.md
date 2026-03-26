# AI Visibility Playbook

> A practical guide to making your product discoverable by ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews. Based on real implementation that took IdeaTamer from 0/100 AI visibility to indexed across all major AI platforms.

**Created:** March 2026
**Applies to:** Any product with a website (SaaS, mobile app, tool, service)
**Prerequisite:** A live website. No paid tools required.

---

## Table of Contents

1. [How AI Discovery Works](#1-how-ai-discovery-works)
2. [Audit Your Current Visibility](#2-audit-your-current-visibility)
3. [Phase 1: Structured Data Foundation](#3-phase-1-structured-data-foundation)
4. [Phase 2: Content Pages That AI Models Index](#4-phase-2-content-pages-that-ai-models-index)
5. [Phase 3: Landing Page Optimization](#5-phase-3-landing-page-optimization)
6. [Phase 4: Navigation & Internal Linking](#6-phase-4-navigation--internal-linking)
7. [Content Writing Rules for AI](#7-content-writing-rules-for-ai)
8. [Structured Data Reference](#8-structured-data-reference)
9. [Page Templates](#9-page-templates)
10. [Measurement & Iteration](#10-measurement--iteration)
11. [Checklist](#11-checklist)

---

## 1. How AI Discovery Works

AI models (ChatGPT, Claude, Gemini, Perplexity) recommend products based on what they learned during training and what they can retrieve from the web. To be recommended, your product needs to exist in the places AI models look:

### What AI models index (in priority order):

| Source | Impact | What it means for you |
|--------|--------|----------------------|
| **Structured data (JSON-LD)** | Highest | Schema.org markup is directly consumed by AI. FAQPage, SoftwareApplication, Article schemas are heavily weighted. |
| **Semantic HTML** | High | Proper H1→H2→H3 hierarchy, `<article>`, `<time>`, `<table>` elements. AI parses these reliably. |
| **Long-form content** | High | Blog posts, use-case pages, comparison pages with 800+ words. AI models prefer substantive content over marketing copy. |
| **FAQ content** | High | Question-answer pairs (especially with FAQPage schema) are one of the most reliably indexed content types. |
| **Comparison mentions** | High | Mentioning competitors by name ("vs Notion", "alternative to X") directly targets how people ask AI for recommendations. |
| **Backlinks & citations** | Medium | Being mentioned on other sites, forums, directories. Builds authority over time. |
| **Meta descriptions** | Medium | The description in your `<meta>` tag often becomes the AI's summary of your page. |
| **Sitemap** | Low | Ensures crawlers find all your pages. Necessary but not sufficient. |

### What AI models ignore or penalize:

- Client-rendered JavaScript content (use server-side rendering or static generation)
- Content behind authentication or paywalls
- Thin pages with <200 words
- Duplicate content across pages
- Marketing fluff without substance ("revolutionary", "game-changing")
- Pages with no structured data

### The key insight:

**AI models answer questions.** Your content must match the questions people ask. If someone asks "What's the best privacy-focused note app?", your page must:
1. Contain the phrase "privacy-focused note app" naturally
2. Describe your product as a solution to that exact need
3. Have structured data that confirms what your product is
4. Be substantive enough (800+ words) that the AI trusts it

---

## 2. Audit Your Current Visibility

### Step 1: Get a Pendium.ai report (or manually test)

[Pendium.ai](https://pendium.ai) monitors how AI platforms talk about your product. It sends real queries to ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews, then checks if your product is mentioned.

If you don't use Pendium, manually test by asking each AI platform:
- "What are good apps for [your category]?"
- "Best [your category] tools for [your target user]?"
- "Recommend a [key feature] app"
- "[Your product] vs [competitor]"

### Step 2: Identify your target queries

From your report or manual testing, list 8-12 queries where you SHOULD appear but DON'T. Group them by theme:

**Example groupings:**
- Category queries: "best [category] app"
- Feature queries: "app with [unique feature]"
- Persona queries: "[tool] for [target user]"
- Privacy queries: "privacy-focused [category]"
- Comparison queries: "[your product] vs [competitor]"
- Problem queries: "how to [solve problem your product solves]"

### Step 3: Map queries to content gaps

Each query group needs dedicated content. If you're invisible for "privacy-focused productivity app", you need a page that specifically addresses that query.

---

## 3. Phase 1: Structured Data Foundation

Structured data is the single highest-impact change you can make. AI models directly consume JSON-LD schemas.

### Required schemas for every product website:

**1. Primary product schema** (in your root layout, every page gets it):

For software/apps → `SoftwareApplication`
For SaaS → `SoftwareApplication` or `WebApplication`
For physical products → `Product`
For services → `Service`

**2. Organization schema** (root layout):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "email": "hello@yoursite.com",
  "sameAs": ["https://twitter.com/you", "https://producthunt.com/products/you"]
}
```

**3. WebSite schema** (root layout):
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Product",
  "url": "https://yoursite.com",
  "description": "One-sentence description of what your product does.",
  "publisher": { "@type": "Organization", "name": "Your Company" }
}
```

**4. FAQPage schema** (on any page with Q&A content):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Your question here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your answer here."
      }
    }
  ]
}
```

**5. Article schema** (on every content/blog page):
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Page Title",
  "description": "Page description",
  "url": "https://yoursite.com/page",
  "datePublished": "2026-03-26",
  "dateModified": "2026-03-26",
  "author": { "@type": "Organization", "name": "Your Company" }
}
```

**6. BreadcrumbList schema** (on every page):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yoursite.com" },
    { "@type": "ListItem", "position": 2, "name": "Page Name", "item": "https://yoursite.com/page" }
  ]
}
```

### Implementation tip:

Create a centralized `structured-data.ts` (or equivalent) file with helper functions that generate each schema. This keeps your page files clean and ensures consistency.

---

## 4. Phase 2: Content Pages That AI Models Index

This is where most of the AI visibility impact comes from. You need **5 types of content pages**:

### Type 1: Use-Case Pages (highest priority)

**Purpose:** Target persona-specific queries ("best app for indie developers", "tool for creative professionals")

**Template:**
- **Route:** `/use-cases/[persona]`
- **Title:** "[Your Product] for [Persona] — [Key Benefit]"
- **Structure:**
  1. H1: "[Product] for [Persona]"
  2. H2: The Problem (empathy hook — describe their pain in their words)
  3. H2: How [Product] Solves It (walk through your workflow with their examples)
  4. H2: Why Not [Competitor]? (honest, brief comparison)
  5. H2: [Key Differentiator] (privacy, offline, speed, whatever)
  6. H2: FAQ (3-4 persona-specific questions with FAQPage schema)
  7. Internal links to other pages

**How many:** One per target persona (usually 2-3)

**Word count:** 800-1200 words

### Type 2: Comparison Page (highest priority)

**Purpose:** Target "[your product] vs [competitor]" queries. This is critical because comparison queries are exactly how people ask AI for recommendations.

**Template:**
- **Route:** `/compare`
- **Title:** "[Your Product] vs [Competitor A] vs [Competitor B] vs [Competitor C]"
- **Structure:**
  1. H1: The comparison title
  2. H2: Quick Comparison (HTML `<table>` — AI models parse tables extremely well)
  3. H2: [Your Product] section (2-3 paragraphs)
  4. H2: [Competitor A] section (honest, 2 paragraphs)
  5. H2: [Competitor B] section (honest, 2 paragraphs)
  6. H2: Which Is Right for You? (decision guide)
  7. H2: FAQ with schema

**Critical rules:**
- Be honest about competitors. AI models detect and penalize biased comparisons.
- Name competitors explicitly. This is how you show up in "X vs Y" queries.
- Use an actual HTML `<table>` element, not a styled div grid. AI parses `<table>` reliably.

### Type 3: Problem-Solution Blog Posts

**Purpose:** Target problem-oriented queries ("how to organize side project ideas", "why I can't finish projects")

**Template:**
- **Route:** `/blog/[topic]`
- **Title:** "[Problem Statement]: [Your Solution Angle]"
- **Structure:**
  1. H1: Problem-focused title
  2. H2: Define the problem (essay-style, relatable)
  3. H2: Why existing solutions fail (mention competitors by name)
  4. H2: Your approach/method/philosophy
  5. H2: Who this is for (and who it's not for)
  6. Internal links

**How many:** 2-3 covering your core value propositions

### Type 4: Feature/Differentiator Blog Posts

**Purpose:** Target feature-specific queries ("privacy-focused app", "offline-first tool", "gamified productivity")

**Template:**
- **Route:** `/blog/[differentiator]`
- **Title:** "[Differentiator]: [Why It Matters for Your User]"
- **Structure:**
  1. H1: Feature/differentiator-focused title
  2. H2: The industry problem (why most tools get this wrong)
  3. H2: What [differentiator] actually means (define it technically)
  4. H2: How [your product] implements it
  5. H2: Comparison table (your product vs competitors on this dimension)
  6. Internal links

### Type 5: Expanded FAQ/Support Page

**Purpose:** FAQPage schema is one of the most reliably indexed structured data types across all AI platforms.

**Actions:**
- Add 6-10 FAQ entries that directly mirror target search queries
- Each answer should be 2-4 sentences (substantial, not terse)
- Include the FAQPage JSON-LD schema
- Questions should use natural language ("How is [product] different from [competitor]?")

---

## 5. Phase 3: Landing Page Optimization

Your landing page (homepage) also needs optimization, but differently from content pages.

### Add a "Why [Product]?" section

A server-rendered section (not animated/client-side) with 4 cards covering your key differentiators. Each card links to a content page. This:
- Adds keyword-rich content to your most-visited page
- Creates internal links that AI crawlers follow
- Provides structured information AI can extract

### Ensure semantic HTML

- Every section should have an `id` attribute for anchor linking
- Use `<section>`, `<article>`, `<h2>`, `<h3>` — not just `<div>`
- Important text should be in HTML, not rendered in images or animations

### Server-render important content

AI crawlers often don't execute JavaScript well. Sections with critical information (features, pricing, descriptions) should be server components or static HTML, not client-rendered animations.

---

## 6. Phase 4: Navigation & Internal Linking

Internal link structure tells AI crawlers what your site is about and which pages are important.

### Multi-column footer

Your footer should link to EVERY page on your site, organized by category:

```
Product         Use Cases           Resources              Legal
Features        Indie Developers    Why [Product]          Privacy
Compare         Creators            Privacy-First [X]      Accessibility
App Store       [Persona 3]        Support
```

### Navigation bar

Add your highest-value pages to the top nav: Features, Use Cases, Compare, Support.

### Cross-linking between content pages

Every content page should link to 2-3 other content pages. This creates a web of internal links that AI crawlers follow:
- Use-case pages link to comparison page and blog posts
- Blog posts link to use-case pages
- Comparison page links to everything

### Sitemap

Update `sitemap.xml` with all pages. Set priorities:
- Homepage: 1.0
- Comparison page: 0.8
- Use-case pages: 0.8
- Blog posts: 0.7
- Support/legal pages: 0.5

---

## 7. Content Writing Rules for AI

### Do:

- **Use the exact phrases people type into AI.** If the target query is "best privacy-focused note taking app", make sure that exact phrase appears naturally in your content.
- **Write in problem-solution format.** "If you struggle with X, [Product] does Y." AI models weight this pattern heavily.
- **Name competitors explicitly.** "Unlike Notion, [Product] works offline." This is how you appear in comparison queries.
- **Include dates.** Add `<time>` elements. AI models trust recent content more.
- **Be specific, not vague.** "IdeaTamer scores ideas from 1-100 using three sliders" > "IdeaTamer helps you prioritize ideas"
- **Write 800+ words per page.** Thin content (<200 words) is ignored.
- **Be honest about limitations.** "IdeaTamer is not for teams" builds trust with AI models. Biased content gets deprioritized.
- **Answer questions directly.** Start FAQ answers with a clear yes/no/direct answer, then elaborate.

### Don't:

- Don't stuff keywords unnaturally.
- Don't write content only for AI (it must also serve human visitors).
- Don't make unverifiable claims ("the best app ever", "#1 rated").
- Don't duplicate content across pages.
- Don't put important content inside images, SVGs, or Canvas elements.
- Don't rely on client-side JavaScript to render content (use SSR/SSG).

---

## 8. Structured Data Reference

### Quick reference: which schema where

| Page Type | Schemas to Include |
|-----------|-------------------|
| Root layout (all pages) | SoftwareApplication + Organization + WebSite |
| Every page | BreadcrumbList |
| Support/FAQ page | FAQPage |
| Content/blog pages | Article + FAQPage (if has FAQ section) |
| Comparison page | Article + FAQPage |
| Use-case pages | Article + FAQPage |

### Validation

Test your structured data at:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

---

## 9. Page Templates

### Minimum viable content page structure

```
[Breadcrumb navigation with BreadcrumbList schema]

<article>
  <h1>Page Title (includes target keyword)</h1>
  <time datetime="2026-03-26">Published March 2026</time>

  <p>Introduction paragraph with problem statement and product mention.</p>

  <h2>The Problem</h2>
  <p>Empathy content describing the user's pain point. 2-3 paragraphs.</p>

  <h2>How [Product] Solves This</h2>
  <p>Solution walkthrough. Specific features, not marketing speak. 2-3 paragraphs.</p>

  <h2>Why Not [Competitor]?</h2>
  <p>Honest, brief comparison. 1-2 paragraphs.</p>

  <h2>FAQ</h2>
  [3-4 Q&A pairs with FAQPage schema]

  <h2>Related</h2>
  [Internal links to 2-3 other pages]
</article>

[Article JSON-LD schema]
[FAQPage JSON-LD schema]
```

### Minimum viable comparison table

Use actual HTML `<table>` elements (AI parses them reliably):

```html
<table>
  <thead>
    <tr>
      <th></th>
      <th>Your Product</th>
      <th>Competitor A</th>
      <th>Competitor B</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Best For</td><td>...</td><td>...</td><td>...</td></tr>
    <tr><td>Key Feature</td><td>...</td><td>...</td><td>...</td></tr>
    <tr><td>Privacy</td><td>...</td><td>...</td><td>...</td></tr>
    <tr><td>Offline</td><td>...</td><td>...</td><td>...</td></tr>
    <tr><td>Price</td><td>...</td><td>...</td><td>...</td></tr>
  </tbody>
</table>
```

---

## 10. Measurement & Iteration

### Week 1-2: Deploy and verify

- Deploy all changes
- Verify structured data with Google Rich Results Test
- Manually test each page loads with correct content (view source, not just browser)
- Submit sitemap to Google Search Console

### Week 3-4: Initial measurement

- Re-run Pendium.ai scan (or manually test AI platforms)
- Check Google Search Console for new impressions on target queries
- Note which queries improved and which didn't

### Month 2-3: Iterate

- For queries still at 0: add more content targeting those specific phrases
- For queries that improved: expand with related content
- Add new FAQ entries based on actual questions you receive
- Consider adding more comparison pages for specific competitors

### Ongoing: Content freshness

- Update `dateModified` on pages when you make changes
- Add new FAQ entries quarterly
- Add new use-case pages as you discover new personas
- Update comparison pages when competitors change

---

## 11. Checklist

### Structured Data
- [ ] SoftwareApplication/Product schema in root layout (expanded with url, image, author, featureList, etc.)
- [ ] Organization schema in root layout
- [ ] WebSite schema in root layout
- [ ] BreadcrumbList on every page
- [ ] FAQPage schema on support page
- [ ] Article schema on every content page
- [ ] FAQPage schema on content pages with FAQ sections
- [ ] Validate all schemas with Google Rich Results Test

### Content Pages
- [ ] Comparison page ([Product] vs [Competitor A] vs [Competitor B]) with HTML table
- [ ] Use-case page per target persona (2-3 pages)
- [ ] Problem-solution blog post (1-2 posts)
- [ ] Feature/differentiator blog post (1-2 posts)
- [ ] All pages have 800+ words
- [ ] All pages have proper H1→H2→H3 hierarchy
- [ ] All pages are server-rendered (not client-side JS)
- [ ] All pages include `<time>` elements with dates
- [ ] All pages include `<article>` wrapper

### Support/FAQ
- [ ] 10+ FAQ entries targeting search queries
- [ ] FAQPage JSON-LD schema
- [ ] Questions use natural language matching how people ask AI
- [ ] Answers are 2-4 sentences each (not too short)

### Landing Page
- [ ] "Why [Product]?" section with keyword-rich content
- [ ] Semantic HTML (sections, articles, proper headings)
- [ ] Important content is server-rendered, not client-only JS

### Navigation & Linking
- [ ] Multi-column footer linking to all pages
- [ ] Content pages cross-link to each other (2-3 links per page)
- [ ] Updated sitemap.xml with all pages and priorities
- [ ] robots.txt allows all crawling

### Meta & SEO
- [ ] Every page has unique title and meta description
- [ ] Title includes target keyword
- [ ] Description is 1-2 sentences describing the page content
- [ ] OG tags set for social sharing
- [ ] Canonical URLs on all pages

---

## Summary

The AI visibility formula is simple:

**Structured data** (tells AI what you are) + **Content pages** (tells AI when to recommend you) + **Internal linking** (tells AI how your pages relate) + **Honest, specific writing** (builds AI trust) = **AI discoverability**

Most products are invisible to AI because they have a single landing page with no structured data and no content targeting the questions people ask. Adding 5-8 content pages with proper schemas can take you from 0/100 to meaningful presence across all major AI platforms.

The work is front-loaded: once your pages are indexed, they continue generating visibility with minimal maintenance. Update quarterly, add new FAQs as you get real user questions, and expand content as you discover new target queries.
