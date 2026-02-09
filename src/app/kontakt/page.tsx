import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Kontakt",
  description:
    "Ta kontakt med SBL Prosjekter for nettsider og digitale løsninger.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-foreground">Hjem</Link>
          <span>/</span>
          <span className="text-foreground">Kontakt</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold">Kontakt oss</h1>
        <p className="mb-10 text-lg text-muted">
          Interessert i et prosjekt? Ta kontakt så finner vi en løsning sammen.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              Navn
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Ditt navn"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              E-post
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="din@epost.no"
            />
          </div>

          <div>
            <label htmlFor="category" className="mb-2 block text-sm font-medium text-foreground">
              Kategori
            </label>
            <select
              id="category"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="">Velg kategori</option>
              <option value="restaurant">Restaurant / Fastfood</option>
              <option value="snekker">Snekker</option>
              <option value="elektriker">Elektriker</option>
              <option value="tomrer">Tømrer</option>
              <option value="ventilasjon">Ventilasjon</option>
              <option value="rorlegger">Rørlegger</option>
              <option value="annet">Annet</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              Melding
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Fortell oss om prosjektet ditt..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Send melding
          </button>
        </form>
      </div>
    </div>
  );
}
