import { Instagram, Facebook, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer
      className="relative"
      style={{ background: 'linear-gradient(180deg, #040409 0%, #070a13 45%, #111827 100%)' }}
    >
      {/* Newsletter strip */}
      <div className="border-b border-primary-foreground/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <p className="font-body text-[11px] text-gold tracking-[0.35em] uppercase mb-1">Stay Inspired</p>
              <p className="font-display text-xl md:text-2xl font-bold footer-heading">Receive curated travel ideas and exclusive trip offers</p>
            </div>
            <div className="flex w-full md:w-auto gap-0 max-w-sm">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-5 py-3 bg-primary-foreground/5 border border-primary-foreground/10 border-r-0 rounded-l-xl font-body text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-gold/30 transition-all"
              />
              <button className="px-5 py-3 bg-gold rounded-r-xl text-secondary-foreground hover:bg-gold-dark transition-colors duration-300">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-24">
        <div className="container mx-auto px-4 footer-inner">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <img src={logo} alt="Pravassa" className="h-12 w-12 rounded-full object-cover" />
                <span className="font-display text-lg md:text-xl font-bold footer-heading tracking-[0.25em]">PRAVASSA</span>
              </div>
              <p className="font-body footer-text text-sm leading-relaxed max-w-md mb-6">
                Crafting luxurious journeys for explorers who seek unforgettable destinations, elegant comfort, and authentic local experiences.
              </p>
              <div className="flex gap-3 footer-social">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-sm">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-body text-[11px] font-semibold footer-heading mb-6 tracking-[0.25em] uppercase">Quick Links</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/about" },
                  { label: "Destinations", to: "/destinations" },
                  { label: "Packages", to: "/packages" },
                  { label: "Contact", to: "/contact" },
                ].map((l) => (
                  <Link key={l.label} to={l.to} className="font-body footer-link transition-colors group flex items-center gap-2">
                    <span className="w-0 h-px bg-gold group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-body text-[11px] font-semibold footer-heading mb-6 tracking-[0.25em] uppercase">Contact</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:pooja@pravaasa.org" className="font-body footer-link">pooja@pravaasa.org</a>
                <a href="tel:+919818014755" className="font-body footer-link">+91 98180 14755</a>
                <a href="https://pravaasa.org" target="_blank" rel="noopener noreferrer" className="font-body footer-link">pravaasa.org</a>
                <p className="font-body footer-text">New Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="premium-divider mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-body text-[11px] footer-muted tracking-[0.15em]">
              © {new Date().getFullYear()} Pravassa. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms & Conditions", to: "/terms" },
              ].map((l) => (
                <Link key={l.label} to={l.to} className="font-body text-[11px] footer-link tracking-wider transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
