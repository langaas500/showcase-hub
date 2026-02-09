"use client";

import Image from "next/image";
import React from "react";

const brand = "MYSEN VENTILASJON";
const tagline = "Ventilasjon i Mysen og Indre Østfold";
const phone = "913 22 440";
const email = "post@mysenventilasjon.no";

const area = "Mysen, Askim, Trøgstad og omegn";
const openingHours = "Man–fre 07–16";
const orgnr = "999 999 999";

const telHref = `tel:${phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${email}`;

function IconHouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function IconFan(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-1.5-3.5C10.5 5 8.7 3 6.5 3S2 5 2 7.5c0 2.68 3.39 3.4 5.5 4.38V12a5.5 5.5 0 0 0 3-1.5zM17.5 3c-2.2 0-4 2-4 4.5 0 .17.01.34.03.5A5.5 5.5 0 0 0 12 12v-.12c2.11-.98 5.5-1.7 5.5-4.38C17.5 5 19.7 3 17.5 3zM7.5 14.62C7.5 19 5.3 21 7.5 21s4-2 4-4.5c0-.17-.01-.34-.03-.5A5.5 5.5 0 0 0 12 12v.12c-2.11.98-5.5 1.7-5.5 4.38V14.62zm9 0c0 2.68-3.39 3.4-5.5 4.38v-.12c0-2.5 1.8-4.5 4-4.5s4.5 2.32 4.5 5c0-2.2-1.8-4.5-4-4.5l1-.26z" />
    </svg>
  );
}

function IconFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.36 2.72l1.42 1.42-5.72 5.71c1.07 1.54 1.22 3.39.32 5.05l-6.36-6.36c1.66-.9 3.51-.75 5.05.32l5.29-5.14M5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09 7.44 7.44-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58z" />
    </svg>
  );
}

function IconWrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13V9c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="text-[#d76b1f] font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
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

  const navLinkBase =
    "text-white/90 hover:text-[#e8863a] transition-colors text-sm font-semibold";
  const navLinkActive =
    "text-white border-b-2 border-[#d76b1f] pb-1 hover:text-[#e8863a] transition-colors text-sm font-semibold";

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
            <a href="#hjem" className={navLinkActive}>
              Hjem
            </a>
            <a href="#tjenester" className={navLinkBase}>
              Tjenester
            </a>
            <a href="#bevis" className={navLinkBase}>
              Omtaler
            </a>
            <a href="#om-oss" className={navLinkBase}>
              Om oss
            </a>
            <a href="#kontakt" className={navLinkBase}>
              Kontakt
            </a>

            <a
              href={telHref}
              className="bg-[#d76b1f] hover:bg-[#b85a18] text-white px-6 py-2 rounded font-bold transition-colors"
            >
              Ring nå: {phone}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            aria-label="Meny"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <IconMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen ? (
          <div className="md:hidden border-t border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a href="#hjem" className="text-white/90 font-semibold" onClick={() => setMobileOpen(false)}>
                Hjem
              </a>
              <a
                href="#tjenester"
                className="text-white/90 font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Tjenester
              </a>
              <a
                href="#bevis"
                className="text-white/90 font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Omtaler
              </a>
              <a
                href="#om-oss"
                className="text-white/90 font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Om oss
              </a>
              <a
                href="#kontakt"
                className="text-white/90 font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Kontakt
              </a>

              <a
                href={telHref}
                className="mt-2 inline-flex items-center justify-center bg-[#d76b1f] hover:bg-[#b85a18] text-white font-bold px-6 py-3 rounded transition-colors"
              >
                📞 Ring nå: {phone}
              </a>
            </div>
          </div>
        ) : null}
      </header>

      {/* Hero Section */}
      <section id="hjem" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left: Text */}
            <div className="text-white">
              <p className="text-[#e8863a] font-semibold mb-4 flex items-center gap-2 tracking-widest uppercase text-sm">
                <IconDot className="w-3 h-3" />
                {tagline}
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight">
                VENTILASJON I <span className="text-[#d76b1f]">MYSEN</span>
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-white/90 mb-6">
                Service • Filterbytte • Kanalrens • Montering
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Gratis befaring", "Ryddig pris", "Rask respons"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm font-semibold"
                  >
                    <IconCheck className="w-5 h-5 text-[#e8863a]" />
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center bg-[#d76b1f] hover:bg-[#b85a18] text-white text-lg font-black px-8 py-4 rounded transition-colors"
                >
                  📞 Ring nå: {phone}
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors"
                >
                  Få gratis befaring
                </a>
              </div>

              <p className="mt-5 text-white/70 text-sm">
                Arbeidsområde: <span className="text-white/90 font-semibold">{area}</span>
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative h-[360px] md:h-[520px] lg:h-[620px]">
              <Image
                src="/ventilasjon-hero.jpg"
                alt="Ventilasjonsarbeid"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            kicker="Tjenester"
            title="Konkrete jobber vi tar"
            subtitle="Bedre luft gir bedre helse. Her er de vanligste jobbene vi gjør."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconFan className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Service &amp; filterbytte</h3>
              </div>
              <p className="mt-3 text-gray-600">
                Regelmessig service og bytte av filter sikrer god luftkvalitet og lavere strømforbruk.
              </p>
            </div>

            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconFilter className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Kanalrens</h3>
              </div>
              <p className="mt-3 text-gray-600">
                Rensing av ventilasjonskanaler for bedre luftgjennomstrømning og hygiene.
              </p>
            </div>

            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <IconWrench className="w-10 h-10 text-gray-900" />
                <h3 className="text-xl font-black text-gray-900">Montering &amp; utbedring</h3>
              </div>
              <p className="mt-3 text-gray-600">
                Installasjon av nytt anlegg eller utbedring av eksisterende. Bolig og små næringslokaler.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 rounded-xl p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black">Serviceavtaler tilgjengelig</h3>
              <p className="mt-2 text-white/80">
                Fast avtale gir forutsigbar pris og jevnlig vedlikehold uten å tenke på det.
              </p>
            </div>
            <a
              href={telHref}
              className="inline-flex items-center justify-center bg-[#d76b1f] hover:bg-[#b85a18] text-white font-black px-8 py-4 rounded transition-colors"
            >
              📞 Ring nå: {phone}
            </a>
          </div>
        </div>
      </section>

      {/* Proof / Testimonials */}
      <section id="bevis" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            kicker="Tillit"
            title="Dette sier kundene"
            subtitle="Fiktive, men realistiske omtaler for demo. Når du selger: bytt ut med ekte."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Merket stor forskjell på luftkvaliteten etter service. Veldig fornøyd.",
                who: "Privatkunde i Mysen",
              },
              {
                quote:
                  "Rask og ryddig jobb med kanalrens. God kommunikasjon hele veien.",
                who: "Kunde i Indre Østfold",
              },
              {
                quote:
                  "Installerte nytt anlegg effektivt. Anbefales varmt!",
                who: "Privatkunde, Askim",
              },
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
              <p className="text-[#e8863a] font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <IconDot className="w-3 h-3" />
                Om oss
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Lokalt og pålitelig</h2>
              <div className="mt-6 w-20 h-1 bg-[#d76b1f]" />

              <p className="mt-7 text-lg text-white/80 leading-relaxed">
                Vi er en lokal ventilasjonsbedrift som tar oppdrag i{" "}
                <span className="text-white font-semibold">{area}</span>. Hos oss får du ryddig arbeid,
                tydelig kommunikasjon og en pris du kan stole på.
              </p>

              <ul className="mt-7 space-y-3 text-white/85">
                {[
                  "Gratis og uforpliktende befaring",
                  "Tydelig avtale før oppstart",
                  "Ryddig sluttresultat, med opprydding",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <IconCheck className="w-6 h-6 text-[#e8863a] mt-0.5" />
                    <span className="text-base">{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center bg-[#d76b1f] hover:bg-[#b85a18] text-white font-black px-8 py-4 rounded transition-colors"
                >
                  📞 Ring nå: {phone}
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors"
                >
                  Kontaktinfo
                </a>
              </div>
            </div>

            <div className="relative h-80 md:h-[420px]">
              <Image src="/ventilasjon-hero.jpg" alt="Ventilasjonsarbeid" fill className="object-cover rounded-xl" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            kicker="Enkelt"
            title="Slik får du jobben gjort"
            subtitle="Dette gir trygghet. Små bedrifter vinner på forutsigbarhet."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Ring eller send melding",
                text: "Fortell kort hva du trenger. Du får raskt svar.",
              },
              {
                step: "2",
                title: "Gratis befaring",
                text: "Vi ser på anlegget og avtaler løsning og pris.",
              },
              {
                step: "3",
                title: "Jobben utføres ryddig",
                text: "Vi møter opp som avtalt og rydder etter oss.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-7 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-black">
                  {s.step}
                </div>
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
              {
                q: "Hvor ofte bør ventilasjonen serviceres?",
                a: "Vi anbefaler service minst én gang i året for optimal luftkvalitet og ytelse.",
              },
              {
                q: "Gir dere pris på forhånd?",
                a: "Ja. Etter en kort prat eller befaring avtaler vi tydelig pris og omfang.",
              },
              {
                q: "Hvor jobber dere?",
                a: `Primært ${area}. Spør, så sier vi ja eller nei med en gang.`,
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-gray-200 p-5 bg-stone-50"
              >
                <summary className="cursor-pointer list-none font-black text-gray-900 flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-gray-500 group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
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
              <p className="text-[#e8863a] font-semibold tracking-widest uppercase text-sm flex items-center gap-2">
                <IconDot className="w-3 h-3" />
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black">Ring, så tar vi det derfra</h2>
              <p className="mt-5 text-white/80 text-lg">
                Raskt svar, gratis befaring og tydelig avtale. Ingen stress.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center bg-[#d76b1f] hover:bg-[#b85a18] text-white font-black px-8 py-4 rounded transition-colors text-lg"
                >
                  📞 {phone}
                </a>
                <a
                  href={mailHref}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded transition-colors"
                >
                  ✉️ {email}
                </a>
              </div>

              <div className="mt-8 text-white/80">
                <p>
                  <span className="font-semibold text-white">Arbeidsområde:</span> {area}
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-white">Åpent:</span> {openingHours}
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <h3 className="text-2xl font-black">Kort oppsummering</h3>
              <ul className="mt-4 space-y-3 text-white/85">
                {[
                  "Gratis og uforpliktende befaring",
                  "Tydelig pris og omfang",
                  "Ryddig arbeid og opprydding",
                  "Serviceavtaler tilgjengelig",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <IconCheck className="w-6 h-6 text-[#e8863a] mt-0.5" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-white/60">
                Demo-info: Org.nr {orgnr}. Bytt til kundens ekte info ved levering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="#" aria-label="Facebook" className="hover:text-[#d76b1f] transition-colors">
                <IconFacebook className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#d76b1f] transition-colors">
                <IconInstagram className="w-8 h-8" />
              </a>
            </div>

            <div className="text-center">
              <a href={mailHref} className="text-gray-300 hover:text-[#d76b1f] text-sm transition-colors">
                {email}
              </a>
              <p className="text-gray-500 text-xs mt-1">
                {brand} • Org.nr {orgnr} • {area}
              </p>
            </div>

            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {brand}
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Call Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gray-900/95 backdrop-blur border-t border-white/10 px-4 py-3">
          <a
            href={telHref}
            className="w-full inline-flex items-center justify-center bg-[#d76b1f] hover:bg-[#b85a18] text-white font-black py-4 rounded-lg text-lg"
          >
            📞 Ring nå: {phone}
          </a>
        </div>
      </div>

      {/* Spacer so sticky bar doesn't cover content */}
      <div className="md:hidden h-20" aria-hidden="true" />
    </div>
  );
}
