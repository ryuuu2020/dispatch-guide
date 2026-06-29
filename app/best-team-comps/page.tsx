import Link from 'next/link';

export const metadata = {
  title: "Dispatch Best Team Comps — Optimal Hero Combinations & Synergies (2026)",
  description: "Best Dispatch team compositions for every mission type. S-tier to B-tier hero combos, mission type vs team comp matrix, and synergy breakdowns.",
};

const TIER_LIST = [
  { tier: 'S', comp: 'Flambe + Phenomenon Man + Prism + Invisigal', description: 'The ultimate balanced comp. Flambe handles damage, Phenomenon Man tanks, Prism provides support and Charisma, Invisigal covers all stealth and recon needs.', bestFor: 'All-purpose / Late-game' },
  { tier: 'S', comp: 'Flambe + Phenomaman + Coupe + Sonar', description: 'Offense-heavy tech comp. Flambe and Phenomaman dominate combat while Coupe and Sonar handle investigation and detection missions with exceptional synergy.', bestFor: 'Combat + Investigation' },
  { tier: 'A', comp: 'Punchup + Golem + Prism + Water Boy', description: 'Bruiser-centric comp with crowd control. Punchup and Golem form a durable front line, Water Boy controls enemy positioning, Prism keeps everyone healthy.', bestFor: 'Sustained combat missions' },
  { tier: 'A', comp: 'Invisigal + Coupe + Sonar + Prism', description: 'Full recon and support comp. Minimal direct combat capability but unmatched at stealth, investigation, and diplomacy missions.', bestFor: 'Stealth / Diplomacy' },
  { tier: 'A', comp: 'Flambe + Malevola + Prism + Golem', description: 'Magic-damage comp with tank support. Malevola provides spell-based damage and debuffs, Flambe adds physical pressure, Golem and Prism hold the line.', bestFor: 'Mixed mission types' },
  { tier: 'B', comp: 'Punchup + Water Boy + Sonar + Coupe', description: 'Budget balanced comp. Lacks a dedicated tank but compensates with crowd control and investigation utility. Viable for mid-game but struggles in high-stakes missions.', bestFor: 'Low-risk missions' },
  { tier: 'B', comp: 'Invisigal + Flambe + Water Boy + Sonar', description: 'Speed-focused comp. High mobility for rapid mission completion but fragile defensively. Requires careful positioning.', bestFor: 'Time-sensitive missions' },
  { tier: 'B', comp: 'Golem + Phenomaman + Malevola + Prism', description: 'Double-tank turtle comp. Extremely durable but slow and lacks mobility for recon or stealth objectives. Excellent for siege and defense missions.', bestFor: 'Defense missions' },
];

const MISSION_MATRIX = [
  { mission: 'Combat (Frontal Assault)', bestComp: 'Flambe + Phenomaman + Punchup + Prism', keyStats: 'Combat, Vigor, Charisma', notes: 'Maximize damage and survivability' },
  { mission: 'Stealth / Infiltration', bestComp: 'Invisigal + Coupe + Sonar + Prism', keyStats: 'Mobility, Intellect', notes: 'Avoid combat; use stealth routes' },
  { mission: 'Investigation / Tech', bestComp: 'Coupe + Sonar + Malevola + Invisigal', keyStats: 'Intellect, Mobility', notes: 'Intellect heroes solve tech challenges' },
  { mission: 'Diplomacy / Public Relations', bestComp: 'Prism + Flambe + Phenomaman + Sonar', keyStats: 'Charisma, Intellect', notes: 'Dialogue-focused; combat secondary' },
  { mission: 'Rescue / Escort', bestComp: 'Phenomaman + Golem + Flambe + Prism', keyStats: 'Vigor, Combat, Charisma', notes: 'Protect the VIP at all costs' },
  { mission: 'Recon / Surveillance', bestComp: 'Invisigal + Sonar + Coupe + Flambe', keyStats: 'Mobility, Intellect', notes: 'Gather intel; avoid engagement' },
  { mission: 'Boss Fight', bestComp: 'Flambe + Phenomaman + Malevola + Prism', keyStats: 'Combat, Vigor, Intellect', notes: 'Bring your highest-stat heroes' },
  { mission: 'Urban Crisis', bestComp: 'Punchup + Water Boy + Prism + Sonar', keyStats: 'Combat, Charisma, Mobility', notes: 'Crowd control and civilian safety' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-amber-400';
    case 'A': return 'text-blue-400';
    case 'B': return 'text-green-400';
    default: return 'text-ink-faded';
  }
}

