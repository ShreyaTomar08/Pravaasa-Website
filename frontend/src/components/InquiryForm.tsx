import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

interface InquiryFormProps {
  preselectedPackage?: string;
}

const InquiryForm = ({ preselectedPackage }: InquiryFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: preselectedPackage || "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    if (!formData.name || !formData.email) {
      setError('Please provide your name and email.');
      setSending(false);
      return;
    }

    const apiUrl = (import.meta.env as any).VITE_INQUIRY_API || "http://localhost:4000/api/inquiry";

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let body: any = {};
      try {
        body = await res.json();
      } catch (e) {
        // ignore parse error
      }

      // Treat ok: true as success regardless of other flags (email sent or not)
      if (body?.ok === true || res.status === 200) {
        setSubmitted(true);
      } else {
        throw new Error(body?.error || body?.message || 'Failed to send inquiry');
      }
    } catch (e: any) {
      console.error('Inquiry send error:', e);
      setError(e?.message || 'Unable to send inquiry. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="premium-card p-12 lg:p-14 text-center"
      >
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gold/10 text-gold flex items-center justify-center border border-gold/20">
          <Send size={24} />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">Inquiry Sent</h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed">
          Thank you for reaching out. Your travel request is now with our team, and we'll connect with tailored recommendations within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", email: "", package: preselectedPackage || "", travelDate: "", travelers: "", message: "" });
          }}
          className="mt-6 px-6 py-2 border border-gold/40 text-gold font-body text-xs font-semibold rounded-full hover:bg-gold hover:text-secondary-foreground transition-all duration-300 tracking-[0.15em] uppercase"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  const inputClasses = "w-full px-5 py-3.5 bg-[#111827] rounded-xl font-body text-sm text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/20 outline-none transition-all backdrop-blur-md";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 premium-card p-6 lg:p-8" id="inquiry-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className={inputClasses} />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required className={inputClasses} />
      </div>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className={inputClasses} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <select name="package" value={formData.package} onChange={handleChange} className={inputClasses}>
          <option value="">Choose a package or destination</option>
          <option value="Kashmir Escape">Kashmir Escape</option>
          <option value="Goa Beach Holiday">Goa Beach Holiday</option>
          <option value="Himachal Adventure">Himachal Adventure</option>
          <option value="Rajasthan Heritage Tour">Rajasthan Heritage Tour</option>
          <option value="Kerala Backwaters">Kerala Backwaters</option>
          <option value="Dubai Family Trip">Dubai Family Trip</option>
          <option value="Custom Trip">Custom Trip</option>
        </select>
        <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className={inputClasses} />
      </div>
      <input type="number" name="travelers" value={formData.travelers} onChange={handleChange} placeholder="Number of Travelers" min="1" max="20" className={inputClasses} />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your dream trip..." rows={4} className={`${inputClasses} resize-none`} />
      <button type="submit" disabled={sending} className="w-full py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-secondary-foreground font-body font-semibold text-sm rounded-xl transition-all duration-300 tracking-[0.15em] uppercase hover:shadow-lg hover:shadow-gold/15 disabled:opacity-60 disabled:cursor-not-allowed">
        {sending ? "Sending..." : "Send Inquiry"}
      </button>
      {error && <p className="mt-2 text-center text-sm text-red-400">{error}</p>}
    </form>
  );
};

export default InquiryForm;