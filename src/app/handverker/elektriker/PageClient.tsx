"use client";

import Image from "next/image";
import React from "react";

const brand = "INDRE ØSTFOLD ELEKTRO AS";
const tagline = "Elektriker i Mysen og Indre Østfold";
const phone = "987 65 432";
const email = "post@ioe-elektro.no";

const area = "Mysen, Askim, Trøgstad og omegn";
const openingHours = "Man–fre 07–16";
const orgnr = "923 456 789";

const telHref = `tel:${phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${email}`;

function IconHouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function IconBolt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </svg>
  );
}

function IconLight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
    </svg>
  );
}

function IconSmartHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
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
        <p className="text-yellow-500 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
          <IconDot className="w-3 h-3" />
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle ? <p className="mt-3 text-lg text-gray-600">{subtitle}</p> : null}
    </div>
  );
}

export default function ElektrikerPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinkBase = "text-white/90 hover:text-yellow-400 transition-colors text-sm font-semibold";
  const navLinkActive = "text-white border-b-2 border-yellow-500 pb-1 hover:text-yellow-400 transition-colors text-sm font-semibold";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hjem" className="flex items-center gap-2 text-white">
            <IconBolt className="w-8 h-8 text-yellow-400" />
            <span className="text-lg md:text-xl font-bold">{brand}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#hjem" className={navLinkActive}>Hjem</a>
            <a href="#tjenester" className={navLinkBase}>Tjenester</a>
            <a href="#bevis" className={navLinkBase}>Omtaler</a>
            <a href="#om-oss" className={navLinkBase}>Om oss</a>
            <a href="#kontakt" className={navLinkBase}>Kontakt</a>
            <a href={telHref} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded font-bold transition-colors">
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
              <a href={telHref} className="mt-2 inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded transition-colors">
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
              <p className="text-yellow-400 font-semibold mb-4 flex items-center gap-2 tracking-widest uppercase text-sm">
                <IconDot className="w-3 h-3" />
                {tagline}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight">
                ELEKTRIKER I <span className="text-yellow-400">MYSEN</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                El-installasjon &bull; Sikringsskap &bull; Smarthus &bull; Feilsøking
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Autorisert", "Gratis befaring", "Rask respons"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm font-semibold">
                    <IconCheck className="w-5 h-5 text-yellow-400" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a href={telHref} className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg font-black px-8 py-4 rounded transition-colors">
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
              <Image src="/elektro-hero.jpg" alt="Elektriker i arbeid" fill className="object-cover rounded-xl shadow-2xl" priority />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Tjenester" title="Elektriske jobber vi tar" subtitle="Fra sikringsskap til smarthus. Vi fikser alt som har med strøm å gjøre." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconBolt className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">El-installasjon</h3>
              </div>
              <p className="mt-3 text-gray-600">Nyinstallasjon, oppgradering av sikringsskap, stikkontakter og kabling for bolig og næring.</p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconLight className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Lys &amp; belysning</h3>
              </div>
              <p className="mt-3 text-gray-600">Planlegging og installasjon av innvendig og utvendig belysning. LED, spots og effektlys.</p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconSmartHome className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Smarthus</h3>
              </div>
              <p className="mt-3 text-gray-600">Styring av lys, varme og alarm fra mobilen. Vi setter opp og integrerer smarthus-løsninger.</p>
            </div>
          </div>
          <div className="mt-8 bg-gray-900 rounded-xl p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black">Feilsøking og akutt</h3>
              <p className="mt-2 text-white/80">Strømmen gikk? Jordfeil? Vi finner feilen og fikser den raskt.</p>
            </div>
            <a href={telHref} className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black px-8 py-4 rounded transition-colors">
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
              { quote: "Oppgraderte hele sikringsskapet. Ryddig arbeid og alt fungerer perfekt.", who: "Privatkunde i Mysen" },
              { quote: "Installerte smarthus-styring i hele boligen. Utrolig fornøyd!", who: "Kunde i Askim" },
              { quote: "Rask feilsøking og løsning da vi mistet strømmen. Anbefales!", who: "Privatkunde, Trøgstad" },
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
              <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <IconDot className="w-3 h-3" />
                Om oss
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Autorisert og pålitelig</h2>
              <div className="mt-6 w-20 h-1 bg-yellow-500" />
              <p className="mt-7 text-lg text-white/80 leading-relaxed">
                Vi er en autorisert elektrikerbedrift i{" "}
                <span className="text-white font-semibold">{area}</span>. Sikkerhet, kvalitet og god kommunikasjon er grunnlaget for alt vi gjør.
              </p>
              <ul className="mt-7 space-y-3 text-white/85">
                {["Autorisert installatør", "Gratis og uforpliktende befaring", "Dokumentasjon og samsvarserklæring"].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <IconCheck className="w-6 h-6 text-yellow-400 mt-0.5" />
                    <span className="text-base">{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href={telHref} className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black px-8 py-4 rounded transition-colors">
                  Ring nå: {phone}
                </a>
                <a href="#kontakt" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors">
                  Kontaktinfo
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-[420px]">
              <Image src="/elektro2.jpg" alt="Elektrikerarbeid" fill className="object-cover rounded-xl" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Enkelt" title="Slik får du jobben gjort" subtitle="Trygg prosess fra start til ferdig samsvarserklæring." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Ring eller send melding", text: "Beskriv kort hva du trenger. Du får raskt svar." },
              { step: "2", title: "Befaring og tilbud", text: "Vi ser på jobben og gir deg et tydelig tilbud." },
              { step: "3", title: "Utførelse og dokumentasjon", text: "Vi gjør jobben, rydder og leverer samsvarserklæring." },
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
              { q: "Er dere autorisert?", a: "Ja. Vi er registrert i Elvirksomhetsregisteret og leverer samsvarserklæring på alt arbeid." },
              { q: "Tar dere småjobber?", a: "Absolutt. Ekstra stikkontakt, bytting av sikring eller feilsøking – bare ring." },
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
              <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <IconDot className="w-3 h-3" />
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Ring, så tar vi det derfra</h2>
              <p className="mt-5 text-white/80 text-lg">Raskt svar, gratis befaring og tydelig tilbud. Ingen stress.</p>
              <div className="mt-8 flex flex-col gap-3">
                <a href={telHref} className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black px-8 py-4 rounded transition-colors text-lg">
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
                {["Autorisert installatør", "Gratis og uforpliktende befaring", "Samsvarserklæring på alt arbeid", "Feilsøking og akuttoppdrag"].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <IconCheck className="w-6 h-6 text-yellow-400 mt-0.5" />
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
              <a href="#" aria-label="Facebook" className="hover:text-yellow-500 transition-colors"><IconFacebook className="w-8 h-8" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-500 transition-colors"><IconInstagram className="w-8 h-8" /></a>
            </div>
            <div className="text-center">
              <a href={mailHref} className="text-gray-300 hover:text-yellow-500 text-sm transition-colors">{email}</a>
              <p className="text-gray-500 text-xs mt-1">{brand} &bull; Org.nr {orgnr} &bull; {area}</p>
            </div>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {brand}</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Call Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gray-900/95 backdrop-blur border-t border-white/10 px-4 py-3">
          <a href={telHref} className="w-full inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-black py-4 rounded-lg text-lg">
            Ring nå: {phone}
          </a>
        </div>
      </div>
      <div className="md:hidden h-20" aria-hidden="true" />
    </div>
  );
}
