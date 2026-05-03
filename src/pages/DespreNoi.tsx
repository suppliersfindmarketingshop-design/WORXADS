import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Check,
  Award,
  Users,
  Target,
  Eye,
  Shield,
  TrendingUp,
  Clock,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  
  Star,
  BadgeCheck,
  Heart,
  Zap,
  Handshake,
  BarChart3,
  Stethoscope,
  ShoppingCart,
  UtensilsCrossed,
  Building2,
  Scale,
  GraduationCap,
  Dumbbell,
  Car,
  Cpu,
  PartyPopper,
  HandHeart,
  Factory,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";

const trustStats = [
  { label: "Din 2019 pe piață" },
  { label: "80+ Proiecte livrate" },
  { label: "5+ Ani experiență" },
  { label: "98% Clienți mulțumiți" },
];

const timeline = [
  { year: "2019", text: "Fondarea WorxAds, primele proiecte web" },
  { year: "2020", text: "Extindere în servicii aplicații mobile" },
  { year: "2021", text: "Lansarea departamentului de marketing digital" },
  { year: "2022", text: "50 proiecte livrate, echipă de 5 specialiști" },
  { year: "2023", text: "Extindere servicii SEO dedicate" },
  { year: "2024", text: "80+ proiecte, clienți în 10+ industrii" },
  { year: "2025", text: "Continuăm să creștem alături de clienții noștri" },
];

const values = [
  { icon: Eye, title: "Transparență", text: "Îți spunem mereu adevărul, chiar și când nu e ce vrei să auzi" },
  { icon: Award, title: "Calitate", text: "Nu livrăm niciodată ceva cu care nu suntem 100% mulțumiți" },
  { icon: Handshake, title: "Parteneriat", text: "Succesul tău este succesul nostru — suntem în aceeași echipă" },
  { icon: BarChart3, title: "Rezultate", text: "Măsurăm tot. Fiecare decizie e bazată pe date, nu pe presupuneri" },
];

const team = [
  {
    name: "Stefan Daniel",
    role: "Fondator & Lead Developer",
    exp: "8 ani experiență",
    tags: ["React", "Node.js", "Architecture"],
    bio: "Am fondat WorxAds cu credința că afacerile românești merită soluții web la standarde internaționale. Am lucrat în proiecte pentru clienți din România, Germania și UK înainte să pun bazele agenției.",
    certs: "Google Developer Certified / AWS Cloud Practitioner",
    initials: "SD",
  },
  {
    name: "Maria Constantin",
    role: "Head of Design & UX",
    exp: "6 ani experiență",
    tags: ["UI/UX", "Figma", "Branding"],
    bio: "Cred că un design bun nu e doar frumos — e funcțional, intuitiv și construit în jurul nevoilor utilizatorului. Am designuit peste 60 de produse digitale de la zero.",
    certs: "Google UX Design Certificate / Figma Advanced",
    initials: "MC",
  },
  {
    name: "Andrei Popescu",
    role: "Mobile Developer",
    exp: "5 ani experiență",
    tags: ["React Native", "Flutter", "iOS & Android"],
    bio: "Specializat în aplicații mobile cross-platform cu React Native și Flutter. Am lansat 30+ aplicații în App Store și Google Play, de la MVP-uri simple până la platforme complexe.",
    certs: "Meta React Native Certified / Google Associate Android Developer",
    initials: "AP",
  },
  {
    name: "Elena Dumitrescu",
    role: "SEO & Marketing Digital Specialist",
    exp: "5 ani experiență",
    tags: ["SEO", "Google Ads", "Meta Ads"],
    bio: "Am gestionat strategii SEO și campanii de marketing digital pentru firme din retail, HoReCa, servicii și eCommerce. Rezultatele mele preferite? Site-urile care ajung din pagina 4 în top 3 Google.",
    certs: "Google Ads Certified / Meta Blueprint Certified / Google Analytics Certified",
    initials: "ED",
  },
  {
    name: "Radu Gheorghe",
    role: "Project Manager & Client Success",
    exp: "4 ani experiență",
    tags: ["Project Management", "Scrum", "Client Relations"],
    bio: "Sunt omul care se asigură că proiectul tău e livrat la timp, în buget și exact cum ai visat. Sunt primul tău punct de contact și garantez că nicio întrebare nu rămâne fără răspuns.",
    certs: "PMP Certified / Scrum Master Certified",
    initials: "RG",
  },
];

