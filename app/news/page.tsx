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

      {/* ====== Article Separator ====== */}
      <hr className="my-12 border-border max-w-3xl" />

      {/* Second Article: Opening Strategy */}
      <div className="text-xs text-text-muted font-mono mb-2">2026-06-23</div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        Best Opening Strategy:{" "}
        <span className="text-accent">First 3 Episodes</span>
      </h1>
      <p className="text-xl text-accent font-heading mb-3">Who to Deploy &amp; How to Build</p>
      <p className="text-text-secondary mb-10 max-w-2xl">
        The first three episodes set the trajectory for your entire run. Botch your early hero
        choices and you&apos;ll be playing catch-up for hours. Here&apos;s the optimal opening every
        experienced player uses.
      </p>

      <article className="max-w-3xl space-y-8 text-sm leading-relaxed">
        {/* Ep1 */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> Episode 1: Deploy Invisigal First
          </h2>
          <div className="space-y-3 text-text-secondary">
            <p>
              Your very first deployment should always be Invisigal. Her stealth mechanics give you
              <strong className="text-text-primary"> full enemy intel without triggering combat</strong>,
              which means you can scout the entire map, identify threats, and plan your route before
              committing to any engagement. No other hero provides this level of risk-free reconnaissance
              this early. Use her Phantom Step ability to bypass patrols and Shadow Strike to pick off
              isolated enemies without alerting the rest of the map.
            </p>
            <p>
              <strong className="text-text-primary">Key objective:</strong> In Ep1, prioritize
              scanning all intel terminals. The information you gather here unlocks better dispatch
              options for Ep2 and Ep3. Don&apos;t get greedy with combat &mdash; intel first, kills second.
            </p>
          </div>
        </section>

        {/* Ep2 */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> Episode 2: Pair Flambae With Anyone
          </h2>
          <div className="space-y-3 text-text-secondary">
            <p>
              Ep2 introduces your first combat-heavy dispatch. Deploy Flambae as your primary &mdash;
              her AoE fire abilities <strong className="text-text-primary">clear crowds faster than
              any other hero at this stage</strong>. Pair her with literally anyone from your unlocked
              roster. She carries hard enough that the second slot is flexible.
            </p>
            <p>
              <strong className="text-text-primary">Avoid deploying Sonar solo this early.</strong>
              Sonar is a support specialist with low combat stats. Without a damage-dealer to back
              her up, she&apos;ll get overwhelmed by mobs. Save Sonar for Ep3 when you can pair her
              with Flambae or Phenomaman for the full recon-combat combo.
            </p>
          </div>
        </section>

        {/* Ep3 */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> Episode 3: Side With Phenomaman
          </h2>
          <div className="space-y-3 text-text-secondary">
            <p>
              Ep3 presents your first major branching choice. <strong className="text-text-primary">
              Choose to side with Phenomaman</strong> for the best long-term stat boost. This decision
              permanently unlocks Phenomaman&apos;s Fortitude passive (+15% HP for the entire team) and
              grants your whole roster a resilience buff that scales into the late game.
            </p>
            <p>
              The alternative path (siding with Malevola) gives a flashy immediate damage boost, but
              it tapers off by mid-game. Phenomaman&apos;s team-wide HP bonus remains relevant through
              the final episode. <strong className="text-text-primary">This is the single highest-impact
              decision in the first three episodes</strong> &mdash; don&apos;t chase the short-term damage spike.
            </p>
          </div>
        </section>

        {/* XP Strategy */}
        <section className="p-6 rounded-xl border border-border bg-bg-card">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">#</span> XP Strategy: Focus Fire
          </h2>
          <div className="space-y-3 text-text-secondary">
            <p>
              <strong className="text-text-primary">Don&apos;t spread XP evenly.</strong> The biggest
              early-game trap is trying to level all six heroes equally. By Ep4 you&apos;ll have a squad
              of mediocre generalists who can&apos;t handle higher-difficulty dispatches. Instead,
              <strong className="text-text-primary"> focus on 2&ndash;3 heroes max</strong> through the
              first three episodes. Recommended core trio: Invisigal (stealth), Flambae (AoE damage),
              Phenomaman (tank). Their abilities complement each other and cover every dispatch type.
            </p>
          </div>
        </section>

        {/* Upgrade Priority */}
        <section className="p-6 rounded-xl border border-accent/30 bg-accent/5">
          <h2 className="text-lg font-bold mb-3">
            <span className="text-accent">&#9733;</span> Upgrade Priority
          </h2>
          <div className="space-y-3 text-text-secondary">
            <p>
              When spending upgrade points, follow this priority order:
            </p>
            <ul className="space-y-2 [&_li]:ml-4 [&_li]:list-disc [&_li]:mb-1">
              <li>
                <strong className="text-text-primary">1. Movement Speed</strong> &mdash; Faster
                heroes complete objectives quicker, dodge more attacks, and reduce dispatch time.
                This stat pays for itself in every single mission.
              </li>
              <li>
                <strong className="text-text-primary">2. Special Ability</strong> &mdash; Your
                hero&apos;s unique ability defines their role. Upgrading it early amplifies what makes
                each hero good (Invisigal&apos;s stealth duration, Flambae&apos;s burn radius, etc.).
              </li>
              <li>
                <strong className="text-text-primary">3. HP</strong> &mdash; More survivability means
                fewer restarts and less downtime. Rush HP after your core two stats are comfortable.
              </li>
            </ul>
          </div>
        </section>
      </article>

      {/* ====== Article 3: Best Builds ====== */}
<hr className="my-12 border-border max-w-3xl" />

<div className="text-xs text-text-muted font-mono mb-2">2026-06-24</div>
<h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
  Best <span className="text-accent">Builds</span>: Updated Meta
</h2>
<p className="text-text-secondary mb-8 max-w-2xl">
  The Dispatch meta is settling and clear winners are emerging. Here are the three strongest hero builds in the current patch.
</p>

<section className="p-6 rounded-xl border border-border bg-bg-card mb-4">
  <h3 className="text-lg font-bold mb-2">
    <span className="text-accent">#1</span> Flambae — AoE Demolisher
  </h3>
  <p className="text-text-secondary">
    Priority: Special Ability &gt; Combat &gt; Vigor. Max her Fire Zone first — the radius increase
    at level 3 covers entire encounter rooms. Pair with Invisigal for flanking crits or Phenomaman
    for unkillable frontline. <strong className="text-text-primary">This is the current S-tier build.</strong>
  </p>
</section>

<section className="p-6 rounded-xl border border-border bg-bg-card mb-4">
  <h3 className="text-lg font-bold mb-2">
    <span className="text-accent">#2</span> Sonar — Ultimate Support
  </h3>
  <p className="text-text-secondary">
    Priority: Intellect &gt; Mobility &gt; Vigor. Sonar&apos;s map-wide reveal at Intellect 4 is the
    single best utility ability in the game. Stun Pulse at level 3 gives your team two free rounds
    of damage. <strong className="text-text-primary">Build Sonar as pure support — don&apos;t waste points on Combat.</strong>
  </p>
</section>

<section className="p-6 rounded-xl border border-border bg-bg-card mb-4">
  <h3 className="text-lg font-bold mb-2">
    <span className="text-accent">#3</span> Phenomaman — Immortal Tank
  </h3>
  <p className="text-text-secondary">
    Priority: Vigor &gt; Charisma &gt; Combat. At Vigor 5, Phenomaman regenerates 8% HP per turn.
    Combined with her Taunt ability, she can solo-tank any encounter while your damage dealers
    clean up. <strong className="text-text-primary">The safest pick for hard missions.</strong>
  </p>
</section>


      {/* ====== Article 4: Episode Guide ====== */}
<hr className="my-12 border-border max-w-3xl" />

<div className="text-xs text-text-muted font-mono mb-2">2026-06-25</div>
<h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
  Episode 1-3 <span className="text-accent">Walkthrough</span>: Key Choices
</h2>
<p className="text-text-secondary mb-8 max-w-2xl">
  The first three episodes set up your entire playthrough. Make the wrong call early and you&apos;ll limp through the rest of the game. Here&apos;s the optimal path.
</p>

<section className="p-6 rounded-xl border border-border bg-bg-card mb-4">
  <h3 className="text-lg font-bold mb-2">
    <span className="text-accent">Episode 1</span> — The Sardine Can
  </h3>
  <p className="text-text-secondary">
    Deploy Invisigal first. Her stealth recon gives you intel on all three encounter types before
    committing your team. The tutorial suggests Blonde Blazer — <strong className="text-text-primary">ignore it.</strong>
    Blonde Blazer is a generalist who does nothing well early game. Save her for Episode 4+.
  </p>
</section>

<section className="p-6 rounded-xl border border-border bg-bg-card mb-4">
  <h3 className="text-lg font-bold mb-2">
    <span className="text-accent">Episode 2</span> — First Real Fight
  </h3>
  <p className="text-text-secondary">
    Pair Flambae with any teammate — her Fire Zone clears the mob waves single-handedly. Avoid
    sending Sonar solo: she has no damage output at this level and will burn through your revival
    charges. <strong className="text-text-primary">Pick up the side objective in the warehouse</strong> — it unlocks
    a permanent +1 Mobility for your deployed hero.
  </p>
</section>

<section className="p-6 rounded-xl border border-border bg-bg-card mb-4">
  <h3 className="text-lg font-bold mb-2">
    <span className="text-accent">Episode 3</span> — The Fork
  </h3>
  <p className="text-text-secondary">
    Your first major narrative choice. <strong className="text-text-primary">Side with Phenomaman.</strong> This gives
    you permanent +2 Vigor for all heroes and unlocks her Taunt ability early. The alternative
    (siding with Malevola) gives a temporary damage boost that expires after Episode 5. Long-term
    stat gains &gt; short-term buffs.
  </p>
</section>


      {/* CTA */}
      <div className="mt-12 p-6 rounded-xl border border-accent/20 bg-accent/5 max-w-3xl">
        <p className="text-sm text-text-muted">
          <strong className="text-text-primary">Ready for the mid-game?</strong> Check out our{" "}
          <Link href="/walkthrough" className="text-accent hover:underline">
            full episode walkthrough
          </Link>{" "}
          and{" "}
          <Link href="/characters" className="text-accent hover:underline">
            hero tier list
          </Link>{" "}
          for Episodes 4 through 8.
        </p>
      </div>
    </div>
  );
}
