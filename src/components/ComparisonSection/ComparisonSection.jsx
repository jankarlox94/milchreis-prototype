import React from 'react';
import thenImage from "../../assets/workers.png";
import nowImage from "../../assets/industrial-kitchen.png";

// Placeholder images for the concept
// const thenImage = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Vintage kitchen vibe
// const nowImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Modern supermarket aisle

const ComparisonBlock = ({ title, text, imageSrc, isSepia }) => (
  <div className="flex-1">
    <div className={`mb-6 overflow-hidden rounded-2xl shadow-md aspect-[4/3] relative ${isSepia ? 'sepia-[.4]' : ''}`}>
      <img src={imageSrc} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        {/* Dark overlay to make white text pop if needed, but design uses dark text below */}
    </div>
    <h3 className="font-serif font-bold text-2xl mb-2 text-dark-green">{title}</h3>
    <p className="text-dark-green/80 leading-relaxed">{text}</p>
  </div>
);

const ComparisonSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-container-desktop mx-auto">
      <h2 className="text-center font-serif font-bold text-3xl md:text-4xl mb-12 text-dark-green">
       Defiantly Natural. Honestly Delicious.
      
        
      </h2>
       <h2 className="text-center font-serif font-bold text-3xl md:text-4xl mb-12 text-dark-green">The Why: Then vs. Now</h2> 
      <h3 className="text-center font-serif font-bold text-xl md:text-xl mb-12 text-dark-green">"We believe in selling only the desserts we personally love and trust. Our strict commitment to natural ingredients is our way of reclaiming the essence of real food—returning to quality that has been lost in the age of mass production."</h3>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        <ComparisonBlock 
          title="Then(The way we do it):"
          text="Time-honored recipes, fresh ingredients harvested seasonally, and daily preparation with care and patience."
          imageSrc={thenImage}
          isSepia={true}
        />
        <ComparisonBlock 
          title="Now:"
          text="Mass production, artificial flavors, preservatives for long shelf life, and a disconnect from the source."
          imageSrc={nowImage}
          isSepia={false}
        />
      </div>
    </section>
  );
};

export default ComparisonSection;