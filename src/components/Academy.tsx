import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACADEMY_COURSES, BRAND_INFO } from '../data/portfolioData';
import { AcademyCourse } from '../types';
import { ArrowUpRight, Clock, X, Check, MessageCircle } from 'lucide-react';

interface AcademyProps {
  onDirectInquiry?: (subject: string) => void;
}

export default function Academy({ onDirectInquiry }: AcademyProps) {
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);

  return (
    <section id="academy" className="py-24 sm:py-32 border-t border-[#1f1f23] relative bg-[#09090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-[#c8a97e] tracking-[0.25em] uppercase">
                PROFESSIONAL DEVELOPMENT
              </span>
              <div className="h-[1px] w-10 bg-[#333338]" />
            </div>
            <h2 className="font-serif text-4xl xs:text-5xl sm:text-6xl font-light text-[#f2ede4] tracking-tight">
              ACADEMY &amp; <span className="italic font-normal text-[#c8a97e]">MASTERCLASSES</span>
            </h2>
          </div>

          <div className="max-w-md text-sm sm:text-base text-[#a1a1aa] font-sans font-light leading-relaxed">
            Intensive studio workshops, cinema masterclasses, and hands-on mentorship in Kigali for emerging photographers and filmmakers.
          </div>
        </div>

        {/* Courses Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {ACADEMY_COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group border border-[#222226] bg-[#111114] flex flex-col justify-between overflow-hidden hover:border-[#c8a97e]/40 transition-colors"
            >
              <div>
                {/* Course Cover Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#161618] border-b border-[#222226]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0c0c0d]/90 px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#c8a97e] uppercase border border-[#27272a]">
                    {course.category}
                  </div>
                </div>

                {/* Course Metadata & Copy */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#71717a]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c8a97e]" />
                      {course.duration}
                    </span>
                    <span>•</span>
                    <span>{course.level}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#f2ede4] group-hover:text-[#c8a97e] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] font-sans font-light leading-relaxed">
                    {course.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-[#71717a] tracking-widest uppercase block mb-2">
                      CORE MODULES
                    </span>
                    <div className="space-y-1.5">
                      {course.topics.slice(0, 3).map((t, i) => (
                        <div key={i} className="flex items-center text-xs text-[#d4cebe] gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#c8a97e]" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full py-3 border border-[#333338] group-hover:border-[#c8a97e] group-hover:bg-[#f2ede4] group-hover:text-[#0c0c0d] text-[#f2ede4] font-mono text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>WORKSHOP SYLLABUS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 border border-[#222226] bg-[#111114] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#c8a97e] tracking-widest uppercase block">
              STUDIO RESIDENCIES &amp; CUSTOM MENTORSHIP
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f2ede4] font-light">
              Tailored masterclasses for media teams and independent artists
            </h3>
            <p className="text-sm text-[#71717a] font-sans">
              Our lead directors design practical curricula for camera craft, lighting physics, and visual editing.
            </p>
          </div>

          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-[#f2ede4] hover:bg-[#c8a97e] text-[#0c0c0d] font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>INQUIRE ON WHATSAPP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0c0c0d]/90 backdrop-blur-md"
          >
            <div className="max-w-2xl w-full bg-[#111114] border border-[#2c2c30] p-6 sm:p-10 space-y-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 text-[#a1a1aa] hover:text-[#f2ede4]"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono tracking-widest text-[#c8a97e] uppercase block mb-1">
                  {selectedCourse.category} • {selectedCourse.duration}
                </span>
                <h3 className="font-serif text-3xl text-[#f2ede4]">
                  {selectedCourse.title}
                </h3>
              </div>

              <div className="aspect-16/9 overflow-hidden bg-[#161618] border border-[#222226]">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-[#d4cebe] leading-relaxed font-sans">
                {selectedCourse.description}
              </p>

              <div>
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#c8a97e] mb-3">
                  SYLLABUS HIGHLIGHTS
                </h4>
                <div className="space-y-2">
                  {selectedCourse.topics.map((topic, i) => (
                    <div key={i} className="flex items-center text-xs text-[#d4cebe] gap-2 p-2 bg-[#161619] border border-[#222226]">
                      <Check className="w-3.5 h-3.5 text-[#c8a97e]" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#222226] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#71717a]">
                  KIGALI IN-PERSON &amp; STUDIO SESSIONS
                </span>

                <a
                  href={`https://wa.me/250786134003?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20the%20${encodeURIComponent(selectedCourse.title)}%20workshop.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-[#0c0c0d] font-mono text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>REGISTER VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
