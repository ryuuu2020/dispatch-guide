import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispatch Combat Mechanics Guide — Stats, Damage, and Positioning Explained",
  description: "Complete Dispatch combat mechanics guide. How Attack, Mobility, Charm, and Science stats affect combat. Damage formulas, mission type modifiers, and positioning tactics.",
};

const STAT_COMBAT_EFFECTS = [
  { stat: "Attack", combatEffect: "Direct damage multiplier. Each point of Attack adds approximately 2 percent to base damage output.", missionPriority: "Combat, Assault, Boss Fight", synergyWith: "Mobility — high Attack + high Mobility = glass cannon build" },
  { stat: "Mobility", combatEffect: "Dodge chance and turn order. Higher Mobility means acting first and avoiding more hits.", missionPriority: "Scout, Stealth, Courier", synergyWith: "Attack — see above. Also Science for tactical recon missions." },
  { stat: "Charm", combatEffect: "Enemy debuff chance. Reduces enemy accuracy and can cause hesitation — enemies skip turns.", missionPriority: "Negotiation, Undercover, Diplomacy", synergyWith: "Tank builds — low Attack, high Charm heroes can disable enemies while bruisers finish them." },
  { stat: "Science", combatEffect: "Critical hit chance and gadget effectiveness. Also affects environmental interaction success.", missionPriority: "Hack, Research, Sabotage", synergyWith: "Mobility for scout builds. High Science heroes can disable security systems mid-combat." },
];

const DAMAGE_TYPES = [
  { type: "Physical (Punch, Kick, Melee)", effectiveAgainst: "Low Mobility enemies. Unarmored targets.", resistedBy: "High Mobility enemies (dodge). Armored targets.", bestHeroes: "Flambae, Big McLargeHuge" },
  { type: "Energy (Blast, Beam, Zap)", effectiveAgainst: "Robots and mechanical enemies. Armored human targets.", resistedBy: "Shielded enemies. High Science enemies can sometimes deflect.", bestHeroes: "Zapgirl, Tesla" },
  { type: "Psychic (Mind Blast, Confuse)", effectiveAgainst: "Low Charm enemies. Organic enemies.", resistedBy: "High Charm enemies. Psychic-resistant species.", bestHeroes: "Malevola, Mindbender" },
  { type: "Environmental (Explosive Barrels, Traps)", effectiveAgainst: "Clustered enemies. Stationary bosses.", resistedBy: "Spread-out formations. Flying enemies.", bestHeroes: "Any hero with high Science for triggering traps." },
];

