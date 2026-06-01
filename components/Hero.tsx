import React from 'react';
import TypewriterText from './TypewriterText';
import FadeIn from './FadeIn';

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/9923477-uhd_2562_1440_30fps.mp4" type="video/mp4" />
      </video>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
          {/* Coluna esquerda */}
          <div className="lg:col-span-8 text-left items-start flex flex-col justify-center">
            <h1 className="mb-3 font-normal text-white text-[4.5vw] sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-[-0.03em] whitespace-nowrap overflow-hidden w-full">
              <TypewriterText 
                text="Aliando rigor técnico à expertise jurídica."
                speed={45}
                delay={0}
              />
            </h1>
            
            <p className="mb-4 text-[3.5vw] sm:text-sm md:text-base lg:text-lg italic text-[#C9973A] whitespace-nowrap overflow-hidden w-full">
              <TypewriterText 
                text="Precisão que protege. Imparcialidade que valoriza."
                speed={35}
                delay={2135}
              />
            </p>

            <p className="mb-6 text-sm md:text-base text-gray-200 max-w-lg text-left min-h-[80px]">
              <TypewriterText 
                text="Avaliações imobiliárias, perícias judiciais e consultoria especializada com rigor técnico e respaldo jurídico em São Mateus do Sul e região. Sua segurança patrimonial começa aqui."
                speed={18}
                delay={3885}
              />
            </p>

            <FadeIn delay={900} duration={1000}>
              <div className="mb-6 liquid-glass max-w-lg rounded-r-xl border-l-[3px] border-l-[#C9973A] px-4 py-3 text-left">
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  O barato pode sair caro. Uma avaliação sem critério técnico pode resultar em vendas abaixo do valor real, laudos contestados e perda irreversível de patrimônio. A imparcialidade e a precisão técnica são o único caminho para decisões seguras.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={(e) => onNavClick(e, 'contact')}
                  className="rounded-lg bg-white px-6 py-2.5 font-medium text-black text-sm transition-colors hover:bg-gray-100"
                >
                  Solicitar Avaliação
                </a>
                <a
                  href="#services"
                  onClick={(e) => onNavClick(e, 'services')}
                  className="liquid-glass rounded-lg border border-white/20 px-6 py-2.5 font-medium text-white text-sm transition-colors hover:bg-white hover:text-black"
                >
                  Conheça os Serviços
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Coluna direita */}
          <div className="mt-8 flex lg:mt-0 lg:col-span-4 justify-end items-end">
            <FadeIn delay={1400} duration={1000}>
              <div className="text-right">
                <p className="text-sm md:text-base lg:text-lg font-light italic text-white/90 leading-relaxed max-w-[300px]">
                  Não basta avaliar; é preciso fundamentar.<br />
                  A excelência técnica é o melhor caminho para a segurança jurídica.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
