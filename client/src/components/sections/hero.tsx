import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Calendar, Play, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Clean Apple-inspired background with subtle animation */}
      <div className="absolute inset-0 bg-pure-white" />

      <motion.div 
        className="content-max-width mx-auto px-6 relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-soft-grey border border-charcoal/10 rounded-full px-4 py-2 mb-8 magnetic-hover"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(184, 115, 51, 0.1)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mr-2"
              >
                <Sparkles className="w-4 h-4 text-bronze" />
              </motion.div>
              <span className="text-charcoal font-normal text-sm tracking-wide">Next Generation Technology Enabled Legal Consultancy</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-light text-charcoal leading-tight tracking-tight"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Vidma Consulting
              </motion.span>
              <br />
              <motion.span 
                className="text-bronze font-normal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Group LLP
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg text-text-light leading-relaxed font-light max-w-lg"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                A next generation technology-enabled legal and business consultancy providing specialized services in contract management, intellectual property protection, compliance support, and strategic legal advisory.
              </motion.span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-12"
              variants={itemVariants}
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }} 
                whileTap={{ scale: 0.95 }}
                className="magnetic-hover"
              >
                <Button
                  onClick={scrollToContact}
                  className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 animate-pulse-glow"
                  size="lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-2"
                  >
                    <Calendar size={18} />
                  </motion.div>
                  Get Started Today
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(31, 41, 55, 1)",
                  color: "white"
                }} 
                whileTap={{ scale: 0.95 }}
                className="magnetic-hover"
              >
                <Button
                  variant="outline"
                  className="border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                  size="lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="mr-2"
                  >
                    <Play size={18} />
                  </motion.div>
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-16 border-t border-charcoal/5 mt-16"
              variants={itemVariants}
            >
              {[
                { value: "Client", label: "Centric Focus" },
                { value: "Secure", label: "Protocols" },
                { value: "Efficient", label: "Processes" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center magnetic-hover"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1.4 + index * 0.2, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    color: "rgb(184, 115, 51)"
                  }}
                >
                  <motion.div 
                    className="text-2xl font-light text-charcoal"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-text-light tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional legal consultation meeting"
              className="rounded-3xl w-full shadow-sm animate-float"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            />

            {/* Floating achievement card */}
            <motion.div
              className="absolute -bottom-8 -left-8 glass-effect rounded-2xl p-6 border border-charcoal/5"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                y: [0, -5, 0]
              }}
              transition={{ 
                delay: 1.5, 
                duration: 0.8,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-10 h-10 bg-charcoal rounded-xl flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Trophy className="text-white text-lg" />
                </motion.div>
                <div>
                  <motion.div 
                    className="font-medium text-charcoal text-sm"
                    animate={{ color: ["#333", "#B87333", "#333"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Industry Leader
                  </motion.div>
                  <div className="text-xs text-text-light">Top Legal Consultancy 2024</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
    </section>
  );
}
