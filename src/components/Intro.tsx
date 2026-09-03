import { motion } from 'motion/react';
import ThreeGallerySculpture from './ThreeGallerySculpture';

export default function Intro() {
  return (
    <section id="intro" className="relative py-28 sm:py-36 border-t border-[#1f1f23] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-xs font-mono text-[#c8a97e] tracking-[0.3em] uppercase">
            01 / INTRODUCTION
          </span>
          <div className="h-[1px] w-12 bg-[#333338]" />
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Statement */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-[#f2ede4]"
            >
              WHERE <span className="italic font-normal text-[#c8a97e]">VISUAL CULTURE</span> MEETS CREATIVE PRODUCTION.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {['CONTEMPORARY AFRICAN ART', 'CINEMATIC FILM', 'PORTRAITURE', 'MEDIA PRODUCTION'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.2em] font-mono uppercase px-3 py-1.5 border border-[#27272a] text-[#a1a1aa]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Narrative Copy & 3D Curated Accent */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 text-[#d4cebe] font-sans text-base sm:text-lg leading-relaxed font-light"
            >
              <p className="text-xl sm:text-2xl text-[#f2ede4] font-serif leading-snug">
                Rimba Creative Gallery is a creative space dedicated to visual storytelling, contemporary art, photography, film and creative media.
              </p>
              <p className="text-sm sm:text-base text-[#a1a1aa]">
                Rooted in Kigali and engaging global audiences, we bridge physical gallery curation with high-caliber commercial and cinematic production through <strong className="font-medium text-[#f2ede4]">Rimba Creative Media</strong>.
              </p>
              <p className="text-sm text-[#71717a] border-l border-[#c8a97e]/60 pl-4 py-1 italic">
                “Every image carries a lineage. Our practice honors Rwandan heritage while exploring the frontiers of modern visual language.”
              </p>
            </motion.div>

            {/* Interactive 3D Gallery Object Accent */}
            <div className="relative border border-[#222226] bg-[#111113] p-4">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#71717a] mb-2 px-2">
                <span>SCULPTURAL INSTALLATION</span>
                <span>DRAG TO ROTATE</span>
              </div>
              <div className="h-56 w-full overflow-hidden">
                <ThreeGallerySculpture />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
