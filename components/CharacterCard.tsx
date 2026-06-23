import Link from "next/link";
import type { Character } from "@/lib/data";

export default function CharacterCard({ character }: { character: Character }) {
  const { slug, name, tagline, stats, color, build } = character;
  const avgStat = Math.round(
    (stats.combat + stats.intellect + stats.charisma + stats.mobility + stats.vigor) / 5
  );

  return (
    <Link
      href={`/characters/${slug}`}
      className="group block p-5 rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover hover:border-accent/40 transition-all duration-200"
      style={{ borderLeftWidth: "3px", borderLeftColor: color }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{name}</h3>
          <p className="text-xs text-text-muted mt-0.5">{tagline}</p>
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-mono"
          style={{ backgroundColor: color + "20", color }}
        >
          {avgStat}★ avg
        </span>
      </div>

      {/* Mini stat bars */}
      <div className="space-y-1.5 mb-3">
        <MiniStat label="COM" value={stats.combat} />
        <MiniStat label="INT" value={stats.intellect} />
        <MiniStat label="CHA" value={stats.charisma} />
        <MiniStat label="MOB" value={stats.mobility} />
        <MiniStat label="VIG" value={stats.vigor} />
      </div>

      {/* Build hint */}
      <p className="text-xs text-text-muted truncate">
        <span className="text-accent">Build:</span> {build}
      </p>
    </Link>
  );
}

function MiniStat({ label, value }: { label: string; value: number }) {
  const bars: boolean[] = [];
  for (let i = 0; i < 5; i++) bars.push(i < value);

  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-text-muted w-7 font-mono">{label}</span>
      <div className="flex gap-0.5 flex-1">
        {bars.map((filled, i) => (
          <div
            key={i}
            className="h-1.5 flex-1 rounded-sm"
            style={{ backgroundColor: filled ? "#6366f1" : "#2a2a3e" }}
          />
        ))}
      </div>
    </div>
  );
}
