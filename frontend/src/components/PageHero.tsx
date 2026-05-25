import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, description, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback: hide broken image and let gradient show
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      ) : null}
      {/* Always show gradient background (works as fallback if image fails) */}
      <div className="absolute inset-0 bg-navy-gradient" />
      {backgroundImage && <div className="hero-overlay absolute inset-0" />}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/20" />

      {/* Decorative orbs */}
      <div className="hidden md:block absolute top-1/4 right-1/4 md:w-72 md:h-72 w-40 h-40 rounded-full opacity-[0.07] blur-3xl" style={{ background: "radial-gradient(circle, hsl(38,72%,52%), transparent)" }} />
      <div className="hidden md:block absolute bottom-1/4 left-1/4 md:w-56 md:h-56 w-32 h-32 rounded-full opacity-[0.05] blur-3xl" style={{ background: "radial-gradient(circle, hsl(38,72%,52%), transparent)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-5"
        >
          {subtitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight"
        >
          {title}
        </motion.h1>
        <div className="premium-divider mt-4 mb-6" />
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-primary-foreground/60 max-w-xl mx-auto text-sm leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
