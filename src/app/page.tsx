import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "SBL Showcase | Prosjekter",
  description:
    "Utforsk vårt utvalg av nettsider og digitale løsninger. Fra restauranter og fastfood til håndverkere – skreddersydde løsninger.",
  path: "/",
});

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-125 w-200 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Våre{" "}
            <span className="bg-linear-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              Prosjekter
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
            Utforsk vårt utvalg av nettsider og digitale løsninger. Fra restauranter og fastfood
            til håndverkere i alle fag – vi leverer skreddersydde løsninger.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Kategorier
          </h2>
          <h3 className="mb-12 text-3xl font-bold">Velg en kategori</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                title={cat.title}
                description={cat.description}
                icon={cat.icon}
                gradient={cat.gradient}
                count={cat.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "14+", label: "Prosjekter" },
            { value: "6", label: "Bransjer" },
            { value: "100%", label: "Responsiv" },
            { value: "Vercel", label: "Hosting" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-1 text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
