import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Dispatch Guide",
  description: "Terms of Service for Dispatch Guide — an unofficial fan-made strategy guide.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold mb-6">
        <span className="text-accent">Terms</span> of Service
      </h1>

      <div className="prose prose-text text-text-secondary space-y-4 text-sm leading-relaxed">
        <p>
          <strong className="text-text-primary">Last Updated:</strong> June 23, 2026
        </p>

        <h2 className="text-lg font-bold text-text-primary mt-6">Acceptance of Terms</h2>
        <p>
          By accessing Dispatch Guide, you agree to these Terms of Service. If you do not agree,
          please do not use this website.
        </p>

        <h2 className="text-lg font-bold text-text-primary mt-6">Content Disclaimer</h2>
        <p>
          All guides, builds, and strategies on this site are fan-created and for informational
          purposes only. We make no guarantees about accuracy or completeness. Game mechanics may
          change with patches — always verify information against in-game data.
        </p>
        <p>
          Dispatch and all related intellectual property are owned by AdHoc Studio. This site is
          unofficial and not affiliated with the game&apos;s developers or publishers.
        </p>

        <h2 className="text-lg font-bold text-text-primary mt-6">Use of Content</h2>
        <p>
          You may reference our guides for personal use. Reproduction, redistribution, or
          commercial use of our original content without permission is prohibited. Short excerpts
          with attribution and a link back are acceptable.
        </p>

        <h2 className="text-lg font-bold text-text-primary mt-6">Limitation of Liability</h2>
        <p>
          Dispatch Guide is provided &quot;as is&quot; without warranties. We are not liable for any damages
          arising from use of this site or reliance on its content.
        </p>
      </div>
    </div>
  );
}
