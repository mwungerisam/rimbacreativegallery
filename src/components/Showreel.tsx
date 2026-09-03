import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Volume2, VolumeX } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

export default function Showreel() {
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPlayingModal(false);
    };
    if (isPlayingModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlayingModal]);

  return (
    <section id="showreel" className="py-24 sm:py-32 border-t border-[#1f1f23] relative bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-[#c8a97e] tracking-[0.25em] uppercase">
                MOTION &amp; CINEMA
              </span>
              <div className="h-[1px] w-10 bg-[#333338]" />
            </div>
            <h2 className="font-serif text-4xl xs:text-5xl sm:text-6xl font-light text-[#f2ede4] tracking-tight">
              CINEMATIC <span className="italic font-normal text-[#c8a97e]">SHOWREEL</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#a1a1aa] font-sans font-light leading-relaxed">
            A montage of visual rhythm, light, and motion capturing stories across Rwanda through our cinema and documentary camera units.
          </p>
        </div>

        {/* Cinematic Video Showcase Poster Frame */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full overflow-hidden bg-[#141416] border border-[#222226] group">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=90"
            alt="Cinematic Showreel"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
          />

          <div className="absolute inset-0 bg-[#0c0c0d]/50" />

          {/* Center Play Reel Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <button
              id="play-showreel-btn"
              onClick={() => setIsPlayingModal(true)}
              className="group/btn relative flex flex-col items-center focus:outline-hidden"
              aria-label="Play showreel video"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f2ede4] group-hover/btn:bg-[#c8a97e] flex items-center justify-center transition-all duration-200 shadow-xl">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#0c0c0d] fill-current translate-x-0.5" />
              </div>

              <span className="mt-3 text-xs font-mono tracking-[0.25em] uppercase text-[#f2ede4] group-hover/btn:text-[#c8a97e] transition-colors">
                PLAY REEL
              </span>
            </button>
          </div>

          {/* Corner Metadata */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-xs font-mono text-[#a1a1aa] tracking-widest hidden xs:flex items-center space-x-3">
            <span>KIGALI PRODUCTIONS</span>
            <span>•</span>
            <span>4K CINEMA MASTER</span>
          </div>

          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-3 py-1 bg-[#0c0c0d]/90 border border-[#27272a] text-[10px] font-mono tracking-widest text-[#c8a97e] uppercase">
            SELECTED MOTION
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isPlayingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0d]/95 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Top Close Control */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 flex items-center space-x-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-[#a1a1aa] hover:text-[#f2ede4] transition-colors rounded-full border border-[#333338]"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsPlayingModal(false)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 border border-[#333338] text-xs font-mono tracking-widest uppercase text-[#f2ede4] hover:border-[#c8a97e] transition-colors"
                aria-label="Close video"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Container */}
            <div className="w-full max-w-5xl aspect-16/9 bg-black border border-[#222226] shadow-2xl relative overflow-hidden">
              <video
                src={BRAND_INFO.videoReelUrl}
                controls
                autoPlay
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
