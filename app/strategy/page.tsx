import type { Metadata } from "next";
import Link from "next/link";
import { endings, characters } from "@/lib/data";

export const metadata: Metadata = {
  title: "How to Unlock All Endings — Complete Strategy Guide | Dispatch Guide",
  description:
    "Step-by-step strategy guide for unlocking all 4 Dispatch endings: True Hero, Antihero, Everyman, and the Secret Ending. Includes mission checklists, critical choices, and stat requirements.",
};

export default function StrategyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        <span className="text-accent">#</span> Unlock All Endings
      </h1>
      <p className="text-text-secondary text-lg mb-8">
        Step-by-step strategy for achieving every Dispatch ending. Spoiler-minimal — we tell you
        what choices matter, not the story outcomes.
      </p>

      <div className="space-y-12">
        {endings.map((ending) => (
          <section key={ending.id} className="p-6 rounded-xl border border-border bg-bg-card">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-2 py-1 rounded-full font-mono bg-accent/10 text-accent">
                {ending.difficulty}
              </span>
              <h2 className="text-xl font-bold">{ending.name}</h2>
            </div>
            <p className="text-text-secondary mb-4">{ending.description}</p>
            <div className="p-4 rounded-lg bg-bg-secondary">
              <h3 className="font-semibold text-sm text-accent mb-2">How to Unlock</h3>
              <p className="text-sm text-text-muted leading-relaxed">{ending.howToUnlock}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 p-6 rounded-xl border border-border bg-bg-card">
        <h2 className="text-lg font-bold mb-3">
          <span className="text-accent">#</span> Strategy Tips
        </h2>
        <div className="space-y-2 text-sm text-text-secondary">
          <p>
            <strong className="text-text-primary">Save often, in multiple slots.</strong> Critical choices
            in Episodes 3, 5, and 7 lock you into ending paths. Having save files at the start of each
            chapter lets you replay endings without restarting the entire game.
          </p>
          <p>
            <strong className="text-text-primary">Team morale is a hidden stat.</strong> How you treat
            Invisigal, your dialogue choices during debriefings, and whether you visit Granny&apos;s Donuts
            all affect the ending you get. True Hero requires consistently supportive choices.
          </p>
          <p>
            <strong className="text-text-primary">The Secret Ending has specific triggers.</strong> Beyond
            perfect mission outcomes, you must exhaust specific dialogue trees with three characters
            and complete an optional objective in Episode 7 that the game never tells you exists.
          </p>
        </div>
      </section>

      <div className="mt-8 text-center">
        <Link href="/endings" className="text-accent hover:underline text-sm">
          View ending summaries →{" "}
        </Link>
      </div>
    </div>
  );
}
