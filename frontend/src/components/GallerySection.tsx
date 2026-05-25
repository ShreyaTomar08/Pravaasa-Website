import { motion } from "framer-motion";
import { useState } from "react";
import destBali from "@/assets/dest-bali.jpg";
import destGreece from "@/assets/dest-greece.jpg";
import destIndia from "@/assets/dest-india.jpg";
import destSwitzerland from "@/assets/dest-switzerland.jpg";
import heroImage from "@/assets/hero-beach.jpg";

const photos = [
  { src: destBali, label: "Bali, Indonesia", span: "col-span-1 row-span-2" },
  { src: destGreece, label: "Santorini, Greece", span: "col-span-1 row-span-1" },
  { src: heroImage, label: "Maldives", span: "col-span-1 row-span-1" },
  { src: destIndia, label: "Rajasthan, India", span: "col-span-1 row-span-1" },
  { src: destSwitzerland, label: "Swiss Alps", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  return (
    <section className="py-28 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">Visual Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-950 mb-5">
            Moments from the{" "}
            <span
              className="italic font-normal text-gradient-gold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              World
            </span>
          </h2>
          <div className="premium-divider mt-6 mb-6" />
          <p className="font-body text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            A glimpse of the extraordinary places we've taken our travelers.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setLightbox(photo)}
              className={`relative overflow-hidden rounded-xl cursor-zoom-in group ${
                i === 0 ? "row-span-2" : ""
              } ${i === 0 ? "aspect-[3/5]" : "aspect-[4/3]"}`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-body text-[10px] text-primary-foreground/80 tracking-[0.2em] uppercase">{photo.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-gold tracking-[0.2em] uppercase transition-colors duration-300 border-b border-muted-foreground/20 hover:border-gold/40 pb-1"
          >
            Follow us on Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center font-body text-xs text-primary-foreground/50 tracking-[0.2em] uppercase mt-4">{lightbox.label}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
