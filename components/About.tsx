import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE] border-b border-[#D6D1C7]">
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        <div className="md:w-1/3 w-full max-w-sm mx-auto">
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl transition-all group-hover:bg-emerald-500/20 animate-pulse-soft"></div>
            <img
              src="/20250625_211900.jpg"
              alt="Vinícius Rosoha Pereira"
              className="relative w-full aspect-[3/4] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
          <div className="mt-12 flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/viniciusrosohapereira/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[#2C2A26] text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              LinkedIn
            </a>
            <a
              href="http://lattes.cnpq.br/2202180129627682"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 border border-emerald-500/50 text-[#2C2A26] rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/10 transition-all"
            >
              Currículo Lattes
            </a>
          </div>
        </div>

        <div className="md:w-2/3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-6 block">Sobre o Profissional</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2A26] leading-tight mb-10">
            Inteligência Técnica. <br />Rigor Normativo.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8 text-justify">
            Sou profissional dedicado à integração entre Direito, Perícia Imobiliária e Tecnologia. Minha atuação é orientada pela precisão técnica, rigor metodológico e atualização constante, buscando assegurar que cada laudo, parecer ou manifestação técnica possua sólida fundamentação normativa, coerência analítica e aderência à realidade processual e mercadológica.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-12 text-justify">
            No exercício da assessoria técnica e perícia, afasto conclusões empíricas sem substrato. O foco está na instrumentalização de dados consistentes e georreferenciados para traduzir a complexidade do setor imobiliário em relatórios objetivos e conclusivos que subsidiam decisões judiciais e tomadas de decisão estratégica.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#D6D1C7]/30 p-8 md:p-12 rounded-2xl border border-[#D6D1C7]">
            <div>
              <svg className="w-8 h-8 text-emerald-600 mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[#2C2A26] mb-3">Conhecimento Jurídico</h4>
              <p className="text-sm text-[#5D5A53] font-light leading-relaxed text-justify">A formação em Direito e a vivência no Poder Judiciário garantem o domínio da liturgia processual e clareza na formulação de quesitos pertinentes à lide contratual ou desapropriatória.</p>
            </div>
            <div>
              <svg className="w-8 h-8 text-emerald-600 mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[#2C2A26] mb-3">Atributo Técnico</h4>
              <p className="text-sm text-[#5D5A53] font-light leading-relaxed text-justify">CNAI e certificações complementares, orientando a atividade sob o crivo do arcabouço normativo ditado pelo ordenamento de classe e pela ABNT.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;