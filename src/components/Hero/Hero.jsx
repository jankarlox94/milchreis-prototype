import React from 'react';
import BowlOne from "../../assets/rice-pudding-bowl.png";
import BowlTwo from "../../assets/bowl-4.png";
import BowlThree from "../../assets/fondo-3.png";
import BowlFour from "../../assets/bowl-5.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";
import AutoImageSlider from '../AutoImageSlider/AutoImageSlider';


const HeroSection = () => {
  // Using a high-quality Unsplash image of caramel pudding
  const heroImage = "https://images.unsplash.com/photo-1550104289-6557645f754d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const imageUrls = [BowlOne,BowlTwo,BowlThree,BowlFour]
  return (
    <section className="relative w-full min-h-[600px] grid grid-cols-1 lg:grid-cols-2 items-center ">
      {/* Left Text Content */}
      <div className='flex h-full'>
         <motion.div variants={slideUp(0.2)}
                            initial="initial"
                            animate="animate" className="px-6 md:px-12 lg:pl-24 lg:pr-12 py-16 flex flex-col justify-center max-w-xl m-auto lg:mx-0 ">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 text-dark-green ">
            Rediscover the Taste of Tradition: Rice Pudding, Slow-Cooked, 100% Natural.
            </h1>
            {/* <p className="text-lg text-dark-green/80 mb-8 leading-relaxed">
            Experience the authentic flavor of handcrafted rice pudding, made with patience and the finest natural ingredients, just like it used to be.
            </p> */}
            <div className='flex '>
                <a className="m-auto bg-custom-navbar bg-custom-navbar-600 py-2 px-12 rounded-3xl text-white bg-custom-navbar hover:bg-custom-navbar-700 transition-all duration-300 flex items-center cursor-pointer animate-pulse bg-terracota-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                                    PRE-ORDER NOW
                                    <i className="ml-1 bi bi-arrow-up-right"></i>
                                </a>
            </div>
      </motion.div>
      </div>
     

      {/* Right Image Content - Full bleed on right side */}
      <div className="h-full w-full relative min-h-[400px] lg:min-h-[700px] border-solid  rounded-lg px-1 md:px-2 lg:pl-4 lg:pr-3 py-3 flex flex-col justify-center max-w-xl m-auto lg:mx-0">
         {/* <motion.img
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            src={BowlOne}
            alt="MiclhReis bowl"
            className="m-auto rounded-lg"
            /> */}
            <AutoImageSlider images={imageUrls} interval={2000} /> {/* Slide every 4 seconds */}

        {/* Subtle overlay for better integration if needed, though the design is clean */}
        {/* <div className="absolute inset-0 bg-dark-green/10 mix-blend-multiply"></div> */}
      </div>
    </section>
  );
};

export default HeroSection;