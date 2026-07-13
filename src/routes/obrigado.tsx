import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/shared/Reveal";

export const Route = createFileRoute("/obrigado")({
  component: ObrigadoPage,
  head: () => ({
    meta: [
      { title: "Solicitação Enviada | Will Decor" },
      { name: "description", content: "Recebemos a sua solicitação. Em breve nossa equipe entrará em contato." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Solicitação Enviada | Will Decor" },
      { property: "og:url", content: "/obrigado" },
    ],
    links: [{ rel: "canonical", href: "/obrigado" }],
  }),
});

function ObrigadoPage() {
  return (
    <section className="flex min-h-[80vh] items-center bg-background pt-24">
      <div className="container-site pb-20">
        <Reveal className="mx-auto max-w-xl text-center">
          <CheckCircle2 className="mx-auto size-12 text-bronze" aria-hidden="true" strokeWidth={1.25} />
          <p className="eyebrow mt-6 text-taupe">Solicitação enviada</p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-6xl">Obrigado pelo seu contato.</h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Recebemos as informações do seu projeto. Nossa equipe vai analisá-las com atenção e retornará em breve para
            entender os próximos detalhes e, se fizer sentido, agendar a visita de medição.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl("Olá! Acabei de enviar uma solicitação de orçamento pelo site.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              Adiantar pelo WhatsApp
            </a>
            <Link to="/projetos" className="btn btn-outline w-full sm:w-auto">
              Ver projetos enquanto isso
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
