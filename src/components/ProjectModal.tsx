import { X, ExternalLink, Sparkles } from 'lucide-react';
import { Project, Language } from '../types';
import { UI_TEXT } from '../data';

interface ProjectModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ProjectModal({ project, language, onClose, onContactClick }: ProjectModalProps) {
  if (!project) return null;

  const t = UI_TEXT[language].modals.project;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1b2029] border border-[#00eeff]/40 rounded-2xl shadow-[0_0_40px_rgba(0,238,255,0.25)] text-[#dee2ef] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          aria-label={t.close}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#252a33] text-[#dee2ef] hover:text-[#00eeff] hover:bg-[#30353e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Preview */}
        <div className="rounded-xl overflow-hidden aspect-[16/10] bg-[#0e141c] border border-[#30353e] mb-6 shadow-inner relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-[#0e141c]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-['Space_Grotesk'] text-[#00eeff] border border-[#00eeff]/30">
            {project.category}
          </div>
        </div>

        {/* Header Title & Category */}
        <div className="mb-4">
          <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f1f4ff]">
            {project.title}
          </h3>
          {project.metrics && (
            <p className="font-['Space_Grotesk'] text-xs text-[#00eeff] mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {project.metrics}
            </p>
          )}
        </div>

        {/* Long Narrative */}
        <p className="font-['Outfit'] text-sm sm:text-base text-[#b9c9cb] leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Tags */}
        <div className="mb-8">
          <h4 className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#849495] mb-2.5 font-semibold">
            {t.tech}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-['Space_Grotesk'] bg-[#252a33] text-[#d7fbff] border border-[#30353e]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-[#30353e]">
          <button
            id="modal-inquire-btn"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="flex-1 min-w-[160px] py-3 px-6 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_16px_rgba(0,238,255,0.4)] hover:shadow-[0_0_24px_rgba(0,238,255,0.7)] text-center transition-all cursor-pointer"
          >
            {t.inquire}
          </button>
          <a
            href={project.imageUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#252a33] hover:bg-[#30353e] text-[#dee2ef] font-['Space_Grotesk'] text-sm font-semibold border border-[#30353e] transition-all cursor-pointer"
          >
            <span>{t.viewHighRes}</span>
            <ExternalLink className="w-4 h-4 text-[#00eeff]" />
          </a>
        </div>
      </div>
    </div>
  );
}
