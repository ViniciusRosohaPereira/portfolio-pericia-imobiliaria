import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import InfoWidgets from './InfoWidgets';
import { CONTACT } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const LINKS = [
  { id: 'about', label: 'Sobre' },
  { id: 'services', label: 'Serviços' },
  { id: 'methodology', label: 'Metodologia' },
  { id: 'imoveis', label: 'Imóveis' },
];

function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDir && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDir(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDir, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [scrollDir]);

  return scrollDir;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 pt-4 pointer-events-none transition-transform duration-300 ease-in-out ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-16 pointer-events-auto">
          <nav className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2">
            {/* Esquerda */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '');
              }}
              className="flex flex-col"
            >
              <span className="font-semibold text-sm md:text-base text-white">
                Vinícius Rosoha Pereira
              </span>
              <span className="font-light text-xs text-white/70">
                Perícias e Consultoria Imobiliária - CRECI PR nº F56113 | CNAI nº 56570
              </span>
            </a>

          {/* Centro */}
          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-sm text-white transition-colors hover:text-gray-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Direita */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 md:flex mr-2">
              <a href="https://www.instagram.com/rosoha.peritorecorretor/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#C9973A] transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#C9973A] transition-colors" aria-label="WhatsApp">
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#C9973A] transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="hidden rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 sm:block"
            >
              Fale Conosco
            </a>

            <button
              aria-label="Menu"
              className="text-white md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="liquid-glass mt-3 flex flex-col gap-4 rounded-xl px-6 py-6 md:hidden">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-base text-white transition-colors hover:text-gray-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="mt-2 rounded-lg bg-white px-6 py-2 text-center text-sm font-medium text-black"
            >
              Fale Conosco
            </a>
            <div className="mt-4 flex items-center justify-center gap-6 border-t border-white/20 pt-6">
              <a href="https://www.instagram.com/rosoha.peritorecorretor/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C9973A] transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C9973A] transition-colors">
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C9973A] transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        )}
        </div>
      </header>

      {/* Linha 2: Widgets (absolutos para ficarem abaixo da navbar) */}
      <div className="absolute top-[88px] right-0 z-40 flex justify-end px-6 md:px-12 lg:px-16 pointer-events-auto">
        <InfoWidgets />
      </div>
    </>
  );
};

export default Navbar;
