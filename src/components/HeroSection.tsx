import { Download, Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import HexagonImage from './HexagonImage';
import { PERSONAL_INFO, UI_TEXT } from '../data';
import { Language } from '../types';

interface HeroSectionProps {
  language: Language;
  onDownloadCv: () => void;
  onSocialClick: (platform: string) => void;
}

export default function HeroSection({ language, onDownloadCv, onSocialClick }: HeroSectionProps) {
  const t = UI_TEXT[language].hero;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#0e141c] pt-12 pb-20 md:py-24"
    >
      {/* Background ambient lighting blurs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#00eeff]/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-[#00eeff]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Pill Badge */}
            <div
              id="hire-availability-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#252a33] border border-[#30353e] mb-5 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00eeff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00eeff]"></span>
              </span>
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#00eeff] tracking-wider uppercase">
                {PERSONAL_INFO.status[language]}
              </span>
            </div>

            {/* Intro text */}
            <span className="font-['Space_Grotesk'] text-2xl md:text-3xl font-semibold text-[#f1f4ff]">
              {t.hello}
            </span>

            {/* Main Name Heading */}
            <h1
              id="hero-name-heading"
              className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f1f4ff] mt-2 mb-2"
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Role title */}
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-semibold text-[#f1f4ff]">
              {t.rolePrefix}{' '}
              <span className="text-[#00eeff] relative inline-block drop-shadow-[0_0_12px_rgba(0,238,255,0.4)]">
                {PERSONAL_INFO.role[language]}
              </span>
            </h2>

            {/* Bio description */}
            <p className="font-['Outfit'] text-base sm:text-lg text-[#b9c9cb] max-w-xl mt-5 leading-relaxed">
              {PERSONAL_INFO.shortBio[language]}
            </p>

            {/* Social Profile Buttons */}
            <div id="hero-social-links" className="flex items-center gap-4 mt-8 flex-wrap">
              {/* WhatsApp */}
              <a
                id="social-btn-whatsapp"
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp - Minrage Carlos"
                title={`WhatsApp: ${PERSONAL_INFO.phoneDisplay}`}
                className="w-10 h-10 rounded-full bg-[#252a33] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-[#0e141c] transition-all duration-300 shadow-[0_0_12px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.7)] hover:-translate-y-1 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Email / Gmail */}
              <a
                id="social-btn-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label={`Email ${PERSONAL_INFO.email}`}
                title={`Email: ${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-full bg-[#252a33] flex items-center justify-center text-[#EA4335] hover:bg-[#EA4335] hover:text-[#ffffff] transition-all duration-300 shadow-[0_0_12px_rgba(234,67,53,0.3)] hover:shadow-[0_0_20px_rgba(234,67,53,0.7)] hover:-translate-y-1 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a
                id="social-btn-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile - minrageC"
                className="w-10 h-10 rounded-full bg-[#252a33] flex items-center justify-center text-[#00eeff] hover:bg-[#00eeff] hover:text-[#0e141c] transition-all duration-300 shadow-[0_0_12px_rgba(0,238,255,0.25)] hover:shadow-[0_0_20px_rgba(0,238,255,0.65)] hover:-translate-y-1 cursor-pointer"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                id="social-btn-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile - Minrage Carlos"
                className="w-10 h-10 rounded-full bg-[#252a33] flex items-center justify-center text-[#00eeff] hover:bg-[#00eeff] hover:text-[#0e141c] transition-all duration-300 shadow-[0_0_12px_rgba(0,238,255,0.25)] hover:shadow-[0_0_20px_rgba(0,238,255,0.65)] hover:-translate-y-1 cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Download CV CTA */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                id="download-cv-btn"
                onClick={onDownloadCv}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-base font-bold shadow-[0_0_20px_rgba(0,238,255,0.5)] hover:shadow-[0_0_35px_rgba(0,238,255,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>{t.downloadCv}</span>
                <Download className="w-5 h-5" />
              </button>
              <span className="font-['Space_Grotesk'] text-xs text-[#849495] tracking-wide">
                {PERSONAL_INFO.cvFileSize}
              </span>
            </div>
          </div>

          {/* Right Hexagon Photo */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <HexagonImage
              id="hero-hexagon-portrait"
              src={PERSONAL_INFO.heroImage}
              alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.role[language]}`}
              glowSize="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
