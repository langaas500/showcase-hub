import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Snekker",
  description:
    "Snekker i Mysen og Indre Østfold. Kjøkken, garderobe, møbler og innredning på mål.",
  path: "/handverker/snekker",
  image: "/snekker-hero.jpg",
  imageAlt: "Snekker – SBL Showcase",
});

export default function Page() {
  return (
    <>
      {/* Showcase preview */}
      <section className="bg-stone-100 px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block bg-gray-900 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
            Showcase
          </span>
          <p className="text-gray-600 text-sm md:text-base mb-8">
            Eksempel på ferdig håndverkerside.
          </p>
          <div className="relative mx-auto max-w-4xl rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <Image
              src="/snekker-hero.jpg"
              alt="Skjermbilde av eksempel på snekker-side"
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <PageClient />
    </>
  );
}
