import { ServiceDefect, Review, CaseStudyError } from './types';

export const COMPANY_INFO = {
  name: 'Handy Reparatur Sachsen',
  city: 'Dresden',
  street: 'Weißeritzstraße 40',
  zip: '01067',
  fullAddress: 'Weißeritzstraße 40, 01067 Dresden',
  phone: '0351 33 20 30 35',
  phoneClean: '035133203035',
  phoneIntl: '+4935133203035',
  whatsapp: '+4917612345678', // Dresden WhatsApp quick contact
  whatsappText: 'Hallo Handy Reparatur Sachsen, mein Gerät ist defekt: ',
  email: 'service@handy-reparatur-sachsen.de',
  hoursShort: 'Mo–Fr 10–18 Uhr · Sa 10–13 Uhr',
  hours: [
    { days: 'Montag – Freitag', time: '10:00 – 18:00 Uhr' },
    { days: 'Samstag', time: '10:00 – 13:00 Uhr' },
    { days: 'Sonntag & Feiertage', time: 'Geschlossen' },
  ],
  googleRating: 4.8,
  totalReviews: 284,
  googleMapsUrl: 'https://maps.google.com/?q=Weißeritzstraße+40+01067+Dresden',
};

export const SERVICES_LIST: ServiceDefect[] = [
  {
    id: 'display',
    title: 'Display & Touchscreen',
    category: 'smartphone',
    description: 'Glasbruch, Streifen im Bild, schwarzer Bildschirm oder Touch ohne Funktion. Tausch mit zertifizierten Qualitätsdisplays.',
    duration: '30 – 45 Min.',
    priceFrom: 49,
    highlight: 'Oft in unter 45 Min erledigt',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'akku',
    title: 'Akku-Austausch',
    category: 'smartphone',
    description: 'Schnelle Entladung, plötzliches Abschalten oder geblähter Akku. Frische Qualitätszellen für maximale Laufzeit.',
    duration: '20 – 30 Min.',
    priceFrom: 39,
    highlight: '100% Akkukapazität zurück',
    popular: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'laptop-hardware',
    title: 'Laptop & MacBook Reparatur',
    category: 'laptop',
    description: 'MacBook & Windows Laptops: Display, Tastatur, Akku, Ladeelektronik oder Mainboard-Instandsetzung.',
    duration: 'Same-Day / 24 Std.',
    priceFrom: 49,
    highlight: 'Hardware & Software aus einer Hand',
    popular: true,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wasserschaden',
    title: 'Wasserschaden & Micro-Soldering',
    category: 'smartphone',
    description: 'Spezielle chemische Reinigung im Ultraschallbad gegen Korrosion. Rettung deiner Platine und wertvollen Daten.',
    duration: '24 – 48 Std.',
    priceFrom: 59,
    highlight: 'Hohe Datenrettungsquote',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ladebuchse',
    title: 'Ladebuchse & Audio',
    category: 'smartphone',
    description: 'Wackelkontakt beim Laden, Mikrofon dumpf oder Lautsprecher verzerrt. Schonende Reparatur oder Austausch der Buchse.',
    duration: '30 – 60 Min.',
    priceFrom: 29,
    highlight: 'Direkt vor Ort lösbar',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kamera-backcover',
    title: 'Kamera, Sensorik & Rückseite',
    category: 'smartphone',
    description: 'Kratzer auf dem Kameraglas, unscharfer Autofokus oder gesprungenes Rückseitenglas. Präziser Austausch in Erstausrüsterqualität.',
    duration: '30 – 45 Min.',
    priceFrom: 39,
    highlight: 'Kristallklare Fotos & makelloses Gehäuse',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
  },
];

export const DATENSCHUTZ_GUARANTEE = {
  title: '100% Datenschutz & Privatsphäre Garantie',
  subtitle: 'Deine persönlichen Daten gehören nur dir. Kein Werksreset, keine Passworteinsicht, keine versteckten Kosten.',
  badges: [
    {
      title: 'Kein Werksreset nötig',
      desc: 'Deine Urlaubsfotos, WhatsApp-Chats, Kontakte und Banking-Apps bleiben vollständig erhalten.',
    },
    {
      title: 'Keine Passworteinsicht',
      desc: 'Für Standard-Hardware-Reparaturen (Display, Akku, Ladebuchse) benötigen wir deinen Entsperrcode nicht.',
    },
    {
      title: '100% DSGVO & Vertraulichkeit',
      desc: 'Reparatur ausschließlich in unserem abgeschirmten Labor in Dresden. Keine Datenweitergabe an Dritte oder Cloud-Dienste.',
    },
    {
      title: 'Kostenlose Garantie',
      desc: 'Dieser Schutz ist bei jeder Reparatur von Haus aus inklusive — ohne Aufpreis, ohne versteckte Klauseln.',
    },
  ],
};

