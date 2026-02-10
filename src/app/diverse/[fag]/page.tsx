import ProjectCard from "@/components/ProjectCard";
import { categories, getProjectsBySubcategory } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

const diverse = categories.find((c) => c.id === "diverse");
const subcategories = diverse?.subcategories ?? [];

export function generateStaticParams() {
  return subcategories.map((sub) => ({ fag: sub.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ fag: string }> }) {
  const { fag } = await params;
  const sub = subcategories.find((s) => s.id === fag);
  if (!sub) return { title: "Ikke funnet" };
  return createMetadata({
    title: sub.title,
    description: sub.description,
    path: `/diverse/${fag}`,
  });
}

export default async function FagPage({ params }: { params: Promise<{ fag: string }> }) {
  const { fag } = await params;
  const sub = subcategories.find((s) => s.id === fag);

  if (!sub) notFound();

  const projects = getProjectsBySubcategory(fag);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-foreground">Hjem</Link>
          <span>/</span>
          <Link href="/diverse" className="transition-colors hover:text-foreground">Diverse</Link>
          <span>/</span>
          <span className="text-foreground">{sub.title}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 text-5xl">{sub.icon}</div>
          <h1 className="mb-4 text-4xl font-bold">{sub.title}</h1>
          <p className="max-w-2xl text-lg text-muted">{sub.description}</p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/diverse"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            ← Tilbake til alle kategorier
          </Link>
        </div>
      </div>
    </div>
  );
}
