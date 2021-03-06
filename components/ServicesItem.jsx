import React from "react";
import Image from "next/image";

const ServicesItem = ({ serviceUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 mt-4 hover:scale-105 ease-in duration-300">
      <div>
        <Image className="rounded-xl" src={serviceUrl} alt="services images" width={450} height="275"/>
      </div>
      <h2 className="py-4 text-lg md:text-xl">{title}</h2>
      <p className="text-center py-4">{description}</p>
    </div>
  );
};

export default ServicesItem;
