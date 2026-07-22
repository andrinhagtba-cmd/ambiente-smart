/**
 * Dados centrais da marca.
 * SUBSTITUIR os valores marcados com TODO pelos dados reais da Ambiente Smart.
 */

export const BRAND = {
  name: "Ambiente Smart",
  legalName: "Ambiente Smart Decorações", // TODO: razão social real
  tagline: "Decoração sob medida",
  shortDescription:
    "Soluções de decoração sob medida — cortinas, persianas, toldos, papéis de parede, tapetes, boiserie e cabeceiras — com atendimento consultivo e instalação profissional.",
  city: "Brasília",
  region: "DF",
};

/** Número no formato internacional, apenas dígitos. */
export const WHATSAPP_NUMBER = "5561985156162";

export const CONTACT_EMAIL = "contato@tecelarcortinas.com.br";

export const CONTACT_PHONE_DISPLAY = "(61) 98515-6162";
export const CONTACT_PHONE_LINK = "+5561985156162";

/** Endereço completo da loja. */
export const COMPANY_ADDRESS =
  "Trecho SIA Trecho 07, Nº 100, SCE Conjunto A, Loja A11 — Brasília/DF";

/** CNPJ da empresa. */
export const COMPANY_CNPJ = "67.508.939/0001-32";

export const INSTAGRAM_URL = "https://www.instagram.com/tecelarcortinas/";

/** TODO: substituir pela URL real do Google Maps (embed ou link). */
export const GOOGLE_MAPS_URL = "";

export const BUSINESS_HOURS = [
  { days: "Terça a domingo", hours: "9h às 18h" },
  { days: "Segunda", hours: "Fechado" },
];

/**
 * Depoimentos: manter oculto até existirem depoimentos reais.
 * Quando houver, adicionar em src/data/testimonials e ativar a flag.
 */
export const SHOW_TESTIMONIALS = false;

/**
 * Modo de envio do formulário de orçamento (sem backend nesta etapa):
 * - "whatsapp": gera mensagem formatada e abre o WhatsApp
 * - "simulate": simula envio e redireciona para /obrigado
 */
export const QUOTE_SUBMIT_MODE: "whatsapp" | "simulate" = "whatsapp";
