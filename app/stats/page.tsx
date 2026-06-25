import type { Metadata } from "next";
import { statsInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stats Guide — Combat, Intellect, Charisma, Mobility & Vigor Explained",
  description:
    "Complete Dispatch stats guide: understand the 5 core stats (Combat, Intellect, Charisma, Mobility, Vigor), how they affect missions, and which heroes excel at each.",
};

const statColors: Record<string, string> = {
  combat: "#ef4444",
  intellect: "#3b82f6",
  charisma: "#f59e0b",
  mobility: "#22c55e",
  vigor: "#a855f7",
};

export default function StatsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        <span className="text-accent">5 Core</span> Stats
      </h1>
      <p className="text-text-secondary mb-10 max-w-2xl">
        Every hero in Dispatch has five core stats, rated 1-5 stars. These determine success in
        different mission types. Understanding the stat system is essential for making smart dispatch
        decisions — sending a low-Charisma hero to a negotiation is a recipe for disaster.
      </p>

      {/* FAQ */}
      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4"><span className="text-accent">#</span> FAQ</h2>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">What stats matter most in Dispatch?</summary>
          <p className="mt-2 text-sm text-text-secondary">Combat and Mobility are the two most impactful stats. Combat determines mission success in fight encounters, while Mobility enables stealth and scouting. Charisma is critical for negotiation dispatches.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">How do star ratings work for hero stats?</summary>
          <p className="mt-2 text-sm text-text-secondary">Each hero has 5 stats rated 1-5 stars: Combat, Intellect, Charisma, Mobility, and Vigor. Higher star ratings mean better performance on related dispatch missions. A 1-star stat will almost certainly fail a relevant mission.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">Can I improve a hero&apos;s stats?</summary>
          <p className="mt-2 text-sm text-text-secondary">Base stats are fixed, but you can improve performance through team synergies, good team pairings, and by selecting heroes with complementary stat spreads. Some storyline choices grant temporary stat boosts.</p>
        </details>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {statsInfo.map((stat) => (
          <div
            key={stat.key}
            className="p-6 rounded-xl border border-border bg-bg-card"
            style={{ borderLeftWidth: "4px", borderLeftColor: statColors[stat.key] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{stat.icon}</span>
              <h2 className="text-xl font-bold">{stat.label}</h2>
            </div>
            <p className="text-text-secondary leading-relaxed text-sm">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Hero stat comparison table */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-accent">#</span> Hero Stat Comparison
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-card">
                <th className="text-left p-4 font-semibold">Hero</th>
                <th className="p-3 text-center font-semibold">
                  <span className="text-[#ef4444]">⚔ Combat</span>
                </th>
                <th className="p-3 text-center font-semibold">
                  <span className="text-[#3b82f6]">🧠 Intellect</span>
                </th>
                <th className="p-3 text-center font-semibold">
                  <span className="text-[#f59e0b]">🗣 Charisma</span>
                </th>
                <th className="p-3 text-center font-semibold">
                  <span className="text-[#22c55e]">🏃 Mobility</span>
                </th>
                <th className="p-3 text-center font-semibold">
                  <span className="text-[#a855f7]">🛡 Vigor</span>
                </th>
                <th className="p-3 text-center font-semibold">Avg</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Invisigal", s: [4, 3, 2, 5, 2] },
                { name: "Flambae", s: [5, 2, 2, 4, 3] },
                { name: "Malevola", s: [4, 3, 4, 3, 3] },
                { name: "Sonar", s: [3, 4, 4, 3, 3] },
                { name: "Blonde Blazer", s: [4, 4, 4, 4, 4] },
                { name: "Phenomaman", s: [2, 4, 3, 4, 5] },
              ].map((hero) => {
                const avg = hero.s.reduce((a, b) => a + b, 0) / 5;
                return (
                  <tr key={hero.name} className="border-b border-border hover:bg-bg-card-hover transition-colors">
                    <td className="p-4 font-semibold">{hero.name}</td>
                    {hero.s.map((val, i) => (
                      <td key={i} className="p-3 text-center font-mono">
                        {"★".repeat(val)}
                        <span className="text-text-muted">{"☆".repeat(5 - val)}</span>
                      </td>
                    ))}
                    <td className="p-3 text-center font-mono text-accent font-bold">{avg.toFixed(1)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
