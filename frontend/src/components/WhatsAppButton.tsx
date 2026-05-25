import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919818014755?text=Hi%20Pooja!%20I'm%20interested%20in%20planning%20a%20luxury%20trip."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden group-hover:flex items-center px-4 py-2 rounded-full font-body text-xs text-primary-foreground whitespace-nowrap shadow-lg"
        style={{ background: "hsl(220,45%,11%)", border: "1px solid hsla(38,72%,52%,0.2)" }}
      >
        Chat with us on WhatsApp
      </motion.div>

      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative"
        style={{ background: "#25D366" }}>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ background: "#25D366" }} />
        <MessageCircle size={26} className="text-white fill-white" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
