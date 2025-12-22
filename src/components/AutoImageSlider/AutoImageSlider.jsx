import { useState, useEffect } from 'react';

const AutoImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay functionality using useEffect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);

    // Cleanup interval on component unmount or dependency change
    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]); // Dependency on currentIndex keeps the interval active

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        // Dynamically translate the slider horizontally
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imageSrc, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={imageSrc}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-64 md:h-96" // Responsive height utilities
            />
          </div>
        ))}
      </div>
      {/* Optional: Add indicators or navigation buttons if desired */}
    </div>
  );
};

export default AutoImageSlider;
