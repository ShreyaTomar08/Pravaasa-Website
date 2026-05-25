import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero title="Terms & Conditions" subtitle="Legal" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose-custom space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Welcome to Pravassa. By accessing our website and using our services, you agree to be bound by these Terms & Conditions. Please read them carefully before making any booking or inquiry.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Booking & Payments</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">
                All bookings are subject to availability. A booking is confirmed only after we receive the required advance payment and send you a written confirmation. Prices listed on the website are indicative and may vary based on travel dates, group size, and customization.
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Payments can be made via bank transfer, UPI, or through payment links provided by our team. All amounts are in Indian Rupees (INR) unless otherwise specified.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Cancellation & Refund Policy</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Cancellation charges apply based on how close to the departure date the cancellation is made. Cancellations made 30+ days before departure may receive a partial refund minus processing fees. Cancellations within 15 days of departure are non-refundable. Specific cancellation terms will be outlined in your booking confirmation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Travel Documents & Insurance</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                It is the traveler's responsibility to ensure valid passports, visas, and any required travel documents. We strongly recommend purchasing comprehensive travel insurance. Pravassa is not liable for any issues arising from inadequate documentation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Liability</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Pravassa acts as an intermediary between travelers and service providers (hotels, airlines, transport operators). We are not liable for delays, cancellations, or service failures by third-party providers. Force majeure events including natural disasters, pandemics, and political unrest are beyond our control.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Changes to Itinerary</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                We reserve the right to modify itineraries due to weather, safety concerns, or logistical reasons. In such cases, we will provide suitable alternatives of equal or greater value. Any additional costs arising from traveler-requested changes will be borne by the traveler.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Privacy</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Your personal information is handled in accordance with our Privacy Policy. We do not sell or share your data with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Contact</h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                For any queries regarding these terms, please contact us at pooja@pravaasa.org or call +91 98180 14755.
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

export default Terms;
