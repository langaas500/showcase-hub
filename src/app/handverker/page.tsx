import Link from "next/link";
import { categories } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Håndverker",
  description:
    "Profesjonelle nettsider for håndverkere i ulike fag – snekker, elektriker, tømrer, ventilasjon og rørlegger.",
  path: "/handverker",
});

export default function HandverkerPage() {
  const handverker = categories.find((c) => c.id === "handverker");
  const subcategories = handverker?.subcategories ?? [];

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-foreground">Hjem</Link>
          <span>/</span>
          <span className="text-foreground">Håndverker</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 text-5xl">🔨</div>
          <h1 className="mb-4 text-4xl font-bold">Håndverker</h1>
          <p className="max-w-2xl text-lg text-muted">
            Profesjonelle nettsider for håndverkere. Velg et fag for å se prosjekter.
          </p>
        </div>

        {/* Subcategory grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((sub) => (
            <Link key={sub.id} href={`/handverker/${sub.id}`}>
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
