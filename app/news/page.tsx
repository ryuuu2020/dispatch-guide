import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Updates — Dispatch Guide Latest",
  description:
    "Latest Dispatch game updates, patch notes, character deep dives, and community news. Stay informed about AdHoc Studio's superhero workplace comedy.",
};

interface NewsItem {
  date: string;
  title: string;
  tag: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2026-06-25",
    title: "Dispatch Hits 85% Positive on Steam — Player Reception Analysis After 8 Months",
    tag: "Community",
    excerpt:
      "Eight months after its October 2025 launch, Dispatch has settled into a strong 85% positive rating on Steam with over 3,000 reviews. The superhero workplace comedy from AdHoc Studio (former Telltale developers) continues to draw players with its unique blend of branching narrative and tactical dispatch management. Community sentiment analysis reveals three recurring themes in positive reviews: the writing quality (frequently compared favorably to Telltale's best work), the surprising depth of the dispatch assignment system (players report discovering new team synergies even on third playthroughs), and the voice acting (with standout performances for Invisigal and Malevola). Common criticisms focus on episode length variance — some players wish episodes 4-6 were longer — and the lack of a New Game+ mode. AdHoc Studio has remained quiet on DLC plans but recently confirmed that a technical patch addressing save-file compatibility across platform updates is in development. For existing players, the replay value lies in exploring alternate dispatch choices: sending Blonde Blazer instead of Flambae to the museum heist, for example, unlocks entirely different dialogue trees and mission outcomes.",
  },
  {
    date: "2026-06-23",
    title: "Invisigal Deep Dive — Best Builds & Team Synergies",
    tag: "Guide",
    excerpt:
      "Invisigal is easily the most misunderstood hero on the Z-Team. She looks like a one-trick stealth specialist, but in the right hands she's a mission-carrying powerhouse. Our complete Invisigal guide covers stats breakdown, best ability combos, ideal team pairings (Flambae, Sonar), worst matchups, and recommended dispatch assignments.",
  },
];

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-text-muted hover:text-accent transition-colors">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        News &amp; <span className="text-accent">Updates</span>
      </h1>
      <p className="text-text-secondary mb-10 max-w-2xl">
        Latest Dispatch game updates, character deep dives, and community news.
      </p>

      {/* News Feed */}
      <div className="space-y-8 max-w-3xl">
        {newsItems.map((item, i) => (
          <article key={i} className="p-6 rounded-xl border border-border bg-bg-card">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-text-muted font-mono">{item.date}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold uppercase tracking-wide">
                {item.tag}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-3">{item.title}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{item.excerpt}</p>
          </article>
        ))}
      </div>

      {/* FAQ */}
      <div className="faq-snippets mt-12 max-w-3xl">
        <h2 className="text-xl font-bold mb-4"><span className="text-accent">#</span> FAQ</h2>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">When was Dispatch last updated?</summary>
          <p className="mt-2 text-sm text-text-secondary">Dispatch launched on Xbox Summer Showcase 2025 with all platforms supported. AdHoc Studio continues to release patches and balance updates. Check this page for the latest news and update notes.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">Are there plans for new characters in Dispatch?</summary>
          <p className="mt-2 text-sm text-text-secondary">AdHoc Studio has not announced DLC characters yet, but the game's popularity suggests future content is likely. Subscribe to our news feed for the latest announcements and character reveals.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">Where can I find patch notes for Dispatch?</summary>
          <p className="mt-2 text-sm text-text-secondary">Official patch notes are posted on the AdHoc Studio website and Steam community hub. We summarize key changes and balance adjustments here on the news page with our community-focused analysis.</p>
        </details>
      </div>
    </div>
  );
}
