import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const text = interactive.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest('a, button, input, textarea, select')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          cursorText
            ? 'w-16 h-16 bg-[#c8a97e] text-[#0c0c0d] font-medium tracking-widest text-[10px] uppercase shadow-lg shadow-black/40'
            : isHovered
            ? 'w-10 h-10 border border-[#c8a97e] bg-[#c8a97e]/15 backdrop-blur-xs'
            : 'w-2.5 h-2.5 bg-[#f2ede4] opacity-80'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