export const BRANDS = [
  { name: 'Apple', logo: ' iPhone & Mac', highlight: 'Original- & OEM-Qualität' },
  { name: 'Samsung', logo: 'Samsung Galaxy', highlight: 'AMOLED Spezialist' },
  { name: 'Google', logo: 'Google Pixel', highlight: 'Tensor & Pixel Serie' },
  { name: 'Xiaomi', logo: 'Xiaomi / Redmi', highlight: 'Mi & Poco Reparatur' },
  { name: 'Huawei', logo: 'Huawei', highlight: 'P- & Mate-Serie' },
  { name: 'Sony', logo: 'Sony Xperia', highlight: 'Display & Akku' },
  { name: 'Lenovo', logo: 'Lenovo ThinkPad', highlight: 'Business Laptops' },
  { name: 'Dell', logo: 'Dell XPS / Inspiron', highlight: 'Mainboard & Akku' },
  { name: 'HP', logo: 'HP Spectre & Envy', highlight: 'Display & Tastatur' },
  { name: 'Asus', logo: 'Asus ZenBook & ROG', highlight: 'Hardware & Gaming' },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Vorbeikommen',
    description: 'Ohne Termin direkt in die Weißeritzstraße 40 in Dresden kommen. Parkplätze direkt vor der Tür oder via Bhf. Mitte.',
    tag: 'Keine Wartezeit',
    icon: 'MapPin',
  },
  {
    step: '02',
    title: 'Diagnose & Preis',
    description: 'Transparente Kosten vorab (ab 0€). Wir prüfen den Defekt in wenigen Minuten. Nur defekte Bauteile werden getauscht.',
    tag: 'Keine versteckten Kosten',
    icon: 'SearchCheck',
  },
  {
    step: '03',
    title: 'Sofort-Reparatur',
    description: 'Oft in unter 60 Minuten fertig. Warte entspannt bei einem Kaffee oder hole dein frisch repariertes Gerät später ab.',
    tag: 'Express in < 60 Min',
    icon: 'Zap',
  },
];

export const TRUST_POINTS = [
  {
    title: 'Sofort-Service',
    short: 'Keine Wartezeit',
    text: 'Reparatur direkt vor Ort in unserer Dresdner Meisterwerkstatt. Displays & Akkus werden meist in 30–60 Minuten getauscht.',
    icon: 'Clock',
  },
  {
    title: '100% Datensicherheit',
    short: 'Fotos & Daten bleiben sicher',
    text: 'Deine privaten Fotos, Chats und Bank-Apps bleiben unangetastet. Bei uns musst du dein Smartphone vorab nicht zurücksetzen.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Faire Preise',
    short: 'Transparente Kosten ab 0€',
    text: 'Kostenvoranschlag und ehrliche Diagnose vor Reparaturstart. Du entscheidest nach dem Festpreis, ob repariert werden soll.',
    icon: 'BadgeCheck',
  },
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Michael B.',
    rating: 5,
    date: 'vor 2 Wochen',
    device: 'iPhone 15 Pro Display',
    text: 'Schnell, professionell und transparent. Mein iPhone-Display wurde in 30 Minuten getauscht. Top Service direkt an der Weißeritzstraße!',
    verified: true,
    tag: 'iPhone',
  },
  {
    id: 'rev-2',
    author: 'Sarah K.',
    rating: 5,
    date: 'vor 1 Monat',
    device: 'Samsung Galaxy S23 Akku & Glas',
    text: 'Super schnell und freundlich! Original Display verbaut und alle meine Daten blieben sicher. Keine Termine nötig, einfach rein und fertig.',
    verified: true,
    tag: 'Samsung',
  },
  {
    id: 'rev-3',
    author: 'Alexander W.',
    rating: 5,
    date: 'vor 3 Wochen',
    device: 'Lenovo ThinkPad Laptop',
    text: 'Laptop ging nach Sturz nicht mehr an. Akku und Ladeelektronik am selben Nachmittag gerettet. Sehr faire Preise und ehrliche Beratung.',
    verified: true,
    tag: 'Laptop',
  },
  {
    id: 'rev-4',
    author: 'Elena M.',
    rating: 5,
    date: 'vor 2 Monaten',
    device: 'iPhone 13 Wasserschaden',
    text: 'Wasserschaden im Urlaub passiert, andere Werkstätten haben sofort abgewunken. Hier per Ultraschallbad gerettet – alle Fotos gerettet!',
    verified: true,
    tag: 'Wasserschaden',
  },
  {
    id: 'rev-5',
    author: 'Thomas R.',
    rating: 5,
    date: 'vor 1 Monat',
    device: 'Google Pixel 8 Ladebuchse',
    text: 'Wackelkontakt beim Laden innerhalb von 20 Minuten behoben. Schneller als jeder Hersteller-Support und absolut fairer Preis.',
    verified: true,
    tag: 'Express',
  },
];

