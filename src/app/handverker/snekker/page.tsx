import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Snekker",
  description:
    "Snekker i Mysen og Indre Østfold. Kjøkken, garderobe, møbler og innredning på mål.",
  path: "/handverker/snekker",
  image: "/showcase-snekker.jpg",
  imageAlt: "Snekker – SBL Showcase",
});

export default function Page() {
  return <PageClient />;
}
