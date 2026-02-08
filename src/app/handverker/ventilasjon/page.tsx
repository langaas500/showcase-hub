"use client";

import Image from "next/image";
import React from "react";

const brand = "GLOMMA VENTILASJON AS";
const tagline = "Ventilasjon i Mysen og Indre Østfold";
const phone = "412 34 567";
const email = "post@glommavent.no";

const area = "Mysen, Askim, Trøgstad og omegn";
const openingHours = "Man–fre 07–16";
const orgnr = "934 567 890";

const telHref = `tel:${phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${email}`;

function IconHouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function IconAir(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S17 15.33 17 14.5h-2c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
    </svg>
  );
}

function IconFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </svg>
  );
}

function IconThermostat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13V9c0-.6.4-1 1-1z" fill="currentColor" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="2" />
      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="8" />
    </svg>
  );
}

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="text-emerald-500 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
          <IconDot className="w-3 h-3" />
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle ? <p className="mt-3 text-lg text-gray-600">{subtitle}</p> : null}
    </div>
  );
}

export default function VentilasjonPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinkBase = "text-white/90 hover:text-emerald-400 transition-colors text-sm font-semibold";
  const navLinkActive = "text-white border-b-2 border-emerald-500 pb-1 hover:text-emerald-400 transition-colors text-sm font-semibold";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hjem" className="flex items-center gap-2 text-white">
            <IconAir className="w-8 h-8 text-emerald-400" />
            <span className="text-lg md:text-xl font-bold">{brand}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#hjem" className={navLinkActive}>Hjem</a>
            <a href="#tjenester" className={navLinkBase}>Tjenester</a>
            <a href="#bevis" className={navLinkBase}>Omtaler</a>
            <a href="#om-oss" className={navLinkBase}>Om oss</a>
            <a href="#kontakt" className={navLinkBase}>Kontakt</a>
            <a href={telHref} className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded font-bold transition-colors">
              Ring nå: {phone}
            </a>
          </nav>

          <button className="md:hidden text-white" aria-label="Meny" onClick={() => setMobileOpen((v) => !v)}>
            <IconMenu className="w-6 h-6" />
          </button>
        </div>

        {mobileOpen ? (
          <div className="md:hidden border-t border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a href="#hjem" className="text-white/90 font-semibold" onClick={() => setMobileOpen(false)}>Hjem</a>
              <a href="#tjenester" className="text-white/90 font-semibold" onClick={() => setMobileOpen(false)}>Tjenester</a>
              <a href="#bevis" className="text-white/90 font-semibold" onClick={() => setMobileOpen(false)}>Omtaler</a>
              <a href="#om-oss" className="text-white/90 font-semibold" onClick={() => setMobileOpen(false)}>Om oss</a>
              <a href="#kontakt" className="text-white/90 font-semibold" onClick={() => setMobileOpen(false)}>Kontakt</a>
              <a href={telHref} className="mt-2 inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded transition-colors">
                Ring nå: {phone}
              </a>
            </div>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section id="hjem" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="text-white">
              <p className="text-emerald-400 font-semibold mb-4 flex items-center gap-2 tracking-widest uppercase text-sm">
                <IconDot className="w-3 h-3" />
                {tagline}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight">
                VENTILASJON I <span className="text-emerald-400">MYSEN</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                Balansert ventilasjon &bull; Avtrekk &bull; Kanaler &bull; Service
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Godt inneklima", "Gratis befaring", "Energieffektivt"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm font-semibold">
                    <IconCheck className="w-5 h-5 text-emerald-400" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a href={telHref} className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-black px-8 py-4 rounded transition-colors">
                  Ring nå: {phone}
                </a>
                <a href="#kontakt" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors">
                  Få gratis befaring
                </a>
              </div>
              <p className="mt-5 text-white/70 text-sm">
                Arbeidsområde: <span className="text-white/90 font-semibold">{area}</span>
              </p>
            </div>
            <div className="relative h-[360px] md:h-[520px] lg:h-[620px]">
              <Image src="/ventilasjon-hero.jpg" alt="Ventilasjonssystem" fill className="object-cover rounded-xl shadow-2xl" priority />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Tjenester" title="Ventilasjonsjobber vi tar" subtitle="Godt inneklima starter med riktig ventilasjon. Vi monterer, reparerer og vedlikeholder." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconAir className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Balansert ventilasjon</h3>
              </div>
              <p className="mt-3 text-gray-600">Installasjon og oppgradering av balansert ventilasjon med varmegjenvinning for bolig og næring.</p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconFilter className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Filtrering &amp; kanaler</h3>
              </div>
              <p className="mt-3 text-gray-600">Rengjøring og bytte av filter, kanalarbeid og optimalisering av eksisterende anlegg.</p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconThermostat className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Inneklima &amp; energi</h3>
              </div>
              <p className="mt-3 text-gray-600">Energirådgivning, inneklimamålinger og tiltak for bedre luftkvalitet og lavere strømregning.</p>
            </div>
          </div>
          <div className="mt-8 bg-gray-900 rounded-xl p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black">Service og vedlikehold</h3>
              <p className="mt-2 text-white/80">Regelmessig service forlenger levetiden og sikrer godt inneklima.</p>
            </div>
            <a href={telHref} className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-black px-8 py-4 rounded transition-colors">
              Ring nå: {phone}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="bevis" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Tillit" title="Dette sier kundene" subtitle="Fiktive, men realistiske omtaler for demo." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { quote: "Installerte balansert ventilasjon i hele huset. Enorm forskjell på inneklimaet!", who: "Privatkunde i Mysen" },
              { quote: "Profesjonell service på eksisterende anlegg. Mye bedre luftkvalitet nå.", who: "Bedriftskunde i Askim" },
              { quote: "Ryddig jobb med nye kanaler i kjelleren. Anbefales varmt.", who: "Privatkunde, Trøgstad" },
            ].map((t) => (
              <div key={t.who} className="rounded-xl border border-gray-200 p-7 shadow-sm">
                <p className="text-gray-900 text-lg font-semibold">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm text-gray-500">{t.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="om-oss" className="py-18 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-400 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <IconDot className="w-3 h-3" />
                Om oss
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Frisk luft, lokalt levert</h2>
              <div className="mt-6 w-20 h-1 bg-emerald-500" />
              <p className="mt-7 text-lg text-white/80 leading-relaxed">
                Vi er spesialister på ventilasjon i{" "}
                <span className="text-white font-semibold">{area}</span>. Godt inneklima, energieffektivitet og fornøyde kunder er det vi jobber for.
              </p>
              <ul className="mt-7 space-y-3 text-white/85">
                {["Gratis og uforpliktende befaring", "Erfaring med bolig og næring", "Serviceavtaler for bekymringsfritt inneklima"].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <IconCheck className="w-6 h-6 text-emerald-400 mt-0.5" />
                    <span className="text-base">{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href={telHref} className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-black px-8 py-4 rounded transition-colors">
                  Ring nå: {phone}
                </a>
                <a href="#kontakt" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors">
                  Kontaktinfo
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-[420px]">
              <Image src="/ventilasjon2.jpg" alt="Ventilasjonssystem" fill className="object-cover rounded-xl" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Enkelt" title="Slik får du jobben gjort" subtitle="Fra dårlig luft til frisk pust – vi tar deg gjennom prosessen." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Ring eller send melding", text: "Beskriv kort hva du trenger. Du får raskt svar." },
              { step: "2", title: "Befaring og vurdering", text: "Vi ser på boligen og anbefaler riktig løsning." },
              { step: "3", title: "Installasjon og innregulering", text: "Vi monterer, innregulerer og sørger for optimal drift." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-7 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-black">{s.step}</div>
                <h3 className="mt-4 text-xl font-black text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Spørsmål" title="Ofte spurt" />
          <div className="mt-8 max-w-3xl space-y-4">
            {[
              { q: "Trenger jeg balansert ventilasjon?", a: "De fleste nyere boliger bør ha det. Vi vurderer behovet gratis ved befaring." },
              { q: "Hvor ofte bør filter byttes?", a: "Normalt 1-2 ganger i året. Vi tilbyr serviceavtale som tar seg av dette." },
              { q: "Hvor jobber dere?", a: `Primært ${area}. Spør, så sier vi ja eller nei med en gang.` },
            ].map((f) => (
              <details key={f.q} className="group rounded-xl border border-gray-200 p-5 bg-stone-50">
                <summary className="cursor-pointer list-none font-black text-gray-900 flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-gray-500 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-emerald-400 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <IconDot className="w-3 h-3" />
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Ring, så tar vi det derfra</h2>
              <p className="mt-5 text-white/80 text-lg">Gratis befaring, tydelig tilbud og godt inneklima. Bare ring.</p>
              <div className="mt-8 flex flex-col gap-3">
                <a href={telHref} className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-black px-8 py-4 rounded transition-colors text-lg">
                  {phone}
                </a>
                <a href={mailHref} className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors">
                  {email}
                </a>
              </div>
              <div className="mt-8 text-white/80">
                <p><span className="font-semibold text-white">Arbeidsområde:</span> {area}</p>
                <p className="mt-2"><span className="font-semibold text-white">Åpent:</span> {openingHours}</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <h3 className="text-2xl font-black">Kort oppsummering</h3>
              <ul className="mt-4 space-y-3 text-white/85">
                {["Gratis og uforpliktende befaring", "Erfaring med bolig og næring", "Serviceavtaler tilgjengelig", "Energieffektive løsninger"].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <IconCheck className="w-6 h-6 text-emerald-400 mt-0.5" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/60">Demo-info: Org.nr {orgnr}. Bytt til kundens ekte info ved levering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="#" aria-label="Facebook" className="hover:text-emerald-500 transition-colors"><IconFacebook className="w-8 h-8" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-emerald-500 transition-colors"><IconInstagram className="w-8 h-8" /></a>
            </div>
            <div className="text-center">
              <a href={mailHref} className="text-gray-300 hover:text-emerald-500 text-sm transition-colors">{email}</a>
              <p className="text-gray-500 text-xs mt-1">{brand} &bull; Org.nr {orgnr} &bull; {area}</p>
            </div>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {brand}</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Call Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gray-900/95 backdrop-blur border-t border-white/10 px-4 py-3">
          <a href={telHref} className="w-full inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-lg text-lg">
            Ring nå: {phone}
          </a>
        </div>
      </div>
      <div className="md:hidden h-20" aria-hidden="true" />
    </div>
  );
}
