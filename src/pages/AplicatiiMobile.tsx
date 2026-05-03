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
  Apple,
  Smartphone,
  Layers,
  Globe2,
  Lightbulb,
  PenTool,
  Palette,
  Hammer,
  CheckCircle2,
  Rocket,
  Users,
  Shield,
  Code2,
  Plug,
  LifeBuoy,
  ChevronRight,
  Star,
  Check,
  Minus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const stats = [
  { value: "30+", label: "Aplicații Livrate" },
  { value: "iOS & Android", label: "Platforme native" },
  { value: "4.8★", label: "Rating Mediu App Store" },
  { value: "Support", label: "Post-Lansare" },
];

const appTypes = [
  {
    icon: Apple,
    title: "Aplicații Native iOS",
    description: "Performanță maximă pentru utilizatorii Apple.",
  },
  {
    icon: Smartphone,
    title: "Aplicații Native Android",
    description: "Experiență optimă pe ecosistemul Google.",
  },
  {
    icon: Layers,
    title: "Cross-Platform (React Native / Flutter)",
    description: "Un singur cod, două platforme — cost redus, calitate ridicată.",
  },
  {
    icon: Globe2,
    title: "Aplicații Web Progressive (PWA)",
    description: "Funcționează ca o aplicație, se accesează ca un site.",
  },
];

const processSteps = [
  { icon: Lightbulb, title: "Descoperire & Brief", description: "Înțelegem ideea, publicul și obiectivele tale." },
  { icon: PenTool, title: "UX & Wireframing", description: "Schițăm fluxurile și arhitectura aplicației." },
  { icon: Palette, title: "Design UI", description: "Creăm un design modern, intuitiv și atractiv." },
  { icon: Hammer, title: "Dezvoltare", description: "Codăm aplicația folosind tehnologii moderne." },
  { icon: CheckCircle2, title: "Testare & QA", description: "Testăm pe multiple dispozitive și sisteme de operare." },
  { icon: Rocket, title: "Lansare & Support", description: "Publicăm în App Store / Google Play și te susținem." },
];

const whyUs = [
  { icon: Smartphone, title: "Experiență iOS & Android", description: "Echipă specializată pe ambele platforme." },
  { icon: Users, title: "Design Centrat pe Utilizator", description: "UX/UI care crește retenția." },
  { icon: Code2, title: "Cod Curat & Scalabil", description: "Aplicații pregătite pentru creștere." },
  { icon: Plug, title: "Integrări API & Backend", description: "Conectăm orice serviciu extern." },
  { icon: Shield, title: "Securitate & GDPR", description: "Date protejate conform legislației europene." },
  { icon: LifeBuoy, title: "Mentenanță & Updates", description: "Suport tehnic după lansare." },
];

const technologies = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "Firebase",
  "Node.js",
  "AWS",
  "Figma",
  "App Store",
  "Google Play",
];

const comparisonRows: { label: string; native: string; cross: string; pwa: string }[] = [
  { label: "Cost dezvoltare", native: "Ridicat", cross: "Mediu", pwa: "Redus" },
  { label: "Timp de livrare", native: "Lung", cross: "Mediu", pwa: "Scurt" },
  { label: "Performanță", native: "Excelentă", cross: "Foarte bună", pwa: "Bună" },
  { label: "Acces funcții telefon (cameră, GPS etc.)", native: "Complet", cross: "Aproape complet", pwa: "Limitat" },
  { label: "Publicare App Store / Google Play", native: "Da", cross: "Da", pwa: "Nu (web)" },
  {
    label: "Ideal pentru",
    native: "Aplicații complexe, gaming",
    cross: "Majoritatea businessurilor",
    pwa: "MVP & site-uri instalabile",
  },
];

