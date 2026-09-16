import { ArrowRight } from 'lucide-react';
import HexagonImage from './HexagonImage';
import { PERSONAL_INFO, STATS, UI_TEXT } from '../data';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  onReadMoreClick: () => void;
}

export default function AboutSection({ language, onReadMoreClick }: AboutSectionProps) {
  const t = UI_TEXT[language].about;
  const stats = STATS[language];
  const bio = PERSONAL_INFO.fullBio[language];

  return (
    <section id="about" className="relative w-full bg-[#1b2029] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hexagon Photo */}
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1 relative py-6">
            <HexagonImage
              id="about-hexagon-portrait"
              src={PERSONAL_INFO.aboutImage}
              alt={`${PERSONAL_INFO.name} About Profile`}
              glowSize="md"
            />
          </div>

          {/* Right Content Details */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#00eeff] uppercase tracking-widest mb-1.5">
              {t.badge}
            </span>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f1f4ff]">
              {t.titleStart} <span className="text-[#00eeff]">{t.titleHighlight}</span>
            </h2>

            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-[#f1f4ff] mt-2 font-semibold">
              {t.roleSubtitle}
            </h3>

            <p className="font-['Outfit'] text-sm sm:text-base text-[#b9c9cb] mt-4 leading-relaxed">
              {bio[0]}
            </p>

            <p className="font-['Outfit'] text-sm sm:text-base text-[#b9c9cb] mt-3 leading-relaxed">
              {bio[1]}
            </p>

            {/* Core Stats Bento Trio */}
            <div
              id="about-stats-container"
              className="grid grid-cols-3 gap-4 w-full max-w-md my-8"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  id={`stat-card-${idx}`}
                  className="p-4 rounded-xl bg-[#252a33] border border-[#30353e]/50 flex flex-col items-center justify-center text-center shadow-md hover:border-[#00eeff]/40 hover:shadow-[0_0_15px_rgba(0,238,255,0.15)] transition-all duration-300"
                >
                  <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#00eeff]">
                    {stat.value}
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#849495] mt-1 tracking-wide font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Read More Action */}
            <button
              id="about-read-more-btn"
              onClick={onReadMoreClick}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_18px_rgba(0,238,255,0.4)] hover:shadow-[0_0_30px_rgba(0,238,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>{t.readMore}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
