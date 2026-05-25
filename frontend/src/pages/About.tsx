import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { Award, Globe, Heart, Users, Shield, Compass } from "lucide-react";

const values = [
  { icon: <Compass size={24} />, title: "Curated Experiences", desc: "Every journey is handcrafted based on your unique preferences, interests, and travel style." },
  { icon: <Shield size={24} />, title: "Trusted & Reliable", desc: "With years of experience and thousands of happy travelers, your trip is in safe hands." },
  { icon: <Users size={24} />, title: "Personal Touch", desc: "A dedicated travel expert works with you from the first call to your return home." },
  { icon: <Heart size={24} />, title: "Passion for Travel", desc: "We don't just plan trips — we create stories worth telling, memories worth reliving." },
];

const stats = [
  { icon: <Globe size={22} />, value: "50+", label: "Destinations" },
  { icon: <Heart size={22} />, value: "2,000+", label: "Happy Travelers" },
  { icon: <Award size={22} />, value: "10+", label: "Years Experience" },
  { icon: <Users size={22} />, value: "98%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="About Pravassa"
        subtitle="Our Story"
        description="We believe travel should inspire, rejuvenate, and create bonds that last a lifetime."
      />

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">Who We Are</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Your Journey, <span className="italic text-gradient-gold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Our Passion</span></h2>
              <div className="w-12 h-px bg-gold/40 mb-8" />
              <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm">
                Pravassa was born out of a deep love for exploration and a desire to share the world's most beautiful experiences with fellow travelers. What started as a small team of travel enthusiasts has grown into a trusted name in curated travel.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm">
                We specialize in crafting bespoke itineraries across India and beyond — from the misty hills of Kashmir to the golden deserts of Rajasthan, from Kerala's tranquil backwaters to Dubai's dazzling skyline. Every trip we design is a blend of careful research, local expertise, and genuine care.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                Our mission is simple: to make travel seamless, meaningful, and unforgettable. We handle every detail so you can focus on what matters most — creating memories with the people you love.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800" alt="Travel planning" className="w-full h-[450px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-gradient rounded-2xl p-6 shadow-xl border border-gold/10">
                <p className="font-display text-3xl font-bold text-gold mb-1">10+</p>
                <p className="font-body text-primary-foreground/60 text-xs tracking-widest uppercase">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-950 mb-5">What Makes Pravassa Different</h2>
            <div className="premium-divider mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="premium-card group p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-gold/20 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-secondary-foreground group-hover:border-gold transition-all duration-500">{v.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-navy-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl border border-primary-foreground/8 hover:border-gold/20 transition-all duration-500">
                <div className="text-gold/60 mb-3 flex justify-center">{s.icon}</div>
                <div className="font-display text-3xl font-bold text-primary-foreground mb-1">{s.value}</div>
                <div className="font-body text-primary-foreground/40 text-xs tracking-[0.15em] uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Let's Plan Your Next Adventure" subtitle="Get in touch and tell us about your dream trip. We'll handle the rest." />
      <Footer />
    </div>
  );
};

export default About;
