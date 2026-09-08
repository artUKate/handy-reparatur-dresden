import { useState, useRef } from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data';

interface HeroProps {
  onScrollToPricing: () => void;
  onOpenPriceCalculator: () => void;
}

export default function Hero({ onScrollToPricing, onOpenPriceCalculator }: HeroProps) {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      // Start fading out 0.8 seconds before the end
      if (currentTime > duration - 0.8) {
        setIsVideoVisible(false);
      } else if (currentTime < 0.5) {
        setIsVideoVisible(true);
      }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Background Video Layer - Responsive framing */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <motion.video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            animate={{ opacity: isVideoVisible ? 0.5 : 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
            onLoadedMetadata={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.play().catch(() => {});
            }}
          >
            <source src="/hero_video.mp4" type="video/mp4" />
            <img
              src="/src/assets/images/exploded_phone_view_1788810136154.jpg"
              alt="Smartphone Innenleben Reparatur Dresden"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </motion.video>
          
          {/* Cinematic Overlays for Readability & Framing */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Dresden Location & Trust Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-medium text-white/70 mb-10 shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-white font-medium uppercase tracking-widest text-[10px]">Dresden · Friedrichstadt</span>
          <span className="text-white/20">|</span>
          <span className="text-white/60">Weißeritzstraße 40</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-8xl xl:text-9xl font-bold tracking-tight mb-8 text-white leading-[0.9] uppercase"
        >
          Dein Gerät.<br />
          <span className="text-white/30">Wieder wie neu.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          id="hero-subline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-12"
        >
          Professionelle Sofort-Reparatur für Smartphone, Tablet &amp; Laptop in Dresden.
          100% Datensicherheit ohne Werksreset. 12 Monate Garantie.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 mb-16"
        >
          {/* Primary CTA: Jetzt anrufen */}
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            id="hero-primary-call-cta"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-5 rounded-full font-bold hover:bg-white/90 transition-all shadow-2xl shadow-white/10 active:scale-95 group text-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Anrufen: {COMPANY_INFO.phone}</span>
          </a>

          {/* Secondary CTA: Zum Preisrechner */}
          <button
            type="button"
            id="hero-secondary-prices-cta"
            onClick={onOpenPriceCalculator}
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 backdrop-blur-[40px] px-12 py-5 rounded-full font-bold hover:bg-white/20 transition-all text-white active:scale-95 text-lg shadow-xl"
          >
            <span>Preis berechnen</span>
            <ArrowRight className="w-5 h-5 text-white/70" />
          </button>
        </motion.div>

        {/* Key Trust Points */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-white/10 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <CheckCircle2 className="w-6 h-6 text-blue-400 mb-1" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Ohne Termin</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <CheckCircle2 className="w-6 h-6 text-blue-400 mb-1" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Datensicher</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <CheckCircle2 className="w-6 h-6 text-blue-400 mb-1" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Diagnose 0€</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <CheckCircle2 className="w-6 h-6 text-blue-400 mb-1" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">35 Min Express</span>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Entdecken</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-blue-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
