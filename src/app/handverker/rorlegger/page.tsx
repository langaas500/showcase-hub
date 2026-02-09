import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Rørlegger",
  description:
    "VVS-arbeid, bad og vanninstallasjoner. Profesjonell rørlegger-nettside.",
  path: "/handverker/rorlegger",
  image: "/rorlegger-hero.jpg",
  imageAlt: "Rørlegger – SBL Showcase",
});

export default function Page() {
  return <PageClient />;
}
