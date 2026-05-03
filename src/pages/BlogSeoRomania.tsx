import { useEffect, useState } from "react";
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
  Calendar,
  Clock,
  User,
  Lightbulb,
  Check,
  AlertTriangle,
  Search,
  TrendingUp,
  MapPin,
  Award,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const sections = [
  { id: "intro", title: "Introducere" },
  { id: "ce-este-seo", title: "Ce este SEO" },
  { id: "cum-functioneaza-google", title: "Cum funcționează Google" },
  { id: "seo-tehnic", title: "Pilonul 1 — SEO Tehnic" },
  { id: "seo-on-page", title: "Pilonul 2 — SEO On-Page" },
  { id: "seo-off-page", title: "Pilonul 3 — SEO Off-Page" },
  { id: "seo-local", title: "SEO Local" },
  { id: "eeat", title: "E-E-A-T" },
  { id: "instrumente", title: "Instrumente SEO" },
  { id: "greseli", title: "Greșeli comune" },
  { id: "plan-90-zile", title: "Plan 90 de zile" },
  { id: "seo-vs-ads", title: "SEO vs Google Ads" },
  { id: "concluzie", title: "Concluzie" },
  { id: "faq", title: "Întrebări frecvente" },
];

const faqs = [
  {
    q: "Cât durează SEO să dea rezultate în România?",
    a: "Primele îmbunătățiri vizibile apar după 2-3 luni. Rezultate semnificative — trafic crescut și poziții în top 10 — după 4-6 luni. Consolidarea în top 3 pentru keywords competitive poate dura 9-12 luni. SEO este o investiție pe termen lung.",
  },
  {
    q: "Cât costă SEO în România?",
    a: "Serviciile SEO în România variază între 400€/lună pentru SEO local și 2.000€+/lună pentru strategii naționale complexe. Prețul depinde de competitivitatea domeniului, starea actuală a site-ului și obiectivele tale.",
  },
  {
    q: "Pot face SEO singur fără o agenție?",
    a: "Da, cu instrumentele gratuite Google și răbdare poți obține rezultate bune. Însă o agenție specializată accelerează semnificativ procesul și evită greșelile costisitoare care pot penaliza site-ul.",
  },
  {
    q: "Câte cuvinte cheie pot targeta simultan?",
    a: "Nu există o limită, dar calitatea primează față de cantitate. Recomandăm 3-5 keywords principale per pagină și un cluster de keywords pentru fiecare categorie de servicii sau produse.",
  },
  {
    q: "SEO funcționează și pentru business-uri mici?",
    a: "Absolut — de fapt, SEO local este una dintre cele mai eficiente strategii pentru business-urile mici din România. Concurența locală e mai mică decât cea națională, iar rezultatele vin mai rapid.",
  },
  {
    q: "Ce este un penalti Google și cum îl evit?",
    a: "Un penalti Google apare când site-ul tău violează guidelines-urile lor — prin backlink-uri cumpărate, conținut duplicat sau keyword stuffing. Evitarea e simplă: lucrează doar cu tehnici white-hat SEO și agenții serioase.",
  },
  {
    q: "Trebuie să fac SEO și dacă rulez Google Ads?",
    a: "Da — Google Ads aduc trafic imediat dar dispar când oprești bugetul. SEO construiește o prezență organică permanentă. Combinația celor două maximizează vizibilitatea și reduce costul per achiziție pe termen lung.",
  },
  {
    q: "Cât de des trebuie actualizat conținutul pentru SEO?",
    a: "Google premiază conținutul proaspăt. Recomandăm actualizarea paginilor principale la fiecare 6 luni și publicarea a minimum 2-4 articole de blog pe lună pentru a menține site-ul activ și relevant.",
  },
];

