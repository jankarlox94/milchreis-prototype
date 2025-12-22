import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/Hero';
import UspBanner from './components/UspBanner/UspBanner';
import ComparisonSection from './components/ComparisonSection/ComparisonSection';
import ProductCtaSection from './components/ProductCtaSection/ProductCtaSection';
import Fondo2 from "./assets/fondo-non-invasive.png";

function App() {
      const bgImagen = {
        backgroundImage: `url(${Fondo2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        position: "relative",
    };
  return (
     <div
        
            className="flex justify-center overflow-hidden min-h-screen"
        >
                <div className="min-h-screen flex flex-col">
                <header>
                    <Navbar />
                </header>
                <main className="flex-grow">
                    <HeroSection />
                    <UspBanner />
                    <ComparisonSection />
                    <ProductCtaSection />
                </main>
                {/* Simple footer for completeness */}
                <footer className="py-8 text-center text-dark-green/60 text-sm">
                    © {new Date().getFullYear()} MilchReis Pudding Co. USA🇺🇸. All rights reserved.
                </footer>
                </div>
        </div>
  
  );
}

export default App