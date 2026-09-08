import { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Menu, X, ChevronDown, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface HeaderProps {
  onOpenPriceCalculator?: () => void;
  onOpenCaseStudy?: () => void;
}

export default function Header({ onOpenPriceCalculator }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if currently within Dresden business hours (Mo-Fr 10-18, Sa 10-13)
  useEffect(() => {
    const checkHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 Sun, 1 Mon, ... 6 Sat
      const hour = now.getHours();
      const min = now.getMinutes();
      const currentTime = hour + min / 60;

      if (day >= 1 && day <= 5) {
        // Mo-Fr 10:00 - 18:00
        setIsOpenNow(currentTime >= 10 && currentTime < 18);
      } else if (day === 6) {
        // Sa 10:00 - 13:00
        setIsOpenNow(currentTime >= 10 && currentTime < 13);
      } else {
        setIsOpenNow(false);
      }
    };

    checkHours();
    const timer = setInterval(checkHours, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80 py-3'
          : 'bg-[#050505]/60 backdrop-blur-md border-b border-white/[0.06] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Minimal Luxury Monogram & Brand */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-white/15 to-white/5 border border-white/15 backdrop-blur-xl flex items-center justify-center text-white group-hover:border-white/30 transition-all shadow-sm">
              <span className="font-semibold text-xs tracking-widest text-blue-300">HRS</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="text-sm sm:text-base font-semibold tracking-tight text-white group-hover:text-white/90 transition-colors">
                  Handy Reparatur <span className="font-light text-white/60">Sachsen</span>
                </div>
              </div>
              <p className="text-[11px] text-white/40 hidden md:block font-light">
                Weißeritzstraße 40 · Ohne Termin
              </p>
            </div>
          </a>

          {/* Minimalist Desktop Navigation (Bewertungen removed, clean luxury feel) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wider uppercase text-white/70">
            <a
              href="#leistungen"
              id="nav-link-leistungen"
              className="py-1.5 hover:text-white transition-colors"
            >
              Leistungen
            </a>

            <a
              href="#rechner"
              id="nav-link-rechner"
              className="py-1.5 hover:text-white transition-colors flex items-center gap-1 text-white font-medium"
            >
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>Preisrechner</span>
            </a>

            <a
              href="#ablauf"
              id="nav-link-ablauf"
              className="py-1.5 hover:text-white transition-colors"
            >
              Ablauf
            </a>

            <a
              href="#datenschutz"
              id="nav-link-datenschutz"
              className="py-1.5 hover:text-white transition-colors flex items-center gap-1 text-emerald-400/90"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Datenschutz</span>
            </a>

            <a
              href="#werkstatt"
              id="nav-link-werkstatt"
              className="py-1.5 hover:text-white transition-colors"
            >
              Werkstatt
            </a>

            <a
              href="#kontakt"
              id="nav-link-kontakt"
              className="py-1.5 hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Live Open Status Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px]">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className="text-white/60 font-light">
                {isOpenNow ? 'Geöffnet bis 18:00' : 'Öffnet 10:00 Uhr'}
              </span>
            </div>

            {/* Direct WhatsApp Pill */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                COMPANY_INFO.whatsappText
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] text-emerald-400 border border-emerald-500/20 backdrop-blur-md transition-all active:scale-95"
              title="WhatsApp Express-Anfrage"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 border border-white/10 backdrop-blur-md transition-colors"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Minimal, Luxury, no Bewertungen) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-white/10 bg-[#050505]/98 backdrop-blur-2xl px-5 py-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs mb-2">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}
                />
                <span className="font-medium text-white">
                  {isOpenNow ? 'Werkstatt jetzt geöffnet' : 'Öffnet 10:00 Uhr'}
                </span>
              </div>
              <span className="text-white/40 text-[11px]">Weißeritzstr. 40</span>
            </div>

            <a
              href="#leistungen"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-white/90 font-medium text-sm transition-colors"
            >
              Leistungen (Smartphone &amp; Laptop)
            </a>

            <a
              href="#rechner"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-blue-400 font-medium text-sm flex items-center justify-between transition-colors"
            >
              <span>Sofort-Preisrechner</span>
              <span className="text-xs text-white/40">Festpreise →</span>
            </a>

            <a
              href="#ablauf"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-white/90 font-medium text-sm transition-colors"
            >
              Ablauf (In 3 Schritten)
            </a>

            <a
              href="#datenschutz"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-emerald-400 font-medium text-sm flex items-center justify-between transition-colors"
            >
              <span>Datenschutz-Garantie</span>
              <span className="text-xs text-emerald-400/70">100% Sicher</span>
            </a>

            <a
              href="#werkstatt"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-white/90 font-medium text-sm transition-colors"
            >
              Werkstatt &amp; Labor
            </a>

            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-white/90 font-medium text-sm transition-colors"
            >
              Kontakt &amp; Anfahrt
            </a>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-black font-semibold text-sm shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{COMPANY_INFO.phone} anrufen</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappText
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Express-Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
