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
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const sections = [
  { id: "intro", title: "Introducere" },
  { id: "de-ce-website", title: "De ce ai nevoie de un website" },
  { id: "pasul-1", title: "Pasul 1 — Tipul de website" },
  { id: "pasul-2", title: "Pasul 2 — Platforma potrivită" },
  { id: "pasul-3", title: "Pasul 3 — Domeniu și hosting" },
  { id: "pasul-4", title: "Pasul 4 — Design și UX" },
  { id: "pasul-5", title: "Pasul 5 — Conținut și SEO" },
  { id: "pasul-6", title: "Pasul 6 — Lansare și mentenanță" },
  { id: "costuri", title: "Cât costă un website" },
  { id: "greseli", title: "Greșeli frecvente" },
  { id: "concluzie", title: "Concluzie" },
  { id: "faq", title: "Întrebări frecvente" },
];

const faqs = [
  {
    q: "Cât durează să faci un website profesional?",
    a: "Un website de prezentare durează între 2 și 4 săptămâni, un magazin online între 4 și 8 săptămâni, iar o aplicație web custom poate dura 2-6 luni, în funcție de complexitate. La WorxAds livrăm primul prototip în maxim 7 zile.",
  },
  {
    q: "Pot face singur un website fără cunoștințe tehnice?",
    a: "Da, cu platforme precum WordPress, Wix sau Shopify poți construi un site simplu. Însă pentru un website profesional, optimizat SEO și care convertește vizitatori în clienți, recomandăm o agenție web Romania cu experiență.",
  },
  {
    q: "Cât costă un website profesional în România?",
    a: "Prețul variază între 500€ pentru un website de prezentare simplu și peste 10.000€ pentru un eCommerce complex. Costul mediu pentru un site profesional bine optimizat este între 1.500€ și 3.500€.",
  },
  {
    q: "Am nevoie de hosting separat?",
    a: "Da, orice website are nevoie de hosting Romania sau internațional. Recomandăm hosting cu SSD, certificat SSL inclus și suport în limba română. Costul anual pornește de la 30€.",
  },
  {
    q: "Website-ul trebuie să fie responsive?",
    a: "Absolut. Peste 65% din traficul web în România vine de pe mobil. Un website responsive se adaptează automat oricărui ecran și este obligatoriu pentru optimizare SEO și o experiență bună de utilizare.",
  },
  {
    q: "Cum aleg între WordPress și un site custom?",
    a: "WordPress Romania este perfect pentru bloguri, site-uri de prezentare și magazine mici-medii. Pentru performanță maximă, securitate avansată și funcționalități unice, recomandăm Next.js sau o soluție custom.",
  },
  {
    q: "Ce este SEO și de ce contează?",
    a: "Optimizare SEO înseamnă pregătirea site-ului ca să fie găsit pe Google. Fără SEO, chiar și cel mai frumos website rămâne invizibil pentru clienți. Vezi serviciile noastre SEO pentru detalii.",
  },
  {
    q: "WorxAds oferă mentenanță după lansare?",
    a: "Da. Oferim pachete lunare de mentenanță care includ actualizări, backup-uri, monitorizare uptime, optimizări de viteză și suport tehnic în limba română.",
  },
];

