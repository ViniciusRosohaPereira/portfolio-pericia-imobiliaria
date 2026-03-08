import React from 'react';
import { BRAND_NAME } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-[#2C2A26] mb-2">{BRAND_NAME}</h4>
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 mb-6">Perito Avaliador</span>
          <p className="max-w-xs font-light leading-relaxed text-sm text-justify">
            Assessoria técnica e avaliações imobiliárias com precisão metodológica, integrando tecnologia e assertividade jurídica na formulação de laudos e pareceres técnicos.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-[#2C2A26] mb-6 tracking-widest text-[10px] uppercase">Navegação</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-emerald-700 transition-colors underline-offset-4 hover:underline">Sobre</a></li>
            <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="hover:text-emerald-700 transition-colors underline-offset-4 hover:underline">Serviços e Metodologia</a></li>
            <li><a href="#technology" onClick={(e) => onLinkClick(e, 'technology')} className="hover:text-emerald-700 transition-colors underline-offset-4 hover:underline">Tecnologia</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-[#2C2A26] mb-6 tracking-widest text-[10px] uppercase">Redes Profissionais</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="https://www.linkedin.com/in/viniciusrosohapereira/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline-offset-4 hover:underline">LinkedIn</a></li>
            <li><a href="http://lattes.cnpq.br/2202180129627682" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors underline-offset-4 hover:underline">Currículo Lattes</a></li>
          </ul>
        </div>

        <div className="md:col-span-4" id="contact">
          <h4 className="font-bold text-[#2C2A26] mb-6 tracking-widest text-[10px] uppercase border-b border-[#D6D1C7] pb-2">Contato Especializado</h4>
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#5D5A53]">E-mail Corparativo:</p>
              <a href="mailto:viniciusrosohapereira@creci.org.br" className="text-base font-medium hover:text-emerald-700 transition-colors break-words">viniciusrosohapereira@creci.org.br</a>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#5D5A53]">Telefone / WhatsApp:</p>
              <a href="https://wa.me/554298255385" target="_blank" rel="noopener noreferrer" className="text-base font-medium hover:text-emerald-700 transition-colors">+55 (42) 98255-385</a>
            </div>

            <div className="mt-4 pt-6">
              <a
                href="https://wa.me/554298255385"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600/10 text-emerald-800 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all ring-1 ring-emerald-600/30"
              >
                Solicitar Contato Técnico
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left text-[9px] md:text-[10px] uppercase tracking-widest opacity-60 gap-4">
        <p className="break-words max-w-full">© {new Date().getFullYear()} Vinícius Rosoha Pereira - Perito Avaliador de Imóveis</p>
        <p>CRECI PR nº F56113 | CNAI nº 56570</p>
      </div>
    </footer>
  );
};

export default Footer;
