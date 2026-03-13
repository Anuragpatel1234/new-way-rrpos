import Hero from "@/components/sections/Hero";
import BusinessFlavor from "@/components/sections/BusinessFlavor";
import PointOfSale from "@/components/sections/PointOfSale";
import IndustryAccordion from "@/components/sections/IndustryAccordion";
import HardwareShowcase from "@/components/sections/HardwareShowcase";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessFlavor />
      <PointOfSale />
      <IndustryAccordion />
      <HardwareShowcase />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
