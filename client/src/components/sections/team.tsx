import { motion } from "framer-motion";
import { Linkedin, Twitter, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import vidmaLogo from "@/assets/vidma-logo.png";

const team = [
  {
    name: "Michael Harrison",
    role: "CEO & Founder",
    description: "Former BigLaw partner with 20+ years experience. Harvard Law graduate with expertise in corporate strategy.",
  },
  {
    name: "Sarah Chen",
    role: "Chief Legal Officer",
    description: "International law specialist with Stanford Law JD. Expert in cross-border transactions and regulatory compliance.",
  },
  {
    name: "David Rodriguez",
    role: "Managing Partner",
    description: "Technology law pioneer with Columbia Law background. Leads our digital transformation and IP practice groups.",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-spacing bg-background dark:bg-background transition-colors duration-300">
      <div className="content-max-width mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-light text-foreground dark:text-foreground mb-8 tracking-tight">
            Leadership <span className="font-normal">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Visionary leaders driving innovation in legal consulting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-card dark:bg-card border border-border rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-sm hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br from-bronze/10 to-bronze/20 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={vidmaLogo}
                  alt="Vidma Consulting Group"
                  className="w-12 h-auto opacity-40"
                  whileHover={{ opacity: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-charcoal/80 rounded-full flex items-center justify-center"
                  whileHover={{ backgroundColor: "rgba(184, 115, 51, 0.8)" }}
                >
                  <User className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
              <h3 className="text-lg font-medium text-foreground dark:text-foreground mb-2">{member.name}</h3>
              <p className="text-bronze font-light mb-4 text-sm">{member.role}</p>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm mb-6 font-light leading-relaxed">{member.description}</p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="#"
                  className="text-foreground dark:text-foreground hover:text-bronze transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin className="text-base" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-foreground dark:text-foreground hover:text-bronze transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Twitter className="text-base" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-200">
              View Full Team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
