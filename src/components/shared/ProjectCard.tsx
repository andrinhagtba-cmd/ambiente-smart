import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, aspect = "aspect-[4/5]" }: { project: Project; aspect?: string }) {
  return (
    <Link
      to="/projetos/$slug"
      params={{ slug: project.slug }}
      className="group block"
      aria-label={`Ver projeto: ${project.name}`}
    >
      <div className="overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={`${project.name} — projeto Will Decor`}
          loading="lazy"
          width={project.imageWidth}
          height={project.imageHeight}
          className={cn(aspect, "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]")}
        />
      </div>
      <div className="pt-5">
        <p className="eyebrow text-taupe">{project.category}</p>
        <h3 className="mt-2 font-display text-2xl text-foreground">{project.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.services.join(" · ")}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-taupe transition-colors group-hover:text-foreground">
          Ver projeto
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
