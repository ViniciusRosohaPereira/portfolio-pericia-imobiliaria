/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">

      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
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
              className="flex items-center justify-center gap-3 px-6 py-3 bg-[#2C2A26] text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-black transition-all border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] animate-pulse-neon"
            >
              LinkedIn
            </a>
            <a
              href="http://lattes.cnpq.br/2202180129627682"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 border border-emerald-500/50 text-[#2C2A26] rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-black transition-all"
            >
              Currículo Lattes
            </a>
            <a
              href="https://github.com/ViniciusRosohaPereira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-[#F5F2EB] text-[#2C2A26] rounded-lg text-sm font-bold uppercase tracking-widest border border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] leading-tight mb-12">
            Perito Avaliador de Imóveis <br /> e Assessor Técnico.
          </h2>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8 text-justify">
            Sou profissional dedicado à integração entre Direito, Perícia Imobiliária e Tecnologia. Minha atuação é orientada pela precisão técnica, pelo rigor metodológico e pela atualização constante, buscando assegurar que cada laudo ou parecer apresentado possua sólida fundamentação jurídica e suporte analítico baseado em dados de mercado.
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8 text-justify">
            No exercício da assessoria técnica imobiliária, aplico métodos estatísticos, análise comparativa de mercado e ferramentas de georreferenciamento para reduzir subjetividades e aproximar as avaliações da realidade dinâmica do setor imobiliário.
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-12 text-justify">
            Acredito que a tecnologia desempenha papel central na evolução da perícia moderna. Por essa razão, mantenho formação contínua em ferramentas digitais aplicadas à análise de dados, inteligência artificial, segurança da informação e registros digitais, com o objetivo de aprimorar a qualidade técnica, a rastreabilidade e a confiabilidade dos serviços prestados.
          </p>

          <div className="bg-[#D6D1C7]/30 p-8 md:p-12 rounded-2xl border border-[#D6D1C7]">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-8">Certificações Tecnológicas</h4>
            <ul className="space-y-6">
              {[
                { title: 'Foundations of Cybersecurity', issuer: 'Google/Coursera', year: '2026' },
                { title: 'Introduction to AI', issuer: 'Google/Coursera', year: '2025' },
                { title: 'Mastering Web3: Blockchain, Cryptocurrencies, NFTs, and the Metaverse', issuer: 'University of Nicosia', year: '2026' },
                { title: 'Introdução à Inteligência Artificial e suas Aplicações', issuer: 'Escola de Gestão do Paraná', year: '2025' },
                { title: 'Lei Geral de Proteção de Dados', issuer: 'EJUD-PR', year: '2026' }
              ].map((cert, i) => (
                <li key={i} className="flex justify-between items-end border-b border-[#D6D1C7] pb-4 group">
                  <div>
                    <span className="block text-sm font-medium text-[#2C2A26] group-hover:text-black transition-colors">{cert.title}</span>
                    <span className="text-xs text-[#A8A29E] uppercase tracking-wider">{cert.issuer}</span>
                  </div>
                  <span className="text-xs font-mono text-[#A8A29E]">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=webp&fit=crop&q=75&w=1200"
            alt="Data Analysis"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-6">Metodologia</span>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
            Ciência de Dados <br /> em Avaliações.
          </h3>
          <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
            Utilizo modelos de regressão linear e análise espacial para garantir que o valor apurado reflita a realidade dinâmica do mercado, minimizando subjetividades.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Inovação</span>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
            Relatórios Inteligentes.
          </h3>
          <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
            Meus laudos são digitais, interativos e fáceis de compreender. A tecnologia serve para tornar a informação complexa em insights acionáveis para investidores e proprietários.
          </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1512446816042-444d641267d4?fm=webp&fit=crop&q=75&w=1200"
            alt="Modern building detail"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
          />
        </div>
      </div>
    </section>
  );
};

export default About;