import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTAs } from "@/components/layout/FloatingCTAs";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <p className="eyebrow text-taupe">Erro 404</p>
        <h1 className="mt-4 font-display text-6xl text-foreground">Página não encontrada</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          O endereço que você acessou não existe ou foi movido. Que tal voltar ao início ou conhecer nossas soluções?
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            Voltar ao início
          </Link>
          <Link to="/servicos" className="btn btn-outline">
            Conhecer soluções
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo saiu do esperado. Você pode tentar novamente ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-primary"
          >
            Tentar novamente
          </button>
          <a href="/" className="btn btn-outline">
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ambiente Smart | Cortinas e Soluções Sob Medida em Brasília" },
      {
        name: "description",
        content:
          "Cortinas, persianas, toldos, papéis de parede, tapetes, boiserie e cabeceiras sob medida em Brasília. Solicite um orçamento com atendimento consultivo.",
      },
      { name: "author", content: "Ambiente Smart" },
      { property: "og:title", content: "Ambiente Smart | Cortinas e Soluções Sob Medida em Brasília" },
      {
        property: "og:description",
        content:
          "Cortinas, persianas, toldos, papéis de parede, tapetes, boiserie e cabeceiras sob medida em Brasília. Solicite um orçamento com atendimento consultivo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ambiente Smart" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ambiente Smart | Cortinas e Soluções Sob Medida em Brasília" },
      { name: "twitter:description", content: "Cortinas, persianas, toldos, papéis de parede, tapetes, boiserie e cabeceiras sob medida em Brasília. Solicite um orçamento com atendimento consultivo." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8ac2545e-08f4-40cd-8ccb-af471a7b4b9b/id-preview-7f69a9ef--590e00e1-eb9c-4bfb-93ec-8d8fc1fcc1b3.lovable.app-1783928185017.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8ac2545e-08f4-40cd-8ccb-af471a7b4b9b/id-preview-7f69a9ef--590e00e1-eb9c-4bfb-93ec-8d8fc1fcc1b3.lovable.app-1783928185017.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <FloatingCTAs />
    </QueryClientProvider>
  );
}
