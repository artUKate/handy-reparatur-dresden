import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSteps from './components/ProcessSteps';
import ServicesSection from './components/ServicesSection';
import BrandsMarquee from './components/BrandsMarquee';
import SocialProof from './components/SocialProof';
import WorkshopAbout from './components/WorkshopAbout';
import ContactSection from './components/ContactSection';
import DatenschutzSection from './components/DatenschutzSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import PriceCalculator from './components/PriceCalculator';

export default function App() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [priceCalculatorOpen, setPriceCalculatorOpen] = useState(false);

  const scrollToPricing = () => {
    const el = document.getElementById('leistungen');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen text-white flex flex-col font-sans selection:bg-blue-500/25 selection:text-white relative"
      style={{
        backgroundColor: '#050505',
        backgroundImage: 'radial-gradient(circle at 50% -20%, #1a1a2e 0%, #050505 80%)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Top Fixed Header with Clean Apple-style Navigation */}
      <Header
        onOpenCaseStudy={() => setCaseStudyOpen(true)}
        onOpenPriceCalculator={() => setPriceCalculatorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Block with Punchline (Error 5 & Error 2 Fix) */}
        <Hero
          onScrollToPricing={scrollToPricing}
          onOpenPriceCalculator={() => setPriceCalculatorOpen(true)}
        />

        {/* 3. Was dürfen wir für dich retten? (Visual Services Grid with Real Photography) */}
        <ServicesSection onOpenContact={scrollToContact} />

        {/* 4. Dedizierter Interaktiver Sofort-Preisrechner */}
        <section id="rechner" className="py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Transparente Festpreise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Sofort-Reparaturrechner
              </h2>
              <p className="mt-3 text-base sm:text-lg text-white/60 font-light leading-relaxed">
                Wähle deinen Hersteller, Modell und den Schaden für eine sofortige Zeiteinschätzung und transparente Kosten.
              </p>
            </div>

            <PriceCalculator />
          </div>
        </section>

        {/* 5. Ablauf: In 3 Schritten zum reparierten Gerät */}
        <ProcessSteps onOpenContact={scrollToContact} />

        {/* 6. Datenschutz & Privatsphäre Garantie (Reiner Text, keine Preise) */}
        <DatenschutzSection />

        {/* 7. Marken (Brand Grid) */}
        <BrandsMarquee />

        {/* 8. Über uns & Werkstatt-Labor mit echten Fotos */}
        <WorkshopAbout />

        {/* 9. Social Proof / Google Rezensionen */}
        <SocialProof />

        {/* 10. Kontakte, Öffnungszeiten, Anfahrt Dresden Weißeritzstr. 40 */}
        <ContactSection />
      </main>

      {/* Footer with legal info, Dresden address & Mobile Floating Sticky Action Bar */}
      <Footer
        onOpenCaseStudy={() => setCaseStudyOpen(true)}
        onOpenPriceCalculator={() => setPriceCalculatorOpen(true)}
      />

      {/* Interactive Case Study UX Audit Modal (5 Errors Analysis) */}
      <CaseStudyModal
        isOpen={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
      />

      {/* Interactive Price Estimator Modal */}
      {priceCalculatorOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPriceCalculatorOpen(false)}
        >
          <div
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <PriceCalculator
              isModal={true}
              onClose={() => setPriceCalculatorOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
