import { Link, createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/servicos/")({
  component: ServicosPage,
  head: () => ({
    meta: [
      { title: "Cortinas, Persianas e Soluções para Interiores | Ambiente Smart" },
      {
        name: "description",
        content:
          "Conheça as soluções sob medida da Ambiente Smart: cortinas, persianas, toldos, papéis de parede, tapetes, boiserie e cabeceiras. Solicite um orçamento.",
      },
      { property: "og:title", content: "Cortinas, Persianas e Soluções para Interiores | Ambiente Smart" },
      {
        property: "og:description",
        content: "Soluções sob medida para janelas, paredes e ambientes residenciais e comerciais.",
      },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
});

function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Soluções que acompanham o seu espaço."
        description="Cada solução é desenvolvida sob medida, com curadoria de materiais e instalação profissional. Explore as possibilidades e solicite uma avaliação para o seu projeto."
        breadcrumbs={[{ label: "Serviços" }]}
      />

      <section className="container-site py-16 md:py-24">
        <div className="space-y-20 md:space-y-28">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <Link
                to="/servicos/$slug"
                params={{ slug: service.slug }}
                className="group block overflow-hidden bg-secondary"
                aria-label={`Ver detalhes de ${service.name}`}
              >
                <img
                  src={service.image}
                  alt={`${service.name} — Ambiente Smart`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </Link>
              <div>
                <p className="eyebrow text-taupe">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-4xl md:text-5xl">{service.name}</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{service.intro}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {service.benefits.slice(0, 4).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-bronze" aria-hidden="true" strokeWidth={2} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/servicos/$slug" params={{ slug: service.slug }} className="btn btn-outline">
                    Ver detalhes
                  </Link>
                  <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Solicitar orçamento</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
