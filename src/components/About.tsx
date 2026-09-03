import { motion } from 'motion/react';

export default function About() {
  const commitments = [
    {
      title: 'Curatorial Integrity',
      desc: 'An exhibition space curating Rwandan and East African contemporary art, fine art photography, and cultural archives.',
    },
    {
      title: 'Cinema & Commercial Production',
      desc: 'Our dedicated camera and lighting units deliver international-grade campaigns, brand cinema, and documentary narratives.',
    },
    {
      title: 'Mentorship & Creative Capital',
      desc: 'Fostering emerging cinematographers, photographers, and visual directors through studio residencies and workshops.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#1f1f23] relative bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-xs font-mono text-[#c8a97e] tracking-[0.25em] uppercase">
            THE STUDIO &amp; PHILOSOPHY
          </span>
          <div className="h-[1px] w-10 bg-[#333338]" />
        </div>

        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-6xl font-light leading-[1.08] tracking-tight text-[#f2ede4]">
              GROUNDED IN HERITAGE. <br />
              <span className="italic font-normal text-[#c8a97e]">DIRECTED TOWARDS</span> <br />
              CONTEMPORARY TRUTH.
            </h2>

            <div className="space-y-4 text-[#d4cebe] font-sans font-light text-base sm:text-lg leading-relaxed">
              <p>
                Based in Kigali, our practice operates at the intersection of contemporary visual culture and high-calibre media production. We believe African storytelling deserves uncompromising craft, authentic representation, and world-class execution.
              </p>
              <p className="text-sm sm:text-base text-[#a1a1aa]">
                Here, fine art exhibitions exist alongside commercial film and photography units. We collaborate with international brands, cultural institutions, and private collectors who value depth over surface.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden bg-[#161618] border border-[#222226]">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
                alt="Studio space and curation in Kigali"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-[#0c0c0d]/90 border border-[#27272a] text-xs font-mono tracking-widest text-[#d4cebe]">
                <span className="text-[#c8a97e] block mb-0.5">STUDIO &amp; EXHIBITION SPACE</span>
                <span>Kigali, Rwanda • Open for commissions and private viewing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Core Commitments (Clean 3-column divider layout, no nested card slop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#1f1f23]">
          {commitments.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="space-y-2.5"
            >
              <span className="text-xs font-mono text-[#c8a97e] tracking-widest uppercase block">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#f2ede4] font-light">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] font-sans leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
