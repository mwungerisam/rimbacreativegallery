import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Artwork } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryLightboxProps {
  artworks: Artwork[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  artworks,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  const currentArtwork = artworks[currentIndex];
  const countStr = `${String(currentIndex + 1).padStart(2, '0')} / ${String(artworks.length).padStart(2, '0')}`;

  return (
    <AnimatePresence>
      <motion.div
        id="digital-museum-lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080809] text-[#f2ede4] select-none"
      >
        {/* Top Exhibition Bar */}
        <div className="flex items-center justify-between px-6 sm:px-12 py-6 border-b border-[#1c1c20] z-20">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-base tracking-widest text-[#f2ede4]">
              RIMBA
            </span>
            <span className="text-xs font-mono text-[#71717a] tracking-widest">
              / CURATED VIEW
            </span>
          </div>

          {/* Exhibition Counter & Close */}
          <div className="flex items-center space-x-6">
            <span className="text-xs font-mono tracking-[0.25em] text-[#c8a97e]">
              {countStr}
            </span>

            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#a1a1aa] hover:text-[#f2ede4] py-1.5 px-3 border border-[#27272a] hover:border-[#c8a97e] transition-colors"
              aria-label="Close exhibition viewer"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Artwork Stage */}
        <div className="relative flex-1 flex items-center justify-center p-4 sm:p-10 overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={onPrev}
            className="absolute left-4 sm:left-8 z-20 p-3 sm:p-4 rounded-full bg-[#141416]/80 hover:bg-[#c8a97e] text-[#f2ede4] hover:text-[#0c0c0d] transition-all border border-[#2a2a2e] hover:scale-105"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 sm:right-8 z-20 p-3 sm:p-4 rounded-full bg-[#141416]/80 hover:bg-[#c8a97e] text-[#f2ede4] hover:text-[#0c0c0d] transition-all border border-[#2a2a2e] hover:scale-105"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Artwork Image Frame */}
          <motion.div
            key={currentArtwork.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="max-h-[70vh] sm:max-h-[76vh] max-w-5xl flex items-center justify-center p-2 shadow-2xl"
          >
            <img
              src={currentArtwork.image}
              alt={currentArtwork.title}
              className="max-h-[70vh] sm:max-h-[74vh] w-auto max-w-full object-contain border border-[#222226] shadow-black"
            />
          </motion.div>
        </div>

        {/* Bottom Museum Plaque / Metadata */}
        <div className="border-t border-[#1c1c20] bg-[#0d0d0f] px-6 sm:px-12 py-6 z-20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f2ede4] font-light">
                {currentArtwork.title}
              </h3>
              <p className="text-sm text-[#c8a97e] font-sans mt-0.5">
                {currentArtwork.artist}, {currentArtwork.year}
              </p>
            </div>

            <div className="text-left md:text-right text-xs font-mono text-[#a1a1aa] space-y-1">
              <p className="text-[#d4cebe]">{currentArtwork.medium}</p>
              {currentArtwork.dimensions && (
                <p className="text-[#71717a]">{currentArtwork.dimensions}</p>
              )}
            </div>
          </div>

          {currentArtwork.description && (
            <p className="max-w-5xl mx-auto mt-3 text-xs sm:text-sm text-[#71717a] font-sans italic border-t border-[#1c1c20] pt-2">
              "{currentArtwork.description}"
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
