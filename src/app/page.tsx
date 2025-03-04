'use client';
import { useRouter } from 'next/navigation';

import { useUser } from '../components/Providers/UserProvider';
import { useLayoutEffect } from 'react';
import HeroSection from './_components/HeroSection';
import BenefitsSection from './_components/BenefitsSection';
import DarkModeSection from './_components/DarkModeSection';
import PlansSection from './_components/PlansSection';
import FAQSection from './_components/FAQSection';
import RecentlyAddedSection from './_components/RecentlyAddedSection';
import ContactUsSection from './_components/ContactUsSection';
import HeroBlackSection from './_components/HeroBlackSection';

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  useLayoutEffect(() => {
    if (user) {
      switch (user.type) {
        case 'provider':
          router.push('/provider');
          break;
        case 'manager':
          router.push('/manager');
          break;
        default:
          break;
      }
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
