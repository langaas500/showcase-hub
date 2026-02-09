import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Snekker Mysen",
  description:
    "Tømrer i Mysen og Indre Østfold. Terrasse, vinduer, dører og oppussing.",
  path: "/snekker",
  image: "/snekker-hero.jpg",
  imageAlt: "Snekker i Mysen",
});

export default function Page() {
  return <PageClient />;
}
