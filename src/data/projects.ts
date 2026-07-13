import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const PROJECT_CATEGORIES = [
  "Todos",
  "Salas",
  "Quartos",
  "Escritórios",
  "Varandas",
  "Ambientes comerciais",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  slug: string;
  name: string;
  category: Exclude<ProjectCategory, "Todos">;
  services: string[];
  serviceSlugs: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  context: string;
  need: string;
  solution: string;
  materials: string[];
}

/**
 * Projetos de demonstração com imagens ilustrativas.
 * SUBSTITUIR pelas fotos e descrições de projetos reais da Ambiente Smart.
 */
export const PROJECTS: Project[] = [
  {
    slug: "sala-de-estar-marfim",
    name: "Sala de estar em tons de marfim",
    category: "Salas",
    services: ["Cortinas wave de linho", "Tapete sob medida"],
    serviceSlugs: ["cortinas", "tapetes"],
    image: project1,
    imageWidth: 1600,
    imageHeight: 1200,
    context:
      "Sala de estar ampla com grandes panos de vidro e incidência de luz durante toda a tarde.",
    need: "Suavizar a entrada de luz sem perder a vista, mantendo a leitura clara e contínua da arquitetura.",
    solution:
      "Cortinas wave de linho do teto ao piso, com trilho embutido na sanca, e tapete sob medida delimitando a área de estar.",
    materials: ["Linho em tom marfim", "Trilho embutido", "Tapete de trama fechada em fios naturais"],
  },
  {
    slug: "suite-luz-controlada",
    name: "Suíte com luz totalmente controlada",
    category: "Quartos",
    services: ["Cortina blackout", "Cortina translúcida"],
    serviceSlugs: ["cortinas"],
    image: project2,
    imageWidth: 1024,
    imageHeight: 1280,
    context: "Suíte principal voltada para o nascente, com pedido de escurecimento completo para o descanso.",
    need: "Bloquear a luz da manhã sem abrir mão da leveza durante o dia.",
    solution:
      "Camada dupla: blackout encorpado e translúcido leve em trilhos independentes, permitindo graduar a luz ao longo do dia.",
    materials: ["Tecido blackout", "Voil translúcido", "Trilho duplo discreto"],
  },
  {
    slug: "home-office-luz-norte",
    name: "Home office com luz filtrada",
    category: "Escritórios",
    services: ["Persianas horizontais em madeira"],
    serviceSlugs: ["persianas"],
    image: project3,
    imageWidth: 1024,
    imageHeight: 1280,
    context: "Escritório residencial com janela ampla e reflexo constante na tela de trabalho.",
    need: "Controlar o reflexo e o calor da tarde sem escurecer o ambiente.",
    solution:
      "Persianas horizontais em madeira clara, com regulagem lâmina a lâmina para direcionar a luz ao longo do dia.",
    materials: ["Madeira clara", "Acionamento com regulagem fina"],
  },
  {
    slug: "varanda-entardecer",
    name: "Varanda protegida para o entardecer",
    category: "Varandas",
    services: ["Toldo retrátil"],
    serviceSlugs: ["toldos"],
    image: project4,
    imageWidth: 1024,
    imageHeight: 1280,
    context: "Varanda de apartamento com sol forte no fim da tarde, usada como espaço de convivência.",
    need: "Criar sombra nos horários de maior incidência sem fechar a varanda permanentemente.",
    solution:
      "Toldo retrátil em tecido técnico na cor areia, recolhendo totalmente quando a família quer céu aberto.",
    materials: ["Tecido acrílico técnico", "Estrutura com braços articulados"],
  },
  {
    slug: "sala-de-reunioes-executiva",
    name: "Sala de reuniões executiva",
    category: "Ambientes comerciais",
    services: ["Cortinas técnicas", "Persianas"],
    serviceSlugs: ["cortinas", "persianas"],
    image: project5,
    imageWidth: 1024,
    imageHeight: 1280,
    context: "Sala de reuniões corporativa com fachada envidraçada e apresentações frequentes em tela.",
    need: "Alternar rapidamente entre luz natural plena e ambiente adequado para projeção.",
    solution:
      "Cortinas de tecido técnico em toda a fachada interna, com camada translúcida para o dia a dia e fechamento completo para apresentações.",
    materials: ["Tecido técnico acústico", "Trilhos contínuos de baixo ruído"],
  },
  {
    slug: "sala-de-jantar-boiserie",
    name: "Sala de jantar com boiserie",
    category: "Salas",
    services: ["Boiserie", "Cortinas de linho"],
    serviceSlugs: ["boiserie", "cortinas"],
    image: project6,
    imageWidth: 1024,
    imageHeight: 1280,
    context: "Sala de jantar de apartamento clássico-contemporâneo, com pé-direito generoso.",
    need: "Dar caráter às paredes lisas e emoldurar a janela sem competir com o mobiliário.",
    solution:
      "Boiserie em tom marfim do rodapé à sanca, com cortinas de linho no mesmo campo cromático para unidade visual.",
    materials: ["Molduras em poliestireno de alta definição", "Pintura acetinada", "Linho marfim"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
