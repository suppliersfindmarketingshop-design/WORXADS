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
  X,
  Search,
  Wrench,
  FileText,
  Link2,
  MapPin,
  ClipboardList,
  KeyRound,
  Target,
  Hammer,
  Activity,
  FileBarChart,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const stats = [
  { value: "50+", label: "Site-uri Optimizate" },
  { value: "Top 3", label: "Google pentru clienții noștri" },
  { value: "+180%", label: "Trafic organic mediu" },
  { value: "Lunare", label: "Rapoarte detaliate" },
];

const seoTypes = [
  {
    icon: Wrench,
    title: "SEO Tehnic",
    description:
      "Viteza site-ului, indexare, structura URL-urilor, Core Web Vitals, sitemap, robots.txt — fundația unui site optimizat corect.",
  },
  {
    icon: FileText,
    title: "SEO On-Page",
    description:
      "Optimizarea conținutului, titlurilor, meta tagurilor, heading-urilor și structurii interne de linkuri.",
  },
  {
    icon: Link2,
    title: "SEO Off-Page & Link Building",
    description:
      "Construim un profil solid de backlink-uri de pe site-uri de autoritate pentru a crește credibilitatea domeniului tău.",
  },
  {
    icon: MapPin,
    title: "SEO Local",
    description:
      "Optimizare Google Business Profile și prezență locală pentru a atrage clienți din orașul sau zona ta.",
  },
];

const processSteps = [
  { icon: ClipboardList, title: "Audit SEO Complet", description: "Analizăm site-ul tău din toate perspectivele: tehnic, conținut, backlink-uri și poziții curente în Google." },
  { icon: KeyRound, title: "Cercetare Cuvinte Cheie", description: "Identificăm keyword-urile cu cel mai mare potențial pentru industria și locația ta." },
  { icon: Target, title: "Strategie Personalizată", description: "Creăm un plan de acțiune prioritizat, adaptat obiectivelor și bugetului tău." },
  { icon: Hammer, title: "Implementare", description: "Optimizăm tehnic, creăm conținut și construim backlink-uri de calitate." },
  { icon: Activity, title: "Monitorizare", description: "Urmărim pozițiile, traficul și conversiile săptămânal." },
  { icon: FileBarChart, title: "Raportare & Ajustare", description: "Raport lunar detaliat + ajustăm strategia în funcție de rezultate." },
];

const packages = [
  {
    name: "Local SEO",
    badge: "Pentru firme locale",
    price: "De la 400€",
    period: "/lună",
    highlighted: false,
    features: [
      "Audit SEO inițial",
      "Optimizare Google Business Profile",
      "Optimizare on-page (până la 10 pagini)",
      "Cercetare cuvinte cheie locale",
      "2 articole blog/lună",
      "Raport lunar",
    ],
    cta: "Alege Local SEO",
  },
  {
    name: "National SEO",
    badge: "Pentru firme în creștere",
    price: "De la 800€",
    period: "/lună",
    highlighted: true,
    popular: "Recomandat",
    features: [
      "Audit SEO complet",
      "Optimizare on-page (până la 30 pagini)",
      "Cercetare cuvinte cheie naționale",
      "Link building (5 backlink-uri/lună)",
      "4 articole blog/lună",
      "SEO tehnic continuu",
      "Raport lunar detaliat",
      "Ședință lunară de strategie",
    ],
    cta: "Alege National SEO",
  },
  {
    name: "eCommerce SEO",
    badge: "Pentru magazine online",
    price: "De la 1.200€",
    period: "/lună",
    highlighted: false,
    features: [
      "Audit SEO complet eCommerce",
      "Optimizare categorii & produse",
      "Schema markup produse",
      "Cercetare cuvinte cheie produse",
      "Link building (10 backlink-uri/lună)",
      "6 articole blog/lună",
      "Monitorizare Core Web Vitals",
      "Rapoarte săptămânale",
      "Account manager dedicat",
    ],
    cta: "Alege eCommerce SEO",
  },
];

