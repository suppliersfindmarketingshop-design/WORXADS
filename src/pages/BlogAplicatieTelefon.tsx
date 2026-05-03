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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const sections = [
  { id: "intro", title: "Introducere" },
  { id: "de-ce-aplicatie", title: "De ce ai nevoie de o aplicație" },
  { id: "pasul-1", title: "Pasul 1 — Definește ideea" },
  { id: "pasul-2", title: "Pasul 2 — Cercetare de piață" },
  { id: "pasul-3", title: "Pasul 3 — Nativ vs Cross-Platform vs PWA" },
  { id: "pasul-4", title: "Pasul 4 — UX & UI Design" },
  { id: "pasul-5", title: "Pasul 5 — Dezvoltarea tehnică" },
  { id: "pasul-6", title: "Pasul 6 — Testarea aplicației" },
  { id: "pasul-7", title: "Pasul 7 — Lansare în App Store & Google Play" },
  { id: "pasul-8", title: "Pasul 8 — Monetizare" },
  { id: "costuri", title: "Cât costă o aplicație mobilă" },
  { id: "checklist", title: "Checklist complet" },
  { id: "greseli", title: "Greșeli comune" },
  { id: "concluzie", title: "Concluzie" },
  { id: "faq", title: "Întrebări frecvente" },
];

const faqs = [
  {
    q: "Cât durează să dezvolți o aplicație mobilă?",
    a: "Un MVP simplu poate fi gata în 6-8 săptămâni. O aplicație de complexitate medie durează 3-4 luni, iar una complexă cu backend custom poate ajunge la 6-12 luni. Totul depinde de funcționalități și de complexitatea tehnică.",
  },
  {
    q: "Am nevoie de aplicație separată pentru iOS și Android?",
    a: "Nu neapărat. Folosind React Native sau Flutter, putem dezvolta o singură bază de cod care rulează pe ambele platforme, reducând costurile cu 30-40% față de dezvoltarea nativă separată.",
  },
  {
    q: "Pot actualiza singur conținutul din aplicație?",
    a: "Da, livrăm aplicațiile cu un panou de administrare (CMS) web prin care poți actualiza conținut, produse, prețuri și alte informații fără cunoștințe tehnice.",
  },
  {
    q: "Ce se întâmplă dacă Apple sau Google respinge aplicația?",
    a: "Respingerile sunt normale, mai ales pentru prima submisie. Echipa noastră cunoaște guidelines-urile ambelor platforme și rezolvăm rapid orice problemă de conformitate.",
  },
  {
    q: "Am nevoie de un server/backend pentru aplicația mea?",
    a: "Depinde de funcționalitățile aplicației. O aplicație simplă poate folosi Firebase fără backend propriu. Aplicațiile mai complexe (eCommerce, platforme) necesită un backend dedicat pe care îl dezvoltăm integral.",
  },
  {
    q: "Cum promovez aplicația după lansare?",
    a: "Strategia de promovare include: ASO (optimizare în store-uri), campanii Google UAC și Meta Ads, PR și content marketing, influencer marketing și email marketing către baza existentă de clienți.",
  },
  {
    q: "Oferiți suport și update-uri după lansare?",
    a: "Da, oferim pachete de mentenanță lunară care includ monitorizare, update-uri de compatibilitate cu noile versiuni iOS și Android, fix-uri de bug-uri și îmbunătățiri continue.",
  },
  {
    q: "Cât costă o aplicație mobilă în România?",
    a: "Un MVP simplu pornește de la 3.000€, o aplicație business medie costă între 8.000€ și 25.000€, iar o platformă complexă poate depăși 40.000€. Prețul depinde de funcționalități, design custom și backend.",
  },
];

