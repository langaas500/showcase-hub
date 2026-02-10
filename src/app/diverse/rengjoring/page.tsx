import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Proff vask for ditt hjem",
  description:
    "Profesjonell rengjøringstjeneste. Hjemmerengjøring, bedriftsrenhold og flyttevask.",
  path: "/diverse/rengjoring",
  image: "/showcase-vask.jpg",
  imageAlt: "Proff vask for ditt hjem",
});

export default function Page() {
  return <PageClient />;
}
