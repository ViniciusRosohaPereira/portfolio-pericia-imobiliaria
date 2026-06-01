import React from 'react';

const MapEmbed: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-xl bg-black p-0">
      <video
        src="/15408410_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-35"
      />
      
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCP89nduiwD8zhN-SCqe6wg10g9r-RjvZk&q=São+Mateus+do+Sul,PR,Brasil&zoom=13&maptype=satellite"
        className="relative w-full h-full border-0 z-10"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - São Mateus do Sul"
      />
      
      <div className="absolute top-4 left-4 z-20 liquid-glass px-4 py-2 rounded-xl text-white">
        <p className="text-sm font-semibold">📍 São Mateus do Sul - PR</p>
        <p className="text-xs text-white/60">Base de operações</p>
      </div>
    </div>
  );
};

export default MapEmbed;
