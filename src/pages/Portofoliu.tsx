import { useEffect, useState, useRef } from "react";
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
  MessageSquare,
  FileText,
  Code2,
  LifeBuoy,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

type Category = "Toate" | "Website-uri" | "eCommerce" | "Aplicații Mobile" | "Marketing Digital" | "SEO";

const categories: Category[] = [
  "Toate",
  "Website-uri",
  "eCommerce",
  "Aplicații Mobile",
  "Marketing Digital",
  "SEO",
];

const categoryColors: Record<string, string> = {
  "Website-uri": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "eCommerce": "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "Aplicații Mobile": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Marketing Digital": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "SEO": "bg-pink-500/15 text-pink-400 border-pink-500/30",
};

const featuredProject = {
  category: "eCommerce",
  name: "FreshMart — Magazine Online Alimente Bio",
  tags: ["React", "Node.js", "SEO", "Google Ads"],
  description:
    "Platformă eCommerce completă cu over 500 produse, sistem de abonamente săptămânale și integrare cu curierat și facturare automată.",
  results: ["+340% vânzări online în 6 luni", "4.9★ recenzii clienți", "2.1s timp încărcare"],
  alt: "proiect eCommerce FreshMart Romania WorxAds",
};

const projects = [
  {
    category: "Website-uri",
    name: "Dental Smile Clinic — Website Clinică Stomatologică",
    tags: ["WordPress", "SEO", "UI Design"],
    description: "Website de prezentare modern cu sistem de programări online integrat.",
    results: ["+210% programări online", "Top 3 Google București"],
    alt: "proiect website Dental Smile Clinic Romania WorxAds",
  },
  {
    category: "Aplicații Mobile",
    name: "ParkEasy — Aplicație Parcare Inteligentă",
    tags: ["React Native", "Node.js", "Maps API"],
    description: "Aplicație iOS & Android pentru găsirea și rezervarea locurilor de parcare în timp real.",
    results: ["15.000+ descărcări", "4.7★ App Store"],
    alt: "proiect aplicatie mobila ParkEasy Romania WorxAds",
  },
  {
    category: "Marketing Digital",
    name: "Florăria Iris — Creștere Online prin Google & Meta Ads",
    tags: ["Google Ads", "Meta Ads", "Email Marketing"],
    description: "Strategie completă de marketing digital pentru cel mai mare lanț de florării din Cluj.",
    results: ["3.8x ROAS", "-35% cost per achiziție"],
    alt: "proiect marketing digital Floraria Iris Romania WorxAds",
  },
  {
    category: "eCommerce",
    name: "TechGadgets — Magazin Online Electronice",
    tags: ["Shopify", "SEO", "UI Design"],
    description: "Magazin online cu 1.200+ produse, filtre avansate și checkout optimizat pentru conversii.",
    results: ["+180% rata conversie", "1.8s timp încărcare"],
    alt: "proiect eCommerce TechGadgets Romania WorxAds",
  },
  {
    category: "SEO",
    name: "ConstrucțiiPro — Dominator SEO în Industria Construcțiilor",
    tags: ["SEO Tehnic", "Link Building", "Content"],
    description: "Strategie SEO națională pentru firmă de construcții cu prezență în 8 județe.",
    results: ["+520% trafic organic", "47 keywords în Top 5"],
    alt: "proiect SEO ConstructiiPro Romania WorxAds",
  },
  {
    category: "Website-uri",
    name: "LegalAdvice — Platforma Cabinetului de Avocatură",
    tags: ["Next.js", "UI Design", "SEO"],
    description: "Website profesional cu blog juridic, calculator onorarii și programări online.",
    results: ["+290% vizitatori organici", "Top 1 Google pentru 5 keywords"],
    alt: "proiect website LegalAdvice Romania WorxAds",
  },
  {
    category: "Aplicații Mobile",
    name: "FitCoach — Aplicație Antrenamente Personalizate",
    tags: ["Flutter", "Firebase", "UI Design"],
    description: "Aplicație de fitness cu planuri personalizate, tracking progres și comunitate de utilizatori.",
    results: ["8.500+ utilizatori activi", "4.8★ Google Play"],
    alt: "proiect aplicatie mobila FitCoach Romania WorxAds",
  },
  {
    category: "Marketing Digital",
    name: "Casa Elegantă — Showroom Mobilă & Design Interior",
    tags: ["Meta Ads", "Google Ads", "Social Media"],
    description: "Campanii digitale complete pentru cel mai mare showroom de mobilă premium din București.",
    results: ["4.2x ROAS", "+160% lead-uri calificate"],
    alt: "proiect marketing digital Casa Eleganta Romania WorxAds",
  },
];

