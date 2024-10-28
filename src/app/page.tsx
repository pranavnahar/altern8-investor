import { AdvisorsSection } from "@/components/AdvisorsSection";
import { CompliantSection } from "@/components/CompliantSection";
import { DiverseAssetSection } from "@/components/DiverseAssetSection";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { ReadyToInvestSection } from "@/components/ReadyToInvestSection";
import { Testimonials } from "@/components/Testimonials";
import { WhySection } from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <ReadyToInvestSection />
      <DiverseAssetSection />
      <Testimonials />
      <AdvisorsSection />
      <CompliantSection />
      <FaqSection />
    </>
  );
}

