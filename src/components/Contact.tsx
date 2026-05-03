import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Numele este obligatoriu")
    .max(100, "Numele trebuie să aibă mai puțin de 100 caractere"),
  email: z
    .string()
    .trim()
    .email("Adresă de email invalidă")
    .max(255, "Email-ul trebuie să aibă mai puțin de 255 caractere"),
  phone: z
    .string()
    .trim()
    .max(30, "Telefonul trebuie să aibă mai puțin de 30 caractere")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Mesajul este obligatoriu")
    .max(1000, "Mesajul trebuie să aibă mai puțin de 1000 caractere"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Eroare de Validare",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: data?.warning ? "Mesaj Primit" : "Mesaj Trimis!",
        description: data?.warning
          ? String(data.warning)
          : "Vă vom contacta în maxim 24 de ore.",
        variant: data?.warning ? "default" : "default",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Eroare",
        description: error?.message ? String(error.message) : "Nu s-a putut trimite mesajul. Vă rugăm încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Contactează-ne
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Hai Să <span className="gradient-text">Lucrăm Împreună</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pregătit să îți crești afacerea? Trimite-ne un mesaj și îți răspundem în maxim 24 de ore.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Numele Tău"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border h-14 text-lg"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email-ul Tău"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border h-14 text-lg"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  inputMode="tel"
                  placeholder="Telefon (opțional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card border-border h-14 text-lg"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Spune-ne despre proiectul tău..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border min-h-[150px] text-lg resize-none"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">business@worxads.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">Sună-ne</h4>
                  <p className="text-muted-foreground">Disponibil în timpul programului</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">Lucrează Cu Noi</h4>
                  <p className="text-muted-foreground">Deservim clienți din toată lumea</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
              <p className="text-lg font-display font-semibold mb-2">Garanție Răspuns Rapid</p>
              <p className="text-muted-foreground">
                Răspundem la toate solicitările în maxim 24 de ore. Creșterea afacerii tale nu poate aștepta!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
