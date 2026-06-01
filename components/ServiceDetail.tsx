import React, { useEffect } from 'react';
import { Service } from '../types';
import { PERSON_NAME, CONTACT } from '../constants';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [service.id]);

  return (
    <div className="min-h-screen bg-bg px-6 pb-24 pt-32 md:px-12 animate-fade-in-up">
      <div className="mx-auto max-w-[1300px]">
        <button
          onClick={onBack}
          className="group mb-16 flex items-center gap-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-accent"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Voltar para Serviços
        </button>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="overflow-hidden rounded-2xl border border-line">
            <img
              src={service.imageUrl}
              alt={service.name}
              className="aspect-[4/5] w-full object-cover grayscale transition-all duration-[2s] hover:scale-105 hover:grayscale-0"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-6 block border-b border-line pb-4 font-body text-xs font-bold uppercase tracking-[0.24em] text-accent">
              {service.category}
            </span>
            <h1 className="font-display text-fluid-2xl font-medium leading-tight text-cream">
              {service.name}
            </h1>

            <p className="mt-8 border-l-2 border-accent pl-6 font-display text-fluid-xl italic text-text-muted">
              {service.tagline}
            </p>

            <div className="mt-8 space-y-5 font-body text-fluid-base font-light leading-relaxed text-text-muted">
              <p>{service.description}</p>
              <p>{service.longDescription}</p>
            </div>

            <div className="mt-12 border-t border-line pt-10">
              <span className="mb-6 block font-body text-xs font-bold uppercase tracking-[0.24em] text-text-faint">
                Critérios técnicos
              </span>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-body text-sm text-text-base">
                    <svg className="h-4 w-4 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent(`Olá ${PERSON_NAME}, gostaria de analisar a viabilidade de ${service.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-10 py-5 font-body text-xs font-bold uppercase tracking-[0.2em] text-bg transition-all hover:bg-accent-hover"
            >
              Solicitar Assistência Técnica
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
