import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Elektriker",
  description:
    "Elektriske installasjoner og smarthus-løsninger. Profesjonell elektriker-nettside.",
  path: "/handverker/elektriker",
  image: "/elektro-hero.jpg",
  imageAlt: "Elektriker – SBL Showcase",
});

export default function Page() {
  return <PageClient />;
}
