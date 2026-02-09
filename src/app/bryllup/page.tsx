import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Emmelin & Martin – 16. august 2025",
  description:
    "Bryllupsside for Emmelin og Martin. Program, veibeskrivelse, bildedeling og album.",
  path: "/bryllup",
});

export default function BryllupHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>

        <p className="text-[#b5a48a] text-sm tracking-[0.3em] uppercase mb-6">Vi gifter oss</p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-[#3d3629] leading-tight">
          Emmelin <span className="text-[#b5a48a] font-light">&amp;</span> Martin
        </h1>

        <div className="mt-8 flex items-center justify-center gap-4 text-[#8b7b6b]">
          <div className="h-px w-12 bg-[#d4c9b8]" />
          <p className="text-lg tracking-wider">16. august 2025</p>
          <div className="h-px w-12 bg-[#d4c9b8]" />
        </div>

        <p className="mt-8 max-w-lg mx-auto text-[#8b7b6b] text-lg leading-relaxed italic">
          &ldquo;To hjerter, én historie. Vi gleder oss til å dele denne dagen med dere.&rdquo;
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/bryllup/program"
            className="px-8 py-3 border border-[#8b7355] text-[#8b7355] text-sm tracking-wider uppercase hover:bg-[#8b7355] hover:text-white transition-colors"
          >
            Dagens program
          </Link>
          <Link
            href="/bryllup/bilder"
            className="px-8 py-3 bg-[#8b7355] text-white text-sm tracking-wider uppercase hover:bg-[#7a6548] transition-colors"
          >
            Del bilder
          </Link>
        </div>
      </section>

      {/* Praktisk info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b5a48a] text-sm tracking-[0.3em] uppercase mb-4">Praktisk info</p>
          <h2 className="text-3xl md:text-4xl font-normal text-[#3d3629]">Alt du trenger å vite</h2>
          <div className="mt-3 mx-auto w-16 h-px bg-[#d4c9b8]" />

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-3xl mb-3">&#128336;</div>
              <h3 className="text-lg font-semibold text-[#3d3629] mb-2" style={{ fontFamily: "sans-serif" }}>Tid</h3>
              <p className="text-[#8b7b6b] leading-relaxed">
                Vielsen begynner kl. 14:00.<br />
                Vær på plass senest 13:45.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">&#128205;</div>
              <h3 className="text-lg font-semibold text-[#3d3629] mb-2" style={{ fontFamily: "sans-serif" }}>Sted</h3>
              <p className="text-[#8b7b6b] leading-relaxed">
                Herregården Gjestegård<br />
                Storgata 42, 1830 Askim
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">&#128084;</div>
              <h3 className="text-lg font-semibold text-[#3d3629] mb-2" style={{ fontFamily: "sans-serif" }}>Antrekk</h3>
              <p className="text-[#8b7b6b] leading-relaxed">
                Dress / pent antrekk.<br />
                Tenk sommerfest i hage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program preview */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#b5a48a] text-sm tracking-[0.3em] uppercase mb-4">Dagen</p>
          <h2 className="text-3xl md:text-4xl font-normal text-[#3d3629]">Kort oversikt</h2>
          <div className="mt-3 mx-auto w-16 h-px bg-[#d4c9b8]" />

          <div className="mt-12 space-y-6 text-left">
            {[
              { time: "13:45", event: "Gjestene ankommer" },
              { time: "14:00", event: "Vielsen" },
              { time: "15:00", event: "Gratulasjon og mingling" },
              { time: "16:00", event: "Middag serveres" },
              { time: "19:00", event: "Taler og kakeseremoni" },
              { time: "21:00", event: "Dans og fest" },
            ].map((item) => (
              <div key={item.time} className="flex items-baseline gap-6 border-b border-[#e8e2d9] pb-4">
                <span className="text-[#8b7355] font-semibold w-16 shrink-0" style={{ fontFamily: "sans-serif" }}>{item.time}</span>
                <span className="text-[#3d3629] text-lg">{item.event}</span>
              </div>
            ))}
          </div>

          <Link
            href="/bryllup/program"
            className="mt-10 inline-block text-[#8b7355] text-sm tracking-wider uppercase border-b border-[#8b7355] pb-0.5 hover:text-[#7a6548] transition-colors"
          >
            Se full program &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#3d3629] text-white text-center">
        <p className="text-[#d4c9b8] text-sm tracking-[0.3em] uppercase mb-4">Del minnene</p>
        <h2 className="text-3xl md:text-4xl font-normal">Ta vare på øyeblikkene</h2>
        <p className="mt-4 text-[#b5a48a] max-w-md mx-auto leading-relaxed">
          Last opp bilder fra dagen, se andres minner og bygg albumet sammen.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/bryllup/bilder"
            className="px-8 py-3 bg-[#8b7355] text-white text-sm tracking-wider uppercase hover:bg-[#a0865e] transition-colors"
          >
            Last opp bilder
          </Link>
          <Link
            href="/bryllup/album"
            className="px-8 py-3 border border-[#8b7355] text-[#d4c9b8] text-sm tracking-wider uppercase hover:bg-[#8b7355] hover:text-white transition-colors"
          >
            Se albumet
          </Link>
          <Link
            href="/bryllup/veibeskrivelse"
            className="px-8 py-3 border border-[#8b7355] text-[#d4c9b8] text-sm tracking-wider uppercase hover:bg-[#8b7355] hover:text-white transition-colors"
          >
            Veibeskrivelse
          </Link>
        </div>
      </section>
    </div>
  );
}
