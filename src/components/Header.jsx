import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  let lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      lastScrollY.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <header className={`header cursor-pointer w-full z-10 fixed transition-all duration-300 left-0 ${hideNavbar ? "-top-48" : "top-0"}`}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container flex justify-between items-center py-4">
        <h1 className="logo">
          <a href="#">
            <img className="w-[200px] max-md:w-[150px]" src="/logo-white.png" alt="" />
          </a>
        </h1>

        <nav className="navbar max-md:hidden">
          <ul className='flex md:gap-5 lg:gap-10'>
            <Nav />
          </ul>
        </nav>

        <button className="px-6 max-md:hidden max-md:text-sm max-md:px-3 max-md:py-1 py-2 bg-yellow-500 text-md hover:bg-[#0083cf] hover:text-white text-black font-semibold rounded transition-all duration-300">
          Get a Quote
        </button>

        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen
            ? <IoMdClose className="w-8 h-8" />
            : <IoIosMenu className="w-8 h-8" />
          }
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full z-10 py-6">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container">
            <ul className='flex items-end flex-col gap-10'>
              <Nav setIsMenuOpen={setIsMenuOpen} />
            </ul>
            <button
              className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded w-full hover:bg-[#0083cf] hover:text-white transition-colors duration-300"
            >
              Get a Quote
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
