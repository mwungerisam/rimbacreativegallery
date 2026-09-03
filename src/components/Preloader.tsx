import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'initial' | 'subtitle' | 'finishing' | 'done'>('initial');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Fast and elegant loading sequence (~1.4s total)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 14 + 6);
      });
    }, 60);

    const timer1 = setTimeout(() => {
      setPhase('subtitle');
    }, 450);

    const timer2 = setTimeout(() => {
      setPhase('finishing');
    }, 1300);

    const timer3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 1700);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c0c0d] text-[#f2ede4]"
        >
          <div className="relative flex flex-col items-center justify-center px-6 text-center">
            {/* RIMBA */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] font-light text-[#f2ede4]"
              >
                RIMBA
              </motion.h1>
            </div>

            {/* CREATIVE GALLERY */}
            <div className="overflow-hidden h-8 mb-8">
              <motion.p
                initial={{ y: 25, opacity: 0 }}
                animate={{
                  y: phase !== 'initial' ? 0 : 25,
                  opacity: phase !== 'initial' ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs md:text-sm font-sans tracking-[0.35em] text-[#c8a97e] uppercase font-light"
              >
                CREATIVE GALLERY
              </motion.p>
            </div>

            {/* Minimal line progress indicator */}
            <div className="w-36 h-[1.5px] bg-[#222226] relative overflow-hidden">
              <motion.div
                className="h-full bg-[#c8a97e]"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            <span className="mt-3 text-[10px] tracking-widest text-[#71717a] font-mono">
              KIGALI • RWANDA
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
