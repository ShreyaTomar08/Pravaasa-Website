import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#070b15]/95 backdrop-blur-xl shadow-2xl shadow-[#071020]/40 py-3 border-b border-gold/10"
          : "bg-[#070b15]/40 backdrop-blur-xl py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Pravassa" className="h-11 w-11 rounded-full object-cover transition-transform duration-300 group-hover:scale-105 ring-1 ring-gold/20" />
          <div>
            <span className="font-display text-lg font-bold text-primary-foreground tracking-[0.25em] block leading-none">PRAVASSA</span>
            <span className="font-body text-[9px] text-[#F0D6A6] tracking-[0.3em] uppercase">Curated Journeys</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative font-body text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 pb-0.5 ${
                  isActive ? "text-gold" : "text-foreground/90 hover:text-gold"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, hsl(var(--gold)) 0%, hsl(var(--accent-red)) 100%)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="ml-2 px-7 py-2.5 border border-gold/40 text-gold font-body text-[11px] font-semibold rounded-full hover:bg-gold hover:text-secondary-foreground transition-all duration-500 tracking-[0.15em] uppercase"
          >
            Plan Trip
          </Link>
        </div>

        <button
          className="md:hidden text-primary-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-gradient overflow-hidden border-t border-primary-foreground/5"
          >
            <div className="flex flex-col items-center gap-7 py-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary-foreground/60 hover:text-gold font-body text-xs font-medium tracking-[0.25em] uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-8 py-3 bg-gold text-secondary-foreground font-body text-xs font-semibold rounded-full tracking-[0.15em] uppercase"
              >
                Plan Trip
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
