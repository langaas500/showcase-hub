import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "bryllup-uploads");

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (files.length === 0) {
      return NextResponse.json({ error: "Ingen filer valgt" }, { status: 400 });
    }

    await mkdir(UPLOAD_DIR, { recursive: true });

    const saved: string[] = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const timestamp = Date.now();
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const filename = `${timestamp}-${safeName}`;
      const filepath = path.join(UPLOAD_DIR, filename);

      await writeFile(filepath, buffer);
      saved.push(`/bryllup-uploads/${filename}`);
    }

    return NextResponse.json({ success: true, files: saved });
  } catch {
    return NextResponse.json({ error: "Opplasting feilet" }, { status: 500 });
  }
}
