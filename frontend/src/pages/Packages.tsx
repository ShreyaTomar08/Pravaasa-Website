import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Travel Packages"
        subtitle="Curated Journeys"
        description="Discover our signature itineraries, crafted for timeless luxury, authentic experiences, and effortless travel."
        backgroundImage="https://images.unsplash.com/photo-1488646472499-61e5ce3b9090?w=1200"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for a Custom Package?"
        subtitle="We can tailor any trip to your preferences, budget, and schedule. Just tell us your dream."
        buttonText="Request a Custom Trip"
      />
      <Footer />
    </div>
  );
};

export default Packages;
