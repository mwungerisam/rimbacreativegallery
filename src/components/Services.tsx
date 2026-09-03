import { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectServiceInquiry?: (serviceName: string) => void;
}

export default function Services({ onSelectServiceInquiry }: ServicesProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 sm:py-32 border-t border-[#1f1f23] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-[#c8a97e] tracking-[0.25em] uppercase">
                PRODUCTION &amp; DISCIPLINES
              </span>
              <div className="h-[1px] w-10 bg-[#333338]" />
            </div>
            <h2 className="font-serif text-4xl xs:text-5xl sm:text-6xl font-light text-[#f2ede4] tracking-tight">
              SERVICES &amp; <span className="italic font-normal text-[#c8a97e]">EXPERTISE</span>
            </h2>
          </div>

          <div className="max-w-md text-sm sm:text-base text-[#a1a1aa] font-sans font-light leading-relaxed">
            From gallery fine art curation to full-scale cinematic film production and commercial campaigns.
          </div>
        </div>

        {/* Interactive Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Services Rows List */}
          <div className="lg:col-span-7 divide-y divide-[#222226]">
            {SERVICES.map((service) => {
              const isActive = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  id={`service-row-${service.id}`}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group py-8 sm:py-10 cursor-pointer transition-all duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline space-x-4 sm:space-x-6">
                      <span className="text-xs sm:text-sm font-mono tracking-widest text-[#c8a97e]">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-4xl font-light text-[#f2ede4] group-hover:text-[#c8a97e] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#8e8e93] font-sans mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 transition-transform duration-200 ${
                      isActive ? 'text-[#c8a97e] translate-x-0.5 -translate-y-0.5' : 'text-[#48484f] group-hover:text-[#f2ede4]'
                    }`} />
                  </div>

                  {/* Mobile Accordion Details */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                      className="mt-6 pt-4 border-t border-[#1c1c1f] lg:hidden space-y-4"
                    >
                      <p className="text-sm text-[#d4cebe] leading-relaxed font-light">
                        {service.description}
                      </p>
                      <div className="aspect-16/10 overflow-hidden bg-[#161618]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Visual Preview Column */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="border border-[#222226] bg-[#111114] p-6 space-y-6">
              {/* Dynamic Service Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#161618] border border-[#222226]">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0c0c0d]/90 px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#c8a97e] uppercase border border-[#27272a]">
                  {activeService.number}
                </div>
              </div>

              {/* Service Description & Deliverables */}
              <div className="space-y-4">
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#c8a97e] block">
                  SCOPE &amp; DELIVERABLES
                </span>
                <p className="text-sm text-[#d4cebe] font-sans font-light leading-relaxed">
                  {activeService.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#1f1f23]">
                  {activeService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-xs text-[#a1a1aa] gap-2">
                      <Check className="w-3.5 h-3.5 text-[#c8a97e] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire Action */}
              <button
                onClick={() => onSelectServiceInquiry?.(activeService.title)}
                className="w-full py-3 bg-[#f2ede4] hover:bg-[#c8a97e] text-[#0c0c0d] font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>INQUIRE ABOUT {activeService.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
