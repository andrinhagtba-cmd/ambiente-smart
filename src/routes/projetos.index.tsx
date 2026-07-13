import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Reveal } from "@/components/shared/Reveal";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projetos/")({
  component: ProjetosPage,
  head: () => ({
    meta: [
      { title: "Projetos de Decoração Sob Medida | Ambiente Smart" },
      {
        name: "description",
        content:
          "Galeria de projetos da Ambiente Smart: salas, quartos, escritórios, varandas e ambientes comerciais transformados com soluções sob medida.",
      },
      { property: "og:title", content: "Projetos de Decoração Sob Medida | Ambiente Smart" },
      { property: "og:description", content: "Ambientes transformados nos detalhes com soluções sob medida." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
});

function ProjetosPage() {
  const [category, setCategory] = useState<ProjectCategory>("Todos");
  const filtered = category === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title="Ambientes transformados nos detalhes."
        description="Uma seleção de projetos que mostram como medidas certas, materiais bem escolhidos e instalação cuidadosa mudam a experiência de um ambiente."
        breadcrumbs={[{ label: "Projetos" }]}
      />

      <section className="container-site py-10 md:py-16">
        {/* Tabs premium tipo pílulas */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-3">
            <p className="eyebrow text-taupe">Ambientes</p>
            <span className="h-px w-10 bg-border" aria-hidden />
            <p className="text-xs font-medium text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "projeto" : "projetos"}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar projetos por ambiente"
            className="w-full overflow-x-auto md:w-auto"
          >
            <div className="inline-flex min-w-full items-center gap-1.5 rounded-full border border-border/70 bg-cream p-1.5 shadow-[0_18px_40px_-30px_oklch(0.185_0.008_70/0.35)] md:min-w-0">
              {PROJECT_CATEGORIES.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "relative shrink-0 rounded-full px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-all duration-400 ease-out",
                      active
                        ? "bg-gradient-to-br from-ink to-primary text-ink-foreground shadow-[0_10px_24px_-10px_oklch(0.185_0.008_70/0.6),inset_0_1px_0_0_oklch(1_0_0/0.15)]"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-[1.75rem] border border-dashed border-border bg-cream p-12 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground">Nenhum projeto nesta categoria ainda.</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Em breve novos ambientes serão publicados aqui. Enquanto isso, explore as outras categorias.
            </p>
            <button type="button" onClick={() => setCategory("Todos")} className="btn btn-outline mt-6">
              Ver todos os projetos
            </button>
          </div>
        )}
      </section>

      <QuoteCTA
        title="Quer um projeto assim no seu ambiente?"
        description="Conte o que você imagina. Criamos uma solução sob medida para o seu espaço, com a mesma atenção aos detalhes."
      />
    </>
  );
}
