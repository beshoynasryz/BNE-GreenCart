import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_image}
        alt="Bottom Banner"
        className="w-full h-auto object-cover hidden sm:block"
      />

      <img
        src={assets.bottom_banner_image_sm}
        alt="Bottom Banner Small"
        className="w-full h-auto object-cover block sm:hidden"
      />
      <div className="absolute inset-0 flex flex-col  item-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24 ">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-primary ">
            Why We Are The Best ?{" "}
          </h1>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 mb-4">
              <img
                src={feature.icon}
                alt="Feature Icon"
                className="w-10 h-10 object-contain"
              />
             <div>
             <p className="text-base font-semibold">{feature.title}</p>
             <p className="text-base">{feature.description}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
