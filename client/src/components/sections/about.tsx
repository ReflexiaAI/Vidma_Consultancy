import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check, Rocket, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const achievements = [
  {
    icon: Check,
    title: "Information Security",
    description: "Strict adherence to industry best practices with cloud-based data storage and certifications.",
    color: "bg-charcoal",
  },
  {
    icon: Check,
    title: "Multi-Jurisdictional Expertise",
    description: "Experienced team providing legal services across multiple jurisdictions and practice areas.",
    color: "bg-charcoal",
  },
  {
    icon: Check,
    title: "Technology Integration",
    description: "Intelligent use of software and processes for efficient project delivery and contract management.",
    color: "bg-charcoal",
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  return (
    <section id="about" className="section-spacing bg-soft-grey relative overflow-hidden">
      
      <div className="content-max-width mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center bg-pure-white border border-charcoal/10 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-charcoal font-normal text-sm tracking-wide">Technology Enabled Legal & Business Consultancy</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-light text-charcoal mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Simplifying Legal
              <span className="font-normal text-bronze"> Processes</span>
            </motion.h2>

            <motion.p
              className="text-lg text-text-light mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Vidma Consulting Group LLP has pledged its experience and skills to provide quality legal, financial and technological services with the highest integrity. We innovate and implement intelligent use of processes and technology.
            </motion.p>

            <div className="space-y-8 mb-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="flex items-start space-x-4 magnetic-hover"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <motion.div
                    className={`w-6 h-6 ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <achievement.icon className="text-white text-xs" />
                  </motion.div>
                  <div>
                    <motion.h4 
                      className="font-medium text-charcoal mb-2"
                      whileHover={{ color: "rgb(184, 115, 51)" }}
                    >
                      {achievement.title}
                    </motion.h4>
                    <motion.p 
                      className="text-text-light font-light"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {achievement.description}
                    </motion.p>
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
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
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
                <div className="text-2xl font-light text-charcoal mb-1">100%</div>
                <div className="text-xs text-text-light">Client Satisfaction</div>
                <div className="text-xs text-bronze mt-1">Trusted Partners</div>
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
                  <div className="font-medium text-charcoal text-sm">Quality Focus</div>
                  <div className="text-xs text-text-light">Highest Integrity</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
