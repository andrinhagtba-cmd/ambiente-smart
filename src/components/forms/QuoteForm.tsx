import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useId, useState } from "react";
import { AlertCircle, Loader2, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/data/services";
import { QUOTE_SUBMIT_MODE } from "@/data/brand";
import { buildQuoteMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const AMBIENTES = [
  "Sala de estar",
  "Sala de jantar",
  "Quarto / suíte",
  "Home office",
  "Varanda / área externa",
  "Ambiente comercial",
  "Vários ambientes",
  "Outro",
];

const PERIODOS = ["Manhã", "Tarde", "Noite", "Qualquer horário"];

const quoteSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),
  whatsapp: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um número de WhatsApp válido com DDD."),
  email: z.string().trim().email("Informe um e-mail válido.").max(255, "E-mail muito longo."),
  cidade: z.string().trim().min(2, "Informe sua cidade ou região.").max(120, "Cidade muito longa."),
  servico: z.string().min(1, "Selecione o serviço de interesse."),
  ambiente: z.string().min(1, "Selecione o tipo de ambiente."),
  mensagem: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o projeto (mínimo de 10 caracteres).")
    .max(1000, "A mensagem deve ter no máximo 1000 caracteres."),
  bairro: z.string().trim().max(120, "Bairro muito longo.").optional().or(z.literal("")),
  quantidadeAmbientes: z.string().optional().or(z.literal("")),
  medidas: z.string().trim().max(300, "Medidas muito longas.").optional().or(z.literal("")),
  preferencia: z.string().optional().or(z.literal("")),
  periodoContato: z.string().optional().or(z.literal("")),
  privacidade: z.literal(true, {
    errorMap: () => ({ message: "É necessário concordar com a Política de Privacidade." }),
  }),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
}

const inputClass =
  "w-full border border-input bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-2 focus-visible:outline-bronze disabled:opacity-60";
