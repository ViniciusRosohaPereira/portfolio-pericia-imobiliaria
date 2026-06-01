import React from 'react';
import { Property } from '../types';
import { CONTACT, PERSON_NAME } from '../constants';

interface PropertyCardProps {
  property: Property;
}

const Spec: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="font-display text-lg text-cream">{value}</span>
    <span className="font-body text-[0.6rem] uppercase tracking-[0.16em] text-text-faint">{label}</span>
  </div>
);

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const message = `Olá ${PERSON_NAME}, tenho interesse no imóvel "${property.title}" (${property.location}). Pode me passar mais informações?`;
  const contactUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:border-accent/40 hover:bg-surface-2">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 font-body text-[0.6rem] font-bold uppercase tracking-[0.18em] ${
            property.status === 'Venda' ? 'bg-accent text-bg' : 'border border-accent/60 bg-bg/70 text-accent backdrop-blur'
          }`}
        >
          {property.status}
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-line bg-bg/70 px-3 py-1 font-body text-[0.6rem] uppercase tracking-[0.18em] text-text-muted backdrop-blur">
          {property.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-fluid-xl text-cream">{property.title}</h3>
        <p className="mt-1 font-body text-sm font-light text-text-muted">{property.location}</p>

        {property.description && (
          <p className="mt-3 font-body text-sm font-light leading-relaxed text-text-muted">
            {property.description}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-6 border-t border-line pt-5">
          <Spec label="Área" value={property.area} />
          {property.bedrooms != null && <Spec label="Quartos" value={property.bedrooms} />}
          {property.bathrooms != null && <Spec label="Banheiros" value={property.bathrooms} />}
          {property.parking != null && <Spec label="Vagas" value={property.parking} />}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <span className="block font-body text-[0.6rem] uppercase tracking-[0.18em] text-text-faint">
              {property.status === 'Venda' ? 'Valor' : 'Aluguel'}
            </span>
            <span className="font-display text-fluid-xl text-accent">{property.price}</span>
          </div>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-body text-[0.7rem] font-bold uppercase tracking-[0.18em] text-text-base transition-all hover:border-accent hover:text-accent"
          >
            Tenho interesse
          </a>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
