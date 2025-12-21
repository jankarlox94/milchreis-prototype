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
        <section className="flex justify-center mt-36  ">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* descripciones */}
                <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36 xl:pt-40 xl:text-[25px]">
                    <div className="card xl:max-w-[800px] ">
                        <motion.img
                        variants={slideUp(0.2)}
                        initial="initial"
                        animate="animate"
                        src={Logo2}
                        alt="logo del Juego"
                        className="flex justify-center"
                    />
                    <motion.p
                        variants={slideUp(0.3)}
                        initial="initial"
                        animate="animate"
                        className="py-12 text-white"
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
                        <a className="bg-custom-navbar bg-custom-navbar-600 py-2 px-12 rounded-3xl text-white bg-custom-navbar hover:bg-custom-navbar-700 transition-all duration-300 flex items-center cursor-pointer">
                            Jugar ahora
                            <i className="ml-2 bi bi-controller text-xl"></i>
                        </a>

                        {/* Botón Ver Gameplay */}
                        <a className="text-white flex items-center cursor-pointer">
                            Ver GamePlay
                            <i className="ml-2 bi bi-youtube text-xl"></i>
                        </a>
                    </motion.div>
                    </div>
                    
                </div>

                {/* imagen */}
                <motion.div
                    variants={slideInFromSide("right", 0.5)}
                    initial="initial"
                    animate="animate"
                    className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36 "
                >
                    <img src={Personaje2} alt="Personaje de juego" />
                </motion.div>
            </div>
        </section>
        
    );
};

export default Hero;
