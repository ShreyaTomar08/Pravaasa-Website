import { motion } from "framer-motion";

const logos = [
  "Taj Hotels",
  "Oberoi Group",
  "Six Senses",
  "Aman Resorts",
  "Ritz-Carlton",
  "Four Seasons",
];

const TrustBar = () => (
  <section className="py-12 bg-[#07101a] border-t border-b border-gold/10 overflow-hidden">
    <div className="container mx-auto px-4">
      <p className="font-body text-[9px] text-[#F2E5C2] tracking-[0.35em] uppercase text-center mb-8">
        Trusted by luxury brands
      </p>
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex gap-14 shrink-0"
        >
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="font-display text-sm font-semibold text-primary-foreground/70 hover:text-gold transition-colors duration-300 whitespace-nowrap tracking-[0.12em] cursor-default"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustBar;