const counters = [
  { value: 80, suffix: "+", label: "Proiecte Livrate" },
  { value: 50, suffix: "+", label: "Clienți Activi" },
  { value: 2, suffix: "M+ Lei", label: "Gestionați în Reclame" },
  { value: 15, suffix: "M+", label: "Vizitatori Generați" },
  { value: 4.9, suffix: "★", label: "Rating Mediu Clienți", decimals: 1 },
  { value: 5, suffix: " Ani", label: "de Experiență" },
];

const testimonials = [
  {
    name: "Andrei Popescu",
    role: "CEO, TechGadgets",
    rating: 5,
    text: "Colaborarea cu WorxAds ne-a transformat complet prezența online. Magazinul a crescut cu peste 180% în rata de conversie iar suportul tehnic este impecabil. Recomand cu încredere această agentie web Bucuresti.",
  },
  {
    name: "Maria Ionescu",
    role: "Manager Marketing, Florăria Iris",
    rating: 5,
    text: "Echipa WorxAds înțelege business-ul, nu doar tehnologia. ROAS-ul de 3.8x vorbește de la sine — campaniile lor de marketing digital ne-au adus rezultate măsurabile lună de lună.",
  },
  {
    name: "Cristian Dumitrescu",
    role: "Fondator, FitCoach",
    rating: 5,
    text: "De la idee la aplicație live în 3 luni. Profesionalism, comunicare excelentă și o calitate a codului de top. Avem peste 8.500 utilizatori activi și continuăm să creștem.",
  },
];

const processSteps = [
  { icon: MessageSquare, title: "Consultanță gratuită" },
  { icon: FileText, title: "Propunere & ofertă" },
  { icon: Code2, title: "Dezvoltare & livrare" },
  { icon: LifeBuoy, title: "Support continuu" },
];

const faqs = [
  {
    q: "Lucrați cu firme mici sau doar cu corporații?",
    a: "Lucrăm cu orice tip de business — de la antreprenori la început de drum până la companii cu sute de angajați. Adaptăm soluțiile și bugetele în funcție de nevoile tale.",
  },
  {
    q: "Pot vedea exemple de proiecte din industria mea?",
    a: "Bineînțeles. Contactează-ne și îți trimitem studii de caz relevante pentru domeniul tău de activitate, inclusiv cu rezultate detaliate.",
  },
  {
    q: "Cât durează în medie un proiect?",
    a: "Un website de prezentare: 2-4 săptămâni. Un magazin online: 4-8 săptămâni. O aplicație mobilă: 2-4 luni. Termenele sunt stabilite clar în contract.",
  },
  {
    q: "Oferiți garanție pentru proiectele livrate?",
    a: "Da, oferim o perioadă de garanție de 30 de zile post-lansare în care remediem orice problemă tehnică apărută, fără costuri suplimentare.",
  },
  {
    q: "Pot solicita modificări după ce proiectul e livrat?",
    a: "Da, oferim pachete de mentenanță lunară care includ modificări, update-uri și suport tehnic prioritar pentru toate proiectele livrate.",
  },
];

const PROJECTS_PER_PAGE = 6;

const AnimatedCounter = ({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1500;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setDisplay(value * progress);
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold gradient-text">
      {display.toFixed(decimals)}
      {suffix}
    </div>
  );
};

