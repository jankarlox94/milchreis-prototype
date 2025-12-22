import React from 'react';

// Image of packaged product in a gift box
const packagedProductImage = "https://images.unsplash.com/photo-1579631158231-51c78c325c7a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProductCtaSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-container-desktop mx-auto">
      <div className="bg-white/50 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 shadow-sm border border-peach-beige/30">
        
        {/* Product Image Container */}
        <div className="w-full lg:w-1/2">
            <img 
                src={packagedProductImage} 
                alt="Signature Caramel Pudding Gift Box" 
                className="rounded-2xl shadow-md w-full h-auto object-cover aspect-[4/3]"
            />
        </div>

        {/* Text and CTA Container */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6 text-dark-green leading-tight">
            The Star Product: Our Signature Caramel Pudding
          </h2>
          <p className="text-dark-green/80 text-lg mb-8 leading-relaxed">
            Our creamiest signature caramel pudding. Made to order using only milk, eggs, sugar, and real vanilla bean. Delivered fresh in sustainable packaging.
          </p>
          <div>
            <button className="btn-terracotta">
              Explore Ordering Platform
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductCtaSection;