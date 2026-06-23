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
