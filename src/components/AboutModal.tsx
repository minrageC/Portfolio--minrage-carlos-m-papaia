import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, UI_TEXT } from '../data';
import { Language } from '../types';

interface AboutModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onContactClick: () => void;
}

export default function AboutModal({ isOpen, language, onClose, onContactClick }: AboutModalProps) {
  if (!isOpen) return null;

  const t = UI_TEXT[language].modals.about;

  return (
    <div
      id="about-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="about-modal-content"
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#1b2029] border border-[#00eeff]/40 rounded-2xl shadow-[0_0_40px_rgba(0,238,255,0.25)] text-[#dee2ef] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="about-modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#252a33] text-[#dee2ef] hover:text-[#00eeff] hover:bg-[#30353e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#00eeff] uppercase tracking-widest">
          {t.badge}
        </span>

        <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f1f4ff] mt-1 mb-4">
          {t.meet} {PERSONAL_INFO.name}
        </h3>

        <div className="space-y-4 font-['Outfit'] text-sm sm:text-base text-[#b9c9cb] leading-relaxed mb-6">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>

        <h4 className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#849495] mb-3 font-semibold">
          {t.principlesTitle}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {t.principles.map((principle, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs font-['Space_Grotesk'] text-[#dee2ef] bg-[#252a33] p-2.5 rounded-lg border border-[#30353e]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#00eeff] shrink-0" />
              <span>{principle}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-[#30353e]">
          <button
            id="about-modal-contact-btn"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full py-3.5 px-6 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_16px_rgba(0,238,255,0.4)] hover:shadow-[0_0_24px_rgba(0,238,255,0.7)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
