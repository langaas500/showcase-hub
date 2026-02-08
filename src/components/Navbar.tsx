"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-accent">SBL</span> Showcase
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">
            Hjem
          </Link>
          <Link href="/restauranter" className="text-sm text-muted transition-colors hover:text-foreground">
            Restauranter
          </Link>
          <Link href="/handverker" className="text-sm text-muted transition-colors hover:text-foreground">
            Håndverker
          </Link>
          <Link href="/bryllup" className="text-sm text-muted transition-colors hover:text-foreground">
            Bryllup
          </Link>
          <Link
            href="/kontakt"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-foreground">
              Hjem
            </Link>
            <Link href="/restauranter" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-foreground">
              Restauranter
            </Link>
            <Link href="/handverker" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-foreground">
              Håndverker
            </Link>
            <Link href="/bryllup" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-foreground">
              Bryllup
            </Link>
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-medium text-white"
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
