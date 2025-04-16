import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative w-full p-6">
   
      <img
        src={assets.main_banner_bg}
        alt="Main Banner"
        className="w-full hidden md:block object-cover"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="Main Banner Small"
        className="w-full md:hidden object-cover"
      />

     
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:px-16 lg:px-24 py-12 md:py-20 lg:py-28 ">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center md:text-left max-w-[90%] md:max-w-lg lg:max-w-xl drop-shadow-md">
          Freshness You Can Trust, Savings You Will Love
        </h1>

        <div className="mt-6 flex items-center gap-4">
      
          <Link
            to="/products"
            className="hidden md:flex group items-center gap-2 bg-primary text-white font-semibold text-base py-2 px-6 rounded-md shadow-md hover:bg-primary-dull transition duration-200"
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="Arrow"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            />
          </Link>

     
          <Link
            to="/products"
            className="flex md:hidden group items-center gap-2 bg-white text-primary font-semibold text-sm py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
          >
            Explore Deals
            <img
              src={assets.black_arrow_icon}
              alt="Arrow"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
