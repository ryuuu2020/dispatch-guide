"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { characters } from "@/lib/data";

interface SearchResult {
  type: "character" | "page";
  label: string;
  href: string;
  subtitle?: string;
}

const staticPages: SearchResult[] = [
  { type: "page", label: "All Characters", href: "/characters", subtitle: "Z-Team hero roster" },
  { type: "page", label: "Stats Guide", href: "/stats", subtitle: "5 core stats explained" },
  { type: "page", label: "Episode Guide", href: "/episodes", subtitle: "All 8 episodes" },
  { type: "page", label: "Best Builds", href: "/builds", subtitle: "Optimal hero setups" },
  { type: "page", label: "All Endings", href: "/endings", subtitle: "How to unlock" },
  { type: "page", label: "Strategy", href: "/strategy", subtitle: "Unlock all endings" },
  { type: "page", label: "Team Compositions", href: "/tools", subtitle: "Best team comps" },
  { type: "page", label: "Latest Updates", href: "/latest", subtitle: "Recent changes" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const results: SearchResult[] = [];
  if (query.trim().length >= 1) {
    const q = query.toLowerCase();
    for (const c of characters) {
      if (c.name.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q)) {
        results.push({
          type: "character",
          label: c.name,
          href: `/characters/${c.slug}`,
          subtitle: c.tagline,
        });
      }
    }
    for (const p of staticPages) {
      if (p.label.toLowerCase().includes(q) || (p.subtitle && p.subtitle.toLowerCase().includes(q))) {
        results.push(p);
      }
    }
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Search heroes, guides..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-border bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
        />
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-surface border border-border rounded-xl shadow-lg overflow-hidden z-50">
          {results.slice(0, 6).map((r, i) => (
            <Link
              key={`${r.href}-${i}`}
              href={r.href}
              onClick={() => {
                setOpen(false);
                setQuery("");
              }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-surface-hover transition-colors"
            >
              <span
                className={`text-xs px-1.5 py-0.5 rounded font-mono shrink-0 ${
                  r.type === "character"
                    ? "bg-accent/10 text-accent"
                    : "bg-accent-secondary/10 text-accent-secondary"
                }`}
              >
                {r.type === "character" ? "Hero" : "Guide"}
              </span>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-text truncate">{r.label}</div>
                {r.subtitle && (
                  <div className="text-xs text-muted truncate">{r.subtitle}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {open && query.trim().length >= 1 && results.length === 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-surface border border-border rounded-xl shadow-lg p-4 text-center text-sm text-muted z-50">
          No results for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
