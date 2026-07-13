import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Hand, Settings2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ServiceVideo } from "@/components/shared/ServiceVideo";
import { SERVICES, getServiceBySlug, type Service } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) return { meta: [{ title: "Serviço não encontrado | Will Decor" }] };
    return {
      meta: [
        { title: service.seoTitle },
        { name: "description", content: service.seoDescription },
        { property: "og:title", content: service.seoTitle },
        { property: "og:description", content: service.seoDescription },
        { property: "og:url", content: `/servicos/${service.slug}` },
      ],
      links: [{ rel: "canonical", href: `/servicos/${service.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.name} sob medida`,
            description: service.seoDescription,
            provider: { "@type": "LocalBusiness", name: "Will Decor" },
            areaServed: "Brasília — DF",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "/" },
              { "@type": "ListItem", position: 2, name: "Serviços", item: "/servicos" },
              { "@type": "ListItem", position: 3, name: service.name, item: `/servicos/${service.slug}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicoPage,
});

function ServiceNotFound() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center pt-24 text-center">
      <p className="eyebrow text-taupe">Serviço não encontrado</p>
      <h1 className="mt-4 text-4xl">Esta solução não está disponível.</h1>
      <Link to="/servicos" className="btn btn-primary mt-8">
        Ver todos os serviços
      </Link>
    </div>
  );
}

function ServicoPage() {
  const service = Route.useLoaderData() as Service;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedProjects = PROJECTS.filter((p) => p.serviceSlugs.includes(service.slug)).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.heroTitle}
        description={service.intro}
        breadcrumbs={[{ label: "Serviços", to: "/servicos" }, { label: service.name }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/orcamento" className="btn btn-primary">
            Solicitar orçamento
          </Link>
          <Link to="/contato" className="btn btn-outline">
            Falar com um especialista
          </Link>
        </div>
      </PageHero>

      {/* Benefícios + imagem */}
      <section className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <ServiceVideo
            src={service.video}
            poster={service.image}
            alt={`${service.name} — ambiente com solução Will Decor em movimento`}
          />
        </Reveal>
        <div>
          <SectionHeading eyebrow="Benefícios" title="O que essa solução traz para o ambiente." />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit} delay={i * 50} className="flex items-start gap-3 border-b border-border pb-3">
                <Check className="mt-0.5 size-4 shrink-0 text-bronze" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <p className="eyebrow text-taupe">Aplicações e ambientes</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.applications.map((app) => (
                <li
                  key={app}
                  className="border border-border bg-cream px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground"
                >
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Opções */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Opções e variações" title="Possibilidades para o seu projeto." align="center" />
          <ul className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {service.options.map((option, i) => (
              <Reveal as="li" key={option.name} delay={(i % 3) * 80} className="bg-background p-7">
                <h3 className="font-display text-xl text-foreground">{option.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-foreground">
            Os valores são apresentados somente em orçamento, após a avaliação do ambiente e das medidas.
          </p>
        </div>
      </section>

      {/* Manual x motorizada */}
      {service.hasMotorization ? (
        <section className="bg-ink py-20 text-ink-foreground md:py-28">
          <div className="container-site">
            <SectionHeading
              dark
              eyebrow="Manual ou motorizada?"
              title="Duas formas de viver a mesma solução."
              align="center"
            />
            <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden border border-ink-foreground/15 bg-ink-foreground/15 md:grid-cols-2">
              <Reveal className="bg-ink-soft p-8 md:p-10">
                <Hand className="size-5 text-bronze" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-2xl text-ink-foreground">Acionamento manual</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Simples e silencioso, com deslizamento suave pelo trilho ou baqueta. Uma escolha durável e de fácil
                  manutenção para o dia a dia.
                </p>
              </Reveal>
              <Reveal delay={100} className="bg-ink-soft p-8 md:p-10">
                <Settings2 className="size-5 text-bronze" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-2xl text-ink-foreground">Acionamento motorizado</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Abertura e fechamento por controle remoto, ideal para grandes vãos, janelas altas e rotinas práticas.
                  A integração com sistemas de automação pode ser avaliada conforme a solução escolhida.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {/* Galeria / projetos com este serviço */}
      {relatedProjects.length > 0 ? (
        <section className="container-site py-20 md:py-28">
          <SectionHeading eyebrow="Galeria" title="Ambientes com esta solução." />
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* Processo */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Processo" title="Como funciona o atendimento." align="center" />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* FAQ do serviço */}
      <section className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title={`Perguntas sobre ${service.name.toLowerCase()}.`}
        />
        <Reveal>
          <FAQAccordion items={service.faqs} />
        </Reveal>
      </section>

      <QuoteCTA
        title={`Quer ${service.name.toLowerCase()} sob medida no seu ambiente?`}
        description="Solicite uma avaliação para o seu projeto. Nossa equipe orienta cada escolha, da medição à instalação."
      />

      {/* Serviços relacionados */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading eyebrow="Explore também" title="Outras soluções para o seu espaço." />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