const labelClass = "mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
      <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      email: "",
      cidade: "",
      servico: "",
      ambiente: "",
      mensagem: "",
      bairro: "",
      quantidadeAmbientes: "",
      medidas: "",
      preferencia: "",
      periodoContato: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("loading");
    try {
      // Sem backend nesta etapa: envio simulado ou abertura do WhatsApp.
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (QUOTE_SUBMIT_MODE === "whatsapp") {
        const message = buildQuoteMessage({
          nome: data.nome,
          servico: data.servico,
          ambiente: data.ambiente,
          cidade: data.cidade,
          bairro: data.bairro || undefined,
          preferencia: data.preferencia || undefined,
          mensagem: data.mensagem,
        });
        window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
      }
      void navigate({ to: "/obrigado" });
    } catch {
      setStatus("error");
    }
  };

  const id = (name: string) => `${uid}-${name}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {status === "error" ? (
        <div role="alert" className="flex items-start gap-3 border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            Não foi possível concluir o envio. Seus dados foram preservados — tente novamente ou fale conosco pelo
            WhatsApp.
          </p>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={id("nome")} className={labelClass}>
            Nome *
          </label>
          <input
            id={id("nome")}
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? id("nome-erro") : undefined}
            className={cn(inputClass, errors.nome && "border-destructive")}
            {...register("nome")}
          />
          <FieldError id={id("nome-erro")} message={errors.nome?.message} />
        </div>
        <div>
          <label htmlFor={id("whatsapp")} className={labelClass}>
            WhatsApp *
          </label>
          <input
            id={id("whatsapp")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(61) 9 0000-0000"
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? id("whatsapp-erro") : undefined}
            className={cn(inputClass, errors.whatsapp && "border-destructive")}
            {...register("whatsapp", {
              onChange: (e) => setValue("whatsapp", maskPhone(e.target.value)),
            })}
          />
          <FieldError id={id("whatsapp-erro")} message={errors.whatsapp?.message} />
        </div>
        <div>
          <label htmlFor={id("email")} className={labelClass}>
            E-mail *
          </label>
          <input
            id={id("email")}
            type="email"
            autoComplete="email"
            placeholder="voce@exemplo.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? id("email-erro") : undefined}
            className={cn(inputClass, errors.email && "border-destructive")}
            {...register("email")}
          />
          <FieldError id={id("email-erro")} message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor={id("cidade")} className={labelClass}>
            Cidade ou região *
          </label>
          <input
            id={id("cidade")}
            type="text"
            autoComplete="address-level2"
            placeholder="Ex.: Brasília — Asa Sul"
            aria-invalid={!!errors.cidade}
            aria-describedby={errors.cidade ? id("cidade-erro") : undefined}
            className={cn(inputClass, errors.cidade && "border-destructive")}
            {...register("cidade")}
          />
          <FieldError id={id("cidade-erro")} message={errors.cidade?.message} />
        </div>
        <div>
          <label htmlFor={id("servico")} className={labelClass}>
            Serviço de interesse *
          </label>
          <select
            id={id("servico")}
            aria-invalid={!!errors.servico}
            aria-describedby={errors.servico ? id("servico-erro") : undefined}
            className={cn(inputClass, errors.servico && "border-destructive")}
            {...register("servico")}
          >
            <option value="">Selecione…</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Mais de um serviço">Mais de um serviço</option>
          </select>
          <FieldError id={id("servico-erro")} message={errors.servico?.message} />
        </div>
        <div>
          <label htmlFor={id("ambiente")} className={labelClass}>
            Tipo de ambiente *
          </label>
          <select
            id={id("ambiente")}
            aria-invalid={!!errors.ambiente}
            aria-describedby={errors.ambiente ? id("ambiente-erro") : undefined}
            className={cn(inputClass, errors.ambiente && "border-destructive")}
            {...register("ambiente")}
          >
            <option value="">Selecione…</option>
            {AMBIENTES.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <FieldError id={id("ambiente-erro")} message={errors.ambiente?.message} />
        </div>
      </div>

      {!compact ? (
        <fieldset className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
          <legend className="eyebrow float-left mb-6 w-full text-taupe">Informações opcionais</legend>
          <div>
            <label htmlFor={id("bairro")} className={labelClass}>
              Bairro
            </label>
            <input id={id("bairro")} type="text" placeholder="Seu bairro" className={inputClass} {...register("bairro")} />
          </div>
          <div>
            <label htmlFor={id("quantidade")} className={labelClass}>
              Quantidade aproximada de ambientes
            </label>
            <select id={id("quantidade")} className={inputClass} {...register("quantidadeAmbientes")}>
              <option value="">Selecione…</option>
              <option value="1 ambiente">1 ambiente</option>
              <option value="2 a 3 ambientes">2 a 3 ambientes</option>
              <option value="4 ou mais ambientes">4 ou mais ambientes</option>
            </select>
          </div>
          <div>
            <label htmlFor={id("medidas")} className={labelClass}>
              Medidas disponíveis
            </label>
            <input
              id={id("medidas")}
              type="text"
              placeholder="Ex.: janela de 3,20 m x 2,60 m"
              className={inputClass}
              {...register("medidas")}
            />
          </div>
          <div>
            <label htmlFor={id("preferencia")} className={labelClass}>
              Preferência de acionamento
            </label>
            <select id={id("preferencia")} className={inputClass} {...register("preferencia")}>
              <option value="">Sem preferência definida</option>
              <option value="Manual">Manual</option>
              <option value="Motorizada">Motorizada</option>
              <option value="Quero uma recomendação">Quero uma recomendação</option>
            </select>
          </div>
          <div>
            <label htmlFor={id("periodo")} className={labelClass}>
              Melhor período para contato
            </label>
            <select id={id("periodo")} className={inputClass} {...register("periodoContato")}>
              <option value="">Selecione…</option>
              {PERIODOS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className={labelClass}>Referência visual</span>
            <label
              htmlFor={id("arquivo")}
              className="flex cursor-pointer items-center gap-3 border border-dashed border-input bg-cream px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-taupe"
            >
              <Upload className="size-4 shrink-0 text-taupe" aria-hidden="true" />
              <span className="truncate">{fileName ?? "Enviar imagem de referência (opcional)"}</span>
            </label>
            <input
              id={id("arquivo")}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Nesta etapa o arquivo não é enviado — leve-o para a conversa com o especialista.
            </p>
          </div>
        </fieldset>
      ) : null}

      <div>
        <label htmlFor={id("mensagem")} className={labelClass}>
          Mensagem *
        </label>
        <textarea
          id={id("mensagem")}
          rows={5}
          placeholder="Conte um pouco sobre o ambiente e o que você imagina para ele."
          aria-invalid={!!errors.mensagem}
          aria-describedby={errors.mensagem ? id("mensagem-erro") : undefined}
          className={cn(inputClass, "resize-y", errors.mensagem && "border-destructive")}
          {...register("mensagem")}
        />
        <FieldError id={id("mensagem-erro")} message={errors.mensagem?.message} />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={id("privacidade")}
            type="checkbox"
            aria-invalid={!!errors.privacidade}
            aria-describedby={errors.privacidade ? id("privacidade-erro") : undefined}
            className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]"
            {...register("privacidade")}
          />
          <label htmlFor={id("privacidade")} className="text-sm text-muted-foreground">
            Li e concordo com a{" "}
            <a href="/politica-de-privacidade" className="underline underline-offset-2 hover:text-foreground">
              Política de Privacidade
            </a>
            . *
          </label>
        </div>
        <FieldError id={id("privacidade-erro")} message={errors.privacidade?.message} />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          "Enviar solicitação"
        )}
      </button>
    </form>
  );
}
