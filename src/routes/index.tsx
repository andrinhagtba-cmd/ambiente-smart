import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessagesSquare, Ruler, Settings2, SlidersHorizontal, Smartphone, Timer, Wrench } from "lucide-react";
import { VideoHero } from "@/components/home/VideoHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { HOME_FAQS } from "@/data/faqs";
import { BRAND, COMPANY_ADDRESS, SHOW_TESTIMONIALS } from "@/data/brand";
import aboutMain from "@/assets/about-main.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import motorizedImg from "@/assets/motorized.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ambiente Smart | Cortinas e Soluções Sob Medida em Brasília" },
      {
        name: "description",
        content:
          "Cortinas, persianas, toldos, papéis de parede, tapetes, boiserie e cabeceiras sob medida em Brasília. Solicite um orçamento com atendimento consultivo.",
      },
      { property: "og:title", content: "Ambiente Smart | Cortinas e Soluções Sob Medida em Brasília" },
      {
        property: "og:description",
        content: "Cortinas, persianas, toldos, papéis de parede, tapetes, boiserie e cabeceiras sob medida em Brasília. Solicite um orçamento com atendimento consultivo.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BRAND.name,
          description: BRAND.shortDescription,
          address: { "@type": "PostalAddress", addressLocality: BRAND.city, addressRegion: BRAND.region },
          areaServed: `${BRAND.city} — ${BRAND.region}`,
        }),
      },
    ],
  }),
});

const TRUST_ITEMS = [
  { icon: Ruler, label: "Projetos sob medida" },
  { icon: MessagesSquare, label: "Atendimento especializado" },
  { icon: Wrench, label: "Instalação profissional" },
  { icon: Settings2, label: "Soluções manuais e motorizadas" },
];

const DIFFERENTIALS = [
  "Atendimento consultivo",
  "Soluções personalizadas",
  "Curadoria de materiais",
  "Acabamento cuidadoso",
  "Instalação profissional",
  "Suporte próximo durante o projeto",
];

const MOTORIZED_BENEFITS = [
  { icon: Smartphone, title: "Um toque", text: "Abra e feche as cortinas por controle remoto, sem esforço." },
  { icon: Timer, title: "Silêncio", text: "Movimento suave e discreto, mesmo em grandes vãos." },
  { icon: SlidersHorizontal, title: "Precisão", text: "Pare o tecido exatamente na posição de luz desejada." },
];

/**
 * Depoimentos de DEMONSTRAÇÃO — não publicar como reais.
 * A seção permanece oculta enquanto SHOW_TESTIMONIALS = false em src/data/brand.ts.
 */
const DEMO_TESTIMONIALS = [
  { name: "[Nome do cliente]", text: "[Depoimento real do cliente será inserido aqui.]", context: "[Ambiente]" },
];

