import { motion } from "framer-motion";
import { Building, Shield, Handshake, Globe, TrendingUp, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building,
    title: "Corporate Law",
    description: "Strategic corporate governance, M&A transactions, and compliance frameworks for enterprise growth.",
    color: "bg-bronze",
  },
  {
    icon: Shield,
    title: "Compliance & Risk",
    description: "Comprehensive risk assessment and regulatory compliance strategies to protect your business interests.",
    color: "bg-teal",
  },
  {
    icon: Handshake,
    title: "Contract Law",
    description: "Expert contract drafting, negotiation, and dispute resolution to secure favorable business outcomes.",
    color: "bg-navy",
  },
  {
    icon: Globe,
    title: "International Law",
    description: "Cross-border legal strategies for global expansion and international business operations.",
    color: "bg-bronze",
  },
  {
    icon: TrendingUp,
    title: "Financial Law",
    description: "Securities regulation, financial compliance, and investment structuring for optimal capital management.",
    color: "bg-teal",
  },
  {
    icon: Settings,
    title: "IP & Technology",
    description: "Intellectual property protection, technology licensing, and digital transformation legal support.",
    color: "bg-navy",
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Comprehensive Legal <span className="text-bronze">Solutions</span>
          </h2>
          <p className="text-xl text-grey-secondary max-w-3xl mx-auto">
            Our full-spectrum legal consulting services are designed to protect and accelerate your business growth in today's complex regulatory environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-cream rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-grey-secondary mb-6">{service.description}</p>
              <motion.div
                className="flex items-center text-bronze font-semibold hover:text-bronze-hover transition-colors group-hover:translate-x-2"
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
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
          <div className="inline-flex items-center bg-bronze-light rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-navy mb-2">Need Custom Legal Solutions?</h3>
              <p className="text-grey-secondary mb-4">Our expert team crafts tailored strategies for your unique business challenges.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToContact}
                  className="bg-bronze hover:bg-bronze-hover text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Discuss Your Needs
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
