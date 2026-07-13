import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Instagram, Menu, MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "@/data/navigation";
import { SERVICES } from "@/data/services";
import { CONTACT_PHONE_DISPLAY, INSTAGRAM_URL } from "@/data/brand";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import menuBg from "@/assets/motorized.jpg";

function Logo({ light }: { light: boolean }) {
  return (
    <Link to="/" aria-label="Ambiente Smart — página inicial" className="flex items-baseline gap-2">
      <span
        className={cn(
          "font-display text-[1.55rem] leading-none tracking-[0.02em]",
          light ? "text-cream" : "text-foreground",
        )}
      >
        Ambiente
      </span>
      <span
        className={cn(
          "text-[0.8rem] font-semibold uppercase leading-none tracking-[0.34em]",
          light ? "text-cream/80" : "text-taupe",
        )}
      >
        Smart
      </span>
    </Link>
  );
}

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const linkBase = cn(
    "text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors",
    transparent ? "text-cream/85 hover:text-cream" : "text-muted-foreground hover:text-foreground",
  );
  const activeClass = transparent ? "text-cream" : "text-foreground";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/90 backdrop-blur-md",
      )}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
        <Logo light={transparent} />

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {MAIN_NAV.map((item) =>
            item.to === "/servicos" ? (
              <div key={item.to} className="group relative">
                <Link
                  to="/servicos"
                  className={cn(
                    linkBase,
                    "inline-flex items-center gap-1.5",
                    pathname.startsWith("/servicos") && activeClass,
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="border border-border bg-cream p-2 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.18)]">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/servicos/$slug"
                        params={{ slug: s.slug }}
                        className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={cn(linkBase, pathname === item.to && activeClass)}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/orcamento" className={cn("btn", transparent ? "btn-outline-light" : "btn-primary", "min-h-[2.6rem] px-5 text-[0.72rem]")}>
            Solicitar orçamento
          </Link>
        </div>

        {/* Abrir menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          className={cn(
            "flex size-11 items-center justify-center lg:hidden",
            transparent ? "text-cream" : "text-foreground",
          )}
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Menu mobile em tela cheia */}
      {menuOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-background lg:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
        >
          <div className="container-site flex h-[4.5rem] shrink-0 items-center justify-between">
            <Logo light={false} />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              className="flex size-11 items-center justify-center text-foreground"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Navegação principal" className="container-site flex-1 overflow-y-auto pb-8 pt-4">
            <ul className="divide-y divide-border">
              {MAIN_NAV.map((item) =>
                item.to === "/servicos" ? (
                  <li key={item.to}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between py-4 font-display text-2xl text-foreground"
                    >
                      Serviços
                      <ChevronDown
                        className={cn("size-5 text-taupe transition-transform", servicesOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    {servicesOpen ? (
                      <ul className="pb-4 pl-4">
                        <li>
                          <Link to="/servicos" className="block py-2 text-sm text-muted-foreground">
                            Todos os serviços
                          </Link>
                        </li>
                        {SERVICES.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to="/servicos/$slug"
                              params={{ slug: s.slug }}
                              className="block py-2 text-sm text-muted-foreground"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ) : (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block py-4 font-display text-2xl text-foreground"
                      activeProps={{ className: "block py-4 font-display text-2xl text-bronze" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8 space-y-3">
              <Link to="/orcamento" className="btn btn-primary w-full">
                Solicitar orçamento
              </Link>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
                Falar pelo WhatsApp
              </a>
              <p className="flex items-center justify-center gap-2 pt-2 text-sm text-muted-foreground">
                <Phone className="size-4" aria-hidden="true" />
                {CONTACT_PHONE_DISPLAY}
              </p>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
