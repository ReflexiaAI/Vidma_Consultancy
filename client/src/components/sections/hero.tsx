import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Users, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import vidmaLogo from "@/assets/vidma-logo.png";
import vidmaMainLogo from "@assets/image_1756917535612.png";

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
      {/* Hero background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal/80" />
      <div className="absolute inset-0 opacity-10">
        <img 
          src={vidmaMainLogo} 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-20" 
        />
      </div>

      <motion.div 
        className="content-max-width mx-auto px-6 relative z-10 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Main heading */}
          <motion.h1
            className="text-5xl lg:text-7xl font-light text-white leading-tight tracking-tight"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Vidma Consulting Group LLP
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl lg:text-2xl text-bronze font-light leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A Next Generation Technology Enabled Legal And Business Consultancy
            </motion.span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mt-12"
            variants={itemVariants}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-bronze hover:bg-bronze/90 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300"
                size="lg"
              >
                <Calendar size={20} className="mr-3" />
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-20"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            {[
              {
                title: "CLIENT CENTRIC",
                description: "Our focus is on the clients, their work culture and implementing technology in legal and financial services.",
                icon: Users
              },
              {
                title: "EFFICIENT PROCESSES", 
                description: "We innovate and implement intelligent use of processes and technology to arrive at the full circle of projects.",
                icon: Zap
              },
              {
                title: "SECURE PROTOCOLS",
                description: "Our policies strictly adhere to industry best practice for Information Security. We have efficient IS protocols, processes and practices in place.",
                icon: Shield
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(184, 115, 51, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-bronze/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(184, 115, 51, 0.3)" }}
                  >
                    <IconComponent className="w-8 h-8 text-bronze" />
                  </motion.div>
                  <h3 className="text-lg font-medium text-bronze mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

      </motion.div>
      
    </section>
  );
}