const counters = [
  { value: "80+", label: "Proiecte Livrate" },
  { value: "50+", label: "Clienți Activi" },
  { value: "5+", label: "Ani pe Piață" },
  { value: "10+", label: "Industrii Servite" },
  { value: "30+", label: "Aplicații în Store-uri" },
  { value: "4.9★", label: "Rating Mediu Clienți" },
  { value: "2M+", label: "Lei Gestionați în Reclame" },
  { value: "98%", label: "Rată Satisfacție Clienți" },
];

const industries = [
  { icon: Stethoscope, name: "Medical & Stomatologie" },
  { icon: ShoppingCart, name: "eCommerce & Retail" },
  { icon: UtensilsCrossed, name: "HoReCa & Turism" },
  { icon: Building2, name: "Construcții & Imobiliare" },
  { icon: Scale, name: "Juridic & Financiar" },
  { icon: GraduationCap, name: "Educație & E-learning" },
  { icon: Dumbbell, name: "Fitness & Wellness" },
  { icon: Car, name: "Auto & Transporturi" },
  { icon: Cpu, name: "IT & Tech" },
  { icon: PartyPopper, name: "Evenimente & Entertainment" },
  { icon: HandHeart, name: "NGO & Non-profit" },
  { icon: Factory, name: "Producție & Industrie" },
];

const certifications = [
  "Google Partner",
  "Meta Business Partner",
  "Google Analytics Certified",
  "Google Ads Certified",
  "Meta Blueprint Certified",
  "AWS Partner",
];

const process = [
  { step: "1", title: "Consultanță Gratuită", time: "Ziua 1", text: "Ne cunoaștem, înțelegem afacerea ta și obiectivele tale. Fără presiune, fără obligații." },
  { step: "2", title: "Propunere & Ofertă Detaliată", time: "Ziua 2-3", text: "Primești o ofertă clară, cu tot ce include proiectul — fără costuri ascunse, fără surprize." },
  { step: "3", title: "Contract & Brief Complet", time: "Săptămâna 1", text: "Semnăm un contract clar care protejează ambele părți și definim exact ce livrăm și când." },
  { step: "4", title: "Design & Dezvoltare", time: "Săptămânile 2-6", text: "Lucrăm iterativ cu feedback regulat din partea ta. Ești implicat în fiecare etapă." },
  { step: "5", title: "Testare & Aprobare", time: "Săptămâna finală", text: "Testăm exhaustiv și nu lansăm până când ești 100% mulțumit." },
  { step: "6", title: "Lansare & Support Continuu", time: "Post-lansare", text: "Lansăm împreună și rămânem alături de tine cu suport tehnic și mentenanță." },
];

const guarantees = [
  { title: "Garanție 30 Zile Post-Lansare", text: "Rezolvăm orice problemă tehnică apărută în primele 30 de zile după lansare, gratuit." },
  { title: "Transparență Totală în Prețuri", text: "Oferta include tot. Nu există costuri ascunse sau surprize neplăcute." },
  { title: "Tu Deții Tot", text: "Codul, designul, conturile de publicitate — totul e al tău. Nicio dependență de noi." },
  { title: "Comunicare în 24h", text: "Orice întrebare primește răspuns în maxim 24 ore lucrătoare." },
  { title: "Deadline-uri Respectate", text: "Livrăm la termenul agreat. Dacă întârziem din vina noastră, compensăm." },
  { title: "Confidențialitate Garantată", text: "Datele și informațiile tale sunt 100% confidențiale. Semnăm NDA la cerere." },
];

