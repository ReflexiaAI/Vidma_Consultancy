import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Scale, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "floating-nav" : "bg-background/90 dark:bg-background/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="content-max-width mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-8 h-8 bg-charcoal rounded-md flex items-center justify-center">
              <Scale className="text-white text-lg" />
            </div>
            <span className="text-xl font-medium text-foreground dark:text-foreground tracking-tight">Vidma Consulting Group</span>
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
                className="text-foreground dark:text-foreground hover:text-bronze transition-colors duration-200 font-normal text-sm tracking-wide"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-charcoal hover:bg-charcoal/90 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200"
                data-testid="button-schedule-consultation"
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="theme-toggle-mobile"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
            
            <button
              className="text-foreground dark:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                  className="text-foreground dark:text-foreground hover:text-bronze transition-colors duration-300 text-left"
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
