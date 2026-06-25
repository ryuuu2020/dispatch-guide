import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>
            Dispatch &copy; {new Date().getFullYear()} AdHoc Studio. Unofficial fan guide.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
        <p className="text-center text-xs text-text-muted mt-3">
          Available on PS5, PC, Nintendo Switch, and Xbox Series X|S.
        </p>
        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="text-xs font-semibold text-text-muted mb-2 tracking-wide uppercase">More Game Guides</h4>
          <div className="flex flex-wrap gap-3 text-xs">
            <a href="https://solarpunk-guide-ecru.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-accent transition-colors">
              Solarpunk Guide
            </a>
            <a href="https://menace-guide.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-accent transition-colors">
              MENACE Guide
            </a>
            <a href="https://olden-era-guide-tau.vercel.app" target="_blank" rel="noopener" className="text-text-muted hover:text-accent transition-colors">
              Olden Era Guide
            </a>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="text-xs font-semibold text-text-muted mb-2 tracking-wide uppercase">Support This Guide</h4>
          <div className="flex flex-wrap gap-3 text-xs">
            <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener" className="text-text-muted hover:text-accent transition-colors inline-flex items-center gap-1">
              ❤️ Support Us on Afdian
            </a>
            <a href="https://amazon.com/s?k=gaming+gear&tag=gameguidehub-20" target="_blank" rel="noopener" className="text-text-muted hover:text-accent transition-colors inline-flex items-center gap-1">
              🎮 Shop Gaming Gear
            </a>
          </div>
          <p className="text-xs text-text-muted/50 mt-2">As an Amazon Associate we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
}
