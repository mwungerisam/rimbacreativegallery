import { motion } from 'motion/react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/portfolioData';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 sm:py-32 border-t border-[#1f1f23] relative bg-[#0c0c0d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with direct Instagram CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono text-[#c8a97e] tracking-[0.3em] uppercase">
                06 / LIVE DISPATCHES
              </span>
              <div className="h-[1px] w-12 bg-[#333338]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#f2ede4] tracking-tight">
              FROM THE <span className="italic font-normal text-[#c8a97e]">GALLERY</span>
            </h2>
          </div>

          <a
            id="instagram-follow-cta"
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 border border-[#333338] hover:border-[#c8a97e] text-xs font-mono tracking-widest uppercase text-[#f2ede4] hover:text-[#c8a97e] transition-all bg-[#111114]"
          >
            <Instagram className="w-4 h-4 text-[#c8a97e]" />
            <span>FOLLOW @RIMBACREATIVEGALLERY</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Instagram Visual Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative aspect-square overflow-hidden bg-[#141416] border border-[#222226] block"
              data-cursor="INSTAGRAM"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Hover Overlay with caption snippet & likes */}
              <div className="absolute inset-0 bg-[#0c0c0d]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-left">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#c8a97e]">
                  <Instagram className="w-3.5 h-3.5" />
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current text-red-400" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#d4cebe] line-clamp-3 font-sans leading-tight">
                  {post.caption}
                </p>

                <div className="text-[9px] font-mono tracking-widest text-[#71717a] uppercase">
                  VIEW ON IG &rarr;
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
