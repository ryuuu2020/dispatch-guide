'use client';

import { useState } from 'react';
import Link from 'next/link';
import { guideUpdates } from '@/lib/data';

/* ============================================
   Dispatch Guide — Tactical Command Center
   ============================================ */

const NAV_ITEMS = [
  { label: 'Home', href: '/', active: true },
  { label: 'Characters', href: '/characters' },
  { label: 'Builds', href: '/builds' },
  { label: 'Episodes', href: '/episodes' },
  { label: 'Endings', href: '/endings' },
  { label: 'Stats', href: '/stats' },
  { label: 'News', href: '/news' },
];

const STATS = [
  { label: 'ACTIVE HEROES', value: '6', unit: '' },
  { label: 'PATCH', value: '1.0', unit: '' },
  { label: 'EPISODES', value: '8', unit: '' },
  { label: 'ENDINGS', value: '4', unit: '' },
];

const HERO_TABLE = [
  { tier: 'S', name: 'Flambae', role: 'Damage Dealer', stat: 'Combat 5★', slug: 'flambae' },
  { tier: 'A', name: 'Blonde Blazer', role: 'All-Rounder', stat: 'All 4★', slug: 'blonde-blazer' },
  { tier: 'A', name: 'Phenomaman', role: 'Tank', stat: 'Vigor 5★', slug: 'phenomaman' },
];

const QUICK_CARDS = [
  { label: 'HEROES', value: '6', href: '/characters', desc: 'Full Z-Team roster with stats, builds, and best pairings' },
  { label: 'CORE STATS', value: '5', href: '/stats', desc: 'Combat, Intellect, Charisma, Mobility & Vigor explained' },
  { label: 'EPISODES', value: '8', href: '/episodes', desc: 'Complete walkthrough and key decision points' },
  { label: 'ENDINGS', value: '4', href: '/endings', desc: 'True Hero, Antihero, Everyman & Secret — how to unlock' },
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* ===== Mobile menu overlay ===== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-56 bg-[#0a0e13] border-r border-border-subtle
          transform transition-transform duration-200
          lg:translate-x-0 lg:static lg:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-14 border-b border-border-subtle">
          <div className="w-7 h-7 bg-tactical-blue flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-abyss">CMD</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
            Dispatch
          </span>
        </div>

        {/* Navigation */}
        <nav className="py-4 flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`sidebar-link ${item.active ? 'active' : ''}`}
            >
              <span className="w-1.5 h-1.5 bg-current opacity-40" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-subtle">
          <p className="text-[11px] font-mono text-text-muted">
            Dispatch Guide
          </p>
          <p className="text-[10px] font-mono text-text-muted mt-0.5">
            v1.0
          </p>
        </div>
      </aside>

      {/* ===== Main content ===== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ===== Top Stats Bar ===== */}
        <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6 gap-4 lg:gap-8">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1 p-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
          </button>

          {/* Stats */}
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                {stat.label}
              </span>
              <span className="font-mono text-sm font-semibold text-text-primary tabular-nums">
                {stat.value}
              </span>
            </div>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
            <span className="text-[11px] font-mono text-text-muted">ONLINE</span>
          </div>
        </header>

        {/* ===== Content area with grid bg ===== */}
        <main className="flex-1 bg-tactical-grid p-4 lg:p-6">
          <div className="max-w-6xl mx-auto space-y-6">

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
                    Dispatch is a superhero workplace comedy game by AdHoc Studio, released in Summer 2026 for Xbox and all major platforms. You play as the dispatcher for the Z-Team — 6 misfit superheroes — making mission assignments, managing team dynamics, and navigating branching storylines with 4 different endings.
                  </p>
                </details>
                <details className="bg-abyss-light border border-border-subtle">
                  <summary className="px-4 py-3 font-mono text-sm text-text-secondary hover:text-text-primary cursor-pointer">
                    How many characters are in Dispatch?
                  </summary>
                  <p className="px-4 pb-3 text-sm text-text-secondary leading-relaxed">
                    There are 6 main Z-Team heroes (Invisigal, Flambae, Malevola, Sonar, Blonde Blazer, Phenomaman) and 5 supporting characters (Coupé, Golem, Prism, Punch Up, Waterboy). Each main hero has unique stats, abilities, and story arcs.
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
                    PS5 & PC (October 2025), Nintendo Switch (January 2026), Xbox Series X|S (Summer 2026). $29.99 Standard Edition | $39.99 Digital Deluxe Edition.
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
                      $29.99 Standard Edition | $39.99 Digital Deluxe Edition
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>

        {/* ===== Footer ===== */}
        <footer className="border-t border-border-subtle bg-abyss">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
            {/* Primary footer row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-[11px] font-mono text-text-muted">
                <span>&copy; {new Date().getFullYear()} Dispatch Guide — Unofficial fan guide</span>
                <a href="/about" className="hover:text-text-secondary transition-colors">
                  About
                </a>
                <a href="/privacy" className="hover:text-text-secondary transition-colors">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-text-secondary transition-colors">
                  Terms
                </a>
              </div>

            </div>

            {/* Platforms line */}
            <p className="text-center text-[10px] font-mono text-text-muted mt-3">
              Available on PS5, PC, Nintendo Switch, and Xbox Series X|S.
            </p>

            {/* Inter-site links */}
            <div className="mt-6 pt-4 border-t border-border-subtle">
              <h4 className="text-[10px] font-mono font-semibold text-text-muted mb-3 uppercase tracking-wider">
                More Game Guides
              </h4>
              <div className="flex flex-wrap gap-4 text-[11px] font-mono">
                <a href="https://solarpunk-guide-ecru.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">
                  Solarpunk Guide
                </a>
                <a href="https://menace-guide.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">
                  MENACE Guide
                </a>
                <a href="https://olden-era-guide-tau.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">
                  Olden Era Guide
                </a>
              </div>
            </div>

            {/* Support / Afdian / Amazon row */}
            <div className="mt-6 pt-4 border-t border-border-subtle">
              <h4 className="text-[10px] font-mono font-semibold text-text-muted mb-3 uppercase tracking-wider">
                Support This Guide
              </h4>
              <div className="flex flex-wrap gap-4 text-[11px] font-mono">
                <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">
                  ❤️ Support Us
                </a>
                <a href="https://amazon.com/s?k=gaming+gear&tag=gameguidehub-20" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">
                  Shop Gaming Gear
                </a>
              </div>
              <p className="text-[10px] font-mono text-text-muted/50 mt-2">
                As an Amazon Associate we earn from qualifying purchases.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
