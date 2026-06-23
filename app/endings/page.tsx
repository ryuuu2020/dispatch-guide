import type { Metadata } from "next";
import { endings } from "@/lib/data";

export const metadata: Metadata = {
  title: "All 4 Endings Guide — How to Unlock True Hero, Antihero, Everyman & Secret",
  description:
    "Dispatch endings guide: how to unlock all four endings — True Hero, Antihero, Everyman, and the rare Secret ending. Complete requirements, key choices, and difficulty ratings.",
};

const difficultyColors: Record<string, string> = {
  Easy: "#22c55e",
  Medium: "#f59e0b",
  "Very Hard": "#ef4444",
};

export default function EndingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        All <span className="text-accent">4 Endings</span>
      </h1>
      <p className="text-text-secondary mb-10 max-w-2xl">
        Your choices across all 8 episodes converge in the finale (Synergy). Dispatch has four
        distinct endings, from the uplifting True Hero to the nearly-impossible Secret ending.
        Here&apos;s exactly how to unlock each one.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {endings.map((ending) => (
          <div
            key={ending.id}
            className="p-6 rounded-xl border border-border bg-bg-card flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-bold">{ending.name}</h2>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-mono border whitespace-nowrap"
                style={{
                  borderColor: difficultyColors[ending.difficulty],
                  color: difficultyColors[ending.difficulty],
                  backgroundColor: difficultyColors[ending.difficulty] + "15",
                }}
              >
                {ending.difficulty}
              </span>
            </div>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed text-sm mb-4 flex-1">
              {ending.description}
            </p>

            {/* How to unlock */}
            <div className="p-4 rounded-lg bg-bg-secondary border border-border">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                How to Unlock
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{ending.howToUnlock}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ending priority guide */}
      <div className="mt-12 p-6 rounded-xl border border-accent/20 bg-accent/5">
        <h2 className="font-bold mb-2">
          <span className="text-accent">🎯</span> Recommended Route
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          First playthrough: aim for <strong className="text-text-primary">True Hero</strong> — it&apos;s the most
          narratively satisfying and gives you the best context for subsequent runs. Second
          playthrough: try <strong className="text-text-primary">Antihero</strong> to see the dark side. Third: go
          for the <strong className="text-text-primary">Secret Ending</strong> with a guide — it&apos;s extremely
          difficult without one. <strong className="text-text-primary">Everyman</strong> is worth seeing but not
          essential.
        </p>
      </div>
    </div>
  );
}
