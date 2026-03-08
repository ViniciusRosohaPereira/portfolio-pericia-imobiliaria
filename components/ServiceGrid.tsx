import React, { useState, useMemo } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import ServiceCard from './ServiceCard';

const categories = ['Todos', 'Avaliação', 'Perícia', 'Consultoria'];

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ onServiceClick }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'Todos') return SERVICES;
    return SERVICES.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#F5F2EB]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26]">Serviços Profissionais</h2>
          <p className="max-w-xl text-[#5D5A53] font-light text-lg">
            Atuação em avaliações de imóveis urbanos e rurais, perícias judiciais e assistência técnica especializada.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex justify-center gap-6 mb-16 pb-6 overflow-x-auto no-scrollbar">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 pb-2 border-b-2 ${activeCategory === category
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-[#A8A29E] hover:text-[#5D5A53]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} onClick={onServiceClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