const BlogAplicatieTelefon = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    document.title =
      "Cum să Faci o Aplicație pentru Telefon în 2025 — Ghid Complet | WorxAds";

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
      "Ghid complet despre cum să faci o aplicație pentru telefon în România. Costuri, tehnologii, pași și sfaturi de la experții WorxAds. ✓ Citește acum!";
    const url =
      "https://worxads.com/blog/cum-sa-faci-o-aplicatie-pentru-telefon";
    const title =
      "Cum să Faci o Aplicație pentru Telefon în 2025 — Ghid Complet | WorxAds";

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
            "Cum să Faci o Aplicație pentru Telefon în 2025 — Ghid Complet pentru Antreprenorii din România",
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
          datePublished: "2025-02-10",
          dateModified: "2026-04-29",
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
              name: "Cum să Faci o Aplicație pentru Telefon",
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
      "ld-blog-aplicatie-telefon"
    ) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-blog-aplicatie-telefon";
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
            <Link
              to="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4" />
          </li>
          <li className="text-foreground font-medium break-words">
            Cum să Faci o Aplicație pentru Telefon
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="container mx-auto px-4 sm:px-6 pt-6 pb-12">
        <div className="max-w-4xl">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block">
            Blog · Aplicații Mobile
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 break-words hyphens-auto">
            Cum să Faci o Aplicație pentru Telefon în 2025 —{" "}
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
              <Clock className="w-4 h-4" /> 14 min citire
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
                În 2025, telefonul mobil este principalul ecran prin care
                clienții descoperă și interacționează cu afacerile.{" "}
                <strong>
                  Peste 90% din timpul petrecut pe telefon e în aplicații
                </strong>
                , nu în browser — iar acest comportament schimbă regulile
                jocului pentru orice antreprenor care vrea să rămână relevant.
              </p>
              <p>
                În prezent există{" "}
                <strong>
                  peste 5 milioane de aplicații disponibile în App Store și
                  Google Play
                </strong>
                , însă majoritatea afacerilor românești nu au încă o aplicație
                proprie. Asta înseamnă o oportunitate uriașă pentru cei care se
                mișcă rapid. Dacă te întrebi{" "}
                <strong>cum sa faci o aplicatie pentru telefon</strong> care să
                aducă rezultate reale, ești în locul potrivit.
              </p>
              <p>
                În acest ghid complet vei învăța pas cu pas tot procesul de{" "}
                <strong>creare aplicatie mobila</strong>: de la validarea ideii
                și alegerea tehnologiei, la design, dezvoltare, testare, lansare
                în store-uri și monetizare. Ghid scris de echipa{" "}
                <strong>WorxAds</strong>, cu experiență concretă în{" "}
                <strong>dezvoltare aplicatie mobila Romania</strong> pentru
                startup-uri, PMM-uri și companii mari.
              </p>
            </div>

            {/* H2 - DE CE */}
            <section id="de-ce-aplicatie" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                De Ce Ar Trebui Afacerea Ta să Aibă o Aplicație Mobilă
              </h2>
              <p>
                O aplicație mobilă nu mai este un lux rezervat marilor branduri
                — este un canal de business autonom care lucrează 24/7 pe
                telefonul fiecărui client. Iată motivele pentru care merită
                investiția:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Acces direct la clienți prin notificări push</strong>{" "}
                  — comunici instant, fără să depinzi de algoritmii Facebook sau
                  costurile email marketing.
                </li>
                <li>
                  <strong>Experiență superioară față de un site mobil</strong> —
                  viteză nativă, gesturi naturale, integrare cu camera, GPS sau
                  biometrie.
                </li>
                <li>
                  <strong>
                    Loialitatea clienților crește cu peste 25%
                  </strong>{" "}
                  prin programe de fidelitate, recompense și conținut
                  personalizat.
                </li>
                <li>
                  <strong>Vânzări și comenzi direct din aplicație</strong> —
                  checkout în 2 tap-uri, plăți salvate, comenzi recurente.
                </li>
                <li>
                  <strong>Date valoroase despre comportament</strong> — afli ce
                  caută utilizatorii, unde se blochează și ce funcții le plac.
                </li>
                <li>
                  <strong>Avantaj competitiv</strong> — în România, în multe
                  industrii ești primul care lansezi o aplicație serioasă.
                </li>
                <li>
                  <strong>Disponibil parțial offline</strong> — clienții îți
                  folosesc aplicația și fără semnal stabil.
                </li>
              </ul>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>💡 Sfat WorxAds:</strong> O aplicație mobilă nu e
                  doar un moft — e un canal direct către buzunarul clientului
                  tău, disponibil 24/7. O iconiță pe ecranul de start valorează
                  mai mult decât 100 de reclame uitate.
                </p>
              </div>
            </section>

            {/* H2 - PASUL 1 */}
            <section id="pasul-1" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 1 — Definește Ideea și Scopul Aplicației Tale
              </h2>
              <p>
                Înainte să cauți un developer sau să compari prețuri, trebuie
                să ai o claritate brutală asupra a ceea ce vrei să construiești.
                Cele mai multe proiecte eșuează nu din cauze tehnice, ci pentru
                că ideea inițială a fost vagă.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Întrebările pe Care Trebuie să ți le Pui Înainte de Orice
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ce problemă concretă rezolvă aplicația ta?</li>
                <li>Cine este utilizatorul țintă (vârstă, oraș, obicei)?</li>
                <li>
                  Ce face aplicația mai bine decât alternativele existente?
                </li>
                <li>
                  Cum vei câștiga bani din aplicație (model de monetizare)?
                </li>
                <li>
                  Ce funcționalități sunt esențiale pentru lansare vs
                  nice-to-have pentru viitor?
                </li>
              </ul>
              <p>
                Dacă nu poți răspunde clar la toate cele 5 întrebări, încă nu
                ești pregătit pentru dezvoltare. Petrece o săptămână discutând
                cu potențiali utilizatori înainte să investești un euro în cod.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Tipuri de Aplicații Mobile
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>eCommerce</strong> — comenzi, plăți, livrări, programe
                  de loialitate.
                </li>
                <li>
                  <strong>Servicii & Booking</strong> — programări, rezervări,
                  agendă online.
                </li>
                <li>
                  <strong>Social & Community</strong> — rețele de utilizatori,
                  feed, mesagerie.
                </li>
                <li>
                  <strong>Productivitate & Tools</strong> — aplicații interne
                  pentru firme, automatizări.
                </li>
                <li>
                  <strong>Entertainment & Gaming</strong> — jocuri, streaming,
                  conținut media.
                </li>
                <li>
                  <strong>Health & Fitness</strong> — antrenamente, dietă,
                  monitorizare medicală.
                </li>
              </ul>

              <div className="-mx-4 sm:mx-0 overflow-x-auto sm:rounded-xl sm:border sm:border-border">
                <table className="w-full text-xs sm:text-sm min-w-[480px]">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Tip Aplicație
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Exemple
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Complexitate
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Cost estimativ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-2 sm:p-3">eCommerce</td>
                      <td className="p-2 sm:p-3">Magazin online</td>
                      <td className="p-2 sm:p-3">Ridicată</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">
                        5.000-20.000€
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Booking/Servicii</td>
                      <td className="p-2 sm:p-3">Programări, rezervări</td>
                      <td className="p-2 sm:p-3">Medie</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">
                        3.000-12.000€
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Social/Community</td>
                      <td className="p-2 sm:p-3">Rețea utilizatori</td>
                      <td className="p-2 sm:p-3">Foarte ridicată</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">15.000€+</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Productivitate</td>
                      <td className="p-2 sm:p-3">Tool intern firmă</td>
                      <td className="p-2 sm:p-3">Medie</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">
                        4.000-15.000€
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Health & Fitness</td>
                      <td className="p-2 sm:p-3">Antrenamente, dietă</td>
                      <td className="p-2 sm:p-3">Medie</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">
                        5.000-18.000€
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2 - PASUL 2 */}
            <section id="pasul-2" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 2 — Cercetare de Piață și Analiza Competiției
              </h2>
              <p>
                O idee bună nu garantează succes — execuția și înțelegerea
                pieței fac diferența. Cercetarea te ajută să eviți greșeli
                costisitoare și să identifici exact unde poți câștiga.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Cum Analizezi Concurența
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Descarcă și testează personal toate aplicațiile similare din
                  România și internațional.
                </li>
                <li>
                  Citește cele mai negative recenzii — acolo afli ce nu fac
                  competitorii și ce frustrează utilizatorii.
                </li>
                <li>
                  Analizează funcționalitățile, UI-ul, prețurile și modelul de
                  monetizare.
                </li>
                <li>
                  Identifică golurile din piață pe care aplicația ta le poate
                  umple mai bine.
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Validarea Ideii Înainte să Investești
              </h3>
              <p>
                Conceptul de <strong>MVP (Minimum Viable Product)</strong>{" "}
                înseamnă să lansezi cea mai simplă versiune funcțională a
                aplicației tale, doar cu funcțiile esențiale. În loc să
                investești 30.000€ într-o aplicație completă, construiești un
                MVP cu 5.000-8.000€ și validezi rapid dacă piața vrea cu
                adevărat produsul tău.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Testează ideea cu un grup mic de 20-50 utilizatori reali.
                </li>
                <li>
                  Construiește un landing page de validare cu formular de
                  interes și măsoară conversia.
                </li>
                <li>
                  Creează un feedback loop clar: lansare → feedback → ajustare →
                  lansare.
                </li>
              </ul>

              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>⚠️ Greșeala #1 a antreprenorilor:</strong> să
                  construiască o aplicație completă, cu zeci de funcții, fără
                  să valideze ideea mai întâi. Începe cu un MVP, validează,
                  apoi scalează.
                </p>
              </div>
            </section>

            {/* H2 - PASUL 3 */}
            <section id="pasul-3" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 3 — Alege Tipul de Aplicație: Nativă, Cross-Platform sau
                PWA?
              </h2>
              <p>
                Una dintre cele mai importante decizii tehnice este să alegi
                între aplicație nativă, cross-platform sau PWA. Discuția{" "}
                <strong>aplicatie nativa vs cross-platform</strong> are
                implicații directe asupra costului, timpului și performanței.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Aplicații Native iOS și Android
              </h3>
              <p>
                Sunt scrise în <strong>Swift</strong> (iOS) sau{" "}
                <strong>Kotlin</strong> (Android). Oferă performanță maximă și
                acces complet la hardware (cameră, senzori, NFC, AR/VR). Costul
                este însă dublu — practic dezvolți două aplicații separate,
                fiecare cu echipa și ciclul ei. Ideal când performanța e
                critică: gaming, AR/VR, aplicații foto/video avansate.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Aplicații Cross-Platform (React Native / Flutter)
              </h3>
              <p>
                <strong>React Native Romania</strong> și{" "}
                <strong>Flutter aplicatie</strong> sunt cele mai populare
                soluții cross-platform. Scrii o singură bază de cod care rulează
                pe iOS și Android, obținând 70-80% din performanța nativă cu un
                cost cu 30-40% mai mic. Ideal pentru majoritatea aplicațiilor
                business: eCommerce, booking, productivitate, fitness.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Progressive Web Apps (PWA)
              </h3>
              <p>
                Un PWA este un site web care se comportă ca o aplicație: se
                poate „instala” pe ecranul de start, funcționează offline și
                trimite notificări. Avantaj: nu necesită App Store, lansare
                rapidă, cost mic. Limitări: acces redus la funcții hardware,
                fără prezență în store-uri. Ideal pentru bugete mici sau pentru
                a testa rapid o idee.
              </p>

              <div className="-mx-4 sm:mx-0 overflow-x-auto sm:rounded-xl sm:border sm:border-border">
                <table className="w-full text-xs sm:text-sm min-w-[520px]">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Criteriu
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Nativ
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Cross-Platform
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        PWA
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-2 sm:p-3">Performanță</td>
                      <td className="p-2 sm:p-3">⭐⭐⭐⭐⭐</td>
                      <td className="p-2 sm:p-3">⭐⭐⭐⭐</td>
                      <td className="p-2 sm:p-3">⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Cost</td>
                      <td className="p-2 sm:p-3">💰💰💰💰</td>
                      <td className="p-2 sm:p-3">💰💰💰</td>
                      <td className="p-2 sm:p-3">💰💰</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Timp dezvoltare</td>
                      <td className="p-2 sm:p-3">Lung</td>
                      <td className="p-2 sm:p-3">Mediu</td>
                      <td className="p-2 sm:p-3">Scurt</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Acces hardware</td>
                      <td className="p-2 sm:p-3">Complet</td>
                      <td className="p-2 sm:p-3">Aproape complet</td>
                      <td className="p-2 sm:p-3">Limitat</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">App Store</td>
                      <td className="p-2 sm:p-3">✅</td>
                      <td className="p-2 sm:p-3">✅</td>
                      <td className="p-2 sm:p-3">❌</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Ideal pentru</td>
                      <td className="p-2 sm:p-3">Gaming, AR</td>
                      <td className="p-2 sm:p-3">Business apps</td>
                      <td className="p-2 sm:p-3">Bugete mici</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>💡 Recomandarea WorxAds:</strong> Pentru 90% din
                  aplicațiile de business din România, React Native sau
                  Flutter oferă cel mai bun raport calitate-preț-performanță.
                  Lansezi pe iOS și Android simultan, cu un singur buget.
                </p>
              </div>
            </section>

            {/* H2 - PASUL 4 */}
            <section id="pasul-4" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 4 — UX & UI Design: Experiența Care Fidelizează
                Utilizatorii
              </h2>
              <p>
                Designul nu este doar despre cum arată aplicația, ci despre cum
                se simte utilizatorul folosind-o. Un{" "}
                <strong>UX design aplicatie</strong> bun este invizibil — totul
                pare natural, ușor și plăcut.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Ce Este UX Design și De Ce E Esențial
              </h3>
              <p>
                UX (User Experience) reprezintă întreaga experiență a
                utilizatorului: cum navighează, cât de repede înțelege ce poate
                face, cât de intuitive sunt acțiunile. Un onboarding bun face
                ca utilizatorul să înțeleagă valoarea aplicației în primele 30
                de secunde — altfel, închide și uită.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                UI Design — Interfața Care Impresionează
              </h3>
              <p>
                UI (User Interface) reprezintă partea vizuală: culori, fonturi,
                iconițe, spacing, animații. Un UI bun respectă{" "}
                <strong>Human Interface Guidelines</strong> de la Apple și{" "}
                <strong>Material Design</strong> de la Google, are consistență
                vizuală și un design system clar — componente refolosibile care
                se comportă la fel în toată aplicația.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Wireframing și Prototipare
              </h3>
              <p>
                Înainte de o singură linie de cod, un designer creează:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Wireframes</strong> — schițe alb-negru ale fiecărui
                  ecran, focalizate pe structură și flow.
                </li>
                <li>
                  <strong>Prototip clickabil în Figma</strong> — pe care îl
                  poți „folosi” ca pe o aplicație reală.
                </li>
                <li>
                  <strong>Testare cu utilizatori reali</strong> — înainte să
                  investești în dezvoltare.
                </li>
              </ul>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>🎨 Stat important:</strong> Utilizatorii dezinstalează
                  o aplicație în primele 3 minute dacă interfața e greu de
                  înțeles. Investiția în UX se amortizează rapid prin retenție
                  și recenzii pozitive.
                </p>
              </div>
            </section>

            {/* H2 - PASUL 5 */}
            <section id="pasul-5" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 5 — Dezvoltarea Tehnică a Aplicației
              </h2>
              <p>
                După design vine partea de cod. O <strong>creare aplicatie mobila</strong>{" "}
                profesională implică mai multe componente tehnice care lucrează
                împreună pentru a livra o experiență fluentă.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Arhitectura Aplicației Mobile
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Frontend</strong> — partea pe care o vede și
                  interacționează utilizatorul (ecranele aplicației).
                </li>
                <li>
                  <strong>Backend aplicatie mobila</strong> — serverul și baza
                  de date, unde sunt stocate informațiile.
                </li>
                <li>
                  <strong>API</strong> — „limba” prin care frontend-ul vorbește
                  cu backend-ul.
                </li>
                <li>
                  <strong>Cloud & Infrastructure</strong> — AWS, Google Cloud
                  sau <strong>Firebase aplicatie</strong>, pentru găzduire
                  scalabilă.
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Tehnologii Recomandate în 2025
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>React Native</strong> — JavaScript, comunitate uriașă,
                  reutilizare cod cu web.
                </li>
                <li>
                  <strong>Flutter</strong> — Dart, performanță excelentă,
                  animații fluide.
                </li>
                <li>
                  <strong>Firebase</strong> — backend rapid pentru MVP-uri
                  (auth, database, push, hosting).
                </li>
                <li>
                  <strong>Node.js / Python</strong> — backend scalabil pentru
                  aplicații complexe.
                </li>
                <li>
                  <strong>PostgreSQL / MongoDB</strong> — baze de date moderne,
                  performante.
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Funcționalități Comune pe Care le Integrăm
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Autentificare (email, Google, Apple, Facebook)</li>
                <li>Plăți in-app (Stripe, PayPal, plăți locale)</li>
                <li>Notificări push (Firebase Cloud Messaging)</li>
                <li>Geolocation și Maps (Google Maps API)</li>
                <li>Camera și galerie foto</li>
                <li>Chat și mesagerie în timp real</li>
              </ul>
              <p>
                Echipa noastră de{" "}
                <Link
                  to="/aplicatii-mobile"
                  title="Dezvoltare Aplicatii Mobile Romania WorxAds"
                  className="text-primary hover:underline"
                >
                  dezvoltare aplicații mobile
                </Link>{" "}
                folosește cele mai moderne tehnologii pentru rezultate de top —
                aplicații rapide, sigure și ușor de scalat.
              </p>
            </section>

            {/* H2 - PASUL 6 */}
            <section id="pasul-6" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 6 — Testarea Aplicației: Nu Lansa Fără Acest Pas
              </h2>
              <p>
                <strong>Testare aplicatie mobila</strong> este pasul cel mai
                ignorat de antreprenori și cel mai costisitor când e omis. O
                aplicație lansată cu bug-uri primește recenzii negative care
                rămân pentru totdeauna.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Tipuri de Testare Esențiale
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Unit testing</strong> — testează fiecare funcție
                  individuală.
                </li>
                <li>
                  <strong>Integration testing</strong> — testează componentele
                  împreună.
                </li>
                <li>
                  <strong>UI testing</strong> — verifică interfața vizuală pe
                  diferite ecrane.
                </li>
                <li>
                  <strong>Performance testing</strong> — viteză, consum baterie,
                  consum date.
                </li>
                <li>
                  <strong>Security testing</strong> — vulnerabilități,
                  protecția datelor utilizatorilor.
                </li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Testarea pe Dispozitive Reale vs Emulator
              </h3>
              <p>
                Emulatoarele sunt utile, dar nu înlocuiesc testarea pe device
                real. O aplicație trebuie testată pe minimum 5-10 dispozitive
                diferite: iPhone 13/14/15, iPad, plus Samsung, Xiaomi, Huawei
                pentru Android. Fragmentarea Android este o provocare reală — un
                ecran arată diferit pe Pixel față de Xiaomi entry-level.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Beta Testing cu Utilizatori Reali
              </h3>
              <p>
                Înainte de lansarea publică, distribuie aplicația prin{" "}
                <strong>TestFlight</strong> (iOS) și{" "}
                <strong>Google Play Beta</strong> (Android) către 50-200
                utilizatori reali. Colectezi feedback, repari ce e nevoie, apoi
                lansezi public cu încredere.
              </p>

              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>⚠️ Atenție:</strong> O aplicație cu bug-uri lansată
                  public primește recenzii negative greu de recuperat. Investiția
                  în testare e mereu mai mică decât costul recenziilor proaste.
                </p>
              </div>
            </section>

            {/* H2 - PASUL 7 */}
            <section id="pasul-7" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 7 — Lansarea în App Store și Google Play
              </h2>
              <p>
                <strong>Lansare aplicatie App Store Google Play</strong> are
                propriile reguli pentru fiecare platformă. Dacă nu le respecți,
                aplicația ta poate fi respinsă chiar și după ce ai investit
                luni de muncă.
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Cerințele Apple App Store
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Developer account: 99$/an.</li>
                <li>Review process: 1-3 zile lucrătoare.</li>
                <li>
                  Guidelines stricte — respingeri posibile pentru funcții
                  duplicate, conținut neadecvat sau lipsă transparență.
                </li>
                <li>Screenshot-uri și descriere optimizate pentru fiecare limbă.</li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Cerințele Google Play Store
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Developer account: 25$ (o singură dată, pe viață).</li>
                <li>Review process: câteva ore - 1 zi.</li>
                <li>Mai permisiv decât App Store, dar verifică automat malware.</li>
                <li>Android App Bundle (AAB) este obligatoriu pentru aplicații noi.</li>
              </ul>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                ASO — App Store Optimization
              </h3>
              <p>
                <strong>App Store Optimization</strong> este SEO-ul pentru
                aplicații. Include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Titlul aplicației cu keyword principal.</li>
                <li>Descriere optimizată cu cuvinte cheie căutate.</li>
                <li>Screenshot-uri și preview video atractive.</li>
                <li>Categorie corectă selectată în store.</li>
                <li>Strategie de obținere ratings și recenzii pozitive.</li>
              </ul>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base">
                  <strong>💡 ASO</strong> este SEO-ul pentru aplicații mobile. O
                  optimizare corectă poate crește organic descărcările cu
                  30-50%, fără cheltuieli suplimentare de publicitate.
                </p>
              </div>
            </section>

            {/* H2 - PASUL 8 */}
            <section id="pasul-8" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Pasul 8 — Monetizarea Aplicației: Cum Câștigi Bani
              </h2>
              <p>
                <strong>Monetizare aplicatie</strong> este partea care
                transformă proiectul tău dintr-o investiție într-un business
                profitabil. În 2025, există câteva modele dovedite:
              </p>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Modele de Monetizare în 2025
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Freemium</strong> — gratuit cu funcții premium plătite.
                </li>
                <li>
                  <strong>Abonament lunar/anual</strong> — modelul SaaS, venit
                  recurent previzibil.
                </li>
                <li>
                  <strong>Plată unică</strong> — paid app, descărcare cu plată.
                </li>
                <li>
                  <strong>In-app purchases</strong> — cumpărături din aplicație
                  (gaming, conținut).
                </li>
                <li>
                  <strong>Publicitate in-app</strong> — Google AdMob, Meta
                  Audience Network.
                </li>
                <li>
                  <strong>B2B</strong> — aplicație pentru firme, licențiere,
                  white-label.
                </li>
              </ul>

              <div className="-mx-4 sm:mx-0 overflow-x-auto sm:rounded-xl sm:border sm:border-border">
                <table className="w-full text-xs sm:text-sm min-w-[520px]">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Model
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Exemple
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Avantaje
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Dezavantaje
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-2 sm:p-3">Freemium</td>
                      <td className="p-2 sm:p-3">Spotify, Canva</td>
                      <td className="p-2 sm:p-3">Adopție mare</td>
                      <td className="p-2 sm:p-3">Conversie mică</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Abonament</td>
                      <td className="p-2 sm:p-3">Netflix, apps SaaS</td>
                      <td className="p-2 sm:p-3">Venit recurent</td>
                      <td className="p-2 sm:p-3">Așteptări mari</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Paid App</td>
                      <td className="p-2 sm:p-3">Jocuri premium</td>
                      <td className="p-2 sm:p-3">Venit imediat</td>
                      <td className="p-2 sm:p-3">Barieră intrare</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">In-app Ads</td>
                      <td className="p-2 sm:p-3">Apps gratuite</td>
                      <td className="p-2 sm:p-3">Ușor de implementat</td>
                      <td className="p-2 sm:p-3">Experiență slabă</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-semibold mt-6 break-words">
                Ce Model Funcționează cel mai Bine
              </h3>
              <p>
                Nu există un răspuns universal — depinde de tipul aplicației și
                publicul țintă. În 2025, combinația câștigătoare este{" "}
                <strong>Freemium + abonament</strong>: utilizatorii încearcă
                gratuit, iar cei pasionați plătesc pentru funcții avansate.
                Testează, măsoară datele și ajustează în funcție de comportamentul
                real al utilizatorilor.
              </p>
            </section>

            {/* H2 - COSTURI */}
            <section id="costuri" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Cât Costă Dezvoltarea unei Aplicații Mobile în România în 2025?
              </h2>
              <p>
                Întrebarea <strong>cat costa o aplicatie mobila</strong> nu are
                un răspuns scurt — totul depinde de complexitate. Iată o
                estimare realistă pentru piața din România în 2025:
              </p>

              <div className="-mx-4 sm:mx-0 overflow-x-auto sm:rounded-xl sm:border sm:border-border">
                <table className="w-full text-xs sm:text-sm min-w-[520px]">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Tip Aplicație
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Preț Minim
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Preț Mediu
                      </th>
                      <th className="text-left p-2 sm:p-3 font-semibold whitespace-nowrap">
                        Preț Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-2 sm:p-3">MVP simplu</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">3.000€</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">6.000€</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">10.000€</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">App business mediu</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">8.000€</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">15.000€</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">25.000€</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">App complex</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">20.000€</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">40.000€</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">80.000€+</td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-3">Platformă SaaS</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">30.000€</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">70.000€</td>
                      <td className="p-2 sm:p-3 whitespace-nowrap">150.000€+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>Factori care influențează prețul:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Numărul de ecrane și funcționalități.</li>
                <li>iOS doar vs iOS + Android (cross-platform reduce costul).</li>
                <li>Necesitatea unui backend custom vs Firebase.</li>
                <li>Integrări externe (plăți, maps, ERP, CRM).</li>
                <li>Design custom vs template adaptat.</li>
              </ul>

              <p>
                Vrei o estimare exactă pentru aplicația ta?{" "}
                <Link
                  to="/aplicatii-mobile"
                  title="Servicii Dezvoltare Aplicatii Mobile Romania"
                  className="text-primary hover:underline"
                >
                  Descoperă serviciile noastre de dezvoltare aplicații mobile
                </Link>{" "}
                și solicită o ofertă transparentă și detaliată, fără surprize.
              </p>
            </section>

            {/* H2 - CHECKLIST */}
            <section id="checklist" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Checklist Complet — Pași pentru Lansarea Aplicației Tale
              </h2>
              <p>
                Folosește acest checklist ca foaie de parcurs pentru a nu rata
                niciun pas important în drumul tău spre lansare:
              </p>

              {[
                {
                  title: "Planificare",
                  items: [
                    "Idee validată cu potențiali utilizatori",
                    "Cercetare de piață și analiză competiție",
                    "MVP definit (funcționalități esențiale)",
                    "Model de monetizare ales",
                    "Buget și timeline stabilite",
                  ],
                },
                {
                  title: "Design",
                  items: [
                    "Wireframes aprobate",
                    "Design UI/UX finalizat în Figma",
                    "Prototip testat cu utilizatori reali",
                    "Design system creat (culori, fonturi, iconițe)",
                    "Assets exportate pentru dezvoltare",
                  ],
                },
                {
                  title: "Dezvoltare",
                  items: [
                    "Arhitectură tehnică definită",
                    "Backend și API dezvoltate",
                    "Frontend (iOS + Android) dezvoltat",
                    "Integrări externe implementate (plăți, maps)",
                    "Push notifications configurate",
                  ],
                },
                {
                  title: "Testare",
                  items: [
                    "Unit și integration tests rulate",
                    "Testare pe dispozitive reale (iOS + Android)",
                    "Performance testing (viteză, baterie)",
                    "Security audit efectuat",
                    "Beta testing cu utilizatori reali",
                  ],
                },
                {
                  title: "Lansare",
                  items: [
                    "Developer accounts create (App Store + Google Play)",
                    "Screenshot-uri și descrieri optimizate (ASO)",
                    "Preview video creat",
                    "Aplicație trimisă pentru review",
                    "Landing page pregătit pentru lansare",
                    "Strategie de marketing la lansare pregătită",
                  ],
                },
                {
                  title: "Post-Lansare",
                  items: [
                    "Monitorizare crash-uri (Firebase Crashlytics)",
                    "Analitice configurate (Mixpanel / Firebase Analytics)",
                    "Proces de colectare recenzii implementat",
                    "Roadmap pentru update-uri viitoare",
                    "Campanie de marketing lansată",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="font-display text-lg font-semibold mb-3 text-primary uppercase tracking-wider text-sm">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm sm:text-base"
                      >
                        <span className="mt-0.5 inline-flex w-5 h-5 rounded border border-primary/40 bg-primary/5 shrink-0 items-center justify-center text-primary text-xs">
                          ☐
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* H2 - GREȘELI */}
            <section id="greseli" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Greșeli Comune pe Care să le Eviți când Dezvolți o Aplicație
              </h2>
              <p>
                Învață din experiența celor care au încercat înaintea ta. Iată
                cele mai costisitoare 6 greșeli pe care le vedem la antreprenorii
                care vor să afle <strong>cum sa creezi o aplicatie mobila</strong>:
              </p>

              <ol className="space-y-4">
                {[
                  {
                    title: "Prea multe funcționalități de la început",
                    text: "Feature creep ucide proiectele. Lansează simplu, adaugă funcții bazat pe feedback real al utilizatorilor.",
                  },
                  {
                    title: "Neglijarea testării",
                    text: "Bug-urile descoperite de utilizatori costă de 10x mai mult decât cele găsite în testare internă.",
                  },
                  {
                    title: "Design neglijat în favoarea funcționalității",
                    text: "Utilizatorii judecă o aplicație în primele 3 secunde. UI-ul contează la fel de mult ca features-urile.",
                  },
                  {
                    title: "Ignorarea App Store Optimization",
                    text: "Fără ASO, aplicația ta e invizibilă în store-uri. Optimizarea e la fel de importantă ca dezvoltarea.",
                  },
                  {
                    title: "Nicio strategie de marketing la lansare",
                    text: "O aplicație bună fără marketing = eșec garantat. Planifică promovarea cu 2 luni înainte de lansare.",
                  },
                  {
                    title: "Ignorarea feedback-ului utilizatorilor",
                    text: "Recenziile și rating-urile sunt sursa ta cea mai valoroasă de informații pentru îmbunătățiri continue.",
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

            {/* H2 - CONCLUZIE */}
            <section id="concluzie" className="space-y-4 scroll-mt-28">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold break-words">
                Concluzie — Cum să Faci o Aplicație de Succes în 2025
              </h2>
              <p>
                Acum știi exact pașii pentru a transforma o idee într-o aplicație
                mobilă reală: validează, cercetează piața, alege tehnologia
                potrivită, investește în UX/UI, dezvoltă cu profesioniști,
                testează riguros, lansează inteligent în App Store și Google
                Play, apoi monetizează corect.
              </p>
              <p>
                Aplicațiile mobile nu mai sunt un lux, ci o necesitate
                competitivă. Antreprenorii care le îmbrățișează acum vor avea
                un avantaj uriaș față de cei care amână. Cheia este să alegi un
                partener tehnic experimentat, care înțelege business-ul tău, nu
                doar codul.
              </p>
              <p>
                Dacă vrei să transformi ideea ta într-o aplicație mobilă de
                succes fără bătăi de cap, echipa{" "}
                <strong>WorxAds</strong> — o{" "}
                <strong>agentie aplicatii mobile Romania</strong> cu experiență
                reală pe proiecte iOS și Android — e aici pentru tine.{" "}
                <Link
                  to="/aplicatii-mobile"
                  title="Dezvoltare Aplicatii Mobile iOS Android Romania WorxAds"
                  className="text-primary hover:underline"
                >
                  Descoperă serviciile noastre complete de dezvoltare aplicații
                  mobile
                </Link>{" "}
                — de la concept la App Store, totul la cheie.
              </p>

              <div className="rounded-xl border border-border bg-card p-6 mt-6 text-center space-y-3">
                <h3 className="font-display text-xl font-semibold">
                  Ești gata să-ți construiești aplicația mobilă?
                </h3>
                <p className="text-muted-foreground">
                  Discută cu un specialist WorxAds și primește o ofertă
                  personalizată în 24h.
                </p>
                <Link to="/aplicatii-mobile">
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
                Întrebări Frecvente despre Dezvoltarea Aplicațiilor Mobile
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
                  Vrei o Aplicație Mobilă Profesională?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Echipa WorxAds dezvoltă aplicații iOS și Android de la zero,
                  testate și gata de lansare în App Store și Google Play.
                </p>
                <Link to="/aplicatii-mobile">
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
                      to="/aplicatii-mobile"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      Aplicații Mobile
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
                  <li>
                    <Link
                      to="/marketing-digital"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      Marketing Digital
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

export default BlogAplicatieTelefon;
