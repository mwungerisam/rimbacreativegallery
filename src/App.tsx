/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import Showreel from './components/Showreel';
import ArtGallery from './components/ArtGallery';
import About from './components/About';
import Academy from './components/Academy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState<string>('');

  // Handle smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scrollspy to update active section in navigation
  useEffect(() => {
    const sections = ['hero', 'work', 'services', 'showreel', 'gallery', 'about', 'academy', 'contact'];
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0c0c0d] text-[#f2ede4] font-sans selection:bg-[#c8a97e] selection:text-[#0c0c0d]">
      {/* Primary Sticky Navigation */}
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero */}
        <Hero
          onExploreWork={() => handleNavigate('work')}
          onStartProject={() => handleNavigate('contact')}
        />

        {/* Selected Signature Work */}
        <SelectedWork onStartProject={() => handleNavigate('contact')} />

        {/* Production & Disciplines */}
        <Services
          onSelectServiceInquiry={(serviceName) => {
            setSelectedServiceInquiry(serviceName);
            handleNavigate('contact');
          }}
        />

        {/* Cinematic Showreel */}
        <Showreel />

        {/* Curated Art Collection & Exhibitions */}
        <ArtGallery />

        {/* Studio, Gallery Space & Philosophy */}
        <About />

        {/* Creative Education & Workshops */}
        <Academy
          onDirectInquiry={(subject) => {
            setSelectedServiceInquiry(`Academy: ${subject}`);
            handleNavigate('contact');
          }}
        />

        {/* Commission & Contact */}
        <Contact initialService={selectedServiceInquiry} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Direct WhatsApp Quick Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
