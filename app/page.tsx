import Link from "next/link";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESCRIPTION, guideUpdates } from "@/lib/data";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img src="/hero.png" alt="Dispatch superhero team" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-bg/60 to-bg pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 relative">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono">
            Xbox Summer 2026 — Now Available on All Platforms
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-accent">Dispatch</span> Guide
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-text-secondary max-w-2xl">
            Complete hero stats, best builds, episode walkthroughs, and all four endings for AdHoc
            Studio&apos;s superhero workplace comedy. Your Z-Team deserves a competent dispatcher.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/characters"
              className="px-5 py-2.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent/80 transition-colors"
            >
              Browse Heroes
            </Link>
            <Link
              href="/builds"
              className="px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
            >
              Best Builds
            </Link>
            <Link
              href="/episodes"
              className="px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
            >
              Episode Guide
            </Link>
            <Link
              href="/news"
              className="px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
            >
              News
            </Link>
          </div>
        </div>
      </section>

      {/* Quick nav grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickCard
            href="/characters"
            title="6 Heroes"
            desc="Full Z-Team roster with stats, builds, and best pairings"
            emoji="🦸"
          />
          <QuickCard
            href="/stats"
            title="5 Core Stats"
            desc="Combat, Intellect, Charisma, Mobility & Vigor explained"
            emoji="📊"
          />
          <QuickCard
            href="/episodes"
            title="8 Episodes"
            desc="Complete walkthrough and key decision points"
            emoji="📺"
          />
          <QuickCard
            href="/endings"
            title="4 Endings"
            desc="True Hero, Antihero, Everyman & Secret — how to unlock"
            emoji="🏆"
          />
        </div>
      </section>

      {/* Featured characters */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-accent">#</span> Top Heroes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FeaturedHero
            slug="flambae"
            name="Flambae"
            tagline="Best Damage Dealer"
            stat="5★ Combat"
            color="#f97316"
          />
          <FeaturedHero
            slug="blonde-blazer"
            name="Blonde Blazer"
            tagline="Best All-Rounder"
            stat="4★ All Stats"
            color="#eab308"
          />
          <FeaturedHero
            slug="phenomaman"
            name="Phenomaman"
            tagline="Best Tank"
            stat="5★ Vigor"
            color="#22c55e"
          />
        </div>
      </section>

      {/* Latest Guides */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-accent">#</span> Latest Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guideUpdates.slice(0, 4).map((update) => (
            <Link
              key={update.slug}
              href={`/latest#${update.slug}`}
              className="block p-5 rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover hover:border-accent/30 transition-all"
            >
              <div className="text-xs text-text-muted font-mono mb-1">{update.date}</div>
              <h3 className="font-bold mb-1 group-hover:text-accent transition-colors">{update.title}</h3>
              <p className="text-sm text-text-muted">{update.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/latest" className="text-sm text-accent hover:underline">
            View all updates →
          </Link>
        </div>
      </section>

      {/* Game info */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-accent">#</span> About the Game
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InfoBlock title="What is Dispatch?">
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
          </InfoBlock>
          <InfoBlock title="Platforms &amp; Pricing">
            <p>Released in stages across all major platforms:</p>
            <ul>
              <li><strong>PS5 &amp; PC</strong> — October 2025</li>
              <li><strong>Nintendo Switch</strong> — January 2026</li>
              <li><strong>Xbox Series X|S</strong> — Summer 2026 (now available!)</li>
            </ul>
            <p className="mt-2">
              $29.99 Standard Edition | $39.99 Digital Deluxe Edition
            </p>
          </InfoBlock>
        </div>
      </section>
    </>
  );
}

function QuickCard({ href, title, desc, emoji }: { href: string; title: string; desc: string; emoji: string }) {
  return (
    <Link
      href={href}
      className="block p-5 rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover hover:border-accent/30 transition-all"
    >
      <div className="text-2xl mb-2">{emoji}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-text-muted mt-1">{desc}</p>
    </Link>
  );
}

function FeaturedHero({ slug, name, tagline, stat, color }: { slug: string; name: string; tagline: string; stat: string; color: string }) {
  return (
    <Link
      href={`/characters/${slug}`}
      className="block p-5 rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover transition-all"
      style={{ borderTopWidth: "3px", borderTopColor: color }}
    >
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-text-secondary">{tagline}</p>
      <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded font-mono" style={{ backgroundColor: color + "20", color }}>
        {stat}
      </span>
    </Link>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-bg-card">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <div className="text-text-secondary space-y-2 text-sm leading-relaxed [&_p]:mb-2 [&_li]:ml-4 [&_li]:list-disc [&_li]:mb-1 [&_strong]:text-text-primary">
        {children}
      </div>
    </div>
  );
}
