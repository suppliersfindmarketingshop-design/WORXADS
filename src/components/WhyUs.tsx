import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Livrare Rapidă",
    description: "Livrăm rapid fără compromisuri. Proiectul tău, la timp.",
  },
  {
    icon: Shield,
    title: "Scalabil & Sigur",
    description: "Construit cu tehnologie modernă care crește odată cu afacerea ta.",
  },
  {
    icon: Users,
    title: "Echipă Dedicată",
    description: "Acces direct la developerii și designerii tăi pe tot parcursul.",
  },
  {
    icon: CheckCircle2,
    title: "Suport Continuu",
    description: "Mentenanță post-lansare, actualizări și îmbunătățiri continue.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              De Ce Să Ne Alegi
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Viziunea Ta, <span className="gradient-text">Expertiza</span> Noastră
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nu suntem doar developeri—suntem partenerii tăi tehnici. Combinăm cod curat
              cu design rafinat pentru a construi produse pe care utilizatorii le iubesc și afacerile se bazează pe ele.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-card to-secondary border border-border overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl md:text-8xl font-display font-bold gradient-text mb-4">
                    50+
                  </div>
                  <p className="text-xl font-display text-muted-foreground">Proiecte Livrate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
