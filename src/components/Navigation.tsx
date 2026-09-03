import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO } from '../data/portfolioData';
import { Instagram, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', href: 'work' },
    { label: 'SERVICES', href: 'services' },
    { label: 'SHOWREEL', href: 'showreel' },
    { label: 'COLLECTION', href: 'gallery' },
    { label: 'STUDIO', href: 'about' },
    { label: 'ACADEMY', href: 'academy' },
    { label: 'CONTACT', href: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0c0d]/95 backdrop-blur-md border-b border-[#222226] py-3.5'
            : 'bg-gradient-to-b from-[#0c0c0d]/80 via-[#0c0c0d]/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="group text-left flex items-baseline gap-2.5 focus:outline-hidden"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] font-light text-[#f2ede4] group-hover:text-[#c8a97e] transition-colors">
              RIMBA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#71717a] uppercase font-mono hidden xs:inline">
              KIGALI
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  id={`nav-link-${link.href}`}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-xs font-mono tracking-[0.2em] transition-colors relative py-1 focus:outline-hidden ${
                    isActive ? 'text-[#c8a97e]' : 'text-[#a1a1aa] hover:text-[#f2ede4]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c8a97e]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Direct Inquire Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-mono tracking-widest uppercase border border-[#333338] hover:border-[#c8a97e] text-[#f2ede4] hover:text-[#c8a97e] transition-all bg-[#121215]"
            >
              COMMISSION
            </button>

            {/* Direct WhatsApp Quick Link */}
            <a
              id="nav-whatsapp-link"
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp message to Rimba Studio"
              className="p-2 text-[#a1a1aa] hover:text-[#25D366] transition-colors rounded-full hover:bg-white/5"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Instagram Link */}
            <a
              id="nav-instagram-link"
              href={BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rimba on Instagram"
              className="p-2 text-[#a1a1aa] hover:text-[#c8a97e] transition-colors rounded-full hover:bg-white/5"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="nav-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 border border-[#27272a] text-[#f2ede4] hover:border-[#c8a97e] transition-colors bg-[#121215]"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase">
                {mobileMenuOpen ? 'CLOSE' : 'MENU'}
              </span>
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Drawer Menu for Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="fullscreen-curtain-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0c0c0d] text-[#f2ede4] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-[#222226] pb-5">
              <div>
                <span className="font-serif text-2xl tracking-[0.14em] text-[#f2ede4]">
                  RIMBA
                </span>
                <p className="text-[10px] tracking-[0.25em] text-[#c8a97e] uppercase font-mono">
                  KIGALI, RWANDA
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#a1a1aa] hover:text-[#f2ede4] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="my-auto py-8 space-y-5">
              {navLinks.map((link) => (
                <div key={link.href} className="overflow-hidden">
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="group flex items-baseline justify-between w-full text-left py-2 hover:text-[#c8a97e] transition-colors"
                  >
                    <span className="font-serif text-3xl sm:text-4xl tracking-wide">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#52525b] group-hover:text-[#c8a97e] transition-colors" />
                  </button>
                </div>
              ))}
            </nav>

            {/* Bottom Menu Info */}
            <div className="border-t border-[#222226] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#a1a1aa]">
              <div>
                <p className="text-[#f2ede4]">{BRAND_INFO.location}</p>
                <p className="mt-0.5 text-[#71717a]">{BRAND_INFO.phoneFormatted}</p>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href={BRAND_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c8a97e] transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
