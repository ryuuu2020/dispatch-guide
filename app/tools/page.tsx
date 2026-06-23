import type { Metadata } from "next";
import Link from "next/link";
import { characters } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best Team Compositions — Tier List & Pairings | Dispatch Guide",
  description:
    "The ultimate Dispatch team composition tier list: S-Tier duos, best 3-hero teams, worst pairings to avoid, and role-based team building for every mission type.",
};

interface TeamComp {
  tier: "S" | "A" | "B";
  heroes: string[];
  name: string;
  description: string;
  bestFor: string;
}

const teamComps: TeamComp[] = [
  {
    tier: "S",
    heroes: ["Malevola", "Sonar"],
    name: "Best Duo Synergy",
    description:
      "The strongest 2-hero combination in the game. Malevola handles combat and dialogue, Sonar provides intel and puzzle-solving. Their shared story beats and complementary stats make every mission smoother. Mega Bat Sonar covers combat when Malevola needs support.",
    bestFor: "All mission types — this duo has no weaknesses",
  },
  {
    tier: "S",
    heroes: ["Phenomaman", "Flambae", "Malevola"],
    name: "Classic MMO Trio",
    description:
      "The tank-DPS-flex trifecta. Phenomaman absorbs damage, Flambae unleashes firepower, and Malevola fills any gap — social encounters, secondary damage, or puzzle support. This trio can handle literally every mission in the game.",
    bestFor: "Boss fights, defense missions, any high-difficulty content",
  },
  {
    tier: "A",
    heroes: ["Blonde Blazer", "Invisigal"],
    name: "Flex + Stealth",
    description:
      "Blonde Blazer covers Invisigal's social and endurance weaknesses while Invisigal handles speed and flanking takedowns. Strong for missions that require both combat flexibility and stealth specialization.",
    bestFor: "Infiltration + extraction missions, time-sensitive objectives",
  },
  {
    tier: "A",
    heroes: ["Flambae", "Prism", "Blonde Blazer"],
    name: "Ranged Superiority",
    description:
      "Prism and Blonde Blazer provide ranged pressure and support while Flambae dives in for kills. Excellent coverage for combat-heavy episodes. Blonde Blazer acts as a secondary tank/healer.",
    bestFor: "Combat-heavy episodes (3, 8), open-area fights",
  },
  {
    tier: "B",
    heroes: ["Invisigal", "Flambae"],
    name: "Double Glass Cannon",
    description:
      "Insane damage output — but both heroes are fragile. You'll clear enemies fast, but one mistake and both go down. Only recommended if you're confident in your positioning and enemy knowledge.",
    bestFor: "Speed-running combat encounters, experienced players only",
  },
  {
    tier: "B",
    heroes: ["Phenomaman", "Invisigal", "Sonar"],
    name: "Intel & Execute",
    description:
      "Sonar finds targets, Invisigal executes, Phenomaman provides cover. Good for investigation-heavy missions that end in combat. Weak in extended fights if Invisigal goes down.",
    bestFor: "Investigation → combat transitions, Episodes 2, 5",
  },
];

export default function ToolsPage() {
  const tierColors = { S: "#ef4444", A: "#f59e0b", B: "#6b7280" };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        <span className="text-accent">#</span> Best Team Compositions
      </h1>
      <p className="text-text-secondary text-lg mb-8">
        Tier list of proven team combinations. Tested across all 8 episodes and 4 endings.
      </p>

      <div className="space-y-4">
        {teamComps.map((comp, i) => (
          <div key={i} className="p-5 rounded-xl border border-border bg-bg-card">
            <div className="flex items-start gap-4">
              <span
                className="text-lg font-extrabold w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: tierColors[comp.tier] + "20", color: tierColors[comp.tier] }}
              >
                {comp.tier}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-lg mb-1">{comp.name}</h2>
                <div className="flex flex-wrap gap-1 mb-2">
                  {comp.heroes.map((h) => (
                    <Link
                      key={h}
                      href={`/characters/${characters.find((c) => c.name === h)?.slug || ""}`}
                      className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                    >
                      {h}
                    </Link>
                  ))}
                </div>
                <p className="text-sm text-text-secondary mb-1">{comp.description}</p>
                <p className="text-xs text-text-muted">
                  <span className="font-semibold">Best for:</span> {comp.bestFor}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12 p-6 rounded-xl border border-border bg-bg-card">
        <h2 className="text-lg font-bold mb-3">
          <span className="text-accent">#</span> Team Building Principles
        </h2>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li><span className="text-accent">▸</span> Always include at least one damage dealer (Flambae or Invisigal)</li>
          <li><span className="text-accent">▸</span> Tank (Phenomaman) + DPS + Flex is the most reliable 3-hero formula</li>
          <li><span className="text-accent">▸</span> Don&apos;t deploy two glass cannons without a tank — you&apos;ll get wiped</li>
          <li><span className="text-accent">▸</span> Blonde Blazer makes any bad team better — she&apos;s the ultimate flex pick</li>
          <li><span className="text-accent">▸</span> Match your team to the mission type: check episode descriptions before dispatching</li>
        </ul>
      </section>
    </div>
  );
}
