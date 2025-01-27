import BenefitsSection from "./components/BenefitsSection";
import ContactUsSection from "./components/ContactUsSection";
import DarkModeSection from "./components/DarkModeSection";
import FAQSection from "./components/FAQSection";
import HeroBlackSection from "./components/HeroBlackSection";
import HeroSection from "./components/HeroSection";
import PlansSection from "./components/PlansSection";
import RecentlyAddedSection from "./components/RecentlyAddedSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <DarkModeSection />
      <PlansSection />
      <FAQSection />
      <RecentlyAddedSection />
      <ContactUsSection />
      <HeroBlackSection />
    </>
  );
}

export default HomePage;
