import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg pb-6 p-3 hover:shadow-xl transition-transform duration-500 hover:-translate-y-4">
      <img src={service.image} alt="" />

      <h3 className="text-2xl text-center font-semibold mb-2 text-black">
        {service.title}
      </h3>

      <p className="text-gray-700 text-center">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
