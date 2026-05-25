import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { destinations, destinationCategories } from "@/data/destinations";

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filtered = activeTab === "All" ? destinations : destinations.filter((d) => d.category === activeTab);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Destinations"
        subtitle="Inspire Your Next Escape"
        description="From snow-capped Himalayan peaks to golden coastal escapes, each destination is handpicked for a memorable journey."
        backgroundImage="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-2 mb-14 flex-wrap"
          >
            {destinationCategories.map((cat) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="destination-card group aspect-[4/5]"
              >
                <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90" />

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full font-body text-[9px] tracking-[0.2em] uppercase ${dest.id === 'kashmir' ? 'text-accent-red' : ''}`}
                    style={dest.id === 'kashmir' ? { background: 'hsla(var(--accent-red), 0.08)', backdropFilter: 'blur(8px)', color: 'hsl(var(--accent-red))', border: '1px solid hsla(var(--accent-red), 0.22)' } : { background: 'hsla(38,72%,52%,0.2)', backdropFilter: 'blur(8px)', color: 'hsl(38,55%,75%)', border: '1px solid hsla(38,72%,52%,0.3)' }}
                  >
                    {dest.tag}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: "hsla(220,45%,11%,0.5)", backdropFilter: "blur(8px)" }}>
                  <Star size={9} className="fill-gold text-gold" />
                  <span className="font-body text-primary-foreground/80 text-[9px]">{dest.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-body text-gold text-[10px] tracking-[0.25em] uppercase mb-2">{dest.subtitle}</p>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">{dest.name}</h3>
                  <p className="font-body text-primary-foreground/50 text-xs leading-relaxed mb-3 line-clamp-2">{dest.description}</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Clock size={10} className="text-primary-foreground/40" />
                    <span className="font-body text-primary-foreground/40 text-[10px]">{dest.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-gold-light text-sm font-semibold">{dest.price}</span>
                    <Link
                      to={`/packages/${dest.packageIds[0]}`}
                      className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500"
                    >
                      <ArrowRight size={14} className="text-primary-foreground" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Can't Find Your Dream Destination?"
        subtitle="Tell us where you want to go and we'll create a custom itinerary just for you."
        buttonText="Contact Us"
      />
      <Footer />
    </div>
  );
};

export default Destinations;
