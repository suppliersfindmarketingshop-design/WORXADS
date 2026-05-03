import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const serviceItems = [
  { label: "Dezvoltare Website", href: "/dezvoltare-website" },
  { label: "Aplicații Mobile", href: "/aplicatii-mobile" },
  { label: "Marketing Digital", href: "/marketing-digital" },
  { label: "SEO", href: "/seo" },
  { label: "Portofoliu", href: "/portofoliu" },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="gradient-text">WorxAds</span>
            </h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Construim website-uri, aplicații mobile și platforme digitale care ajută afacerile să crească. Plus marketing pentru a fi remarcat.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current opacity-60" style={{ clipPath: "circle()" }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Servicii</h4>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Companie</h4>
            <ul className="space-y-3">
              <li><Link to="/despre-noi" className="text-muted-foreground hover:text-primary transition-colors text-sm">Despre Noi</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link to="/portofoliu" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portofoliu</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                business@worxads.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                București, România
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 WorxAds. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6">
            {["Politica de Confidențialitate", "Termeni și Condiții"].map((link) => (
              <a key={link} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
