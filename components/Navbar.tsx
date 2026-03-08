import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-[#2C2A26]' : 'text-[#F5F2EB]';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled || mobileMenuOpen ? 'bg-[#F5F2EB]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-gradient-to-b from-[#2C2A26]/80 to-transparent py-8'
          }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex flex-col">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '');
              }}
              className={`text-xl md:text-2xl font-serif font-medium tracking-tight z-50 relative transition-colors duration-500 ${textColorClass}`}
            >
              {BRAND_NAME}
            </a>
            <span className={`text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] transition-opacity duration-500 opacity-70 ${textColorClass}`}>
              Perito Avaliador
            </span>
          </div>

          <div className={`hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-emerald-500 transition-colors">Sobre</a>
            <a href="#methodology" onClick={(e) => handleLinkClick(e, 'methodology')} className="hover:text-emerald-500 transition-colors">Metodologia</a>
            <a href="#technology" onClick={(e) => handleLinkClick(e, 'technology')} className="hover:text-emerald-500 transition-colors">Tecnologia</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-emerald-500 transition-colors">Serviços</a>
          </div>

          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="text-xs font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors hidden sm:block border-b border-current pb-1"
            >
              Contato
            </a>

            <button
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-[#F5F2EB] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}>
        <div className="flex flex-col items-center space-y-8 text-xl font-serif font-medium text-[#2C2A26]">
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-emerald-600 transition-colors">Sobre</a>
          <a href="#methodology" onClick={(e) => handleLinkClick(e, 'methodology')} className="hover:text-emerald-600 transition-colors">Metodologia</a>
          <a href="#technology" onClick={(e) => handleLinkClick(e, 'technology')} className="hover:text-emerald-600 transition-colors">Tecnologia</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-emerald-600 transition-colors">Serviços</a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="hover:text-emerald-600 transition-colors text-base uppercase tracking-widest font-sans mt-8 border-b border-[#2C2A26] pb-1"
          >
            Contato
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
