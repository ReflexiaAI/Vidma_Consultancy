import { motion } from "framer-motion";
import { Calendar, Play, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream to-cream-alt"></div>
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23000000' fill-opacity='0.1'><circle cx='30' cy='30' r='2'/></g></svg>")`,
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-bronze-light border border-bronze/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-bronze font-medium text-sm">🚀 Industry Leader in Legal Innovation</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-navy leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming Legal
              <span className="text-bronze"> Excellence</span>
              at Scale
            </motion.h1>

            <motion.p
              className="text-xl text-grey-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              As the fastest-growing legal consulting firm, we deliver premium solutions that drive business success. Our innovative approach has helped Fortune 500 companies navigate complex legal landscapes with confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToContact}
                  className="bg-bronze hover:bg-bronze-hover text-white px-8 py-4 rounded-lg font-semibold"
                  size="lg"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Strategic Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-lg font-semibold"
                  size="lg"
                >
                  <Play className="mr-2" size={20} />
                  Watch Our Story
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { value: "500+", label: "Clients Served" },
                { value: "98%", label: "Success Rate" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-3xl font-bold text-bronze">{stat.value}</div>
                  <div className="text-sm text-grey-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional legal consultation meeting"
              className="rounded-2xl shadow-2xl w-full animate-float"
            />

            {/* Floating achievement card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center">
                  <Trophy className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-bold text-navy">Industry Leader</div>
                  <div className="text-sm text-grey-secondary">Top Legal Consultancy 2024</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
