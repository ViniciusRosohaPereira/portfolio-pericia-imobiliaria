/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=webp&fit=crop&q=75&w=1920",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&fit=crop&q=75&w=1920",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=webp&fit=crop&q=75&w=1920"
  ];

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 15000);

    return () => {
      clearInterval(bgTimer);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) { }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#2C2A26]">

      {/* Background Images with Focus/Blur Effect */}
      <div className="absolute inset-0 w-full h-full">
        {backgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${idx === bgIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={bg}
              alt="Background"
              className={`w-full h-full object-cover grayscale contrast-[0.8] brightness-[0.6] ${idx === bgIndex ? 'animate-focus-blur' : ''}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2A26]/40 via-transparent to-[#2C2A26]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto mt-20 md:mt-0">
          <span className="block text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-400 mb-6 backdrop-blur-sm bg-emerald-500/10 border border-emerald-500/20 px-4 sm:px-6 py-2 rounded-full mx-0 md:mx-auto w-fit animate-pulse-soft">
            CRECI PR nº F56113 | CNAI nº 56570
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tighter mb-8 drop-shadow-2xl max-w-5xl mx-auto leading-tight">
            Vinícius Rosoha Pereira: <br className="hidden md:block" />
            <span className="italic text-emerald-400">Perito Avaliador de Imóveis e Assessor Técnico Imobiliário.</span>
          </h1>
          <p className="max-w-4xl mx-0 md:mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8 text-justify md:text-center drop-shadow-md">
            Unindo o rigor do Direito à Perícia Judicial e Avaliações Imobiliária para entregar laudos e suporte técnico estratégico de alto nível.
          </p>
          <p className="max-w-2xl mx-0 md:mx-auto text-base md:text-lg text-white/70 font-light leading-relaxed mb-12 text-justify md:text-center italic">
            Soluções técnicas em avaliações, perícias e consultoria imobiliária com foco em precisão e conformidade normativa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#products"
              onClick={(e) => handleNavClick(e, 'products')}
              className="group relative px-12 py-5 bg-emerald-500 text-black rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] animate-pulse-neon"
            >
              <span className="relative z-10">Explorar Serviços</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="group relative px-12 py-5 bg-transparent text-white border border-white/30 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Solicitar Consultoria</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-emerald-400/50">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

