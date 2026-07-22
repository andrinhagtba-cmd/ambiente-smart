import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
      { title: "Contato | Ambiente Smart" },
      {
        name: "description",
        content:
          "Fale com a Ambiente Smart: WhatsApp, telefone, e-mail e horários de atendimento. Estamos prontos para conversar sobre o seu projeto.",
      },
      { property: "og:title", content: "Contato | Ambiente Smart" },
      { property: "og:description", content: "Fale com a nossa equipe sobre o seu projeto de decoração sob medida." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

interface ChannelProps {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  featured?: boolean;
}

function ChannelCard({ icon: Icon, label, value, href, external, featured }: ChannelProps) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${
            featured
              ? "bg-gradient-to-br from-bronze to-primary text-ink-foreground shadow-lg"
              : "bg-surface-warm text-ink group-hover:bg-bronze group-hover:text-ink-foreground"
          }`}
        >
          <Icon className="size-5" aria-hidden strokeWidth={1.8} />
        </div>
        {href ? (
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-full border border-border/60 bg-background/70 text-taupe transition-all duration-500 group-hover:rotate-45 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink-foreground"
          >
            <ArrowUpRight className="size-3.5" />
          </span>
        ) : null}
      </div>
      <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-taupe">{label}</p>
      <p className="mt-1 text-base font-semibold text-foreground">{value}</p>
    </>
  );

  const baseClasses =
    "group relative block h-full overflow-hidden rounded-[1.75rem] border border-border/70 p-6 shadow-[0_18px_50px_-30px_oklch(0.185_0.008_70/0.3)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-bronze/50 hover:shadow-[0_30px_70px_-30px_oklch(0.185_0.008_70/0.45)]";
  const bg = featured
    ? "bg-gradient-to-br from-cream to-surface-soft"
    : "bg-cream";

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${bg}`}
      >
        {inner}
      </a>
    );
  }
  return <div className={`${baseClasses} ${bg}`}>{inner}</div>;
}

function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu ambiente."
        description="Escolha o canal que preferir. Respondemos com atenção e sem compromisso."
        breadcrumbs={[{ label: "Contato" }]}
      />

      {/* Grid de canais premium */}
      <section className="container-site pb-4 pt-8 md:pt-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <ChannelCard
              icon={MessageCircle}
              label="WhatsApp"
              value="Atendimento rápido"
              href={buildWhatsAppUrl()}
              external
              featured
            />
          </Reveal>
          <Reveal delay={80}>
            <ChannelCard icon={Phone} label="Telefone" value={CONTACT_PHONE_DISPLAY} href={`tel:${CONTACT_PHONE_LINK}`} />
          </Reveal>
          <Reveal delay={160}>
            <ChannelCard icon={Mail} label="E-mail" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
          </Reveal>
          <Reveal delay={240}>
            <ChannelCard icon={Instagram} label="Instagram" value="@tecelarcortinas" href={INSTAGRAM_URL} external />
          </Reveal>
        </div>
      </section>

      <section className="container-site grid gap-8 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div className="space-y-6">
          {/* Horários */}
          <Reveal className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-cream p-8 shadow-[0_20px_50px_-30px_oklch(0.185_0.008_70/0.3)]">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-surface-warm text-ink">
                <Clock className="size-5" aria-hidden strokeWidth={1.8} />
              </div>
              <p className="eyebrow text-taupe">Horários</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {BUSINESS_HOURS.map((h) => (
                <li
                  key={h.days}
                  className="flex items-center justify-between gap-4 border-b border-border/60 pb-3 last:border-0"
                >
                  <span className="text-muted-foreground">{h.days}</span>
                  <span className="font-semibold text-foreground">{h.hours}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Endereço */}
          <Reveal
            delay={120}
            className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-gradient-to-br from-ink to-primary p-8 text-ink-foreground shadow-[0_25px_60px_-30px_oklch(0.185_0.008_70/0.55)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-40 blur-3xl"
              style={{ background: "oklch(0.645 0.062 70 / 0.55)" }}
            />
            <div className="relative">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-ink-foreground/10 text-bronze backdrop-blur-sm">
                <MapPin className="size-5" aria-hidden strokeWidth={1.8} />
              </div>
              <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bronze">Endereço</p>
              <p className="mt-2 text-base font-medium leading-relaxed text-ink-foreground/90">{COMPANY_ADDRESS}</p>
              {GOOGLE_MAPS_URL ? (
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light mt-6 w-full"
                >
                  Ver no mapa
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>

        {/* Formulário */}
        <Reveal
          delay={80}
          className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-cream p-8 shadow-[0_30px_80px_-40px_oklch(0.185_0.008_70/0.4)] md:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "oklch(0.847 0.024 75 / 0.7)" }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Envie uma mensagem</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Para um atendimento completo, com medidas e detalhes do ambiente, prefira o{" "}
              <Link
                to="/orcamento"
                className="font-semibold text-foreground underline decoration-bronze decoration-2 underline-offset-4 transition-colors hover:text-bronze"
              >
                formulário de orçamento
              </Link>
              .
            </p>
            <div className="mt-8">
              <QuoteForm compact />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
