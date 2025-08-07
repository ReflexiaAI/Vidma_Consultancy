import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "LegalConsult Pro has been our steadfast partner at the agency for all things legal!!!",
    description: "I have been hiring LegalConsult Pro for the past 2 years. They have been a great partner with lots of experience. Always quick to respond. I have worked with many attorneys over the years and they are as good as they get.",
    author: "Ribraj Bhuyan",
    title: "Agency Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
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
    <section className="py-20 bg-pure-white">
      <div className="content-max-width mx-auto px-6">

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <p className="text-3xl lg:text-4xl font-light text-charcoal mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <p className="text-lg text-text-light font-light leading-relaxed max-w-3xl mx-auto">
                  {testimonial.description}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <motion.img
                  src={testimonial.image}
                  alt={`${testimonial.author} - ${testimonial.title}`}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="text-left">
                  <div className="font-medium text-charcoal">{testimonial.author}</div>
                  <div className="text-text-light text-sm">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
