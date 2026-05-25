import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: <Phone size={20} />, title: "Call Us", detail: "+91 98180 14755", sub: "Mon–Sat, 10AM–7PM IST" },
  { icon: <Mail size={20} />, title: "Email Us", detail: "pooja@pravaasa.org", sub: "We reply within 24 hours" },
  { icon: <MapPin size={20} />, title: "Visit Us", detail: "New Delhi, India", sub: "By appointment only" },
  { icon: <Clock size={20} />, title: "Working Hours", detail: "Mon–Sat, 10AM–7PM", sub: "Sunday by appointment" },
  { icon: <Send size={20} />, title: "Website", detail: "pravaasa.org", sub: "Visit us online" },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Get In Touch"
        subtitle="Contact Us"
        description="Ready to explore? Share your dream destination and we'll craft the perfect trip for you."
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1200"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
              <div>
                <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">Reach Out</p>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">Let's design your next unforgettable trip</h2>
                <div className="w-12 h-px bg-gold/40 mb-6" />
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Share your travel aspirations and we’ll create a beautifully curated itinerary tailored just for you. Reach out for a warm, personal planning experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="premium-card p-6 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full border border-gold/20 text-gold flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="font-body text-foreground text-sm mb-0.5">{item.detail}</p>
                      <p className="font-body text-muted-foreground text-[10px]">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="premium-card p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Send an Inquiry</h3>
                <p className="font-body text-muted-foreground text-xs mb-6">Fill in your details and we'll get back to you within 24 hours.</p>
                <InquiryForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
