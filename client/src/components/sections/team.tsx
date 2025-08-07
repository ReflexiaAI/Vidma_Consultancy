import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Michael Harrison",
    role: "CEO & Founder",
    description: "Former BigLaw partner with 20+ years experience. Harvard Law graduate with expertise in corporate strategy.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Sarah Chen",
    role: "Chief Legal Officer",
    description: "International law specialist with Stanford Law JD. Expert in cross-border transactions and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "David Rodriguez",
    role: "Managing Partner",
    description: "Technology law pioneer with Columbia Law background. Leads our digital transformation and IP practice groups.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-spacing bg-pure-white">
      <div className="content-max-width mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-light text-charcoal mb-8 tracking-tight">
            Leadership <span className="font-normal">Team</span>
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto font-light leading-relaxed">
            Visionary leaders driving innovation in legal consulting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-pure-white border border-charcoal/5 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-sm hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3 className="text-lg font-medium text-charcoal mb-2">{member.name}</h3>
              <p className="text-bronze font-light mb-4 text-sm">{member.role}</p>
              <p className="text-text-light text-sm mb-6 font-light leading-relaxed">{member.description}</p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="#"
                  className="text-charcoal hover:text-bronze transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin className="text-base" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-charcoal hover:text-bronze transition-colors"
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
