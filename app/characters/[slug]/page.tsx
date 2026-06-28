import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { characters, getCharacterBySlug, getAdjacentCharacters } from "@/lib/data";
import StatBar from "@/components/StatBar";

// ─── Generate static params ──────────────────────────────────

export function generateStaticParams() {
  return characters.map((c) => ({ slug: c.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCharacterBySlug(slug);
  if (!c) return { title: "Not Found" };
  return {
    title: `${c.name} Build & Stats Guide — Dispatch`,
    description: `${c.name} complete hero guide: stats, best build, pairings, and tips. ${c.tagline}. Part of the Dispatch Z-Team roster.`,
  };
}

// ─── Page ──────────────────────────────────────────────────────
export const metadata = {
  title: "Dispatch {character.name} — Complete Guide (2026)",
  description:
    "{character.tagline}",
};


export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) notFound();

  const { prev, next } = getAdjacentCharacters(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-text-muted mb-6">
        <Link href="/characters" className="hover:text-accent transition-colors">
          Characters
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text-primary">{character.name}</span>
      </nav>

      {/* Hero header */}
      <div
        className="p-6 sm:p-8 rounded-2xl border border-border bg-bg-card mb-8"
        style={{ borderLeftWidth: "4px", borderLeftColor: character.color }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">{character.name}</h1>
            <p className="text-text-secondary mt-1 text-lg">{character.tagline}</p>
          </div>
          <span
            className="self-start px-3 py-1 rounded-full text-sm font-mono border whitespace-nowrap"
            style={{ borderColor: character.color, color: character.color, backgroundColor: character.color + "15" }}
          >
            {character.build.includes("Mega Bat") ? "Hybrid Builder" : character.build}
          </span>
        </div>

        <p className="mt-4 text-text-secondary leading-relaxed max-w-3xl">
          {character.description}
        </p>

        {character.special && (
          <div
            className="mt-4 p-3 rounded-lg text-sm border"
            style={{ borderColor: character.color + "40", backgroundColor: character.color + "10" }}
          >
            <span className="font-semibold" style={{ color: character.color }}>
              Special Ability:
            </span>{" "}
            <span className="text-text-secondary">{character.special}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats column */}
        <div className="lg:col-span-1">
          <div className="p-6 rounded-xl border border-border bg-bg-card sticky top-24">
            <h2 className="text-lg font-bold mb-4">
              <span className="text-accent">#</span> Hero Stats
            </h2>
            <div className="space-y-3">
              <StatBar label="Combat" value={character.stats.combat} color="#ef4444" />
              <StatBar label="Intellect" value={character.stats.intellect} color="#3b82f6" />
              <StatBar label="Charisma" value={character.stats.charisma} color="#f59e0b" />
              <StatBar label="Mobility" value={character.stats.mobility} color="#22c55e" />
              <StatBar label="Vigor" value={character.stats.vigor} color="#a855f7" />
            </div>
            <div className="mt-4 pt-4 border-t border-border text-center">
              <span className="text-xs text-text-muted">Average</span>
              <div className="text-2xl font-bold mt-1" style={{ color: character.color }}>
                {(
                  (character.stats.combat +
                    character.stats.intellect +
                    character.stats.charisma +
                    character.stats.mobility +
                    character.stats.vigor) /
                  5
                ).toFixed(1)}{" "}
                ★
              </div>
            </div>
          </div>
        </div>

        {/* Details column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Build guide */}
          <section className="p-6 rounded-xl border border-border bg-bg-card">
            <h2 className="text-lg font-bold mb-3">
              <span className="text-accent">#</span> Best Build
            </h2>
            <div
              className="inline-block px-3 py-1 rounded-full text-sm font-mono mb-3"
              style={{ backgroundColor: character.color + "20", color: character.color }}
            >
              {character.build}
            </div>
            <p className="text-text-secondary leading-relaxed">{character.buildDescription}</p>
          </section>

          {/* Key details */}
          <section className="p-6 rounded-xl border border-border bg-bg-card">
            <h2 className="text-lg font-bold mb-3">
              <span className="text-accent">#</span> Key Details
            </h2>
            <ul className="space-y-2">
              {character.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  {d}
                </li>
              ))}
            </ul>
          </section>

          {/* Pairings */}
          <section className="p-6 rounded-xl border border-border bg-bg-card">
            <h2 className="text-lg font-bold mb-3">
              <span className="text-accent">#</span> Best Pairings
            </h2>
            <div className="space-y-3">
              {character.pairings.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-bg-secondary">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: character.color }} />
                  <div>
                    <span className="font-semibold text-text-primary">{p.partner}</span>
                    <p className="text-sm text-text-muted">{p.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="p-6 rounded-xl border border-border bg-bg-card">
            <h2 className="text-lg font-bold mb-4">
              <span className="text-accent">#</span> FAQ
            </h2>
            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {character.faq.map((f, i) => (
                <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold text-text-primary mb-1" itemProp="name">{f.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-sm text-text-muted leading-relaxed" itemProp="text">{f.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Prev / Next nav */}
      <nav className="mt-12 flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/characters/${prev.slug}`}
            className="flex-1 p-4 rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover transition-colors text-left"
          >
            <span className="text-xs text-text-muted">← Previous</span>
            <div className="font-bold mt-1">{prev.name}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/characters/${next.slug}`}
            className="flex-1 p-4 rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover transition-colors text-right"
          >
            <span className="text-xs text-text-muted">Next →</span>
            <div className="font-bold mt-1">{next.name}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </div>
  );
}
