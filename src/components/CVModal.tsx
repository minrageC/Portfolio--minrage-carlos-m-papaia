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
- Desenvolvedor Frontend | Projetos Web & Freelance (2025 - Presente • 1 Ano)
  * Desenvolvimento de 5 aplicações completas e responsivas utilizando React 19, TypeScript e Tailwind CSS.
  * Otimização de Core Web Vitals, interfaces interativas e integração de APIs modernas com alta fidelidade visual.
  * Criação de landing pages, dashboards e ferramentas web com foco em performance e acessibilidade.

COMPETÊNCIAS PRINCIPAIS:
- React 19, Next.js, TypeScript, JavaScript Moderno (ESNext)
- Tailwind CSS, Arquitetura CSS, Framer Motion, HTML5 Semântico
- Gerenciamento de Estado (Zustand, React Hooks)
- WebSockets, WebAudio API, Visualização de Dados
- Profiling de Performance, Design Responsivo, Acessibilidade (WCAG AA)

FORMAÇÃO:
- Formação em Ciência da Computação & Engenharia de Software
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
- Frontend Developer | Web Projects & Freelance (2025 - Present • 1 Year)
  * Developed 5 complete, responsive applications using React 19, TypeScript, and Tailwind CSS.
  * Optimized Core Web Vitals, interactive interfaces, and modern API integrations with high visual fidelity.
  * Built web dashboards, landing pages, and developer tools focused on performance and accessibility.

CORE COMPETENCIES:
- React 19, Next.js, TypeScript, JavaScript (ESNext)
- Tailwind CSS, CSS Architecture, Framer Motion, HTML5 / Semantic Web
- State Management (Zustand, React Hooks)
- WebSockets, WebAudio API, Data Visualizations
- Performance Profiling, Responsive Design, Accessibility (WCAG AA)

EDUCATION:
- Computer Science & Software Engineering Studies
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
