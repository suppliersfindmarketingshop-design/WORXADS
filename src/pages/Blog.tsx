import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ChevronRight, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Web" | "SEO" | "Mobile" | "Marketing" | "Design";
  date: string;
  dateISO: string;
  readTime: string;
  gradient: string;
  available: boolean;
};

const posts: Post[] = [
  {
    slug: "cum-sa-faci-un-website-profesional",
    title: "Cum să Faci un Website Profesional în 2025 — Ghid Complet",
    excerpt:
      "Pași practici pentru a construi un website profesional: alegerea platformei, design, SEO, hosting și lansare. Tot ce trebuie să știi într-un singur ghid.",
    category: "Web",
    date: "27 Apr 2026",
    dateISO: "2026-04-27",
    readTime: "12 min",
    gradient: "from-primary/30 via-primary/10 to-transparent",
    available: true,
  },
  {
    slug: "ghid-seo-romania-2025",
    title: "Ghid Complet SEO 2025 pentru Firme din România — Optimizare Google",
    excerpt:
      "Ghid SEO complet pentru antreprenorii din România. Tehnici, strategii și sfaturi practice pentru optimizare Google: SEO tehnic, on-page, off-page, local și E-E-A-T.",
    category: "SEO",
    date: "30 Apr 2026",
    dateISO: "2026-04-30",
    readTime: "16 min",
    gradient: "from-emerald-500/30 via-emerald-500/10 to-transparent",
    available: true,
  },
  {
    slug: "cum-sa-faci-o-aplicatie-pentru-telefon",
    title: "Cum să Faci o Aplicație pentru Telefon în 2025 — Ghid Complet",
    excerpt:
      "Ghid pas cu pas despre cum să faci o aplicație mobilă în România: de la idee și validare, la design, dezvoltare, testare, lansare în App Store/Google Play și monetizare.",
    category: "Mobile",
    date: "29 Apr 2026",
    dateISO: "2026-04-29",
    readTime: "14 min",
    gradient: "from-purple-500/30 via-purple-500/10 to-transparent",
    available: true,
  },
  {
    slug: "cat-costa-un-website-romania",
    title: "Cât Costă un Website în România — Ghid Prețuri 2025",
    excerpt:
      "Analiză detaliată a costurilor pentru un website de prezentare, magazin online sau aplicație web custom în România. Bugete reale și ce influențează prețul.",
    category: "Web",
    date: "20 Apr 2026",
    dateISO: "2026-04-20",
    readTime: "9 min",
    gradient: "from-blue-500/30 via-blue-500/10 to-transparent",
    available: false,
  },
  {
    slug: "seo-local-bucuresti",
    title: "SEO Local pentru Afaceri din București — Strategii Eficiente",
    excerpt:
      "Cum să apari pe prima pagină Google pentru căutări locale. Optimizare Google Business Profile, recenzii și conținut localizat pentru piața din București.",
    category: "SEO",
    date: "12 Apr 2026",
    dateISO: "2026-04-12",
    readTime: "10 min",
    gradient: "from-emerald-500/30 via-emerald-500/10 to-transparent",
    available: false,
  },
  {
    slug: "wordpress-vs-nextjs",
    title: "WordPress vs Next.js — Ce Alegi pentru Site-ul Tău",
    excerpt:
      "Comparație tehnică între WordPress și Next.js: performanță, SEO, costuri de mentenanță și scalabilitate. Recomandări în funcție de tipul de afacere.",
    category: "Web",
    date: "5 Apr 2026",
    dateISO: "2026-04-05",
    readTime: "8 min",
    gradient: "from-purple-500/30 via-purple-500/10 to-transparent",
    available: false,
  },
  {
    slug: "optimizare-viteza-website",
    title: "Cum Optimizezi Viteza unui Website pentru Google",
    excerpt:
      "Tehnici reale pentru a îmbunătăți Core Web Vitals: imagini optimizate, lazy loading, caching și CDN. Crește viteza site-ului și conversiile.",
    category: "SEO",
    date: "28 Mar 2026",
    dateISO: "2026-03-28",
    readTime: "11 min",
    gradient: "from-amber-500/30 via-amber-500/10 to-transparent",
    available: false,
  },
  {
    slug: "aplicatii-native-vs-hybrid",
    title: "Aplicații Mobile Native vs Hybrid — Ghid Decizional",
    excerpt:
      "Native, React Native sau Flutter? Analiză practică a costurilor, performanței și timpului de dezvoltare pentru aplicațiile mobile moderne.",
    category: "Mobile",
    date: "20 Mar 2026",
    dateISO: "2026-03-20",
    readTime: "9 min",
    gradient: "from-pink-500/30 via-pink-500/10 to-transparent",
    available: false,
  },
  {
    slug: "google-ads-imm-romania",
    title: "Google Ads pentru IMM-uri din România — Ghid Practic",
    excerpt:
      "Cum să rulezi campanii Google Ads profitabile cu buget redus. Targetare, cuvinte cheie, optimizare CPC și calcul ROI pentru afaceri mici și mijlocii.",
    category: "Marketing",
    date: "12 Mar 2026",
    dateISO: "2026-03-12",
    readTime: "10 min",
    gradient: "from-orange-500/30 via-orange-500/10 to-transparent",
    available: false,
  },
  {
    slug: "greseli-design-website",
    title: "Top 10 Greșeli în Design-ul de Website-uri",
    excerpt:
      "Cele mai frecvente greșeli care îți alungă vizitatorii: navigație confuză, viteză slabă, lipsa CTA-urilor clare. Cum le eviți și ce să faci în schimb.",
    category: "Design",
    date: "5 Mar 2026",
    dateISO: "2026-03-05",
    readTime: "7 min",
    gradient: "from-rose-500/30 via-rose-500/10 to-transparent",
    available: false,
  },
  {
    slug: "ux-ui-conversii",
    title: "Cum Crești Conversiile cu un UX/UI Bun",
    excerpt:
      "Principii de UX/UI care transformă vizitatorii în clienți: ierarhie vizuală, micro-interacțiuni, formulare optimizate și teste A/B.",
    category: "Design",
    date: "26 Feb 2026",
    dateISO: "2026-02-26",
    readTime: "8 min",
    gradient: "from-cyan-500/30 via-cyan-500/10 to-transparent",
    available: false,
  },
];

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title =
      "Blog WorxAds — Ghiduri Web, Mobile & Marketing Digital România";

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
      "Blog WorxAds — articole, ghiduri și sfaturi despre dezvoltare web, aplicații mobile, SEO și marketing digital pentru afaceri din România.";
    setMeta("description", description);
    setMeta("og:title", "Blog WorxAds — Ghiduri Web, Mobile & Marketing", true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://worxads.lovable.app/blog", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Blog WorxAds — Ghiduri Web, Mobile & Marketing");
    setMeta("twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://worxads.lovable.app/blog");

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Blog",
          name: "Blog WorxAds",
          url: "https://worxads.lovable.app/blog",
          description,
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.dateISO,
            url: `https://worxads.lovable.app/blog/${p.slug}`,
            author: { "@type": "Organization", name: "WorxAds" },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Acasă",
              item: "https://worxads.lovable.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://worxads.lovable.app/blog",
            },
          ],
        },
      ],
    };

    let script = document.querySelector("#blog-schema");
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("id", "blog-schema");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  const featured = posts[0];
  const rest = useMemo(() => posts.slice(1), []);
  const totalPages = Math.ceil(rest.length / POSTS_PER_PAGE);
  const paginated = rest.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StickyCallButton />

      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-10 md:mb-16">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Acasă
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Blog</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 md:mb-6 break-words">
            Blog <span className="gradient-text">WorxAds</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl">
            Ghiduri, analize și sfaturi practice despre dezvoltare web,
            aplicații mobile, SEO și marketing digital pentru afaceri din
            România.
          </p>
        </section>

        {/* Featured */}
        <section className="container mx-auto px-4 md:px-6 mb-10 md:mb-16">
          <Link
            to={`/blog/${featured.slug}`}
            className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className={`relative h-48 sm:h-64 md:h-full md:min-h-[280px] bg-gradient-to-br ${featured.gradient} flex items-center justify-center`}
              >
                <span className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-foreground/10">
                  {featured.category}
                </span>
                <span className="absolute top-3 left-3 md:top-4 md:left-4 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  Articol Recomandat
                </span>
              </div>
              <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-muted-foreground mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-semibold">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 md:mb-6 leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm sm:text-base">
                  Citește articolul
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-4 md:px-6 mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8">
            Toate Articolele
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {paginated.map((post) => {
              const CardInner = (
                <article className="h-full flex flex-col rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 group">
                  <div
                    className={`relative h-40 sm:h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                  >
                    <span className="text-4xl sm:text-5xl font-display font-bold text-foreground/10">
                      {post.category}
                    </span>
                    {!post.available && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-foreground text-[10px] font-semibold uppercase tracking-wider border border-border">
                        În curând
                      </span>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border gap-2">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      {post.available ? (
                        <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold">
                          Citește
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground italic">
                          Curând
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );

              return post.available ? (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  {CardInner}
                </Link>
              ) : (
                <div key={post.slug} className="cursor-not-allowed opacity-80">
                  {CardInner}
                </div>
              );
            })}
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-20 overflow-x-auto">
            <Pagination>
              <PaginationContent className="flex-wrap justify-center">
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    aria-label="Pagina anterioară"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) goToPage(currentPage - 1);
                    }}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </PaginationLink>
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        goToPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    aria-label="Pagina următoare"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) goToPage(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        )}

        {/* CTA */}
        <section className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold mb-4">
              Ai un proiect în minte?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Hai să discutăm despre cum WorxAds te poate ajuta cu un website
              profesional, o aplicație mobilă sau o strategie completă de
              marketing digital.
            </p>
            <a href="/#contact">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Începe Acum
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
