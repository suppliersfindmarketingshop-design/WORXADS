import { motion } from "framer-motion";
import { ExternalLink, Globe, Smartphone, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "Platformă Rezervări Restaurant",
    category: "Dezvoltare Aplicație Web",
    result: "De 3x Mai Multe Rezervări",
    description: "Am construit o platformă full-stack de rezervări cu disponibilitate în timp real, plăți online și un panou de administrare pentru un lanț de restaurante.",
    icon: Globe,
  },
  {
    title: "Aplicație Fitness Tracking",
    category: "Dezvoltare Aplicație Mobilă",
    result: "10K+ Descărcări",
    description: "Am dezvoltat o aplicație fitness cross-platform cu planuri de antrenament, urmărire progres și funcții sociale pentru un brand de fitness.",
    icon: Smartphone,
  },
  {
    title: "Magazin Online Fashion",
    category: "E-Commerce + Reclame",
    result: "€50K Prima Lună",
    description: "Am proiectat și construit un magazin online cu conversie ridicată, cu campanii de reclame integrate care au generat €50K venituri în prima lună.",
    icon: ShoppingCart,
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portofoliu
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Rezultate</span> Reale Pe Care Le-am Livrat
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la aplicații web la produse mobile, iată cum am ajutat afaceri să se lanseze și să crească.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-4">
                {project.category}
              </span>
              <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
              <div className="text-2xl font-display font-bold gradient-text mb-4">
                {project.result}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20"
        >
          <p className="text-lg font-display font-semibold mb-2">
            🚀 Proiectul tău poate fi următorul!
          </p>
          <p className="text-muted-foreground mb-4">
            Hai să construim ceva extraordinar împreună.{" "}
            <a href="/#contact" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
              Solicită o ofertă gratuită <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