const BlogWebsiteProfesional = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    document.title =
      "Cum să Faci un Website Profesional în 2025 — Ghid Complet | WorxAds";

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
      "Ghid pas cu pas despre cum să faci un website profesional în România. Află tot ce trebuie să știi despre dezvoltare web, costuri și tehnologii. ✓ Sfaturi de la experți WorxAds.";
    const url =
      "https://worxads.com/blog/cum-sa-faci-un-website-profesional";
    const title =
      "Cum să Faci un Website Profesional în 2025 — Ghid Complet | WorxAds";

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
            "Cum să Faci un Website Profesional în 2025 — Ghid Complet pentru Antreprenorii din România",
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
          datePublished: "2025-01-15",
          dateModified: "2026-04-27",
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
              name: "Cum să Faci un Website Profesional",
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

    let ld = document.getElementById("ld-blog-website") as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-blog-website";
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(schema);
  }, []);

  // Active section tracking on scroll
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
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background scroll-smooth overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-2">
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
            <span className="hover:text-foreground transition-colors">Blog</span>
          </li>
          <li>
            <ChevronRight className="w-4 h-4" />
          </li>
          <li className="text-foreground font-medium break-words">
            Cum să Faci un Website Profesional
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="container mx-auto px-4 sm:px-6 pt-6 pb-12">
        <div className="max-w-4xl">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block">
            Blog · Dezvoltare Website
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 break-words hyphens-auto">
            Cum să Faci un Website Profesional în 2025 —{" "}
            <span className="gradient-text">
              Ghid Complet pentru Antreprenorii din România
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
              <Clock className="w-4 h-4" /> 15 min citire
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
                În 2025, prezența online nu mai este opțională — este fundamentul
                oricărei afaceri serioase. Indiferent că ai un cabinet medical, un
                restaurant, un magazin sau o firmă de servicii, clienții te caută
                pe Google înainte să te contacteze. Peste{" "}
                <strong>
                  70% din consumatorii români caută online înainte să cumpere
                </strong>
                , iar dacă afacerea ta nu apare, pur și simplu nu există pentru
                ei.
              </p>
              <p>
                În acest ghid complet îți explicăm pas cu pas{" "}
                <strong>cum sa faci un website</strong> profesional, ce platforme
                să alegi, cât te costă, ce greșeli să eviți și cum să te asiguri
                că site-ul tău aduce efectiv clienți, nu doar vizitatori. Vei
                învăța tot procesul de <strong>creare website profesional Romania</strong>
                , de la idee la lansare.
              </p>
              <p>
                Acest ghid este scris de echipa <strong>WorxAds</strong>, o{" "}
                <strong>agentie web Romania</strong> cu peste 5 ani de experiență
                în <strong>dezvoltare website</strong> pentru firme din București
                și din toată țara. Toate sfaturile pe care le vei citi sunt
                rezultatul a sute de proiecte livrate cu succes.
              </p>
            </div>

            {/* H2 - DE CE */}
            <section id="de-ce-website" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                De Ce Are Afacerea Ta Nevoie de un Website Profesional
              </h2>
              <p>
                Un <strong>website profesional Romania</strong> este mai mult
                decât o carte de vizită digitală — este un instrument de vânzări
                care lucrează 24/7. Iată principalele motive pentru care orice
                afacere serioasă are nevoie de un site bine construit:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Credibilitate și prima impresie digitală</strong> — 75%
                  din utilizatori judecă credibilitatea unei firme după
                  aspectul site-ului.
                </li>
                <li>
                  <strong>Disponibil 24/7</strong> — spre deosebire de un
                  magazin fizic, un website vinde și informează inclusiv noaptea
                  sau în weekend.
                </li>
                <li>
                  <strong>Costuri mai mici</strong> decât publicitatea
                  tradițională (TV, radio, print) cu un ROI mult mai bun.
                </li>
                <li>
                  <strong>Control total asupra brandului</strong> — spre
                  deosebire de paginile de social media, site-ul tău îți
                  aparține 100%.
                </li>
                <li>
                  <strong>Bază pentru marketing digital</strong> — fără un
                  website, campaniile Google Ads, Facebook Ads sau{" "}
                  <strong>optimizare SEO</strong> nu pot funcționa eficient.
                </li>
              </ul>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>💡 Sfat WorxAds:</strong> Un website profesional nu
                  este o cheltuială — este o investiție care lucrează pentru
                  tine non-stop. Bine construit, se amortizează în primele 3-6
                  luni prin clienții pe care îi aduce.
                </p>
              </div>
            </section>

            {/* H2 - PASUL 1 */}
            <section id="pasul-1" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 1 — Alege Tipul de Website Potrivit pentru Afacerea Ta
              </h2>
              <p>
                Înainte să te gândești la design sau platformă, trebuie să
                stabilești ce tip de site se potrivește obiectivelor tale. Iată
                principalele opțiuni:
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Website de Prezentare
              </h3>
              <p>
                Un <strong>website de prezentare</strong> este cel mai comun tip
                de site pentru firme de servicii: clinici, avocați,
                consultanți, agenții imobiliare, constructori. Conține de obicei
                pagini precum: Acasă, Despre noi, Servicii, Portofoliu, Contact.
                Este ideal pentru a câștiga încredere și a genera lead-uri.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Magazin Online (eCommerce)
              </h3>
              <p>
                Dacă vinzi produse fizice sau digitale, ai nevoie de un magazin
                online. Acesta include catalog de produse, coș, checkout,
                integrări cu curieri și sisteme de plată. Este mai complex, dar
                și mai profitabil.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Landing Page
              </h3>
              <p>
                Un landing page este o pagină unică, optimizată pentru conversii.
                Se folosește în special în campanii de Google Ads sau Facebook
                Ads pentru a transforma vizitatorii în lead-uri sau cumpărători.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Aplicație Web Custom
              </h3>
              <p>
                Pentru platforme SaaS, marketplace-uri, dashboard-uri sau
                aplicații complexe ai nevoie de o aplicație web custom.
                Acestea sunt construite de la zero pe baza nevoilor unice ale
                afacerii tale.
              </p>

              <div className="-mx-4 sm:mx-0 overflow-x-auto sm:rounded-xl sm:border sm:border-border">
                <table className="w-full text-xs sm:text-sm min-w-[480px]">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">Tip Website</th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">Ideal pentru</th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">Complexitate</th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">Cost estimativ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-2 sm:p-3">Website prezentare</td>
                      <td className="p-2 sm:p-3">Firme servicii</td>
                      <td className="p-2 sm:p-3">Medie</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">500-3.000€</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">eCommerce</td>
                      <td className="p-2 sm:p-3">Magazine online</td>
                      <td className="p-2 sm:p-3">Ridicată</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">2.000-10.000€</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Landing Page</td>
                      <td className="p-2 sm:p-3">Campanii marketing</td>
                      <td className="p-2 sm:p-3">Scăzută</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">300-1.500€</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Custom Web App</td>
                      <td className="p-2 sm:p-3">Platforme, SaaS</td>
                      <td className="p-2 sm:p-3">Foarte ridicată</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">5.000€+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2 - PASUL 2 */}
            <section id="pasul-2" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 2 — Alege Platforma Potrivită
              </h2>
              <p>
                Există zeci de <strong>platforme pentru website</strong>, dar
                doar câteva merită considerate cu adevărat. Iată cele mai
                potrivite pentru piața din România:
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                WordPress — Cel Mai Popular CMS din Lume
              </h3>
              <p>
                <strong>WordPress Romania</strong> alimentează peste 43% din
                site-urile globale. Este flexibil, are mii de teme și plugin-uri
                și este ideal pentru bloguri, site-uri de prezentare și magazine
                mici-medii (cu WooCommerce). Avantaje: ușor de actualizat,
                comunitate uriașă, costuri mici. Dezavantaje: necesită
                mentenanță regulată și poate fi vulnerabil dacă nu este
                securizat corect.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Shopify — Pentru Magazine Online
              </h3>
              <p>
                Shopify este standardul global pentru eCommerce. Platforma
                gestionează totul (hosting, securitate, plăți), dar percepe un
                abonament lunar și comisioane pe tranzacții. Ideal pentru
                magazine pure care vor să se concentreze pe vânzări, nu pe
                tehnologie.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Next.js / React — Pentru Performanță Maximă
              </h3>
              <p>
                Pentru proiecte custom unde performanța, securitatea și SEO-ul
                contează la maxim, recomandăm Next.js sau React. Aceste
                tehnologii oferă viteza unei aplicații native, scor Core Web
                Vitals perfect și flexibilitate totală. Este alegerea noastră
                preferată pentru clienții care vor un{" "}
                <strong>website profesional Romania</strong> de top.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Wix / Squarespace — DIY dar cu Limite
              </h3>
              <p>
                Aceste platforme sunt OK pentru un proiect personal sau un
                site temporar, dar au limite serioase: SEO slab, performanță
                slabă, control redus și costuri pe termen lung surprinzător de
                mari. Le evităm pentru clienți serioși.
              </p>
            </section>

            {/* H2 - PASUL 3 */}
            <section id="pasul-3" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 3 — Alege Domeniul și Hosting-ul
              </h2>
              <p>
                Orice site are nevoie de un <strong>domeniu web</strong> (adresa
                pe care o tastează utilizatorii) și un{" "}
                <strong>hosting Romania</strong> sau internațional (serverul pe
                care rulează site-ul).
              </p>
              <p>
                <strong>Sfaturi pentru alegerea domeniului:</strong> alege un
                nume scurt, ușor de memorat și de pronunțat în română. Extensia{" "}
                <code>.ro</code> este preferată pentru afaceri locale, dar{" "}
                <code>.com</code> rămâne standardul global. Verifică să nu fie
                o marcă înregistrată și încearcă să incluzi un cuvânt cheie
                relevant dacă este natural.
              </p>
              <p>
                <strong>Sfaturi pentru hosting:</strong> alege un furnizor cu
                SSD-uri rapide, certificat SSL gratuit (HTTPS), backup-uri
                automate zilnice și suport tehnic în limba română. Evită
                hosting-urile foarte ieftine de tip „shared” aglomerate, pentru
                că vor încetini site-ul tău și îți vor afecta SEO-ul.
              </p>
            </section>

            {/* H2 - PASUL 4 */}
            <section id="pasul-4" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 4 — Design și Experiența Utilizatorului
              </h2>
              <p>
                Un <strong>design website</strong> bun nu înseamnă doar
                „arată frumos” — înseamnă că ghidează utilizatorul către
                acțiunea pe care vrei să o facă (cumpărare, formular, telefon).
                Iată principiile de bază pentru un design eficient:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Mobile-first</strong> — site-ul trebuie să arate
                  perfect pe telefon, pentru că acolo vine majoritatea
                  traficului. Un <strong>website responsive</strong> nu mai
                  este opțional.
                </li>
                <li>
                  <strong>Ierarhie vizuală clară</strong> — utilizatorul trebuie
                  să înțeleagă în 3 secunde ce faci și ce trebuie să facă el.
                </li>
                <li>
                  <strong>CTA vizibil</strong> — butoane de tip „Cere ofertă”,
                  „Sună acum”, „Cumpără” trebuie să fie evidente și prezente
                  pe fiecare pagină.
                </li>
                <li>
                  <strong>Brand consistent</strong> — culori, fonturi și
                  imagini coerente cu identitatea afacerii tale.
                </li>
                <li>
                  <strong>Accesibilitate</strong> — contraste bune, text
                  lizibil, alternative pentru imagini.
                </li>
              </ul>
              <p>
                Vezi serviciile noastre de{" "}
                <Link to="/dezvoltare-website" className="text-primary hover:underline">
                  dezvoltare website
                </Link>{" "}
                pentru a vedea exemple concrete și pachetele disponibile.
              </p>
            </section>

            {/* H2 - PASUL 5 */}
            <section id="pasul-5" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 5 — Conținut și Optimizare SEO
              </h2>
              <p>
                Cel mai frumos website rămâne invizibil dacă nu este optimizat
                pentru Google. <strong>Optimizare SEO</strong> trebuie făcută
                de la început, nu adăugată după lansare. Iată elementele
                esențiale:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cercetare cuvinte cheie</strong> — identifică ce
                  caută clienții tăi pe Google.
                </li>
                <li>
                  <strong>Conținut de calitate</strong> — texte lungi, utile,
                  scrise pentru oameni, nu pentru roboți.
                </li>
                <li>
                  <strong>Meta titluri și descrieri</strong> optimizate pentru
                  fiecare pagină.
                </li>
                <li>
                  <strong>Viteza website</strong> — Google penalizează
                  site-urile lente. Optimizează imagini, folosește lazy loading
                  și un hosting bun.
                </li>
                <li>
                  <strong>Structură internă de linkuri</strong> și URL-uri
                  prietenoase.
                </li>
                <li>
                  <strong>Schema markup</strong> și breadcrumb-uri pentru
                  rezultate îmbogățite.
                </li>
              </ul>
              <p>
                Pentru rezultate serioase, recomandăm să apelezi la specialiștii
                noștri de la pagina{" "}
                <Link to="/seo" className="text-primary hover:underline">
                  SEO
                </Link>
                . Combinat cu o strategie de{" "}
                <Link to="/marketing-digital" className="text-primary hover:underline">
                  marketing digital
                </Link>
                , vei vedea creșteri reale de trafic și vânzări.
              </p>
            </section>

            {/* H2 - PASUL 6 */}
            <section id="pasul-6" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 6 — Lansare, Testare și Mentenanță
              </h2>
              <p>
                Înainte de lansare, testează totul: formulare, butoane, link-uri,
                viteză pe mobil, compatibilitate cu browsere diferite. După
                lansare, instalează Google Analytics 4 și Google Search Console
                pentru a urmări traficul și problemele de indexare.
              </p>
              <p>
                Mentenanța nu este opțională. Un site WordPress neactualizat
                poate fi spart în câteva săptămâni. Asigură-te că ai backup-uri
                regulate, actualizări de securitate și monitorizare uptime.
                WorxAds oferă pachete lunare de mentenanță care țin site-ul tău
                rapid, sigur și mereu funcțional.
              </p>
            </section>

            {/* H2 - COSTURI */}
            <section id="costuri" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Cât Costă un Website Profesional în România?
              </h2>
              <p>
                Întrebarea „<strong>cat costa un website</strong>” nu are un
                răspuns unic — depinde de complexitate, design, funcționalități
                și platformă. Iată o estimare realistă pentru piața din România:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Website prezentare simplu:</strong> 500€ - 1.500€
                </li>
                <li>
                  <strong>Website prezentare premium:</strong> 1.500€ - 3.500€
                </li>
                <li>
                  <strong>Magazin online mic-mediu:</strong> 2.000€ - 6.000€
                </li>
                <li>
                  <strong>Magazin online mare / custom:</strong> 6.000€ -
                  15.000€+
                </li>
                <li>
                  <strong>Aplicație web custom:</strong> de la 5.000€, fără
                  limită superioară
                </li>
              </ul>
              <p>
                La acestea se adaugă costurile recurente: domeniu (10-20€/an),
                hosting (60-300€/an), mentenanță (50-200€/lună) și opțional SEO
                (300-1.500€/lună).
              </p>
              <p>
                Atenție la „ofertele de 200€” — adesea ascund template-uri
                generice, fără SEO, fără mentenanță și care te vor costa de 3
                ori mai mult în remediere. Vezi pachetele noastre transparente
                pe pagina de{" "}
                <Link to="/dezvoltare-website" className="text-primary hover:underline">
                  dezvoltare website-uri
                </Link>
                .
              </p>
            </section>

            {/* H2 - GREȘELI */}
            <section id="greseli" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Greșeli Frecvente în Crearea unui Website
              </h2>
              <p>
                Dacă vrei să înveți <strong>cum sa creezi un site web</strong>{" "}
                bun, învață din greșelile altora:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Design copiat după șabloane gratuite</strong> — un
                    site care arată la fel ca alte 1000 nu te diferențiază.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Lipsă SEO de la început</strong> — adăugarea SEO
                    după lansare costă de 3 ori mai mult.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Imagini neoptimizate</strong> care încarcă site-ul
                    și îl încetinesc pe mobil.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Lipsă CTA clar</strong> — utilizatorul nu știe ce
                    să facă pe site.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Fără mentenanță</strong> — riscuri de securitate și
                    site-uri sparte.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Texte scrise „pentru că trebuie”</strong> — fără
                    valoare, fără cuvinte cheie, fără persuasiune.
                  </span>
                </li>
              </ul>
            </section>

            {/* H2 - CONCLUZIE */}
            <section id="concluzie" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Concluzie — Investește în Website-ul Afacerii Tale
              </h2>
              <p>
                Un <strong>website profesional Romania</strong> este una dintre
                cele mai bune investiții pe care le poți face în 2025. Bine
                construit, va aduce clienți noi luni, ani de zile, fără efort
                suplimentar din partea ta.
              </p>
              <p>
                Cheia este să nu economisești pe lucruri esențiale: design,
                SEO, viteză și mentenanță. O agenție serioasă de{" "}
                <strong>dezvoltare website</strong> îți va explica clar ce
                primești, cât costă și ce rezultate poți aștepta.
              </p>
              <p>
                Dacă vrei un website care chiar aduce clienți — nu doar arată
                bine — echipa <strong>WorxAds</strong> îți stă la dispoziție.
                Cere o ofertă gratuită și vezi cum te putem ajuta.
              </p>
              <div className="rounded-xl border border-border bg-card p-6 mt-6 text-center space-y-3">
                <h3 className="font-display text-xl font-semibold">
                  Ești gata să-ți construiești website-ul?
                </h3>
                <p className="text-muted-foreground">
                  Discută cu un specialist WorxAds și primește o ofertă
                  personalizată în 24h.
                </p>
                <Link to="/dezvoltare-website">
                  <Button variant="hero" size="lg">
                    Cere ofertă gratuită
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Întrebări Frecvente despre Crearea unui Website
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
                  Vrei un Website Profesional?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Echipa WorxAds îți construiește site-ul de la zero, optimizat
                  SEO și gata să aducă clienți.
                </p>
                <Link to="/dezvoltare-website">
                  <Button variant="hero" size="default" className="w-full">
                    Cere ofertă gratuită
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
                      to="/dezvoltare-website"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      Dezvoltare Website-uri
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/seo"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      SEO
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
                      to="/aplicatii-mobile"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      Aplicații Mobile
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

export default BlogWebsiteProfesional;
