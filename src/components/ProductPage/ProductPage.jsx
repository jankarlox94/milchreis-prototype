import React, { useState } from "react";
import { ShoppingBag, ArrowRight, Info } from "lucide-react";
import BowlsPlain from "../../assets/ricepudding-thumbnail-plain.png";
import Bowls1 from "../../assets/ricepudding-thumbnail-1.png";
import Bowls2 from "../../assets/ricepudding-thumbnail-2.png";
import BowlsFruits from "../../assets/ricepudding-thumbnail-fruits.png";

const ProductPage = () => {
  // 1. Define Sizes and Base Prices
  const sizes = [
    { id: "small", label: "Small (8oz)", basePrice: 6.0 },
    { id: "medium", label: "Medium (12oz)", basePrice: 9.0 },
    { id: "large", label: "Large (16oz)", basePrice: 12.0 },
  ];

  // 2. Define Product Variations (Topings & Markup)
  // Images are placeholders from Unsplash
  const variations = [
    {
      id: 1,
      name: "The Purist",
      description:
        "Our signature creamy rice pudding, slow-cooked to perfection. Pure, unadulterated comfort.",
      markupPercentage: 0,
      image: BowlsPlain,
      tag: "Classic",
    },
    {
      id: 2,
      name: "Cinnamon Dust",
      description:
        "Warm and aromatic. The classic base dusted generously with premium Ceylon cinnamon.",
      markupPercentage: 0.08,
      image: Bowls1,
      tag: "Popular",
    },
    {
      id: 3,
      name: "Royal Pistachio",
      description:
        "A crunchy delight featuring crushed roasted pistachios and chew dried apricots.",
      markupPercentage: 0.17,
      image: Bowls2,
      tag: "Premium",
    },
    {
      id: 4,
      name: "Berry Bliss",
      description:
        "Fresh seasonal strawberries, blueberries, and raspberries for a tart, refreshing contrast.",
      markupPercentage: 0.25,
      image: BowlsFruits,
      tag: "Seasonal",
    },
  ];

  const [selectedSize, setSelectedSize] = useState(sizes[1]); // Default to Medium

  // Helper to calculate price based on size + markup
  const calculatePrice = (markup) => {
    const price = selectedSize.basePrice * (1 + markup);
    return price.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F3] text-stone-800 font-sans selection:bg-[#F2C8B5]">
      {/* --- Navbar --- */}
      <nav className="bg-[#C88147] px-6 py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[#FAF9F3]">
          <h1 className="text-2xl font-serif font-bold tracking-wide">
            CREAM & GRAIN
          </h1>
          <button className="flex items-center gap-2 hover:text-[#F2C8B5] transition-colors">
            <span className="hidden md:inline">Cart (0)</span>
            <ShoppingBag size={20} />
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="py-16 md:py-24 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-[#C88147] mb-4">
          Simple. Sweet. Sublime.
        </h2>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
          Handcrafted all-natural rice pudding. Choose your size, pick your
          topping, and taste the nostalgia.
        </p>

        {/* --- Size Selector --- */}
        <div className="inline-flex bg-white p-1 rounded-full shadow-lg border border-[#F2C8B5]">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedSize.id === size.id
                  ? "bg-[#C88147] text-white shadow-md"
                  : "text-stone-500 hover:text-[#C88147]"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </header>

      {/* --- Product Grid --- */}
      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {variations.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#F2C8B5] flex flex-col"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F2C8B5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Floating Tag */}
                <div className="absolute top-4 right-4 bg-[#FAF9F3] text-[#C88147] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {product.tag}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-[#C88147]">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-[#d4af37]">
                    ${calculatePrice(product.markupPercentage)}
                  </span>
                </div>

                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                {/* Actions */}
                <div className="space-y-3">
                  <button className="w-full py-3 bg-[#C88147] text-[#FAF9F3] font-medium rounded-xl hover:bg-[#d4af37] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    Order Now
                    <ArrowRight size={16} />
                  </button>

                  <button className="w-full py-2 text-[#C88147] text-sm font-medium hover:text-[#d4af37] transition-colors flex items-center justify-center gap-1 opacity-80 hover:opacity-100 group/link">
                    Know more
                    <Info
                      size={14}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Element */}
      <footer className="bg-[#F2C8B5]/30 py-12 text-center">
        <p className="text-[#C88147] font-serif italic text-lg">
          "Happiness is a bowl of rice pudding."
        </p>
      </footer>
    </div>
  );
};

export default ProductPage;
