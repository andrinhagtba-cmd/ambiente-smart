import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { PROJECTS, getProjectBySlug, type Project } from "@/data/projects";
import { getServiceBySlug, type Service } from "@/data/services";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) return { meta: [{ title: "Projeto não encontrado | Ambiente Smart" }] };
    const title = `${project.name} | Projetos Ambiente Smart`;
    return {
      meta: [
        { title },
        { name: "description", content: `${project.context} Solução: ${project.solution}`.slice(0, 158) },
        { property: "og:title", content: title },
        { property: "og:description", content: project.solution },
        { property: "og:url", content: `/projetos/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projetos/${project.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjetoPage,
});

function ProjectNotFound() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center pt-24 text-center">
      <p className="eyebrow text-taupe">Projeto não encontrado</p>
      <h1 className="mt-4 text-4xl">Este projeto não está disponível.</h1>
      <Link to="/projetos" className="btn btn-primary mt-8">
        Ver todos os projetos
      </Link>
    </div>
  );
}

function ProjetoPage() {
  const project = Route.useLoaderData() as Project;
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  const relatedServices = project.serviceSlugs
    .map((slug: string) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.name}
        description={project.context}
        breadcrumbs={[{ label: "Projetos", to: "/projetos" }, { label: project.name }]}
      />

      {/* Galeria */}
      <section className="container-site pt-14 md:pt-20">
        <Reveal>
          <img
            src={project.image}
            alt={`${project.name} — ambiente finalizado`}
            width={project.imageWidth}
            height={project.imageHeight}
            className="max-h-[80vh] w-full object-cover"
          />
        </Reveal>
        {/* TODO: adicionar mais fotos reais deste projeto quando disponíveis. */}
      </section>

      {/* Contexto / necessidade / solução */}
      <section className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div className="space-y-12">
          <Reveal>
            <p className="eyebrow text-taupe">A necessidade</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">{project.need}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow text-taupe">A solução</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{project.solution}</p>
          </Reveal>
        </div>
        <Reveal className="h-fit border border-border bg-cream p-8">
          <p className="eyebrow text-taupe">Detalhes dos materiais</p>
          <ul className="mt-5 space-y-3">
            {project.materials.map((material) => (
              <li key={material} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-bronze" aria-hidden="true" />
                {material}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-6">
            <p className="eyebrow text-taupe">Serviços aplicados</p>
            <ul className="mt-4 space-y-2">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: service.slug }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-taupe"
                  >
                    {service.name}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <QuoteCTA
        title="Quer um projeto semelhante?"
        description="Solicite uma avaliação para o seu ambiente. Adaptamos a solução às suas medidas, à sua luz e à sua rotina."
      />

      {/* Outros projetos */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading eyebrow="Continue explorando" title="Outros projetos." />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
