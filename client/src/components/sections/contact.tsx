import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 bg-charcoal text-white">
      <div className="content-max-width mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Get Started
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Ready to transform your legal strategy? Let's discuss how we can help your business succeed.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={scrollToTop}
                  className="bg-white hover:bg-white/90 text-charcoal px-8 py-4 rounded-xl font-medium transition-all duration-200"
                  size="lg"
                >
                  <Calendar className="mr-2" size={18} />
                  Schedule Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-xl font-medium transition-all duration-200"
                  size="lg"
                >
                  <Mail className="mr-2" size={18} />
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <p className="text-white/80 font-light">+1 (555) 123-LEGAL</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <p className="text-white/80 font-light">hello@legalconsultpro.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
              <p className="text-white/80 font-light">Manhattan, NY</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
