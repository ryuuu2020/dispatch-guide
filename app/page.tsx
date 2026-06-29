import Link from 'next/link';
import { guideUpdates } from '@/lib/data';
import Image from 'next/image';

export const metadata = {
  title: "Dispatch Guide — Complete Hero Stats, Builds & Walkthrough (2026)",
  description: "Complete hero stats, best builds, episode walkthroughs, and all endings for AdHoc Studio's superhero workplace comedy.",
};

const HERO_TABLE = [
  { tier: 'S', name: 'Flambe', role: 'Damage Dealer', stat: 'Combat 5★', slug: 'flambe' },
  { tier: 'A', name: 'Coupe', role: 'Investigation Specialist', stat: 'Mobility 4★', slug: 'coupe' },
  { tier: 'A', name: 'Phenomaman', role: 'Tank', stat: 'Vigor 5★', slug: 'phenomaman' },
];

const QUICK_CARDS = [
  { label: 'HEROES', value: '10', href: '/characters', desc: 'Full Z-Team roster with stats, builds, and best pairings' },
  { label: 'CORE STATS', value: '5', href: '/stats', desc: 'Combat, Intellect, Charisma, Mobility & Vigor explained' },
  { label: 'EPISODES', value: '8', href: '/episodes', desc: 'Complete walkthrough and key decision points' },
  { label: 'ENDINGS', value: '3+', href: '/endings', desc: 'Hero, Anti-Hero, and Invisigal fate — key choices that shape your ending' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-[#f0883e]';
    case 'A': return 'text-[#58a6ff]';
    case 'B': return 'text-[#3fb950]';
    default: return 'text-text-secondary';
  }
}


export default function HomePage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-6">

            {/* ===== Hero Banner ===== */}
            <div className="relative w-full h-48 lg:h-64 rounded border border-border-subtle overflow-hidden">
              <Image
                src="/hero.png"
                alt="Dispatch"
                fill
                className="object-cover"
              />
            </div>

            {/* ===== Hero Section ===== */}
            <section>
              <div className="bg-abyss-light border border-border-subtle p-6 lg:p-8">
                <div className="inline-block mb-4 px-3 py-1 border border-warning-orange/30 bg-warning-orange/5">
                  <span className="text-xs font-mono text-warning-orange">
                    Xbox Summer 2026 — Now Available on All Platforms
                  </span>
                </div>
                <h1 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-text-primary leading-tight">
                  Dispatch <span className="text-tactical-blue">Guide</span>
                </h1>
                <p className="mt-4 text-sm text-text-secondary max-w-2xl leading-relaxed">
                  Complete hero stats, best builds, episode walkthroughs, and all four endings for AdHoc
                  Studio&apos;s superhero workplace comedy. Your Z-Team deserves a competent dispatcher.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/characters"
                    className="px-4 py-2 text-sm font-mono font-medium text-abyss bg-tactical-blue hover:bg-tactical-blue-dim transition-colors"
                  >
                    BROWSE HEROES
                  </Link>
                  <Link
                    href="/builds"
                    className="px-4 py-2 text-sm font-mono text-text-secondary border border-border-subtle hover:text-text-primary hover:border-text-muted transition-colors"
                  >
                    BEST BUILDS
                  </Link>
                  <Link
                    href="/episodes"
                    className="px-4 py-2 text-sm font-mono text-text-secondary border border-border-subtle hover:text-text-primary hover:border-text-muted transition-colors"
                  >
                    EPISODE GUIDE
                  </Link>
                  <Link
                    href="/news"
                    className="px-4 py-2 text-sm font-mono text-text-secondary border border-border-subtle hover:text-text-primary hover:border-text-muted transition-colors"
                  >
                    NEWS
                  </Link>
                </div>
              </div>
            </section>

            {/* ===== Section 1: Top Featured Heroes ===== */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                    Featured Heroes
                  </h2>
                  <p className="text-xs font-mono text-text-muted mt-1">
                    Top 3 Z-Team members by combat effectiveness
                  </p>
                </div>
                <a
                  href="/characters"
                  className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
                >
                  VIEW ALL &rarr;
                </a>
              </div>

              {/* Data table */}
              <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-grid-line">
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted w-12">
                        TIER
                      </th>
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        NAME
                      </th>
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        ROLE
                      </th>
                      <th className="text-right py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        BEST STAT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {HERO_TABLE.map((row, i) => (
                      <tr key={i} className="data-row">
                        <td className="py-2.5 px-4">
                          <span className={`font-mono font-bold text-sm ${getTierColor(row.tier)}`}>
                            {row.tier}
                          </span>
                        </td>
                        <td className="py-2.5 px-4">
                          <a
                            href={`/characters/${row.slug}`}
                            className="text-text-primary hover:text-tactical-blue transition-colors"
                          >
                            {row.name}
                          </a>
                        </td>
                        <td className="py-2.5 px-4">
                          <span className="tag">{row.role}</span>
                        </td>
                        <td className="py-2.5 px-4 text-right font-mono tabular-nums text-text-secondary">
                          {row.stat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ===== Section 2: Quick Nav Cards ===== */}
            <section>
              <div className="mb-4">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                  Quick Navigation
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {QUICK_CARDS.map((card, i) => (
                  <a key={i} href={card.href} className="stat-card hover:border-tactical-blue/30 transition-colors">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                      {card.label}
                    </p>
                    <p className="font-mono text-2xl font-semibold text-text-primary tabular-nums">
                      {card.value}
                    </p>
                    <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* ===== Section 3: Latest Guides ===== */}
            <section>
              <div className="mb-4">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                  Latest Guides
                </h2>
              </div>
              <div className="bg-abyss-light border border-border-subtle">
                {guideUpdates.slice(0, 4).map((update, i) => (
                  <div
                    key={update.slug}
                    className={`flex items-center gap-4 px-4 py-3 ${
                      i < Math.min(guideUpdates.length, 4) - 1 ? 'border-b border-grid-line' : ''
                    }`}
                  >
                    <span className="text-xs font-mono text-text-muted w-24 tabular-nums shrink-0">
                      {update.date}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 border shrink-0 text-tactical-blue border-tactical-blue/30 bg-tactical-blue/5">
                      GUIDE
                    </span>
                    <Link
                      href={`/latest#${update.slug}`}
                      className="text-sm text-text-primary hover:text-tactical-blue transition-colors truncate"
                    >
                      {update.title}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-right">
                <Link
                  href="/latest"
                  className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
                >
                  VIEW ALL UPDATES &rarr;
                </Link>
              </div>
            </section>

            {/* ===== Terminal block: Game Info ===== */}
            <div className="terminal-block">
              <p className="text-text-muted mb-1">
                <span className="text-warning-orange">$</span> system.status
              </p>
              <p>game: Dispatch / patch: 1.0</p>
              <p>platforms: PS5, PC, Switch, Xbox Series X|S</p>
              <p>studio: AdHoc Studio (ex-Telltale)</p>
              <p className="cursor-blink">ready</p>
            </div>

            {/* ===== FAQ ===== */}
            <section>
              <div className="mb-4">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-2">
                <details className="bg-abyss-light border border-border-subtle">
                  <summary className="px-4 py-3 font-mono text-sm text-text-secondary hover:text-text-primary cursor-pointer">
                    What is Dispatch?
                  </summary>
                  <p className="px-4 pb-3 text-sm text-text-secondary leading-relaxed">
                    Dispatch is a superhero workplace comedy game by AdHoc Studio, released starting October 2025 on PC and PS5, with Nintendo Switch (January 2026) and Xbox Series X|S (Summer 2026) following. You play as Robert Robertson, the dispatcher for the Z-Team — a group of misfit superheroes — making mission assignments, managing team dynamics, and navigating branching storylines with multiple endings.
                  </p>
                </details>
                <details className="bg-abyss-light border border-border-subtle">
                  <summary className="px-4 py-3 font-mono text-sm text-text-secondary hover:text-text-primary cursor-pointer">
                    How many characters are in Dispatch?
                  </summary>
                  <p className="px-4 pb-3 text-sm text-text-secondary leading-relaxed">
                    There are 10 Z-Team heroes in Dispatch including Invisigal, Flambe, Malevola, Sonar, Coupe, Golem, Prism, Punchup, Water Boy, and Phenomenon Man. Each hero has unique stats and abilities that make them suitable for different mission types.
                  </p>
                </details>
                <details className="bg-abyss-light border border-border-subtle">
                  <summary className="px-4 py-3 font-mono text-sm text-text-secondary hover:text-text-primary cursor-pointer">
                    Is Dispatch free to play?
                  </summary>
                  <p className="px-4 pb-3 text-sm text-text-secondary leading-relaxed">
                    Dispatch is a premium game available on Xbox, PlayStation, Switch, and PC (Steam). It is not free-to-play. Pricing varies by platform and region.
                  </p>
                </details>
                <details className="bg-abyss-light border border-border-subtle">
                  <summary className="px-4 py-3 font-mono text-sm text-text-secondary hover:text-text-primary cursor-pointer">
                    What platforms is Dispatch available on?
                  </summary>
                  <p className="px-4 pb-3 text-sm text-text-secondary leading-relaxed">
                    PS5 & PC (October 2025), Nintendo Switch (January 2026), Xbox Series X|S (Summer 2026). $19.99 Standard Edition | $39.99 Digital Deluxe Edition.
                  </p>
                </details>
              </div>
            </section>

            {/* ===== About the Game ===== */}
            <section>
              <div className="mb-4">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                  About the Game
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="stat-card">
                  <h3 className="font-mono text-sm font-semibold text-text-primary mb-3">
                    What is Dispatch?
                  </h3>
                  <div className="text-sm text-text-secondary space-y-2 leading-relaxed">
                    <p>
                      Dispatch is a narrative-driven superhero workplace comedy from AdHoc Studio, the team
                      of ex-Telltale developers. You play as Robert Robertson, a former tech worker who
                      becomes the dispatcher for the Z-Team — a group of misfit superheroes operating out of
                      a sardine-can-shaped base in Torrance, CA.
                    </p>
                    <p>
                      Your job: assign the right heroes to the right missions. Every choice matters — wrong
                      dispatch decisions lead to injuries, team conflict, and even permanent hero loss. It&apos;s
                      a strategy management game wrapped in a sharp, funny narrative.
                    </p>
                  </div>
                </div>
                <div className="stat-card">
                  <h3 className="font-mono text-sm font-semibold text-text-primary mb-3">
                    Platforms &amp; Pricing
                  </h3>
                  <div className="text-sm text-text-secondary space-y-2 leading-relaxed">
                    <p>Released in stages across all major platforms:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li><strong className="text-text-primary">PS5 & PC</strong> — October 2025</li>
                      <li><strong className="text-text-primary">Nintendo Switch</strong> — January 2026</li>
                      <li><strong className="text-text-primary">Xbox Series X|S</strong> — Summer 2026 (now available!)</li>
                    </ul>
                    <p className="mt-2">
                      $19.99 Standard Edition | $39.99 Digital Deluxe Edition
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
      </div>
  );
}
