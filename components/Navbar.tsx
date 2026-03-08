/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';
import { Clock, Cloud, Sun, CloudRain, CloudLightning, Wind, MapPin } from 'lucide-react';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<{ temp: number; city: string; code: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => setTime(new Date()), 1000);

    // Get Weather & City
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Weather
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
          const weatherData = await weatherRes.json();

          // City (Reverse Geocoding)
          const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const geoData = await geoRes.json();
          const city = geoData.address.city || geoData.address.town || geoData.address.village || "Local";

          setWeather({
            temp: Math.round(weatherData.current_weather.temperature),
            city: city,
            code: weatherData.current_weather.weathercode
          });
        } catch (err) {
          console.error("Weather/Geo fetch failed", err);
        }
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-3 h-3 text-yellow-500" />;
    if (code <= 3) return <Cloud className="w-3 h-3 text-blue-400" />;
    if (code <= 67) return <CloudRain className="w-3 h-3 text-blue-500" />;
    if (code <= 99) return <CloudLightning className="w-3 h-3 text-purple-500" />;
    return <Wind className="w-3 h-3 text-gray-400" />;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  // Determine text color based on state
  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-[#2C2A26]' : 'text-[#F5F2EB]';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled || mobileMenuOpen ? 'bg-[#F5F2EB]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
          }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Widgets */}
          <div className="flex flex-col">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '');
              }}
              className={`text-3xl font-serif font-medium tracking-tight z-50 relative transition-colors duration-500 ${textColorClass}`}
            >
              {BRAND_NAME}
            </a>

            {/* Time & Weather Widgets */}
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-[10px] font-mono tracking-widest uppercase transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-80'} ${textColorClass}`}>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Clock className="w-3 h-3 opacity-70 flex-shrink-0" />
                {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </div>
              {weather && (
                <div className="flex items-center gap-3 md:border-l border-current/20 md:pl-4">
                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    {getWeatherIcon(weather.code)}
                    {weather.temp}°C
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 opacity-70 flex-shrink-0" />
                    <span className="truncate max-w-[100px] sm:max-w-[200px]">{weather.city}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:opacity-60 transition-opacity">Serviços</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:opacity-60 transition-opacity">Sobre</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:opacity-60 transition-opacity">Blog</a>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity hidden sm:block"
            >
              Contato
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#F5F2EB] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}>
        <div className="flex flex-col items-center space-y-8 text-xl font-serif font-medium text-[#2C2A26]">
          <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:opacity-60 transition-opacity">Serviços</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:opacity-60 transition-opacity">Sobre</a>
          <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:opacity-60 transition-opacity">Blog</a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="hover:opacity-60 transition-opacity text-base uppercase tracking-widest font-sans mt-8"
          >
            Contato
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
