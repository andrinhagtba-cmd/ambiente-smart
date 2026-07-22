import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Instagram, Menu, MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "@/data/navigation";
import { SERVICES } from "@/data/services";
import { CONTACT_PHONE_DISPLAY, INSTAGRAM_URL } from "@/data/brand";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import menuBg from "@/assets/motorized.jpg";
import logoAsset from "@/assets/tecelar-logo.png.asset.json";

function Logo({ light }: { light: boolean }) {
  return (
    <Link to="/" aria-label="Tecelar — página inicial" className="flex items-center">
      <img
        src={logoAsset.url}
        alt="Tecelar — Cortinas e Persianas DF"
        className={cn(
          "h-10 w-auto md:h-12 transition",
          light ? "brightness-0 invert" : "",
        )}
      />
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
          className="fixed inset-0 z-50 flex h-dvh flex-col overflow-hidden bg-ink text-ink-foreground lg:hidden"
        >
          {/* Camadas visuais: cortina + degradê premium + brilho bronze */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${menuBg})` }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-bronze/20 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-0 h-[22rem] w-[22rem] rounded-full bg-primary/25 blur-[140px]"
          />

          {/* Header do menu */}
          <div className="relative z-10 container-site flex h-[4.5rem] shrink-0 items-center justify-between">
            <Logo light />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              className="flex size-11 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-cream backdrop-blur-md transition-all hover:border-bronze/60 hover:bg-bronze/15 hover:text-bronze"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Navegação principal"
            className="relative z-10 container-site flex-1 overflow-y-auto pb-10 pt-6"
          >
            <p className="eyebrow text-bronze/80">Navegação</p>

            <ul className="mt-5 space-y-2">
              {MAIN_NAV.map((item, index) =>
                item.to === "/servicos" ? (
                  <li
                    key={item.to}
                    className="overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] backdrop-blur-md"
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[0.65rem] tracking-widest text-bronze/70">
                          0{index + 1}
                        </span>
                        <span className="font-display text-2xl text-cream">Serviços</span>
                      </span>
                      <ChevronDown
                        className={cn(
                          "size-5 text-bronze transition-transform duration-300",
                          servicesOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {servicesOpen ? (
                      <ul className="border-t border-cream/10 bg-ink/40 px-5 py-3">
                        <li>
                          <Link
                            to="/servicos"
                            className="flex items-center justify-between py-2.5 text-sm text-cream/85 transition-colors hover:text-bronze"
                          >
                            Todos os serviços
                            <ChevronRight className="size-4 opacity-60" aria-hidden="true" />
                          </Link>
                        </li>
                        {SERVICES.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to="/servicos/$slug"
                              params={{ slug: s.slug }}
                              className="flex items-center justify-between py-2.5 text-sm text-cream/75 transition-colors hover:text-bronze"
                            >
                              {s.name}
                              <ChevronRight className="size-4 opacity-50" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ) : (
                  <li
                    key={item.to}
                    className="overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] backdrop-blur-md transition-colors hover:border-bronze/40 hover:bg-cream/[0.07]"
                  >
                    <Link
                      to={item.to}
                      className="flex items-center justify-between px-5 py-4"
                      activeProps={{ className: "flex items-center justify-between px-5 py-4 bg-bronze/10" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[0.65rem] tracking-widest text-bronze/70">
                          0{index + 1}
                        </span>
                        <span className="font-display text-2xl text-cream">{item.label}</span>
                      </span>
                      <ChevronRight className="size-4 text-bronze/80" aria-hidden="true" />
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className="mt-10 space-y-3">
              <Link
                to="/orcamento"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-bronze via-bronze to-primary px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink shadow-[0_18px_45px_-12px_rgba(0,0,0,0.65)] transition-transform hover:scale-[1.01]"
              >
                Solicitar orçamento
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur-md transition-colors hover:border-bronze hover:text-bronze"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Falar pelo WhatsApp
              </a>
            </div>

            <div className="mt-10 space-y-4 border-t border-cream/10 pt-6">
              <p className="eyebrow text-bronze/70">Contato</p>
              <a
                href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-sm text-cream/90"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-cream/15 bg-cream/5">
                  <Phone className="size-4 text-bronze" aria-hidden="true" />
                </span>
                {CONTACT_PHONE_DISPLAY}
              </a>
              {INSTAGRAM_URL ? (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-cream/90"
                >
                  <span className="flex size-9 items-center justify-center rounded-full border border-cream/15 bg-cream/5">
                    <Instagram className="size-4 text-bronze" aria-hidden="true" />
                  </span>
                  Instagram
                </a>
              ) : null}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
