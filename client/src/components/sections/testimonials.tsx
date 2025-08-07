import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "LegalConsult Pro transformed our M&A strategy and saved us millions in potential compliance issues. Their expertise is unmatched in the industry.",
    author: "James Mitchell",
    title: "CEO, TechCorp Industries",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "The international expansion legal framework they created allowed us to enter 12 new markets seamlessly. Outstanding strategic thinking.",
    author: "Emma Thompson",
    title: "CFO, Global Retail Corp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
  {
    content: "Their proactive compliance monitoring system prevented potential regulatory issues that could have cost us our IPO timeline. Exceptional foresight.",
    author: "Robert Kim",
    title: "Founder, FinTech Solutions",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
  },
];

const trustIndicators = [
  { value: "Fortune 500", label: "Companies Served" },
  { value: "$50B+", label: "Deals Facilitated" },
  { value: "25+", label: "Countries" },
  { value: "Zero", label: "Compliance Failures" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="text-bronze">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped industry leaders navigate complex legal challenges and achieve unprecedented growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex text-bronze text-lg">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-200 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <motion.img
                  src={testimonial.image}
                  alt={`${testimonial.author} - ${testimonial.title}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 pt-16 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold">{indicator.value}</div>
                <div className="text-sm">{indicator.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
