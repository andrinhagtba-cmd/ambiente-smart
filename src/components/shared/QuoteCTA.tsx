import { Link } from "@tanstack/react-router";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import ctaBg from "@/assets/cta-bg.jpg";

interface QuoteCTAProps {
  title?: string;
  description?: string;
}

export function QuoteCTA({
  title = "Seu ambiente merece uma solução criada para ele.",
  description = "Conte o que você imagina. Nossa equipe ajudará a transformar sua necessidade em uma composição funcional e elegante.",
}: QuoteCTAProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={ctaBg}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 size-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-ink/55" aria-hidden="true" />
      <div className="container-site py-24 text-center md:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-4xl leading-[1.1] text-ink-foreground md:text-5xl lg:text-[3.4rem]">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">{description}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/orcamento" className="btn btn-light w-full sm:w-auto">
              Solicitar orçamento
            </Link>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light w-full sm:w-auto"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
