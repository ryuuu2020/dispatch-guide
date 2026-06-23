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
      </div>
    </footer>
  );
}
