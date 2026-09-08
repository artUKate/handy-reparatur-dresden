import { BRANDS } from '../data';
import { motion } from 'motion/react';

export default function BrandsMarquee() {
  // Duplicate brands to create a seamless loop
  const brandsExtended = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section id="marken" className="py-24 border-y border-white/5 overflow-hidden relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 inline-block">
          Umfassende Kompatibilität
        </span>
        <h2
          id="brands-heading"
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6"
        >
          Wir reparieren alle gängigen Marken.
        </h2>
        <p className="text-lg text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
          Ob Flaggschiff или Einsteigergerät: Wir haben Zugriff auf OEM- und Originalbauteile für alle gängigen Hersteller.
        </p>
      </div>

      {/* Marquee Ticker */}
      <div className="relative">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1035], // Approximate half of the extended width
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {brandsExtended.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex-none p-6 min-w-[200px] rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.06] transition-all text-center group cursor-default"
              >
                <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {brand.logo}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/30">
                  {brand.highlight}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtitle / Reassurance */}
      <div className="mt-16 text-center px-4">
        <p className="text-sm text-white/40 font-light max-w-3xl mx-auto leading-loose">
          Auch andere Hersteller wie <span className="text-white/80 font-medium">Motorola, Nokia, Acer, Microsoft Surface</span> или Nischenmodelle?{' '}
          <span className="block sm:inline text-white font-medium">
            Bring dein Gerät einfach vorbei – in der Regel lässt sich der Fehler problemlos beheben.
          </span>
        </p>
      </div>
    </section>
  );
}
