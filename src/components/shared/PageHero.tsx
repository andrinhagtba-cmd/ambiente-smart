import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}

/** Hero interno padrão das páginas. */
export function PageHero({ eyebrow, title, description, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-background pt-[4.5rem]">
      <div className="container-site pb-14 pt-10 md:pb-20 md:pt-14">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <Reveal className="mt-8 max-w-3xl md:mt-12">
          {eyebrow ? <p className="eyebrow mb-4 text-taupe">{eyebrow}</p> : null}
          <h1 className="text-[2.6rem] leading-[1.05] md:text-6xl lg:text-[3.75rem]">{title}</h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
