import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface FooterProps {
  onOpenCaseStudy: () => void;
  onOpenPriceCalculator: () => void;
}

export default function Footer({ onOpenCaseStudy, onOpenPriceCalculator }: FooterProps) {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="main-footer" className="bg-transparent border-t border-white/10 pt-16 pb-28 sm:pb-16 text-white/60 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 & 2: Brand & Address */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold text-lg backdrop-blur-md">
                  H
                </div>
                <div>
                  <span className="font-semibold text-white text-lg block">
                    Handy Reparatur Sachsen
                  </span>
                  <span className="text-xs text-white/50">
                    Meisterwerkstatt in Dresden
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/50 max-w-sm leading-relaxed font-light">
                Professionelle Sofort-Reparatur für Smartphone &amp; Laptop in Dresden. Ohne Termin, faire Festpreise und 100% Datensicherheit für deine privaten Inhalte.
              </p>

              <div className="space-y-1.5 text-xs text-white/70 pt-2 font-light">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{COMPANY_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white font-semibold">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 3: Leistungen */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                Leistungen
              </h4>
              <ul className="space-y-2 text-xs font-light text-white/60">
                <li>
                  <a href="#leistungen" className="hover:text-white transition-colors">
                    Display &amp; Touchscreen Tausch
                  </a>
                </li>
                <li>
                  <a href="#leistungen" className="hover:text-white transition-colors">
                    Akku-Austausch (Express)
                  </a>
                </li>
                <li>
                  <a href="#leistungen" className="hover:text-white transition-colors">
                    Wasserschaden &amp; Ultraschall
                  </a>
                </li>
                <li>
                  <a href="#leistungen" className="hover:text-white transition-colors">
                    Ladebuchse &amp; Mikrolöten
                  </a>
                </li>
                <li>
                  <a href="#leistungen" className="hover:text-white transition-colors">
                    Laptop &amp; MacBook Reparatur
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenPriceCalculator}
                    className="text-blue-400 font-semibold hover:underline text-left pt-1"
                  >
                    Interaktiver Preisrechner →
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-light text-white/60">
                <li>
                  <a href="#hero-section" className="hover:text-white transition-colors">
                    Startseite
                  </a>
                </li>
                <li>
                  <a href="#ablauf" className="hover:text-white transition-colors">
                    Ablauf (3 Schritte)
                  </a>
                </li>
                <li>
                  <a href="#marken" className="hover:text-white transition-colors">
                    Unterstützte Marken
                  </a>
                </li>
                <li>
                  <a href="#bewertungen" className="hover:text-white transition-colors">
                    Google Rezensionen (4.8★)
                  </a>
                </li>
                <li>
                  <a href="#ueber-uns" className="hover:text-white transition-colors">
                    Über uns &amp; Labor
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-white transition-colors">
                    Kontakt &amp; Anfahrt
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenCaseStudy}
                    className="text-white/80 font-medium hover:text-white hover:underline text-left"
                  >
                    UX Redesign Case Study
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Öffnungszeiten */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                Öffnungszeiten
              </h4>
              <div className="space-y-2 text-xs text-white/70">
                <div>
                  <div className="text-white/40">Montag – Freitag:</div>
                  <div className="font-semibold text-white">10:00 – 18:00 Uhr</div>
                </div>
                <div>
                  <div className="text-white/40">Samstag:</div>
                  <div className="font-semibold text-white">10:00 – 13:00 Uhr</div>
                </div>
                <div>
                  <div className="text-white/40">Sonntag:</div>
                  <div className="text-white/30">Geschlossen</div>
                </div>
                <div className="pt-2 text-[11px] text-blue-400 font-medium">
                  Keine Terminabsprache nötig!
                </div>
              </div>
            </div>
          </div>

          {/* Bottom copyright & legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/50">
            <div>
              © {new Date().getFullYear()} Handy Reparatur Sachsen · Weißeritzstraße 40, 01067 Dresden. Alle Rechte vorbehalten.
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setLegalModal('impressum')}
                className="hover:text-white transition-colors"
              >
                Impressum
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setLegalModal('datenschutz')}
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors ml-2"
              >
                <span>Nach oben</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Bottom Sticky Action Bar (Critical for users with cracked screens) */}
      <div
        id="mobile-sticky-action-bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/70 backdrop-blur-2xl border-t border-white/10 p-2.5 px-3 flex items-center gap-2 shadow-2xl"
      >
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-semibold text-sm shadow-lg active:scale-95"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Anrufen (0351...)</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
            COMPANY_INFO.whatsappText
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-full bg-white/10 border border-white/10 text-emerald-400 active:scale-95 backdrop-blur-md"
          aria-label="WhatsApp Nachricht"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <a
          href={COMPANY_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-full bg-white/10 border border-white/10 text-blue-400 active:scale-95 backdrop-blur-md"
          aria-label="Anfahrt in Dresden"
        >
          <MapPin className="w-5 h-5" />
        </a>
      </div>

      {/* Legal Modal (Impressum / Datenschutz) */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-3xl bg-neutral-900/95 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 text-white/70 text-xs leading-relaxed space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-semibold text-white uppercase tracking-wider">
                {legalModal === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="text-white/40 hover:text-white"
              >
                ✕
              </button>
            </div>

            {legalModal === 'impressum' ? (
              <div className="space-y-3">
                <p>
                  <strong className="text-white">Angaben gemäß § 5 TMG:</strong>
                  <br />
                  Handy Reparatur Sachsen
                  <br />
                  Weißeritzstraße 40
                  <br />
                  01067 Dresden
                </p>
                <p>
                  <strong className="text-white">Kontakt:</strong>
                  <br />
                  Telefon: 0351 33 20 30 35
                  <br />
                  E-Mail: service@handy-reparatur-sachsen.de
                </p>
                <p>
                  <strong className="text-white">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</strong>
                  <br />
                  [DE123456789 - Hier echte USt-ID einfügen]
                </p>
                <p>
                  <strong className="text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
                  <br />
                  Inhaber Handy Reparatur Sachsen, Weißeritzstraße 40, 01067 Dresden
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p>
                  <strong className="text-white">Datenschutz bei Handy Reparatur Sachsen:</strong>
                  <br />
                  Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Bei Reparaturen an deinem Smartphone oder Laptop verlangen wir grundsätzlich kein Zurücksetzen des Geräts. Deine privaten Fotos, Chats und Bank-Apps bleiben zu 100% unangetastet.
                </p>
                <p>
                  <strong className="text-white">Erhebung und Speicherung personenbezogener Daten:</strong>
                  <br />
                  Wenn du uns per Kontaktformular oder Telefon anfragst, werden deine Angaben (Name, Rufnummer, Gerätemodell) zwecks Bearbeitung der Reparaturanfrage gespeichert. Eine Weitergabe an Dritte erfolgt unter keinen Umständen.
                </p>
                <p>
                  <strong className="text-white">Auskunftsrecht:</strong>
                  <br />
                  Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-5 py-2.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/10 transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
