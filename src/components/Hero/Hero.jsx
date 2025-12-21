import React from "react";
import Personaje from "../../assets/Personaje.png";
import Personaje2 from "../../assets/mascot-1.png";
// import Personaje2 from "../../assets/mascot-1.png";
import Logo from "../../assets/Logo.png";
// import Logo2 from "../../assets/Logo2.png";
// import Logo2 from "../../assets/mascot-2-name-white.png";
import Logo2 from "../../assets/mascot-2-name.png";
import Logo3 from "../../assets/hero-image-2.png";

import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";

const Hero = () => {
    return (
        <section className="flex justify-center mt-[114px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* descripciones */}
                <div className="flex h-full p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36 ">
                    <div className="m-auto card xl:max-w-[800px] ">
                        <div className="flex h-full justify-center ">
                            <motion.img
                            variants={slideUp(0.2)}
                            initial="initial"
                            animate="animate"
                            src={Logo2}
                            alt="logo del Juego"
                            className="m-auto"
                            />
                        </div>
                        
                        <motion.p
                            variants={slideUp(0.3)}
                            initial="initial"
                            animate="animate"
                            className="py-12 text-white xl:text-sm 2xl:text-xl"
                        >
                        From a rare 17th-century European recipe, we bring the Old World delicacy of Milchreis 
                        to the American heartland. Crafted by hardworking Oklahoma moms, our pudding uses only fresh,
                        local milk and wholesome farm ingredients. We skip the shortcuts—no artificial flavors or preservatives—to deliver timeless comfort and honest, premium quality in every spoon.
                        </motion.p>
                        <motion.div
                            variants={slideUp(1)}
                            initial="initial"
                            animate="animate"
                            className="flex justify-center gap-4"
                        >
                            {/* Botón Jugar ahora */}
                            <a className="m-auto bg-custom-navbar bg-custom-navbar-600 py-2 px-12 rounded-3xl text-white bg-custom-navbar hover:bg-custom-navbar-700 transition-all duration-300 flex items-center cursor-pointer animate-pulse bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                                PRE-ORDER NOW
                                <i className="ml-2 bi bi-hand-index-thumb-fill text-xl"></i>
                            </a>

                             {/* Botón Ver Gameplay */}
                            {/* <a className="text-white animate-pulse bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                                Ver GamePlay
                                <i className="ml-2 bi bi-youtube text-xl"></i>
                            </a>  */}
                         </motion.div>
                    </div>
                    
                </div>

                {/* imagen */}
                <div className="flex h-full ">
                    <motion.div
                    variants={slideInFromSide("right", 0.5)}
                    initial="initial"
                    animate="animate"
                    className="m-auto p-10 sm:p-10 md:p-15 lg:p-30 xl:max-w-[500px] 2xl:max-w-[700px]"
                    >
                        <img src={Personaje2} alt="Personaje de juego" />
                    </motion.div>
                </div>
                
            </div>
        </section>
        
    );
};

export default Hero;
