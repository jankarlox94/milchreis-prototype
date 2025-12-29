import React from 'react';
import BowlOne from "../../assets/rice-pudding-bowl.png";
import BowlTwo from "../../assets/bowl-4.png";

import BowlThree from "../../assets/fondo-3.png";
import BowlFour from "../../assets/bowl-5.png";
import BowlSix from "../../assets/bowl-6.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";
import AutoImageSlider from '../AutoImageSlider/AutoImageSlider';
import UspBanner from '../UspBanner/UspBanner';
import Bowls from '../../assets/multiple-bowls-white.png'
import HeroTop from '../HeroTop/HeroTop';


const HeroSection = () => {
  // Using a high-quality Unsplash image of caramel pudding
  const heroImage = "https://images.unsplash.com/photo-1550104289-6557645f754d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const imageUrls = [BowlOne,BowlTwo,BowlThree,BowlFour,BowlSix]
  return (
      //  <section className="relative w-full min-h-[600px] grid grid-cols-1 lg:grid-cols-2  " style={{
      //           backgroundImage: `url(${Bowls})`, // Replace with your high-res image
      //           backgroundSize: 'cover',
      //           backgroundPosition: 'center',
      //         }}></section>
    <div>
      <HeroTop />
    {/* <section className=" w-full min-h-[600px] 2xl:min-h-[985px]  " style={{
                backgroundImage: `url(${Bowls})`, // Replace with your high-res image
                backgroundSize: 'cover',
                backgroundPosition: 'right',
              }}>
      {/* Left Text Content */}
      {/* <div></div> */}
      {/* <div className='flex h-full justify-around' >
         <motion.div variants={slideUp(0.2)}
                            initial="initial"
                            animate="animate" className="px-6 md:px-12 lg:pl-24 lg:pr-12 py-16 flex flex-col justify-center max-w-xl m-auto lg:mx-0 2xl:mt-40 lg:mt-5">
            <h1 className=" font-serif text-4xl md:text-5xl lg:text-[2.5rem] 2xl:text-[3.5rem] font-bold leading-tight mb-6 font-bold text-black animate-text-glow ">
            Rediscover the Taste of Tradition: Rice Pudding, Slow-Cooked, 100% Natural.
            </h1> */}
            {/* <p className="text-lg text-dark-green/80 mb-8 leading-relaxed">
            Experience the authentic flavor of handcrafted rice pudding, made with patience and the finest natural ingredients, just like it used to be.
            </p> */}
            {/* <div className='flex '> */}
              {/* Pulsing Purchase Button */}
        {/* <div className="flex justify-center">
          <button className="group relative"> */}
            {/* Pulsing Aura Effect */}
            {/* <span className="absolute -inset-1 rounded-full bg-orange-300  2x:bg-orange-500 opacity-75 blur animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span> */}
            
            {/* Main Button */}
            {/* <button className="relative flex items-center justify-center px-10 py-5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full text-xl md:text-2xl font-bold uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200">
              Order Your Rice Pudding Now!
            </button>
          </button>
        </div> */}
            {/* </div> */}
      {/* </motion.div> */}
      {/* </div> */}
     

      {/* Right Image Content - Full bleed on right side */}
      {/* <div className="flex justify-around h-full w-full  min-h-[250px] lg:min-h-[550px] 2xl:min-h-[985px] border-solid  rounded-lg px-1 md:px-2 lg:pl-4 lg:pr-3 py-3 2xl:py-1 flex-col max-w-xl lg:mx-0">
         {/* <motion.img
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            src={BowlOne}
            alt="MiclhReis bowl"
            className="m-auto rounded-lg"
            /> */}
            {/* <AutoImageSlider images={imageUrls} interval={2000} /> Slide every 4 seconds */}

        {/* Subtle overlay for better integration if needed, though the design is clean */}
        {/* <div className="absolute inset-0 bg-dark-green/10 mix-blend-multiply"></div> */}
      {/* </div> */}
    
    {/* </section>  */}
    </div>
    
     
  );
};

export default HeroSection;