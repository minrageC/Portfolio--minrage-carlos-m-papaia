import { useState, useEffect } from 'react';
import { Menu, X, User, Globe } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT, PERSONAL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
  onHireMeClick: () => void;
}

export default function Navbar({
  activeSection,
  language,
  onLanguageChange,
  onNavigate,
  onHireMeClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = UI_TEXT[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'services', label: t.services },
    { id: 'portfolio', label: t.portfolio },
    { id: 'contact', label: t.contact },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e141c]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-[#30353e]/40'
          : 'bg-[#0e141c]/80 backdrop-blur-md'
      }`}
    >
      <div className="h-20 max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-1 text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#f1f4ff] group-hover:text-white transition-colors">
            Portfolio<span className="text-[#00eeff] transition-transform duration-300 inline-block group-hover:scale-125">.</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navbar" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wide font-['Space_Grotesk'] transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'text-[#00eeff] font-semibold drop-shadow-[0_0_8px_rgba(0,238,255,0.6)]'
                    : 'text-[#b9c9cb] hover:text-[#00eeff] font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher Toggle Pill */}
          <div
            id="language-switcher-pill"
            className="flex items-center p-1 bg-[#1b2029] border border-[#30353e] rounded-full shadow-inner"
            title={language === 'pt' ? 'Mudar idioma / Switch language' : 'Switch language / Mudar idioma'}
          >
            <button
              id="lang-btn-pt"
              type="button"
              onClick={() => onLanguageChange('pt')}
              className={`px-2.5 py-1 rounded-full text-xs font-['Space_Grotesk'] font-bold transition-all duration-200 cursor-pointer ${
                language === 'pt'
                  ? 'bg-[#00eeff] text-[#00363b] shadow-[0_0_10px_rgba(0,238,255,0.4)]'
                  : 'text-[#849495] hover:text-[#dee2ef]'
              }`}
            >
              PT
            </button>
            <button
              id="lang-btn-en"
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-['Space_Grotesk'] font-bold transition-all duration-200 cursor-pointer ${
                language === 'en'
                  ? 'bg-[#00eeff] text-[#00363b] shadow-[0_0_10px_rgba(0,238,255,0.4)]'
                  : 'text-[#849495] hover:text-[#dee2ef]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Hire Me CTA Button */}
          <button
            id="hire-me-header-btn"
            onClick={onHireMeClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider shadow-[0_0_16px_rgba(0,238,255,0.45)] hover:shadow-[0_0_24px_rgba(0,238,255,0.75)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {t.hireMe}
          </button>

          {/* User profile avatar link */}
          <button
            id="user-avatar-btn"
            onClick={() => handleNavClick('about')}
            title={PERSONAL_INFO.name}
            className="w-9 h-9 rounded-full bg-[#d7fbff] flex items-center justify-center text-[#00363b] hover:ring-2 hover:ring-[#00eeff] transition-all cursor-pointer shadow-sm"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Mobile menu hamburger button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-[#dee2ef] hover:text-[#00eeff] hover:bg-[#1b2029] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-[#171c24]/95 backdrop-blur-2xl border-b border-[#30353e]/60 px-6 py-5 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded-lg font-['Space_Grotesk'] text-base transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#1b2029] text-[#00eeff] font-semibold border-l-2 border-[#00eeff]'
                    : 'text-[#dee2ef] hover:text-[#00eeff] hover:bg-[#1b2029]/50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#30353e]/60">
              <div className="flex items-center gap-2 text-xs font-['Space_Grotesk'] text-[#849495]">
                <Globe className="w-4 h-4 text-[#00eeff]" />
                <span>{language === 'pt' ? 'Idioma:' : 'Language:'}</span>
              </div>
              <div className="flex items-center p-1 bg-[#1b2029] border border-[#30353e] rounded-full">
                <button
                  id="mobile-lang-pt"
                  onClick={() => onLanguageChange('pt')}
                  className={`px-3 py-1 rounded-full text-xs font-['Space_Grotesk'] font-bold ${
                    language === 'pt'
                      ? 'bg-[#00eeff] text-[#00363b]'
                      : 'text-[#849495]'
                  }`}
                >
                  Português
                </button>
                <button
                  id="mobile-lang-en"
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded-full text-xs font-['Space_Grotesk'] font-bold ${
                    language === 'en'
                      ? 'bg-[#00eeff] text-[#00363b]'
                      : 'text-[#849495]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <button
              id="mobile-hire-me-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onHireMeClick();
              }}
              className="mt-2 w-full py-3 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] font-bold text-center uppercase tracking-wider shadow-[0_0_16px_rgba(0,238,255,0.4)]"
            >
              {t.hireMe}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
