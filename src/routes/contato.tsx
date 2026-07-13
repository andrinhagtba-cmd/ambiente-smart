import { Link, createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";
import {
  BUSINESS_HOURS,
  COMPANY_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
} from "@/data/brand";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato | Will Decor" },
      {
        name: "description",
        content:
          "Fale com a Will Decor: WhatsApp, telefone, e-mail e horários de atendimento. Estamos prontos para conversar sobre o seu projeto.",
      },
      { property: "og:title", content: "Contato | Will Decor" },
      { property: "og:description", content: "Fale com a nossa equipe sobre o seu projeto de decoração sob medida." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu ambiente."
        description="Escolha o canal que preferir. Respondemos com atenção e sem compromisso."
        breadcrumbs={[{ label: "Contato" }]}
      />

      <section className="container-site grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="space-y-8">
          <Reveal className="border border-border bg-cream p-8">
            <p className="eyebrow text-taupe">Canais de atendimento</p>
            <ul className="mt-6 space-y-5 text-sm">
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-medium text-foreground transition-colors hover:text-taupe"
                >
                  <MessageCircle className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                  WhatsApp — atendimento rápido
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_LINK}`}
                  className="flex items-center gap-3 font-medium text-foreground transition-colors hover:text-taupe"
                >
                  <Phone className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 font-medium text-foreground transition-colors hover:text-taupe"
                >
                  <Mail className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-medium text-foreground transition-colors hover:text-taupe"
                >
                  <Instagram className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                {COMPANY_ADDRESS}
              </li>
            </ul>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8 w-full"
            >
              Falar pelo WhatsApp
            </a>
          </Reveal>

          <Reveal delay={100} className="border border-border bg-cream p-8">
            <p className="eyebrow flex items-center gap-2 text-taupe">
              <Clock className="size-4" aria-hidden="true" />
              Horários de atendimento
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {BUSINESS_HOURS.map((h) => (
                <li key={h.days} className="flex items-center justify-between gap-4 border-b border-border pb-3">
                  <span className="text-muted-foreground">{h.days}</span>
                  <span className="font-medium text-foreground">{h.hours}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            {GOOGLE_MAPS_URL ? (
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
              >
                Ver localização no mapa
              </a>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center border border-dashed border-border bg-secondary text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Mapa — configurar GOOGLE_MAPS_URL em src/data/brand.ts
              </div>
            )}
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">Envie uma mensagem.</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Para um atendimento completo, com medidas e detalhes do ambiente, prefira o{" "}
              <Link to="/orcamento" className="underline underline-offset-2 hover:text-foreground">
                formulário de orçamento
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <QuoteForm compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
