import React, { useState } from 'react';
import { CONTACT, PERSON_NAME } from '../constants';

const SUBJECTS = ['Avaliação', 'Perícia', 'Consultoria', 'Imóvel'] as const;
type Subject = (typeof SUBJECTS)[number];

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState<Subject>('Avaliação');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá ${PERSON_NAME}, meu nome é ${name || '[nome]'}.\nAssunto: ${subject}.\n${message}`;
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  return (
    <section id="contact" className="fade-section border-t border-line bg-surface py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
        {/* Lado informativo */}
        <div className="text-center lg:text-left">
          <span className="mb-4 block font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent text-center lg:text-left">
            Contato
          </span>
          <h2 className="font-display text-fluid-2xl font-medium leading-tight text-cream text-center lg:text-left">
            Vamos conversar sobre o seu caso.
          </h2>
          <p className="mx-auto lg:mx-0 mt-6 max-w-md font-body text-fluid-base font-light text-text-muted text-center lg:text-left">
            Solicite uma avaliação, tire dúvidas sobre perícia ou pergunte sobre um imóvel.
            O envio abre uma conversa direta no WhatsApp.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-faint">E-mail</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-1 block font-display text-fluid-lg text-cream transition-colors hover:text-accent break-words"
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-faint">WhatsApp</span>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-display text-fluid-lg text-cream transition-colors hover:text-accent"
              >
                {CONTACT.phoneLabel}
              </a>
            </div>
            <div>
              <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-faint">Facebook</span>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-display text-fluid-lg text-cream transition-colors hover:text-accent"
              >
                Vinícius Rosoha Pereira - Perícias e Consultoria Imobiliária
              </a>
            </div>
            <div>
              <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-faint">Localização</span>
              <p className="mt-1 font-display text-fluid-lg text-cream">{CONTACT.city}</p>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="card-neon flex flex-col gap-6 rounded-3xl border border-line bg-bg p-8 md:p-10">
          <div>
            <label htmlFor="name" className="mb-2 block font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-muted">
              Nome
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 font-body text-sm text-text-base outline-none transition-colors placeholder:text-text-faint focus:border-accent"
            />
          </div>

          <div>
            <span className="mb-2 block font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-muted">Assunto</span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SUBJECTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSubject(s)}
                  className={`rounded-lg border px-3 py-2.5 font-body text-[0.7rem] font-bold uppercase tracking-[0.12em] transition-all ${
                    subject === s
                      ? 'border-accent bg-accent text-bg'
                      : 'border-line text-text-muted hover:border-accent/40 hover:text-text-base'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-body text-[0.65rem] uppercase tracking-[0.2em] text-text-muted">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descreva brevemente a sua necessidade..."
              className="w-full resize-none rounded-lg border border-line bg-surface px-4 py-3 font-body text-sm text-text-base outline-none transition-colors placeholder:text-text-faint focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-bg transition-all hover:bg-accent-hover"
          >
            Enviar pelo WhatsApp
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