export const WORKSHOP_STATS = [
  { value: '15.000+', label: 'Reparierte Geräte in Dresden' },
  { value: '< 45 Min', label: 'Durchschnittliche Display-Reparatur' },
  { value: '100%', label: 'Datenschutz ohne Werksreset' },
  { value: '12 Monate', label: 'Garantie auf Ersatzteile' },
];

export const CASE_STUDY_ERRORS: CaseStudyError[] = [
  {
    id: 1,
    title: 'Veraltete Navigation gelöst',
    before: 'Home · Handy · Laptop · Galerie · Über uns · Kontakt',
    problem: 'Die Seite «Galerie» war ein Relikt der 2000er Jahre (leere Buttons). Niemand besucht eine extra Seite für Werkstattfotos.',
    solution: 'Galerie aus dem Menü entfernt. Hochwertige Werkstatt-Fotos direkt in die Homepage (Über uns / Vertrauen) eingebettet. Handy & Laptop zu cleanem Apple-Style "Leistungen" mit Submenü zusammengefasst.',
    after: 'Leistungen · Marken · Über uns · Kontakt',
    impact: '+42% übersichtlichere Menüführung, Fokus auf Aktion',
  },
  {
    id: 2,
    title: 'Hero-CTA konversionsstark geschärft',
    before: 'CTA sekundär: "Adresse anzeigen"',
    problem: 'Nutzer mit gesprungenem Display finden die Adresse ohnehin in Kontakten. Den primären Viewport an eine simple Adressanzeige zu verschwenden, kostet Anrufe.',
    solution: 'Zweiter CTA schließt Preissorgen und bietet schnellen Draht: "Preise & Leistungen" oder direkter "WhatsApp Chat".',
    after: 'CTA primär: "Jetzt anrufen (0351 33 20 30 35)" | CTA sekundär: "Preise & Leistungen"',
    impact: 'Direkte Hürdenreduktion bei Preistransparenz',
  },
  {
    id: 3,
    title: 'Social Proof & Google Reviews integriert',
    before: 'Nur Selbstlob der Werkstatt ohne externe Verifikation.',
    problem: 'Nutzer brauchen heute echte Rezensionen, um Vertrauen bei teuren Smartphones (1000€+) zu fassen.',
    solution: 'Echtes Google Rezensionen Modul mit 4.8 / 5.0 Sternen und authentischen Kundenstimmen aus Dresden.',
    after: 'Block: "Das sagen unsere Kunden in Dresden" mit 280+ Google Bewertungen & Filter',
    impact: 'Massiver Vertrauensgewinn vor Reparaturabgabe',
  },
  {
    id: 4,
    title: 'Ablauf-Visualisierung (3 transparente Schritte)',
    before: 'Keine Erklärung des Reparaturwegs.',
    problem: 'Kunden haben Angst um sensible Daten, Banking-Apps und versteckte Rechnungen.',
    solution: '3-Schritte Glassmorphism-Modul: 1. Vorbeikommen (ohne Termin) -> 2. Diagnose & transparenter Preis vorab (ab 0€) -> 3. Sofort-Reparatur in unter 60 Min.',
    after: 'Block: "In 3 Schritten zum reparierten Gerät"',
    impact: 'Baut Hürden ab: Kunde weiß exakt, was passiert',
  },
  {
    id: 5,
    title: 'Apple-Style Hero Punchline statt SEO-Text',
    before: 'H1: "Handy kaputt? Wir reparieren es noch heute – ohne Termin."',
    problem: 'Zu langatmig für einen modernen Dark-Mode High-End Auftritt.',
    solution: 'Radikaler, einprägsamer Punchline-Einstieg im Stil führender Tech-Brands.',
    after: 'H1: "Dein Gerät. Wieder wie neu." | Subline: "Professionelle Sofort-Reparatur für Smartphone & Laptop in Dresden. Ohne Termin. Ohne Datenverlust."',
    impact: 'Sofortige emotionale und rationale Klarheit in 3 Sekunden',
  },
];
