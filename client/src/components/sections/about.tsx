import { motion } from "framer-motion";
import { Check, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: Check,
    title: "Innovation Leadership",
    description: "Setting new standards in legal consulting through strategic innovation.",
    color: "bg-charcoal",
  },
  {
    icon: Check,
    title: "Global Presence",
    description: "Expanding across continents with consistent excellence.",
    color: "bg-charcoal",
  },
  {
    icon: Check,
    title: "Technology First",
    description: "Leading transformation through advanced legal technology.",
    color: "bg-charcoal",
  },
];

export default function About() {
  return (
    <section id="about" className="section-spacing bg-soft-grey">
      <div className="content-max-width mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-pure-white border border-charcoal/10 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-charcoal font-normal text-sm tracking-wide">Fastest Growing Legal Consultancy</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-light text-charcoal mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Redefining Legal
              <span className="font-normal text-bronze"> Excellence</span>
            </motion.h2>

            <motion.p
              className="text-lg text-text-light mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              From visionary startup to industry leader, our growth reflects our commitment to exceptional legal solutions. We're not just practicing law—we're redefining it.
            </motion.p>

            <div className="space-y-8 mb-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-6 h-6 ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <achievement.icon className="text-white text-xs" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-2">{achievement.title}</h4>
                    <p className="text-text-light font-light">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-200">
                Our Story
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
              className="rounded-3xl w-full shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Growth metrics overlay */}
            <motion.div
              className="absolute -top-8 -right-8 apple-blur rounded-2xl p-6 border border-charcoal/5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="text-2xl font-light text-charcoal mb-1">300%</div>
                <div className="text-xs text-text-light">Revenue Growth</div>
                <div className="text-xs text-bronze mt-1">Year over Year</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 apple-blur rounded-2xl p-6 border border-charcoal/5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-charcoal rounded-xl flex items-center justify-center">
                  <Rocket className="text-white text-lg" />
                </div>
                <div>
                  <div className="font-medium text-charcoal text-sm">Next: IPO 2025</div>
                  <div className="text-xs text-text-light">Strategic Expansion</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
