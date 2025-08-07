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
      {/* Clean Apple-inspired background */}
      <div className="absolute inset-0 bg-pure-white"></div>

      <div className="content-max-width mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center bg-soft-grey border border-charcoal/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-charcoal font-normal text-sm tracking-wide">Industry Leader in Legal Innovation</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-light text-charcoal leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Legal Excellence
              <span className="text-bronze font-normal"> Reimagined</span>
            </motion.h1>

            <motion.p
              className="text-lg text-text-light leading-relaxed font-light max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transforming legal consulting through innovation, precision, and strategic thinking. We help visionary companies navigate complexity with confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={scrollToContact}
                  className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200"
                  size="lg"
                >
                  <Calendar className="mr-2" size={18} />
                  Schedule Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-200"
                  size="lg"
                >
                  <Play className="mr-2" size={18} />
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-16 border-t border-charcoal/5 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { value: "500+", label: "Global Clients" },
                { value: "98%", label: "Success Rate" },
                { value: "24/7", label: "Available" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                >
                  <div className="text-2xl font-light text-charcoal">{stat.value}</div>
                  <div className="text-xs text-text-light tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional legal consultation meeting"
              className="rounded-3xl w-full animate-float shadow-sm"
            />

            {/* Floating achievement card */}
            <motion.div
              className="absolute -bottom-8 -left-8 apple-blur rounded-2xl p-6 border border-charcoal/5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-charcoal rounded-xl flex items-center justify-center">
                  <Trophy className="text-white text-lg" />
                </div>
                <div>
                  <div className="font-medium text-charcoal text-sm">Industry Leader</div>
                  <div className="text-xs text-text-light">Top Legal Consultancy 2024</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
