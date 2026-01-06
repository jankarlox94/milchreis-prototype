import React, { useState, useEffect } from "react";

const QualityShowcaseCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 1. Image Data (Using placeholders relevant to Rice Pudding/Ingredients)
  const images = [
    {
      url: "https://images.unsplash.com/photo-1505253758473-96b701d8fe52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Creamy texture close up",
    },
    {
      url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Premium Rice Grains",
    },
    {
      url: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Fresh Milk Pouring",
    },
    {
      url: "https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Cinnamon Sticks and Spices",
    },
  ];

  // 2. Timer Logic: Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      {/* CARD CONTAINER */}
      <div className="w-full max-w-lg rounded-2xl shadow-xl overflow-hidden border border-peach-beige/50">
        {/* --- CARD HEADER (Sliding Background) --- */}
        <div className="relative h-72 w-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Image with a slight zoom effect for dynamism */}
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-linear ${
                  index === currentImageIndex ? "scale-110" : "scale-100"
                }`}
              />
              {/* Overlay Gradient to ensure header text readability if you add any */}
              <div className="absolute inset-0 bg-dark-green/20 mix-blend-multiply"></div>
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-cream w-6"
                    : "bg-white/50 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* --- CARD BODY --- */}
        <div className="bg-cream p-8">
          <h3 className="text-2xl font-bold text-dark-green mb-2">
            The Milchreis Standard
          </h3>
          <p className="text-terracotta text-sm font-semibold uppercase tracking-wider mb-6">
            Uncompromising Quality
          </p>

          <ul className="space-y-4">
            {[
              "Prepared using a 1600s European heirloom recipe.",
              "100% All-Natural ingredients: No preservatives or gums.",
              "Slow-cooked with premium short-grain rice.",
              "Locally sourced whole milk and pure cane sugar.",
            ].map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-peach-beige flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    className="w-4 h-4 text-dark-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-dark-green/90 leading-relaxed font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-dark-green/10 flex justify-between items-center">
            <span className="text-sm text-dark-green/60 font-medium">
              Small Batch Guaranteed
            </span>
            <button className="px-6 py-2 bg-terracotta hover:bg-dark-green text-white text-sm font-bold rounded-lg transition-colors duration-300 shadow-sm">
              View Ingredients
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityShowcaseCard;
