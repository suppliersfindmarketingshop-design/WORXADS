import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingCart, Palette, Search, TrendingUp, Sparkles, Code2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Dezvoltare Website Personalizat",
    price: "De la 350$",
    description: "Website-uri moderne și responsive, construite de la zero. Adaptate brandului tău cu design care convertește.",
    highlight: true,
    tag: "CEL MAI POPULAR",
  },
  {
    icon: Smartphone,
    title: "Dezvoltare Aplicații Mobile",
    price: "De la 1.900$",
    description: "Aplicații mobile cross-platform pentru iOS și Android. Performanță nativă cu o singură bază de cod.",
    highlight: false,
  },
  {
    icon: ShoppingCart,
    title: "Soluții E-Commerce",
    price: "De la 1.600$",
    description: "Magazine online complete cu procesare plăți, gestionare stocuri și urmărire comenzi.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Redesign Website",
    price: "De la 300$",
    description: "Transformă site-ul tău învechit într-o experiență modernă, rapidă și optimizată pentru conversii.",
    highlight: false,
  },
  {
    icon: Search,
    title: "SEO & Listări Google",
    price: "De la 150$",
    description: "Fii găsit online. Optimizăm site-ul și prezența ta pe Google pentru vizibilitate maximă.",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Reclame Social Media",
    price: "De la 200$/lună",
    description: "Campanii de reclame Facebook & Instagram targetate care generează trafic și conversii.",
    highlight: false,
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    price: "De la 250$",
    description: "Interfețe frumoase și ușor de utilizat, create pentru a menține vizitatorii implicați și a converti.",
    highlight: false,
  },
  {
    icon: Code2,
    title: "Dezvoltare Aplicații Web",
    price: "De la 4.500$",
    description: "Dashboard-uri personalizate, platforme SaaS și instrumente interne construite cu tehnologii moderne.",
    highlight: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Serviciile Noastre
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ce <span className="gradient-text">Construim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Servicii complete de dezvoltare. De la idee la lansare și mai departe.
          </p>
        </motion.div>

        {/* Featured service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary/50 glow-effect">
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
              CEL MAI POPULAR
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">Dezvoltare Website Personalizat</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Proiectăm și dezvoltăm website-uri impresionante, de înaltă performanță, care reprezintă brandul tău și transformă vizitatorii în clienți.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">Design Responsive</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-foreground">Optimizat SEO</span>
                  <span className="px-3 py-1 bg-secondary rounded-full text-foreground">Livrare Rapidă</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-display font-bold gradient-text">350$</div>
                <div className="text-muted-foreground">de la</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.filter(s => !s.highlight).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift card-gradient"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-xl font-display font-bold text-primary">{service.price}</div>
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
