import { Link, useLocation } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Botão flutuante de WhatsApp (desktop) e barra fixa de CTA (mobile). */
export function FloatingCTAs() {
  const { pathname } = useLocation();

  return (
    <>
      {/* WhatsApp flutuante — desktop */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_-10px_rgb(0_0_0/0.35)] transition-transform hover:scale-105 md:flex"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>

      {/* Barra fixa de CTA — mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid h-[4.25rem] grid-cols-2 border-t border-border bg-cream/95 backdrop-blur-md md:hidden">
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center justify-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-foreground"
        >
          <MessageCircle className="size-4 text-bronze" aria-hidden="true" />
          WhatsApp
        </a>
        {pathname === "/orcamento" ? (
          <span className="flex items-center justify-center bg-secondary text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Preencha o formulário
          </span>
        ) : (
          <Link
            to="/orcamento"
            className="flex min-h-11 items-center justify-center bg-primary text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
          >
            Solicitar orçamento
          </Link>
        )}
      </div>
    </>
  );
}
