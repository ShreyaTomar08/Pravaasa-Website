import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import DestinationsSection from "@/components/DestinationsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <DestinationsSection />

      {/* Featured Packages Section */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute top-8 left-6 w-24 h-24 rounded-full bg-[#F8E2B5]/50 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gold/15 blur-3xl" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-gold" />
              <p className="font-body text-gold text-xs tracking-[0.4em] uppercase">Curated Experiences</p>
              <Sparkles size={14} className="text-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111111] mb-5">
              Signature Journeys
            </h2>
            <div className="mx-auto mb-6 h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="font-body text-[#4B5563] max-w-lg mx-auto text-base leading-relaxed">
              Discover our most sought-after itineraries, crafted to showcase the best of each destination with ease and elegance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.slice(0, 3).map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-14"
          >
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 text-gold font-body text-xs font-semibold rounded-full hover:bg-gold hover:text-secondary-foreground transition-all duration-500 tracking-[0.15em] uppercase"
            >
              View All Packages
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
