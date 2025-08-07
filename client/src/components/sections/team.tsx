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
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Meet Our <span className="text-bronze">Leadership Team</span>
          </h2>
          <p className="text-xl text-grey-secondary max-w-3xl mx-auto">
            Industry veterans and visionary leaders driving innovation in legal consulting with decades of combined experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-cream rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
              <p className="text-bronze font-semibold mb-3">{member.role}</p>
              <p className="text-grey-secondary text-sm mb-4">{member.description}</p>
              <div className="flex justify-center space-x-3">
                <motion.a
                  href="#"
                  className="text-bronze hover:text-bronze-hover transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin className="text-lg" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-bronze hover:text-bronze-hover transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Twitter className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-bronze hover:bg-bronze-hover text-white px-8 py-4 rounded-lg font-semibold">
              View Full Team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
