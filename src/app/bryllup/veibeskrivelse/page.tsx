import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Veibeskrivelse – Emmelin & Martin",
  description:
    "Veibeskrivelse til Herregården Gjestegård for bryllupet til Emmelin og Martin.",
  path: "/bryllup/veibeskrivelse",
});

export default function VeibeskrivelsePage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#b5a48a] text-sm tracking-[0.3em] uppercase mb-4">Finn veien</p>
          <h1 className="text-4xl md:text-5xl font-normal text-[#3d3629]">Veibeskrivelse</h1>
          <div className="mt-3 mx-auto w-16 h-px bg-[#d4c9b8]" />
        </div>

        <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-[#e8e2d9] mb-10">
          <h2 className="text-2xl font-normal text-[#3d3629] mb-4">Herregården Gjestegård</h2>
          <p className="text-[#8b7b6b] text-lg leading-relaxed mb-6">Storgata 42, 1830 Askim</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm tracking-wider uppercase text-[#b5a48a] mb-3" style={{ fontFamily: "sans-serif" }}>Med bil</h3>
              <p className="text-[#8b7b6b] leading-relaxed">
                Følg E18 mot Askim. Ta av ved avkjøring Askim sentrum. Følg skiltene mot sentrum, og ta til venstre i Storgata. Herregården ligger på høyre side etter ca. 200 meter.
              </p>
            </div>
            <div>
              <h3 className="text-sm tracking-wider uppercase text-[#b5a48a] mb-3" style={{ fontFamily: "sans-serif" }}>Parkering</h3>
              <p className="text-[#8b7b6b] leading-relaxed">
                Gratis parkering bak bygningen (innkjøring fra Parkveien). Ekstra parkering ved Askim kulturhus, 3 minutters gange.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-sm border border-[#e8e2d9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d11.162!3d59.590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDM1JzI0LjAiTiAxMcKwMDknNDMuMiJF!5e0!3m2!1sno!2sno!4v1700000000000!5m2!1sno!2sno"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kart til Herregården Gjestegård"
          />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#e8e2d9]">
            <h3 className="text-sm tracking-wider uppercase text-[#b5a48a] mb-3" style={{ fontFamily: "sans-serif" }}>Transport hjem</h3>
            <p className="text-[#8b7b6b] leading-relaxed">
              Det går buss tilbake til Askim sentrum kl. 00:30. Taxi kan bestilles via Østfold Taxi: 69 00 00 00.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#e8e2d9]">
            <h3 className="text-sm tracking-wider uppercase text-[#b5a48a] mb-3" style={{ fontFamily: "sans-serif" }}>Overnatting</h3>
            <p className="text-[#8b7b6b] leading-relaxed">
              Askim Hotell ligger 5 min unna. Vi har reservert rom til rabattert pris &ndash; oppgi &ldquo;Bryllup Emmelin &amp; Martin&rdquo;.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
