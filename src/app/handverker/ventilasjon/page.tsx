import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Ventilasjon",
  description:
    "Ventilasjonssystemer og inneklima. Profesjonell ventilasjon-nettside.",
  path: "/handverker/ventilasjon",
  image: "/ventilasjon-hero.jpg",
  imageAlt: "Ventilasjon – SBL Showcase",
});

export default function Page() {
  return <PageClient />;
}