const comparisonRows = [
  { label: "Cost pe termen lung", seo: "Scăzut", ads: "Ridicat (plătești per click)" },
  { label: "Timp până la rezultate", seo: "3-6 luni", ads: "Imediat" },
  { label: "Durabilitate rezultate", seo: "Permanente", ads: "Dispar când oprești bugetul" },
  { label: "Credibilitate", seo: "Ridicată", ads: "Medie" },
  { label: "Ideal pentru", seo: "Termen lung", ads: "Campanii punctuale" },
];

const caseStudies = [
  {
    industry: "eCommerce",
    company: "Magazin online accesorii",
    timeframe: "Rezultate după 6 luni",
    before: { position: "45", traffic: "200 viz/lună", leads: "3/lună" },
    after: { position: "4", traffic: "1.800 viz/lună", leads: "28/lună" },
    keywords: ["accesorii telefon", "huse personalizate", "magazin online"],
  },
  {
    industry: "Servicii",
    company: "Cabinet avocatură București",
    timeframe: "Rezultate după 6 luni",
    before: { position: "38", traffic: "150 viz/lună", leads: "2/lună" },
    after: { position: "3", traffic: "1.450 viz/lună", leads: "22/lună" },
    keywords: ["avocat bucurești", "consultanță juridică", "drept civil"],
  },
  {
    industry: "HoReCa",
    company: "Restaurant local",
    timeframe: "Rezultate după 6 luni",
    before: { position: "52", traffic: "180 viz/lună", leads: "4/lună" },
    after: { position: "2", traffic: "2.100 viz/lună", leads: "35/lună" },
    keywords: ["restaurant centru", "rezervare masă", "meniu zilei"],
  },
];

const testimonials = [
  {
    name: "Cristian M.",
    company: "eCommerce · București",
    rating: 5,
    text: "După 6 luni de SEO cu WorxAds, traficul organic a crescut cu peste 250%. Suntem acum în Top 3 pentru cuvintele cheie principale și vânzările au explodat. Recomand cu încredere!",
  },
  {
    name: "Elena V.",
    company: "Servicii medicale · Cluj",
    rating: 5,
    text: "Site-ul nostru era invizibil pe Google. În 5 luni au reușit să ne aducă în Top 5 pentru toate căutările locale importante. Pacienții ne găsesc acum singuri.",
  },
  {
    name: "Mihai T.",
    company: "Construcții · Timișoara",
    rating: 5,
    text: "Profesionalism, transparență și rezultate măsurabile. Rapoartele lunare sunt clare, iar leads-urile organice au crescut de la 2 la peste 20 pe lună. Mulțumim!",
  },
];

const faqs = [
  {
    q: "Cât timp durează să văd rezultate SEO?",
    a: "SEO este o investiție pe termen lung. Primele îmbunătățiri vizibile apar după 2-3 luni, rezultate semnificative după 4-6 luni, iar consolidarea pozițiilor după 6-12 luni.",
  },
  {
    q: "Cât costă serviciile SEO?",
    a: "Pachetele noastre pornesc de la 400€/lună pentru SEO local. Prețul final depinde de competitivitatea domeniului, starea actuală a site-ului și obiectivele tale.",
  },
  {
    q: "Garantați poziția 1 în Google?",
    a: "Nicio agenție serioasă nu poate garanta poziția 1, deoarece algoritmul Google nu este controlabil. Garantăm însă o strategie corectă, transparentă și rezultate măsurabile.",
  },
  {
    q: "Funcționează SEO și pentru business-uri locale din România?",
    a: "Absolut. SEO local este una dintre cele mai eficiente strategii pentru firme din România — optimizăm prezența ta în Google Maps și pentru căutări cu intenție locală.",
  },
  {
    q: "Ce se întâmplă cu pozițiile dacă oprim SEO-ul?",
    a: "Pozițiile câștigate se mențin o perioadă, dar fără optimizare continuă pot scădea în timp. De aceea recomandăm SEO ca o activitate continuă, nu punctuală.",
  },
  {
    q: "Pot face SEO și pe un site vechi?",
    a: "Da, chiar și site-urile vechi pot fi optimizate eficient. Uneori domeniile cu vechime au un avantaj față de cele noi, datorită autorității acumulate.",
  },
];

