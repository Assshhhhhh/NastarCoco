import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import CocoffeePreview from "@/components/home/CocoffeePreview";
import CocoSquad from "@/components/home/CocoSquad";
import ProductsPreview from "@/components/home/ProductsPreview";
import RetailPartnersPreview from "@/components/home/RetailPartnersPreview";
import PromoEventsPreview from "@/components/home/PromoEventsPreview";
import TestimonyPreview from "@/components/home/TestimonyPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <CocoffeePreview />
      <CocoSquad />
      <ProductsPreview />
      <RetailPartnersPreview />
      <PromoEventsPreview />
      <TestimonyPreview />
      <FinalCTA />
    </>
  );
}