export default function BestTeamCompsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Dispatch Best Team Comps — Optimal Hero Combinations &amp; Synergies</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Building the right team composition is the difference between a flawless mission and a catastrophic failure in Dispatch. With 10 heroes, five core stats, and eight distinct mission types, the number of possible team combinations is vast — but only a handful deliver consistently optimal results. This guide ranks the best team compositions across every mission category, breaks down hero synergies, and provides a mission-type matrix so you always know exactly who to send into the field.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Team Synergy Works in Dispatch</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Team synergy in Dispatch is not just about matching stat requirements — it is about how heroes complement each other&apos;s strengths and cover each other&apos;s weaknesses. A well-built team has a clear primary stat focus while maintaining secondary coverage for unexpected mission phases. For example, a Combat-focused team should still include at least one hero with decent Intellect or Charisma, because many combat missions have mid-mission investigation or negotiation phases.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              The game tracks hero relationships and prior mission history, which means heroes who have successfully completed missions together develop better synergy over time. This is communicated through in-game dialogue and subtle stat bonuses during joint deployments. Conversely, pairing heroes with conflicting personalities — or forcing heroes into roles they dislike — degrades team performance.
            </p>
            <p className="text-ink-light leading-relaxed">
              The general rule of thumb: every team should have one primary damage dealer (Combat), one durable front-liner (Vigor), and one utility hero (Intellect or Charisma). The fourth slot is your flex pick — adjust it based on the specific mission type. Scout heroes like Invisigal become mandatory for stealth missions, while Water Boy&apos;s crowd control shines in missions with multiple enemy groups.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Team Comp Tier List (S / A / B)</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              This tier list ranks team compositions based on three criteria: mission success rate, versatility across mission types, and ease of execution. S-tier comps are the gold standard — they perform exceptionally well in most scenarios and are forgiving of minor dispatch errors. A-tier comps are excellent but more situational. B-tier comps are viable but require precise execution or favorable mission conditions.
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Team Composition</th>
                    <th>Synergy Description</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {TIER_LIST.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <span className={`font-display text-lg font-bold ${getTierColor(item.tier)}`}>
                          {item.tier}
                        </span>
                      </td>
                      <td className="font-semibold text-ink text-sm">{item.comp}</td>
                      <td className="text-ink-light text-sm">{item.description}</td>
                      <td className="text-ink-faded text-sm">{item.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mission Type vs Team Comp Matrix</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Not all team comps work for all mission types. This matrix matches each mission category in Dispatch with its optimal team composition, the key stats required, and tactical notes. Use this as a quick reference when you are on the dispatch screen and need to make a fast decision.
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Mission Type</th>
                    <th>Best Team Comp</th>
                    <th>Key Stats</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {MISSION_MATRIX.map((row, i) => (
                    <tr key={i}>
                      <td className="font-semibold text-ink text-sm">{row.mission}</td>
                      <td className="text-ink-light text-sm">{row.bestComp}</td>
                      <td className="text-accent text-sm">{row.keyStats}</td>
                      <td className="text-ink-faded text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Key Hero Pairings &amp; Why They Work</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Certain hero pairings produce results greater than the sum of their parts. The most notable is the Flambe-Phenomenon Man duo — Flambe deals massive damage while Phenomenon Man absorbs enemy attention, creating a classic tank-and-spank dynamic that trivializes most combat encounters. This pairing alone can carry you through the first three episodes with minimal difficulty.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              Invisigal and Coupe form the game&apos;s premier stealth-investigation duo. Invisigal handles the physical infiltration while Coupe manages tech obstacles and electronic security. On missions where you need to bypass locked doors, hack terminals, and avoid detection simultaneously, this pairing is essentially mandatory. The game introduces several missions in Episodes 4 through 6 that are explicitly designed for this duo.
            </p>
            <p className="text-ink-light leading-relaxed">
              Prism is the universal pairing partner — she synergizes well with almost every hero. Her Charisma-based support abilities boost team effectiveness regardless of mission type, making her the closest thing Dispatch has to a &quot;must-pick&quot; hero. Pairing Prism with any three damage-focused heroes creates a sustainable team that can handle extended mission chains without needing to rest between episodes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the single best all-purpose team comp in Dispatch?</h3>
                <p className="text-ink-light leading-relaxed">
                  The Flambe + Phenomenon Man + Prism + Invisigal composition is widely considered the best all-purpose team for most players. It covers all five core stats (Combat from Flambe and Phenomaman, Vigor from Phenomaman, Charisma from Prism, Mobility from Invisigal, and Intellect is the weakest link but still covered adequately by Prism and Invisigal). This comp can handle combat, stealth, diplomacy, and rescue missions with minimal adjustments, making it the ideal choice for players who want one reliable lineup to stick with.
                </p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I always send four heroes on every mission?</h3>
                <p className="text-ink-light leading-relaxed">
                  Most missions in Dispatch allow you to send up to four heroes, and you should almost always use all four slots. Leaving a slot empty means losing a full set of actions per turn, which dramatically increases mission difficulty. The only exception is certain stealth-only missions where fewer heroes means a lower detection risk — but even then, bringing a full four-person team with the right heroes (Invisigal, Coupe, Sonar) is generally better than going undermanned with higher detection risk heroes.
                </p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">How important is hero morale for team composition?</h3>
                <p className="text-ink-light leading-relaxed">
                  Hero morale is a significant factor that many players overlook when building team comps. A hero with low morale suffers a noticeable stat penalty (approximately 15-20% reduction based on community testing) that can turn a theoretically optimal comp into an underperforming one. Always check your heroes&apos; morale on the roster screen before finalizing your dispatch. If a key hero is low on morale, consider substituting them with a slightly less optimal but high-morale alternative — the morale bonus often outweighs the stat difference.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026 — Based on Dispatch patch 1.0 community testing and gameplay analysis.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/characters" className="text-accent hover:underline">Full Character Roster</Link></li>
              <li><Link href="/builds" className="text-accent hover:underline">Best Individual Hero Builds</Link></li>
              <li><Link href="/mission-guide" className="text-accent hover:underline">Mission Guide &amp; Walkthrough</Link></li>
              <li><Link href="/strategy" className="text-accent hover:underline">Advanced Strategy</Link></li>
              <li><Link href="/beginner-guide" className="text-accent hover:underline">Beginner&apos;s Guide</Link></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Team Building Rules</h3>
            <ul className="space-y-2 text-ink-light text-sm">
              <li>Every team needs 1 damage dealer + 1 tank + 1 utility.</li>
              <li>Match your comp to the mission type, not just stats.</li>
              <li>Rotate heroes to maintain high morale across the roster.</li>
              <li>Flambe + Phenomaman is the strongest duo in the game.</li>
              <li>Prism fits into almost every team composition.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
