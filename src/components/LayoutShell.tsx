"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const demoRoutes = [
  "/bryllup",
  "/handverker/snekker",
  "/handverker/elektriker",
  "/handverker/tomrer",
  "/handverker/ventilasjon",
  "/handverker/rorlegger",
];

function isDemo(pathname: string) {
  return demoRoutes.some((r) => pathname === r || pathname.startsWith(r + "/"));
}

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const demo = isDemo(pathname);

  if (demo) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} SBL Prosjekter. Alle rettigheter reservert.
        </div>
      </footer>
    </>
  );
}
