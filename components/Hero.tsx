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
  }, [backgrounds.length]);

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

      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {backgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${idx === bgIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={bg}
              alt="Fundo Arquitetura"
              className={`w-full h-full object-cover grayscale contrast-[0.8] brightness-[0.5] ${idx === bgIndex ? 'animate-focus-blur' : ''}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2A26]/40 via-transparent to-[#2C2A26]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto mt-20 md:mt-0">
          <span className="block text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-400 mb-6 backdrop-blur-sm bg-emerald-500/10 border border-emerald-500/20 px-4 sm:px-6 py-2 rounded-full mx-0 md:mx-auto w-fit animate-pulse-soft">
            CRECI PR nº F56113 | CNAI nº 56570
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight mb-6 drop-shadow-2xl max-w-5xl mx-auto leading-tight">
            Vinícius Rosoha Pereira
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-emerald-400 italic mb-10">
            Perito Avaliador de Imóveis e Assessor Técnico Imobiliário
          </h2>
          <p className="max-w-3xl mx-0 md:mx-auto text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-12 text-justify md:text-center drop-shadow-md">
            Atuação técnica voltada à avaliação de imóveis, perícias e assistência técnica, com fundamentação normativa, análise de mercado e integração entre Direito, Perícia Imobiliária e Tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="group relative px-10 py-5 bg-emerald-500 text-black rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] animate-pulse-neon text-center"
            >
              <span className="relative z-10">Solicitar Avaliação</span>
            </a>
            <a
              href="https://wa.me/554298255385"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-transparent text-white border border-emerald-500/50 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/10 transition-all duration-500 shadow-sm text-center flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 opacity-80" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
