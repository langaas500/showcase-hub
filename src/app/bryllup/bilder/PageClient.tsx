"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function BilderPage() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;
    const urls = Array.from(files).map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    setMessage("");
  }

  async function handleUpload() {
    const files = fileRef.current?.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    Array.from(files).forEach((f) => formData.append("files", f));

    try {
      const res = await fetch("/api/bryllup/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (data.success) {
        setMessage(`${data.files.length} bilde${data.files.length > 1 ? "r" : ""} lastet opp!`);
        setUploadedImages((prev) => [...data.files, ...prev]);
        setPreviews([]);
        if (fileRef.current) fileRef.current.value = "";
      } else {
        setMessage(data.error || "Noe gikk galt");
      }
    } catch {
      setMessage("Kunne ikke laste opp. Prøv igjen.");
    }

    setUploading(false);
  }

  return (
    <div className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#b5a48a] text-sm tracking-[0.3em] uppercase mb-4">Del minnene</p>
          <h1 className="text-4xl md:text-5xl font-normal text-[#3d3629]">Last opp bilder</h1>
          <div className="mt-3 mx-auto w-16 h-px bg-[#d4c9b8]" />
          <p className="mt-6 text-[#8b7b6b] italic max-w-md mx-auto">
            Har du tatt bilder fra dagen? Del dem her, så bygger vi albumet sammen.
          </p>
        </div>

        {/* Upload area */}
        <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-[#e8e2d9]">
          <label
            htmlFor="file-upload"
            className="block border-2 border-dashed border-[#d4c9b8] rounded-xl p-10 text-center cursor-pointer hover:border-[#8b7355] transition-colors"
          >
            <div className="text-4xl mb-3">&#128247;</div>
            <p className="text-[#8b7b6b] text-lg">Klikk for å velge bilder</p>
            <p className="text-[#b5a48a] text-sm mt-1">JPG, PNG eller WebP</p>
            <input
              id="file-upload"
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* Previews */}
          {previews.length > 0 && (
            <div className="mt-6">
              <p className="text-[#8b7b6b] text-sm mb-3">{previews.length} bilde{previews.length > 1 ? "r" : ""} valgt:</p>
              <div className="grid grid-cols-3 gap-3">
                {previews.map((url, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-[#f0ebe3]">
                    <Image src={url} alt={`Forhåndsvisning ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload button */}
          {previews.length > 0 && (
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="mt-6 w-full py-3 bg-[#8b7355] text-white text-sm tracking-wider uppercase hover:bg-[#7a6548] disabled:opacity-50 transition-colors"
            >
              {uploading ? "Laster opp..." : "Last opp bildene"}
            </button>
          )}

          {/* Message */}
          {message && (
            <div className="mt-4 p-4 rounded-lg bg-[#f0ebe3] text-center">
              <p className="text-[#8b7355] font-semibold" style={{ fontFamily: "sans-serif" }}>{message}</p>
            </div>
          )}
        </div>

        {/* Recently uploaded */}
        {uploadedImages.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-normal text-[#3d3629] text-center mb-6">Nettopp lastet opp</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {uploadedImages.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-[#f0ebe3] shadow-sm">
                  <Image src={src} alt={`Opplastet bilde ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
