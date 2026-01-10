import React from "react";
import Bowls from "../../assets/multiple-bowls-white.png";
import UspBanner from "../UspBanner/UspBanner";

const HeroTop = () => {
  return (
    <section>
      {/* <section className="relative max-h-[68.5rem] 2xl:max-h-[80rem] w-full overflow-hidden bg-[#FDFCF8] "> */}
      {/* Background Image - Subtle & Modern */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src={Bowls}
          alt="Creamy rice pudding background"
          className="h-full w-full object-cover opacity-40 lg:opacity-60 xl:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent" />
      </div> */}

      <div className="bg-cream min-h-screen font-sans text-dark-green selection:bg-peach-beige selection:text-dark-green">
        <div className="relative w-full h-[77.9vh] md:h-[72vh] 2xl:h-[77.9vh]">
          {/* Large Hero Image */}
          <img
            src={Bowls}
            alt="Oklahoma Farm Landscape"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-dark-green/30"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-amber-800 uppercase bg-amber-100 rounded-full">
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-outline-black font-bold mb-6  max-w-full leading-tight">
              Old World Recipe <br />
              <span className="text-peach-beige italic">Oklahoma Heart</span>
              <h2 className="text-4xl sm:text-4xl lg:text-7xl font-serif text-cream font-bold mb-6 leading-tight">
                America's Finest Rice Pudding
              </h2>
            </h1>
          </div>
        </div>
        {/* <div className="justify-center container mx-auto px-6 relative z-10 grid "> */}
        {/* <div className="max-w-2xl mb-5"> */}
        {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-amber-800 uppercase bg-amber-100 rounded-full">
              Coming Soon
            </span> */}

        {/* <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Old World Recipe{" "}
              <span className="text-amber-700">Oklahoma Heart.</span>
            </h1> */}

        {/* <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              We take a 400-year-old European recipe and cook it fresh in
              Oklahoma. Our rice pudding is made slowly by local moms using only
              real ingredients—no shortcuts and absolutely no fake stuff. It’s
              timeless comfort in a bowl.
            </p> */}

        {/* <div className="flex flex-col ml-auto mr-auto sm:flex-row gap-4"> */}
        {/* <button className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl shadow-lg shadow-amber-700/20 transition-all transform hover:-translate-y-1 active:scale-95">
                Pre-Order
              </button> */}
        {/* <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                Know more About us
              </button> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        <div className="relative z-10">
          <UspBanner />
        </div>
      </div>

      {/* Floating Decorative Element */}
      <div className="hidden lg:block absolute bottom-28 right-12 text-slate-400 text-sm rotate-90 origin-right tracking-widest">
        EST. 2025 — MilchReis Pudding Co, USA
      </div>
    </section>
  );
};

export default HeroTop;
