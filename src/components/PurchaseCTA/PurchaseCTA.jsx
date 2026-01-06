import Bowls from "../../assets/multiple-bowls.png";

const PurchaseCTA = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden font-sans">
      {/* Hyper-realistic Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Bowls})`, // Replace with your high-res image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h2 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
          Experience Authentic Taste
        </h2>

        <p className="mb-10 text-lg md:text-2xl font-light leading-relaxed opacity-90 drop-shadow-md">
          Don't wait to savor the creamy, rich flavor tradition.{" "}
          <br className="hidden md:block" />
          Made with natural ingredients and slow-cooked to perfection.
        </p>

        {/* Pulsing Purchase Button */}
        <div className="flex justify-center">
          <div className="group relative">
            {/* Pulsing Aura Effect */}
            <span className="absolute -inset-1 rounded-full bg-orange-500 opacity-75 blur animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>

            {/* Main Button */}
            <button className="relative flex items-center justify-center px-10 py-5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full text-xl md:text-2xl font-bold uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200">
              Order Your Rice Pudding Now!
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation Config (Add to tailwind.config.js if needed) */}
      <style jsx="true">{`
        @keyframes pulse-custom {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        .animate-pulse-custom {
          animation: pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default PurchaseCTA;
