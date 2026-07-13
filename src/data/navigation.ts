export interface NavItem {
  label: string;
  to: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Contato", to: "/contato" },
];

export const LEGAL_NAV: NavItem[] = [
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  { label: "Termos de Uso", to: "/termos-de-uso" },
];
