import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Mehta",
    trip: "Bali Retreat",
    text: "Pravaasa turned our honeymoon into a fairytale. Every detail was perfect — from the private villa to sunset dinners on the beach.",
    rating: 5,
  },
  {
    name: "Rohan & Priya",
    trip: "European Tour",
    text: "We explored 5 countries in 3 weeks with zero stress. Pooja's expertise made every transition effortless and every moment magical.",
    rating: 5,
  },
  {
    name: "Sunita Kapoor",
    trip: "Swiss Alps Getaway",
    text: "The level of personalization was extraordinary. It felt like the entire trip was designed reading our minds. Truly exceptional!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-[#070d16]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            What Travelers Say
          </h2>
          <div className="premium-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative overflow-hidden rounded-[2rem] border border-gold/10 bg-navy/80 p-8 shadow-[0_35px_90px_-50px_rgba(15,23,42,0.5)]"
            >
              <div className="absolute inset-x-6 top-6 h-28 rounded-b-[2rem] bg-gradient-to-b from-gold/10 to-transparent blur-3xl" />
              <div className="relative z-10">
                <Quote size={28} className="text-gold/20 mb-5" />
                <p className="font-body text-primary-foreground/75 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <div className="w-8 h-px bg-gold/30 mb-4" />
                <p className="font-display text-sm font-semibold text-primary-foreground tracking-wide">{t.name}</p>
                <p className="font-body text-[10px] text-primary-foreground/50 tracking-[0.2em] uppercase mt-1">{t.trip}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
