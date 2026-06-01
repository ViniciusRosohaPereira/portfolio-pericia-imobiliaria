import React from 'react';

const STEPS = [
  {
    title: 'Recebimento do Caso',
    detail: 'Análise da demanda, documentação e objetivo da avaliação ou perícia.',
  },
  {
    title: 'Pesquisa de Mercado',
    detail: 'Coleta de dados comparáveis, georreferenciamento e saneamento da amostra.',
  },
  {
    title: 'Modelo Estatístico',
    detail: 'Tratamento por regressão linear e inferência para mitigar subjetividades.',
  },
  {
    title: 'Laudo ABNT NBR 14653',
    detail: 'Elaboração técnica conforme a norma, com fundamentação e grau de precisão.',
  },
  {
    title: 'Entrega do Documento Digital',
    detail: 'Laudo assinado e seguro, com rastreabilidade e clareza nas conclusões.',
  },
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="fade-section border-t border-line bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="mb-4 block font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent text-center lg:text-left">
                Metodologia
              </span>
              <h2 className="font-display text-fluid-2xl font-medium leading-tight text-cream text-center lg:text-left">
                Do recebimento do caso ao laudo digital.
              </h2>
              <p className="mt-6 font-body text-fluid-base font-light text-text-muted text-center lg:text-left">
                Um processo normatizado e auditável, conduzido com rigor científico em cada etapa.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative ml-5">
              {/* Linha vertical animada */}
              <div className="absolute -left-[1px] top-3 bottom-3 w-px origin-top animate-[draw-line_1.6s_cubic-bezier(0.16,1,0.3,1)_forwards] bg-gradient-to-b from-accent via-accent/40 to-transparent" />

              {STEPS.map((step, i) => (
                <li key={step.title} className="relative pb-12 pl-10 last:pb-0">
                  <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-surface font-display text-lg text-accent">
                    {i + 1}
                  </span>
                  <div className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/30 hover:bg-surface-2">
                    <h3 className="font-display text-fluid-lg text-cream">{step.title}</h3>
                    <p className="mt-2 font-body text-sm font-light leading-relaxed text-text-muted">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
