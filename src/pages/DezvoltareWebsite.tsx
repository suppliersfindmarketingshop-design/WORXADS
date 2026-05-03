import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  LayoutTemplate,
  Code2,
  Smartphone,
  Search,
  Palette,
  Shield,
  Gauge,
  Settings,
  LifeBuoy,
  ChevronRight,
  Star,
  Lightbulb,
  PenTool,
  Hammer,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const stats = [
  { value: "50+", label: "Proiecte livrate" },
  { value: "98%", label: "Clienți mulțumiți" },
  { value: "5 ani", label: "Experiență" },
  { value: "24/7", label: "Support" },
];

const websiteTypes = [
  {
    icon: Globe,
    title: "Website de Prezentare",
    description: "Imaginea digitală a afacerii tale.",
  },
  {
    icon: ShoppingCart,
    title: "Magazine Online (eCommerce)",
    description: "Vinde 24/7 fără limite.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Page",
    description: "Campanii care convertesc.",
  },
  {
    icon: Code2,
    title: "Aplicații Web Custom",
    description: "Soluții unice pentru nevoi specifice.",
  },
];

const processSteps = [
  {
    icon: Lightbulb,
    title: "Brief & Consultanță",
    description: "Înțelegem afacerea și obiectivele tale.",
  },
  {
    icon: PenTool,
    title: "Design UI/UX",
    description: "Creăm un design modern și intuitiv.",
  },
  {
    icon: Hammer,
    title: "Dezvoltare",
    description: "Codăm rapid, curat și scalabil.",
  },
  {
    icon: CheckCircle2,
    title: "Testare & QA",
    description: "Verificăm fiecare detaliu înainte de lansare.",
  },
  {
    icon: Rocket,
    title: "Lansare & Support",
    description: "Publicăm și rămânem alături de tine.",
  },
];

const whyUs = [
  { icon: Palette, title: "Design Modern & Responsive", description: "Arătăm bine pe orice ecran." },
  { icon: Search, title: "Optimizat pentru Google", description: "SEO ready din prima zi." },
  { icon: Gauge, title: "Viteză de încărcare rapidă", description: "Performanță maximă pentru utilizatori." },
  { icon: Shield, title: "Securitate inclusă", description: "SSL, backup și protecție continuă." },
  { icon: Settings, title: "Panou de administrare simplu", description: "Actualizezi conținutul fără cunoștințe tehnice." },
  { icon: LifeBuoy, title: "Support tehnic post-lansare", description: "Suntem alături de tine după lansare." },
];

const technologies = ["React", "Next.js", "WordPress", "Shopify", "Node.js", "PHP", "MySQL", "Figma"];

const testimonials = [
  {
    name: "Andrei Popescu",
    company: "București",
    review:
      "Website-ul nou ne-a adus cu 60% mai multe programări online în prima lună. Echipa WorxAds a înțeles exact ce ne trebuia și a livrat la timp.",
  },
  {
    name: "Elena Marinescu",
    company: "Cluj-Napoca",
    review:
      "Magazinul online arată superb și e ușor de administrat. Vânzările s-au triplat de la lansare. Recomand cu toată încrederea!",
  },
  {
    name: "Mihai Ionescu",
    company: "Brașov",
    review:
      "Profesionalism de la cap la coadă. Site-ul e rapid, modern și convertește excelent. Suportul post-lansare este la fel de bun ca dezvoltarea.",
  },
];

const faqs = [
  {
    q: "Cât durează dezvoltarea unui website?",
    a: "În medie, dezvoltarea unui website durează în jur de o săptămână, în funcție de complexitate.",
  },
  {
    q: "Cât costă un website profesional?",
    a: "Prețurile variază în funcție de cerințe. Contactează-ne pentru o ofertă personalizată și transparentă.",
  },
  {
    q: "Voi putea actualiza singur conținutul site-ului?",
    a: "Da, livrăm toate proiectele cu un panou de administrare simplu de folosit, fără cunoștințe tehnice.",
  },
  {
    q: "Includeți și hosting și domeniu?",
    a: "Putem gestiona hosting-ul și domeniul pentru tine sau putem lucra cu furnizorul tău existent.",
  },
  {
    q: "Oferiți suport după lansare?",
    a: "Da, oferim pachete de mentenanță și suport tehnic lunar pentru toate proiectele livrate.",
  },
];

const DezvoltareWebsite = () => {
  useEffect(() => {
    // SEO: title, meta, canonical, OG, schema
    document.title = "Dezvoltare Website-uri Profesionale în România | WorxAds";

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
      "Creăm website-uri profesionale, rapide și optimizate SEO pentru afacerea ta. Solicită o ofertă gratuită de la echipa WorxAds.";

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", "Dezvoltare Website-uri Profesionale în România | WorxAds");
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", "https://worxads.com/dezvoltare-website");
    setMeta('meta[property="og:image"]', "property", "og:image", "https://worxads.com/og-image.jpg");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", "Dezvoltare Website-uri Profesionale în România | WorxAds");
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://worxads.com/dezvoltare-website");

    // JSON-LD Service + Breadcrumb
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Dezvoltare Website-uri Profesionale",
          serviceType: "Web Development",
          provider: {
            "@type": "Organization",
            name: "WorxAds",
            url: "https://worxads.com",
            telephone: "+40786534051",
          },
          areaServed: { "@type": "Country", name: "România" },
          description,
          url: "https://worxads.com/dezvoltare-website",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://worxads.com/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Dezvoltare Website-uri",
              item: "https://worxads.com/dezvoltare-website",
            },
          ],
        },
      ],
    };

    let ld = document.getElementById("ld-dezvoltare-website") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-dezvoltare-website";
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
          <li className="text-foreground font-medium">Dezvoltare Website-uri</li>
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
                Servicii · Dezvoltare Web
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Dezvoltare <span className="gradient-text">Website-uri Profesionale</span> pentru Afacerea Ta
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                De la website de prezentare la magazine online complexe — construim soluții web care convertesc vizitatori în clienți.
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

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 via-card to-secondary border border-border overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-primary/20 blur-3xl" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col gap-3">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-destructive/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 rounded-xl bg-background/60 backdrop-blur border border-border p-4 flex flex-col gap-3">
                    <div className="h-3 w-1/3 rounded bg-primary/40" />
                    <div className="h-2 w-2/3 rounded bg-muted" />
                    <div className="h-2 w-1/2 rounded bg-muted" />
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="aspect-square rounded-lg bg-primary/20" />
                      <div className="aspect-square rounded-lg bg-secondary" />
                      <div className="aspect-square rounded-lg bg-primary/10" />
                    </div>
                    <div className="mt-auto h-8 w-28 rounded-md bg-primary/80" />
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
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                  {s.value}
                </div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPURI DE WEBSITE-URI */}
      <section id="portofoliu" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Ce Construim
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ce Tipuri de <span className="gradient-text">Website-uri</span> Construim
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteTypes.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover-lift card-gradient"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.description}</p>
              </motion.div>
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
              Cum <span className="gradient-text">Lucrăm</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
              De Ce Să Alegi <span className="gradient-text">WorxAds</span>
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
            <Link to="/aplicatii-mobile" className="text-primary hover:underline">Aplicații Mobile</Link>,{" "}
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

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
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
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Întrebări <span className="gradient-text">Frecvente</span>
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
            Gata să Îți Construim <span className="gradient-text">Website-ul de Vis?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Hai să discutăm proiectul tău. Prima consultanță e gratuită.
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

export default DezvoltareWebsite;
