"use client";

import Image from "next/image";
import React from "react";

const brand = "ØSTFOLD SNEKKER & INTERIØR";
const tagline = "Snekker i Mysen og Indre Østfold";
const phone = "456 78 901";
const email = "post@ostfoldsnekker.no";

const area = "Mysen, Askim, Trøgstad og omegn";
const openingHours = "Man–fre 07–16";
const orgnr = "912 345 678";

const telHref = `tel:${phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${email}`;

function IconHouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function IconSaw(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.36 2.72l1.42 1.42-5.72 5.71c1.07 1.54 1.22 3.39.32 5.05l-6.36-6.36c1.66-.9 3.51-.75 5.05.32l5.29-5.14M5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09 7.44 7.44-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58z" />
    </svg>
  );
}

function IconCabinet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 2v7h6V4H5zm8 0v7h6V4h-6zm-8 9v7h6v-7H5zm8 0v7h6v-7h-6z" />
    </svg>
  );
}

function IconRuler(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
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
        <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
          <IconDot className="w-3 h-3" />
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle ? <p className="mt-3 text-lg text-gray-600">{subtitle}</p> : null}
    </div>
  );
}

export default function SnekkerPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinkBase = "text-white/90 hover:text-amber-400 transition-colors text-sm font-semibold";
  const navLinkActive = "text-white border-b-2 border-amber-600 pb-1 hover:text-amber-400 transition-colors text-sm font-semibold";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hjem" className="flex items-center gap-2 text-white">
            <IconHouse className="w-8 h-8" />
            <span className="text-lg md:text-xl font-bold">{brand}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#hjem" className={navLinkActive}>Hjem</a>
            <a href="#tjenester" className={navLinkBase}>Tjenester</a>
            <a href="#bevis" className={navLinkBase}>Omtaler</a>
            <a href="#om-oss" className={navLinkBase}>Om oss</a>
            <a href="#kontakt" className={navLinkBase}>Kontakt</a>
            <a href={telHref} className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded font-bold transition-colors">
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
              <a href={telHref} className="mt-2 inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded transition-colors">
                Ring nå: {phone}
              </a>
            </div>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section id="hjem" className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
        {/* Fullscreen background image */}
        <Image
          src="/snekker-hero.jpg"
          alt="Snekkerarbeid og innredning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />

        <div className="relative container mx-auto px-4 py-20 md:py-32 flex items-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
          <div className="max-w-2xl text-white">
            <p className="text-amber-400 font-semibold mb-4 flex items-center gap-2 tracking-widest uppercase text-sm">
              <IconDot className="w-3 h-3" />
              {tagline}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight">
              SNEKKER I <span className="text-amber-500">MYSEN</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
              Kjøkken &bull; Garderobe &bull; Møbler &bull; Innredning
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Gratis befaring", "Skreddersydd", "Kvalitetsarbeid"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  <IconCheck className="w-5 h-5 text-amber-400" />
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a href={telHref} className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white text-lg font-black px-8 py-4 rounded transition-colors">
                Ring nå: {phone}
              </a>
              <a href="#kontakt" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors backdrop-blur-sm">
                Få gratis befaring
              </a>
            </div>
            <p className="mt-5 text-white/70 text-sm">
              Arbeidsområde: <span className="text-white/90 font-semibold">{area}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Tjenester" title="Det vi er best på" subtitle="Skreddersydde løsninger i tre. Fra kjøkken til garderobe – alt tilpasset ditt hjem." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconCabinet className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Kjøkken &amp; garderobe</h3>
              </div>
              <p className="mt-3 text-gray-600">Skreddersydde kjøkkeninnredninger og garderobeløsninger tilpasset ditt rom og stil.</p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconSaw className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Møbler på mål</h3>
              </div>
              <p className="mt-3 text-gray-600">Bord, hyller, benker og spesialmøbler bygget etter dine ønsker og mål.</p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconRuler className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Innredning &amp; lister</h3>
              </div>
              <p className="mt-3 text-gray-600">Panel, lister, innebygde skap og detaljarbeid som gir rommet karakter.</p>
            </div>
          </div>
          <div className="mt-8 bg-gray-900 rounded-xl p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black">Småjobber er velkomne</h3>
              <p className="mt-2 text-white/80">En hylle, en list eller et lite prosjekt? Vi tar det gjerne.</p>
            </div>
            <a href={telHref} className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-black px-8 py-4 rounded transition-colors">
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
              { quote: "Fantastisk kjøkken! Perfekt tilpasset rommet vårt. Veldig fornøyd.", who: "Privatkunde i Mysen" },
              { quote: "Bygget garderobeløsning som utnytter hver centimeter. Imponerende arbeid.", who: "Kunde i Askim" },
              { quote: "Profesjonell og punktlig. Levert som avtalt med topp kvalitet.", who: "Privatkunde, Trøgstad" },
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
              <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <IconDot className="w-3 h-3" />
                Om oss
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Håndverk med sjel</h2>
              <div className="mt-6 w-20 h-1 bg-amber-600" />
              <p className="mt-7 text-lg text-white/80 leading-relaxed">
                Vi er et lokalt snekkerverksted som lager skreddersydde løsninger i{" "}
                <span className="text-white font-semibold">{area}</span>. Kvalitet, presisjon og godt håndverk er det vi lever for.
              </p>
              <ul className="mt-7 space-y-3 text-white/85">
                {["Gratis og uforpliktende befaring", "Alt skreddersydd etter dine mål", "Kvalitetsmaterialer og solid finish"].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <IconCheck className="w-6 h-6 text-amber-400 mt-0.5" />
                    <span className="text-base">{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href={telHref} className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-black px-8 py-4 rounded transition-colors">
                  Ring nå: {phone}
                </a>
                <a href="#kontakt" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors">
                  Kontaktinfo
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-[420px]">
              <Image src="/snekker2.jpg" alt="Snekkerarbeid" fill className="object-cover rounded-xl" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Enkelt" title="Slik får du jobben gjort" subtitle="Fra idé til ferdig produkt – vi tar deg gjennom hele prosessen." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Ring eller send melding", text: "Fortell oss hva du ønsker. Vi svarer raskt." },
              { step: "2", title: "Befaring og skisse", text: "Vi kommer hjem til deg, tar mål og lager et forslag." },
              { step: "3", title: "Produksjon og montering", text: "Vi bygger og monterer – ferdig til avtalt tid." },
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
              { q: "Kan dere lage noe helt spesielt?", a: "Ja! Alt vi lager er skreddersydd. Kom med ideen din, så finner vi løsningen." },
              { q: "Hvor lang leveringstid?", a: "Avhenger av prosjektet. Enkle jobber tar noen dager, større prosjekter 2-4 uker." },
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
              <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <IconDot className="w-3 h-3" />
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Ring, så tar vi det derfra</h2>
              <p className="mt-5 text-white/80 text-lg">Gratis befaring, tydelig pris og skreddersydd resultat.</p>
              <div className="mt-8 flex flex-col gap-3">
                <a href={telHref} className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-black px-8 py-4 rounded transition-colors text-lg">
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
                {["Gratis og uforpliktende befaring", "Alt skreddersydd etter dine mål", "Kvalitetsmaterialer og finish", "Småjobber velkomne"].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <IconCheck className="w-6 h-6 text-amber-400 mt-0.5" />
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
              <a href="#" aria-label="Facebook" className="hover:text-amber-500 transition-colors"><IconFacebook className="w-8 h-8" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-amber-500 transition-colors"><IconInstagram className="w-8 h-8" /></a>
            </div>
            <div className="text-center">
              <a href={mailHref} className="text-gray-300 hover:text-amber-500 text-sm transition-colors">{email}</a>
              <p className="text-gray-500 text-xs mt-1">{brand} &bull; Org.nr {orgnr} &bull; {area}</p>
            </div>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {brand}</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Call Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gray-900/95 backdrop-blur border-t border-white/10 px-4 py-3">
          <a href={telHref} className="w-full inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-black py-4 rounded-lg text-lg">
            Ring nå: {phone}
          </a>
        </div>
      </div>
      <div className="md:hidden h-20" aria-hidden="true" />
    </div>
  );
}
