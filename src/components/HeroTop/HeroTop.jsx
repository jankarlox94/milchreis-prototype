import React from 'react';
import Bowls from '../../assets/multiple-bowls-white.png'
import UspBanner from '../UspBanner/UspBanner';

const HeroTop = () => {
  return (
     <section className="relative lg:max-h-[40.063rem] 2xl:max-h-[60.063rem] w-full overflow-hidden bg-[#FDFCF8] ">
    {/* <section className="relative max-h-[68.5rem] 2xl:max-h-[80rem] w-full overflow-hidden bg-[#FDFCF8] "> */}
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

    <div className='flex flex-col '>
         <div className="justify-center container mx-auto px-6 relative z-10 grid ">
            <div className="max-w-2xl mb-5">
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
                Experience the creamiest, artisanal rice pudding made with all-natural ingredients and a touch of modern magic.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col ml-auto mr-auto sm:flex-row gap-4">
                <button className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl shadow-lg shadow-amber-700/20 transition-all transform hover:-translate-y-1 active:scale-95">
                Pre-Order
                </button>
                <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                Know more About us
                </button>
            </div>
            </div>
      </div>
       {/* <div className="relative z-10 lg:mt-[7.8rem] 2xl:mt-[7.8rem]"></div> */}
        <div className="relative z-10 lg:mt-[7.8rem]">
            <UspBanner />

        </div>
    </div>
     
      
      {/* Floating Decorative Element */}
      {/* <div className="hidden lg:block absolute bottom-12 right-12 text-slate-400 text-sm rotate-90 origin-right tracking-widest">
        EST. 2025 — PUDDING PERFECTION
      </div> */}
    </section>


  );
};

export default HeroTop;