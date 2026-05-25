import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Map, Plane, Star } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle size={24} />,
    number: "01",
    title: "Share Your Vision",
    desc: "Tell us your dream — destinations, travel style, budget, and dates. We listen carefully to every detail.",
  },
  {
    icon: <Map size={24} />,
    number: "02",
    title: "We Craft Your Journey",
    desc: "Our experts design a bespoke itinerary just for you, with hand-selected stays and exclusive experiences.",
  },
  {
    icon: <Plane size={24} />,
    number: "03",
    title: "We Handle Everything",
    desc: "Flights, hotels, transfers, visas — every logistic is flawlessly managed so you can simply look forward to the trip.",
  },
  {
    icon: <Star size={24} />,
    number: "04",
    title: "Travel & Cherish",
    desc: "Arrive, explore, and live each moment fully. Your dedicated concierge is always on call throughout.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-28 bg-navy-gradient relative overflow-hidden">
      {/* Decorative arc */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-10"
        style={{ background: "linear-gradient(90deg, transparent, hsl(38 72% 52%), transparent)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">How It Works</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-5">
            Your Journey in{" "}
            <span
              className="italic font-normal text-gradient-gold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Four Steps
            </span>
          </h2>
          <div className="premium-divider mt-6" />
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(38 72% 52% / 0.2), hsl(38 72% 52% / 0.2), transparent)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center group"
              >
                {/* Icon circle */}
                <div className="relative mb-8 inline-flex">
                  <div className="w-16 h-16 rounded-full border border-gold/20 bg-primary-foreground/[0.03] flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-secondary-foreground group-hover:border-gold transition-all duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-body text-[9px] font-semibold text-gold tracking-wider">
                    {i + 1}
                  </span>
                </div>

                <p className="font-body text-gold/40 text-[9px] tracking-[0.3em] uppercase mb-3">{step.number}</p>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-3">{step.title}</h3>
                <p className="font-body text-primary-foreground/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-secondary-foreground font-body font-semibold text-xs rounded-full tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-gold/20 hover:scale-105 transition-all duration-300"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
