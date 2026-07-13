import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { BRAND, CONTACT_EMAIL } from "@/data/brand";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermosPage,
  head: () => ({
    meta: [
      { title: "Termos de Uso | Will Decor" },
      {
        name: "description",
        content: "Condições de uso do site da Will Decor: conteúdo institucional, orçamentos e canais de atendimento.",
      },
      { property: "og:title", content: "Termos de Uso | Will Decor" },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
});

const sectionTitle = "mt-10 font-display text-2xl text-foreground";
const paragraph = "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base";

function TermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Termos de Uso"
        description="Condições para utilização deste site e dos nossos canais de atendimento."
        breadcrumbs={[{ label: "Termos de Uso" }]}
      />
      <section className="container-site max-w-3xl py-16 md:py-20">
        <h2 className={sectionTitle}>Sobre este site</h2>
        <p className={paragraph}>
          Este site tem caráter institucional e apresenta os serviços de decoração sob medida oferecidos pela{" "}
          {BRAND.name}. As informações aqui publicadas não constituem oferta com valor fixo: cada projeto é avaliado
          individualmente e os valores são apresentados somente em orçamento.
        </p>

        <h2 className={sectionTitle}>Orçamentos e atendimento</h2>
        <p className={paragraph}>
          As solicitações enviadas pelos formulários ou pelo WhatsApp não geram obrigação de contratação. Os prazos,
          condições e especificações de cada projeto são definidos em proposta própria, após a visita de medição.
        </p>

        <h2 className={sectionTitle}>Imagens e conteúdo</h2>
        <p className={paragraph}>
          Os textos, marcas e imagens exibidos neste site pertencem à {BRAND.name} ou são utilizados com finalidade
          ilustrativa. É vedada a reprodução sem autorização prévia.
        </p>

        <h2 className={sectionTitle}>Responsabilidades</h2>
        <p className={paragraph}>
          Empenhamo-nos para manter as informações do site atualizadas e corretas. Ainda assim, características de
          produtos e materiais podem mudar sem aviso, e a especificação final é sempre confirmada na proposta.
        </p>

        <h2 className={sectionTitle}>Contato</h2>
        <p className={paragraph}>Dúvidas sobre estes termos podem ser enviadas para {CONTACT_EMAIL}.</p>

        <p className="mt-10 text-xs text-muted-foreground">
          Este texto é um modelo inicial e deve ser revisado pelo responsável legal da empresa antes da publicação
          definitiva.
        </p>
      </section>
    </>
  );
}
