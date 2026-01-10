import React from "react";
import BowlOne from "../../assets/rice-pudding-bowl.png";
import BowlTwo from "../../assets/bowl-4.png";
import RealIngredients from "../../assets/real-ingredients.png";
import RealToppings from "../../assets/toppings-img.png";

// Placeholder images for the example. You should replace these with your actual image URLs.
const handCraftedImage = BowlOne;
const realIngredientsImage = RealIngredients;
const artisanToppingsImage = RealToppings;

const QualityCraftsmanship = () => {
  return (
    <div className=" py-12 bg-peach-beige">
      <div className="max-w-6xl  mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Quality & Craftsmanship</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Card 1: Made on demand */}
            <div className="flex flex-col bg-terracotta sm:flex-row  rounded-2xl p-6 items-start">
              <img
                src={handCraftedImage}
                alt="Hand-Crafted Daily"
                className="w-full sm:w-32 sm:h-32 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Hand-Crafted Daily
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our pudding is made fresh daily in small batches, ensuring
                  optimal texture and flavor in every cup.
                </p>
              </div>
            </div>

            {/* Card 2: Hand-Crafted Daily */}
            <div className="flex flex-col bg-terracotta sm:flex-row  rounded-2xl p-6 items-start">
              <img
                src={handCraftedImage}
                alt="Hand-Crafted Daily"
                className="w-full sm:w-32 sm:h-32 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Hand-Crafted Daily
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our pudding is made fresh daily in small batches, ensuring
                  optimal texture and flavor in every cup.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Card 3: Real Ingredients Only */}
            <div className="flex flex-col sm:flex-row bg-terracotta rounded-2xl p-6 items-start ">
              <img
                src={realIngredientsImage}
                alt="Real Ingredients Only"
                className="w-full sm:w-32 sm:h-32 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Real Ingredients Only
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We use whole milk, real cream, genuine vanilla, and no
                  artificial colors or preservatives.
                </p>
              </div>
            </div>
            {/* place car here */}
            {/* Card 2: Artisan Toppings */}
            <div className="flex flex-col sm:flex-row bg-terracotta rounded-2xl p-6 items-start">
              <img
                src={artisanToppingsImage}
                alt="Artisan Toppings"
                className="w-full sm:w-32 sm:h-32 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Artisan Toppings</h3>
                <p className="text-gray-300 leading-relaxed">
                  Each flavor features uniquely designed, unconventional
                  toppings that are as unforgettable as the pudding itself.
                </p>
              </div>
            </div>
            {/* ends here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityCraftsmanship;
