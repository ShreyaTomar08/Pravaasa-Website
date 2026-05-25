import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How far in advance should I book my luxury trip?",
    a: "We recommend booking at least 3–6 months in advance for peak-season travel, and 1–3 months for off-peak. For highly exclusive experiences like private island buyouts or remote lodges, 6–12 months ahead is ideal.",
  },
  {
    q: "Do you handle visa applications?",
    a: "Yes — we provide detailed visa guidance and documentation checklists for every destination. For select countries, we can coordinate with our ground partners to streamline the process.",
  },
  {
    q: "Can Pravaasa accommodate special dietary requirements or accessibility needs?",
    a: "Absolutely. We work closely with all our hotel and restaurant partners to ensure every need — from dietary restrictions to mobility requirements — is met seamlessly throughout your journey.",
  },
  {
    q: "What is included in your concierge service?",
    a: "Our 24/7 concierge covers everything from flight changes and hotel upgrades to restaurant reservations, local guided experiences, and emergency support. Think of us as your personal travel command centre.",
  },
  {
    q: "Do you offer group and corporate travel packages?",
    a: "Yes — we curate bespoke group retreats, destination weddings, corporate incentive trips, and family reunions. Every group itinerary is fully customised with private venues, team-building activities, and dedicated coordinators.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "Policies vary by supplier and destination. We always explain the exact terms before you confirm, and we recommend comprehensive travel insurance — which we can help arrange — for full peace of mind.",
  },
];

const FaqItem = ({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-border last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left group"
    >
      <span className="font-display text-base font-semibold text-foreground group-hover:text-gold transition-colors duration-300 pr-8">
        {faq.q}
      </span>
      <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-gold bg-gold text-secondary-foreground" : "border-border text-muted-foreground group-hover:border-gold/40 group-hover:text-gold"}`}>
        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="font-body text-muted-foreground text-sm leading-relaxed pb-6 pr-12">{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-5xl mx-auto">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Common{" "}
              <span
                className="italic font-normal text-gradient-gold block"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Questions
              </span>
            </h2>
            <div className="w-10 h-px bg-gold/30 mb-6" />
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8">
              Can't find your answer here? Reach out — we're always happy to chat.
            </p>
            <Link
              to="/contact"
              className="inline-block px-7 py-3 border border-gold/40 text-gold font-body font-medium text-xs rounded-full hover:bg-gold hover:text-secondary-foreground transition-all duration-500 tracking-[0.15em] uppercase"
            >
              Ask Us Directly
            </Link>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