function Index() {
  const featured = PROJECTS.slice(0, 4);

  return (
    <>
      <VideoHero />

      {/* Faixa de confiança */}
      <section aria-label="Diferenciais da Ambiente Smart" className="border-b border-border bg-cream">
        <div className="container-site">
          <ul className="grid grid-cols-2 divide-border sm:divide-x lg:grid-cols-4">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center justify-center gap-3 px-4 py-6 text-center lg:py-8">
                <Icon className="size-4 shrink-0 text-bronze" aria-hidden="true" strokeWidth={1.5} />
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Apresentação da marca */}
      <section className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Sobre a Ambiente Smart"
            title="Beleza sob medida para viver melhor."
            description="Cada ambiente possui uma luz, uma rotina e uma personalidade. Criamos soluções que respeitam essas particularidades e valorizam cada espaço — do primeiro traço à instalação."
          />
          <Reveal delay={120}>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 border-b border-taupe pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
            >
              Conhecer a marca
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <img
            src={aboutMain}
            alt="Sala contemporânea com cortinas de linho do teto ao piso"
            loading="lazy"
            width={1024}
            height={1400}
            className="aspect-[3/4] w-full object-cover"
          />
          <img
            src={aboutDetail}
            alt="Detalhe da textura de linho de uma cortina Ambiente Smart"
            loading="lazy"
            width={900}
            height={900}
            className="absolute -bottom-8 -left-4 hidden w-2/5 border-8 border-background object-cover sm:block lg:-left-10"
          />
          <span
            className="absolute -top-5 right-0 font-display text-[5rem] leading-none text-surface-warm lg:-right-6"
            aria-hidden="true"
          >
            01
          </span>
        </Reveal>
      </section>

      {/* Serviços */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Nossas soluções" title="Soluções pensadas para cada ambiente." />
            <Reveal delay={100}>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 border-b border-taupe pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
              >
                Ver todos os serviços
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 border border-border bg-background p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h3 className="font-display text-2xl text-foreground">{SERVICES[6].name} sob medida</h3>
              <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">{SERVICES[6].cardDescription}</p>
            </div>
            <Link
              to="/servicos/$slug"
              params={{ slug: SERVICES[6].slug }}
              className="btn btn-outline mt-6 md:mt-0 md:shrink-0"
            >
              Conhecer solução
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Cortinas motorizadas */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="grid lg:grid-cols-2">
          <Reveal className="relative min-h-[420px] lg:min-h-[640px]">
            <img
              src={motorizedImg}
              alt="Ambiente escuro e sofisticado com cortinas motorizadas e iluminação indireta"
              loading="lazy"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Degradê que funde a imagem no fundo ink ao chegar no texto */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink lg:bg-gradient-to-r"
            />
          </Reveal>
          <div className="container-site py-20 md:py-28 lg:py-32 lg:pl-16 xl:pl-24">
            <SectionHeading
              dark
              eyebrow="Conforto e automação"
              title="Controle a luz com apenas um toque."
              description="Integre elegância, praticidade e tecnologia por meio de soluções motorizadas desenvolvidas para diferentes ambientes."
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              {MOTORIZED_BENEFITS.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={i * 90}>
                  <Icon className="size-5 text-bronze" aria-hidden="true" strokeWidth={1.5} />
                  <h3 className="mt-3 font-sans text-sm font-semibold text-ink-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{text}</p>
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 text-xs text-ink-muted">
              A integração com sistemas de automação pode ser avaliada conforme a solução escolhida.
            </p>
            <Reveal delay={140}>
              <Link to="/servicos/$slug" params={{ slug: "cortinas" }} className="btn btn-outline-light mt-6">
                Conhecer cortinas motorizadas
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Um processo cuidadoso, do primeiro contato à instalação."
          align="center"
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Projetos" title="Ambientes transformados nos detalhes." />
            <Reveal delay={100}>
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 border-b border-taupe pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
              >
                Ver todos os projetos
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-12 lg:grid-cols-2">
            <Reveal>
              <ProjectCard project={featured[0]} aspect="aspect-[4/3] lg:aspect-[3/4]" />
            </Reveal>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:content-start">
              {featured.slice(1).map((project, i) => (
                <Reveal key={project.slug} delay={i * 90} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : undefined}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <img
            src={aboutDetail}
            alt="Textura de linho marfim iluminada por luz natural"
            loading="lazy"
            width={900}
            height={900}
            className="aspect-square w-full object-cover"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Por que a Ambiente Smart"
            title="Cuidado em cada etapa, dos materiais ao acabamento."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {DIFFERENTIALS.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60} className="flex items-center gap-3 border-b border-border pb-4">
                <span className="size-1.5 shrink-0 bg-bronze" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Depoimentos — ocultos até existirem depoimentos reais (SHOW_TESTIMONIALS) */}
      {SHOW_TESTIMONIALS ? (
        <section className="bg-cream py-20 md:py-28">
          <div className="container-site">
            <SectionHeading eyebrow="Depoimentos" title="O que dizem sobre os nossos projetos." align="center" />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {DEMO_TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className="border border-border bg-background p-8">
                  <p className="text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.context}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Perguntas que recebemos com carinho."
            description={`Atendemos ${COMPANY_ADDRESS} e região. Não encontrou sua dúvida? Fale com a nossa equipe.`}
          />
          <Reveal delay={120}>
            <Link to="/contato" className="btn btn-outline mt-8">
              Falar com a equipe
            </Link>
          </Reveal>
        </div>
        <Reveal>
          <FAQAccordion items={HOME_FAQS} />
        </Reveal>
      </section>

      <QuoteCTA />
    </>
  );
}
