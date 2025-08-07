import { motion } from "framer-motion";
import { Calendar, Play, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      {/* Large background image like Framer design */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
          alt="Legal consulting background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70"></div>
      </div>

      <div className="content-max-width mx-auto px-6 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.h1
              className="text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              LegalConsult Pro
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Navigate the complexities of legal challenges with confidence through our expert services. Our experienced team will protect your rights and advocate for your best interests.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={scrollToContact}
                  className="bg-white hover:bg-white/90 text-charcoal px-8 py-4 rounded-xl font-medium transition-all duration-200"
                  size="lg"
                >
                  <Calendar className="mr-2" size={18} />
                  Get Started
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-xl font-medium transition-all duration-200"
                  size="lg"
                >
                  <Play className="mr-2" size={18} />
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
