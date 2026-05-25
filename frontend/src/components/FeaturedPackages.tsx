import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Bali Honeymoon Escape",
    tag: "Most Popular",
    duration: "8 Days / 7 Nights",
    groupSize: "2 People",
    price: "$2,499",
    originalPrice: "$2,999",
    highlights: ["Private villa with infinity pool", "Sunset dinner at Tanah Lot", "Spa & wellness retreat", "Rice terrace trekking", "Airport transfers included"],
    gradient: "from-amber-900/80 to-navy/90",
  },
  {
    name: "Swiss Alps & Zurich",
    tag: "Luxury Pick",
    duration: "10 Days / 9 Nights",
    groupSize: "2–4 People",
    price: "$3,899",
    originalPrice: "$4,599",
    highlights: ["5-star mountain chalet", "Jungfrau scenic railway", "Cheese & chocolate tasting", "Lake Geneva cruise", "All transfers & trains"],
    gradient: "from-blue-900/80 to-navy/90",
  },
  {
    name: "Greek Island Hopping",
    tag: "Editor's Choice",
    duration: "12 Days / 11 Nights",
    groupSize: "2–6 People",
    price: "$3,299",
    originalPrice: "$3,899",
    highlights: ["Santorini caldera view hotel", "Mykonos day trip", "Athens Acropolis guided tour", "Catamaran sunset cruise", "Daily breakfast included"],
    gradient: "from-emerald-900/80 to-navy/90",
  },
];

const FeaturedPackages = () => {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(38,72%,52%,0.2), transparent)" }} />
        <div className="absolute bottom-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(38,72%,52%,0.2), transparent)" }} />
      </div>

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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            Featured Packages
          </h2>
          <div className="premium-divider mt-6 mb-6" />
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Expertly designed travel packages with every luxury detail thoughtfully arranged for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative"
            >
              <div className={`package-card relative rounded-2xl overflow-hidden border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl`}
                style={{
                  borderColor: "hsla(38,72%,52%,0.12)",
                  boxShadow: "0 4px 40px -15px hsla(220,45%,11%,0.1)"
                }}>

                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${pkg.gradient} p-8 relative`}>
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsl(38,72%,52%) 0%, transparent 60%)" }} />
                  <span className="inline-block px-3 py-1 rounded-full font-body text-[9px] tracking-[0.2em] uppercase mb-4"
                    style={{ background: "hsla(38,72%,52%,0.2)", color: "hsl(38,55%,75%)", border: "1px solid hsla(38,72%,52%,0.3)" }}>
                    {pkg.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-4 leading-snug">{pkg.name}</h3>
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

                {/* Body */}
                <div className="bg-background p-8">
                  <ul className="space-y-3 mb-8">
                    {pkg.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" />
                        <span className="font-body text-muted-foreground text-xs leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="font-body text-muted-foreground/60 text-[10px] line-through mb-0.5">{pkg.originalPrice}/person</div>
                      <div className="font-display text-2xl font-bold text-foreground">{pkg.price}</div>
                      <div className="font-body text-muted-foreground text-[10px] tracking-wider">per person</div>
                    </div>
                    <Link
                      to="/contact"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-secondary-foreground font-body font-semibold text-[11px] rounded-full tracking-[0.1em] uppercase hover:shadow-lg hover:shadow-gold/25 hover:scale-105 transition-all duration-300"
                    >
                      Plan Trip
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
