"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navItems = [
  { href: "/bryllup", label: "Hjem" },
  { href: "/bryllup/program", label: "Program" },
  { href: "/bryllup/veibeskrivelse", label: "Veibeskrivelse" },
  { href: "/bryllup/bilder", label: "Del bilder" },
  { href: "/bryllup/album", label: "Album" },
];

export default function BryllupLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3629]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e2d9]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/bryllup" className="text-lg tracking-[0.2em] uppercase text-[#8b7355] font-normal">
            Emmelin &amp; Martin
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  pathname === item.href
                    ? "text-[#8b7355] border-b border-[#8b7355] pb-0.5"
                    : "text-[#8b7b6b] hover:text-[#8b7355]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#8b7b6b]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#e8e2d9] px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wider uppercase ${
                  pathname === item.href ? "text-[#8b7355]" : "text-[#8b7b6b]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-[#e8e2d9] py-10 text-center">
        <p className="text-[#b5a48a] text-sm tracking-wider">Emmelin &amp; Martin &middot; 16. august 2025</p>
        <p className="text-[#c9bba3] text-xs mt-2 tracking-wide">Med kjærlighet, for alltid</p>
      </footer>
    </div>
  );
}
