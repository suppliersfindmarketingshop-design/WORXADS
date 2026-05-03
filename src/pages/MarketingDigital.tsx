import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Check,
  Search,
  Megaphone,
  TrendingUp,
  Mail,
  PenTool,
  Share2,
  ClipboardList,
  Target,
  Rocket,
  Settings,
  FileBarChart,
  BarChart3,
  Eye,
  CalendarX,
  Award,
  MessagesSquare,
  Coins,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const stats = [
  { value: "2M+ Lei", label: "Gestionați în reclame" },
  { value: "40+", label: "Clienți activi" },
  { value: "3.5x", label: "ROI mediu obținut" },
  { value: "Lunare", label: "Rapoarte transparente" },
];

const services = [
  {
    icon: Search,
    title: "Google Ads (PPC)",
    description: "Reclame plătite care apar exact când clienții tăi caută produsele tale.",
  },
  {
    icon: Megaphone,
    title: "Social Media Ads",
    description: "Campanii targetate pe Facebook, Instagram și TikTok.",
  },
  {
    icon: TrendingUp,
    title: "SEO",
    description: "Trafic organic constant și gratuit de la Google pe termen lung.",
    href: "/seo",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Prezență activă și consistentă pe rețelele sociale.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Campanii email care convertesc abonații în clienți.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Conținut care atrage, educă și convinge publicul tău țintă.",
  },
];

const processSteps = [
  { icon: ClipboardList, title: "Audit & Analiză", description: "Analizăm situația actuală, competiția și publicul tău țintă." },
  { icon: Target, title: "Strategie Personalizată", description: "Creăm un plan de acțiune adaptat obiectivelor și bugetului tău." },
  { icon: Rocket, title: "Implementare", description: "Lansăm campaniile și creăm conținutul necesar." },
  { icon: Settings, title: "Optimizare Continuă", description: "Monitorizăm zilnic și ajustăm pentru rezultate maxime." },
  { icon: FileBarChart, title: "Raportare Transparentă", description: "Primești rapoarte lunare clare cu toate rezultatele și KPI-urile." },
];

const packages = [
  {
    name: "Basic",
    badge: "Pentru start-up-uri",
    price: "De la 500€",
    period: "/lună",
    highlighted: false,
    features: [
      "Gestionare 1 canal (Google Ads SAU Social Media)",
      "Setup campanii",
      "Monitorizare săptămânală",
      "Raport lunar",
      "Email support",
    ],
    cta: "Alege Basic",
  },
  {
    name: "Standard",
    badge: "Pentru firme în creștere",
    price: "De la 1.000€",
    period: "/lună",
    highlighted: true,
    popular: "Cel mai popular",
    features: [
      "Gestionare 2 canale (Google Ads + Social Media)",
      "Setup & optimizare campanii",
      "Social Media Management (12 postări/lună)",
      "Monitorizare zilnică",
      "Raport lunar detaliat",
      "Email & telefon support",
      "O ședință lunară de strategie",
    ],
    cta: "Alege Standard",
  },
  {
    name: "Premium",
    badge: "Pentru businessuri ambițioase",
    price: "De la 2.000€",
    period: "/lună",
    highlighted: false,
    features: [
      "Gestionare canale multiple",
      "Google Ads + Social Ads + SEO + Email",
      "Social Media Management (20 postări/lună)",
      "Strategie de conținut lunară",
      "Monitorizare & optimizare zilnică",
      "Rapoarte săptămânale",
      "Account manager dedicat",
      "Ședințe bi-lunare de strategie",
    ],
    cta: "Alege Premium",
  },
];

const caseStudies = [
  {
    industry: "eCommerce",
    company: "Magazin online de modă",
    challenge: "Trafic scăzut și costuri mari per achiziție",
    solution: "Campanii Google Ads + remarketing Facebook",
    results: ["+220% trafic organic", "-40% cost per click", "3.8x ROAS"],
  },
  {
    industry: "HoReCa",
    company: "Restaurant București",
    challenge: "Rezervări inconsistente și vizibilitate locală scăzută",
    solution: "SEO local + Social Media Management + Meta Ads",
    results: ["+180% rezervări online", "+95% follower-i Instagram", "2.9x ROAS"],
  },
  {
    industry: "Servicii",
    company: "Clinică stomatologică",
    challenge: "Lipsa lead-urilor calificate din zona țintă",
    solution: "Google Ads + Landing Page + Email nurturing",
    results: ["+310% lead-uri lunare", "-35% cost per lead", "4.2x ROI"],
  },
];

