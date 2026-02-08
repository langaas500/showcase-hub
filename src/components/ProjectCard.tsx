import Image from "next/image";
import type { Project } from "@/data/projects";

const hasRealImage = (img: string) => !img.startsWith("/projects/");

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:bg-card-hover hover:shadow-lg hover:shadow-accent/5">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        {hasRealImage(project.image) ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl opacity-30 transition-transform duration-300 group-hover:scale-110">
              {project.subcategory === "snekker" && "🪚"}
              {project.subcategory === "elektriker" && "⚡"}
              {project.subcategory === "tomrer" && "🏗️"}
              {project.subcategory === "ventilasjon" && "💨"}
              {project.subcategory === "rorlegger" && "🔧"}
              {project.category === "restauranter" && "🍽️"}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.url && (
          <p className="mt-3 text-xs text-accent font-medium tracking-wide uppercase">
            Se prosjektet &rarr;
          </p>
        )}
      </div>
    </div>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
