import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, aspect = "aspect-[4/5]" }: { project: Project; aspect?: string }) {
  return (
    <Link
      to="/projetos/$slug"
      params={{ slug: project.slug }}
      className="group block focus-visible:outline-none"
      aria-label={`Ver projeto: ${project.name}`}
    >
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_20px_60px_-30px_oklch(0.185_0.008_70/0.35)] ring-1 ring-border/70 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_40px_90px_-30px_oklch(0.185_0.008_70/0.55)] group-hover:ring-taupe/60">
        <img
          src={project.image}
          alt={`${project.name} — projeto Will Decor`}
          loading="lazy"
          width={project.imageWidth}
          height={project.imageHeight}
          className={cn(
            aspect,
            "w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]",
          )}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(120% 80% at 0% 0%, oklch(0.645 0.062 70 / 0.25) 0%, transparent 55%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bronze">
              {project.category}
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-ink-foreground">{project.name}</h3>
            <p className="mt-1 line-clamp-1 text-xs text-ink-foreground/80">{project.services.join(" · ")}</p>
          </div>
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-ink shadow-lg transition-all duration-500 ease-out group-hover:rotate-45 group-hover:bg-bronze group-hover:text-ink-foreground"
          >
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </span>
        </div>
      </div>
    </Link>
  );
}
