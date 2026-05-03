import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8"
          >
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">Agenție de Dezvoltare Web & Aplicații</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            Construim{" "}
            <span className="gradient-text">Website-uri & Aplicații</span>{" "}
            Care Îți Cresc Afacerea
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body"
          >
            De la website-uri impresionante la aplicații mobile puternice—proiectăm, dezvoltăm și lansăm produse digitale care transformă vizitatorii în clienți.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-2xl md:text-3xl font-display font-bold text-primary mb-10"
          >
            Soluții Personalizate · Livrare Rapidă · Suport Continuu
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="/#contact">
              <Button variant="hero" size="xl" className="group">
                Solicită o Ofertă Gratuită
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/#services">
              <Button variant="heroOutline" size="xl">
                Vezi Serviciile Noastre
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-border/50"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  <span className="font-semibold text-foreground">50+ proiecte</span> livrate
                </span>
              </div>
              <div className="hidden md:block w-px h-8 bg-border" />
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">5.0</span> rating mediu
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Tehnologii cu care lucrăm</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {["React", "React Native", "Next.js", "Node.js", "Flutter", "WordPress"].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground/70 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
