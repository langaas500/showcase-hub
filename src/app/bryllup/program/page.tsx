import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Program – Emmelin & Martin",
  description:
    "Dagens program for bryllupet til Emmelin og Martin, 16. august 2025.",
  path: "/bryllup/program",
});

const program = [
  { time: "13:45", title: "Ankomst", description: "Gjestene ankommer Herregården Gjestegård. Velkommen med et glass musserende i hagen." },
  { time: "14:00", title: "Vielsen", description: "Seremonien finner sted i hagen (innendørs ved regn). Vi lover hverandre alt." },
  { time: "14:30", title: "Gratulasjon", description: "Tid for klemmer, tårer og gratulasjoner. Fotograf er til stede." },
  { time: "15:00", title: "Mingling og aperitiff", description: "Nyt drikke og snacks mens brudeparet tar bilder. Kubb og spill i hagen." },
  { time: "16:00", title: "Middag", description: "Treretters middag i festsalen. Bordkort ved inngangen." },
  { time: "18:00", title: "Taler", description: "Ord fra de nærmeste. Har du en tale? Gi beskjed til toastmasteren." },
  { time: "19:00", title: "Kakeseremoni", description: "Bryllupskaken skjæres. Kaffe og dessert serveres." },
  { time: "20:00", title: "Brudevals", description: "Emmelin og Martin åpner dansegulvet." },
  { time: "20:30", title: "Fest og dans", description: "DJ spiller utover kvelden. Dansegulvet er åpent for alle!" },
  { time: "00:00", title: "Takk for i kveld", description: "Bussen går kl. 00:30 tilbake til sentrum. Vi takker for en magisk dag." },
];

export default function ProgramPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#b5a48a] text-sm tracking-[0.3em] uppercase mb-4">16. august 2025</p>
          <h1 className="text-4xl md:text-5xl font-normal text-[#3d3629]">Dagens program</h1>
          <div className="mt-3 mx-auto w-16 h-px bg-[#d4c9b8]" />
          <p className="mt-6 text-[#8b7b6b] italic">En dag fylt med kjærlighet, latter og gode minner.</p>
        </div>

        <div className="relative">
          <div className="absolute left-[60px] top-0 bottom-0 w-px bg-[#e8e2d9] hidden md:block" />
          <div className="space-y-10">
            {program.map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10">
                <div className="shrink-0 w-[60px] text-right">
                  <span className="text-[#8b7355] font-semibold text-lg" style={{ fontFamily: "sans-serif" }}>{item.time}</span>
                </div>
                <div className="relative pt-1">
                  <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-[#8b7355] border-2 border-[#faf8f5] hidden md:block" />
                  <h3 className="text-xl font-semibold text-[#3d3629] mb-1" style={{ fontFamily: "sans-serif" }}>{item.title}</h3>
                  <p className="text-[#8b7b6b] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
