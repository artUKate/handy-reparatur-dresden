import { useState } from 'react';
import { MapPin, Navigation, Train, Car, Compass, ExternalLink, Radio, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function HeroMapCard() {
  const [activeTab, setActiveTab] = useState<'radar' | 'live'>('radar');

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Container Frame with Luxury Obsidian Glass Styling */}
      <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#080a11]/90 backdrop-blur-2xl shadow-2xl shadow-black/80 group transition-all duration-300">
        {/* Top Control Bar: Tabs & Live Status */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-white tracking-wide">
              Dresden Friedrichstadt
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-white/40">
              51.0565° N, 13.7225° E
            </span>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 p-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px]">
            <button
              type="button"
              onClick={() => setActiveTab('radar')}
              className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                activeTab === 'radar'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Radar
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('live')}
              className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                activeTab === 'live'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Live-Karte
            </button>
          </div>
        </div>

        {/* Map Area */}
        <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#06080e] select-none">
          {activeTab === 'radar' ? (
            /* Bespoke Dark Stylized Dresden Map & Radar */
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Subtle Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:24px_24px]" />

              {/* Vector Roads & River Elbe Representation */}
              <svg
                className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Elbe River Arc */}
                <path
                  d="M-20,40 Q160,20 280,100 T420,130"
                  stroke="#0284c7"
                  strokeWidth="28"
                  strokeOpacity="0.25"
                  strokeLinecap="round"
                />
                <path
                  d="M-20,40 Q160,20 280,100 T420,130"
                  stroke="#38bdf8"
                  strokeWidth="4"
                  strokeOpacity="0.3"
                  strokeDasharray="6 6"
                />

                {/* Major Railway Tracks (Dresden Mitte to Hbf) */}
                <path
                  d="M210,-10 L210,310"
                  stroke="#64748b"
                  strokeWidth="3"
                  strokeOpacity="0.35"
                  strokeDasharray="4 4"
                />

                {/* City Streets Network */}
                <path
                  d="M40,240 L360,80"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeOpacity="0.12"
                />
                <path
                  d="M80,310 L260,-10"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeOpacity="0.15"
                />
                <path
                  d="M10,170 L390,170"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeOpacity="0.2"
                />
                {/* Weißeritzstraße Axis */}
                <path
                  d="M170,30 L170,280"
                  stroke="#3b82f6"
                  strokeWidth="3.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M120,170 L240,170"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                />
              </svg>

              {/* Surrounding Landmark Chips */}
              {/* Bahnhof Dresden Mitte */}
              <div className="absolute top-12 right-12 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white/80">
                <Train className="w-3 h-3 text-blue-400" />
                <span>Bf. Dresden Mitte (2 Min)</span>
              </div>

              {/* Elbe river label */}
              <div className="absolute top-4 left-6 text-[10px] font-mono tracking-widest text-cyan-400/50 uppercase">
                ≈ Elbe
              </div>

              {/* Parkplätze */}
              <div className="absolute bottom-28 left-6 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white/70">
                <Car className="w-3 h-3 text-emerald-400" />
                <span>Kundenparkplätze</span>
              </div>

              {/* Pulsing Concentric Radar Rings Centered on Shop */}
              <div className="absolute flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-blue-500/20 animate-ping duration-[3000ms]" />
                <div className="absolute w-36 h-36 rounded-full border border-blue-500/30 animate-pulse" />
                <div className="absolute w-24 h-24 rounded-full border border-cyan-400/30 bg-blue-500/10" />

                {/* Central Glowing Shop Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/40 border border-blue-400/40 flex items-center gap-1.5 active:scale-95 transition-transform">
                    <MapPin className="w-3.5 h-3.5 text-white fill-white animate-bounce" />
                    <span className="text-xs font-bold tracking-tight">Weißeritzstr. 40</span>
                  </div>
                  <div className="w-2 h-2 bg-indigo-500 rotate-45 -mt-1 shadow-sm" />
                </div>
              </div>

              {/* Compass Needle Element */}
              <div className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-mono text-white/40">
                <Compass className="w-3.5 h-3.5 text-blue-400 animate-spin-slow" />
                <span>N 51°03'</span>
              </div>
            </div>
          ) : (
            /* Live OpenStreetMap Dark-Inverted Embed */
            <div className="absolute inset-0">
              <iframe
                title="Interaktive Karte Dresden Weißeritzstraße 40"
                className="w-full h-full border-0 filter invert contrast-125 brightness-90 opacity-90"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.7170%2C51.0530%2C13.7280%2C51.0600&layer=mapnik&marker=51.0565%2C13.7225"
              />
            </div>
          )}

          {/* Vignette Overlay for Seamless Cinematic Framing */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#080a11] via-transparent to-[#080a11]/40" />

          {/* Floating Glassmorphic Workshop Status Over Map */}
          <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white tracking-wide text-xs">
                  Meisterwerkstatt geöffnet
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Ohne Voranmeldung
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[11px] pt-0.5 text-white/70 mb-2.5">
              <div className="bg-white/[0.04] rounded-xl p-1.5 border border-white/5">
                <div className="font-semibold text-white">30–45 Min</div>
                <div className="text-[10px] text-white/40">Ø Display</div>
              </div>
              <div className="bg-white/[0.04] rounded-xl p-1.5 border border-white/5">
                <div className="font-semibold text-white">ab 0 €</div>
                <div className="text-[10px] text-white/40">Diagnose</div>
              </div>
              <div className="bg-white/[0.04] rounded-xl p-1.5 border border-white/5">
                <div className="font-semibold text-white">12 Monate</div>
                <div className="text-[10px] text-white/40">Garantie</div>
              </div>
            </div>

            {/* Quick Direction Button */}
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold border border-white/15 transition-colors active:scale-95 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-blue-400" />
              <span>Route in Google Maps starten</span>
              <ExternalLink className="w-3 h-3 text-white/40 ml-1" />
            </a>
          </div>
        </div>

        {/* Minimalist Sub-Label */}
        <div className="p-3 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs text-white/50 font-light">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">Weißeritzstraße 40 · 01067 Dresden</span>
          </span>
          <span className="text-[11px] text-blue-400/90 shrink-0 font-medium">
            2 Min. zu Fuß vom Bahnhof Mitte
          </span>
        </div>
      </div>
    </div>
  );
}
