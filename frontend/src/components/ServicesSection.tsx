import { motion } from "framer-motion";
import { Compass, Hotel, Plane, Shield } from "lucide-react";

const services = [
  {
    icon: <Compass size={28} />,
    title: "Curated Itineraries",
    desc: "Every journey is thoughtfully designed to match your unique preferences and travel style.",
  },
  {
    icon: <Hotel size={28} />,
    title: "Luxury Stays",
    desc: "Handpicked boutique hotels, resorts, and private villas that redefine comfort.",
  },
  {
    icon: <Plane size={28} />,
    title: "Seamless Flights",
    desc: "Hassle-free booking with premium airlines and exclusive deals for our travelers.",
  },
  {
    icon: <Shield size={28} />,
    title: "24/7 Concierge",
    desc: "Dedicated personal concierge ensuring every moment of your journey is flawless.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(184,134,11,0.16), transparent 18%), radial-gradient(circle at 85% 10%, rgba(17,17,17,0.06), transparent 18%)',
        }}
      />
      <div className="pointer-events-none absolute top-20 left-6 w-24 h-24 rounded-full bg-[#F7E4B0]/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-8 w-28 h-28 rounded-full bg-[#DBB15A]/25 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[#B8860B] text-xs tracking-[0.32em] uppercase mb-3">WHAT WE OFFER</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
            Our Services
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-24 rounded-full bg-[#B8860B]" />
          <p className="font-body text-[#4B5563] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            From planning to landing, we handle every detail with crafted precision so your journey feels effortless and unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-[2rem] border border-black/12 bg-white p-8 lg:p-10 text-center shadow-[0_25px_55px_-35px_rgba(15,23,42,0.2)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_-40px_rgba(15,23,42,0.22)]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-[#B8860B]/10" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#B8860B]/20 to-[#B8860B]/5 text-[#B8860B] shadow-[0_15px_30px_-18px_rgba(184,134,11,0.45)]">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#111111] mb-3">{s.title}</h3>
                <p className="font-body text-[#4B5563] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
