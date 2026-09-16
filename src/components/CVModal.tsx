import { X, Download, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO, UI_TEXT } from '../data';
import { Language } from '../types';

interface CVModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export default function CVModal({ isOpen, language, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const t = UI_TEXT[language].modals.cv;

  const handleDownload = () => {
    const resumeText = language === 'pt' ? `
========================================
${PERSONAL_INFO.name.toUpperCase()} - ${PERSONAL_INFO.role.pt.toUpperCase()}
Status: ${PERSONAL_INFO.status.pt}
E-mail: ${PERSONAL_INFO.email}
Telefone / WhatsApp: ${PERSONAL_INFO.phoneDisplay} (${PERSONAL_INFO.whatsapp})
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Localização: ${PERSONAL_INFO.location.pt}
========================================

RESUMO PROFISSIONAL:
${PERSONAL_INFO.shortBio.pt}

EXPERIÊNCIA PROFISSIONAL:
- Desenvolvedor Frontend Sênior | CyberTech Labs (2022 - Presente)
  * Arquitetura de plataformas micro-frontend com React 19 & Next.js com 99.9% de uptime.
  * Otimização de Core Web Vitals com tempo de interação (INP) reduzido para <45ms.
- Engenheiro de Software Frontend | Nexus Interface Design (2019 - 2022)
  * Desenvolvimento de design systems e bibliotecas de componentes reutilizáveis em TypeScript.
  * Otimização de funis de conversão com aumento médio de 28% em mais de 40 implementações.

COMPETÊNCIAS PRINCIPAIS:
- React 19, Next.js, TypeScript, JavaScript Moderno (ESNext)
- Tailwind CSS, Arquitetura CSS, Framer Motion, HTML5 Semântico
- Gerenciamento de Estado (Zustand, Redux Toolkit, TanStack Query)
- WebSockets, WebAudio API, Visualização de Dados com D3.js
- Profiling de Performance, Design Responsivo, Acessibilidade (WCAG AA)

FORMAÇÃO:
- Bacharelado em Ciência da Computação & Engenharia de Software (2018)
========================================
` : `
========================================
${PERSONAL_INFO.name.toUpperCase()} - ${PERSONAL_INFO.role.en.toUpperCase()}
Status: ${PERSONAL_INFO.status.en}
Email: ${PERSONAL_INFO.email}
Phone / WhatsApp: ${PERSONAL_INFO.phoneDisplay} (${PERSONAL_INFO.whatsapp})
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location.en}
========================================

SUMMARY:
${PERSONAL_INFO.shortBio.en}

EXPERIENCE:
- Senior Frontend Developer | CyberTech Labs (2022 - Present)
  * Architected micro-frontend React & Next.js platforms with 99.9% uptime.
  * Reduced core web vital interaction to next paint (INP) to sub-45ms.
- Frontend Engineer | Nexus Interface Design (2019 - 2022)
  * Developed design systems and responsive component libraries in TypeScript.
  * Optimized conversion funnels by 28% across 40+ client implementations.

CORE COMPETENCIES:
- React 19, Next.js, TypeScript, JavaScript (ESNext)
- Tailwind CSS, CSS Architecture, Framer Motion, HTML5 / Semantic Web
- State Management (Zustand, Redux Toolkit, React Query)
- WebSockets, WebAudio API, D3.js data visualizations
- Performance Profiling, Responsive Design, Accessibility (WCAG AA)

EDUCATION:
- B.S. Computer Science & Software Engineering (2018)
========================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const sanitizedName = PERSONAL_INFO.name.replace(/[^a-zA-Z0-9]/g, '_');
    link.download = language === 'pt' 
      ? `${sanitizedName}_Curriculo_Desenvolvedor_Frontend.txt`
      : `${sanitizedName}_Frontend_Developer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="cv-modal-content"
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#1b2029] border border-[#00eeff]/40 rounded-2xl shadow-[0_0_40px_rgba(0,238,255,0.25)] text-[#dee2ef] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="cv-modal-close-btn"
          onClick={onClose}
          aria-label={t.close}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#252a33] text-[#dee2ef] hover:text-[#00eeff] hover:bg-[#30353e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#00eeff]/15 border border-[#00eeff]/40 flex items-center justify-center text-[#00eeff]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#f1f4ff]">
              {PERSONAL_INFO.name}
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-[#00eeff]">
              {t.badge}
            </p>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="space-y-4 my-6 font-['Outfit'] text-sm">
          <div className="p-4 rounded-xl bg-[#252a33] border border-[#30353e]/60">
            <div className="flex items-center gap-2 font-['Space_Grotesk'] text-sm font-semibold text-[#f1f4ff] mb-1">
              <Briefcase className="w-4 h-4 text-[#00eeff]" />
              <span>{t.yearsExpTitle}</span>
            </div>
            <p className="text-xs text-[#b9c9cb] leading-relaxed">
              {t.yearsExpDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#252a33] border border-[#30353e]/60">
            <div className="flex items-center gap-2 font-['Space_Grotesk'] text-sm font-semibold text-[#f1f4ff] mb-1">
              <Award className="w-4 h-4 text-[#00eeff]" />
              <span>{t.techTitle}</span>
            </div>
            <p className="text-xs text-[#b9c9cb] leading-relaxed">
              {t.techDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#252a33] border border-[#30353e]/60">
            <div className="flex items-center gap-2 font-['Space_Grotesk'] text-sm font-semibold text-[#f1f4ff] mb-1">
              <GraduationCap className="w-4 h-4 text-[#00eeff]" />
              <span>{t.eduTitle}</span>
            </div>
            <p className="text-xs text-[#b9c9cb] leading-relaxed">
              {t.eduDesc}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#30353e]">
          <span className="font-['Space_Grotesk'] text-xs text-[#849495]">
            {PERSONAL_INFO.cvFileSize}
          </span>
          <button
            id="modal-download-file-btn"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_24px_rgba(0,238,255,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>{t.downloadBtn}</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
