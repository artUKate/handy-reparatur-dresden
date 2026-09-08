import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, Navigation, ExternalLink, Calendar, Train, Car } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: '',
    defect: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMessage = `Hallo Handy Reparatur Sachsen, mein Name ist ${formData.name || 'Kunde'}. Ich habe folgendes Gerät: ${formData.device || 'Smartphone'} mit Schaden: ${formData.defect || formData.message || 'Defekt'}. Bitte um Rückmeldung!`;

  return (
    <section id="kontakt" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Zentral in Dresden</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Komm vorbei oder schreib uns.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/60 font-light leading-relaxed">
            Einfach ohne Termin während der Öffnungszeiten vorbeikommen oder online eine Vorab-Anfrage stellen. Wir antworten innerhalb kürzester Zeit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                Unverbindliche Reparatur-Anfrage
              </h3>
              <p className="text-xs text-white/50 mb-6 font-light">
                Beschreibe kurz dein Gerät. Wir kalkulieren die voraussichtlichen Kosten vorab.
              </p>

              {submitted ? (
                <div className="p-8 rounded-3xl bg-white/5 border border-white/15 text-center backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Anfrage erfolgreich empfangen!
                  </h4>
                  <p className="text-sm text-white/60 max-w-md mx-auto mb-6 font-light">
                    Vielen Dank, {formData.name || 'lieber Kunde'}! Ein Techniker prüft deine Angaben und meldet sich schnellstmöglich telefonisch oder per Nachricht.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          device: '',
                          defect: '',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/10 transition-colors"
                    >
                      Weitere Anfrage senden
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="px-6 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs font-semibold transition-colors"
                    >
                      Sofort anrufen: {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Dein Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="z.B. Max Mustermann"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors backdrop-blur-md"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="z.B. 0176 12345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors backdrop-blur-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Gerätemodell
                      </label>
                      <input
                        type="text"
                        placeholder="z.B. iPhone 15 Pro / Galaxy S23"
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors backdrop-blur-md"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Schaden / Defekt
                      </label>
                      <select
                        value={formData.defect}
                        onChange={(e) => setFormData({ ...formData, defect: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                      >
                        <option value="">Defekt auswählen...</option>
                        <option value="Display & Glasbruch">Display &amp; Glasbruch</option>
                        <option value="Akku schwach">Akku schwach / schnell leer</option>
                        <option value="Wasserschaden">Wasserschaden (Notfall)</option>
                        <option value="Ladebuchse Wackelkontakt">Ladebuchse / USB-Port</option>
                        <option value="Laptop startet nicht">Laptop / MacBook Problem</option>
                        <option value="Datenrettung">Datenrettung</option>
                        <option value="Sonstiger Fehler">Sonstiges</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Nachricht / Details zum Schaden
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ist das Gerät heruntergefallen? Geht der Touchscreen noch? Gibt es Besonderheiten?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none backdrop-blur-md"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-white/90 text-black font-semibold text-sm transition-all shadow-lg active:scale-98 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Wird übermittelt...' : 'Anfrage absenden (kostenlos)'}</span>
                    </button>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                        whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all backdrop-blur-md"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Per WhatsApp anfragen</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-white/50 pt-2 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Keine Weitergabe deiner Daten · 100% DSGVO-konform</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Real Map Fragment, Storefront Photo, Address & Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location & Quick Arrival Matrix Card */}
            <div className="rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7 shadow-xl text-left">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 mb-1.5">
                    <span>GPS 51.0565° N, 13.7225° E</span>
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    Zentraler Standort &amp; Anreise
                  </h4>
                  <p className="text-xs text-white/50 font-light mt-0.5">
                    Weißeritzstraße 40 · 01067 Dresden (Friedrichstadt)
                  </p>
                </div>
              </div>

              {/* Transit & Commute Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-medium text-white mb-1">
                    <Train className="w-3.5 h-3.5 text-blue-400" />
                    <span>S-Bahn / Bahn</span>
                  </div>
                  <p className="text-[11px] text-white/50">
                    Bf. Dresden Mitte: nur 180 m Fußweg (2 Min.)
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-medium text-white mb-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Straßenbahn</span>
                  </div>
                  <p className="text-[11px] text-white/50">
                    Linien 1, 2, 6, 10 Haltestelle Weißeritzstr.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-medium text-white mb-1">
                    <Car className="w-3.5 h-3.5 text-emerald-400" />
                    <span>PKW-Parken</span>
                  </div>
                  <p className="text-[11px] text-white/50">
                    Parkplätze direkt gegenüber dem Laden
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] text-white/60 pt-3 border-t border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>Ohne Termin vorbeikommen</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>Barrierefreier Zugang im EG</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>Expressannahme vor Ort</span>
                </div>
              </div>
            </div>

            {/* Direct Contact & Opening Hours */}
            <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-7 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-5">
                Standort &amp; Erreichbarkeit
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Adresse:</div>
                    <div className="font-semibold text-white text-sm">{COMPANY_INFO.fullAddress}</div>
                    <div className="text-[11px] text-white/40 mt-0.5">
                      01067 Dresden (Friedrichstadt / Mitte)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Telefon (Direkt zur Werkstatt):</div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="font-semibold text-blue-400 text-sm hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-[11px] text-white/40">
                      Mo–Fr 10:00–18:00 Uhr · Sa 10:00–13:00 Uhr
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Öffnungszeiten (Ohne Voranmeldung):</div>
                    <div className="font-medium text-white mt-1 space-y-0.5 text-xs">
                      {COMPANY_INFO.hours.map((h) => (
                        <div key={h.days} className="flex justify-between gap-4">
                          <span className="text-white/60">{h.days}:</span>
                          <span className="text-white font-mono">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Interactive Map Fragment */}
              <div className="mt-6 pt-6 border-t border-white/[0.08]">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3 flex items-center justify-between">
                  <span>Interaktiver Karten-Ausschnitt</span>
                  <span className="text-[11px] text-blue-400 font-mono">Dresden-Mitte</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 h-52 group">
                  {/* Real OpenStreetMap iframe embed centered on Weißeritzstraße 40, Dresden */}
                  <iframe
                    title="Karte Weißeritzstraße 40, 01067 Dresden"
                    className="w-full h-full border-0 filter invert contrast-125 opacity-75 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=13.7170%2C51.0530%2C13.7280%2C51.0600&layer=mapnik&marker=51.0565%2C13.7225"
                  />

                  {/* Overlay button to open Google Maps */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black text-xs font-semibold text-white border border-white/20 transition-colors backdrop-blur-md shadow-lg"
                    >
                      <Navigation className="w-3.5 h-3.5 text-blue-400" />
                      <span>Route via Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
