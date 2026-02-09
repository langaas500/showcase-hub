import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/data/projects";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Restauranter & Fastfood",
  description:
    "Nettsider og digitale løsninger for restauranter, kafeer og fastfood-kjeder.",
  path: "/restauranter",
});

export default function RestauranterPage() {
  const projects = getProjectsByCategory("restauranter");

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-foreground">Hjem</Link>
          <span>/</span>
          <span className="text-foreground">Restauranter & Fastfood</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 text-5xl">🍽️</div>
          <h1 className="mb-4 text-4xl font-bold">Restauranter & Fastfood</h1>
          <p className="max-w-2xl text-lg text-muted">
            Nettsider og digitale løsninger for restauranter, kafeer og fastfood-kjeder.
            Alt fra online bestilling til bordreservasjon.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
