import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispatch Resource Management Guide — Funds, Items, and Base Upgrades",
  description: "Complete Dispatch resource management guide. How to earn and spend funds efficiently, item acquisition strategies, and base upgrade priority order for maximum team power.",
};

const UPGRADE_PRIORITY = [
  { upgrade: "Combat Simulator", cost: "Medium", effect: "Increases all heroes' Attack by training. Permanent stat boost.", priority: 1, reason: "Attack is the universal combat stat. Every hero benefits." },
  { upgrade: "Med Bay Level 2", cost: "Medium", effect: "Reduces hero recovery time by 40 percent after missions.", priority: 2, reason: "Less downtime means more missions per day. Compound advantage." },
  { upgrade: "Gym", cost: "Low", effect: "Increases all heroes' Mobility through exercise.", priority: 3, reason: "Mobility affects both dodge and turn order. Second most important stat." },
  { upgrade: "R&D Lab", cost: "High", effect: "Unlocks gadget crafting and Science stat training.", priority: 4, reason: "Gadgets are force multipliers — a well-equipped hero is worth two." },
  { upgrade: "Armory", cost: "Medium", effect: "Unlocks gear crafting and equipment slots.", priority: 5, reason: "Gear provides stat bonuses but is expensive to craft. Delay until you have steady income." },
  { upgrade: "Lounge", cost: "Low", effect: "Increases hero mood recovery and Charm training.", priority: 6, reason: "Charm is situational. Only prioritize if you run Charm-focused heroes." },
];

const INCOME_SOURCES = [
  { source: "Mission Rewards", incomePerDay: "Variable (primary income)", reliability: "High if you run 3+ missions daily", tips: "Always accept bonus objectives — they often double the payout." },
  { source: "Selling Unused Items", incomePerDay: "50-200 funds", reliability: "Medium — depends on loot drops", tips: "Sell duplicate gadgets and low-tier gear. Keep at least one of each gadget type." },
  { source: "Side Hustle Missions", incomePerDay: "100-300 funds", reliability: "High — always available", tips: "These are deliberately low-risk, low-reward. Run them when main missions are on cooldown." },
  { source: "Achievement Bonuses", incomePerDay: "One-time 200-1000", reliability: "One-time only", tips: "Check the achievement list and target the easy ones early for a funding boost." },
  { source: "Story Progression", incomePerDay: "One-time per chapter", reliability: "Guaranteed", tips: "Story rewards scale with chapter. Do not spend all chapter rewards immediately — save 30 percent for emergencies." },
];

