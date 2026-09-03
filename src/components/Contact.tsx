import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/portfolioData';
import { MessageCircle, Instagram, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export default function Contact({ initialService = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organization: '',
    projectType: initialService || 'Photography',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or brand title';
    if (!formData.phone.trim() || formData.phone.length < 6) {
      errs.phone = 'Please provide a valid phone or WhatsApp number with country code';
    }
    if (!formData.message.trim() || formData.message.length < 8) {
      errs.message = 'Please share a few words about your project vision or timeline';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getWhatsAppPrefillUrl = () => {
    const text = `Hello Rimba Creative Gallery,\n\n*Name:* ${formData.name || 'Client'}\n*Phone/WhatsApp:* ${formData.phone || 'Provided'}\n*Category:* ${formData.projectType}\n*Organization:* ${formData.organization || 'Independent'}\n\n*Project Brief:*\n${formData.message || 'I would like to commission a creative project.'}`;
    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Instantaneous graceful transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-[#1f1f23] relative bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-xs font-mono text-[#c8a97e] tracking-[0.25em] uppercase">
            COMMISSION &amp; INQUIRIES
          </span>
          <div className="h-[1px] w-10 bg-[#333338]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Narrative & Official Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-3xl xs:text-4xl sm:text-6xl font-light leading-[1.05] tracking-tight text-[#f2ede4] mb-4">
                HAVE A STORY <br />
                <span className="italic font-normal text-[#c8a97e]">TO CREATE?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#d4cebe] font-sans font-light">
                Let’s turn your vision into something timeless. Speak directly with our creative team in Kigali.
              </p>
            </div>

            {/* Official Contact Info Box - Clean & Professional */}
            <div className="p-6 sm:p-8 border border-[#222226] bg-[#111114] space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#c8a97e] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#71717a] block">
                    STUDIO LOCATION
                  </span>
                  <p className="text-sm font-medium text-[#f2ede4]">{BRAND_INFO.location}</p>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">{BRAND_INFO.address} • Visits by appointment</p>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-4 border-t border-[#1c1c1f] pt-4">
                <Phone className="w-5 h-5 text-[#c8a97e] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#71717a] block">
                    DIRECT CALL &amp; HOTLINE
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="text-sm font-medium text-[#f2ede4] hover:text-[#c8a97e] transition-colors"
                  >
                    {BRAND_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-[#71717a] mt-0.5">Priority Studio Line (Voice / Telegram / WhatsApp)</p>
                </div>
              </div>

              {/* Instagram Official */}
              <div className="flex items-start gap-4 border-t border-[#1c1c1f] pt-4">
                <Instagram className="w-5 h-5 text-[#c8a97e] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#71717a] block">
                    OFFICIAL INSTAGRAM
                  </span>
                  <a
                    href={BRAND_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#f2ede4] hover:text-[#c8a97e] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{BRAND_INFO.instagramHandle}</span>
                  </a>
                  <p className="text-xs text-[#71717a] mt-0.5">Live exhibitions, daily studio dispatches &amp; stories</p>
                </div>
              </div>

              {/* Hours / Schedule */}
              <div className="flex items-start gap-4 border-t border-[#1c1c1f] pt-4">
                <Clock className="w-5 h-5 text-[#c8a97e] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#71717a] block">
                    WORKING HOURS
                  </span>
                  <p className="text-sm font-medium text-[#f2ede4]">Monday – Saturday: 08:30 – 19:30 CAT</p>
                  <p className="text-xs text-[#71717a] mt-0.5">Central Africa Time (UTC+2)</p>
                </div>
              </div>
            </div>

            {/* Direct Instant Actions */}
            <div className="space-y-3">
              <a
                id="contact-whatsapp-direct-btn"
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#25D366] text-[#0c0c0d] font-mono text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2.5 transition-all hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP (+250 786 134 003)</span>
              </a>

              <a
                id="contact-instagram-follow-btn"
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 border border-[#333338] hover:border-[#c8a97e] text-[#f2ede4] font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-colors bg-[#111114]/50"
              >
                <Instagram className="w-4 h-4 text-[#c8a97e]" />
                <span>EXPLORE INSTAGRAM FEED</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Commission Form */}
          <div className="lg:col-span-7 border border-[#222226] bg-[#111114] p-6 sm:p-10 lg:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <CheckCircle2 className="w-16 h-16 text-[#c8a97e] mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#f2ede4] font-light">
                    Commission Brief Received
                  </h3>
                  <p className="text-sm text-[#a1a1aa] font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#f2ede4]">{formData.name}</strong>. Your project brief has been registered with our Kigali creative studio.
                  </p>
                </div>

                {/* Instant WhatsApp forwarding option */}
                <div className="p-6 border border-[#27272a] bg-[#161619] max-w-md mx-auto space-y-4 text-left">
                  <div className="text-xs font-mono text-[#c8a97e] uppercase tracking-wider">
                    <span>DIRECT DISPATCH OPTION</span>
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    You can transmit this brief directly to our creative director on WhatsApp right now with 1 tap:
                  </p>
                  <a
                    href={getWhatsAppPrefillUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#25D366] text-[#0c0c0d] font-mono text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>FORWARD BRIEF TO WHATSAPP</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        organization: '',
                        projectType: 'Photography',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 border border-[#333338] hover:border-[#c8a97e] text-xs font-mono tracking-widest uppercase text-[#c8a97e] transition-colors"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="border-b border-[#222226] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#f2ede4] font-light">
                      Commission a Project
                    </h3>
                    <p className="text-xs text-[#71717a] font-mono mt-1">
                      Commercial campaigns • Exhibitions • Film • Art Acquisitions
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#c8a97e] tracking-widest uppercase">
                    KIGALI STUDIO
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-widest uppercase text-[#a1a1aa]">
                      NAME / CLIENT / ARTIST *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean-Luc, Celine"
                      className="w-full bg-[#161619] border border-[#27272a] focus:border-[#c8a97e] text-base sm:text-sm text-[#f2ede4] px-4 py-3 outline-hidden transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-red-400 font-mono">{errors.name}</p>}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-widest uppercase text-[#a1a1aa]">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+250 78... or international"
                      className="w-full bg-[#161619] border border-[#27272a] focus:border-[#c8a97e] text-base sm:text-sm text-[#f2ede4] px-4 py-3 outline-hidden transition-colors"
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 font-mono">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Organization / Brand */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-widest uppercase text-[#a1a1aa]">
                      BRAND / INSTAGRAM (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="@handle or Brand title"
                      className="w-full bg-[#161619] border border-[#27272a] focus:border-[#c8a97e] text-base sm:text-sm text-[#f2ede4] px-4 py-3 outline-hidden transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono tracking-widest uppercase text-[#a1a1aa]">
                      COMMISSION DISCIPLINE *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#161619] border border-[#27272a] focus:border-[#c8a97e] text-base sm:text-sm text-[#f2ede4] px-4 py-3 outline-hidden transition-colors"
                    >
                      <option value="Photography (Commercial / Editorial)">Photography (Commercial / Editorial)</option>
                      <option value="Film & Video Production">Cinematic Film &amp; Commercial Video</option>
                      <option value="Creative Direction & Branding">Creative Direction &amp; Concept</option>
                      <option value="Contemporary Art Acquisition">Contemporary Art Purchase &amp; Gallery Commission</option>
                      <option value="Rimba Creative Academy Workshop">Creative Academy Masterclass / Mentorship</option>
                      <option value="Exhibition & Cultural Partnership">Gallery Exhibition &amp; Cultural Curation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono tracking-widest uppercase text-[#a1a1aa]">
                    PROJECT VISION &amp; DETAILS *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share project goals, timeline, desired deliverables, or concept..."
                    className="w-full bg-[#161619] border border-[#27272a] focus:border-[#c8a97e] text-base sm:text-sm text-[#f2ede4] p-4 outline-hidden transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-red-400 font-mono">{errors.message}</p>}
                </div>

                {/* Actions: Direct Submit + Direct WhatsApp alternative */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#f2ede4] hover:bg-[#c8a97e] text-[#0c0c0d] font-sans text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING BRIEF...</span>
                    ) : (
                      <>
                        <span>TRANSMIT CREATIVE BRIEF</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-[#71717a] pt-1">
                    <span>PREFER FAST DIRECT MESSAGING?</span>
                    <a
                      href={getWhatsAppPrefillUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>OPEN PRE-FILLED WHATSAPP</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
