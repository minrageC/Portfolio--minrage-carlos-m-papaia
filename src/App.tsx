/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ServiceModal from './components/ServiceModal';
import CVModal from './components/CVModal';
import AboutModal from './components/AboutModal';
import { Project, Service, Language } from './types';
import { UI_TEXT } from './data';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);
  const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scrollspy to automatically highlight the current section in navigation
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleHireMeClick = () => {
    scrollToSection('contact');
    setTimeout(() => {
      const input = document.getElementById('contact-input-fullname');
      if (input) input.focus();
    }, 400);
  };

  const handleSocialClick = (platform: string) => {
    const prefix = UI_TEXT[language].hero.openingSocial;
    setToastMessage(`${prefix} ${platform}...`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0e141c] text-[#dee2ef] selection:bg-[#00eeff]/20 selection:text-[#00eeff]">
      {/* Toast notification banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1b2029] border border-[#00eeff] text-[#00eeff] px-5 py-3 rounded-full text-xs font-['Space_Grotesk'] font-semibold shadow-[0_0_20px_rgba(0,238,255,0.4)] animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Main Header / Navigation */}
      <Navbar
        activeSection={activeSection}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={scrollToSection}
        onHireMeClick={handleHireMeClick}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-1">
        {/* Hero Section */}
        <HeroSection
          language={language}
          onDownloadCv={() => setCvModalOpen(true)}
          onSocialClick={handleSocialClick}
        />

        {/* About Section */}
        <AboutSection
          language={language}
          onReadMoreClick={() => setAboutModalOpen(true)}
        />

        {/* Services Section */}
        <ServicesSection
          language={language}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Portfolio Section */}
        <PortfolioSection
          language={language}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Contact Section */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onScrollToTop={() => scrollToSection('home')}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
        onContactClick={handleHireMeClick}
      />

      <ServiceModal
        service={selectedService}
        language={language}
        onClose={() => setSelectedService(null)}
        onContactClick={handleHireMeClick}
      />

      <CVModal
        isOpen={cvModalOpen}
        language={language}
        onClose={() => setCvModalOpen(false)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        language={language}
        onClose={() => setAboutModalOpen(false)}
        onContactClick={handleHireMeClick}
      />
    </div>
  );
}
