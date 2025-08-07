import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "floating-nav bg-white/95" : "bg-cream/80"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-10 h-10 bg-bronze rounded-lg flex items-center justify-center">
              <Scale className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-navy">LegalConsult Pro</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Team", id: "team" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-charcoal hover:text-bronze transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-bronze hover:bg-bronze-hover text-white px-6 py-3 rounded-lg font-semibold hidden md:block"
            >
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "About", id: "about" },
                { name: "Team", id: "team" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-charcoal hover:text-bronze transition-colors duration-300 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-bronze hover:bg-bronze-hover text-white px-6 py-3 rounded-lg font-semibold mt-4"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
