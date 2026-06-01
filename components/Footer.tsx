import React from 'react';
import { BRAND_NAME, PERSON_NAME, BRAND_SUBTITLE, TAGLINE, CONTACT, HANDLE } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const QUICK_LINKS = [
  { id: 'about', label: 'Sobre' },
  { id: 'services', label: 'Serviços' },
  { id: 'methodology', label: 'Metodologia' },
  { id: 'imoveis', label: 'Imóveis' },
  { id: 'contact', label: 'Contato' },
];

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="border-t border-line bg-bg pb-10 pt-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <p className="whitespace-nowrap font-display text-fluid-xl font-semibold text-primary">{PERSON_NAME}</p>
          <p className="mt-0.5 text-sm text-text-muted">{BRAND_SUBTITLE}</p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-accent">{HANDLE}</p>
          <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-text-muted">
            {TAGLINE}
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-5 font-body text-[0.65rem] font-bold uppercase tracking-[0.24em] text-text-faint">
            Navegação
          </h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => onLinkClick(e, link.id)}
                  className="font-body text-sm font-light text-text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="mb-5 font-body text-[0.65rem] font-bold uppercase tracking-[0.24em] text-text-faint">
            Contato
          </h4>
          <ul className="space-y-3 font-body text-sm font-light text-text-muted">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-accent break-words">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                {CONTACT.phoneLabel}
              </a>
            </li>
            <li>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                Facebook · {HANDLE}
              </a>
            </li>
            <li>{CONTACT.city}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1600px] flex-col items-center gap-3 border-t border-line px-6 pt-8 text-center md:flex-row md:justify-between md:px-12 md:text-left">
        <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-faint">
          © {new Date().getFullYear()} {BRAND_NAME}
        </p>
        <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-faint">
          {CONTACT.creci} · {CONTACT.cnai}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
