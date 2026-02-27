import Hero from "@/components/sections/Hero";
import BusinessFlavor from "@/components/sections/BusinessFlavor";
import IndustryAccordion from "@/components/sections/IndustryAccordion";
import ProductOverview from "@/components/sections/ProductOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturesSplit from "@/components/sections/FeaturesSplit";
import HardwareShowcase from "@/components/sections/HardwareShowcase";
import IndustryTabs from "@/components/sections/IndustryTabs";
import Testimonials from "@/components/sections/Testimonials";
import PricingPreview from "@/components/sections/PricingPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessFlavor />
      <IndustryAccordion />
      <ProductOverview />
      <HowItWorks />
      <FeaturesSplit />
      <HardwareShowcase />
      <IndustryTabs />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
