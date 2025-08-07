import { motion, useInView } from "framer-motion";
import { Building, Shield, Handshake, Globe, TrendingUp, Settings, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const services = [
  {
    icon: Building,
    title: "Corporate Governance",
    description: "Strategic leadership in corporate law, M&A transactions, and regulatory frameworks.",
    color: "bg-charcoal",
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description: "Proactive risk management and comprehensive compliance strategies.",
    color: "bg-charcoal",
  },
  {
    icon: Handshake,
    title: "Contract Strategy",
    description: "Expert negotiation and contract optimization for business growth.",
    color: "bg-charcoal",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "International legal frameworks for seamless market entry.",
    color: "bg-charcoal",
  },
  {
    icon: TrendingUp,
    title: "Financial Regulation",
    description: "Securities, compliance, and investment structuring expertise.",
    color: "bg-charcoal",
  },
  {
    icon: Settings,
    title: "Technology Law",
    description: "IP protection and digital transformation legal guidance.",
    color: "bg-charcoal",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="section-spacing bg-pure-white">
      <div className="content-max-width mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-light text-charcoal mb-8 tracking-tight">
            Legal <span className="font-normal">Solutions</span>
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive legal consulting designed for modern business challenges.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-pure-white border border-charcoal/5 rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group magnetic-hover"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
              }}
            >
              <motion.div
                className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-bronze to-teal opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <service.icon className="text-white text-lg relative z-10" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-medium text-charcoal mb-4"
                whileHover={{ color: "rgb(184, 115, 51)" }}
                transition={{ duration: 0.2 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-text-light mb-6 font-light leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.p>
              
              <motion.div
                className="flex items-center text-charcoal font-light hover:text-bronze transition-colors group-hover:translate-x-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.span>
                <ArrowRight className="ml-2" size={14} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-soft-grey rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-charcoal mb-4 tracking-tight">Custom Legal Strategy</h3>
            <p className="text-text-light mb-8 font-light leading-relaxed max-w-2xl mx-auto">Our expert team develops tailored solutions for complex business challenges.</p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={scrollToContact}
                className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-200"
              >
                Start Conversation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
