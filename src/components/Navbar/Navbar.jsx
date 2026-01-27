import React, { useState } from "react";
import Logo2 from "../../assets/navbar-new-box.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks = [
    {
      id: 1,
      title: "About",
      link: "/about",
    },
    {
      id: 2,
      title: "Products",
      link: "/products",
    },
    {
      id: 3,
      title: "Reviews",
      link: "/",
    },
    {
      id: 4,
      title: "Contact",
      link: "/",
    },
  ];

  const navbarRedes = [
    {
      id: 1,
      title: "Instagram",
      link: "https://www.instagram.com",
      icon: "bi bi-instagram",
    },
    {
      id: 2,
      title: "Tiktok",
      link: "https://www.tiktok.com",
      icon: "bi bi-tiktok",
    },
  ];

  return (
    <nav className="w-full 2xl:py-2 px-6 md:px-12 flex justify-between items-center max-w-container-desktop mx-auto">
      <div className="flex justify-between items-center sm:px-12  2xl:py-4 px-4 ">
        {/* Logo */}

        <div className="flex items-center">
          <img src={Logo2} alt="Logo" className="w-[300px]" />
        </div>

        {/* Navegación - visible en desktop */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4 px-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="sm:text-lg text-sm  hover:text-sky-100 transition-transform duration-300 transform hover:scale-110 inline-block xl:text-sm 2xl:text-lg"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes - visible en desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                >
                  <i
                    className={`${link.icon} sm:text-2xl text-lg transition-all duration-300 hover:text-sky-100`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Botón de menú hamburguesa - visible solo en móvil */}
        <button className="md:hidden  p-2" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden absolute mt-[9rem] mx-auto z-50  w-[88%] bg-custom-navbar bg-custom-navbar-950 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute bottom-0 right-0 bg-dark-green text-white text-xs font-bold uppercase tracking-wider py-2 px-6 rounded-bl-2xl z-20 shadow-sm"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
        {/* Links de navegación móvil */}
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                href={link.link}
                className="text-white hover:text-sky-100 block"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Redes sociales móvil */}
        <ul className="flex space-x-4 px-4 py-2 border-t border-custom-navbar border-custom-navbar-700 justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                onClick={() => setIsOpen(false)}
              >
                <i
                  className={`${link.icon} text-lg text-white hover:text-sky-100`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
