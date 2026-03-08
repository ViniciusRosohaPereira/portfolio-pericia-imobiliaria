import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import About from './components/About';
import Methodology from './components/Methodology';
import Technology from './components/Technology';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import { Service, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  // Handle navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) { }
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#F5F2EB] font-sans text-[#2C2A26] selection:bg-[#D6D1C7] selection:text-[#2C2A26]">
      <Navbar onNavClick={handleNavClick} />

      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            <About />
            <Methodology />
            <Technology />
            <ServiceGrid onServiceClick={(s) => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setView({ type: 'service', service: s });
            }} />
          </>
        )}

        {view.type === 'service' && view.service && (
          <ServiceDetail
            service={view.service}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('services'), 50);
            }}
          />
        )}
      </main>

      <Footer onLinkClick={handleNavClick} />

      <Assistant />
    </div>
  );
}

export default App;
