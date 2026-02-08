import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "bryllup-uploads");

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const files = await readdir(UPLOAD_DIR);
    const images = files
      .filter((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
      .sort((a, b) => {
        const tA = parseInt(a.split("-")[0]) || 0;
        const tB = parseInt(b.split("-")[0]) || 0;
        return tB - tA;
      })
      .map((f) => `/bryllup-uploads/${f}`);

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}
