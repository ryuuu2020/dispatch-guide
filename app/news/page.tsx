import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invisigal Deep Dive — Best Builds & Team Synergies",
  description:
    "Complete Invisigal guide: stats breakdown, best ability combos, ideal team pairings (Flambae, Sonar), worst matchups, and recommended dispatch assignments for Dispatch.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-text-muted hover:text-accent transition-colors">
          &larr; Back to Home
        </Link>
      </div>

      <div className="text-xs text-text-muted font-mono mb-2">2026-06-23</div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        Invisigal <span className="text-accent">Deep Dive</span>
      </h1>
      <p className="text-xl text-accent font-heading mb-3">Best Builds &amp; Team Synergies</p>
      <p className="text-text-secondary mb-10 max-w-2xl">
        Invisigal is easily the most misunderstood hero on the Z-Team. She looks like a one-trick
        stealth specialist, but in the right hands she&apos;s a mission-carrying powerhouse. Here&apos;s how
        to unlock her full potential.
      </p>

      {/* Article */}
      <article className="max-w-3xl space-y-8 text-sm leading-relaxed">
        {/* Stats */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> Stat Breakdown
          </h2>
          <div className="space-y-3 text-text-secondary">
            <div>
              <span className="font-semibold text-text-primary">Combat 3★</span>
              <p>Solid but not spectacular. Invisigal hits hard enough to clear mobs but relies on
              crits and positioning for elite enemies. Don&apos;t send her solo against bosses.</p>
            </div>
            <div>
              <span className="font-semibold text-text-primary">Intellect 4★</span>
              <p>Her real strength. High Intellect unlocks environmental takedowns, trap disarming,
              and hacking objectives that other heroes simply can&apos;t handle.</p>
            </div>
            <div>
              <span className="font-semibold text-text-primary">Charisma 2★</span>
              <p>Her weakest stat. Avoid social-heavy dispatches where negotiation or persuasion is
              required. She&apos;s a ghost, not a diplomat.</p>
            </div>
            <div>
              <span className="font-semibold text-text-primary">Mobility 5★</span>
              <p>Maxed out. Invisigal can reach objectives other heroes physically can&apos;t access.
              Use her for infiltration, rooftop chases, and any mission where speed matters.</p>
            </div>
            <div>
              <span className="font-semibold text-text-primary">Vigor 3★</span>
              <p>Average durability. She can take a few hits but crumbles under sustained fire.
              Pair with a tank or keep her in and out fast.</p>
            </div>
          </div>
        </section>

        {/* Best Ability Combos */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> Best Ability Combos
          </h2>
          <div className="space-y-3 text-text-secondary">
            <p>
              <strong className="text-text-primary">Shadow Strike → Vanish → Reposition:</strong> The
              bread-and-butter combo. Engage with Shadow Strike for bonus flanking damage, pop Vanish
              to drop aggro, then reposition behind priority targets. Rinse and repeat. This combo
              alone makes her the best infiltrator on the roster.
            </p>
            <p>
              <strong className="text-text-primary">Cloak Field + Environmental Takedown:</strong> When
              the mission has hackable turrets or explosive barrels, activate Cloak Field to move
              undetected, then trigger environmental kills. Zero risk, maximum carnage.
            </p>
            <p>
              <strong className="text-text-primary">Phantom Step → Objective Rush:</strong> For timed
              missions, Phantom Step lets you bypass entire enemy groups. Skip the fights, grab the
              intel, and extract. You won&apos;t get style points, but you&apos;ll clear the mission.
            </p>
          </div>
        </section>

        {/* Team Pairings */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> Ideal Team Pairings
          </h2>
          <div className="space-y-3 text-text-secondary">
            <p>
              <strong className="text-text-primary">Flambae (Best Partner):</strong> The ultimate
              synergy. Flambae draws enemy attention and deals massive AoE damage while Invisigal
              flanks and eliminates priority targets from stealth. Flambae&apos;s fire zones also create
              chaos that Invisigal exploits for bonus Shadow Strike damage. This is the duo you send
              when the mission absolutely must succeed.
            </p>
            <p>
              <strong className="text-text-primary">Sonar (Recon Combo):</strong> Sonar reveals all
              enemies on the map, letting Invisigal plan the perfect infiltration route. Sonar&apos;s
              stun pulse also sets up guaranteed crit windows for Invisigal&apos;s Shadow Strike. Together
              they turn stealth missions into speedruns.
            </p>
            <p>
              <strong className="text-text-primary">Phenomaman (Tank Anchor):</strong> When the mission
              is too dangerous for pure stealth, Phenomaman soaks damage while Invisigal does the
              objective work. Not the most elegant pairing, but effective for hybrid combat/infiltration
              dispatches.
            </p>
          </div>
        </section>

        {/* Worst Matchups */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> Worst Matchups
          </h2>
          <div className="space-y-3 text-text-secondary">
            <p>
              <strong className="text-text-primary">Malevola:</strong> Malevola&apos;s chaotic playstyle
              actively undermines Invisigal&apos;s stealth. AoE darkness effects disable Invisigal&apos;s
              Cloak Field, and Malevola&apos;s collateral damage frequently breaks stealth. Avoid pairing
              them unless the mission script demands it.
            </p>
            <p>
              <strong className="text-text-primary">Blonde Blazer:</strong> Not terrible, but redundant.
              Blonde Blazer is a generalist who does a bit of everything, while Invisigal needs
              specialists who cover her weaknesses. You&apos;re better off with Flambae or Sonar in that
              second slot.
            </p>
          </div>
        </section>

        {/* Dispatch Assignments */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> Recommended Dispatch Assignments
          </h2>
          <div className="space-y-3 text-text-secondary">
            <ul className="space-y-2 [&_li]:ml-4 [&_li]:list-disc [&_li]:mb-1">
              <li>
                <strong className="text-text-primary">Infiltration / Stealth:</strong> Invisigal&apos;s
                natural habitat. Send her solo for max efficiency, or add Sonar for intel support.
              </li>
              <li>
                <strong className="text-text-primary">Tech / Hacking:</strong> Her 4★ Intellect makes
                her the go-to for any mission involving computers, security systems, or data extraction.
                Better than Blonde Blazer for pure tech objectives.
              </li>
              <li>
                <strong className="text-text-primary">Rescue / Extraction:</strong> High Mobility means
                she can reach hostages fast and extract before reinforcements arrive. Pair with
                Phenomaman if the extraction point is hot.
              </li>
              <li>
                <strong className="text-text-primary">Recon / Intel Gathering:</strong> Combine with
                Sonar for map-wide awareness. Invisigal does the legwork, Sonar provides overwatch.
                This duo clears recon missions faster than any other combination.
              </li>
              <li>
                <strong className="text-text-primary">Avoid: Social / Negotiation:</strong> Her 2★
                Charisma is a liability in any dialogue-driven dispatch. Send Blonde Blazer or
                Phenomaman instead &mdash; Invisigal will just make things worse.
              </li>
            </ul>
          </div>
        </section>
      </article>

      {/* CTA */}
      <div className="mt-12 p-6 rounded-xl border border-accent/20 bg-accent/5 max-w-3xl">
        <p className="text-sm text-text-muted">
          <strong className="text-text-primary">Want the full roster?</strong> Check out our{" "}
          <Link href="/characters" className="text-accent hover:underline">
            complete character guide
          </Link>{" "}
          and{" "}
          <Link href="/builds" className="text-accent hover:underline">
            best builds
          </Link>{" "}
          for all six Z-Team heroes.
        </p>
      </div>
    </div>
  );
}
