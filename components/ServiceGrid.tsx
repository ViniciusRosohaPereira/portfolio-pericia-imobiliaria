import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="fade-section border-t border-line bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex flex-col items-center text-center gap-6">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-accent text-center">
              Serviços Técnicos
            </span>
            <h2 className="mx-auto max-w-2xl font-display text-[4vw] sm:text-xl md:text-2xl lg:text-fluid-2xl font-medium leading-tight text-primary text-center whitespace-nowrap">
              Perícia e avaliação com fundamentação ABNT.
            </h2>
          </div>
          <p className="mx-auto max-w-xl text-fluid-base font-light text-text-muted text-center">
            Avaliações de imóveis urbanos e rurais, perícias judiciais e assistência técnica especializada.
          </p>
        </div>

        {/* Grid uniforme: cards de mesma altura/largura */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} onClick={onServiceClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
