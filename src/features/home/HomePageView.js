import { getHomeVenues } from "@/data/turfs";
import { homeSteps } from "./data";
import { FeaturedVenuesSection } from "./components/FeaturedVenuesSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";

export function HomePageView() {
  const venues = getHomeVenues();

  return (
    <div className="min-h-screen bg-turf-surface text-turf-on-surface">
      <main>
        <HeroSection />
        <FeaturedVenuesSection venues={venues} />
        <HowItWorksSection steps={homeSteps} />
        <FinalCTASection />
      </main>
    </div>
  );
}
