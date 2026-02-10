import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Rengjøring",
  description:
    "Profesjonell rengjøringstjeneste. Hjemmerengjøring, bedriftsrenhold og flyttevask.",
  path: "/diverse/rengjoring",
});

export default function Page() {
  return <PageClient />;
}
