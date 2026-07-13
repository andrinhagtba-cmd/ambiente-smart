import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/servicos/$slug"
      params={{ slug: service.slug }}
      className="group block"
      aria-label={`Conhecer solução: ${service.name}`}
    >
      <div className="overflow-hidden bg-secondary">
        <img
          src={service.image}
          alt={`${service.name} — ambiente decorado pela Will Decor`}
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <h3 className="font-display text-2xl text-foreground">{service.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{service.cardDescription}</p>
          <span className="mt-3 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-taupe transition-colors group-hover:text-foreground">
            Conhecer solução
            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
