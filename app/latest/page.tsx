import type { Metadata } from "next";
import { guideUpdates } from "@/lib/data";

export const metadata: Metadata = {
  title: "Latest Updates & Guides — Dispatch Guide",
  description:
    "Stay current with the latest Dispatch guides, tier lists, build deep dives, and platform updates. New content added as the game evolves.",
};

export default function LatestPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        <span className="text-accent">#</span> Latest Updates
      </h1>
      <p className="text-text-secondary text-lg mb-8">
        Recent guides, deep dives, and platform updates for Dispatch.
      </p>

      <div className="space-y-4">
        {guideUpdates.map((update) => (
          <div key={update.slug} id={update.slug} className="p-5 rounded-xl border border-border bg-bg-card scroll-mt-24">
            <div className="text-xs text-text-muted font-mono mb-1">{update.date}</div>
            <h2 className="text-lg font-bold mb-1">{update.title}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{update.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl border border-border bg-bg-card text-center">
        <p className="text-text-muted text-sm">
          More guides coming as Dispatch receives updates and DLC. Check back after each game patch.
        </p>
      </div>
    </div>
  );
}