const testimonials = [
  {
    name: "Bogdan Matei",
    company: "CEO, FreshMart România",
    initials: "BM",
    text: "Am lucrat cu WorxAds pentru dezvoltarea platformei noastre eCommerce și rezultatele au depășit așteptările. Echipa a fost extrem de profesionistă, comunicarea a fost impecabilă și au livrat exact la termen. Vânzările online au crescut cu 340% în primele 6 luni post-lansare.",
    date: "Martie 2025",
  },
  {
    name: "Dr. Andreea Popa",
    company: "Manager, Dental Smile Clinic",
    initials: "AP",
    text: "Înainte de a lucra cu WorxAds, clinica noastră era practic invizibilă online. Acum suntem în top 3 Google pentru cele mai importante căutări din domeniu și avem programări online zilnice. Recomand cu toată încrederea!",
    date: "Februarie 2025",
  },
  {
    name: "Mihai Stancu",
    company: "Fondator, ParkEasy App",
    initials: "MS",
    text: "WorxAds ne-a transformat ideea de aplicație într-un produs real, lansat în App Store și Google Play în mai puțin de 3 luni. Echipa lui Andrei a fost incredibilă — profesionalism, deadline-uri respectate și un rezultat final de care suntem extrem de mândri.",
    date: "Decembrie 2024",
  },
  {
    name: "Cristina Radu",
    company: "Marketing Manager, Casa Elegantă",
    initials: "CR",
    text: "Colaborăm cu WorxAds de 2 ani pentru managementul campaniilor Google și Meta Ads. Elena și echipa de marketing au redus costul per achiziție cu 35% și au crescut lead-urile calificate cu 160%. Nu ne imaginăm să lucrăm cu altcineva.",
    date: "Ianuarie 2025",
  },
];

