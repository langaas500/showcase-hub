"use client";

import React from "react";
import Image from "next/image";

const brand = "ØSTFOLD RENHOLD AS";
const tagline = "Rengjøring i Mysen og Indre Østfold";
const phone = "400 12 345";
const email = "post@ostfoldrenhold.no";

const area = "Mysen, Askim, Spydeberg og omegn";
const openingHours = "Man–fre 07–17, lør 08–14";
const orgnr = "923 456 789";

const telHref = `tel:${phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${email}`;

function IconSparkle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
    </svg>
  );
}

function IconHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
    </svg>
  );
}

function IconTruck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
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

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

export default function RengjoringsPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinkBase = "text-white/90 hover:text-emerald-400 transition-colors text-sm font-semibold";
  const navLinkActive = "text-white border-b-2 border-emerald-500 pb-1 hover:text-emerald-400 transition-colors text-sm font-semibold";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hjem" className="flex items-center gap-2 text-white">
            <IconSparkle className="w-8 h-8" />
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
      <section id="hjem" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
        <Image
          src="/vask-hero.jpg"
          alt="Profesjonell rengjøring"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl text-white">
            <p className="text-emerald-400 font-semibold mb-4 flex items-center gap-2 tracking-widest uppercase text-sm">
              <IconDot className="w-3 h-3" />
              {tagline}
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight">
              RENGJØRING I <span className="text-emerald-500">INDRE ØSTFOLD</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
              Hjemmerengjøring &bull; Bedriftsrenhold &bull; Flyttevask &bull; Vindusvask
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Gratis befaring", "Fast pris", "Fornøyd-garanti"].map((t) => (
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
                Få gratis pristilbud
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
          <SectionTitle kicker="Tjenester" title="Dette tilbyr vi" subtitle="Profesjonell rengjøring for private hjem og bedrifter. Alltid fast pris og fornøyd-garanti." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconHome className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Hjemmerengjøring</h3>
              </div>
              <p className="mt-3 text-gray-600">Regelmessig eller engangs rengjøring av bolig. Kjøkken, bad, støvsuging og våtmopping.</p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconBuilding className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Bedriftsrenhold</h3>
              </div>
              <p className="mt-3 text-gray-600">Daglig eller ukentlig renhold av kontor, butikk og fellesarealer. Skreddersydd avtale.</p>
            </div>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconTruck className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Flyttevask</h3>
              </div>
              <p className="mt-3 text-gray-600">Grundig vask ved inn- og utflytting. Vi tar hele boligen slik at du slipper å tenke på det.</p>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 rounded-xl p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black">Trenger du vindusvask?</h3>
              <p className="mt-2 text-white/80">Vi vasker vinduer innvendig og utvendig. Fast pris per vindu.</p>
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
          <SectionTitle kicker="Tillit" title="Dette sier kundene" subtitle="Fiktive, men realistiske omtaler for demo. Bytt ut med ekte ved levering." />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { quote: "Strålende resultat hver gang. Pålitelige og grundige.", who: "Privatkunde i Mysen" },
              { quote: "Vi byttet renholdsfirma og er kjempefornøyde. Kontoret skinner!", who: "Bedriftskunde, Askim" },
              { quote: "Flyttevasken var perfekt. Fikk tilbake hele depositumet.", who: "Leietaker, Spydeberg" },
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
            <h2 className="mt-3 text-3xl md:text-5xl font-black">Lokalt renholdsfirma du kan stole på</h2>
            <div className="mt-6 w-20 h-1 bg-emerald-500" />

            <p className="mt-7 text-lg text-white/80 leading-relaxed">
              Vi leverer profesjonell rengjøring i{" "}
              <span className="text-white font-semibold">{area}</span>. Fast pris, fornøyd-garanti og alltid grundig arbeid.
            </p>

            <ul className="mt-7 space-y-3 text-white/85">
              {["Gratis og uforpliktende befaring", "Fast pris uten overraskelser", "Fornøyd-garanti på alle oppdrag"].map((x) => (
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

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/vask2.jpg"
              alt="Rengjøring i aksjon"
              fill
              className="object-cover"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle kicker="Enkelt" title="Slik bestiller du" />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Ring eller send melding", text: "Fortell oss hva du trenger vasket. Du får raskt svar." },
              { step: "2", title: "Gratis pristilbud", text: "Vi gir deg en fast pris. Ingen overraskelser etterpå." },
              { step: "3", title: "Vi kommer og vasker", text: "Grundig jobb til avtalt tid. Fornøyd-garanti." },
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
              { q: "Hva koster rengjøring?", a: "Prisen avhenger av boligens størrelse og type oppdrag. Vi gir alltid en fast pris på forhånd etter befaring." },
              { q: "Har dere fornøyd-garanti?", a: "Ja. Er du ikke fornøyd, kommer vi tilbake og gjør jobben på nytt uten ekstra kostnad." },
              { q: "Hvor jobber dere?", a: `Primært ${area}. Ring, så sier vi ja eller nei med en gang.` },
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
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Ring for et pristilbud</h2>
              <p className="mt-5 text-white/80 text-lg">Fast pris, gratis befaring og fornøyd-garanti.</p>

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
              <h3 className="text-2xl font-black">Vi tilbyr</h3>
              <ul className="mt-4 space-y-3 text-white/85">
                {["Hjemmerengjøring (engangs eller fast)", "Bedriftsrenhold", "Flyttevask inn/ut", "Vindusvask", "Byggevask etter renovering"].map((x) => (
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
            <div className="flex items-center gap-2">
              <IconSparkle className="w-6 h-6" />
              <span className="font-bold">{brand}</span>
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
