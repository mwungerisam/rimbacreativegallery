import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface SelectedWorkProps {
  onStartProject: () => void;
}

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'PHOTOGRAPHY',
  'FILM',
  'COMMERCIAL',
  'ART',
  'EDITORIAL',
];

export default function SelectedWork({ onStartProject }: SelectedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-[#1f1f23] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-[#c8a97e] tracking-[0.25em] uppercase">
                EXHIBITIONS &amp; COMMISSIONS
              </span>
              <div className="h-[1px] w-10 bg-[#333338]" />
            </div>
            <h2 className="font-serif text-4xl xs:text-5xl sm:text-6xl font-light text-[#f2ede4] tracking-tight">
              SELECTED <span className="italic font-normal text-[#c8a97e]">WORK</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#a1a1aa] font-sans font-light leading-relaxed">
            Curated visual series and commercial productions. Every commission balances Rwandan cultural authenticity with international aesthetic standards.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="relative mb-12 sm:mb-16 border-b border-[#222226]">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-btn-${cat.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-[#0c0c0d] bg-[#f2ede4] font-medium'
                      : 'text-[#a1a1aa] hover:text-[#f2ede4] hover:bg-[#1a1a1d]'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <span className="ml-1.5 text-[10px] opacity-75">
                      ({cat === 'ALL' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Portfolio Layout */}
        <motion.div layout className="space-y-16 sm:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={project.id}
                  id={`project-item-${project.slug}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer border-b border-[#1c1c20] pb-14 sm:pb-20 last:border-b-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-[#161618] border border-[#222226] group-hover:border-[#c8a97e]/40 transition-colors duration-300">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                          loading="lazy"
                        />

                        {/* Corner Year Badge */}
                        <div className="absolute top-3.5 right-3.5 bg-[#0c0c0d]/90 px-3 py-1 text-[11px] font-mono text-[#f2ede4] tracking-widest border border-[#27272a]">
                          {project.year}
                        </div>

                        {/* Floating "View Project" prompt on hover */}
                        <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-[#f2ede4] text-[#0c0c0d] font-mono text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-200">
                          <span>EXPLORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div className={`lg:col-span-4 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-3 text-xs font-mono tracking-[0.2em] text-[#c8a97e] uppercase">
                          <span>{project.category}</span>
                          {project.client && (
                            <>
                              <span className="text-[#52525b]">•</span>
                              <span className="text-[#8e8e93] truncate max-w-[180px]">{project.client}</span>
                            </>
                          )}
                        </div>

                        <h3 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-light text-[#f2ede4] group-hover:text-[#c8a97e] transition-colors leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-[#a1a1aa] font-sans font-light leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="pt-2 flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#f2ede4] group-hover:text-[#c8a97e] transition-colors">
                        <span className="border-b border-current pb-0.5">VIEW CASE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Commission Prompt */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-10 border border-[#222226] bg-[#111114] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="text-xs font-mono text-[#c8a97e] tracking-widest uppercase block mb-1">
              COMMERCIAL INQUIRIES &amp; COMMISSIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f2ede4] font-light">
              Collaborate with our studio and film crew in Kigali
            </h3>
          </div>

          <button
            onClick={onStartProject}
            className="px-7 py-3 bg-[#f2ede4] text-[#0c0c0d] font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#c8a97e] transition-colors whitespace-nowrap"
          >
            START A PROJECT
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS}
      />
    </section>
  );
}
