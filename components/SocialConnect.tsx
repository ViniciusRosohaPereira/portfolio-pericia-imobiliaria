import React from 'react';
import { CONTACT, HANDLE } from '../constants';

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
  </svg>
);

const SocialConnect: React.FC = () => {
  return (
    <section id="social" className="fade-section border-t border-line bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <span className="mb-4 block font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent text-center lg:text-left">
                Conecte-se
              </span>
              <h2 className="font-display text-fluid-2xl font-medium leading-tight text-cream text-center lg:text-left">
                Acompanhe os imóveis e novidades.
              </h2>
              <p className="mx-auto lg:mx-0 mt-6 max-w-md font-body text-fluid-base font-light text-text-muted text-center lg:text-left">
                Os anúncios e atualizações são publicados no Facebook. Siga
                <span className="text-accent"> {HANDLE} </span>
                e fale comigo pelo WhatsApp para atendimento direto.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="card-neon group flex items-center justify-between rounded-2xl border border-line bg-bg p-6 transition-all hover:border-accent/40"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-dim text-accent">
                    <FacebookIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-fluid-lg text-cream">Acompanhar no Facebook</p>
                    <p className="font-body text-xs text-text-muted">{HANDLE}</p>
                  </div>
                </div>
                <span className="font-body text-accent transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="card-neon group flex items-center justify-between rounded-2xl border border-line bg-bg p-6 transition-all hover:border-accent/40"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-dim text-accent">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-fluid-lg text-cream">Falar no WhatsApp</p>
                    <p className="font-body text-xs text-text-muted">{CONTACT.phoneLabel}</p>
                  </div>
                </div>
                <span className="font-body text-accent transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
