"use client";
import { useRouter } from "next/navigation";
import BenefitsSection from "./components/BenefitsSection";
import ContactUsSection from "./components/ContactUsSection";
import DarkModeSection from "./components/DarkModeSection";
import FAQSection from "./components/FAQSection";
import HeroBlackSection from "./components/HeroBlackSection";
import HeroSection from "./components/HeroSection";
import PlansSection from "./components/PlansSection";
import RecentlyAddedSection from "./components/RecentlyAddedSection";
import { useUser } from "../components/Providers/UserProvider";
import { useLayoutEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  useLayoutEffect(() => {
    if (user) {
      router.push("/manager");
    }
  }, [user, router]);

  if (user) {
    return null;
  }

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
