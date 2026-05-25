import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-compass">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(0)" }}
        />
      </div>

      {/* Multi-layer overlay */}
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-transparent to-navy/35" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />
        <div className="absolute left-1/2 top-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 rotate-45" />
        <div className="absolute left-10 top-28 w-24 h-24 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-10 bottom-24 w-28 h-28 rounded-full bg-[#ffffff0d] blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-gold/30"
          style={{ background: "hsla(220,45%,8%,0.55)", backdropFilter: "blur(14px)" }}
        >
          <Sparkles size={12} className="text-gold" />
          <span className="font-body text-gold-light text-[10px] tracking-[0.35em] uppercase">
            Premium Curated Travel Experiences
          </span>
          <Sparkles size={12} className="text-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="premium-divider mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-[5.2rem] font-bold mb-4 leading-[1.02] text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
        >
          Your compass to luxurious journeys
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          <span
            className="inline-block italic font-normal text-3xl md:text-5xl lg:text-[3.8rem] leading-[1.15] block mb-6 text-gold hero-subtitle"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Crafted around your world of refined travel.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-foreground/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-8"
        >
          Discover journeys shaped by elegant design, thoughtful hospitality, and unforgettable destinations — every detail personalized for a luxurious experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="inline-flex items-center justify-center gap-3 mb-12 text-[11px] uppercase tracking-[0.45em] hero-accent-line"
        >
          <Compass size={14} />
          <span>Inspired by classic navigation and tailored luxury</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-10 py-4 cta-gold text-secondary-foreground font-body font-semibold text-sm rounded-full tracking-[0.15em] uppercase hover:scale-105 transition-transform duration-300"
          >
            Explore Packages
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 border border-gold/40 text-gold font-body font-semibold text-sm rounded-full tracking-[0.15em] uppercase hover:bg-gold hover:text-secondary-foreground transition-all duration-500 gold-border-glow"
          >
            Plan My Trip
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "2,000+", label: "Happy Travelers" },
            { value: "50+", label: "Destinations" },
            { value: "10+", label: "Years of Excellence" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-gold font-bold text-xl md:text-2xl">{item.value}</div>
              <div className="font-body text-primary-foreground/40 text-[9px] tracking-[0.2em] uppercase">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#destinations"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="font-body text-primary-foreground/30 text-[9px] tracking-[0.3em] uppercase group-hover:text-gold/60 transition-colors">Scroll</span>
        <div className="w-5 h-9 border border-primary-foreground/20 group-hover:border-gold/40 rounded-full flex justify-center pt-2 transition-colors">
          <div className="w-1 h-1.5 bg-gold rounded-full" />
        </div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
