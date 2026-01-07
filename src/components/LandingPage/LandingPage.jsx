import HeroSection from "../Hero/Hero.jsx";
import ComparisonSection from "../ComparisonSection/ComparisonSection.jsx";
import ProductCtaSection from "../ProductCtaSection/ProductCtaSection.jsx";
// import Fondo2 from "./assets/fondo-non-invasive.png";
import PurchaseCTA from "../PurchaseCTA/PurchaseCTA.jsx";
import QualityCraftsmanship from "../QualityCraftsmanship/QualityCraftsmanship.jsx";

const LandingPage = () => {
  return (
    <div className="flex-grow">
      <HeroSection />
      <ProductCtaSection />
      <ComparisonSection />
      <QualityCraftsmanship />
      <PurchaseCTA />
    </div>
  );
};
export default LandingPage;
