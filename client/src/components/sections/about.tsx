import { motion } from "framer-motion";
import { Check, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: Check,
    title: "Market Leadership",
    description: "Consistently ranked among the top 3 legal consultancies for innovation and client satisfaction.",
    color: "bg-bronze",
  },
  {
    icon: Check,
    title: "Rapid Expansion",
    description: "Opening new offices across 5 continents with plans to double our team size by 2025.",
    color: "bg-teal",
  },
  {
    icon: Check,
    title: "Technology Integration",
    description: "Pioneering AI-assisted legal research and automated compliance monitoring systems.",
    color: "bg-navy",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-white border border-bronze/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-bronze font-medium text-sm">💼 Fastest Growing Legal Consultancy</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-navy mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Building the Future of
              <span className="text-bronze"> Legal Excellence</span>
            </motion.h2>

            <motion.p
              className="text-xl text-grey-secondary mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              From a visionary startup to an industry-leading consultancy, our rapid growth reflects our unwavering commitment to delivering exceptional legal solutions. With year-over-year revenue growth exceeding 300%, we're not just participating in the legal industry—we're transforming it.
            </motion.p>

            <div className="space-y-6 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-8 h-8 ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <achievement.icon className="text-white text-sm" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{achievement.title}</h4>
                    <p className="text-grey-secondary">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-lg font-semibold">
                Read Our Success Story
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office building representing business growth"
              className="rounded-2xl shadow-2xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Growth metrics overlay */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-bronze mb-1">300%</div>
                <div className="text-sm text-grey-secondary">Revenue Growth</div>
                <div className="text-xs text-teal mt-1">Year over Year</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                  <Rocket className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-bold text-navy">Next: IPO 2025</div>
                  <div className="text-sm text-grey-secondary">Strategic Expansion</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
