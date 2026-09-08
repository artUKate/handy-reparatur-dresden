import { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { CASE_STUDY_ERRORS } from '../data';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  const [selectedErrorId, setSelectedErrorId] = useState(1);

  if (!isOpen) return null;

  const currentError =
    CASE_STUDY_ERRORS.find((e) => e.id === selectedErrorId) || CASE_STUDY_ERRORS[0];

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="case-study-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 text-blue-400 flex items-center justify-center backdrop-blur-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white text-lg sm:text-xl">
                  UX-Audit: 5 gelöste Kernprobleme
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15 backdrop-blur-md">
                  Portfolio-Case
                </span>
              </div>
              <p className="text-xs text-white/50 font-light">
                Handy Reparatur Sachsen (Dresden) — Transformation zur Hightech-Labor-Positionierung
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5 Errors Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-white/10">
          {CASE_STUDY_ERRORS.map((err) => (
            <button
              key={err.id}
              type="button"
              onClick={() => setSelectedErrorId(err.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedErrorId === err.id
                  ? 'bg-white text-black shadow-md font-semibold'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              <span>Fehler {err.id}</span>
            </button>
          ))}
        </div>

        {/* Detailed Before vs After Card for the Selected Error */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl sm:text-2xl font-semibold text-white">
              {currentError.title}
            </h4>
            <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {currentError.impact}
            </span>
          </div>

          {/* Side by side Before and After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vorher */}
            <div className="p-5 rounded-2xl bg-white/5 border border-red-500/20 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Vorher (Alte Struktur):</span>
              </div>
              <p className="text-sm font-mono text-white/80 bg-black/40 p-3 rounded-xl border border-white/5 mb-3">
                {currentError.before}
              </p>
              <div className="text-xs text-white/60 leading-relaxed font-light">
                <strong className="text-white/80 block mb-0.5 font-medium">Problem:</strong>
                {currentError.problem}
              </div>
            </div>

            {/* Nachher */}
            <div className="p-5 rounded-2xl bg-white/5 border border-emerald-500/20 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Nachher (Apple-Style Redesign):</span>
              </div>
              <p className="text-sm font-mono text-blue-300 bg-black/40 p-3 rounded-xl border border-white/5 mb-3">
                {currentError.after}
              </p>
              <div className="text-xs text-white/70 leading-relaxed font-light">
                <strong className="text-white block mb-0.5 font-medium">Lösung:</strong>
                {currentError.solution}
              </div>
            </div>
          </div>

          {/* Rationale & Design Goal */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/70 leading-relaxed flex items-start gap-3 backdrop-blur-md font-light">
            <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-medium">Zielsetzung des Redesigns:</strong>
              <p className="mt-0.5 text-white/60 font-light">
                Überwindung der traditionellen «Reparatur-Bude» hin zu einem modernen Hightech-Auftritt mit klarer visueller Hierarchie, sofortiger Preistransparenz, echten Kundenbewertungen und kompromissloser Datensicherheit für Dresdner Kunden.
              </p>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="text-xs text-white/40 font-light">
              Fehler {currentError.id} von 5 analysiert
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setSelectedErrorId((prev) => (prev > 1 ? prev - 1 : CASE_STUDY_ERRORS.length))
                }
                className="px-4 py-1.5 rounded-full bg-white/10 text-xs text-white/80 hover:text-white border border-white/10 transition-colors"
              >
                ← Vorheriger
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedErrorId((prev) => (prev < CASE_STUDY_ERRORS.length ? prev + 1 : 1))
                }
                className="px-4 py-1.5 rounded-full bg-white/10 text-xs text-white/80 hover:text-white border border-white/10 transition-colors"
              >
                Nächster →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
