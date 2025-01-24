import React from "react";
import calendary from "../../assets/calendary-icon-com.png";

const Card2 = () => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white border rounded-sm p-6 shadow-md text-center flex flex-col md:flex-row gap-x-4">
      {/* Icon Section */}
      <div className="flex justify-center items-center mb-4 md:mb-0 md:w-1/3">
        <img src={calendary} alt="Calendar icon" className="w-12 md:w-16 lg:w-20" />
      </div>

      {/* Text Section */}
      <div className="text-left md:w-2/3">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 lg:text-xl">
          Find a course
        </h3>
        <p className="text-sm text-gray-600 mb-4 lg:text-base">
          Search by subject, course, or region to find the right course for you.
        </p>
        <a
          href="#"
          className="text-yellow-500 font-semibold text-sm lg:text-base hover:underline"
        >
          GET STARTED →
        </a>
      </div>
    </div>
  );
};

export default Card2;
