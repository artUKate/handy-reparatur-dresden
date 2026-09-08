import { ShieldCheck, Cpu, Microscope, Sparkles, Award, CheckCircle, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { WORKSHOP_STATS, COMPANY_INFO } from '../data';

export default function WorkshopAbout() {
  const labFeatures = [
    {
      title: 'ESD-Schutzarbeitsplatz',
      desc: 'Elektrostatisch entladene Präzisionsplätze verhindern unsichtbare Spannungsüberschläge auf empfindliche Logikplatinen.',
      icon: '⚡',
    },
    {
      title: 'Stereo-Mikroskopie & Mikrolöten',
      desc: 'Feinste Bauteile (BGA-Chips, Ladecontroller, SMD-Kondensatoren) werden unter hochauflösenden Mikroskopen instand gesetzt.',
      icon: '🔬',
    },
    {
      title: 'Chemisches Ultraschallbad',
      desc: 'Bei Wasserschäden lösen wir aggressive Oxidationsrückstände und Salze mikrofein von den Leiterbahnen.',
      icon: '💧',
    },
    {
      title: 'OEM- & Original-Ersatzteile',
      desc: 'Strenge Qualitätskontrolle jedes einzelnen Displays auf Farbtreue, Helligkeit, Touch-Reaktionszeit und True Tone.',
      icon: '🛡️',
    },
  ];

  return (
    <section id="werkstatt" className="py-20 md:py-32 relative overflow-hidden bg-black">
      {/* Background Transformation Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ opacity: [1, 0, 0, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1]
          }}
          className="absolute inset-0"
        >
          <img
            src="/src/assets/images/broken_phone_technical_render_1788886492792.jpg"
            alt="Defektes Smartphone Display Reparatur Dresden"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1]
          }}
          className="absolute inset-0"
        >
          <img
            src="/src/assets/images/new_phone_technical_render_1788886506947.jpg"
            alt="Neuwertiges Smartphone nach Reparatur in Dresden"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span>Präzision &amp; Meisterhandwerk</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Hightech-Werkstatt statt Reparatur-Bude
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-white/60 font-light leading-relaxed"
          >
            Wir haben das Reparatur-Erlebnis neu gedacht: Transparente Labor-Arbeit, modernstes Diagnose-Equipment und ehrliche Handwerkskunst direkt in Dresden.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {WORKSHOP_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center shadow-lg hover:border-white/20 transition-all"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/50 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Laboratory & Workshop Visual Features */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Centered Text Content */}
          <div className="text-center space-y-6">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl font-bold text-white"
            >
              Warum echte Erfahrung den Unterschied macht
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-xl text-white/80 leading-relaxed font-light"
            >
              Moderne Smartphones und MacBooks sind hochkompakt verklebt. Schon kleine Fehler bei unqualifizierten Eigenversuchen können das Mainboard dauerhaft zerstören oder Face ID / Touch ID deaktivieren.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-white/80 leading-relaxed font-light"
            >
              In unserer Dresdner Werkstatt an der Weißeritzstraße 40 arbeiten erfahrene Elektroniker mit Spezialwerkzeugen für schonende Öffnung, präzise Verklebung und saubere Datenrettung.
            </motion.p>
          </div>

          {/* Features Grid - Now balanced and centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            {labFeatures.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-white/15 transition-all group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feat.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{feat.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Trust Checklist - Horizontal Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 p-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs sm:text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Original- &amp; OEM-Teile</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>12 Monate Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>ESD-geschützt</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Vorab-Prüfung 0€</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
