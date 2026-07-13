import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { BRAND, CONTACT_EMAIL } from "@/data/brand";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PoliticaPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Ambiente Smart" },
      {
        name: "description",
        content: "Saiba como a Ambiente Smart coleta, utiliza e protege os dados pessoais informados em seus canais de atendimento.",
      },
      { property: "og:title", content: "Política de Privacidade | Ambiente Smart" },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

const sectionTitle = "mt-10 font-display text-2xl text-foreground";
const paragraph = "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base";

function PoliticaPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Política de Privacidade"
        description="Como tratamos as informações que você compartilha conosco."
        breadcrumbs={[{ label: "Política de Privacidade" }]}
      />
      <section className="container-site max-w-3xl py-16 md:py-20">
        <p className={paragraph}>
          Esta política descreve, de forma simples e transparente, como a {BRAND.name} trata os dados pessoais
          informados por você em nossos formulários e canais de atendimento.
        </p>

        <h2 className={sectionTitle}>Quais dados coletamos</h2>
        <p className={paragraph}>
          Coletamos apenas os dados necessários para o atendimento da sua solicitação: nome, telefone/WhatsApp, e-mail,
          cidade ou região e as informações sobre o projeto que você decidir compartilhar.
        </p>

        <h2 className={sectionTitle}>Para que usamos os dados</h2>
        <p className={paragraph}>
          Utilizamos os dados exclusivamente para responder ao seu contato, elaborar orçamentos, agendar visitas e
          conduzir o atendimento do seu projeto. Não vendemos nem compartilhamos seus dados com terceiros para fins de
          marketing.
        </p>

        <h2 className={sectionTitle}>Armazenamento e segurança</h2>
        <p className={paragraph}>
          Adotamos práticas razoáveis de segurança para proteger as informações recebidas. Os dados são mantidos apenas
          pelo tempo necessário ao atendimento e às obrigações legais aplicáveis.
        </p>

        <h2 className={sectionTitle}>Seus direitos</h2>
        <p className={paragraph}>
          Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar a confirmação, correção ou exclusão
          dos seus dados pessoais a qualquer momento pelo e-mail {CONTACT_EMAIL}.
        </p>

        <h2 className={sectionTitle}>Contato</h2>
        <p className={paragraph}>
          Em caso de dúvidas sobre esta política, fale conosco pelo e-mail {CONTACT_EMAIL}.
        </p>

        <p className="mt-10 text-xs text-muted-foreground">
          Este texto é um modelo inicial e deve ser revisado pelo responsável legal da empresa antes da publicação
          definitiva.
        </p>
      </section>
    </>
  );
}
