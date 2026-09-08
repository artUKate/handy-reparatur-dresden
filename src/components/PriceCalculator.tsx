import { useState } from 'react';
import { Smartphone, Laptop, Tablet, CheckCircle, Clock, ShieldCheck, Phone, MessageCircle, Sparkles, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface PriceCalculatorProps {
  onClose?: () => void;
  isModal?: boolean;
}

interface OptionConfig {
  brand: string;
  category: 'smartphone' | 'laptop' | 'tablet';
  models: string[];
}

const BRANDS_CONFIG: OptionConfig[] = [
  {
    brand: 'Apple',
    category: 'smartphone',
    models: ['iPhone 15 / 15 Pro / Max', 'iPhone 14 / 14 Pro', 'iPhone 13 / 13 Pro', 'iPhone 12 / 12 Pro', 'iPhone 11 / XR / SE', 'iPad Pro / Air / Mini'],
  },
  {
    brand: 'Samsung',
    category: 'smartphone',
    models: ['Galaxy S24 / Ultra', 'Galaxy S23 / Ultra', 'Galaxy S22 / S21', 'Galaxy A-Serie (A54, A53, A34)', 'Galaxy Z Fold / Flip', 'Galaxy Tab Serie'],
  },
  {
    brand: 'Google',
    category: 'smartphone',
    models: ['Pixel 8 / 8 Pro', 'Pixel 7 / 7 Pro / 7a', 'Pixel 6 / 6 Pro', 'Pixel 5 / 4a'],
  },
  {
    brand: 'Xiaomi / Huawei / Sony',
    category: 'smartphone',
    models: ['Xiaomi 14 / 13 / Redmi', 'Huawei P-Serie / Mate', 'Sony Xperia Modelle', 'OnePlus & andere Androids'],
  },
  {
    brand: 'Apple MacBook',
    category: 'laptop',
    models: ['MacBook Pro M1 / M2 / M3', 'MacBook Air M1 / M2', 'MacBook Pro Intel (2016-2020)', 'iMac / Mac mini'],
  },
  {
    brand: 'Windows Laptop / PC',
    category: 'laptop',
    models: ['Lenovo ThinkPad / Yoga', 'Dell XPS / Inspiron', 'HP Envy / Spectre / Pavilion', 'Asus ZenBook / ROG', 'Acer & andere Notebooks'],
  },
];

const DEFECTS = [
  {
    id: 'display',
    label: 'Display & Glasbruch',
    icon: '📱',
    desc: 'OLED / LCD Tausch, Glas gesprungen, Touch ohne Reaktion',
    phoneFrom: 69,
    laptopFrom: 89,
    time: '30–45 Min',
  },
  {
    id: 'akku',
    label: 'Akku-Austausch',
    icon: '🔋',
    desc: 'Kapazitätsschwäche, schnelles Entladen, Neustarts',
    phoneFrom: 39,
    laptopFrom: 59,
    time: '20–35 Min',
  },
  {
    id: 'wasser',
    label: 'Wasserschaden & Ultraschall',
    icon: '💧',
    desc: 'Flüssigkeitsschaden, Ultraschallbad & Platinenrettung',
    phoneFrom: 59,
    laptopFrom: 79,
    time: '24–48 Std',
  },
  {
    id: 'buchse',
    label: 'Ladebuchse / Port',
    icon: '⚡',
    desc: 'Wackelkontakt beim Laden, Mikrofon oder Lautsprecher',
    phoneFrom: 39,
    laptopFrom: 49,
    time: '30–60 Min',
  },
  {
    id: 'software',
    label: 'Software & Datenrettung',
    icon: '💾',
    desc: 'Bootloop, Passcode vergessen, Datenrettung ohne Verlust',
    phoneFrom: 29,
    laptopFrom: 39,
    time: 'Same-Day',
  },
];

export default function PriceCalculator({ onClose, isModal = false }: PriceCalculatorProps) {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState(BRANDS_CONFIG[0].models[0]);
  const [selectedDefectId, setSelectedDefectId] = useState('display');

  const currentBrand = BRANDS_CONFIG[selectedBrandIndex];
  const currentDefect = DEFECTS.find((d) => d.id === selectedDefectId) || DEFECTS[0];

  const estimatedPrice =
    currentBrand.category === 'laptop' ? currentDefect.laptopFrom : currentDefect.phoneFrom;

  const handleBrandChange = (index: number) => {
    setSelectedBrandIndex(index);
    setSelectedModel(BRANDS_CONFIG[index].models[0]);
  };

  const whatsappMessage = `Hallo Handy Reparatur Sachsen, ich interessiere mich für eine Reparatur: ${currentBrand.brand} - ${selectedModel} (Schaden: ${currentDefect.label}). Wann kann ich vorbeikommen?`;

  return (
    <div className={`relative ${isModal ? '' : 'my-8'}`}>
      <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl text-left">
        {/* Modal close header if applicable */}
        {isModal && onClose && (
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-white text-lg">Preise &amp; Reparaturzeit Rechner</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Top Configuration */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2 inline-block">
                Schritt 1 von 2
              </span>
              <label className="block text-base font-semibold text-white mb-3">
                1. Hersteller &amp; Gerät auswählen:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {BRANDS_CONFIG.map((b, idx) => (
                  <button
                    key={b.brand}
                    type="button"
                    onClick={() => handleBrandChange(idx)}
                    className={`px-4 py-3 rounded-2xl text-xs font-semibold border transition-all text-left flex items-center justify-between ${
                      selectedBrandIndex === idx
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span>{b.brand}</span>
                    {selectedBrandIndex === idx && (
                      <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Select */}
            <div>
              <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                Modellreihe:
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
              >
                {currentBrand.models.map((m) => (
                  <option key={m} value={m} className="bg-neutral-900 text-white">
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Defect Selection */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2 inline-block">
                Schritt 2 von 2
              </span>
              <label className="block text-base font-semibold text-white mb-3">
                2. Was ist defekt?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DEFECTS.map((defect) => {
                  const isSelected = selectedDefectId === defect.id;
                  const price =
                    currentBrand.category === 'laptop' ? defect.laptopFrom : defect.phoneFrom;
                  return (
                    <button
                      key={defect.id}
                      type="button"
                      onClick={() => setSelectedDefectId(defect.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-white/15 border-white/30 shadow-lg'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white flex items-center gap-2">
                          <span>{defect.icon}</span>
                          <span>{defect.label}</span>
                        </span>
                        <span className="text-xs font-bold text-blue-400">ab {price} €</span>
                      </div>
                      <p className="text-[11px] text-white/50 leading-snug font-light">{defect.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Card (Preiskalkulation & Next Action) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Preiseinschätzung
                </span>
                <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Transparente Festpreise
                </span>
              </div>

              {/* Chosen config review */}
              <div className="mb-6 space-y-2">
                <div className="text-xs text-white/50">Ausgewähltes Gerät:</div>
                <div className="text-base font-semibold text-white">
                  {currentBrand.brand} · {selectedModel}
                </div>
                <div className="text-xs text-blue-400 font-medium">
                  Defekt: {currentDefect.label}
                </div>
              </div>

              {/* Price Display */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs text-white/50">Richtpreis Reparatur:</span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      ab {estimatedPrice} €
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-white/50 flex items-center justify-between pt-2 border-t border-white/10">
                  <span>Diagnose vor Reparatur:</span>
                  <span className="text-blue-400 font-medium">ab 0 € (kostenlos bei Reparatur)</span>
                </div>
              </div>

              {/* Key guarantees */}
              <div className="space-y-2.5 mb-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>
                    Dauer: <strong className="text-white">ca. {currentDefect.time}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Datensicherheit (kein Zurücksetzen)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>12 Monate Garantie auf Ersatzteile</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-white/90 text-black font-semibold text-sm transition-all shadow-lg active:scale-98"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Jetzt anrufen: {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-all backdrop-blur-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Per WhatsApp anfragen (Foto mitschicken)</span>
                </a>
              </div>

              <p className="text-[11px] text-white/40 text-center mt-4 font-light">
                Kein Termin erforderlich: Komm einfach in die <strong className="text-white/80">Weißeritzstraße 40</strong>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
