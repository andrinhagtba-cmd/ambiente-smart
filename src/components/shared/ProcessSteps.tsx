import { Reveal } from "./Reveal";

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Conversa inicial",
    description: "Entendemos o ambiente, a necessidade e o estilo desejado.",
  },
  {
    number: "02",
    title: "Visita e medição",
    description: "Analisamos o espaço e levantamos as medidas necessárias.",
  },
  {
    number: "03",
    title: "Curadoria da solução",
    description: "Selecionamos materiais, modelos e acabamentos.",
  },
  {
    number: "04",
    title: "Instalação",
    description: "Executamos a instalação com cuidado e atenção aos detalhes.",
  },
];

export function ProcessSteps() {
  return (
    <div className="relative">
      {/* Linha conectora horizontal em desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-14 hidden h-px lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, oklch(0.645 0.062 70 / 0.4) 20%, oklch(0.645 0.062 70 / 0.4) 80%, transparent 100%)",
        }}
      />
      <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {PROCESS_STEPS.map((step, i) => (
          <Reveal
            as="li"
            key={step.number}
            delay={i * 90}
            className="group relative flex flex-col items-start rounded-[1.75rem] border border-border/70 bg-cream/90 p-7 shadow-[0_20px_50px_-30px_oklch(0.185_0.008_70/0.25)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-bronze/50 hover:shadow-[0_30px_70px_-30px_oklch(0.185_0.008_70/0.4)]"
          >
            {/* Bolha do número */}
            <div className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-ink to-primary text-ink-foreground shadow-lg ring-[6px] ring-cream transition-all duration-500 group-hover:from-primary group-hover:to-bronze">
              <span className="font-display text-lg font-bold tabular-nums">{step.number}</span>
              {/* Halo bronze */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: "oklch(0.645 0.062 70 / 0.6)" }}
              />
            </div>
            <h3 className="mt-6 font-display text-xl font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            {/* Seta indicando próximo passo (desktop) */}
            {i < PROCESS_STEPS.length - 1 ? (
              <div
                aria-hidden="true"
                className="absolute -right-4 top-14 hidden size-8 items-center justify-center rounded-full border border-border/70 bg-background text-bronze shadow-md lg:flex"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-3.5" strokeWidth={2.5} stroke="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ) : null}
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
