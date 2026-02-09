import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Bilmekaniker Sarpsborg",
  description:
    "Bilmekaniker i Storedal og Sarpsborg. EU-klargjøring, bremser, olje og diagnostikk.",
  path: "/bilmekaniker",
  image: "/mechanic-hero.jpg",
  imageAlt: "Bilmekaniker i Sarpsborg",
});

export default function Page() {
  return <PageClient />;
}
