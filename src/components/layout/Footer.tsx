import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { MAIN_NAV, LEGAL_NAV } from "@/data/navigation";
import { SERVICES } from "@/data/services";
import {
  
  COMPANY_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  INSTAGRAM_URL,
} from "@/data/brand";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import logoUrl from "@/assets/tecelar-logo.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logoUrl}
              alt="Tecelar — Cortinas e Persianas DF"
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              Soluções de decoração sob medida, com curadoria de materiais, atendimento consultivo e instalação
              profissional.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Ambiente Smart"
              className="mt-6 inline-flex size-11 items-center justify-center border border-ink-foreground/20 text-ink-foreground/80 transition-colors hover:border-bronze hover:text-bronze"
            >
              <Instagram className="size-5" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Menu do rodapé">
            <p className="eyebrow text-bronze">Navegação</p>
            <ul className="mt-5 space-y-3">
              {MAIN_NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/orcamento" className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                  Orçamento
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Serviços no rodapé">
            <p className="eyebrow text-bronze">Serviços</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-bronze">Contato</p>
            <ul className="mt-5 space-y-4 text-sm text-ink-muted">
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_LINK}`}
                  className="flex items-center gap-3 transition-colors hover:text-ink-foreground"
                >
                  <Phone className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 transition-colors hover:text-ink-foreground"
                >
                  <Mail className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-bronze" aria-hidden="true" />
                {COMPANY_ADDRESS}
              </li>
            </ul>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light mt-6 min-h-[2.6rem] px-5 text-[0.72rem]"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-foreground/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1.5 text-xs text-ink-muted">
            <p>© {year} Todos os direitos reservados · Tecelar Cortinas</p>
            <p className="flex items-center gap-1.5">
              Feito com <span aria-label="carinho" className="text-bronze">❤</span> por{" "}
              <a
                href="https://vtrvideo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold uppercase tracking-[0.18em] text-ink-foreground transition-colors hover:text-bronze"
              >
                VTRVIDEO
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs text-ink-muted transition-colors hover:text-ink-foreground"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-bronze"
            >
              Voltar ao topo
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
