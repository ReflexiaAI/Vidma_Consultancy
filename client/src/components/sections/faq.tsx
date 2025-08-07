import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Why choose LegalConsult Pro?",
    answer: "We're a relentless team of experts who refuse to settle for anything less than perfection. Our mission is to simplify legal processes and turn chaos into clarity."
  },
  {
    question: "How much does it cost?",
    answer: "Cost varies based on the services needed. We provide tailored solutions to ensure maximum value to you and your business."
  },
  {
    question: "Is it secure and confidential?",
    answer: "Absolutely. Your security and privacy are our top priorities, and we implement the latest technology and industry best practices to safeguard your information."
  },
  {
    question: "How quickly can you start?",
    answer: "We can typically begin working on your case within 24-48 hours of initial consultation, depending on the complexity and urgency of your legal needs."
  }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="section-spacing bg-soft-grey">
      <div className="content-max-width mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-light text-charcoal mb-8 tracking-tight">
            Curious <span className="font-normal">Minds</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-pure-white rounded-2xl border border-charcoal/5 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-soft-grey/30 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3 className="text-xl font-medium text-charcoal pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-charcoal flex-shrink-0" />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openFaq === index ? "auto" : 0,
                  opacity: openFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-text-light font-light leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}