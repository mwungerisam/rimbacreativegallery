import { motion } from 'motion/react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export default function Hero({ onExploreWork, onStartProject }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-10 sm:pb-14"
    >
      {/* Background Photography with Sophisticated Film Contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <div
          className="absolute -inset-4 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2200&q=90')`,
          }}
        />
        {/* Deep, Even Vignette for Uncompromising Legibility */}
        <div className="absolute inset-0 bg-[#0c0c0d]/75 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-[#0c0c0d]/60" />
      </div>

      {/* Main Editorial Statement */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl">
          {/* Subtle Studio Identity Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#c8a97e]" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#c8a97e]">
              Visual Culture • Film • Photography • Kigali
            </span>
          </motion.div>

          {/* Core Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl xs:text-5xl sm:text-7xl lg:text-8xl tracking-tight font-light leading-[1.02] text-[#f2ede4] mb-6"
          >
            WE CREATE <br />
            <span className="italic font-normal text-[#c8a97e]">VISUAL STORIES</span> <br />
            THAT REMAIN.
          </motion.h1>

          {/* Concise Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-[#d4cebe] font-light max-w-xl leading-relaxed mb-8 font-sans"
          >
            A contemporary art gallery and creative media production studio in Kigali, crafting high-calibre photography, cinema, and fine art narratives.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              id="hero-explore-work-btn"
              onClick={onExploreWork}
              className="group px-7 py-3.5 bg-[#f2ede4] text-[#0c0c0d] font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-200 hover:bg-[#c8a97e] text-center flex items-center justify-center gap-2"
            >
              <span>SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              id="hero-start-project-btn"
              onClick={onStartProject}
              className="px-7 py-3.5 border border-[#3f3f46] hover:border-[#c8a97e] text-[#f2ede4] font-sans text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:bg-white/5 text-center"
            >
              COMMISSION A PROJECT
            </button>

            <a
              id="hero-whatsapp-link"
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-[#a1a1aa] hover:text-[#25D366] transition-colors py-3 sm:py-2 px-3"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WHATSAPP DIRECT</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Quiet Footer Line */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono tracking-widest text-[#71717a] border-t border-[#222226] pt-5">
        <div>
          <span className="text-[#f2ede4]">KIGALI, RWANDA</span>
          <span className="mx-2 text-[#3f3f46]">•</span>
          <span>ESTABLISHED TO ADVANCE CONTEMPORARY AFRICAN STORYTELLING</span>
        </div>
        <div className="hidden sm:block text-[#52525b]">
          SCROLL TO EXPLORE &darr;
        </div>
      </div>
    </section>
  );
}