const whyUs = [
  { icon: BarChart3, title: "Strategie bazată pe date", description: "Decizii luate pe baza cifrelor, nu a intuiției." },
  { icon: Eye, title: "Transparență totală", description: "Acces complet la conturile și rapoartele tale." },
  { icon: CalendarX, title: "Fără contracte pe termen lung", description: "Lucrăm lună de lună, câștigăm prin rezultate." },
  { icon: Award, title: "Echipă certificată Google & Meta", description: "Specialiști cu certificări oficiale." },
  { icon: MessagesSquare, title: "Comunicare rapidă", description: "Răspuns în maxim 24h la orice întrebare." },
  { icon: Coins, title: "Focus pe ROI", description: "Fiecare leu investit trebuie să aducă înapoi mai mult." },
];

const tools = [
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "Google Analytics",
  "Mailchimp",
  "HubSpot",
  "Canva",
  "SEMrush",
  "Google Search Console",
];

const testimonials = [
  {
    name: "Andrei P.",
    company: "eCommerce · București",
    rating: 5,
    text: "În 4 luni am dublat vânzările online. Campaniile Google Ads gestionate de WorxAds au adus un ROAS constant de peste 4x. Comunicare excelentă și rapoarte clare.",
  },
  {
    name: "Maria D.",
    company: "Servicii medicale · Cluj",
    rating: 5,
    text: "Am ajuns de la câțiva pacienți pe lună la o agendă mereu plină. Strategia lor de marketing digital a transformat complet clinica noastră.",
  },
  {
    name: "Răzvan I.",
    company: "HoReCa · Brașov",
    rating: 5,
    text: "Echipă profesionistă, foarte responsabili și transparenți. Pentru fiecare leu investit primim rezultate măsurabile. Recomand cu încredere!",
  },
];

const faqs = [
  {
    q: "Cât buget am nevoie pentru a începe?",
    a: "Recomandăm un buget minim de 500€/lună pentru campanii plătite, la care se adaugă fee-ul de management. Cu cât bugetul e mai mare, cu atât scalăm mai rapid rezultatele.",
  },
  {
    q: "Când voi vedea primele rezultate?",
    a: "Campaniile plătite (Google Ads, Social Ads) generează rezultate din primele zile. SEO-ul necesită 3-6 luni pentru rezultate vizibile, dar sunt durabile pe termen lung.",
  },
  {
    q: "Dețin eu conturile de publicitate?",
    a: "Da, absolut. Conturile de Google Ads, Meta Ads și toate platformele sunt pe numele tău. Noi le gestionăm, tu le deții.",
  },
  {
    q: "Cum măsurați succesul campaniilor?",
    a: "Stabilim KPI-uri clare la început (ROAS, CPA, trafic, leads) și raportăm lunar față de aceste obiective. Totul e transparent și măsurabil.",
  },
  {
    q: "Pot colabora cu voi dacă am deja un specialist intern?",
    a: "Da, putem colabora în diverse moduri — fie preluăm integral managementul, fie oferim consultanță și strategie pentru echipa ta internă.",
  },
];

