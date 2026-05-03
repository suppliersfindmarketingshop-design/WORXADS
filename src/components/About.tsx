import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-card via-secondary to-primary/10 border border-border overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-8xl md:text-9xl font-display font-bold gradient-text mb-4">
                  W
                </span>
                <p className="text-2xl font-display font-semibold text-foreground">WorxAds</p>
                <p className="text-muted-foreground mt-2">Dezvoltare Web & Aplicații</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Despre Noi
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Construim Produse Digitale Care{" "}
              <span className="gradient-text">Generează Creștere</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                La WorxAds, suntem o echipă de developeri, designeri și strategi pasionați
                de transformarea ideilor în produse digitale puternice—website-uri, aplicații mobile și platforme web.
              </p>
              <p>
                Combinăm tehnologia modernă cu un design rafinat pentru a construi soluții care
                arată excelent, funcționează rapid și se scalează odată cu afacerea ta. De la startup-uri la
                branduri consacrate, livrăm muncă personalizată care aduce rezultate.
              </p>
              <p>
                Ne ocupăm și de marketing-ul tău digital—SEO, listări Google și reclame pe social
                media—pentru ca noul tău produs să primească atenția pe care o merită din prima zi.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-3xl font-display font-bold gradient-text mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Proiecte Livrate</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-3xl font-display font-bold gradient-text mb-1">100%</div>
                <p className="text-sm text-muted-foreground">Satisfacție Clienți</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
