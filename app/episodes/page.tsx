import type { Metadata } from "next";
import { episodes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Episode Guide — Complete Walkthrough of All 8 Episodes",
  description:
    "Dispatch episode guide: walkthrough and key decision points for all 8 episodes — from Pivot to Synergy. Spoiler-aware, with critical choices highlighted.",
};

export default function EpisodesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        Episode <span className="text-accent">Guide</span>
      </h1>
      <p className="text-text-secondary mb-10 max-w-2xl">
        Dispatch spans 8 episodes, each with branching paths driven by your dispatch decisions.
        Below is a spoiler-light overview of each episode with key decision points. Your choices
        carry between episodes — there are no do-overs.
      </p>

      {/* FAQ */}
      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4"><span className="text-accent">#</span> FAQ</h2>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">How many episodes are in Dispatch?</summary>
          <p className="mt-2 text-sm text-text-secondary">Dispatch has 8 main episodes: Pivot, Bootstrap, Roadmap, Sprint, Standup, All-Hands, Retro, and Synergy. Each contains 3-5 dispatch missions with branching choices that affect the ending.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">What is the hardest episode in Dispatch?</summary>
          <p className="mt-2 text-sm text-text-secondary">Retro (Episode 7) is widely considered the most difficult, with back-to-back combat dispatches and strict stat requirements. Bring your best-attack heroes (Flambae, Malevola) and keep backup heroes healthy.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">Do my choices in one episode affect later episodes?</summary>
          <p className="mt-2 text-sm text-text-secondary">Yes, all choices carry forward. Hero injuries, relationship status with characters, and key story decisions made in earlier episodes directly impact available dispatches and endings in later chapters.</p>
        </details>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-8">
          {episodes.map((ep, idx) => (
            <div key={ep.id} className="relative flex gap-6">
              {/* Episode number dot */}
              <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full border-2 border-accent bg-bg-primary items-center justify-center z-10 relative">
                <span className="font-bold text-accent">{ep.id}</span>
              </div>

              {/* Card */}
              <div className="flex-1 p-6 rounded-xl border border-border bg-bg-card hover:border-accent/30 transition-all">
                <div className="flex items-baseline gap-3 flex-wrap mb-3">
                  <span className="sm:hidden inline-flex w-8 h-8 rounded-full border-2 border-accent bg-bg-primary items-center justify-center font-bold text-accent text-sm">
                    {ep.id}
                  </span>
                  <h2 className="text-xl font-bold">{ep.title}</h2>
                  <span className="text-xs text-text-muted font-mono">Ep. {ep.id} of 8</span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-4">{ep.description}</p>

                <div className="space-y-1">
                  {ep.keyPoints.map((kp, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      {kp}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Episode structure note */}
      <div className="mt-12 p-6 rounded-xl border border-accent/20 bg-accent/5">
        <h2 className="font-bold mb-2">
          <span className="text-accent">💡</span> Pro Tip
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Episodes 3 (Turnover) and 6 (Moving Parts) are the hardest difficulty spikes. Make sure
          you&apos;ve built up strong hero synergies before hitting them. Episode 7 (Retrospective)
          is the critical ending gate — choices here lock in which of the four endings you&apos;ll
          qualify for in the finale.
        </p>
      </div>
    </div>
  );
}
