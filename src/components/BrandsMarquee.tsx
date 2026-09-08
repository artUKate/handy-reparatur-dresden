import { BRANDS } from '../data';
import { ArrowRight, Wrench } from 'lucide-react';

export default function BrandsMarquee() {
  return (
    <section id="marken" className="py-16 border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/70 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 inline-block">
          Umfassende Kompatibilität
        </span>
        <h2
          id="brands-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Wir reparieren alle gängigen Marken.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          Ob Flaggschiff oder Einsteigergerät: Wir haben Zugriff auf OEM- und Originalbauteile für alle gängigen Hersteller.
        </p>
      </div>

      {/* Interactive Brand Badges Grid & Ticker */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.08] transition-all text-center group cursor-pointer shadow-lg"
            >
              <div className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors mb-1">
                {brand.logo}
              </div>
              <div className="text-[11px] text-white/40 leading-tight">
                {brand.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Subtitle / Reassurance */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-white/50 font-light">
            Auch andere Hersteller wie <span className="text-white/80 font-medium">Motorola, Nokia, Acer, Microsoft Surface</span> oder Nischenmodelle?{' '}
            <span className="text-white font-medium">
              Bring dein Gerät einfach vorbei – in der Regel lässt sich der Fehler problemlos beheben.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
