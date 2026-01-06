import React, { useState, useEffect } from "react";
import thenImage from "../../assets/workers.png";
import nowImage from "../../assets/industrial-kitchen.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";
import BowlOne from "../../assets/rice-pudding-bowl.png";
import Bowls from "../../assets/multiple-bowls.png";
import Ingredients from "../../assets/real-ingredients.png";
import Toppings from "../../assets/toppings-img.png";
import MassProdDesserts from "../../assets/industrial-kitchen.png";
import Workers from "../../assets/workers.png";
import DiffCupSizes from "../../assets/rice-cups-diff-sizes.png";

// Placeholder images for the concept
// const thenImage = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Vintage kitchen vibe
// const nowImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Modern supermarket aisle

const ComparisonSection = () => {
  // test image slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 1. Image Data (Using placeholders relevant to Rice Pudding/Ingredients)
  const images = [
    {
      url: `${BowlOne}`,
      alt: "Creamy texture close up",
    },
    {
      url: `${Ingredients}`,
      alt: "Premium Ingredients",
    },
    {
      url: `${Bowls}`,
      alt: "Multiple options",
    },
    {
      url: `${Toppings}`,
      alt: "Toppings options",
    },
    {
      url: `${DiffCupSizes}`,
      alt: "Menu options",
    },
    {
      url: `${Workers}`,
      alt: "Hand-made cooked with care",
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
  //

  // Reusable Checkmark Icon for the "Good" side
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-dark-green flex-shrink-0 mt-1"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Reusable "X" Icon for the "Bad" side
  const XIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-terracotta opacity-60 flex-shrink-0 mt-1"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="bg-cream py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
            Not All Rice Pudding Is Created Equal
          </h2>
          <p className="text-lg text-dark-green/80 leading-relaxed">
            Taste the difference real ingredients make. See how our small-batch,
            all-natural approach stacks up against the industrial giants.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch relative">
          {/* VS Badge (Desktop only central element) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark-green text-cream font-bold rounded-full w-16 h-16 items-center justify-center border-4 border-cream shadow-lg">
            VS
          </div>

          {/* OUR SIDE - The Good Stuff */}
          <div className="relative bg-peach-beige rounded-3xl shadow-[0_20px_50px_rgba(200,129,71,0.15)] overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] md:z-0">
            {/* "Best Choice" Badge */}
            <div className="absolute top-0 right-0 bg-terracotta text-white text-xs font-bold uppercase tracking-wider py-2 px-6 rounded-bl-2xl z-20 shadow-sm">
              The Natural Choice
            </div>

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

            {/* Content */}
            <div className="p-8 sm:p-10 bg-gradient-to-b from-peach-beige to-[#f9dacd]">
              {/* <div className="max-w-full">
                <motion.img
                  variants={slideUp(0.2)}
                  initial="initial"
                  animate="animate"
                  src={BowlOne}
                  alt="MiclhReis bowl"
                  className="m-auto rounded-lg"
                />
              </div> */}
              <h3 className="text-2xl font-bold text-dark-green mb-2">
                Our All-Natural Rice Pudding
              </h3>
              <p className="text-dark-green/80 mb-8 italic">
                Just like grandma used to make.
              </p>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-dark-green font-medium text-lg">
                    Five simple, real ingredients.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-dark-green text-lg">
                    Slow-cooked in small batches for creamy perfection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-dark-green text-lg">
                    Real whole milk and pure cane sugar.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-dark-green text-lg">
                    Naturally gluten-free, nothing artificial ever.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-dark-green text-lg">
                    Rich, authentic, homemade taste.
                  </span>
                </li>
              </ul>

              {/* <div className="mt-10">
                <button className="w-full py-4 bg-terracotta hover:bg-dark-green text-white font-bold rounded-xl transition-colors duration-300 shadow-md">
                  Shop Real Rice Pudding
                </button>
              </div> */}
            </div>
          </div>

          {/* THEIR SIDE - The Competition */}
          <div className="relative bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden md:z-0 md:mt-8 md:mb-8">
            {/* Card Header Image/Banner */}
            <div
              className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${MassProdDesserts})`, // Replace with your high-res image
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Icon representing industrial process */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg> */}
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 bg-gray-50 h-full">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                Mass Produced Brands
              </h3>
              <p className="text-gray-500 mb-8 italic">
                (e.g., Kozy Shack, store brands)
              </p>

              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-gray-600">
                  <XIcon />
                  <span>Long lists of unpronounceable ingredients.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <XIcon />
                  <span>Made in giant industrial vats.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <XIcon />
                  <span>Uses thickeners, gums, and artificial flavors.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <XIcon />
                  <span>Contains preservatives for shelf stability.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <XIcon />
                  <span>Often gummy or overly sweet texture.</span>
                </li>
              </ul>
              {/* Empty div to balance the button height on the other side if needed, or just leave empty space */}
              <div className="mt-10 h-[56px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
