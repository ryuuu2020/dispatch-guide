import type { Metadata } from "next";
import { characters } from "@/lib/data";
import CharacterCard from "@/components/CharacterCard";

export const metadata: Metadata = {
  title: "Z-Team Characters — All 6 Heroes Stats & Builds",
  description:
    "Complete Dispatch character guide: Invisigal, Flambae, Malevola, Sonar, Blonde Blazer, Phenomaman. Stats, builds, best pairings for every Z-Team hero.",
};

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        Z-Team <span className="text-accent">Heroes</span>
      </h1>
      <p className="text-text-secondary mb-8 max-w-2xl">
        Six misfit superheroes, one sardine-can base. Every hero has unique stats, special
        abilities, and best-pairing synergies. Choose your dispatches wisely — deploy the wrong hero
        and someone might not come back.
      </p>

      {/* FAQ */}
      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4"><span className="text-accent">#</span> FAQ</h2>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">Who is the best character in Dispatch?</summary>
          <p className="mt-2 text-sm text-text-secondary">There is no single best character — each hero excels at different mission types. Invisigal is the best all-rounder with 100 Mobility. Match heroes to dispatch requirements: Combat missions need high Attack, stealth missions need Mobility, and social missions need Charm.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">How do you unlock characters in Dispatch?</summary>
          <p className="mt-2 text-sm text-text-secondary">All 6 main Z-Team heroes are available from the start. Supporting characters like Coupé and Golem are unlocked through story progression and completing specific dispatch missions.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">What stats matter most for Dispatch heroes?</summary>
          <p className="mt-2 text-sm text-text-secondary">Attack and Mobility are the two most important stats for combat missions. Charm matters for social encounters. Tech and Strength are situational. Check each character&#39;s stat spread before dispatching them on missions.</p>
        </details>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {characters.map((c) => (
          <CharacterCard key={c.slug} character={c} />
        ))}
      </div>

      {/* Minor Z-Team members */}
      <section className="mt-16">
        <h2 className="text-xl font-bold mb-4">
          <span className="text-accent">#</span> Supporting Z-Team Members
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {["Coupé", "Golem", "Prism", "Punch Up", "Waterboy"].map((name) => (
            <div key={name} className="p-3 rounded-lg border border-border bg-bg-card text-center text-sm text-text-secondary">
              {name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
