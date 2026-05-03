import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Contact from "@/components/Contact";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact — WorxAds | Agenție Web & Marketing Digital România";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Contactează echipa WorxAds pentru proiectul tău digital. Consultanță gratuită pentru dezvoltare website, aplicații mobile și marketing digital în România."
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://worxads.com/contact");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StickyCallButton />
      <main className="pt-32">
        <div className="container mx-auto px-6 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Acasă</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Contact</span>
          </nav>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
