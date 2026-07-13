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
    <ol className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {PROCESS_STEPS.map((step, i) => (
        <Reveal as="li" key={step.number} delay={i * 90} className="bg-cream p-7 lg:p-8">
          <span className="font-display text-4xl text-surface-warm">{step.number}</span>
          <h3 className="mt-4 font-sans text-base font-semibold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
