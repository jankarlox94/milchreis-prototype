import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-cream min-h-screen font-sans text-dark-green selection:bg-peach-beige selection:text-dark-green">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[85vh]">
        {/* Large Hero Image */}
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
          alt="Oklahoma Farm Landscape"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-green/30"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-peach-beige font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base animate-fade-in-up">
            Since 2025
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream font-bold mb-6 max-w-4xl leading-tight">
            From 1600s Europe to <br />
            <span className="text-peach-beige italic">
              The Heart of Oklahoma
            </span>
          </h1>
        </div>
      </div>

      {/* --- SECTION 1: THE ORIGIN --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-green">
              A Discovery in <br />
              <span className="text-terracotta">An Antique Cookbook</span>
            </h2>
            <div className="w-16 h-1 bg-terracotta"></div>
            <p className="text-lg md:text-xl text-dark-green/80 leading-relaxed font-light">
              Our story travels all the way from old Europe to the heart of
              Oklahoma. We discovered a delicious, 400-year-old recipe for rice
              pudding in a rare antique cookbook and brought it home to the
              farm.
            </p>
          </div>

          {/* Large Image */}
          <div className="order-1 md:order-2 h-[500px] w-full relative">
            <div className="absolute inset-0 bg-peach-beige rounded-tr-[5rem] rounded-bl-[5rem] transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop"
              alt="Antique Book"
              className="relative z-10 w-full h-full object-cover rounded-tr-[5rem] rounded-bl-[5rem] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE PROCESS (Dark Mode Wrapper) --- */}
      <section className="bg-dark-green py-24 md:py-32 text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Large Image (Left) */}
            <div className="h-[600px] w-full overflow-hidden rounded-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1000&auto=format&fit=crop"
                alt="Pouring Milk"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Image Badge */}
              <div className="absolute bottom-6 left-6 bg-cream text-dark-green px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                Locally Sourced
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                Hardworking Moms. <br />
                <span className="text-peach-beige italic">Zero Shortcuts.</span>
              </h2>
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed font-light">
                At MilchReis, there are zero shortcuts. Our pudding is cooked
                slowly by hardworking Oklahoma moms using fresh local milk and
                real ingredients—never any fake flavors or preservatives.
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  "Fresh Local Milk",
                  "Slow-Cooked Batch Process",
                  "No Preservatives",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-peach-beige">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE FUTURE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-terracotta font-bold tracking-widest uppercase text-sm">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-green">
              Beyond the Bowl: <br />
              <span className="italic text-terracotta">
                Classic French Pastries
              </span>
            </h2>
            <p className="text-lg md:text-xl text-dark-green/80 leading-relaxed font-light">
              Rice pudding is our first love, but it’s just the beginning. Soon,
              we’ll bring that same care to classic French pastries. Every
              spoonful is a mix of deep history and simple Oklahoma comfort.
            </p>
            <button className="mt-4 px-8 py-3 border-2 border-dark-green text-dark-green hover:bg-dark-green hover:text-cream transition-colors duration-300 rounded-full font-semibold">
              View Our Menu
            </button>
          </div>

          {/* Collage Images */}
          <div className="relative h-[500px] w-full">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1000&auto=format&fit=crop"
                alt="French Pastry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-cream z-20">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop"
                alt="Baker Hands"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <div className="bg-peach-beige/30 py-20 text-center px-4">
        <h3 className="text-3xl md:text-4xl font-serif text-dark-green font-bold mb-6">
          Taste the History.
        </h3>
        <button className="px-10 py-4 bg-terracotta text-cream font-bold text-lg rounded-xl shadow-lg hover:bg-dark-green transition-all duration-300 transform hover:-translate-y-1">
          Find a Store Near You
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
