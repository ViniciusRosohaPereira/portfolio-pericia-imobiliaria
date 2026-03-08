/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-[#2C2A26] mb-6">AvaliaTech</h4>
          <p className="max-w-xs font-light leading-relaxed">
            Avaliações e perícias imobiliárias com precisão tecnológica e fundamentação técnica.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Serviços</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Avaliação Imobiliária</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Perícia Judicial</a></li>
            <li><a href="#contact" onClick={(e) => onLinkClick(e, 'contact')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline font-medium">Solicite Orçamento</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Redes Sociais</h4>
          <ul className="space-y-4 font-light">
            <li><a href="https://x.com/RosohaPereira" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">X (Twitter)</a></li>
            <li><a href="https://www.instagram.com/viniciusrosohapereira/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Instagram</a></li>
            <li><a href="https://www.facebook.com/viniciusrosohapereira" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Facebook</a></li>
          </ul>
        </div>

        <div className="md:col-span-4" id="contact">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Contato & Pagamento</h4>
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#2C2A26]">E-mail:</p>
              <a href="mailto:viniciusrosohapereira@creci.org.br" className="text-lg font-light hover:text-[#2C2A26] transition-colors">viniciusrosohapereira@creci.org.br</a>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#2C2A26]">WhatsApp:</p>
              <a href="https://wa.me/554298255385" target="_blank" rel="noopener noreferrer" className="text-lg font-light hover:text-[#2C2A26] transition-colors">+55 (42) 98255-385</a>
            </div>

            <div className="mt-4 pt-6 border-t border-[#D6D1C7]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A8A29E] mb-4">Métodos de Pagamento</p>
              <p className="text-xs font-light leading-relaxed mb-4">
                Aceito Pix, parcelamento em até 2x (sujeito a taxa adicional da maquininha ou emissão do boleto), criptoativos (BTC, USDT, BNB e ETH) e pagamentos em Dólar.
              </p>
              <p className="text-[10px] italic text-[#A8A29E]">
                "Inovação nos métodos de pagamento para facilitar a prestação de serviços com agilidade e segurança global."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left text-[10px] md:text-xs uppercase tracking-widest opacity-60 gap-4">
        <p className="break-words max-w-full">© 2025 AvaliaTech - Avaliações Imobiliárias | Vinícius Rosoha Pereira</p>
      </div>
    </footer>
  );
};

export default Footer;