const DespreNoi = () => {
  useEffect(() => {
    document.title = "Despre Noi — Echipa WorxAds | Agenție Web & Marketing Digital România";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const description =
      "Cunoaște echipa WorxAds — specialiști în dezvoltare web, aplicații mobile și marketing digital din România. 5+ ani experiență, 80+ proiecte livrate. ✓";

    setMeta("description", description);
    setMeta("og:title", "Despre Noi — Echipa WorxAds | Agenție Web & Marketing Digital", "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", "https://worxads.com/despre-noi", "property");
    setMeta("og:image", "https://worxads.com/og-image.jpg", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Despre Noi — Echipa WorxAds");
    setMeta("twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://worxads.com/despre-noi");

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "WorxAds",
        url: "https://worxads.com",
        logo: "https://worxads.com/logo.png",
        description:
          "Agenție de dezvoltare website-uri, aplicații mobile și marketing digital din România",
        foundingDate: "2019",
        numberOfEmployees: "5-10",
        address: {
          "@type": "PostalAddress",
          addressCountry: "RO",
          addressLocality: "București",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: "Romanian",
        },
        sameAs: [
          "https://facebook.com/worxads",
          "https://linkedin.com/company/worxads",
          "https://instagram.com/worxads",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "WorxAds",
        image: "https://worxads.com/og-image.jpg",
        priceRange: "€€",
        currenciesAccepted: "RON, EUR",
        paymentAccepted: "Cash, Card, Transfer bancar",
        openingHours: "Mo-Fr 09:00-18:00",
        address: {
          "@type": "PostalAddress",
          addressCountry: "RO",
          addressLocality: "București",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "63",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://worxads.com" },
          { "@type": "ListItem", position: 2, name: "Despre Noi", item: "https://worxads.com/despre-noi" },
        ],
      },
    ];

    const scriptId = "despre-noi-schema";
    document.getElementById(scriptId)?.remove();
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StickyCallButton />

      <main className="pt-32 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Acasă</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Despre Noi</span>
          </nav>
        </div>

        {/* HERO */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            >
              Despre <span className="gradient-text">WorxAds</span> — Oamenii din Spatele Proiectelor Tale Digitale
            </motion.h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Nu suntem doar o agenție digitală. Suntem partenerii de creștere ai afacerii tale — oameni pasionați
              care transformă idei în produse digitale de succes.
            </p>

            <div className="aspect-[16/9] max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-border flex items-center justify-center mb-10">
              <div className="text-center p-8">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground" aria-label="echipa WorxAds agentie web Romania">
                  Echipa WorxAds — specialiști web & marketing digital România
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {trustStats.map((s) => (
                <div
                  key={s.label}
                  className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium"
                >
                  <Check className="w-4 h-4 text-primary inline mr-2" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POVESTEA NOASTRĂ */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Povestea <span className="gradient-text">WorxAds</span> — De Unde am Pornit și Unde Suntem Azi
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed mb-12">
              <p>
                <strong className="text-foreground">WorxAds a luat naștere în 2019</strong> dintr-o convingere
                simplă: afacerile românești merită parteneri digitali care înțeleg cu adevărat nevoile lor — nu agenții
                care livrează template-uri și dispar.
              </p>
              <p>
                Am început ca o echipă mică de doi developeri pasionați, lucrând la primele proiecte web pentru
                antreprenori locali. Pe măsură ce reputația noastră a crescut, am adăugat treptat noi competențe:
                design UI/UX, dezvoltare aplicații mobile și, mai târziu, un departament dedicat de marketing
                digital. Fiecare angajare a fost făcută cu grijă — căutăm oameni care împărtășesc valorile
                noastre, nu doar competențele tehnice.
              </p>
              <p>
                Astăzi suntem o <Link to="/" className="text-primary hover:underline">agentie web Romania</Link> cu
                peste 80 de proiecte livrate, clienți activi în 10+ industrii și o echipă de 5+ specialiști
                certificați. Oferim servicii complete de{" "}
                <Link to="/dezvoltare-website" className="text-primary hover:underline">
                  dezvoltare website profesional
                </Link>
                ,{" "}
                <Link to="/aplicatii-mobile" className="text-primary hover:underline">
                  aplicatii mobile iOS Android
                </Link>{" "}
                și{" "}
                <Link to="/marketing-digital" className="text-primary hover:underline">
                  marketing digital Romania
                </Link>
                .
              </p>
              <p>
                Ce ne diferențiază? Suntem o <strong className="text-foreground">agentie digitala Bucuresti</strong>{" "}
                care pune relația cu clientul mai presus de cifre. Nu vindem proiecte — construim parteneriate
                durabile. Echipa WorxAds rămâne alături de tine după lansare, cu suport, mentenanță și consultanță
                strategică continuă.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-6">
              {timeline.map((t) => (
                <div key={t.year} className="relative">
                  <div className="absolute -left-[2.4rem] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  <div className="bg-card border border-border rounded-xl p-5">
                    <div className="text-primary font-display font-bold text-lg mb-1">{t.year}</div>
                    <p className="text-muted-foreground">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MISIUNE & VIZIUNE */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
              Misiunea și Valorile Care ne <span className="gradient-text">Ghidează</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">Misiunea noastră</h3>
                <p className="text-muted-foreground text-lg">
                  Să ajutăm afacerile românești să crească online prin soluții digitale de calitate, livrate cu
                  transparență și responsabilitate.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">Viziunea noastră</h3>
                <p className="text-muted-foreground text-lg">
                  Să fim partenerul digital de încredere al fiecărui antreprenor român care vrea să construiască
                  ceva durabil în mediul online.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-lg mb-2">{v.title}</h4>
                  <p className="text-muted-foreground text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECHIPA */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Echipa WorxAds — <span className="gradient-text">Specialiștii</span> din Spatele Proiectelor Tale
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Oameni reali, cu experiență dovedită, pasionați de ceea ce fac
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((m) => (
                <article key={m.name} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
                  <div
                    className="aspect-square w-full rounded-xl bg-gradient-to-br from-primary/30 to-card flex items-center justify-center mb-5"
                    aria-label={`${m.name} - ${m.role} WorxAds Romania`}
                  >
                    <span className="text-5xl font-display font-bold text-primary">{m.initials}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-1">{m.name}</h3>
                  <div className="text-primary text-sm font-medium mb-1">{m.role}</div>
                  <div className="text-muted-foreground text-xs mb-3">{m.exp}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {m.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{m.bio}</p>
                  <div className="text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                    <BadgeCheck className="w-4 h-4 text-primary inline mr-1.5" />
                    {m.certs}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CIFRE & DOVEZI */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
              WorxAds în Cifre — <span className="gradient-text">Rezultate Demonstrate</span>, Nu Promisiuni
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {counters.map((c) => (
                <div key={c.label} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">{c.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRII */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Industrii în Care Avem <span className="gradient-text">Experiență Dovedită</span>
              </h2>
              <p className="text-muted-foreground text-lg">Înțelegem specificul fiecărui domeniu</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((i) => (
                <div key={i.name} className="bg-card border border-border rounded-xl p-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{i.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICĂRI */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Certificări și <span className="gradient-text">Parteneriate Oficiale</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Competență validată de cele mai importante platforme digitale
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {certifications.map((c) => (
                <div
                  key={c}
                  className="bg-card border border-border rounded-xl p-6 text-center flex flex-col items-center gap-3"
                >
                  <Award className="w-8 h-8 text-primary" />
                  <span className="font-display font-semibold text-sm">{c}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center italic">
              Certificările echipei noastre sunt actualizate anual și reprezintă garanția că lucrăm cu cele mai
              recente standarde din industrie.
            </p>
          </div>
        </section>

        {/* PROCES */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
              Cum Lucrăm — <span className="gradient-text">Transparență</span> de la Primul Contact până la Livrare
            </h2>
            <div className="space-y-5">
              {process.map((p) => (
                <div key={p.step} className="bg-card border border-border rounded-2xl p-6 flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl">
                    {p.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h3 className="text-lg font-display font-bold">{p.title}</h3>
                      <span className="text-xs text-primary">({p.time})</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANȚII */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
              Ce <span className="gradient-text">Garantăm</span> — Angajamentele Noastre față de Tine
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {guarantees.map((g) => (
                <div key={g.title} className="bg-card border border-border rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{g.title}</h3>
                  <p className="text-muted-foreground text-sm">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALE */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Ce Spun <span className="gradient-text">Clienții</span> despre WorxAds
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.9/5</span>
                <span>din 63 recenzii verificate</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {testimonials.map((t) => (
                <article key={t.name} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-card flex items-center justify-center font-display font-bold text-primary">
                      {t.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-bold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.company}</div>
                    </div>
                    <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">"{t.text}"</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                    <span className="text-primary font-medium">✓ Client verificat</span>
                    <span>{t.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & LOCAȚIE */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
              Unde Ne <span className="gradient-text">Găsești</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Adresă", value: "București, România" },
                  { icon: Phone, label: "Telefon", value: "+40 786 534 051" },
                  { icon: Mail, label: "Email", value: "business@worxads.com" },
                  { icon: Clock, label: "Program", value: "Luni-Vineri, 09:00-18:00" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+40 786 534 051" },
                ].map((c) => (
                  <div key={c.label} className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="font-medium break-all">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl overflow-hidden border border-border bg-card">
                <iframe
                  title="Locația WorxAds pe Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1768.3340586566283!2d26.16228352857464!3d44.410253135228224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffc35b9b5167%3A0x4ab40a14c7736ba0!2sWorx%20Ads!5e1!3m2!1sen!2sro!4v1777812832744!5m2!1sen!2sro"
                  className="block w-full h-[450px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <Contact />

        {/* FINAL CTA */}
        <section className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-primary/30">
            <Heart className="w-12 h-12 text-primary mx-auto mb-5" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Hai să Construim Ceva <span className="gradient-text">Extraordinar</span> Împreună!
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Prima consultanță e gratuită și fără nicio obligație.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">Contactează-ne</Button>
              </Link>
              <Link to="/portofoliu">
                <Button variant="heroOutline" size="xl">Vezi portofoliul nostru</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DespreNoi;
