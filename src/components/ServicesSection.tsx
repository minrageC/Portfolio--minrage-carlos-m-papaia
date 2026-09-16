import { Code, Brush, BarChart3 } from 'lucide-react';
import { SERVICES, UI_TEXT } from '../data';
import { Service, Language } from '../types';

interface ServicesSectionProps {
  language: Language;
  onSelectService: (service: Service) => void;
}

export default function ServicesSection({ language, onSelectService }: ServicesSectionProps) {
  const t = UI_TEXT[language].services;
  const services = SERVICES[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-8 h-8" />;
      case 'brush':
        return <Brush className="w-8 h-8" />;
      case 'bar_chart':
      default:
        return <BarChart3 className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="relative w-full bg-[#0e141c] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-xl mb-16">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#00eeff] uppercase tracking-widest">
            {t.badge}
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f1f4ff] mt-2">
            {t.titleStart} <span className="text-[#00eeff]">{t.titleHighlight}</span>
          </h2>
          <div className="w-16 h-1 bg-[#00eeff] mx-auto mt-3 rounded-full shadow-[0_0_8px_#00eeff]"></div>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`group relative rounded-2xl bg-[#252a33] border border-[#30353e]/60 p-8 sm:p-10 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#00eeff]/40 hover:shadow-[0_12px_35px_rgba(0,238,255,0.18)] ${
                index === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''
              }`}
            >
              {/* Service Icon Capsule */}
              <div
                id={`service-icon-${service.id}`}
                className="w-16 h-16 rounded-full bg-[#1b2029] border border-[#30353e] flex items-center justify-center text-[#00eeff] mb-6 shadow-inner group-hover:bg-[#00eeff] group-hover:text-[#00363b] group-hover:shadow-[0_0_20px_rgba(0,238,255,0.5)] transition-all duration-300"
              >
                {getIcon(service.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#f1f4ff] tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-['Outfit'] text-sm sm:text-[15px] text-[#b9c9cb] mt-4 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Read More Button */}
              <button
                id={`service-read-more-${service.id}`}
                onClick={() => onSelectService(service)}
                className="mt-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_14px_rgba(0,238,255,0.35)] hover:shadow-[0_0_22px_rgba(0,238,255,0.7)] group-hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {t.readMore}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
