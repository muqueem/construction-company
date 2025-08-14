import React from "react";
import ServiceCard from "./ServiceCard";
import service1 from "../assets/service/1.jpg"
import service2 from "../assets/service/2.jpg"
import service3 from "../assets/service/3.jpg"
import service4 from "../assets/service/4.jpg"

const servicesData = [
  {
    title: "Residential Construction",
    description: "Modern homes, villas, and apartments.",
    image: service1,
  },
  {
    title: "Commercial Projects",
    description: "Office spaces, malls, and corporate buildings.",
    image: service2,
  },
  {
    title: "Renovations & Remodeling",
    description: "Makeovers for existing properties.",
    image: service3,
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section py-16 bg-[#1a1a1a]">
      <div className="container">
        {/* Section Heading */}
        <h2 className="text-4xl max-md:text-3xl font-bold mb-12 text-white">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
