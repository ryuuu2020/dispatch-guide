import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Dispatch Guide — Complete Hero Stats, Builds & Walkthrough',
    template: '%s | Dispatch Guide',
  },
  description:
    'The ultimate Dispatch game guide: all 6 Z-Team hero stats, best builds, pairings, episode walkthroughs, endings, and tips. Covering PS5, PC, Switch, and Xbox releases.',
  metadataBase: new URL('https://dispatch-guide.com'),
  openGraph: {
    title: 'Dispatch Guide',
    description:
      'The ultimate Dispatch game guide: all 6 Z-Team hero stats, best builds, pairings, episode walkthroughs, endings, and tips.',
    type: 'website',
    siteName: 'Dispatch Guide',
  },
  verification: {
    google: '4cd6cdf221ea7b0b',
  },
};

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Characters', href: '/characters' },
  { label: 'Builds', href: '/builds' },
  { label: 'Episodes', href: '/episodes' },
  { label: 'Endings', href: '/endings' },
  { label: 'Stats', href: '/stats' },
  { label: 'News', href: '/news' },
];

const STATS = [
  { label: 'ACTIVE HEROES', value: '10', unit: '' },
  { label: 'PATCH', value: '1.0', unit: '' },
  { label: 'EPISODES', value: '8', unit: '' },
  { label: 'ENDING PATHS', value: '3+', unit: '' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4cd6cdf221ea7b0b" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
      </head>
      <body className="font-body min-h-screen flex flex-col">
        {/* ── Sidebar + Main wrapper ── */}
        <div className="flex min-h-screen flex-1">
          {/* ===== Sidebar ===== */}
          <aside className="hidden lg:flex flex-col w-56 bg-[#0a0e13] border-r border-border-subtle shrink-0">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 px-4 h-14 border-b border-border-subtle hover:bg-white/5 transition-colors">
              <div className="w-7 h-7 bg-tactical-blue flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-abyss">CMD</span>
              </div>
              <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
                Dispatch
              </span>
            </a>

            {/* Navigation */}
            <nav className="py-4 flex flex-col gap-0.5 flex-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="sidebar-link"
                >
                  <span className="w-1.5 h-1.5 bg-current opacity-40" />
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Bottom */}
            <div className="p-4 border-t border-border-subtle">
              <p className="text-[11px] font-mono text-text-muted">Dispatch Guide</p>
              <p className="text-[10px] font-mono text-text-muted mt-0.5">v1.0</p>
            </div>
          </aside>

          {/* ===== Main content area ===== */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* ===== Top Stats Bar ===== */}
            <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6 gap-4 lg:gap-8">
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
              <div className="flex-1" />
              <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener" className="text-[11px] font-mono text-text-muted hover:text-tactical-blue transition-colors mr-3">❤️ Support Us</a>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
                <span className="text-[11px] font-mono text-text-muted">ONLINE</span>
              </div>
            </header>

            {/* ===== Page content ===== */}
            <main className="flex-1 bg-tactical-grid">
              {children}
            </main>

            {/* ===== Footer ===== */}
            <footer className="border-t border-border-subtle bg-abyss">
              <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-[11px] font-mono text-text-muted">
                    <span>&copy; {new Date().getFullYear()} Dispatch Guide — Unofficial fan guide</span>
                    <a href="/about" className="hover:text-text-secondary transition-colors">About</a>
                    <a href="/privacy" className="hover:text-text-secondary transition-colors">Privacy</a>
                    <a href="/terms" className="hover:text-text-secondary transition-colors">Terms</a>
                  </div>
                </div>
                <p className="text-center text-[10px] font-mono text-text-muted mt-3">
                  Available on PS5, PC, Nintendo Switch, and Xbox Series X|S.
                </p>

                {/* Inter-site links */}
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <h4 className="text-[10px] font-mono font-semibold text-text-muted mb-3 uppercase tracking-wider">
                    More Game Guides
                  </h4>
                  <div className="flex flex-wrap gap-4 text-[11px] font-mono">
                    <a href="https://solarpunk-game-wiki.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">Solarpunk Guide</a>
                    <a href="https://menace-guide.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">MENACE Guide</a>
                    <a href="https://olden-era-guide-tau.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">Olden Era Guide</a>
                    <a href="https://tabletop-tavern-guide.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">Tabletop Tavern Guide</a>
                  </div>
                </div>

                {/* Support */}
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <h4 className="text-[10px] font-mono font-semibold text-text-muted mb-3 uppercase tracking-wider">
                    Support This Guide
                  </h4>
                  <div className="flex flex-wrap gap-4 text-[11px] font-mono">
                    <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener" className="text-text-muted hover:text-tactical-blue transition-colors">
                      ❤️ Support Us
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
