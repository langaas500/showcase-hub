import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Tømrer",
  description:
    "Husbygging, tilbygg og konstruksjonsarbeid. Profesjonell tømrer-nettside.",
  path: "/handverker/tomrer",
  image: "/snekker-hero.jpg",
  imageAlt: "Tømrer – SBL Showcase",
});

export default function Page() {
  return <PageClient />;
}
