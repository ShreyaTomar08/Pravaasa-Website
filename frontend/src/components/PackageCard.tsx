import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import type { TravelPackage } from "@/data/packages";
import FallbackImage from "@/components/FallbackImage";

interface PackageCardProps {
  pkg: TravelPackage;
  index: number;
}

const PackageCard = ({ pkg, index }: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative"
    >
        <div className="relative overflow-hidden rounded-[2rem] glass-card gold-border-glow transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_110px_-50px_rgba(15,23,42,0.55)]">
        {/* Image header */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <FallbackImage src={pkg.heroImage} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full font-body text-[9px] tracking-[0.2em] uppercase"
            style={{ background: "hsla(var(--accent-red), 0.12)", backdropFilter: "blur(8px)", color: "hsl(var(--accent-red))", border: "1px solid hsla(var(--accent-red), 0.24)" }}>
            {pkg.tag}
          </span>
          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-1.5">{pkg.name}</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock size={12} className="text-gold/70" />
                <span className="font-body text-primary-foreground/60 text-[11px]">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={12} className="text-gold/70" />
                <span className="font-body text-primary-foreground/60 text-[11px]">{pkg.groupSize}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="bg-card/80 border border-primary-foreground/8 p-7 lg:p-8 backdrop-blur-sm">
          <p className="font-body text-primary-foreground/80 text-sm leading-relaxed mb-5 line-clamp-2">{pkg.description}</p>
          <ul className="space-y-2.5 mb-6">
            {pkg.highlights.slice(0, 3).map((h, j) => (
              <li key={j} className="flex items-start gap-2.5">
                <CheckCircle size={13} className="text-gold mt-0.5 shrink-0" />
                <span className="font-body text-primary-foreground/75 text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-end justify-between pt-5 border-t border-border">
            <div>
              <div className="font-body text-primary-foreground/60 text-[11px] line-through mb-0.5">{pkg.originalPrice}/person</div>
              <div className="font-display text-2xl font-bold text-foreground">{pkg.price}</div>
              <div className="font-body text-primary-foreground/70 text-[11px] tracking-wider">per person</div>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to={`/packages/${pkg.id}`}
                className="flex items-center gap-1.5 px-4 py-2 border border-gold/40 text-gold font-body font-semibold text-[10px] rounded-full tracking-[0.1em] uppercase hover:bg-gold hover:text-secondary-foreground transition-all duration-300"
              >
                View Details
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-secondary-foreground font-body font-semibold text-[10px] rounded-full tracking-[0.1em] uppercase hover:shadow-lg hover:shadow-gold/25 hover:scale-105 transition-all duration-300"
              >
                Enquire Now <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
