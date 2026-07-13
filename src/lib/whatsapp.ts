import { WHATSAPP_NUMBER } from "@/data/brand";

const DEFAULT_MESSAGE =
  "Olá! Gostaria de conversar com um especialista da Will Decor sobre um projeto de decoração sob medida.";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface QuoteMessageData {
  nome: string;
  servico: string;
  ambiente: string;
  cidade: string;
  bairro?: string;
  preferencia?: string;
  mensagem: string;
}

export function buildQuoteMessage(data: QuoteMessageData): string {
  const lines = [
    "Olá, gostaria de solicitar um orçamento.",
    "",
    `Nome: ${data.nome}`,
    `Serviço: ${data.servico}`,
    `Ambiente: ${data.ambiente}`,
    `Cidade/Bairro: ${data.cidade}${data.bairro ? ` / ${data.bairro}` : ""}`,
  ];
  if (data.preferencia) lines.push(`Preferência: ${data.preferencia}`);
  lines.push(`Mensagem: ${data.mensagem}`);
  return lines.join("\n");
}
