import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import TrustedBy from "@/components/sections/trusted-by";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-pure-white font-inter">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Testimonials />
        <TrustedBy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
