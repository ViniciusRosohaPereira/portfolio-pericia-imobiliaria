import React from 'react';
import { Home } from 'lucide-react';

const PropertyListings: React.FC = () => {
  return (
    <section id="imoveis" className="fade-section border-t border-line bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-12 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-accent text-center">
            Imóveis
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-fluid-2xl font-medium leading-tight text-primary text-center">
            Imóveis selecionados com visão de mercado.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {/* Aviso: nenhum imóvel disponível */}
          <div className="card-neon flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-line bg-bg p-12 text-center">
            <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-surface-2 text-text-muted">
              <Home className="h-8 w-8" />
            </span>
            <h3 className="font-display text-fluid-xl text-primary">Nenhum imóvel disponível no momento.</h3>
            <p className="mt-2 text-sm font-light text-text-muted">
              Em breve novos imóveis serão cadastrados.
            </p>
          </div>

          {/* CTA: Anuncie com um especialista */}
          <div className="card-neon flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-md">
            <div className="h-28 w-full bg-gradient-to-r from-primary via-moss to-accent" />
            <div className="flex flex-1 flex-col p-10">
              <h3 className="font-display text-fluid-2xl text-primary">Quer anunciar seu imóvel?</h3>
              <p className="mt-3 text-fluid-base font-light leading-relaxed text-text-muted">
                Conte com avaliação técnica e consultoria especializada.
              </p>
              <a
                href="#contact"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-8 py-3 pt-3 font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Fale Conosco
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