export default function ResourceManagementPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        Dispatch <span className="text-accent">Resource Management</span>
      </h1>
      <p className="text-text-secondary mb-10 max-w-2xl">
        Funds are the lifeblood of your Dispatch operation. Every upgrade, every gadget, every gear piece costs funds — and you never have enough. This guide teaches you how to earn efficiently, spend wisely, and never go broke.
      </p>

      <div className="faq-snippets mb-8">
        <h2 className="text-xl font-bold mb-4"><span className="text-accent">#</span> Quick FAQ</h2>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">What should I spend funds on first?</summary>
          <p className="mt-2 text-sm text-text-secondary">The Combat Simulator is the highest-priority purchase. It permanently increases all heroes&apos; Attack stats and pays for itself in faster mission completion. After that, Med Bay Level 2 reduces recovery time by 40 percent, which means more missions and more income. Avoid spending on cosmetics or hero skins until your core upgrades are maxed out.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">How do I farm funds quickly?</summary>
          <p className="mt-2 text-sm text-text-secondary">Run Side Hustle missions between main story missions. They have no cooldown and provide steady income. Also, always accept bonus objectives on every mission — the extra payout is substantial and the objectives are usually achievable without deviating from your main goal. Never skip a mission because it seems low-paying; mission volume is more important than individual mission payouts.</p>
        </details>
        <details className="mb-3 p-3 rounded-lg border border-border bg-bg-card">
          <summary className="font-medium cursor-pointer hover:text-accent">Should I upgrade all heroes equally?</summary>
          <p className="mt-2 text-sm text-text-secondary">No. Focus resources on 3-4 core heroes. A team of four well-equipped, high-stat heroes outperforms a roster of eight under-equipped heroes. Your core team should cover all damage types (physical, energy, psychic) and include at least one tank or support. Once your core team is strong, use them to carry lower-level heroes through easy missions for passive XP gain.</p>
        </details>
      </div>

      <h2 className="text-2xl font-bold mb-4">Base Upgrade Priority Order</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-bg-card">
            <tr>
              <th className="p-3 border border-border w-12">#</th>
              <th className="p-3 border border-border">Upgrade</th>
              <th className="p-3 border border-border">Cost</th>
              <th className="p-3 border border-border">Effect</th>
              <th className="p-3 border border-border">Reasoning</th>
            </tr>
          </thead>
          <tbody>
            {UPGRADE_PRIORITY.map((u, i) => (
              <tr key={i} className="hover:bg-bg-card">
                <td className="p-3 border border-border font-bold text-accent">{u.priority}</td>
                <td className="p-3 border border-border font-semibold">{u.upgrade}</td>
                <td className="p-3 border border-border text-text-secondary">{u.cost}</td>
                <td className="p-3 border border-border text-text-secondary text-xs">{u.effect}</td>
                <td className="p-3 border border-border text-text-secondary text-xs">{u.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">Income Sources Breakdown</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-bg-card">
            <tr>
              <th className="p-3 border border-border">Income Source</th>
              <th className="p-3 border border-border">Rate</th>
              <th className="p-3 border border-border">Reliability</th>
              <th className="p-3 border border-border">Strategy Tips</th>
            </tr>
          </thead>
          <tbody>
            {INCOME_SOURCES.map((s, i) => (
              <tr key={i} className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold">{s.source}</td>
                <td className="p-3 border border-border text-accent">{s.incomePerDay}</td>
                <td className="p-3 border border-border text-text-secondary">{s.reliability}</td>
                <td className="p-3 border border-border text-text-secondary text-xs">{s.tips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">The 30 Percent Rule</h2>
      <p className="text-text-secondary mb-4">
        The most common resource management mistake in Dispatch is spending every fund the moment you earn it. When an emergency hits — a hero is critically injured and needs immediate med bay treatment, or a time-limited event requires gadget crafting — you are broke.
      </p>
      <p className="text-text-secondary mb-4">
        Follow the <strong className="text-accent">30 percent rule</strong>: always keep 30 percent of your current funds as an emergency reserve. When you have 1000 funds, your spending budget is 700. When you have 5000, your spending budget is 3500. This buffer absorbs unexpected costs without derailing your upgrade schedule.
      </p>
      <p className="text-text-secondary mb-4">
        The only exception is the Combat Simulator — if you are within 100 funds of affording it, save aggressively and buy it immediately. The Attack bonus pays back the temporary austerity within three mission cycles.
      </p>

      <h2 className="text-2xl font-bold mb-4">Gadget Economy</h2>
      <p className="text-text-secondary mb-4">
        Gadgets are consumable items that provide mission-specific advantages. They cost funds to craft and are consumed on use. Here is how to manage the gadget economy without going broke:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-8">
        <li><strong className="text-accent">Craft only what you need for the next mission.</strong> Do not stockpile gadgets. The funds tied up in unused gadgets could be earning interest as base upgrades.</li>
        <li><strong className="text-accent">Use common gadgets freely, save rare ones.</strong> Smoke Bombs and Medkits are cheap and should be used on any mission where they help. EMP Grenades and Cloaking Devices are expensive — save for boss fights and critical story missions.</li>
        <li><strong className="text-accent">One gadget per mission is the sweet spot.</strong> Bringing more than one gadget per hero rarely provides proportional benefit. One well-chosen gadget is usually enough to handle the mission&apos;s specific challenge.</li>
      </ul>

      <p className="text-text-secondary mt-10 text-sm border-t border-border pt-4">
        Last updated: July 1, 2026. Resource costs and upgrade effects verified against current Dispatch build.
      </p>
    </div>
  );
}
