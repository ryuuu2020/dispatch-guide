import Link from "next/link";
import { SITE_TITLE } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-accent transition-colors">
          <span className="text-accent">Dispatch</span>
          <span className="text-text-secondary ml-2 text-sm hidden sm:inline">Guide</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          <NavLink href="/characters">Heroes</NavLink>
          <NavLink href="/stats">Stats</NavLink>
          <NavLink href="/episodes">Episodes</NavLink>
          <NavLink href="/builds">Builds</NavLink>
          <NavLink href="/endings">Endings</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-2 sm:px-3 py-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
    >
      {children}
    </Link>
  );
}
