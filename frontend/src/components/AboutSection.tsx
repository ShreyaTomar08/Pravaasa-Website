import { motion } from "framer-motion";
import { Award, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: <Globe size={22} />, value: "50+", label: "Destinations" },
  { icon: <Heart size={22} />, value: "2,000+", label: "Happy Travelers" },
  { icon: <Award size={22} />, value: "10+", label: "Years Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-[#05070f] relative overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 md:w-[500px] md:h-[500px] w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: 'radial-gradient(circle, hsla(38, 72%, 52%, 0.06), transparent)' }} />
      <div className="hidden md:block absolute bottom-0 left-0 md:w-[300px] md:h-[300px] w-32 h-32 rounded-full translate-y-1/2 -translate-x-1/2" style={{ background: 'radial-gradient(circle, hsla(38, 72%, 52%, 0.04), transparent)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold footer-heading mb-4 leading-tight">
              Your Journey,
            </h2>
            <h2 className="italic font-normal text-4xl md:text-5xl mb-8 about-strap text-gradient-gold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our Passion
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-8" />
            <p className="font-body about-lead leading-relaxed mb-5 text-sm">
              Founded by Pooja Khosla, Pravaasa is more than a travel agency — it's a gateway to
              transformative experiences. We believe travel should inspire, rejuvenate, and create
              bonds that last a lifetime.
            </p>
            <p className="font-body about-lead leading-relaxed mb-10 text-sm">
              With deep expertise in curating bespoke itineraries across the globe, we ensure every
              trip is seamless, luxurious, and uniquely yours.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-gold/40 text-gold font-body font-medium text-sm rounded-full hover:bg-gold hover:text-secondary-foreground transition-all duration-500 tracking-[0.15em] uppercase"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl border border-primary-foreground/8 hover:border-gold/20 transition-all duration-500"
              >
                <div className="text-gold/60 mb-4 flex justify-center">{stat.icon}</div>
                <div className="font-display text-3xl font-bold text-primary-foreground mb-2">{stat.value}</div>
                <div className="font-body text-primary-foreground/40 text-xs tracking-[0.15em] uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
