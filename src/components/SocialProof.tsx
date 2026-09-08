import { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';
import { GOOGLE_REVIEWS, COMPANY_INFO } from '../data';

export default function SocialProof() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'iPhone' | 'Samsung' | 'Laptop' | 'Wasserschaden'>('all');

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (selectedFilter === 'all') return true;
    return rev.tag === selectedFilter;
  });

  return (
    <section id="bewertungen" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Verifizierte Google Rezensionen</span>
            </span>
          </div>

          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Das sagen unsere Kunden in Dresden
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/60 font-light leading-relaxed">
            Hunderte zufriedene Dresdner vertrauen auf unsere schnelle Sofort-Reparatur. Echte Erfahrungen statt anonymer Versprechen.
          </p>

          {/* Google Score Banner */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center font-bold text-xl text-neutral-900 shadow-sm">
                G
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-bold text-white">{COMPANY_INFO.googleRating}</span>
                  <span className="text-xs text-white/50">/ 5.0</span>
                  <div className="flex text-amber-400 ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-white/50">
                  Basierend auf über <strong className="text-white">{COMPANY_INFO.totalReviews} Google Bewertungen</strong>
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-white/10" />

            <div className="text-xs text-white/70 font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% verifizierte Reparaturen vor Ort</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              Alle Stimmen
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('iPhone')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === 'iPhone'
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              iPhone Displays
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('Samsung')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === 'Samsung'
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              Samsung &amp; Android
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('Laptop')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === 'Laptop'
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              Laptops &amp; MacBooks
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('Wasserschaden')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === 'Wasserschaden'
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              Wasserschaden
            </button>
          </div>
        </div>

        {/* Reviews Cards Horizontal Row */}
        <div className="flex overflow-x-auto gap-6 pt-12 pb-8 scrollbar-hide snap-x">
          {filteredReviews.map((rev) => (
            <motion.div
              key={rev.id}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.4)",
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-none w-[300px] sm:w-[380px] snap-center rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl group cursor-default"
            >
              <div>
                {/* Header: Author & Google Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-bold text-sm text-blue-400">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" title="Verifizierter Kunde" />
                        )}
                      </div>
                      <div className="text-[11px] text-white/40">Dresden · {rev.date}</div>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/60">
                    G
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-white/70 leading-relaxed italic font-light">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Tag for device repaired */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[11px] text-white/40">
                  Repariertes Gerät:
                </span>
                <span className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-blue-400">
                  {rev.device}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer callout */}
        <div className="mt-12 text-center">
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white transition-colors"
          >
            <span>Alle Google Rezensionen in Google Maps lesen</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
