import HeroSection from "./components/HeroSection";
import CategoriesBento from "./components/CategoriesBento";
import ProfessionalBadges from "./components/ProfessionalBadges";
import FranchiseSpotlight from "./components/FranchiseSpotlight";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <CategoriesBento />
      <ProfessionalBadges />
      <FranchiseSpotlight />
    </main>
  );
}
