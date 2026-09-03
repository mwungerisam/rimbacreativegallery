import { BRAND_INFO } from '../data/portfolioData';
import { Instagram, MessageCircle, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'WORK', href: 'work' },
    { label: 'SERVICES', href: 'services' },
    { label: 'SHOWREEL', href: 'showreel' },
    { label: 'GALLERY', href: 'gallery' },
    { label: 'ABOUT', href: 'about' },
    { label: 'ACADEMY', href: 'academy' },
    { label: 'CONTACT', href: 'contact' },
  ];

  return (
    <footer className="border-t border-[#1f1f23] bg-[#080809] text-[#f2ede4] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Tier: Clean Studio Identity & Narrative */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 border-b border-[#1c1c20] pb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-[#f2ede4]">
              RIMBA
            </h2>
            <p className="text-xs font-mono tracking-[0.25em] text-[#c8a97e] uppercase mt-1">
              Studio &amp; Gallery • Kigali
            </p>
          </div>

          <div className="space-y-1 lg:text-right">
            <p className="text-sm font-sans text-[#d4cebe]">
              Contemporary African Arts, Cinema &amp; Visual Media
            </p>
            <p className="text-xs font-mono text-[#71717a]">
              Kigali, Rwanda
            </p>
          </div>
        </div>

        {/* Middle Tier: Navigation & Direct Communication */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Quick Nav Links */}
          <div className="md:col-span-6 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block">
              INDEX
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => onNavigate(link.href)}
                  className="text-xs font-mono tracking-widest text-[#a1a1aa] hover:text-[#c8a97e] transition-colors uppercase"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block">
              CONNECT
            </span>
            <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-[#d4cebe]">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c8a97e] transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="hover:text-[#c8a97e] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Scroll To Top */}
          <div className="md:col-span-2 md:text-right flex items-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#71717a] hover:text-[#f2ede4] transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="border-t border-[#1c1c20] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#52525b] gap-3">
          <p>© 2026 Rimba. Kigali, Rwanda. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Cinema and commercial productions operated via Kigali studio
          </p>
        </div>
      </div>
    </footer>
  );
}
