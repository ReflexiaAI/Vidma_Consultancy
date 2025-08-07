import { motion } from "framer-motion";
import { Building, Shield, Handshake, Globe, TrendingUp, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Litigation",
    description: "Navigate the complexities of legal disputes with confidence through our litigation services. Our experienced team will protect your rights and advocate for your best interests.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Contract Management",
    description: "Stay in control and organized with our expert contract management services. We'll ensure everything runs like clockwork. Wave goodbye to legalese nightmares.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Trademark Filing",
    description: "Protect your brand with our trademark filing process. We'll help secure your intellectual property without breaking a sweat. Our seasoned professionals will navigate the legal intricacies.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
    <section id="services" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative h-screen flex items-center justify-center overflow-hidden group cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/70 transition-colors duration-300"></div>
              <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
                <motion.h2 
                  className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                >
                  {service.title}
                </motion.h2>
                <motion.p 
                  className="text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