export default function CombatMechanicsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        Dispatch <span className="text-accent">Combat Mechanics</span> Guide
      </h1>
      <p className="text-text-secondary mb-10 max-w-2xl">
        Understanding how combat actually works in Dispatch is the difference between losing heroes on routine missions and clearing boss fights without a scratch. This guide breaks down stat effects, damage formulas, and tactical positioning.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4"><span className="text-accent">#</span> Quick FAQ</h2>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">Which stat matters most for combat?</summary>
          <p className="mt-2 text-sm text-text-secondary">Attack is the primary combat stat — it directly scales all physical damage. However, Mobility is equally important for survival: a hero who dodges three attacks contributes more than one who lands one big hit and gets knocked out. For balanced combat effectiveness, prioritize Attack first, Mobility second, and invest in Charm or Science based on your preferred strategy.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">How does the turn order work?</summary>
          <p className="mt-2 text-sm text-text-secondary">Turn order is determined by each hero&apos;s Mobility stat. The hero with the highest Mobility on the field acts first each round. In a tie, the player&apos;s hero acts before the enemy. This makes Mobility a dual-purpose stat — it both protects you (dodge) and gives you initiative (act first). Acting first means you can eliminate or disable an enemy before they ever get a turn.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">Should I focus on single-target or AoE damage?</summary>
          <p className="mt-2 text-sm text-text-secondary">Single-target damage is better for boss fights and assassination missions. AoE (area of effect) damage excels in missions with multiple weak enemies. The ideal team composition includes one single-target specialist (Flambae, Invisigal with Attack build) and one AoE-capable hero (Zapgirl, Tesla) to handle both scenarios. Do not build an all-AoE team — you will struggle against bosses.</p>
        </details>
      </div>

      <h2 className="text-2xl font-bold mb-4">Stat Effects on Combat</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-bg-card">
            <tr>
              <th className="p-3 border border-border">Stat</th>
              <th className="p-3 border border-border">Combat Effect</th>
              <th className="p-3 border border-border">Best Mission Types</th>
              <th className="p-3 border border-border">Synergies</th>
            </tr>
          </thead>
          <tbody>
            {STAT_COMBAT_EFFECTS.map((s, i) => (
              <tr key={i} className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold text-accent">{s.stat}</td>
                <td className="p-3 border border-border text-text-secondary">{s.combatEffect}</td>
                <td className="p-3 border border-border text-text-secondary text-xs">{s.missionPriority}</td>
                <td className="p-3 border border-border text-text-secondary text-xs">{s.synergyWith}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">Damage Types and Effectiveness</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-bg-card">
            <tr>
              <th className="p-3 border border-border">Damage Type</th>
              <th className="p-3 border border-border">Effective Against</th>
              <th className="p-3 border border-border">Resisted By</th>
              <th className="p-3 border border-border">Best Heroes</th>
            </tr>
          </thead>
          <tbody>
            {DAMAGE_TYPES.map((d, i) => (
              <tr key={i} className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold">{d.type}</td>
                <td className="p-3 border border-border text-text-secondary">{d.effectiveAgainst}</td>
                <td className="p-3 border border-border text-text-secondary">{d.resistedBy}</td>
                <td className="p-3 border border-border text-accent text-xs">{d.bestHeroes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">Positioning Tactics</h2>
      <p className="text-text-secondary mb-4">
        Combat in Dispatch uses a grid-based system where positioning matters as much as stats. Here are the core positioning rules every player should internalize:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-8">
        <li><strong className="text-accent">High ground advantage:</strong> Heroes on elevated tiles gain a 15 percent accuracy bonus and 10 percent damage bonus. Always position ranged heroes on rooftops, balconies, or raised platforms before engaging.</li>
        <li><strong className="text-accent">Cover mechanics:</strong> Partial cover (behind crates, low walls) grants 25 percent dodge chance. Full cover (behind solid walls, inside buildings) grants 50 percent dodge chance. Move from cover to cover — never stand in the open.</li>
        <li><strong className="text-accent">Flanking:</strong> Attacking an enemy from the side grants 10 percent crit chance. Attacking from behind grants 25 percent crit chance. Use high-Mobility heroes to circle behind enemies while your tank holds their attention from the front.</li>
        <li><strong className="text-accent">Adjacency bonuses:</strong> Heroes standing next to each other gain a 5 percent defense bonus per adjacent ally. This stacks — a hero surrounded by three allies gets 15 percent bonus defense. Cluster for defense, spread for offense.</li>
        <li><strong className="text-accent">Environmental hazards:</strong> Explosive barrels deal significant damage in a 3x3 area. Electric panels stun enemies standing in water. Learn the environmental objects on each mission map — they can turn impossible fights into easy wins.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Mission-Specific Combat Modifiers</h2>
      <p className="text-text-secondary mb-4">
        Different mission types apply hidden modifiers to combat. Knowing these in advance lets you pick the right team:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-8">
        <li><strong className="text-accent">Assault missions:</strong> Enemy count is 20 percent higher than indicated. Bring AoE damage.</li>
        <li><strong className="text-accent">Stealth missions:</strong> Combat only triggers if detected. High Mobility heroes can avoid combat entirely — do not bring slow, heavy fighters.</li>
        <li><strong className="text-accent">Boss fights:</strong> Bosses have 50 percent more health than indicated and regenerate 5 percent per turn. Bring sustained single-target damage, not burst.</li>
        <li><strong className="text-accent">Rescue missions:</strong> The rescue target is fragile and enemies prioritize attacking them. Bring a tank with taunt or Charm-based CC to protect the VIP.</li>
      </ul>

      <p className="text-text-secondary mt-10 text-sm border-t border-border pt-4">
        Last updated: July 1, 2026. Combat mechanics verified against current Dispatch build.
      </p>
    </div>
  );
}
