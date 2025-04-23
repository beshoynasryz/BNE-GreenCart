import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
const Categories = () => {
  const { navigate } = useAppContext();
  return (
    <>
      <div className="flex justify-center items-center mt-4 mb-4">
        <h1>
          <span className="text-2xl font-bold text-primary hover:text-primary-dull">Shop by Category</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
        {categories.map((category, index) => (
        <div
          onClick={() => {
            navigate(`/products/${category.path.toLowerCase()}`);
            scrollTo(0, 0);
          }}
          key={index}
          className="rounded-2xl p-4 shadow-md transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: category.bgColor }}
        >
            <img
              src={category.image}
              alt={category.text}
              className="w-20 h-20 object-contain mx-auto mb-2"
            />
            <h3 className="text-center font-semibold text-lg">
              {category.text}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
