import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTWORKS, BRAND_INFO } from '../data/portfolioData';
import GalleryLightbox from './GalleryLightbox';
import { Eye, MessageCircle } from 'lucide-react';

const ART_FILTERS = ['ALL', 'PHOTOGRAPHY', 'PAINTING', 'MIXED MEDIA'];

export default function ArtGallery() {
  const [activeArtworkIndex, setActiveArtworkIndex] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filteredArtworks = useMemo(() => {
    if (selectedFilter === 'ALL') return ARTWORKS;
    return ARTWORKS.filter((art) => {
      const med = art.medium.toUpperCase();
      if (selectedFilter === 'PHOTOGRAPHY') return med.includes('PRINT') || med.includes('PHOTOGRAPHY');
      if (selectedFilter === 'PAINTING') return med.includes('OIL') || med.includes('ACRYLIC') || med.includes('CANVAS');
      if (selectedFilter === 'MIXED MEDIA') return med.includes('MIXED') || med.includes('TEXTURE') || med.includes('PIGMENT');
      return true;
    });
  }, [selectedFilter]);

  const handleNext = () => {
    if (activeArtworkIndex !== null) {
      setActiveArtworkIndex((activeArtworkIndex + 1) % filteredArtworks.length);
    }
  };

  const handlePrev = () => {
    if (activeArtworkIndex !== null) {
      setActiveArtworkIndex((activeArtworkIndex - 1 + filteredArtworks.length) % filteredArtworks.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 border-t border-[#1f1f23] relative bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-[#c8a97e] tracking-[0.25em] uppercase">
                CURATED WORKS
              </span>
              <div className="h-[1px] w-10 bg-[#333338]" />
            </div>
            <h2 className="font-serif text-4xl xs:text-5xl sm:text-6xl font-light text-[#f2ede4] tracking-tight">
              ART &amp; <span className="italic font-normal text-[#c8a97e]">COLLECTIONS</span>
            </h2>
          </div>

          <div className="max-w-md text-sm sm:text-base text-[#a1a1aa] font-sans font-light leading-relaxed">
            Original paintings, fine art photography, and mixed media currently catalogued in our Kigali space for private collectors and institutions.
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-14 border-b border-[#222226] no-scrollbar">
          {ART_FILTERS.map((f) => {
            const isActive = selectedFilter === f;
            return (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#0c0c0d] bg-[#f2ede4] font-medium'
                    : 'text-[#a1a1aa] hover:text-[#f2ede4] hover:bg-[#18181b]'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Exhibition Wall Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art, idx) => (
              <motion.article
                key={art.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveArtworkIndex(idx)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                {/* Artwork Frame */}
                <div className="relative aspect-4/5 overflow-hidden bg-[#141416] border border-[#222226] p-3 sm:p-4 mb-5 transition-all duration-300 group-hover:border-[#c8a97e]/40">
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0c0c0d]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 bg-[#f2ede4] text-[#0c0c0d] font-mono text-xs tracking-widest uppercase font-medium flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        VIEW
                      </span>
                    </div>
                  </div>
                </div>

                {/* Museum Label Plaque */}
                <div className="space-y-1 px-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#f2ede4] group-hover:text-[#c8a97e] transition-colors leading-snug font-light">
                      {art.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#71717a]">{art.year}</span>
                  </div>

                  <p className="text-xs text-[#c8a97e] font-sans font-medium">
                    {art.artist}
                  </p>

                  <p className="text-xs text-[#8e8e93] font-mono line-clamp-1">
                    {art.medium}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Acquisition & Private View Callout */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-10 border border-[#222226] bg-[#111114] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#c8a97e] tracking-widest uppercase block">
              ACQUISITIONS &amp; PRIVATE VIEWING
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f2ede4] font-light">
              Inquire about artwork provenance or studio visits
            </h3>
            <p className="text-sm text-[#71717a] font-sans">
              Private previews arranged in Kigali with certificates of authenticity.
            </p>
          </div>

          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-[#f2ede4] hover:bg-[#c8a97e] text-[#0c0c0d] font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>INQUIRE VIA WHATSAPP</span>
          </a>
        </div>
      </div>

      {/* Lightbox Component */}
      <GalleryLightbox
        artworks={filteredArtworks}
        currentIndex={activeArtworkIndex}
        onClose={() => setActiveArtworkIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
