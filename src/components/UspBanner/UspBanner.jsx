import React from 'react';

const UspItem = ({ iconClass, text }) => (
  <div className="flex items-center gap-4">
    <div className="bg-cream p-3 rounded-full text-dark-green shadow-sm">
        <i className={`bi ${iconClass} text-2xl`}></i>
    </div>
    <span className="font-semibold text-md md:text-lg">{text}</span>
  </div>
);

const UspBanner = () => {
  return (
    <section className="bg-peach-beige py-8 px-6">
      <div className="max-w-container-desktop mx-auto flex flex-col md:flex-row flex-wrap justify-around items-center gap-6 md:gap-12 text-dark-green">
        <UspItem iconClass="bi-balloon-heart" text="Natural Ingredients" />
        <UspItem iconClass="bi-hourglass-split" text="Slow-Cooked for Hours" />
        <UspItem iconClass="bi-box-seam" text="Made On-Demand" />
      </div>
    </section>
  );
};

export default UspBanner;