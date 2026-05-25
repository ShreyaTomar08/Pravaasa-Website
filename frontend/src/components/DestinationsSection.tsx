import { motion } from "framer-motion";
import { ArrowRight, Clock, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import destIndia from "@/assets/dest-india.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destSwitzerland from "@/assets/dest-switzerland.jpg";

const categories = ["All", "Asia", "Europe", "Islands"];

const destinations = [
  { name: "India", subtitle: "Land of Wonders", image: destIndia, price: "From $1,299", duration: "7–14 days", rating: "4.9", category: "Asia", tag: "Spiritual" },
  { name: "Greece", subtitle: "Mediterranean Magic", image: destGreece, price: "From $1,899", duration: "8–12 days", rating: "4.8", category: "Europe", tag: "Romantic" },
  { name: "Bali", subtitle: "Island of Gods", image: destBali, price: "From $1,599", duration: "6–10 days", rating: "4.9", category: "Islands", tag: "Popular" },
  { name: "Switzerland", subtitle: "Alpine Elegance", image: destSwitzerland, price: "From $2,199", duration: "7–10 days", rating: "4.8", category: "Europe", tag: "Luxury" },
];

const DestinationsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? destinations : destinations.filter(d => d.category === activeTab);

  return (
    <section id="destinations" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            Popular Destinations
          </h2>
          <div className="premium-divider mt-6 mb-6" />
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Handpicked destinations that promise extraordinary experiences and lasting memories.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-body text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-secondary-foreground shadow-lg shadow-gold/20"
                  : "border border-border text-muted-foreground hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {filtered.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="destination-card group aspect-[3/4]"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full font-body text-[9px] tracking-[0.2em] uppercase"
                  style={{ background: "hsla(38,72%,52%,0.2)", backdropFilter: "blur(8px)", color: "hsl(38,55%,75%)", border: "1px solid hsla(38,72%,52%,0.3)" }}>
                  {dest.tag}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full"
                style={{ background: "hsla(220,45%,11%,0.5)", backdropFilter: "blur(8px)" }}>
                <Star size={9} className="fill-gold text-gold" />
                <span className="font-body text-primary-foreground/80 text-[9px]">{dest.rating}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-body text-gold text-[10px] tracking-[0.25em] uppercase mb-2">{dest.subtitle}</p>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">{dest.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Clock size={10} className="text-primary-foreground/40" />
                  <span className="font-body text-primary-foreground/40 text-[10px]">{dest.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-gold-light text-sm font-semibold">{dest.price}</span>
                  <span className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                    <ArrowRight size={14} className="text-primary-foreground" />
                  </span>
                </div>
              </div>
            </motion.div>
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
            to="/destinations"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/40 text-gold font-body text-xs font-semibold rounded-full hover:bg-gold hover:text-secondary-foreground transition-all duration-500 tracking-[0.15em] uppercase"
          >
            View All Destinations
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
