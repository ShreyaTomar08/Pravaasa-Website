import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner = ({
  title = "Ready to Start Your Journey?",
  subtitle = "Let us craft the perfect travel experience for you. Get in touch with our experts today.",
  buttonText = "Plan Your Trip",
  buttonLink = "/contact",
}: CTABannerProps) => {
  return (
    <section className="py-24 bg-navy-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(38,72%,52%,0.3), transparent)" }} />
      <div className="hidden lg:block absolute top-1/3 right-1/4 lg:w-80 md:w-64 w-40 lg:h-80 md:h-64 h-40 rounded-full opacity-5 blur-3xl" style={{ background: "radial-gradient(circle, hsl(38,72%,52%), transparent)" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">Let's Go</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            {title}
          </h2>
          <div className="premium-divider mt-4 mb-6" />
          <p className="font-body text-primary-foreground/50 text-sm leading-relaxed mb-10">
            {subtitle}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-secondary-foreground font-body font-semibold text-xs rounded-full tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-gold/20 hover:scale-105 transition-all duration-300"
          >
            {buttonText}
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
