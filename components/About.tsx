import React from 'react';
import { CONTACT } from '../constants';



const About: React.FC = () => {
  return (
    <section id="about" className="fade-section relative border-t border-line bg-bg py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:px-12 lg:grid-cols-12 lg:gap-24">
        {/* Retrato */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-3 rounded-2xl border border-accent/20" />
            <img
              src="/20250625_211900.jpg"
              alt="Vinícius Rosoha Pereira"
              className="relative aspect-[3/4] w-full rounded-xl object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>

        {/* Texto + credenciais */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <span className="mb-6 block font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent text-center">
            Sobre o Profissional
          </span>
          <h2 className="font-display text-fluid-2xl font-medium leading-tight text-cream text-center">
            Excelência técnica em perícias.<br />
            <span className="gold-gradient-text">Visão estratégica em mercado imobiliário.</span>
          </h2>

          <div className="mx-auto mt-8 max-w-2xl space-y-6 font-body text-fluid-base font-light leading-relaxed text-text-muted text-justify">
            <p>
              Minha atuação é pautada pela convergência entre a técnica pericial, a dogmática jurídica e a inteligência de mercado. Desenvolvo laudos, pareceres e assessorias imobiliárias sob o mais rígido rigor metodológico, garantindo que cada entrega não seja apenas um documento, mas um instrumento de alta precisão técnica e plena aderência à realidade processual e mercadológica.
            </p>
            <p>
              <strong className="font-medium text-[#C9973A]">Perícia Imobiliária —</strong> No âmbito da Perícia Imobiliária, minha metodologia exclui conclusões baseadas em subjetividade. Cada diagnóstico é construído sobre dados consistentes, análise estatística e georreferenciamento, assegurando a solidez necessária para o convencimento judicial e a segurança das partes.
            </p>
            <p>
              <strong className="font-medium text-[#C9973A]">Assessoria e Negociação —</strong> No segmento de Assessoria e Negociação Imobiliária, aplico essa mesma expertise para traduzir variáveis complexas em segurança patrimonial e valor real. Meu compromisso é fornecer a clareza analítica que orienta as melhores decisões, mitigando riscos e otimizando resultados em cada operação.
            </p>
          </div>

          <div className="card-neon mx-auto mt-12 max-w-2xl rounded-2xl border border-[#C9973A] bg-accent-dim p-8 text-left">
            <h3 className="mb-4 font-display text-2xl font-medium text-cream">Sistema Inteligente de Análise e Precisão de Dados de Avaliação</h3>
            <p className="font-body text-sm font-light leading-relaxed text-text-muted">
              Desenvolvi um sistema exclusivo que une análise imparcial de dados à expertise técnica, transformando cada avaliação em um processo seguro, preciso e rastreável.
            </p>
            <p className="font-body text-sm font-light leading-relaxed text-text-muted mt-4">
              O resultado: mitigação de erros, eliminação de subavaliações sem critério e laudos com fundamentação precisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