const testimonials = [
  {
    name: "Andreea Dumitrescu",
    company: "București",
    review:
      "Aplicația livrată de WorxAds a depășit așteptările. UX-ul este intuitiv, iar utilizatorii noștri au adoptat-o instant — retenția a crescut cu 45% în primele 2 luni.",
  },
  {
    name: "Cristian Stoica",
    company: "Cluj-Napoca",
    review:
      "Echipă serioasă și foarte tehnică. Au livrat o aplicație cross-platform stabilă, publicată fără probleme atât pe App Store, cât și pe Google Play.",
  },
  {
    name: "Ioana Vasilescu",
    company: "Timișoara",
    review:
      "Comunicare excelentă pe tot parcursul proiectului. Aplicația noastră are 4.9★ în App Store și ne-a redus volumul de telefoane la suport cu peste 30%.",
  },
];

const faqs = [
  {
    q: "Cât costă dezvoltarea unei aplicații mobile?",
    a: "Prețul variază în funcție de complexitate și platformă. O aplicație simplă cross-platform pornește de la câteva mii de euro. Contactează-ne pentru o estimare gratuită.",
  },
  {
    q: "Cât timp durează să dezvoltați o aplicație?",
    a: "O aplicație de complexitate medie durează între 2 și 4 luni, de la brief până la lansare în App Store și Google Play.",
  },
  {
    q: "Publicați voi aplicația în App Store și Google Play?",
    a: "Da, ne ocupăm de întregul proces de publicare și optimizare ASO (App Store Optimization) pentru vizibilitate maximă.",
  },
  {
    q: "Pot actualiza singur conținutul din aplicație?",
    a: "Da, livrăm aplicațiile cu un panou de administrare (CMS) simplu de folosit, fără cunoștințe tehnice necesare.",
  },
  {
    q: "Oferiți suport după lansarea aplicației?",
    a: "Da, oferim pachete de mentenanță lunară care includ update-uri, monitorizare și suport tehnic prioritar.",
  },
];

