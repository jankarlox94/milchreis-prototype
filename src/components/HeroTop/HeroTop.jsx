import React from 'react';
import Bowls from '../../assets/multiple-bowls.png'
import UspBanner from '../UspBanner/UspBanner';

const HeroTop = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#FDFCF8] ">
      {/* Background Image - Subtle & Modern */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Bowls} 
          alt="Creamy rice pudding background" 
          className="h-full w-full object-cover opacity-40 lg:opacity-60 xl:opacity-60"
        />
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid sm:grid-cols-1 grid-cols-2">
        <div></div>
        <div className="max-w-2xl">
          {/* Tagline */}
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-amber-800 uppercase bg-amber-100 rounded-full">
            Coming Soon
          </span>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Pure Indulgence <span className="text-amber-700">Zero Shortcuts.</span>
          </h1>

          {/* Concise Subtext */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            Experience the creamiest, artisanal rice pudding made with organic ingredients and a touch of modern magic.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl shadow-lg shadow-amber-700/20 transition-all transform hover:-translate-y-1 active:scale-95">
              Pre-Order
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
              Know more About us
            </button>
          </div>
        </div>
      
      </div>

      {/* <UspBanner/> */}
      
      {/* Floating Decorative Element */}
      {/* <div className="hidden lg:block absolute bottom-12 right-12 text-slate-400 text-sm rotate-90 origin-right tracking-widest">
        EST. 2025 — PUDDING PERFECTION
      </div> */}
    </section>


  );
};

export default HeroTop;