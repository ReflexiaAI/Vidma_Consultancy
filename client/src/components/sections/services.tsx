import { motion } from "framer-motion";
import { Building, Shield, Handshake, Globe, TrendingUp, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-pure-white border border-charcoal/5 rounded-3xl p-8 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center mb-8`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="text-white text-lg" />
              </motion.div>
              <h3 className="text-xl font-medium text-charcoal mb-4">{service.title}</h3>
              <p className="text-text-light mb-6 font-light leading-relaxed">{service.description}</p>
              <motion.div
                className="flex items-center text-charcoal font-light hover:text-bronze transition-colors group-hover:translate-x-1"
                whileHover={{ x: 2 }}
              >
                Learn More
                <ArrowRight className="ml-2" size={14} />
              </motion.div>
            </motion.div>
          ))}
        </div>

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
