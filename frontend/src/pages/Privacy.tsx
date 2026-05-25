import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero title="Privacy Policy" subtitle="Legal" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                We collect personal information that you voluntarily provide when making inquiries, bookings, or subscribing to our newsletter. This may include your name, email address, phone number, travel preferences, and payment details.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc list-inside font-body text-muted-foreground text-sm leading-relaxed space-y-1 ml-2">
                <li>Process your bookings and travel arrangements</li>
                <li>Communicate with you about your trips and inquiries</li>
                <li>Send promotional offers and travel inspiration (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Data Sharing</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                We share your information only with travel service providers (hotels, airlines, transport operators) necessary to fulfill your booking. We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Cookies & Analytics</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Our website uses cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. We may use analytics tools like Google Analytics to understand how visitors interact with our site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Data Security</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                We implement industry-standard security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. You can opt out of marketing communications by clicking the unsubscribe link in our emails or contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Contact Us</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at pooja@pravaasa.org or call +91 98180 14755.
              </p>
            </div>

            <p className="font-body text-muted-foreground/50 text-xs italic mt-12">Last updated: May 2026</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