const AplicatiiMobile = () => {
  useEffect(() => {
    document.title = "Dezvoltare Aplicații Mobile iOS & Android România | WorxAds";

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
      "Creăm aplicații mobile native și cross-platform pentru iOS și Android. Soluții personalizate pentru afacerea ta. Ofertă gratuită!";

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", "Dezvoltare Aplicații Mobile iOS & Android România | WorxAds");
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", "https://worxads.com/aplicatii-mobile");
    setMeta('meta[property="og:image"]', "property", "og:image", "https://worxads.com/og-image.jpg");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", "Dezvoltare Aplicații Mobile iOS & Android România | WorxAds");
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://worxads.com/aplicatii-mobile");

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Dezvoltare Aplicații Mobile iOS & Android",
          serviceType: "Mobile App Development",
          provider: {
            "@type": "Organization",
            name: "WorxAds",
            url: "https://worxads.com",
            telephone: "+40786534051",
          },
          areaServed: { "@type": "Country", name: "România" },
          description,
          url: "https://worxads.com/aplicatii-mobile",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://worxads.com/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Aplicații Mobile",
              item: "https://worxads.com/aplicatii-mobile",
            },
          ],
        },
      ],
    };

    let ld = document.getElementById("ld-aplicatii-mobile") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-aplicatii-mobile";
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
            <Link to="/" className="hover:text-foreground transition-colors">
              Acasă
            </Link>
          </li>
          <li><ChevronRight className="w-4 h-4" /></li>
          <li className="text-foreground font-medium">Aplicații Mobile</li>
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
                Servicii · Aplicații Mobile
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Aplicații Mobile <span className="gradient-text">iOS și Android</span> pentru Businessul Tău
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                De la idee la App Store și Google Play — construim aplicații mobile rapide, intuitive și scalabile pentru afacerea ta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-cta">
                  <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                    Cere ofertă gratuită
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#portofoliu">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    Vezi portofoliu
                  </Button>
                </a>
              </div>
            </div>

            {/* Phone mockup illustration */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-64 h-[520px] rounded-[3rem] bg-gradient-to-br from-card via-secondary to-card border-[10px] border-border shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-10" />
                <div className="p-5 pt-10 h-full flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-20 rounded bg-primary/40" />
                    <div className="w-8 h-8 rounded-full bg-primary/30" />
                  </div>
                  <div className="h-3 w-3/4 rounded bg-muted" />
                  <div className="h-2 w-2/3 rounded bg-muted" />
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="aspect-square rounded-2xl bg-primary/30" />
                    <div className="aspect-square rounded-2xl bg-secondary" />
                    <div className="aspect-square rounded-2xl bg-secondary" />
                    <div className="aspect-square rounded-2xl bg-primary/20" />
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <div className="h-10 rounded-xl bg-primary/80" />
                    <div className="h-2 w-1/2 mx-auto rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="py-10 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">
                  {s.value}
                </div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPURI DE APLICAȚII */}
      <section id="portofoliu" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Ce Construim
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ce Tipuri de <span className="gradient-text">Aplicații</span> Dezvoltăm
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appTypes.map((t) => (
              <div
                key={t.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover-lift card-gradient"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Procesul Nostru
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Cum Lucrăm — De la <span className="gradient-text">Idee la Lansare</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {processSteps.map((step, i) => (
                <div key={step.title} className="relative text-center">
                  <div className="relative mx-auto mb-4 w-16 h-16 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center z-10">
                    <step.icon className="w-7 h-7 text-primary" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Avantajele Noastre
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              De Ce Să Alegi <span className="gradient-text">WorxAds</span> pentru Aplicația Ta
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-muted-foreground">
            Vezi și serviciile noastre conexe:{" "}
            <Link to="/dezvoltare-website" className="text-primary hover:underline">Dezvoltare Website-uri</Link>,{" "}
            <Link to="/marketing-digital" className="text-primary hover:underline">Marketing Digital</Link>,{" "}
            <Link to="/seo" className="text-primary hover:underline">SEO</Link>.
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Tehnologii pe Care le <span className="gradient-text">Folosim</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-3 rounded-xl bg-card border border-border text-foreground/80 font-medium hover:border-primary/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Compară Variantele
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ce Variantă Se Potrivește <span className="gradient-text">Afacerii Tale?</span>
            </h2>
          </div>

          <div className="overflow-x-auto -mx-6 px-6">
            <div className="min-w-[720px] rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-secondary/40">
                  <tr>
                    <th className="p-4 font-display text-sm md:text-base">Criteriu</th>
                    <th className="p-4 font-display text-sm md:text-base">Native iOS / Android</th>
                    <th className="p-4 font-display text-sm md:text-base bg-primary/15 text-foreground relative">
                      <div className="flex items-center gap-2">
                        Cross-Platform
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary text-primary-foreground uppercase tracking-wider">
                          Recomandat
                        </span>
                      </div>
                    </th>
                    <th className="p-4 font-display text-sm md:text-base">PWA</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                      <td className="p-4 text-sm font-medium">{row.label}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.native}</td>
                      <td className="p-4 text-sm text-foreground bg-primary/5 font-medium">{row.cross}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.pwa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3 md:hidden">
            Glisează lateral pentru a vedea întreg tabelul →
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Recenzii
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ce Spun <span className="gradient-text">Clienții</span> Noștri
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    aria-label={`Avatar ${t.name}`}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 flex items-center justify-center font-bold text-primary-foreground"
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-foreground italic">„{t.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Întrebări Frecvente despre <span className="gradient-text">Aplicații Mobile</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact-cta" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ai o Idee de Aplicație? <span className="gradient-text">Hai să o Construim Împreună!</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Prima consultanță este gratuită și fără obligații.
          </p>
          <a href="/#contact">
            <Button variant="hero" size="xl" className="group">
              Contactează-ne Acum
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <StickyCallButton />
    </main>
  );
};

export default AplicatiiMobile;
