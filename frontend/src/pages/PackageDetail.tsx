import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";
import FallbackImage from "@/components/FallbackImage";
import { getPackageById } from "@/data/packages";
import { motion } from "framer-motion";
import { Clock, Users, CheckCircle, XCircle, ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = getPackageById(id || "");
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!pkg) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">Package Not Found</h1>
            <p className="font-body text-muted-foreground mb-8">The package you're looking for doesn't exist.</p>
            <Link to="/packages" className="px-8 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-secondary-foreground font-body font-semibold text-xs rounded-full tracking-[0.15em] uppercase">
              View All Packages
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <FallbackImage src={pkg.heroImage} alt={pkg.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-gradient opacity-60" />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-navy/30" />
        <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full font-body text-[10px] tracking-[0.2em] uppercase mb-4" style={{ background: "hsla(38,72%,52%,0.2)", backdropFilter: "blur(8px)", color: "hsl(38,55%,75%)", border: "1px solid hsla(38,72%,52%,0.3)" }}>
              {pkg.tag}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-3">{pkg.name}</h1>
            <p className="font-body text-primary-foreground/60 text-lg italic mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{pkg.tagline}</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2"><Clock size={16} className="text-gold" /><span className="font-body text-primary-foreground/70 text-sm">{pkg.duration}</span></div>
              <div className="flex items-center gap-2"><Users size={16} className="text-gold" /><span className="font-body text-primary-foreground/70 text-sm">{pkg.groupSize}</span></div>
              <div className="flex items-center gap-2"><MapPin size={16} className="text-gold" /><span className="font-body text-primary-foreground/70 text-sm">{pkg.name.split(' ')[0]}</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden mb-4 aspect-[16/8]">
              <FallbackImage src={pkg.images[activeImage]} alt={pkg.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {pkg.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)} className={`rounded-xl overflow-hidden aspect-[16/9] border-2 transition-all duration-300 ${activeImage === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <FallbackImage src={img} alt={`${pkg.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
                <div className="w-10 h-px bg-gold/40 mb-6" />
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{pkg.description}</p>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Day-Wise Itinerary</h2>
                <div className="w-10 h-px bg-gold/40 mb-6" />
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <motion.div key={day.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-card p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shrink-0">
                          <span className="font-display text-sm font-bold text-secondary-foreground">{day.day}</span>
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-foreground mb-2">{day.title}</h3>
                          <p className="font-body text-muted-foreground text-sm leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">Inclusions</h2>
                  <div className="w-10 h-px bg-gold/40 mb-6" />
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" />
                        <span className="font-body text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">Exclusions</h2>
                  <div className="w-10 h-px bg-gold/40 mb-6" />
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <XCircle size={14} className="text-muted-foreground/40 mt-0.5 shrink-0" />
                        <span className="font-body text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <div className="w-10 h-px bg-gold/40 mb-6" />
                <div className="space-y-3">
                  {pkg.faqs.map((faq, i) => (
                    <div key={i} className="premium-card overflow-hidden">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                        <span className="font-display text-sm font-semibold text-foreground pr-4">{faq.question}</span>
                        <ChevronDown size={18} className={`text-gold shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-5 pb-5">
                          <p className="font-body text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Pricing Card */}
              <div className="premium-card p-8 sticky top-28">
                <p className="font-body text-muted-foreground/60 text-xs line-through mb-1">{pkg.originalPrice} / person</p>
                <p className="font-display text-4xl font-bold text-foreground mb-1">{pkg.price}</p>
                <p className="font-body text-muted-foreground text-xs tracking-wider mb-6">per person</p>
                <div className="w-full h-px bg-border mb-6" />

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3"><Clock size={14} className="text-gold" /><span className="font-body text-sm text-foreground">{pkg.duration}</span></div>
                  <div className="flex items-center gap-3"><Users size={14} className="text-gold" /><span className="font-body text-sm text-foreground">{pkg.groupSize}</span></div>
                </div>

                <a
                  href="#inquiry-form"
                  className="block w-full py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-secondary-foreground font-body font-semibold text-sm rounded-xl text-center tracking-[0.15em] uppercase hover:shadow-lg hover:shadow-gold/15 transition-all duration-300 mb-6"
                >
                  Send Inquiry
                </a>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">
                  Prefer a direct quote? Fill the quick inquiry form below and our travel expert will contact you.
                </p>

                <div className="w-full h-px bg-border mb-6" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Quick Inquiry</h3>
                <InquiryForm preselectedPackage={pkg.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackageDetail;
