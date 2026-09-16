import { ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../data';

interface FooterProps {
  language: Language;
  onScrollToTop: () => void;
}

export default function Footer({ language, onScrollToTop }: FooterProps) {
  const t = UI_TEXT[language].footer;

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#171c24] border-t border-[#30353e]/60 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand and Copyright text */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-['Space_Grotesk'] text-lg font-bold text-[#f1f4ff]">
            Portfolio<span className="text-[#00eeff]">.</span>
          </span>
          <span className="hidden sm:inline-block text-[#849495]">•</span>
          <span className="font-['Outfit'] text-xs sm:text-sm text-[#b9c9cb]">
            © {new Date().getFullYear()} Developer Portfolio. {t.rights}
          </span>
        </div>

        {/* Back to top button */}
        <div className="flex items-center">
          <button
            id="back-to-top-btn"
            onClick={onScrollToTop}
            aria-label={t.backToTop}
            title={t.backToTop}
            className="w-10 h-10 rounded-full bg-[#252a33] border border-[#30353e] flex items-center justify-center text-[#dee2ef] hover:bg-[#00eeff] hover:text-[#00363b] hover:border-[#00eeff] transition-all duration-300 shadow-[0_0_12px_rgba(0,238,255,0.2)] hover:shadow-[0_0_20px_rgba(0,238,255,0.6)] cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
