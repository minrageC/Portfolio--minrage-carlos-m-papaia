import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Service, Language } from '../types';
import { UI_TEXT } from '../data';

interface ServiceModalProps {
  service: Service | null;
  language: Language;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ServiceModal({ service, language, onClose, onContactClick }: ServiceModalProps) {
  if (!service) return null;

  const t = UI_TEXT[language].modals.service;

  return (
    <div
      id="service-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="service-modal-content"
        className="relative w-full max-w-lg bg-[#1b2029] border border-[#00eeff]/40 rounded-2xl shadow-[0_0_40px_rgba(0,238,255,0.25)] text-[#dee2ef] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="service-modal-close-btn"
          onClick={onClose}
          aria-label={t.close}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#252a33] text-[#dee2ef] hover:text-[#00eeff] hover:bg-[#30353e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#00eeff] uppercase tracking-widest">
          {t.badge}
        </span>

        <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f1f4ff] mt-1 mb-3">
          {service.title}
        </h3>

        <p className="font-['Outfit'] text-sm sm:text-base text-[#b9c9cb] leading-relaxed mb-6">
          {service.description}
        </p>

        <h4 className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#849495] mb-3 font-semibold">
          {t.deliverables}
        </h4>

        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm font-['Outfit'] text-[#dee2ef]">
              <CheckCircle2 className="w-4 h-4 text-[#00eeff] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button
            id="service-modal-hire-btn"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full py-3.5 px-6 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_16px_rgba(0,238,255,0.4)] hover:shadow-[0_0_24px_rgba(0,238,255,0.7)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>{t.requestQuote(service.title)}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
