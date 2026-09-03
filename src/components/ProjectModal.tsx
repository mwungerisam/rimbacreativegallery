import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { BRAND_INFO } from '../data/portfolioData';
import { X, ArrowRight, Play, Film, UserCheck, MessageCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export default function ProjectModal({ project, onClose, onSelectProject, allProjects }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.featured))
    .slice(0, 2);

  return (
    <AnimatePresence>
      <motion.div
        id="project-case-study-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#0c0c0d]/95 backdrop-blur-xl text-[#f2ede4]"
      >
        {/* Top Floating Control Bar */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 bg-[#0c0c0d]/85 backdrop-blur-md border-b border-[#222226]">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-lg tracking-widest text-[#f2ede4]">RIMBA</span>
            <span className="text-[10px] tracking-[0.25em] text-[#c8a97e] uppercase font-mono">
              / {project.category}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#a1a1aa] hover:text-[#f2ede4] py-2 px-3 border border-transparent hover:border-[#333338] transition-all"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Container */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-16 space-y-16">
          {/* Hero Media / Header */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222226] pb-6">
              <div>
                <span className="text-xs font-mono text-[#c8a97e] tracking-[0.3em] uppercase block mb-2">
                  {project.category} • {project.year}
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#f2ede4]">
                  {project.title}
                </h1>
              </div>

              {project.client && (
                <div className="text-right">
                  <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block">
                    CLIENT / INITIATIVE
                  </span>
                  <span className="text-sm font-medium text-[#d4cebe]">{project.client}</span>
                </div>
              )}
            </div>

            {/* Oversized Hero Image */}
            <div className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden bg-[#161618] border border-[#222226]">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Project Details Grid (Creative Direction & Overview) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-[#c8a97e]">
                OVERVIEW &amp; PHILOSOPHY
              </h2>
              <p className="font-serif text-2xl sm:text-3xl font-light text-[#f2ede4] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-8 border-l border-[#222226] pl-6 sm:pl-10">
              <div>
                <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-[#71717a] mb-2">
                  CREATIVE DIRECTION
                </h3>
                <p className="text-sm text-[#d4cebe] font-medium">{project.creativeDirection}</p>
              </div>

              <div>
                <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-[#71717a] mb-3">
                  CREDITS &amp; COLLABORATORS
                </h3>
                <div className="space-y-2">
                  {project.credits.map((credit, idx) => (
                    <div key={idx} className="flex justify-between text-xs py-1 border-b border-[#1c1c1f]">
                      <span className="text-[#8e8e93] font-mono">{credit.role}</span>
                      <span className="text-[#f2ede4] font-medium">{credit.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Sequence / Exhibition Stills */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono text-[#c8a97e] tracking-[0.3em] uppercase">
                CURATED SEQUENCE
              </span>
              <div className="h-[1px] flex-1 bg-[#222226]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {project.galleryImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden bg-[#161618] border border-[#222226] group ${
                    idx % 3 === 0 ? 'md:col-span-2 aspect-16/9' : 'aspect-4/5 sm:aspect-3/4'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} detail ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Behind The Scenes (if available) */}
          {project.behindTheScenes && project.behindTheScenes.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-[#222226]">
              <span className="text-xs font-mono text-[#71717a] tracking-[0.3em] uppercase block">
                PRODUCTION &amp; STUDIO PROCESS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.behindTheScenes.map((bts, idx) => (
                  <div key={idx} className="relative aspect-16/10 overflow-hidden bg-[#161618] border border-[#222226]">
                    <img
                      src={bts}
                      alt="Behind the scenes on set in Kigali"
                      className="w-full h-full object-cover grayscale contrast-125 opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Direct Conversion CTA */}
          <div className="p-8 sm:p-12 border border-[#2c2c30] bg-[#111114] flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-serif text-3xl sm:text-4xl text-[#f2ede4] font-light">
                Ready to produce work of this caliber?
              </h3>
              <p className="text-sm text-[#a1a1aa] font-sans">
                Commission our cinema and photography units in Kigali for your next campaign.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] text-[#0c0c0d] font-mono text-xs tracking-widest uppercase font-bold flex items-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>START ON WHATSAPP</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3.5 border border-[#52525b] hover:border-[#f2ede4] text-[#f2ede4] font-mono text-xs tracking-widest uppercase transition-colors"
              >
                RETURN TO WORK
              </button>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="space-y-6 pt-10 border-t border-[#222226]">
              <span className="text-xs font-mono text-[#c8a97e] tracking-[0.3em] uppercase">
                CONTINUE EXPLORING
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProject(rel);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer border border-[#222226] bg-[#111114] p-4 transition-colors hover:border-[#c8a97e]"
                  >
                    <div className="aspect-16/10 overflow-hidden mb-4 bg-[#161618]">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#c8a97e] uppercase block">
                      {rel.category} • {rel.year}
                    </span>
                    <h4 className="font-serif text-xl text-[#f2ede4] group-hover:text-[#c8a97e] transition-colors mt-1">
                      {rel.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
