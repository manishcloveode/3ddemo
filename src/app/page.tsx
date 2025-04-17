import { HeroSection } from '@/components/home/hero-section';
import BitZinoCards from '@/components/home/bitzino-cards';
import CoreValues from '@/components/home/value-section';
import BitZinoComponent from '@/components/home/entertainment-section';
import TelegramCollaborationSection from '@/components/home/telegram-section';
import BitzTokenEcosystem from '@/components/home/ecosystem-section';
import CardSlider from '@/components/home/slider-section';
import VisionSection from '@/components/home/vision-section';
import TelegramJoinBanner from '@/components/home/join-telegram-section';
export default function Home() {
  return (
    <>
      <HeroSection />
      <BitZinoCards />
      <CoreValues />
      <BitZinoComponent />
      <TelegramCollaborationSection />
      <BitzTokenEcosystem />
      <CardSlider />
      <VisionSection />
      <TelegramJoinBanner />
    </>

  );
}