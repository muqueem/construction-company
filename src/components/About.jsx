import React from "react";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="about-section bg-gray-50 py-16">
        <div className="container">
            <h1 className="text-4xl max-md:text-3xl font-bold mb-12 text-[#0083cf]">
                About <span className="text-black">Us</span>
            </h1>
            <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="about-image">
                <img
                    src={aboutImage}
                    alt="About Our Company"
                    className="rounded-lg shadow-2xl"
                />
                </div>

                <div className="about-text">
                <h2 className="text-4xl max-md:mt-5 text-[#0083cf] font-bold mb-4">
                    Building with Integrity Since 2015
                </h2>
                <p className="text-gray-500 mb-6 max-md:text-justify">
                    We are a trusted construction company dedicated to delivering
                    high-quality projects on time and within budget. Our team of
                    experienced professionals brings passion, precision, and innovation
                    to every project we handle.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                    <h3 className="text-3xl font-bold text-yellow-500">200+</h3>
                    <p className="text-gray-500">Completed Projects</p>
                    </div>
                    <div>
                    <h3 className="text-3xl font-bold text-yellow-500">15+</h3>
                    <p className="text-gray-500">Years of Experience</p>
                    </div>
                </div>

                <button className="px-6 py-3 max-md:text-sm bg-[#0083cf] text-xl hover:bg-yellow-500 hover:text-black text-white font-semibold rounded transition-all duration-300">
                    Learn More
                </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
