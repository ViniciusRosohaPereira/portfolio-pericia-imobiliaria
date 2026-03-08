import React, { useEffect } from 'react';
import { Service } from '../types';
import { BRAND_NAME } from '../constants';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [service.id]);

  return (
    <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-24 px-6 md:px-12 animate-fade-in-up">
      <div className="max-w-[1400px] mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] hover:text-[#2C2A26] transition-colors mb-24 group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para Serviços
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col space-y-8">
            <div className="aspect-[4/5] bg-[#EBE7DE] overflow-hidden rounded-2xl shadow-xl">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105 grayscale hover:grayscale-0"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6 border-b border-[#D6D1C7] pb-4">
                Avaliações Técnicas
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-8 leading-tight">
                {service.name}
              </h1>

              <p className="text-xl md:text-2xl font-light text-[#5D5A53] italic mb-8 border-l-2 border-emerald-500 pl-6 text-justify">
                "{service.tagline}"
              </p>

              <div className="prose prose-stone max-w-none text-justify text-[#5D5A53] font-light leading-relaxed space-y-6">
                <p>{service.description}</p>
                <p>{service.longDescription}</p>
              </div>
            </div>

            <div className="border-t border-[#D6D1C7] pt-12 mt-12 mb-8">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Critérios Técnicos Metodológicos</span>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-[#2C2A26] font-medium text-sm">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[10px] uppercase font-bold tracking-widest text-[#A8A29E] mt-auto">
              Laudos Digitais Seguros | Assinatura e Criptografia Habilitadas
            </p>

            <a
              href={`https://wa.me/554298255385?text=Olá ${BRAND_NAME}, gostaria de analisar a viabilidade de ${service.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 relative overflow-hidden group w-full flex items-center justify-center gap-4 px-12 py-5 bg-[#2C2A26] text-white text-xs font-bold uppercase tracking-widest ring-1 ring-inset ring-[#2C2A26] hover:bg-[#F5F2EB] hover:text-[#2C2A26] transition-all duration-500 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Solicitar Assistência Técnica
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
