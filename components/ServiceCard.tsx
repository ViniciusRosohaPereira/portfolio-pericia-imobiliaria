import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
  onClick: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(service)}
      className="card-neon group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-sm transition-all duration-500 hover:border-accent/40 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 font-display text-3xl text-white drop-shadow">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-accent">
          {service.category}
        </span>
        <h3 className="font-display text-fluid-xl text-primary">{service.name}</h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-text-muted">
          {service.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-text-muted"
            >
              {f}
            </span>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-text-base transition-colors group-hover:text-accent">
          Ver detalhes
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </button>
  );
};

export default ServiceCard;
