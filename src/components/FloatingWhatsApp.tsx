import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp Consultation" className="fixed bottom-6 right-6 z-40">
      <a
        id="floating-whatsapp-action"
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rimba Creative Gallery on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#161618]/90 hover:bg-[#25D366] text-[#f2ede4] hover:text-[#0c0c0d] border border-[#2f2f35] hover:border-[#25D366] shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 transform hover:scale-103"
      >
        <div className="relative w-6 h-6 rounded-full bg-[#25D366] text-[#0c0c0d] flex items-center justify-center shrink-0 group-hover:bg-[#0c0c0d] group-hover:text-[#25D366] transition-colors">
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        </div>
        <span className="text-[11px] font-mono tracking-wider font-medium hidden sm:inline">
          WHATSAPP
        </span>
      </a>
    </aside>
  );
}