const Seo = () => {
  useEffect(() => {
    document.title = "Servicii SEO în România – Optimizare pentru Google | WorxAds";

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
      "Optimizăm site-ul tău pentru Google și aducem trafic organic constant. Audit SEO gratuit pentru afacerea ta. WorxAds România.";

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", "Servicii SEO în România – Optimizare pentru Google | WorxAds");
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", "https://worxads.com/seo");
    setMeta('meta[property="og:image"]', "property", "og:image", "https://worxads.com/og-image.jpg");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", "Servicii SEO în România – Optimizare pentru Google | WorxAds");
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://worxads.com/seo");

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Servicii SEO",
          serviceType: "Search Engine Optimization",
          provider: {
            "@type": "Organization",
            name: "WorxAds",
            url: "https://worxads.com",
            telephone: "+40786534051",
          },
          areaServed: { "@type": "Country", name: "România" },
          description,
          url: "https://worxads.com/seo",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://worxads.com/" },
            { "@type": "ListItem", position: 2, name: "SEO", item: "https://worxads.com/seo" },
          ],
        },
      ],
    };

    let ld = document.getElementById("ld-seo") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-seo";
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
          <li className="text-foreground font-medium">SEO</li>
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
                Servicii · SEO
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Servicii SEO Profesionale –{" "}
                <span className="gradient-text">Fii Găsit pe Google</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Aducem site-ul tău în primele rezultate Google prin strategii SEO bazate pe date, conținut de calitate și optimizare tehnică.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Solicită Audit SEO Gratuit
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="#cum-functioneaza">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    Cum funcționează SEO?
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero illustration: Google SERP mockup */}
            <div className="relative" aria-label="Mockup rezultate Google cu site pe locul 1">
              <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1 bg-secondary/50 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
                    servicii web design bucurești
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-primary/10 border border-primary/40 rounded-lg p-3 relative">
                    <span className="absolute -top-2 -left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                      #1
                    </span>
                    <div className="text-xs text-muted-foreground mb-1">worxads.com › servicii</div>
                    <div className="text-sm font-semibold gradient-text">Site-ul Tău — Top 1 Google</div>
                    <div className="text-xs text-muted-foreground mt-1">Optimizat profesional de WorxAds</div>
                  </div>
                  {[
                    { pos: 2, host: "competitor1.ro", title: "Servicii Web Design Profesional" },
                    { pos: 3, host: "competitor2.ro", title: "Agenție Web Design București" },
                    { pos: 4, host: "competitor3.ro", title: "Web Design & Dezvoltare" },
                  ].map((r) => (
                    <div key={r.pos} className="bg-secondary/30 rounded-lg p-3 relative">
                      <span className="absolute -top-2 -left-2 bg-secondary text-foreground text-[10px] font-bold px-2 py-0.5 rounded-full border border-border">
                        #{r.pos}
                      </span>
                      <div className="text-xs text-muted-foreground mb-1">{r.host}</div>
                      <div className="text-sm font-medium">{r.title}</div>
                    </div>
                  ))}
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

      {/* CE ESTE SEO */}
      <section id="cum-functioneaza" className="container mx-auto px-6 py-20 md:py-28 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ce Este SEO și <span className="gradient-text">De Ce Contează pentru Afacerea Ta</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">SEO (Search Engine Optimization)</strong> reprezintă ansamblul de tehnici prin care optimizăm site-ul tău pentru a apărea în primele rezultate Google atunci când potențialii clienți caută produsele sau serviciile tale.
            </p>
            <p>
              Spre deosebire de reclamele plătite, traficul organic obținut prin SEO este <strong className="text-foreground">gratuit și constant</strong> — odată obținute pozițiile, acestea aduc vizitatori zi de zi, fără costuri suplimentare.
            </p>
            <p>
              Un site bine optimizat înseamnă mai multă vizibilitate, mai multă credibilitate și, cel mai important, <strong className="text-foreground">mai mulți clienți</strong>.
            </p>
          </div>

          {/* Comparison widget */}
          <div className="grid gap-4">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-destructive/15 flex items-center justify-center">
                  <TrendingDown className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="font-display font-semibold">Fără SEO</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" /> Site pe pagina 3-4 din Google</li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" /> Trafic organic scăzut</li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" /> 0 leads din căutări organice</li>
              </ul>
            </div>

            <div className="bg-card border border-primary/40 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display font-semibold">Cu SEO WorxAds</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Site în Top 3 Google</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Trafic organic crescut constant</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Leads constante lunar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO TYPES */}
      <section className="bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Serviciile Noastre <span className="gradient-text">SEO</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {seoTypes.map((s) => (
              <div key={s.title} className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Cum Lucrăm — <span className="gradient-text">Procesul Nostru SEO</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>

      {/* PACKAGES */}
      <section className="bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Pachete SEO pentru <span className="gradient-text">Orice Tip de Business</span>
            </h2>
            <p className="text-muted-foreground">Sau cere o ofertă complet personalizată</p>
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
              Ai un proiect special? Cere o ofertă personalizată <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SEO vs ADS */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            SEO sau Google Ads? <span className="gradient-text">De Ce Nu Trebuie să Alegi</span>
          </h2>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full min-w-[640px] bg-card border border-border rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-secondary/40">
                <th className="text-left p-4 font-display font-semibold text-sm"></th>
                <th className="text-left p-4 font-display font-semibold">SEO</th>
                <th className="text-left p-4 font-display font-semibold">Google Ads</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? "" : "bg-secondary/10"}>
                  <td className="p-4 text-sm font-medium border-t border-border">{r.label}</td>
                  <td className="p-4 text-sm text-muted-foreground border-t border-border">
                    <span className="inline-flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {r.seo}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground border-t border-border">{r.ads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
          Recomandăm combinarea SEO cu Google Ads pentru rezultate maxime — trafic imediat prin ads și creștere organică pe termen lung.
        </p>
        <div className="text-center mt-4">
          <Link to="/marketing-digital" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
            Află mai multe despre serviciile noastre de Marketing Digital <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Rezultate SEO Reale pentru <span className="gradient-text">Clienți Reali</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.company} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
                <span className="self-start text-xs uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-full mb-3">
                  {c.industry}
                </span>
                <h3 className="font-display text-lg font-semibold">{c.company}</h3>
                <p className="text-xs text-muted-foreground mb-4">{c.timeframe}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-secondary/40 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Înainte</div>
                    <div className="space-y-1 text-xs">
                      <div>Poziție: <strong>{c.before.position}</strong></div>
                      <div>Trafic: <strong>{c.before.traffic}</strong></div>
                      <div>Leads: <strong>{c.before.leads}</strong></div>
                    </div>
                  </div>
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-wider text-primary mb-2">După</div>
                    <div className="space-y-1 text-xs">
                      <div>Poziție: <strong>{c.after.position}</strong></div>
                      <div>Trafic: <strong>{c.after.traffic}</strong></div>
                      <div>Leads: <strong>{c.after.leads}</strong></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {c.keywords.map((k) => (
                    <span key={k} className="text-xs font-medium bg-secondary/60 text-foreground px-2 py-1 rounded-full">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ce Spun Clienții Noștri <span className="gradient-text">despre SEO</span>
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

        <div className="text-center mt-10 text-sm text-muted-foreground">
          Vezi și{" "}
          <Link to="/dezvoltare-website" className="text-primary hover:underline">Dezvoltare Website-uri</Link>,{" "}
          <Link to="/aplicatii-mobile" className="text-primary hover:underline">Aplicații Mobile</Link> sau{" "}
          <Link to="/marketing-digital" className="text-primary hover:underline">Marketing Digital</Link>.
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Întrebări Frecvente <span className="gradient-text">despre SEO</span>
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

      {/* AUDIT CTA */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/30 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-glow opacity-40" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-primary/20 items-center justify-center mb-6">
              <Search className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Vrei să Știi Cum Stă <span className="gradient-text">Site-ul Tău în Google?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Îți oferim gratuit un audit SEO complet — identificăm problemele și îți spunem exact ce trebuie făcut.
            </p>
            <a href="/#contact">
              <Button variant="hero" size="xl">
                Solicită Auditul Gratuit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-4">Fără obligații. Primești raportul în 48h.</p>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCallButton />
    </main>
  );
};

export default Seo;
