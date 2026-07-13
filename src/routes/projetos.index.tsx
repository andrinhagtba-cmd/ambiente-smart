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
      { title: "Projetos de Decoração Sob Medida | Will Decor" },
      {
        name: "description",
        content:
          "Galeria de projetos da Will Decor: salas, quartos, escritórios, varandas e ambientes comerciais transformados com soluções sob medida.",
      },
      { property: "og:title", content: "Projetos de Decoração Sob Medida | Will Decor" },
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

      <section className="container-site py-14 md:py-20">
        {/* Filtros */}
        <div role="group" aria-label="Filtrar projetos por ambiente" className="flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={cn(
                "min-h-11 border px-5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors",
                category === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-cream text-muted-foreground hover:border-taupe hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-16 border border-dashed border-border bg-cream p-12 text-center">
            <h2 className="font-display text-2xl text-foreground">Nenhum projeto nesta categoria ainda.</h2>
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
