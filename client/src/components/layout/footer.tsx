import { motion } from "framer-motion";
import { Scale, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-bronze rounded-lg flex items-center justify-center">
                <Scale className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold">LegalConsult Pro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming legal excellence at scale. The fastest-growing legal consultancy serving Fortune 500 companies worldwide.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-bronze transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-bronze transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-bronze transition-colors"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Legal Services</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                "Corporate Law",
                "M&A Transactions",
                "Compliance & Risk",
                "International Law",
                "Contract Law",
                "IP & Technology",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-bronze transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                "About Us",
                "Leadership Team",
                "Careers",
                "Press & Media",
                "Investor Relations",
                "Case Studies",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-bronze transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                "Legal Insights Blog",
                "Whitepapers",
                "Webinars",
                "Industry Reports",
                "Legal Updates",
                "Contact Support",
              ].map((resource) => (
                <li key={resource}>
                  <a href="#" className="hover:text-bronze transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-white/5 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Legal Intelligence Newsletter</h3>
              <p className="text-gray-300">Get exclusive insights on legal trends, regulatory updates, and strategic guidance.</p>
            </div>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button className="bg-bronze hover:bg-bronze-hover text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 LegalConsult Pro. All rights reserved. Attorney advertising material.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            {["Privacy Policy", "Terms of Service", "Bar Admissions", "Professional Conduct"].map((item) => (
              <a key={item} href="#" className="hover:text-bronze transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
