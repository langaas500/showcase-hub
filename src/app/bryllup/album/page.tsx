import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Album – Emmelin & Martin",
  description:
    "Se alle bildene fra bryllupet til Emmelin og Martin.",
  path: "/bryllup/album",
});

export default function Page() {
  return <PageClient />;
}
