import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Dispatch Guide",
  description:
    "About the Dispatch Guide — an unofficial fan-made strategy guide for AdHoc Studio's superhero workplace comedy.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold mb-6">
        <span className="text-accent">About</span> Dispatch Guide
      </h1>

      <div className="prose prose-text text-text-secondary space-y-4 text-sm leading-relaxed">
        <p>
          Dispatch Guide is an unofficial, fan-made strategy resource for{" "}
          <strong className="text-text-primary">Dispatch</strong>, the narrative-driven superhero
          workplace comedy from AdHoc Studio (ex-Telltale developers).
        </p>

        <p>
          Our goal: provide clear, accurate, and spoiler-minimal guides so you can enjoy Dispatch
          without frustration. Whether you&apos;re trying to unlock the Secret Ending, optimize your
          Z-Team composition, or figure out which hero to send on a specific mission — we&apos;ve got
          you covered.
        </p>

        <h2 className="text-lg font-bold text-text-primary mt-6">What We Cover</h2>
        <ul className="space-y-1">
          <li>Complete hero stats and best builds for all 6 Z-Team members</li>
          <li>Episode walkthroughs with key decision points</li>
          <li>All 4 endings — how to unlock each one</li>
          <li>Team composition tier lists and pairing recommendations</li>
          <li>FAQ for every hero and game mechanic</li>
        </ul>

        <h2 className="text-lg font-bold text-text-primary mt-6">Disclaimer</h2>
        <p>
          Dispatch and all related characters, names, and indicia are trademarks of AdHoc Studio.
          This site is not affiliated with, endorsed by, or connected to AdHoc Studio in any way.
          All game content and assets are the property of their respective owners.
        </p>
      </div>
    </div>
  );
}
