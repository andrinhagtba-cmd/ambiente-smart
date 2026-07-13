import { Link, createFileRoute } from "@tanstack/react-router";
import { Ear, Eye, HandHeart, Layers, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { QuoteCTA } from "@/components/shared/QuoteCTA";
import aboutMain from "@/assets/about-main.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import project6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre a Ambiente Smart | Decoração Sob Medida em Brasília" },
      {
        name: "description",
        content:
          "Conheça a Ambiente Smart: atendimento consultivo, curadoria de materiais e soluções de decoração sob medida para ambientes residenciais e comerciais.",
      },
      { property: "og:title", content: "Sobre a Ambiente Smart | Decoração Sob Medida em Brasília" },
      {
        property: "og:description",
        content: "Atendimento consultivo, curadoria de materiais e soluções sob medida.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

const VALUES = [
  { icon: Ear, name: "Escuta", text: "Todo projeto começa por entender a rotina, o gosto e a necessidade de quem vive o espaço." },
  { icon: Ruler, name: "Personalização", text: "Nada é de prateleira: medidas, materiais e acabamentos são definidos para cada ambiente." },
  { icon: Layers, name: "Funcionalidade", text: "Beleza que funciona no dia a dia — luz controlada, conforto e praticidade." },
  { icon: Eye, name: "Estética", text: "Proporções, texturas e tons escolhidos em equilíbrio com a arquitetura." },
  { icon: HandHeart, name: "Cuidado", text: "Atenção aos detalhes em todas as etapas, da medição à instalação." },
  { icon: ShieldCheck, name: "Transparência", text: "Comunicação clara sobre prazos, materiais e cada decisão do projeto." },
];

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Ambiente Smart"
        title="Decoração sob medida, feita com escuta e cuidado."
        description="Somos um estúdio de soluções sob medida para janelas, paredes e ambientes. Trabalhamos próximos de cada cliente para traduzir necessidades em composições elegantes e funcionais."
        breadcrumbs={[{ label: "Sobre" }]}
      />

      {/* Apresentação */}
      <section className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_40px_100px_-40px_oklch(0.185_0.008_70/0.45)] ring-1 ring-border/60">
              <img
                src={aboutMain}
                alt="Ambiente contemporâneo com cortinas de linho e materiais naturais"
                loading="lazy"
                width={1024}
                height={1400}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            {/* Selo flutuante */}
            <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-2xl border border-border/70 bg-cream px-5 py-4 shadow-[0_25px_50px_-25px_oklch(0.185_0.008_70/0.5)] backdrop-blur-md md:flex">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-bronze to-primary text-ink-foreground">
                <Sparkles className="size-4" aria-hidden strokeWidth={2} />
              </div>
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-taupe">Estúdio</p>
                <p className="font-display text-lg font-bold leading-tight text-foreground">Ambiente Smart</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Nossa filosofia"
            title="Cada ambiente tem uma luz própria."
            description="Antes de falar de tecidos ou modelos, observamos como a luz entra, como o espaço é usado e o que ele pede. É esse olhar que orienta a curadoria de materiais, proporções e acabamentos escolhidos para o espaço."
          />
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Atuamos com cortinas, persianas, toldos, papéis de parede, tapetes, boiserie e cabeceiras — sempre sob
              medida, sempre com instalação profissional.
            </p>
            <p>
              O atendimento é consultivo do início ao fim: apresentamos possibilidades, explicamos diferenças e
              ajudamos você a decidir com segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Valores — cards arredondados premium */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Valores" title="O que guia cada projeto." align="center" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, name, text }, i) => (
              <Reveal
                as="li"
                key={name}
                delay={(i % 3) * 90}
                className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-background p-8 shadow-[0_18px_50px_-30px_oklch(0.185_0.008_70/0.3)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-bronze/50 hover:shadow-[0_35px_70px_-30px_oklch(0.185_0.008_70/0.45)]"
              >
                {/* Glow bronze radial no hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "oklch(0.645 0.062 70 / 0.35)" }}
                />
                <div className="relative">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-surface-warm to-cream text-ink shadow-inner ring-1 ring-border/60 transition-all duration-500 group-hover:from-bronze group-hover:to-primary group-hover:text-ink-foreground group-hover:ring-transparent">
                    <Icon className="size-6" aria-hidden strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Materiais e detalhes */}
      <section className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_25px_60px_-30px_oklch(0.185_0.008_70/0.4)] ring-1 ring-border/60">
              <img
                src={aboutDetail}
                alt="Detalhe de textura de linho em tom marfim"
                loading="lazy"
                width={900}
                height={900}
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_25px_60px_-30px_oklch(0.185_0.008_70/0.4)] ring-1 ring-border/60">
              <img
                src={project6}
                alt="Sala de jantar com boiserie e cortinas de linho"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Compromisso"
            title="Personalização e acabamento como princípio."
            description="Materiais, proporções e acabamentos são escolhidos para o espaço — nunca o contrário. Acompanhamos de perto a produção e finalizamos cada instalação com atenção aos detalhes."
          />
        </div>
      </section>

      {/* Processo */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Processo de trabalho" title="Do primeiro contato à instalação." align="center" />
          <div className="mt-14">
            <ProcessSteps />
          </div>
          <Reveal className="mt-14 text-center">
            <Link to="/orcamento" className="btn btn-primary">
              Solicitar orçamento
            </Link>
          </Reveal>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
