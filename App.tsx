import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServiceGrid from './components/ServiceGrid';
import Methodology from './components/Methodology';
import PropertyListings from './components/PropertyListings';
import SocialConnect from './components/SocialConnect';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import MapEmbed from './components/MapEmbed';
import { Service, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const fadeSections = document.querySelectorAll('.fade-section');
    fadeSections.forEach((section) => observer.observe(section));

    return () => {
      fadeSections.forEach((section) => observer.unobserve(section));
    };
  }, [view]);

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
      const headerOffset = 90;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch {
        /* noop */
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-bg font-body text-text-base">
      <Navbar onNavClick={handleNavClick} />

      <main>
        {view.type === 'home' && (
          <>
            <Hero onNavClick={handleNavClick} />
            <About />
            <ServiceGrid
              onServiceClick={(s) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'service', service: s });
              }}
            />
            <Methodology />
            <PropertyListings />
            <section className="fade-section border-t border-line bg-[#0a0a0a] px-6 py-20 md:px-12">
              <div className="mx-auto max-w-[1600px]">
                <MapEmbed />
              </div>
            </section>
            <SocialConnect />
            <Contact />
          </>
        )}

        {view.type === 'service' && (
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
    </div>
  );
}

export default App;
