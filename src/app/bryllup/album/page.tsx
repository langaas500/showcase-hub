"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlbumPage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/bryllup/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#b5a48a] text-sm tracking-[0.3em] uppercase mb-4">Minner</p>
          <h1 className="text-4xl md:text-5xl font-normal text-[#3d3629]">Albumet</h1>
          <div className="mt-3 mx-auto w-16 h-px bg-[#d4c9b8]" />
          <p className="mt-6 text-[#8b7b6b] italic max-w-md mx-auto">
            Alle bildene fra dagen, samlet på ett sted.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-[#b5a48a] text-lg">Laster bilder...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">&#128247;</div>
            <p className="text-[#8b7b6b] text-lg mb-2">Ingen bilder ennå</p>
            <p className="text-[#b5a48a] mb-8">Vær den første til å dele et minne.</p>
            <Link
              href="/bryllup/bilder"
              className="px-8 py-3 bg-[#8b7355] text-white text-sm tracking-wider uppercase hover:bg-[#7a6548] transition-colors"
            >
              Last opp bilder
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(src)}
                  className="relative aspect-square rounded-xl overflow-hidden bg-[#f0ebe3] shadow-sm hover:shadow-md transition-shadow group"
                >
                  <Image
                    src={src}
                    alt={`Bryllupsbilde ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/bryllup/bilder"
                className="text-[#8b7355] text-sm tracking-wider uppercase border-b border-[#8b7355] pb-0.5 hover:text-[#7a6548] transition-colors"
              >
                Last opp flere bilder &rarr;
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl"
            onClick={() => setSelected(null)}
            aria-label="Lukk"
          >
            &times;
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image
              src={selected}
              alt="Forstørret bilde"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
