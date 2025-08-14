import React from "react";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="hero-section h-screen max-md:h-[70vh] bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="content container relative text-white">
        <h1 className="main-heading text-5xl md:text-7xl font-semibold">
          <span className="block">Building Your</span>
          <span className="block">Dreams</span>
        </h1>
        <p className="sub-heading my-5 text-lg md:text-2xl font-extralight">
          Quality Construction, Trusted Service
        </p>
        <button className="px-6 py-3 max-md:text-lg max-md:px-4 max-md:py-2 bg-yellow-500 text-xl hover:bg-[#0083cf] hover:text-white text-black font-semibold rounded transition-all duration-300">
          <a href="#about">About Us</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
