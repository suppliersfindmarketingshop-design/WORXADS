import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

const stats = [
  { value: "40+", label: "Clienți Mulțumiți", icon: Users },
  { value: "150%", label: "ROI Mediu", icon: TrendingUp },
  { value: "98%", label: "Retenție Clienți", icon: Award },
  { value: "12M+", label: "Reach Generat", icon: Globe },
];

const testimonials = [
  {
    quote: "WorxAds ne-a dublat vânzările online în doar 2 luni. Cea mai bună investiție!",
    author: "Maria S.",
    role: "Proprietar E-commerce",
  },
  {
    quote: "În sfârșit, o agenție care livrează ce promite. Restaurantul nostru e plin în fiecare weekend.",
    author: "Alexandru D.",
    role: "Proprietar Restaurant",
  },
  {
    quote: "Profesioniști, receptivi și, cel mai important—orientați pe rezultate. Recomand cu căldură!",
    author: "Ioana P.",
    role: "Proprietar Studio Fitness",
  },
];

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Recenzii Clienți
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold">
            Ce Spun Clienții Noștri
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4 italic">„{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
