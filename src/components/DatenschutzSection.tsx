import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle2, HeartHandshake } from 'lucide-react';
import { DATENSCHUTZ_GUARANTEE } from '../data';

export default function DatenschutzSection() {
  return (
    <section id="datenschutz" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle ambient luxury backdrop light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Höchste Priorität: Deine Privatsphäre</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            100% Datenschutz &amp; Privatsphäre
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/60 font-light leading-relaxed">
            Deine Daten gehören nur dir. Bei uns gibt es kein Zurücksetzen auf Werkseinstellungen und kein Durchsuchen deiner privaten Dateien. Reine Handwerkspräzision.
          </p>
        </div>

        {/* 4 Core Pillars of Data Privacy (Pure Text Reassurance, NO Price) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Kein Werksreset
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Anders als bei Hersteller-Vertragswerkstätten löschen wir dein Gerät nicht. Deine Fotos, WhatsApp-Nachrichten, Kontakte und Apps bleiben zu 100% unberührt.
            </p>
          </div>

          <div className="rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Keine Passworteinsicht
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Für 95% aller Reparaturen (Display, Akku, Ladebuchse, Gehäuse) benötigen wir deinen Entsperrcode oder PIN nicht. Du behältst die volle Kontrolle über deinen Zugriff.
            </p>
          </div>

          <div className="rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center mb-5">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Strenge DSGVO-Sorgfalt
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Reparatur ausschließlich in unserem abgeschirmten Elektronik-Labor in Dresden. Keine Datenübertragung ins Ausland, keine Drittanbieter-Clouds.
            </p>
          </div>

          <div className="rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Kostenlose Garantie
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Dieser Schutz ist keine aufpreispflichtige Option, sondern der Grundsatz unseres Meisterbetriebs. Garantiert bei jeder einzelnen Reparatur.
            </p>
          </div>
        </div>

        {/* Written Guarantee Box */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/20 via-white/[0.03] to-emerald-950/20 border border-emerald-500/20 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white">
                Schriftliche Vertraulichkeitsgarantie
              </h4>
              <p className="text-xs text-white/60 font-light mt-1 max-w-2xl leading-relaxed">
                Als lokaler Dresdner Fachbetrieb unterliegen alle unsere Techniker der gesetzlichen Schweigepflicht und strengsten Datenschutzrichtlinien. Du kannst dein Smartphone oder Notebook mit ruhigem Gewissen abgeben.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              100% DSGVO-konform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
