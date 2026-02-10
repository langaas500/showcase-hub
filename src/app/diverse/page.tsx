import Link from "next/link";
import { categories } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Diverse",
  description:
    "Nettsider for ulike bransjer og tjenester – rengjøring og mer.",
  path: "/diverse",
});

export default function DiversePage() {
  const diverse = categories.find((c) => c.id === "diverse");
  const subcategories = diverse?.subcategories ?? [];

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-foreground">Hjem</Link>
          <span>/</span>
          <span className="text-foreground">Diverse</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 text-5xl">✨</div>
          <h1 className="mb-4 text-4xl font-bold">Diverse</h1>
          <p className="max-w-2xl text-lg text-muted">
            Nettsider for ulike bransjer og tjenester. Velg en kategori for å se prosjekter.
          </p>
        </div>

        {/* Subcategory grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((sub) => (
            <Link key={sub.id} href={`/diverse/${sub.id}`}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:bg-card-hover hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-3 text-4xl">{sub.icon}</div>
                <h2 className="mb-2 text-xl font-bold text-foreground group-hover:text-accent">
                  {sub.title}
                </h2>
                <p className="mb-4 text-sm text-muted">{sub.description}</p>
                <span className="text-sm font-medium text-accent">
                  Se prosjekter →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