const MarketingDigital = () => {
  useEffect(() => {
    document.title = "Servicii Marketing Digital pentru Firme din România | WorxAds";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const description =
      "Creștem afacerea ta online prin Google Ads, Social Media, SEO și Email Marketing. Rezultate măsurabile. Ofertă gratuită WorxAds România.";

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", "Servicii Marketing Digital pentru Firme din România | WorxAds");
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", "https://worxads.com/marketing-digital");
    setMeta('meta[property="og:image"]', "property", "og:image", "https://worxads.com/og-image.jpg");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", "Servicii Marketing Digital pentru Firme din România | WorxAds");
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://worxads.com/marketing-digital");

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Servicii Marketing Digital",
          serviceType: "Digital Marketing",
          provider: {
            "@type": "Organization",
            name: "WorxAds",
            url: "https://worxads.com",
            telephone: "+40786534051",
          },
          areaServed: { "@type": "Country", name: "România" },
          description,
          url: "https://worxads.com/marketing-digital",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://worxads.com/" },
            { "@type": "ListItem", position: 2, name: "Marketing Digital", item: "https://worxads.com/marketing-digital" },
          ],
        },
      ],
    };

    let ld = document.getElementById("ld-marketing-digital") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-marketing-digital";
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(schema);
  }, []);

  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <Navbar />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container mx-auto px-6 pt-28 pb-2">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-foreground transition-colors">Acasă</Link>
          </li>
          <li><ChevronRight className="w-4 h-4" /></li>
          <li className="text-foreground font-medium">Marketing Digital</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Servicii · Marketing Digital
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Servicii de Marketing Digital care{" "}
                <span className="gradient-text">Aduc Rezultate Reale</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Transformăm bugetul tău de marketing în clienți reali — prin strategii digitale bazate pe date, nu pe ghiceli.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Cere o strategie gratuită
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="#testimoniale">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    Vezi rezultatele noastre
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero illustration: dashboard mockup */}
            <div className="relative">
              <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="ml-auto text-xs text-muted-foreground">analytics.worxads</div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "ROAS", value: "4.2x" },
                    { label: "CPC", value: "1.20 lei" },
                    { label: "CTR", value: "6.8%" },
                  ].map((m) => (
                    <div key={m.label} className="bg-secondary/50 rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                      <div className="font-display font-bold text-lg gradient-text">{m.value}</div>
                    </div>
                  ))}
                </div>
                <div className="h-40 rounded-lg bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
                  <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                    <polyline
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      points="0,100 30,80 60,90 100,60 140,65 180,40 220,45 260,20 300,30"
                    />
                    <polyline
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeOpacity="0.4"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      points="0,110 40,100 80,95 120,90 160,75 200,70 240,55 280,50 300,48"
                    />
                  </svg>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">Conversii</div>
                    <div className="font-display font-bold">+312</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">Cost / Conv.</div>
                    <div className="font-display font-bold">28 lei</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-border bg-secondary/20">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ce Include Marketingul Digital cu <span className="gradient-text">WorxAds</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              {s.href && (
                <Link to={s.href} className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline">
                  Află mai mult <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Cum Construim <span className="gradient-text">Strategia Ta de Marketing</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative bg-card border border-border rounded-2xl p-6">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Pachete de <span className="gradient-text">Marketing Digital</span>
          </h2>
          <p className="text-muted-foreground">Alege pachetul potrivit sau cere o ofertă personalizată</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:items-stretch">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative bg-card border rounded-2xl p-8 flex flex-col ${
                p.highlighted
                  ? "border-primary shadow-2xl lg:scale-105 lg:-my-2"
                  : "border-border"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {p.popular}
                </div>
              )}
              <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{p.badge}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{p.name}</h3>
              <div className="mb-6">
                <span className="font-display text-3xl font-bold">{p.price}</span>
                <span className="text-muted-foreground">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="/#contact">
                <Button variant={p.highlighted ? "hero" : "heroOutline"} className="w-full">
                  {p.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/#contact" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
            Ai nevoi specifice? Cere o ofertă personalizată <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Rezultate Reale pentru <span className="gradient-text">Clienți Reali</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.company} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
                <span className="self-start text-xs uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-full mb-3">
                  {c.industry}
                </span>
                <h3 className="font-display text-lg font-semibold mb-3">{c.company}</h3>
                <div className="text-sm mb-2">
                  <span className="font-semibold">Provocare: </span>
                  <span className="text-muted-foreground">{c.challenge}</span>
                </div>
                <div className="text-sm mb-4">
                  <span className="font-semibold">Soluție: </span>
                  <span className="text-muted-foreground">{c.solution}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {c.results.map((r) => (
                    <span key={r} className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            De Ce Să Alegi <span className="gradient-text">WorxAds pentru Marketing</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-card border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <w.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 text-sm text-muted-foreground">
          Vezi și{" "}
          <Link to="/dezvoltare-website" className="text-primary hover:underline">Dezvoltare Website-uri</Link>,{" "}
          <Link to="/aplicatii-mobile" className="text-primary hover:underline">Aplicații Mobile</Link> sau{" "}
          <Link to="/seo" className="text-primary hover:underline">SEO</Link>.
        </div>
      </section>

      {/* TOOLS */}
      <section className="bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Platformele pe Care le <span className="gradient-text">Folosim</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {tools.map((t) => (
              <div
                key={t}
                className="bg-card border border-border rounded-xl px-3 py-4 text-center text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimoniale" className="container mx-auto px-6 py-20 md:py-28 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ce Spun <span className="gradient-text">Clienții Noștri</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Întrebări Frecvente despre <span className="gradient-text">Marketing Digital</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/30 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-glow opacity-40" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Hai să Creștem Afacerea Ta Online <span className="gradient-text">Împreună!</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Îți oferim gratuit un audit de marketing și o strategie personalizată — fără obligații.
            </p>
            <a href="/#contact">
              <Button variant="hero" size="xl">
                Cere Auditul Gratuit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCallButton />
    </main>
  );
};

export default MarketingDigital;
