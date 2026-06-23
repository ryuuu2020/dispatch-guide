import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Dispatch Guide",
  description: "Privacy Policy for Dispatch Guide — an unofficial fan-made strategy guide.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-extrabold mb-6">
        <span className="text-accent">Privacy</span> Policy
      </h1>

      <div className="prose prose-text text-text-secondary space-y-4 text-sm leading-relaxed">
        <p>
          <strong className="text-text-primary">Effective Date:</strong> June 23, 2026
        </p>

        <h2 className="text-lg font-bold text-text-primary mt-6">Information We Collect</h2>
        <p>
          Dispatch Guide does not collect personal information. We do not use cookies for tracking,
          do not require user accounts, and do not store any data about your visits.
        </p>
        <p>
          We may use standard web server logs (IP address, browser type, pages visited) for
          operational purposes only. These logs are not used to identify individual visitors.
        </p>

        <h2 className="text-lg font-bold text-text-primary mt-6">Third-Party Services</h2>
        <p>
          We use Google Analytics to understand site traffic and improve our content. Google
          Analytics may use cookies and collect anonymized usage data. You can opt out via the
          Google Analytics Opt-out Browser Add-on.
        </p>
        <p>
          We may display advertisements via third-party ad networks. These networks may use cookies
          to serve relevant ads. You can manage your ad preferences through your browser settings.
        </p>

        <h2 className="text-lg font-bold text-text-primary mt-6">Contact</h2>
        <p>
          For privacy-related questions, contact us via the information on our About page.
        </p>
      </div>
    </div>
  );
}