const BlogSeoRomania = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    document.title =
      "Ghid Complet SEO 2025 pentru Firme din România — Optimizare Google | WorxAds";

    const setMeta = (
      selector: string,
      attr: string,
      name: string,
      content: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const description =
      "Ghid SEO complet pentru antreprenorii din România. Află cum să optimizezi site-ul pentru Google în 2025 — tehnici, strategii și sfaturi practice. ✓ Gratuit!";
    const url = "https://worxads.com/blog/ghid-seo-romania-2025";
    const title =
      "Ghid Complet SEO 2025 pentru Firme din România — Optimizare Google | WorxAds";

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    setMeta('meta[property="og:type"]', "property", "og:type", "article");
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta(
      'meta[property="og:image"]',
      "property",
      "og:image",
      "https://worxads.com/og-image.jpg"
    );
    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image"
    );
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline:
            "Ghid Complet SEO 2025 — Cum să Fii Găsit pe Google dacă ai o Afacere în România",
          description,
          author: {
            "@type": "Organization",
            name: "WorxAds",
            url: "https://worxads.com",
          },
          publisher: {
            "@type": "Organization",
            name: "WorxAds",
            logo: {
              "@type": "ImageObject",
              url: "https://worxads.com/og-image.jpg",
            },
          },
          datePublished: "2026-04-30",
          dateModified: "2026-04-30",
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          image: "https://worxads.com/og-image.jpg",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Acasă",
              item: "https://worxads.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://worxads.com/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Ghid SEO România 2025",
              item: url,
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    };

    let ld = document.getElementById(
      "ld-blog-seo-romania"
    ) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-blog-seo-romania";
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(schema);
  }, []);

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          return { id: s.id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const visible = offsets
        .filter((o) => o.top <= 150)
        .sort((a, b) => b.top - a.top)[0];
      if (visible) setActiveSection(visible.id);

      // Progress bar
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const bar = document.getElementById("reading-progress");
      if (bar) bar.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background scroll-smooth overflow-x-hidden">
      <Navbar />

      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all"
        id="reading-progress"
        style={{ width: "0%" }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-2"
      >
        <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground flex-wrap break-words">
          <li>
            <Link to="/" className="hover:text-foreground transition-colors">
              Acasă
            </Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4" />
          </li>
          <li>
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4" />
          </li>
          <li className="text-foreground font-medium break-words">
            Ghid SEO România 2025
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="container mx-auto px-4 sm:px-6 pt-6 pb-12">
        <div className="max-w-4xl">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block">
            Blog · SEO
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 break-words hyphens-auto">
            Ghid Complet SEO 2025 — Cum să Fii Găsit pe Google{" "}
            <span className="gradient-text">
              dacă ai o Afacere în România
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> Echipa WorxAds
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Actualizat: Aprilie 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> 16 min citire
            </span>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="container mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* ARTICLE CONTENT */}
          <article className="lg:col-span-3 space-y-12 text-foreground/90 leading-relaxed min-w-0 break-words">
            {/* INTRO */}
            <div id="intro" className="space-y-4 scroll-mt-28">
              <p className="text-lg">
                În 2025, dacă afacerea ta nu apare pe prima pagină Google, e ca
                și cum nu ar exista. Investiția în{" "}
                <strong>SEO Romania</strong> nu mai este opțională — este cea
                mai inteligentă strategie digitală pe termen lung pentru orice
                antreprenor care vrea clienți constanți, fără să plătească per
                click.
              </p>
              <p>
                Câteva date care îți vor schimba perspectiva:{" "}
                <strong>
                  68% din experiențele online încep cu un motor de căutare
                </strong>
                , iar{" "}
                <strong>
                  primele 3 rezultate Google captează peste 54% din totalul
                  click-urilor
                </strong>
                . Mai mult,{" "}
                <strong>
                  doar 0.63% din utilizatori ajung pe pagina 2 din Google
                </strong>{" "}
                — ceea ce înseamnă că, practic, dacă nu ești în top 10, nu
                exiști.
              </p>
              <p>
                În acest <strong>ghid SEO Romania 2025</strong> vei învăța tot
                ce trebuie să știi: de la cum funcționează Google, la SEO
                tehnic, on-page și off-page, SEO local, E-E-A-T, instrumente
                esențiale și un plan concret de acțiune pentru primele 90 de
                zile. Ghidul este scris pentru antreprenori și manageri din
                România fără experiență tehnică prealabilă.
              </p>
              <p>
                Materialul este realizat de echipa <strong>WorxAds</strong>,
                specialiști <strong>SEO Romania</strong> cu peste 5 ani
                experiență și zeci de site-uri optimizate cu rezultate dovedite
                — de la afaceri locale la branduri naționale.
              </p>
            </div>

            {/* H2 - CE ESTE SEO */}
            <section id="ce-este-seo" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Ce Este SEO și De Ce Contează pentru Afacerea Ta din România
              </h2>
              <p>
                <strong>SEO (Search Engine Optimization)</strong> reprezintă
                totalitatea acțiunilor prin care faci site-ul tău mai vizibil
                în rezultatele Google fără să plătești pentru fiecare click.
                Spre deosebire de Google Ads — unde plătești per vizitator —
                traficul SEO este organic, gratuit și sustenabil.
              </p>
              <p>
                Diferența dintre <strong>trafic organic și plătit</strong> este
                fundamentală: traficul plătit dispare în clipa în care oprești
                bugetul, în timp ce traficul SEO continuă să curgă luni și ani
                după ce ai făcut munca de optimizare. De aceea spunem că
                <strong> SEO este o investiție, nu o cheltuială</strong> — un
                articol bine optimizat poate aduce clienți timp de 3-5 ani.
              </p>
              <p>
                Cât timp durează <strong>optimizare SEO Romania</strong> să
                funcționeze? Realist, primele rezultate vizibile apar după 2-3
                luni, iar consolidarea în top 10 pentru cuvinte cheie
                competitive durează 6-12 luni. În piața românească, competiția
                SEO este în general mai mică decât pe piețele internaționale,
                ceea ce înseamnă oportunități uriașe pentru cei care încep
                acum.
              </p>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>💡 Definiție simplă:</strong> SEO (Search Engine
                  Optimization) = totalitatea acțiunilor prin care faci
                  site-ul tău mai vizibil în rezultatele Google, fără să
                  plătești per click.
                </p>
              </div>
            </section>

            {/* H2 - CUM FUNCTIONEAZA GOOGLE */}
            <section
              id="cum-functioneaza-google"
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Cum Funcționează Google — Ce Trebuie să Știi înainte de Orice
              </h2>
              <p>
                Înainte să optimizezi orice, trebuie să înțelegi cum descoperă,
                cataloghează și clasează Google miliardele de pagini din
                internet. Procesul are trei etape distincte: crawling,
                indexare și ranking.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Crawling — Cum Descoperă Google Site-ul Tău
              </h3>
              <p>
                Google folosește roboți (cunoscuți ca <em>Googlebot</em>) care
                navighează constant prin internet, urmărind linkuri de pe o
                pagină pe alta. Pentru a-i ajuta, ai nevoie de un{" "}
                <strong>sitemap.xml</strong> — o hartă a site-ului care îi
                spune lui Google ce pagini există. La fel de important este
                fișierul <strong>robots.txt</strong>, care controlează ce
                permiți și ce blochezi pentru crawl.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Indexarea — Cum Intri în Baza de Date Google
              </h3>
              <p>
                După ce a descoperit o pagină, Google decide dacă să o adauge
                în index (baza sa de date). O pagină ne-indexată nu va apărea
                niciodată în rezultate. <strong>Google Search Console</strong>{" "}
                este instrumentul gratuit oficial prin care verifici exact ce
                pagini sunt indexate, ce probleme există și cum te vede
                Google.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Ranking — Cum Decide Google Ordinea Rezultatelor
              </h3>
              <p>
                Google folosește <strong>peste 200 de factori de ranking</strong>{" "}
                pentru a stabili ordinea rezultatelor. În 2025, cei mai
                importanți 5 factori sunt:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Relevanța conținutului</strong> față de intenția de
                  căutare
                </li>
                <li>
                  <strong>Autoritatea domeniului</strong> (calitatea
                  backlink-urilor)
                </li>
                <li>
                  <strong>Core Web Vitals</strong> (viteză, stabilitate
                  vizuală, interactivitate)
                </li>
                <li>
                  <strong>E-E-A-T</strong> (Experience, Expertise,
                  Authoritativeness, Trustworthiness)
                </li>
                <li>
                  <strong>Intenția de căutare</strong> (search intent) bine
                  servită
                </li>
              </ol>

              <div className="rounded-xl border border-border bg-card p-5 text-center">
                <p className="font-mono text-sm sm:text-base text-muted-foreground">
                  Crawling → Indexare → Ranking → Afișare rezultate
                </p>
              </div>
            </section>

            {/* H2 - SEO TEHNIC */}
            <section id="seo-tehnic" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pilonul 1 — SEO Tehnic: Fundația Oricărei Strategii de Succes
              </h2>
              <p>
                SEO tehnic asigură că Google poate accesa, citi și înțelege
                site-ul tău fără probleme. Fără o fundație tehnică solidă,
                nicio strategie de conținut nu va funcționa — degeaba ai
                articole excelente dacă Google nu le poate indexa sau dacă
                pagina ta se încarcă în 8 secunde. Un{" "}
                <Link
                  to="/dezvoltare-website"
                  title="Dezvoltare Website Optimizat SEO Romania"
                  className="text-primary hover:underline"
                >
                  website optimizat SEO
                </Link>{" "}
                de la zero îți economisește luni întregi de fix-uri tehnice.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Viteza Site-ului și Core Web Vitals
              </h3>
              <p>
                <strong>Core Web Vitals</strong> sunt cei trei indicatori
                tehnici prin care Google măsoară experiența utilizatorului:{" "}
                <strong>LCP</strong> (Largest Contentful Paint — viteza de
                încărcare a conținutului principal), <strong>FID/INP</strong>{" "}
                (Interaction to Next Paint — interactivitatea) și{" "}
                <strong>CLS</strong> (Cumulative Layout Shift — stabilitatea
                vizuală). Google penalizează agresiv site-urile lente pentru
                că reduc dramatic timpul petrecut de utilizatori pe pagină.
              </p>
              <p>
                Pentru a testa <strong>viteza site Romania</strong>, folosește
                gratuit <strong>Google PageSpeed Insights</strong> sau
                GTmetrix. Cele mai comune probleme de viteză întâlnite la
                site-urile românești sunt:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Imagini neoptimizate (necomprimate, format greșit)</li>
                <li>Hosting slab cu server lent (mai ales shared hosting ieftin)</li>
                <li>Prea multe plugin-uri WordPress active</li>
                <li>CSS și JS neoptimizat, fără minificare</li>
                <li>Lipsa caching-ului și a unui CDN</li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                HTTPS și Securitatea Site-ului
              </h3>
              <p>
                Un certificat <strong>SSL</strong> activ (HTTPS) este
                obligatoriu în 2025. Google marchează site-urile HTTP ca
                „nesigure" în Chrome, iar utilizatorii fug imediat. Costul
                este aproape zero (Let's Encrypt e gratuit), dar impactul SEO
                este uriaș.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Structura URL-urilor
              </h3>
              <p>
                URL-urile curate, scurte și descriptive ajută atât Google, cât
                și utilizatorii.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  ✅ Bun: <code>worxads.com/servicii-seo-romania</code>
                </li>
                <li>
                  ❌ Rău: <code>worxads.com/page?id=123&cat=4</code>
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Mobile-First Indexing
              </h3>
              <p>
                Din 2021, Google indexează versiunea mobilă a site-ului tău
                înainte de cea desktop. Dacă site-ul nu este perfect responsive
                pe telefon, ești penalizat. Verifică gratuit cu{" "}
                <strong>Mobile-Friendly Test</strong> de la Google.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Sitemap și Robots.txt
              </h3>
              <p>
                Generează un <strong>sitemap.xml</strong> automat (orice CMS
                modern o face) și trimite-l în <strong>Google Search Console</strong>.
                Verifică <strong>robots.txt</strong> să nu blocheze din greșeală
                pagini importante — o eroare comună care scoate site-uri
                întregi din index.
              </p>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <p className="font-semibold mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> Checklist SEO
                  Tehnic de Bază
                </p>
                <ul className="space-y-2 text-sm md:text-base">
                  {[
                    "SSL activ (HTTPS)",
                    "Viteză PageSpeed > 85 pe mobile",
                    "Site responsive pe toate dispozitivele",
                    "Sitemap.xml trimis în Search Console",
                    "robots.txt configurat corect",
                    "URL-uri curate și descriptive",
                    "Nu există erori 404 sau redirect chains",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* H2 - SEO ON-PAGE */}
            <section id="seo-on-page" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pilonul 2 — SEO On-Page: Optimizarea Conținutului pentru
                Google și Utilizatori
              </h2>
              <p>
                <strong>SEO on-page Romania</strong> înseamnă tot ce optimizezi
                în interiorul paginilor tale: cuvinte cheie, titluri, conținut,
                imagini, linkuri interne. Este zona cu cel mai mare impact
                rapid asupra pozițiilor — și unde majoritatea afacerilor
                românești fac cele mai multe greșeli.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Cercetarea Cuvintelor Cheie — Baza Oricărei Strategii SEO
              </h3>
              <p>
                Cercetarea de <strong>cuvinte cheie Romania</strong> este
                fundamentul oricărei strategii SEO. Există trei tipuri
                principale:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Short-tail</strong> (1-2 cuvinte, ex: „SEO") — volum
                  mare, competiție brutală
                </li>
                <li>
                  <strong>Long-tail</strong> (3+ cuvinte, ex: „servicii SEO
                  pentru firme mici Romania") — volum mai mic, dar conversie
                  mult mai bună
                </li>
                <li>
                  <strong>Keywords cu intenție comercială</strong> („preț",
                  „cumpără", „servicii") vs <strong>informațională</strong>{" "}
                  („cum să", „ce este")
                </li>
              </ul>
              <p>
                Cum faci cercetarea de cuvinte cheie? Începe cu unelte gratuite:{" "}
                <strong>Google Keyword Planner</strong>,{" "}
                <strong>Ubersuggest</strong>,{" "}
                <strong>Google Suggest</strong> și secțiunea „People Also Ask".
                Pentru analiză avansată folosește <strong>Ahrefs</strong> sau{" "}
                <strong>Semrush</strong>. Alege keywords cu balanță bună între
                volum, competiție și relevanță pentru afacerea ta — și
                identifică intenția de căutare din spatele fiecărei căutări.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Optimizarea Title Tag și Meta Description
              </h3>
              <p>
                <strong>Meta tags SEO</strong> sunt prima impresie pe care o
                lași în Google. Formula title tag perfect:{" "}
                <em>„Keyword Principal | Keyword Secundar | Brand"</em>.
                Maxim 60 de caractere. Meta description: 150-160 caractere,
                include un CTA clar și keyword-ul principal natural integrat.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Structura Heading-urilor H1-H6
              </h3>
              <p>
                Un singur <strong>H1</strong> per pagină, cu keyword-ul
                principal. <strong>H2-uri</strong> pentru secțiunile principale
                (folosind variații și sinonime). <strong>H3-uri</strong> pentru
                subsecțiuni. Structura ierarhică ajută Google să înțeleagă
                organizarea conținutului tău.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Optimizarea Conținutului
              </h3>
              <p>
                Reguli concrete pentru un <strong>continut SEO</strong> de
                calitate:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minim 800 cuvinte pentru pagini de servicii</li>
                <li>Minim 1500 cuvinte pentru articole de blog</li>
                <li>
                  Keyword density: 1-2% (natural, nu forțat — keyword stuffing
                  e penalizat)
                </li>
                <li>LSI keywords (sinonime și termeni corelați)</li>
                <li>
                  Răspunde direct la întrebări pentru a captura{" "}
                  <strong>featured snippets</strong>
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Optimizarea Imaginilor
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alt text descriptiv care include keyword-uri natural</li>
                <li>Compresie agresivă (format WebP recomandat)</li>
                <li>
                  Denumiri fișiere descriptive (
                  <code>servicii-seo-romania.webp</code>, nu{" "}
                  <code>IMG_4521.jpg</code>)
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Internal Linking — Rețeaua Internă de Linkuri
              </h3>
              <p>
                Linkurile interne distribuie autoritatea între paginile tale și
                ajută Google să înțeleagă structura site-ului. Folosește anchor
                text descriptiv (nu „click aici") și construiește{" "}
                <em>siloze de conținut</em> — grupuri de pagini conectate pe o
                temă comună.
              </p>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>🎯 Regula de aur SEO On-Page:</strong> Scrie întâi
                  pentru utilizator, apoi optimizează pentru Google — nu
                  invers. Conținutul util câștigă mereu pe termen lung.
                </p>
              </div>
            </section>

            {/* H2 - SEO OFF-PAGE */}
            <section id="seo-off-page" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pilonul 3 — SEO Off-Page: Autoritatea care te Urcă în Google
              </h2>
              <p>
                SEO off-page înseamnă tot ce se întâmplă în afara site-ului
                tău, dar care îți influențează pozițiile — în primul rând{" "}
                <strong>backlink-uri Romania</strong> și autoritatea
                domeniului.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Ce Sunt Backlink-urile și De Ce Contează
              </h3>
              <p>
                Un <strong>backlink</strong> este un link de pe alt site care
                duce către site-ul tău. Google îl interpretează ca un „vot de
                încredere" — cu cât ai mai multe linkuri de la site-uri
                puternice și relevante, cu atât te urcă mai sus. Dar atenție:
                nu toate backlink-urile sunt egale.
              </p>
              <p>
                Indicatorii cheie sunt <strong>Domain Authority (DA)</strong> și{" "}
                <strong>Page Authority (PA)</strong> — măsurători Moz care
                estimează puterea unui domeniu. Un singur backlink de la un
                site cu DA 70+ valorează cât 100 de linkuri de pe site-uri
                spam, irelevante.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Strategii de Link Building Romania
              </h3>
              <p>
                Strategii legitime și eficiente pentru{" "}
                <strong>link building Romania</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Guest posting</strong> pe site-uri românești de
                  autoritate din nișa ta
                </li>
                <li>
                  <strong>Listare în directoare relevante</strong>: Google
                  Business Profile (obligatoriu), Pagini Aurii, Bizoo,
                  LinkedIn Company
                </li>
                <li>
                  <strong>Digital PR</strong> — comunicate de presă online,
                  apariții în media de business
                </li>
                <li>
                  <strong>Broken link building</strong> — găsești linkuri
                  rupte pe alte site-uri și sugerezi conținut similar de pe
                  site-ul tău
                </li>
                <li>
                  <strong>Parteneri și furnizori</strong> — schimb natural de
                  linkuri între site-uri partenere
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Cum Verifici Profilul de Backlink-uri
              </h3>
              <p>
                Folosește <strong>Ahrefs</strong>, <strong>Semrush</strong> sau{" "}
                <strong>Moz</strong> pentru analiză completă. Pentru o variantă
                gratuită, secțiunea „Linkuri" din{" "}
                <strong>Google Search Console</strong> îți arată majoritatea
                backlink-urilor. Identifică linkurile toxice (de la site-uri
                spam, casino, adult) și folosește instrumentul{" "}
                <em>Disavow</em> pentru a le dezautoriza.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Social Signals
              </h3>
              <p>
                Linkurile de pe Facebook, Instagram, LinkedIn nu sunt
                backlink-uri directe (sunt nofollow), dar cresc vizibilitatea
                conținutului tău și generează backlink-uri naturale când
                cineva îți distribuie articolul.
              </p>

              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>⚠️ Atenție:</strong> Evită cumpărarea de
                  backlink-uri! Google penalizează agresiv site-urile cu
                  profiluri de linkuri artificiale. Un singur backlink de
                  calitate valorează mai mult decât 100 de linkuri spam.
                </p>
              </div>
            </section>

            {/* H2 - SEO LOCAL */}
            <section id="seo-local" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                SEO Local Romania — Esențial pentru Firmele cu Clienți Locali
              </h2>
              <p>
                <strong>SEO local Romania</strong> este una dintre cele mai
                rapide și eficiente forme de SEO pentru afacerile cu clienți
                într-o zonă geografică specifică: restaurante, clinici,
                avocați, constructori, agenții imobiliare, ateliere auto,
                saloane etc.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Google Business Profile Romania — Cel Mai Important Instrument
              </h3>
              <p>
                <strong>Google Business Profile Romania</strong> (fostul Google
                My Business) este profilul gratuit care îți permite să apari în
                Google Maps și în „pachetul local" din rezultatele de căutare.
                Pentru optimizare:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Categorie principală + categorii secundare relevante</li>
                <li>Descriere completă cu keywords locale</li>
                <li>Ore de program corecte și actualizate</li>
                <li>Minim 10 fotografii de calitate (interior, exterior, echipă, produse)</li>
                <li>
                  <strong>Recenzii</strong> — solicită activ clienților
                  mulțumiți, răspunde la fiecare recenzie (pozitivă sau
                  negativă)
                </li>
                <li>
                  <strong>Google Posts</strong> — publică actualizări săptămânale
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                NAP Consistency — Nume, Adresă, Telefon
              </h3>
              <p>
                Datele tale de contact (Name, Address, Phone) trebuie să fie{" "}
                <strong>identice</strong> pe toate platformele: site, Google
                Business, Facebook, directoare, citații locale. Inconsistențele
                derutează Google și îți afectează autoritatea locală.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Optimizare pentru Keywords Locale
              </h3>
              <p>
                Folosește combinația <strong>„serviciu + oraș/zonă"</strong>:
                „dentist București Sector 1", „instalator Cluj-Napoca",
                „avocat divorț Timișoara". Creează pagini dedicate pentru
                fiecare locație și conținut local relevant (referințe la
                cartiere, evenimente locale, parteneri locali).
              </p>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>📍 Stat important:</strong> 46% din căutările Google
                  au intenție locală. Dacă ai o firmă fizică și nu ești
                  optimizat local, pierzi jumătate din clienții potențiali —
                  fără să știi că exiști.
                </p>
              </div>
            </section>

            {/* H2 - E-E-A-T */}
            <section id="eeat" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                E-E-A-T Google — Factorul Secret al SEO în 2025
              </h2>
              <p>
                <strong>E-E-A-T Google</strong> este acronimul care reunește
                cei patru piloni de evaluare a calității unui site:{" "}
                <strong>Experience</strong> (experiența directă cu subiectul),{" "}
                <strong>Expertise</strong> (expertiza autorului),{" "}
                <strong>Authoritativeness</strong> (autoritatea în domeniu) și{" "}
                <strong>Trustworthiness</strong> (încrederea pe care o
                inspiri).
              </p>
              <p>
                În 2022 Google a adăugat primul „E" (Experience) pentru a
                premia conținutul scris de oameni care au trăit efectiv ce
                descriu — nu doar de cei care au citit despre subiect. Pentru
                a demonstra E-E-A-T pe site-ul tău:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pagină Despre Noi detaliată cu echipă, istoric, valori</li>
                <li>Autori cu bio scurt și expertiză dovedită</li>
                <li>Studii de caz reale cu cifre și rezultate concrete</li>
                <li>Recenzii și testimoniale verificabile</li>
                <li>Premii, certificări, apariții în presă</li>
                <li>Date de contact complete și vizibile (telefon, adresă, CUI)</li>
              </ul>
              <p>
                <strong>YMYL</strong> (Your Money Your Life) sunt domeniile
                sensibile — sănătate, finanțe, juridic — unde E-E-A-T
                contează cel mai mult. Aici Google este foarte strict cu cine
                clasează în top.
              </p>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>🏆 E-E-A-T nu e un factor tehnic</strong> — e
                  reputația ta digitală. Google vrea să știe că ești un
                  expert de încredere înainte să te urce în rezultate.
                </p>
              </div>
            </section>

            {/* H2 - INSTRUMENTE */}
            <section id="instrumente" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Instrumente SEO Esențiale — Gratuite și Plătite
              </h2>
              <p>
                Pentru un <strong>audit SEO Romania</strong> complet și o
                strategie eficientă, ai nevoie de instrumentele potrivite. Vestea
                bună: începi cu unelte gratuite și treci la cele plătite doar
                când e necesar.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Instrumente Gratuite (Start cu acestea)
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Google Search Console",
                    use: "Monitorizare indexare, poziții, erori tehnice",
                  },
                  {
                    name: "Google Analytics 4",
                    use: "Trafic, comportament utilizatori, conversii",
                  },
                  {
                    name: "Google PageSpeed Insights",
                    use: "Viteză și Core Web Vitals",
                  },
                  {
                    name: "Google Keyword Planner",
                    use: "Cercetare cuvinte cheie",
                  },
                  {
                    name: "Screaming Frog (free)",
                    use: "Audit tehnic site (până la 500 URL-uri)",
                  },
                  {
                    name: "Ubersuggest (free tier)",
                    use: "Keywords și backlink-uri de bază",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="rounded-xl border border-border bg-card p-4 flex gap-3"
                  >
                    <Wrench className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="font-semibold mb-1 break-words">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.use}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Instrumente Plătite (când ești serios)
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Ahrefs</strong> — cel mai complet tool SEO (de la
                  99$/lună)
                </li>
                <li>
                  <strong>Semrush</strong> — all-in-one marketing + SEO (de la
                  119$/lună)
                </li>
                <li>
                  <strong>Moz Pro</strong> — autoritate domeniu și link
                  building
                </li>
                <li>
                  <strong>Surfer SEO</strong> — optimizare conținut bazată pe
                  date
                </li>
              </ul>
              <p>
                Dacă vrei să sari peste curba de învățare și să primești
                direct un{" "}
                <Link
                  to="/seo"
                  title="Audit SEO Gratuit Romania WorxAds"
                  className="text-primary hover:underline"
                >
                  audit SEO profesional
                </Link>{" "}
                bazat pe aceste unelte premium, echipa noastră îl realizează
                gratuit pentru afacerea ta.
              </p>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>💡 Sfat WorxAds:</strong> Începe cu instrumentele
                  gratuite Google — sunt suficiente pentru primele 6 luni.
                  Treci la plătite când SEO devine o prioritate strategică.
                </p>
              </div>
            </section>

            {/* H2 - GRESELI */}
            <section id="greseli" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Greșeli SEO Comune pe Care le Fac Firmele din România
              </h2>
              <p>
                După ani de audituri, am identificat tiparele care se repetă în
                aproape toate site-urile românești neoptimizate. Iată cele mai
                grave greșeli — și cum le eviți.
              </p>

              <ol className="space-y-3 list-none pl-0">
                {[
                  {
                    title: "Conținut duplicat",
                    text: "Aceeași descriere pe mai multe pagini confuzionează Google și diluează autoritatea.",
                  },
                  {
                    title: "Keyword stuffing",
                    text: "Repetarea forțată a cuvintelor cheie penalizează site-ul. Scrie natural pentru oameni.",
                  },
                  {
                    title: "Ignorarea mobile",
                    text: "Peste 65% din traficul românesc vine de pe telefon. Un site non-responsive e invizibil în Google.",
                  },
                  {
                    title: "Viteza ignorată",
                    text: "Un site care se încarcă în 5+ secunde pierde 53% din vizitatori înainte să vadă ceva.",
                  },
                  {
                    title: "Fără Google Search Console",
                    text: "Dacă nu știi cum te vede Google, nu poți îmbunătăți nimic. Este gratuit, instalează-l azi.",
                  },
                  {
                    title: "Backlink-uri cumpărate",
                    text: "Penalizările Google pot scoate site-ul din index complet. Investiția e în conținut, nu în linkuri.",
                  },
                  {
                    title: "Așteptări nerealiste",
                    text: "SEO nu e magie rapidă. Rezultatele vin în 3-6 luni de muncă constantă și consistentă.",
                  },
                  {
                    title: "Optimizare fără strategie",
                    text: "SEO fără cercetare de keywords și fără obiective clare = timp și bani irositi.",
                  },
                ].map((g, i) => (
                  <li
                    key={g.title}
                    className="flex gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <span className="shrink-0 w-9 h-9 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold mb-1 break-words">
                        🚫 {g.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{g.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* H2 - PLAN 90 DE ZILE */}
            <section id="plan-90-zile" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Plan de Acțiune SEO — Ce Faci în Primele 90 de Zile
              </h2>
              <p>
                Un plan concret, lună cu lună, pentru{" "}
                <strong>cum sa optimizezi un site pentru Google</strong>{" "}
                începând de azi. Acesta e exact procesul pe care îl aplicăm
                și noi pentru clienți noi.
              </p>

              <div className="space-y-5">
                {[
                  {
                    month: "LUNA 1 — FUNDAȚIA",
                    items: [
                      "Instalare Google Search Console + GA4",
                      "Audit SEO tehnic complet",
                      "Rezolvare erori critice (viteză, indexare, SSL)",
                      "Cercetare cuvinte cheie principale",
                      "Optimizare meta tags pe toate paginile",
                      "Creare/optimizare Google Business Profile",
                    ],
                  },
                  {
                    month: "LUNA 2 — CONȚINUT & ON-PAGE",
                    items: [
                      "Optimizare on-page pagini principale",
                      "Creare pagini de servicii dedicate (dacă lipsesc)",
                      "Primul articol de blog optimizat SEO",
                      "Internal linking structurat",
                      "Optimizare imagini (alt text, compresie WebP)",
                      "Schema markup implementat",
                    ],
                  },
                  {
                    month: "LUNA 3 — AUTORITATE & LINKURI",
                    items: [
                      "Listare în directoare românești relevante",
                      "Primul guest post pe site de autoritate",
                      "Optimizare Google Business Profile (recenzii, posts)",
                      "Al doilea și al treilea articol de blog",
                      "Monitorizare poziții și ajustare strategie",
                      "Raport complet cu progresul lunilor 1-3",
                    ],
                  },
                ].map((phase) => (
                  <div
                    key={phase.month}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <p className="font-display font-bold text-primary mb-3 break-words">
                      {phase.month}
                    </p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm md:text-base"
                        >
                          <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p>
                Preferi să lași SEO-ul pe mâna experților?{" "}
                <Link
                  to="/seo"
                  title="Agentie SEO Romania WorxAds"
                  className="text-primary hover:underline"
                >
                  Descoperă serviciile noastre SEO complete
                </Link>{" "}
                — de la audit până la top 3 Google, gestionăm fiecare etapă a
                strategiei tale ca o adevărată{" "}
                <strong>agentie SEO Romania</strong>.
              </p>
            </section>

            {/* H2 - SEO VS ADS */}
            <section id="seo-vs-ads" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                SEO vs Google Ads — Ce Alegi pentru Afacerea Ta din România?
              </h2>
              <p>
                O întrebare clasică pentru orice antreprenor român care începe
                în digital. Răspunsul scurt: nu e o alegere între ele, e o
                strategie de combinare. Iată comparația directă pentru{" "}
                <strong>pozitionare Google Romania</strong>:
              </p>

              <div className="-mx-4 sm:mx-0 overflow-x-auto">
                <table className="min-w-[560px] w-full text-sm border border-border rounded-xl overflow-hidden">
                  <thead className="bg-secondary text-secondary-foreground">
                    <tr>
                      <th className="text-left p-3 font-semibold">Criteriu</th>
                      <th className="text-left p-3 font-semibold">SEO</th>
                      <th className="text-left p-3 font-semibold">
                        Google Ads
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Cost per click", "Gratuit", "0.10-5€/click"],
                      ["Timp rezultate", "3-6 luni", "Imediat"],
                      [
                        "Durabilitate",
                        "Permanentă",
                        "Dispare când oprești",
                      ],
                      ["Credibilitate", "Ridicată", "Medie"],
                      ["Scalabilitate", "Medie", "Ridicată rapid"],
                      [
                        "Ideal pentru",
                        "Termen lung",
                        "Campanii punctuale",
                      ],
                      [
                        "Buget lunar",
                        "400-2000€ (agenție)",
                        "500€+ (ads + management)",
                      ],
                    ].map((row) => (
                      <tr key={row[0]} className="border-t border-border">
                        <td className="p-3 font-medium">{row[0]}</td>
                        <td className="p-3 text-muted-foreground">{row[1]}</td>
                        <td className="p-3 text-muted-foreground">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Concluzie:</strong> nu alegi între SEO și Ads — le
                combini strategic. SEO construiește fundația organică pe
                termen lung, iar Google Ads îți aduce trafic imediat și îți
                permite să testezi rapid keywords și mesaje. Află mai multe
                despre{" "}
                <Link
                  to="/marketing-digital"
                  title="Servicii Marketing Digital Romania WorxAds"
                  className="text-primary hover:underline"
                >
                  serviciile noastre de marketing digital
                </Link>
                , inclusiv gestionare completă Google Ads.
              </p>
            </section>

            {/* H2 - CONCLUZIE */}
            <section id="concluzie" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Concluzie — SEO în România în 2025: Investiția care Aduce
                Clienți Non-Stop
              </h2>
              <p>
                Acum ai imaginea completă a celor 3 piloni SEO:{" "}
                <strong>SEO Tehnic</strong> (fundația care permite Google să
                te vadă), <strong>SEO On-Page</strong> (conținutul care
                răspunde exact la ce caută utilizatorii) și{" "}
                <strong>SEO Off-Page</strong> (autoritatea câștigată prin
                backlink-uri de calitate).
              </p>
              <p>
                SEO este un maraton, nu un sprint. Rezultatele apar în 3-6
                luni de muncă constantă, dar odată ce ai ajuns în top, traficul
                curge constant fără să mai plătești per click. Consistența și
                răbdarea sunt cele două calități care diferențiază afacerile
                care reușesc de cele care abandonează prea devreme.
              </p>
              <p>
                De ce merită să investești <strong>acum</strong>, nu mai
                târziu? Pentru că fiecare lună pierdută înseamnă concurenți
                care îți iau locul în Google — iar recuperarea unei poziții
                pierdute durează de două ori mai mult decât câștigarea ei
                inițială.
              </p>
              <p>
                Dacă vrei să sari direct la rezultate și să lași strategia SEO
                pe mâna unor specialiști cu experiență dovedită, echipa
                WorxAds e pregătită să te ajute.{" "}
                <Link
                  to="/seo"
                  title="Agentie SEO Profesionala Romania WorxAds"
                  className="text-primary hover:underline"
                >
                  Descoperă serviciile noastre complete de SEO în România
                </Link>{" "}
                și solicită un audit gratuit — fără obligații, fără costuri
                ascunse.
              </p>

              <div className="rounded-xl border border-border bg-card p-6 mt-6 text-center space-y-3">
                <h3 className="font-display text-xl font-semibold">
                  Vrei să Fii în Top 3 Google?
                </h3>
                <p className="text-muted-foreground">
                  Îți oferim un audit SEO complet gratuit — identificăm
                  problemele și îți spunem exact ce trebuie făcut.
                </p>
                <Link to="/seo">
                  <Button variant="hero" size="lg">
                    Solicită Auditul SEO Gratuit
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground">
                  Fără obligații. Primești raportul în 48 de ore.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Întrebări Frecvente despre SEO în România
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Articole conexe */}
            <section className="space-y-4">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Articole Conexe
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title:
                      "Cum să Faci un Website Profesional în 2025",
                    href: "/blog/cum-sa-faci-un-website-profesional",
                  },
                  {
                    title:
                      "Cum să Faci o Aplicație pentru Telefon în 2025",
                    href: "/blog/cum-sa-faci-o-aplicatie-pentru-telefon",
                  },
                  {
                    title:
                      "Google Ads vs SEO: Ce Alegi pentru Businessul Tău?",
                    href: "/blog",
                  },
                ].map((a) => (
                  <Link
                    key={a.title}
                    to={a.href}
                    className="rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors"
                  >
                    <p className="font-semibold text-sm break-words">
                      {a.title}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-2 text-primary text-sm">
                      Citește <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Author box */}
            <section className="rounded-xl border border-border bg-card p-5 flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-xl shrink-0">
                W
              </div>
              <div className="min-w-0">
                <p className="font-semibold">Echipa WorxAds</p>
                <p className="text-sm text-muted-foreground break-words">
                  Specialiști SEO și marketing digital cu peste 5 ani
                  experiență, 50+ site-uri optimizate și rezultate dovedite
                  pentru firme din România.
                </p>
              </div>
            </section>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* TOC */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  Cuprins
                </h3>
                <nav>
                  <ul className="space-y-2 text-sm">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className={`block py-1 transition-colors border-l-2 pl-3 ${
                            activeSection === s.id
                              ? "border-primary text-foreground font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* CTA Card */}
              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-5 space-y-3">
                <h3 className="font-display text-lg font-semibold">
                  Vrei să Fii în Top 3 Google?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Echipa WorxAds îți oferă un audit SEO gratuit și o strategie
                  personalizată pentru afacerea ta din România.
                </p>
                <Link to="/seo">
                  <Button variant="hero" size="default" className="w-full">
                    Cere Audit SEO Gratuit
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Servicii Conexe */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  Servicii Conexe
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/seo"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      Servicii SEO
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/marketing-digital"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      Marketing Digital
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dezvoltare-website"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      Dezvoltare Website
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
      <StickyCallButton />
    </main>
  );
};

export default BlogSeoRomania;