const Portofoliu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Toate");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  useEffect(() => {
    document.title = "Portofoliu Proiecte Web & Mobile România | WorxAds";

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const description =
      "Descoperă proiectele realizate de WorxAds — website-uri, aplicații mobile și campanii de marketing digital pentru firme din România.";

    setMeta("description", description);
    setMeta("og:title", "Portofoliu Proiecte Web & Mobile România | WorxAds", true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://worxads.com/portofoliu", true);
    setMeta("og:image", "https://worxads.com/og-image.jpg", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Portofoliu Proiecte Web & Mobile România | WorxAds");
    setMeta("twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://worxads.com/portofoliu");

    const allProjects = [featuredProject, ...projects];

    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: allProjects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          description: p.description,
          genre: p.category,
        },
      })),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://worxads.com/" },
        { "@type": "ListItem", position: 2, name: "Portofoliu", item: "https://worxads.com/portofoliu" },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const aggregateRatingSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "WorxAds",
      url: "https://worxads.com",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "63",
      },
    };

    const schemas = [
      { id: "portofoliu-itemlist", data: itemListSchema },
      { id: "portofoliu-breadcrumb", data: breadcrumbSchema },
      { id: "portofoliu-faq", data: faqSchema },
      { id: "portofoliu-rating", data: aggregateRatingSchema },
    ];

    schemas.forEach(({ id, data }) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });

    return () => {
      schemas.forEach(({ id }) => {
        const s = document.getElementById(id);
        if (s) s.remove();
      });
    };
  }, []);

  const filtered =
    activeCategory === "Toate"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = filtered.slice(0, visibleCount);
  const showFeatured = activeCategory === "Toate" || activeCategory === "eCommerce";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <StickyCallButton />

      <main className="pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">Acasă</Link>
            </li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li className="text-foreground" aria-current="page">Portofoliu</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="container mx-auto px-6 pt-8 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Portofoliul Nostru — <span className="gradient-text">Proiecte Reale</span>, Rezultate Măsurabile
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Peste 80 de proiecte livrate pentru antreprenori și companii din România — de la
            website-uri de prezentare până la aplicații mobile și campanii digitale cu ROI măsurabil.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["80+ Proiecte", "5 Ani Experiență", "98% Clienți Mulțumiți"].map((s) => (
              <span
                key={s}
                className="px-5 py-2 rounded-full bg-secondary border border-border text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-lg border-y border-border">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(PROJECTS_PER_PAGE);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground glow-effect"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
            Proiecte Web și Mobile România
          </h2>

          {/* Featured project */}
          {showFeatured && (
            <article className="mb-10 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 p-8 md:p-10">
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[featuredProject.category]}`}>
                  {featuredProject.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                {featuredProject.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProject.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.results.map((r) => (
                  <span key={r} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary font-medium">
                    {r}
                  </span>
                ))}
              </div>
            </article>
          )}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((p) => (
              <article
                key={p.name}
                className="rounded-xl border border-border bg-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col p-5"
              >
                <div className="mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryColors[p.category]}`}>
                    {p.category}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{p.name}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-secondary text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.results.map((r) => (
                    <span key={r} className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="mt-12 flex justify-center">
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => setVisibleCount((c) => c + PROJECTS_PER_PAGE)}
              >
                Încarcă mai multe proiecte
              </Button>
            </div>
          )}

          {/* Internal links paragraph */}
          <p className="mt-12 text-center text-muted-foreground max-w-3xl mx-auto">
            Vezi mai multe despre serviciile noastre de{" "}
            <Link to="/dezvoltare-website" className="text-primary hover:underline">dezvoltare website profesional</Link>,{" "}
            <Link to="/aplicatii-mobile" className="text-primary hover:underline">aplicatii mobile iOS Android</Link>,{" "}
            <Link to="/marketing-digital" className="text-primary hover:underline">servicii marketing digital</Link> și{" "}
            <Link to="/seo" className="text-primary hover:underline">optimizare SEO Romania</Link>.
          </p>
        </section>

        {/* RESULTS BY NUMBERS */}
        <section className="bg-secondary/30 border-y border-border py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Impactul Muncii Noastre în Cifre
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {counters.map((c) => (
                <div key={c.label} className="text-center">
                  <AnimatedCounter value={c.value} suffix={c.suffix} decimals={c.decimals ?? 0} />
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">{c.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-muted-foreground max-w-3xl mx-auto">
              Suntem o <strong className="text-foreground">agentie web Bucuresti</strong> cu rezultate dovedite —
              de la proiecte website Romania până la aplicatii mobile realizate pentru clienți din toată țara.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Rezultate Reale pentru Clienți din România
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto -mt-8 mb-12">
            Ce Spun Clienții despre Colaborarea cu WorxAds
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Rating mediu <strong className="text-foreground">4.9 / 5</strong> din 63 recenzii verificate.
          </p>
        </section>

        {/* PROCESS TEASER */}
        <section className="bg-secondary/30 border-y border-border py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-center">
              Vrei un Proiect Similar?
            </h2>
            <p className="text-center text-muted-foreground mb-12">Iată cum ar arăta colaborarea noastră</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {processSteps.map((step, i) => (
                <div key={step.title} className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Pas {i + 1}</p>
                  <p className="font-semibold">{step.title}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <a href="/#contact">
                <Button variant="hero" size="lg">Începe proiectul tău</Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-6 py-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
            Portofoliu Agenție Web WorxAds — Întrebări despre Proiectele Noastre
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* FINAL CTA */}
        <section className="container mx-auto px-6 py-20">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-10 md:p-16 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Proiectul Tău Urmează să Fie aici!
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Hai să construim ceva de care să fii mândru. Prima consultanță e gratuită.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/#contact">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Cere o ofertă gratuită
                </Button>
              </a>
              <a href="/#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Vezi serviciile noastre
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portofoliu;
