import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      className="group cursor-pointer flex flex-col items-center text-center"
      onClick={() => onClick(service)}
    >
      <div className="w-full relative aspect-[4/5] overflow-hidden mb-8 bg-[#EBE7DE] rounded-xl shadow-lg border border-[#D6D1C7]/30">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-[#2C2A26]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
      <h3 className="text-xl font-serif mb-3 text-[#2C2A26] tracking-wide">
        {service.name}
      </h3>
      <p className="text-[#A8A29E] text-xs font-medium uppercase tracking-[0.2em] mb-4">
        {service.category}
      </p>
      <p className="text-[#5D5A53] text-[13px] font-light leading-relaxed mb-6 italic text-justify group-hover:text-emerald-700 transition-colors">
        "{service.tagline}"
      </p>
      <div className="flex gap-2 justify-center flex-wrap mb-6">
        {service.features.map((feature, idx) => (
          <span key={idx} className="text-[10px] uppercase font-bold text-white bg-[#5D5A53] px-3 py-1 rounded-full">{feature}</span>
        ))}
      </div>
      <button className="text-xs font-bold uppercase tracking-[0.2em] text-[#2C2A26] border-b border-[#2C2A26] pb-1 opacity-60 group-hover:opacity-100 transition-opacity">
        Detalhes do Serviço
      </button>
    </div>
  );
};

export default ServiceCard;
