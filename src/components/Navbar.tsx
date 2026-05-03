import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Toate Serviciile", href: "/#services" },
  { label: "Dezvoltare Website-uri", href: "/dezvoltare-website" },
  { label: "Aplicații Mobile", href: "/aplicatii-mobile" },
  { label: "Marketing Digital", href: "/marketing-digital" },
  { label: "SEO", href: "/seo" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("/#");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-display font-bold">
            <span className="gradient-text">WorxAds</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Servicii
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-60">
                  <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                    {serviceLinks.map((link) =>
                      isInternal(link.href) ? (
                        <Link
                          key={link.label}
                          to={link.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          key={link.label}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {link.label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) =>
              isInternal(link.href) ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <a href="/#contact">
              <Button variant="hero" size="default">
                Începe Acum
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-b border-border"
        >
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Servicii</span>
              {serviceLinks.map((link) =>
                isInternal(link.href) ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors pl-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors pl-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
            {navLinks.map((link) =>
              isInternal(link.href) ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="hero" className="mt-4 w-full">
                Începe Acum
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
