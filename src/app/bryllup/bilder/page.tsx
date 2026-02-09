import { createMetadata } from "@/lib/metadata";
import PageClient from "./PageClient";

export const metadata = createMetadata({
  title: "Del bilder – Emmelin & Martin",
  description:
    "Last opp bilder fra bryllupet til Emmelin og Martin.",
  path: "/bryllup/bilder",
});

export default function Page() {
  return <PageClient />;
}
