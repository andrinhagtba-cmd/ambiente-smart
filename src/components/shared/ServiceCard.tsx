import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/servicos/$slug"
      params={{ slug: service.slug }}
      className="group block focus-visible:outline-none"
      aria-label={`Conhecer solução: ${service.name}`}
    >
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_20px_60px_-30px_oklch(0.185_0.008_70/0.35)] ring-1 ring-border/70 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_40px_90px_-30px_oklch(0.185_0.008_70/0.55)] group-hover:ring-taupe/60">
        <img
          src={service.image}
          alt={`${service.name} — ambiente decorado pela Will Decor`}
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(120% 80% at 100% 0%, oklch(0.645 0.062 70 / 0.25) 0%, transparent 55%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
          <div className="min-w-0">
            <h3 className="font-display text-2xl leading-tight text-ink-foreground">{service.name}</h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-foreground/85">
              {service.cardDescription}
            </p>
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
