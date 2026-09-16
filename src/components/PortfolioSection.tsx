import { ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS, UI_TEXT } from '../data';
import { Project, Language } from '../types';

interface PortfolioSectionProps {
  language: Language;
  onSelectProject: (project: Project) => void;
}

export default function PortfolioSection({ language, onSelectProject }: PortfolioSectionProps) {
  const t = UI_TEXT[language].portfolio;
  const projects = PROJECTS[language];

  return (
    <section id="portfolio" className="relative w-full bg-[#1b2029] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
        {/* Section Title */}
        <div className="text-center max-w-xl mb-16">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#00eeff] uppercase tracking-widest">
            {t.badge}
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f1f4ff] mt-2">
            {t.titleStart} <span className="text-[#00eeff]">{t.titleHighlight}</span>
          </h2>
          <div className="w-16 h-1 bg-[#00eeff] mx-auto mt-3 rounded-full shadow-[0_0_8px_#00eeff]"></div>
        </div>

        {/* 6 Project Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#0e141c] border border-[#30353e]/60 shadow-lg aspect-[16/11] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00eeff]"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading={idx < 3 ? 'eager' : 'lazy'}
              />

              {/* Tag chip badge (visible by default) */}
              <div className="absolute top-3 left-3 z-10 opacity-90 group-hover:opacity-0 transition-opacity duration-300">
                <span className="px-3 py-1 rounded-full text-xs font-['Space_Grotesk'] font-medium bg-[#0e141c]/80 backdrop-blur-md text-[#d7fbff] border border-[#30353e]">
                  {project.category}
                </span>
              </div>

              {/* Hover Overlay Scrim */}
              <div className="absolute inset-0 bg-[#0e141c]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xs">
                <span className="text-xs font-['Space_Grotesk'] text-[#00eeff] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {project.category}
                </span>

                <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#f1f4ff] tracking-tight">
                  {project.title}
                </h4>

                <p className="font-['Outfit'] text-xs sm:text-sm text-[#b9c9cb] mt-2 max-w-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Open Modal Button */}
                <div
                  id={`project-overlay-btn-${project.id}`}
                  className="mt-4 w-12 h-12 rounded-full bg-[#00eeff] text-[#00363b] flex items-center justify-center shadow-[0_0_18px_rgba(0,238,255,0.6)] hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
