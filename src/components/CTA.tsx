import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Shield } from "lucide-react";

const trustPoints = [
  { icon: Clock, text: "Timpi de livrare rapizi" },
  { icon: Shield, text: "Satisfacție garantată" },
  { icon: CheckCircle2, text: "Fără costuri ascunse" },
];

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
            </span>
            <span className="text-sm text-destructive font-semibold">Disponibilitate limitată — doar 3 locuri pentru proiecte deschise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Pregătit Să Construiești{" "}
            <span className="gradient-text">Următorul Tău Proiect Mare?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Fie că e un website, o aplicație mobilă sau o platformă digitală completă—îți aducem viziunea la viață cu cod curat și design impresionant.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <point.icon className="w-4 h-4 text-primary" />
                <span>{point.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/#contact">
              <Button variant="hero" size="xl" className="group">
                Solicită o Ofertă Gratuită
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/#contact">
              <Button variant="heroOutline" size="xl">
                Programează o Consultație Gratuită
              </Button>
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Cu încrederea a <span className="font-semibold text-foreground">50+ afaceri</span> din Europa și din întreaga lume
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
