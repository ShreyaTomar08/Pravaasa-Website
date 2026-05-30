import { motion } from "framer-motion";
import { ArrowRight, Compass, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-beach.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ── Background Image with filter ── */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "saturate(0.65) brightness(0.85)" }}
      />
      {/* ── Overlays ── */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,4,2,0.72) 0%, rgba(6,4,2,0.52) 22%, rgba(6,4,2,0.28) 42%, rgba(6,4,2,0.08) 62%, rgba(6,4,2,0) 75%)" }} />
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-[720px] px-4 sm:px-6 md:px-8 lg:px-16 py-24 text-left">

          {/* ── Main Heading ── */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="font-display font-[900] text-[clamp(44px,4.6vw,62px)] leading-[0.93] tracking-[-0.02em] text-white"
            style={{
              textShadow:
                "0 2px 4px rgba(0,0,0,0.65), 0 8px 24px rgba(0,0,0,0.6), 0 32px 80px rgba(0,0,0,0.5)",
              WebkitTextStroke: "0.4px rgba(0,0,0,0.15)",
            }}
          >
            <span className="block">Your compass to</span>
            <span className="block">luxurious journeys</span>
          </motion.h1>

          {/* ── Golden Italic Tagline ── */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-7 text-[clamp(19px,2.4vw,28px)] leading-[1.3] italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#F0C84A",
              textShadow:
                "0 0 28px rgba(240,194,58,0.38), 0 0 60px rgba(240,185,40,0.18), 0 12px 40px rgba(0,0,0,0.45), 0 28px 72px rgba(0,0,0,0.32)",
              letterSpacing: "0.012em",
            }}
          >
            <span className="block">Crafted around your world, not just travel.</span>
          </motion.p>

          {/* ── Divider ── */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.68, ease: "easeOut" }}
            className="mt-6 origin-left"
            style={{
              height: "1px",
              width: "220px",
              background:
                "linear-gradient(to right, rgba(201,149,42,0.9), rgba(201,149,42,0.35), transparent)",
              boxShadow: "0 0 8px rgba(201,149,42,0.25)",
            }}
          />

          {/* ── Body Paragraph ── */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-6 max-w-[480px] text-[15px] leading-[1.9] text-white/88"
            style={{
              fontWeight: 400,
              letterSpacing: "0.018em",
              textShadow: "0 8px 28px rgba(0,0,0,0.38), 0 24px 64px rgba(0,0,0,0.28)",
            }}
          >
            Discover journeys shaped by elegant design, thoughtful hospitality, and
            unforgettable destinations — every detail personalized for a luxurious
            experience.
          </motion.p>

          {/* ── Stats Row ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-11 flex flex-col gap-7 sm:flex-row sm:items-center"
          >
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full text-[#F0C84A]"
                style={{
                  border: "1px solid rgba(240,194,58,0.28)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(201,149,42,0.08) 100%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <Users size={20} />
              </div>
              <div style={{ lineHeight: 1 }}>
                <p
                  className="text-[33px] font-black text-white"
                  style={{
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    textShadow: "0 4px 18px rgba(0,0,0,0.38)",
                    background: "linear-gradient(180deg, #fff 30%, #e8d9b8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  2,000+
                </p>
                <p
                  className="mt-1 text-[11px] uppercase text-white/80"
                  style={{
                    letterSpacing: "2.2px",
                    fontWeight: 600,
                    textShadow: "0 4px 14px rgba(0,0,0,0.28)",
                  }}
                >
                  Happy Travelers
                </p>
                <p
                  className="mt-[3px] text-[11.5px] text-white/55"
                  style={{ letterSpacing: "0.02em", fontWeight: 400 }}
                >
                  Trusted by explorers worldwide
                </p>
              </div>
            </div>

            {/* Divider */}
            <span
              className="hidden sm:block self-stretch"
              style={{
                width: "1px",
                height: "52px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.2) 60%, transparent)",
              }}
            />

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full text-[#F0C84A]"
                style={{
                  border: "1px solid rgba(240,194,58,0.28)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(201,149,42,0.08) 100%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <MapPin size={20} />
              </div>
              <div style={{ lineHeight: 1 }}>
                <p
                  className="text-[33px] font-black text-white"
                  style={{
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    textShadow: "0 4px 18px rgba(0,0,0,0.38)",
                    background: "linear-gradient(180deg, #fff 30%, #e8d9b8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  50+
                </p>
                <p
                  className="mt-1 text-[11px] uppercase text-white/80"
                  style={{
                    letterSpacing: "2.2px",
                    fontWeight: 600,
                    textShadow: "0 4px 14px rgba(0,0,0,0.28)",
                  }}
                >
                  Curated Destinations
                </p>
                <p
                  className="mt-[3px] text-[11.5px] text-white/55"
                  style={{ letterSpacing: "0.02em", fontWeight: 400 }}
                >
                  Handpicked for unique experiences
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-11 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              to="/packages"
              className="inline-flex items-center justify-center rounded-full text-[13.5px] font-bold uppercase tracking-[2.8px] text-black transition-all duration-300"
              style={{
                padding: "15px 34px",
                background:
                  "linear-gradient(135deg, #D4A031 0%, #C9952A 40%, #B8821E 100%)",
                boxShadow:
                  "0 4px 20px rgba(201,149,42,0.45), 0 1px 0 rgba(255,255,255,0.22) inset, 0 -1px 0 rgba(0,0,0,0.18) inset",
                letterSpacing: "2.6px",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #E0B040 0%, #D4A031 40%, #C9952A 100%)";
                e.currentTarget.style.boxShadow =
                  "0 6px 28px rgba(201,149,42,0.55), 0 1px 0 rgba(255,255,255,0.22) inset";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #D4A031 0%, #C9952A 40%, #B8821E 100%)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(201,149,42,0.45), 0 1px 0 rgba(255,255,255,0.22) inset, 0 -1px 0 rgba(0,0,0,0.18) inset";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Packages&nbsp;&nbsp;→
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full text-[13.5px] font-bold uppercase tracking-[2.8px] transition-all duration-300"
              style={{
                padding: "14px 34px",
                border: "1.5px solid rgba(201,149,42,0.65)",
                color: "#D4A031",
                background: "rgba(201,149,42,0.06)",
                backdropFilter: "blur(4px)",
                boxShadow:
                  "0 2px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
                letterSpacing: "2.6px",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #D4A031 0%, #C9952A 40%, #B8821E 100%)";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(201,149,42,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(201,149,42,0.06)";
                e.currentTarget.style.color = "#D4A031";
                e.currentTarget.style.borderColor = "rgba(201,149,42,0.65)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)";
              }}
            >
              Plan My Trip
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="absolute left-0 right-0 bottom-0 py-4"
        style={{ borderTop: "1px solid rgba(201,149,42,0.22)" }}
      >
        <p
          className="mx-auto max-w-[520px] text-center text-[10px] uppercase text-white/55"
          style={{
            letterSpacing: "4.5px",
            textShadow: "0 8px 24px rgba(0,0,0,0.3)",
            fontWeight: 500,
          }}
        >
          ⊕ INSPIRED BY CLASSIC NAVIGATION
          <span className="block" style={{ marginTop: "2px", letterSpacing: "4.5px" }}>
            AND TAILORED LUXURY
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;