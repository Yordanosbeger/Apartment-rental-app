import React from 'react';
import search_icon from '../Assets/search_icon.png';
import property_bg from '../Assets/property_bg.png';
import calendar_icon from '../Assets/calendar_icon.png';
import chevron_button from '../Assets/chevron_button.png';
import home_img from '../Assets/home_img.png';
import location_img from '../Assets/location_img.png';
import property_size from '../Assets/property_size.png';
import pricing_icon from '../Assets/pricing_icon.png';
import Navbar from './Navbar';

const PropertyHeader = () => {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${property_bg})` }}
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full px-4 sm:px-12 flex items-center justify-center">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center  px-4">
          {/* Search Input and Find Property Button */}
          <div className="flex w-full max-w-4xl">
            <div className="relative w-full bg-gray-100 rounded-lg p-2">
              <input
                type="text"
                placeholder="Search for a Property"
                className="w-full border rounded-lg py-2 px-4 pr-20"
              />
             <button
  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primaryBlue text-white flex items-center gap-2 py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
>
  <img src={search_icon} alt="Search Icon" className="w-4 h-4" />
  <span>Find Property</span>
</button>

            </div>
          </div>

          {/* Other Input Fields */}
          <div className="hidden lg:flex gap-2 mt-1 bg-gray-100 rounded-lg p-2">
            {/* Location Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src={location_img}
                alt="Location"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full border rounded-lg py-2 pl-10 pr-4"
              />
            </div>

            {/* Property Type Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src={home_img}
                alt="Home"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Property Type"
                className="w-full border rounded-lg py-2 pl-10 pr-10"
              />
              <img
                src={chevron_button}
                alt="Chevron"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Pricing Range Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src={pricing_icon}
                alt="Pricing"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Pricing Range"
                className="w-full border rounded-lg py-2 pl-10 pr-10"
              />
              <img
                src={chevron_button}
                alt="Chevron"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Property Size Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src={property_size}
                alt="Property Size"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Property Size"
                className="w-full border rounded-lg py-2 pl-10 pr-10"
              />
              <img
                src={chevron_button}
                alt="Chevron"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Build Year Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src={calendar_icon}
                alt="Calendar"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Build Year"
                className="w-full border rounded-lg py-2 pl-10 pr-10"
              />
              <img
                src={chevron_button}
                alt="Chevron"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
