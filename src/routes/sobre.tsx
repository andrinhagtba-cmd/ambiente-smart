import { Link, createFileRoute } from "@tanstack/react-router";
import { Ear, Eye, HandHeart, Layers, Ruler, ShieldCheck } from "lucide-react";
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
      { title: "Sobre a Will Decor | Decoração Sob Medida em Brasília" },
      {
        name: "description",
        content:
          "Conheça a Will Decor: atendimento consultivo, curadoria de materiais e soluções de decoração sob medida para ambientes residenciais e comerciais.",
      },
      { property: "og:title", content: "Sobre a Will Decor | Decoração Sob Medida em Brasília" },
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
        eyebrow="Sobre a Will Decor"
        title="Decoração sob medida, feita com escuta e cuidado."
        description="Somos um estúdio de soluções sob medida para janelas, paredes e ambientes. Trabalhamos próximos de cada cliente para traduzir necessidades em composições elegantes e funcionais."
        breadcrumbs={[{ label: "Sobre" }]}
      />

      {/* Apresentação */}
      <section className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={aboutMain}
            alt="Ambiente contemporâneo com cortinas de linho e materiais naturais"
            loading="lazy"
            width={1024}
            height={1400}
            className="aspect-[3/4] w-full object-cover"
          />
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
          {/* TODO: inserir aqui a história real da empresa, foto da equipe e do showroom quando disponíveis. */}
        </div>
      </section>

      {/* Valores */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Valores" title="O que guia cada projeto." align="center" />
          <ul className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, name, text }, i) => (
              <Reveal as="li" key={name} delay={(i % 3) * 90} className="bg-background p-8">
                <Icon className="size-5 text-bronze" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-4 font-sans text-base font-semibold text-foreground">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Materiais e detalhes */}
      <section className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <Reveal>
            <img
              src={aboutDetail}
              alt="Detalhe de textura de linho em tom marfim"
              loading="lazy"
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <img
              src={project6}
              alt="Sala de jantar com boiserie e cortinas de linho"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
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
          <div className="mt-12">
            <ProcessSteps />
          </div>
          <Reveal className="mt-12 text-center">
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
