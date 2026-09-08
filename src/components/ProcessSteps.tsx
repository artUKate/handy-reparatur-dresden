import { MapPin, SearchCheck, Zap, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS, COMPANY_INFO } from '../data';

interface ProcessStepsProps {
  onOpenContact: () => void;
}

export default function ProcessSteps({ onOpenContact }: ProcessStepsProps) {
  const stepIcons = [
    <MapPin key="1" className="w-6 h-6 text-cyan-400" />,
    <SearchCheck key="2" className="w-6 h-6 text-sky-400" />,
    <Zap key="3" className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <section id="ablauf" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Transparenter Ablauf</span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            In 3 Schritten zum reparierten Gerät
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Kein Risiko, keine bösen Überraschungen bei der Rechnung. Du behältst jederzeit die volle Kontrolle über Preis und Daten.
          </p>
        </div>

        {/* 3 Step Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Subtle connecting connector on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-[1px] bg-white/10 -translate-y-12 z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative z-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Step Top: Badge and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-black text-white/20 font-mono">
                    {step.step}
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-blue-400 mb-3">
                  {step.tag}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {step.step === '01' && '1. Vorbeikommen'}
                  {step.step === '02' && '2. Diagnose & Preis'}
                  {step.step === '03' && '3. Sofort-Reparatur'}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Extra reassurance footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                {idx === 0 && (
                  <span className="flex items-center gap-1.5 text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    Weißeritzstr. 40, Dresden
                  </span>
                )}
                {idx === 1 && (
                  <span className="flex items-center gap-1.5 text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    Kostenvoranschlag ab 0€
                  </span>
                )}
                {idx === 2 && (
                  <span className="flex items-center gap-1.5 text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Express &amp; 12 Mon. Garantie
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Route / Address Bar */}
        <div className="mt-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 text-blue-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Direkt erreichbar in Dresden Mitte / Friedrichstadt
              </div>
              <div className="text-xs text-white/50">
                {COMPANY_INFO.fullAddress} · Öffnungszeiten: {COMPANY_INFO.hoursShort}
              </div>
            </div>
          </div>

          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/10 transition-colors shrink-0 backdrop-blur-md"
          >
            <span>In Google Maps öffnen</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/70" />
          </a>
        </div>
      </div>
    </section>
  );
}
