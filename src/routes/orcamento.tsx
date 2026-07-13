import { Link, createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Reveal } from "@/components/shared/Reveal";
import { PROCESS_STEPS } from "@/components/shared/ProcessSteps";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/orcamento")({
  component: OrcamentoPage,
  head: () => ({
    meta: [
      { title: "Solicitar Orçamento | Ambiente Smart" },
      {
        name: "description",
        content:
          "Solicite um orçamento de cortinas, persianas, toldos e soluções sob medida. Conte sobre o seu projeto e receba um atendimento consultivo.",
      },
      { property: "og:title", content: "Solicitar Orçamento | Ambiente Smart" },
      { property: "og:description", content: "Conte um pouco sobre o seu projeto e fale com um especialista." },
      { property: "og:url", content: "/orcamento" },
    ],
    links: [{ rel: "canonical", href: "/orcamento" }],
  }),
});

function OrcamentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Conte um pouco sobre o seu projeto."
        description="Preencha os campos abaixo com o que você já sabe — o restante a gente descobre juntos, na conversa e na visita de medição."
        breadcrumbs={[{ label: "Orçamento" }]}
      />

      <section className="container-site grid gap-14 py-16 md:py-24 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <Reveal>
          <QuoteForm />
        </Reveal>

        <div className="space-y-8">
          <Reveal className="border border-border bg-cream p-8">
            <p className="eyebrow text-taupe">O que acontece depois</p>
            <ol className="mt-6 space-y-5">
              {PROCESS_STEPS.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="font-display text-2xl text-surface-warm">{step.number}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100} className="border border-border bg-cream p-8">
            <MessageCircle className="size-5 text-bronze" aria-hidden="true" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-2xl text-foreground">Prefere conversar agora?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Fale diretamente com um especialista pelo WhatsApp e tire suas dúvidas em poucos minutos.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-6 w-full"
            >
              Falar pelo WhatsApp
            </a>
          </Reveal>

          <Reveal delay={160} className="flex items-start gap-3 px-2 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-taupe" aria-hidden="true" />
            <p>
              Seus dados são usados apenas para o atendimento da sua solicitação, conforme a nossa{" "}
              <Link to="/politica-de-privacidade" className="underline underline-offset-2 hover:text-foreground">
                Política de Privacidade
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
