import serviceCortinas from "@/assets/service-cortinas.jpg";
import servicePersianas from "@/assets/service-persianas.jpg";
import serviceToldos from "@/assets/service-toldos.jpg";
import servicePapeis from "@/assets/service-papeis.jpg";
import serviceTapetes from "@/assets/service-tapetes.jpg";
import serviceBoiserie from "@/assets/service-boiserie.jpg";
import serviceCabeceiras from "@/assets/service-cabeceiras.jpg";

import videoCortinas from "@/assets/service-cortinas.mp4.asset.json";
import videoPersianas from "@/assets/service-persianas.mp4.asset.json";
import videoToldos from "@/assets/service-toldos.mp4.asset.json";
import videoPapeis from "@/assets/service-papeis.mp4.asset.json";
import videoTapetes from "@/assets/service-tapetes.mp4.asset.json";
import videoBoiserie from "@/assets/service-boiserie.mp4.asset.json";
import videoCabeceiras from "@/assets/service-cabeceiras.mp4.asset.json";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceOption {
  name: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  cardDescription: string;
  heroTitle: string;
  intro: string;
  image: string;
  video: string;
  benefits: string[];
  applications: string[];
  options: ServiceOption[];
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
  hasMotorization?: boolean;
}

const SERVICES_ALL: Service[] = [
  {
    slug: "cortinas",
    name: "Cortinas",
    cardDescription: "Tecidos, caimentos e acionamentos escolhidos para a luz de cada ambiente.",
    heroTitle: "Cortinas sob medida para controlar a luz com elegância.",
    intro:
      "Cada janela pede uma solução própria. Trabalhamos com tecidos, forros, trilhos e acionamentos selecionados para o ambiente, sempre com medição precisa e instalação profissional.",
    image: serviceCortinas,
    video: videoCortinas.url,
    benefits: [
      "Controle de luminosidade",
      "Mais privacidade",
      "Conforto visual e acústico",
      "Valorização do ambiente",
      "Possibilidade de automação",
      "Solução adaptada às medidas do espaço",
    ],
    applications: [
      "Salas de estar e jantar",
      "Quartos e suítes",
      "Home offices",
      "Varandas integradas",
      "Ambientes corporativos",
    ],
    options: [
      { name: "Cortinas de tecido", description: "Composições clássicas ou contemporâneas, com forro opcional." },
      { name: "Cortinas de linho", description: "Textura natural e caimento leve para ambientes acolhedores." },
      { name: "Cortinas blackout", description: "Bloqueio de luz para quartos e salas de mídia." },
      { name: "Cortinas wave", description: "Ondas contínuas e regulares, com estética minimalista." },
      { name: "Cortinas com trilho", description: "Trilhos discretos embutidos ou aparentes, com deslizamento suave." },
      { name: "Cortinas motorizadas", description: "Acionamento por controle remoto para abrir e fechar com um toque." },
    ],
    faqs: [
      {
        question: "As cortinas são feitas sob medida?",
        answer:
          "Sim. Cada cortina é produzida a partir das medidas levantadas no ambiente, considerando pé-direito, tipo de janela e o caimento desejado.",
      },
      {
        question: "Qual a diferença entre cortina manual e motorizada?",
        answer:
          "A manual é acionada pelo próprio tecido ou por baqueta; a motorizada abre e fecha por controle remoto, com movimento suave e silencioso. A escolha depende do ambiente, da rotina e do tipo de instalação.",
      },
      {
        question: "É possível integrar com sistemas de automação?",
        answer:
          "A integração com sistemas de automação pode ser avaliada conforme a solução escolhida. Nossa equipe orienta as possibilidades durante o atendimento.",
      },
      {
        question: "Vocês fazem a instalação?",
        answer:
          "Sim. A instalação é realizada por equipe própria, com cuidado com o acabamento e limpeza do ambiente ao final.",
      },
    ],
    seoTitle: "Cortinas Sob Medida em Brasília | Ambiente Smart",
    seoDescription:
      "Cortinas sob medida em Brasília: linho, blackout, wave e motorizadas. Medição, curadoria de tecidos e instalação profissional. Solicite um orçamento.",
    hasMotorization: true,
  },
  {
    slug: "persianas",
    name: "Persianas",
    cardDescription: "Precisão no controle da luz com desenho limpo e funcional.",
    heroTitle: "Persianas que unem precisão, função e design.",
    intro:
      "Das horizontais em madeira às rolôs de tecido técnico, as persianas oferecem controle preciso da luz com linguagem contemporânea. Indicamos o modelo ideal para cada janela e rotina de uso.",
    image: servicePersianas,
    video: videoPersianas.url,
    benefits: [
      "Controle preciso da entrada de luz",
      "Ocupação mínima de espaço",
      "Fácil manutenção",
      "Variedade de materiais e tramas",
      "Opções translúcidas e blackout",
      "Possibilidade de motorização",
    ],
    applications: [
      "Home offices e escritórios",
      "Cozinhas e áreas de serviço",
      "Quartos",
      "Salas com grandes panos de vidro",
      "Consultórios e clínicas",
    ],
    options: [
      { name: "Persianas horizontais em madeira", description: "Calor natural e controle lâmina a lâmina." },
      { name: "Persianas rolô", description: "Desenho minimalista com tecidos screen, translúcidos ou blackout." },
      { name: "Persianas romanas", description: "Dobras suaves de tecido, entre a cortina e a persiana." },
      { name: "Persianas double vision", description: "Faixas alternadas que graduam a luz com precisão." },
      { name: "Persianas verticais", description: "Indicadas para grandes vãos e portas de correr." },
      { name: "Persianas motorizadas", description: "Acionamento remoto para janelas altas ou de difícil acesso." },
    ],
    faqs: [
      {
        question: "Qual persiana é indicada para quem trabalha em casa?",
        answer:
          "Modelos com tecido screen ou double vision controlam o reflexo na tela sem escurecer o ambiente. Avaliamos a orientação solar da janela para indicar a trama adequada.",
      },
      {
        question: "Persianas podem ser motorizadas?",
        answer:
          "Sim. Diversos modelos aceitam motorização, o que é especialmente útil em janelas altas ou conjuntos de várias persianas.",
      },
      {
        question: "Como é feita a limpeza?",
        answer:
          "Na maior parte dos modelos, a manutenção é simples: pano seco ou aspirador com bocal macio. Orientamos os cuidados específicos de cada material na entrega.",
      },
    ],
    seoTitle: "Persianas Sob Medida em Brasília | Ambiente Smart",
    seoDescription:
      "Persianas sob medida em Brasília: rolô, romana, madeira, double vision e motorizadas. Atendimento consultivo e instalação profissional. Solicite um orçamento.",
    hasMotorization: true,
  },
  {
    slug: "toldos",
    name: "Toldos",
    cardDescription: "Sombra e conforto para varandas e áreas externas, sem abrir mão do desenho.",
    heroTitle: "Toldos que ampliam o uso das áreas externas.",
    intro:
      "Varandas, terraços e fachadas ganham sombra, proteção e identidade com toldos dimensionados para cada vão. Trabalhamos com estruturas discretas e tecidos técnicos de longa durabilidade.",
    image: serviceToldos,
    video: videoToldos.url,
    benefits: [
      "Proteção solar para áreas externas",
      "Conforto térmico nos ambientes internos",
      "Tecidos técnicos resistentes ao tempo",
      "Estruturas discretas e bem acabadas",
      "Opções retráteis para usar só quando precisar",
      "Possibilidade de motorização",
    ],
    applications: [
      "Varandas e terraços",
      "Áreas gourmet",
      "Fachadas comerciais",
      "Jardins de inverno",
      "Portas e janelas expostas ao sol",
    ],
    options: [
      { name: "Toldos retráteis", description: "Recolhem totalmente, liberando a vista quando desejado." },
      { name: "Toldos fixos", description: "Proteção permanente com estrutura dimensionada para o vão." },
      { name: "Toldos verticais", description: "Fecham lateralmente varandas contra sol e chuva de vento." },
      { name: "Toldos articulados", description: "Braços invisíveis que projetam a cobertura sem colunas." },
    ],
    faqs: [
      {
        question: "Os toldos resistem a sol e chuva?",
        answer:
          "Trabalhamos com tecidos técnicos desenvolvidos para uso externo. A especificação considera a exposição do local para garantir durabilidade.",
      },
      {
        question: "É possível motorizar o toldo?",
        answer:
          "Sim. Toldos retráteis e verticais aceitam motorização com acionamento por controle remoto, avaliada conforme o modelo escolhido.",
      },
      {
        question: "Vocês avaliam o local antes da instalação?",
        answer:
          "Sim. A visita técnica verifica o tipo de fixação, o vão e a incidência solar para propor a solução adequada.",
      },
    ],
    seoTitle: "Toldos Sob Medida em Brasília | Ambiente Smart",
    seoDescription:
      "Toldos sob medida em Brasília: retráteis, fixos, verticais e motorizados para varandas, terraços e fachadas. Solicite uma avaliação para o seu projeto.",
    hasMotorization: true,
  },
  {
    slug: "papeis-de-parede",
    name: "Papéis de parede",
    cardDescription: "Texturas e padronagens que dão profundidade e personalidade às paredes.",
    heroTitle: "Papéis de parede que vestem o ambiente com textura e intenção.",
    intro:
      "A parede certa muda a percepção do ambiente inteiro. Fazemos a curadoria de padronagens, texturas e materiais, com aplicação profissional e acabamento preciso em cantos, recortes e encontros.",
    image: servicePapeis,
    video: videoPapeis.url,
    benefits: [
      "Curadoria de padronagens e texturas",
      "Aplicação profissional sem emendas aparentes",
      "Transformação rápida e limpa do ambiente",
      "Materiais adequados a cada uso",
      "Composição com marcenaria e iluminação",
      "Orientação de manutenção",
    ],
    applications: [
      "Salas de estar e jantar",
      "Quartos e cabeceiras",
      "Lavabos",
      "Corredores e halls",
      "Recepções e ambientes comerciais",
    ],
    options: [
      { name: "Texturas naturais", description: "Tramas que remetem a linho, palha e fibras orgânicas." },
      { name: "Vinílicos de alta resistência", description: "Indicados para áreas de maior circulação." },
      { name: "Painéis e murais", description: "Composições em escala para paredes de destaque." },
      { name: "Geométricos discretos", description: "Ritmo visual sutil para ambientes contemporâneos." },
    ],
    faqs: [
      {
        question: "O papel de parede é durável?",
        answer:
          "Sim, quando o material é adequado ao uso do ambiente e a aplicação é bem executada. Indicamos o tipo certo para cada situação.",
      },
      {
        question: "É possível aplicar em áreas úmidas?",
        answer:
          "Em lavabos e áreas com pouca umidade direta, sim, com materiais específicos. Avaliamos cada caso na visita técnica.",
      },
      {
        question: "Vocês ajudam a escolher a padronagem?",
        answer:
          "Sim. Levamos amostras e catálogos e orientamos a escolha considerando iluminação, mobiliário e a atmosfera desejada.",
      },
    ],
    seoTitle: "Papéis de Parede em Brasília | Ambiente Smart",
    seoDescription:
      "Papéis de parede em Brasília com curadoria de texturas e aplicação profissional. Transforme salas, quartos e lavabos. Solicite um orçamento.",
  },
  {
    slug: "tapetes",
    name: "Tapetes",
    cardDescription: "Medidas, fibras e tramas definidas a partir do mobiliário e da circulação.",
    heroTitle: "Tapetes sob medida que ancoram e aquecem o ambiente.",
    intro:
      "O tapete certo organiza o layout, define áreas e traz conforto ao caminhar. Trabalhamos com fibras naturais e fios técnicos, em medidas exatas para o seu ambiente e mobiliário.",
    image: serviceTapetes,
    video: videoTapetes.url,
    benefits: [
      "Medidas exatas para o ambiente",
      "Variedade de fibras e tramas",
      "Conforto térmico e acústico",
      "Definição de áreas de estar",
      "Acabamentos de borda personalizados",
      "Orientação de manutenção",
    ],
    applications: [
      "Salas de estar e jantar",
      "Quartos",
      "Home offices",
      "Corredores",
      "Ambientes corporativos",
    ],
    options: [
      { name: "Tapetes sob medida", description: "Recorte e acabamento na medida do seu layout." },
      { name: "Fibras naturais", description: "Sisal, juta e misturas com textura orgânica." },
      { name: "Lã e fios nobres", description: "Toque macio e caimento encorpado." },
      { name: "Fios técnicos", description: "Alta resistência para áreas de grande circulação." },
    ],
    faqs: [
      {
        question: "Como definir o tamanho ideal do tapete?",
        answer:
          "O tamanho parte do layout do mobiliário e da circulação do ambiente. Na visita, medimos e simulamos as proporções antes da produção.",
      },
      {
        question: "Quais fibras são melhores para quem tem pets?",
        answer:
          "Fios técnicos de alta resistência costumam responder melhor ao uso intenso. Indicamos as opções mais adequadas ao seu dia a dia.",
      },
      {
        question: "Vocês entregam e posicionam o tapete?",
        answer: "Sim. A entrega inclui o posicionamento correto no ambiente e orientações de conservação.",
      },
    ],
    seoTitle: "Tapetes Sob Medida em Brasília | Ambiente Smart",
    seoDescription:
      "Tapetes sob medida em Brasília: fibras naturais, lã e fios técnicos em medidas exatas para o seu ambiente. Solicite um orçamento.",
  },
  {
    slug: "boiserie",
    name: "Boiserie",
    cardDescription: "Molduras e painéis que dão ritmo clássico-contemporâneo às paredes.",
    heroTitle: "Boiserie para dar relevo, ritmo e caráter às paredes.",
    intro:
      "A boiserie transforma paredes lisas em superfícies com profundidade e desenho. Projetamos o gabarito de molduras em proporção com o pé-direito, portas e mobiliário do ambiente.",
    image: serviceBoiserie,
    video: videoBoiserie.url,
    benefits: [
      "Desenho proporcional ao ambiente",
      "Valorização arquitetônica das paredes",
      "Composição com pintura e iluminação",
      "Execução com acabamento refinado",
      "Estilos do clássico ao contemporâneo",
      "Integração com cabeceiras e marcenaria",
    ],
    applications: [
      "Salas de estar e jantar",
      "Quartos e cabeceiras",
      "Halls e corredores",
      "Home offices",
      "Lavabos",
    ],
    options: [
      { name: "Boiserie clássica", description: "Molduras tradicionais com frisos e rodameios." },
      { name: "Boiserie contemporânea", description: "Linhas retas e composição minimalista." },
      { name: "Meia parede", description: "Painéis até a meia altura, com trilho ou rodameio." },
      { name: "Parede inteira", description: "Composição completa do rodapé à sanca." },
    ],
    faqs: [
      {
        question: "A boiserie combina com ambientes contemporâneos?",
        answer:
          "Sim. Com linhas retas e pintura no tom da parede, a boiserie ganha leitura atual e discreta, valorizando o ambiente sem pesar.",
      },
      {
        question: "Como é definido o desenho das molduras?",
        answer:
          "Elaboramos o gabarito a partir das medidas da parede, considerando portas, janelas, interruptores e o mobiliário previsto.",
      },
      {
        question: "A instalação gera muita obra?",
        answer:
          "Não. A aplicação é limpa e relativamente rápida; a etapa de pintura é combinada conforme o projeto.",
      },
    ],
    seoTitle: "Boiserie em Brasília | Ambiente Smart",
    seoDescription:
      "Boiserie em Brasília: molduras e painéis sob medida com desenho proporcional ao ambiente e acabamento refinado. Solicite um orçamento.",
  },
  {
    slug: "cabeceiras",
    name: "Cabeceiras",
    cardDescription: "Cabeceiras estofadas sob medida, do desenho ao tecido.",
    heroTitle: "Cabeceiras sob medida para um quarto com identidade.",
    intro:
      "A cabeceira define a presença da cama no quarto. Desenvolvemos peças estofadas sob medida, do desenho à escolha do tecido, em proporção com a parede, a iluminação e as mesas laterais.",
    image: serviceCabeceiras,
    video: videoCabeceiras.url,
    benefits: [
      "Desenho exclusivo para o quarto",
      "Ampla cartela de tecidos",
      "Conforto para leitura e descanso",
      "Proporções corretas para a parede",
      "Composição com boiserie e cortinas",
      "Produção e instalação cuidadosas",
    ],
    applications: [
      "Suítes principais",
      "Quartos de hóspedes",
      "Quartos infantis e juvenis",
      "Hotelaria",
    ],
    options: [
      { name: "Estofada lisa", description: "Superfície contínua com tecido em destaque." },
      { name: "Gomos verticais", description: "Ritmo vertical que alonga a parede." },
      { name: "Capitonê", description: "Desenho clássico com pontos marcados." },
      { name: "Painel completo", description: "Cabeceira integrada a painel e mesas laterais." },
    ],
    faqs: [
      {
        question: "Posso escolher o tecido da cabeceira?",
        answer:
          "Sim. Apresentamos uma cartela com linhos, bouclês, veludos e tecidos técnicos, orientando a escolha conforme o uso e a luz do quarto.",
      },
      {
        question: "A cabeceira é fixada na parede?",
        answer:
          "Depende do modelo. Há versões fixadas na parede e versões acopladas à cama; indicamos a melhor solução para o seu caso.",
      },
      {
        question: "Vocês desenvolvem o projeto junto com cortinas?",
        answer:
          "Sim. É comum compor cabeceira, cortinas e boiserie no mesmo projeto, garantindo harmonia de tons e materiais.",
      },
    ],
    seoTitle: "Cabeceiras Sob Medida em Brasília | Ambiente Smart",
    seoDescription:
      "Cabeceiras estofadas sob medida em Brasília: desenho exclusivo, curadoria de tecidos e instalação profissional. Solicite um orçamento.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
