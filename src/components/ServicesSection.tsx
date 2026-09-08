import { useState } from 'react';
import { SERVICES_LIST, COMPANY_INFO } from '../data';
import { Smartphone, Laptop, Sparkles, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'smartphone' | 'laptop'>('all');

  const filteredServices = SERVICES_LIST.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'smartphone') return item.category === 'smartphone' || item.category === 'all';
    if (activeCategory === 'laptop') return item.category === 'laptop' || item.category === 'all';
    return true;
  });

  return (
    <section id="leistungen" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Reparatur-Übersicht Dresden</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Was dürfen wir für dich retten?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 font-light leading-relaxed">
            Wir verwenden ausschließlich hochwertige Ersatzteile in Erstausrüster-Qualität. Keine versteckten Kosten, transparente Festpreise und persönliche Beratung.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-black shadow-md'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              Alle Reparaturen
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('smartphone')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'smartphone'
                  ? 'bg-white text-black shadow-md'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Smartphone &amp; Tablet</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('laptop')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'laptop'
                  ? 'bg-white text-black shadow-md'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Laptop, MacBook &amp; PC</span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Card Image Header */}
              {service.image && (
                <div className="h-44 w-full relative overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  
                  {/* Duration Badge overlay */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-emerald-400">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration}</span>
                  </div>

                  {service.popular && (
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-[10px] font-semibold text-blue-300 tracking-wide uppercase">
                      Häufig gewählt
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/55 leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Price & Highlights */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/50">Festpreis ab:</span>
                    <div className="text-right">
                      <span className="text-xs text-white/40">ab </span>
                      <span className="text-xl font-bold text-blue-400">{service.priceFrom} €</span>
                    </div>
                  </div>

                  {service.highlight && (
                    <div className="text-[11px] text-white/60 flex items-center gap-1.5 mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{service.highlight}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/10 transition-colors active:scale-95"
                    >
                      <span>Anrufen</span>
                    </a>
                    <a
                      href="#rechner"
                      className="flex items-center justify-center gap-1 py-2.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-xs font-semibold text-blue-400 border border-blue-500/20 transition-colors active:scale-95"
                    >
                      <span>Kalkulieren</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to interactive calculator section */}
        <div className="text-center">
          <a
            href="#rechner"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 border border-white/15 backdrop-blur-lg hover:bg-white/20 text-sm font-semibold text-white transition-all shadow-lg active:scale-98"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Jetzt exakten Preis für dein Modell berechnen</span>
            <ArrowRight className="w-4 h-4 text-white/70" />
          </a>
        </div>
      </div>
    </section>
  );
}
