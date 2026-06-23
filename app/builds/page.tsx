import type { Metadata } from "next";
import Link from "next/link";
import { characters } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best Builds — Optimal Hero Setups for Every Mission Type",
  description:
    "Dispatch best builds guide: optimal stat priorities and team compositions for every Z-Team hero. Combat, mobility, tank, and hybrid builds explained.",
};

export default function BuildsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        Best <span className="text-accent">Builds</span>
      </h1>
      <p className="text-text-secondary mb-10 max-w-2xl">
        Optimize your Z-Team with these recommended builds. Each hero has a clear stat priority that
        maximizes their strengths and covers their weaknesses. Use this as your dispatch cheat sheet.
      </p>

      {/* Build cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {characters.map((c) => {
          const sortedStats = Object.entries(c.stats).sort((a, b) => b[1] - a[1]);
          const topStats = sortedStats.slice(0, 2);
          const weakestStat = sortedStats[sortedStats.length - 1];

          return (
            <Link
              key={c.slug}
              href={`/characters/${c.slug}`}
              className="block p-6 rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover hover:border-accent/30 transition-all"
              style={{ borderTopWidth: "3px", borderTopColor: c.color }}
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-lg font-bold">{c.name}</h2>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-mono border whitespace-nowrap"
                  style={{ borderColor: c.color, color: c.color, backgroundColor: c.color + "15" }}
                >
                  {c.build}
                </span>
              </div>

              {/* Stat highlights */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-muted w-16 shrink-0">Focus:</span>
                  <span className="text-text-primary">
                    {topStats.map(([key, val]) => `${key.charAt(0).toUpperCase() + key.slice(1)} (${val}★)`).join(", ")}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-muted w-16 shrink-0">Weakness:</span>
                  <span className="text-text-secondary">
                    {weakestStat[0].charAt(0).toUpperCase() + weakestStat[0].slice(1)} ({weakestStat[1]}★)
                  </span>
                </div>
              </div>

              <p className="text-xs text-text-muted leading-relaxed">{c.buildDescription}</p>
            </Link>
          );
        })}
      </div>

      {/* Team composition tips */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-accent">#</span> Team Composition Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-border bg-bg-card">
            <h3 className="font-bold mb-2">The Balanced Squad</h3>
            <p className="text-sm text-text-secondary mb-3">
              One well-rounded hero core + two specialists to cover mission types.
            </p>
            <div className="text-sm font-mono text-accent">
              Blonde Blazer + Flambae + Sonar
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-bg-card">
            <h3 className="font-bold mb-2">The Synergy Squad</h3>
            <p className="text-sm text-text-secondary mb-3">
              Exploit the game&apos;s strongest duo pairings for maximum effect.
            </p>
            <div className="text-sm font-mono text-accent">
              Malevola + Sonar + Invisigal
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-bg-card">
            <h3 className="font-bold mb-2">The Heavy Hitters</h3>
            <p className="text-sm text-text-secondary mb-3">
              Pure combat focus — overwhelm enemies before they can act.
            </p>
            <div className="text-sm font-mono text-accent">
              Flambae + Invisigal + Phenomaman
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-bg-card">
            <h3 className="font-bold mb-2">The Diplomatic Squad</h3>
            <p className="text-sm text-text-secondary mb-3">
              Talk your way through anything. Minimal combat required.
            </p>
            <div className="text-sm font-mono text-accent">
              Malevola + Sonar + Blonde Blazer
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
