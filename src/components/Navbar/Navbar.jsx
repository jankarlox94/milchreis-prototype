import React from 'react';
import Logo2 from "../../assets/navbar-new-box.png";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center max-w-container-desktop mx-auto">
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        {/* Placeholder Logo Icon */}
        {/* <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-cream">
            <i className="bi bi-egg-fried fs-4"></i> */}
        </div>
                <div className="flex items-center">
                    <img src={Logo2} alt="Logo" className="w-[300px]" />
                </div>
        {/* <span className="font-serif font-bold text-xl tracking-wide">MilchReis Pudding Co. USA </span> */}
    

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wider">
        <li className="hover:text-terracotta cursor-pointer transition">About</li>
        <li className="hover:text-terracotta cursor-pointer transition flex items-center gap-1">
            Products <i className="bi bi-chevron-down text-xs"></i>
        </li>
        <li className="hover:text-terracotta cursor-pointer transition">Reviews</li>
        <li className="hover:text-terracotta cursor-pointer transition">Services</li>
        <li className="hover:text-terracotta cursor-pointer transition">Contact</li>
      </ul>

       {/* Mobile Menu Icon (Hidden on desktop) */}
       <i className="bi bi-list text-2xl md:hidden cursor-pointer"></i>
    </nav>
  );
};

export default Navbar;