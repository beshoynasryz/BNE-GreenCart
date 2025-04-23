import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
const ProductCard = ({ product }) => {
  const [count, setCount] = React.useState(0);

  const {
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    navigate,
    cartItems,
  } = useAppContext();

  return (
    product && (
      <div className="border border-gray-500/20 rounded-md px-2 md:px-4 py-2 bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-110 transition-transform duration-300 max-w-full h-auto object-contain"
            src={product.image[0]}
            alt={product.name}
          />
        </div>
        <div className="text-gray-500/60 text-sm mt-2">
          <p className="truncate">{product.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate">
            {product.name}
          </p>
          <div className="flex items-center gap-1 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="w-4 h-4 md:w-5 md:h-5"
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt=""
                />
              ))}
            <p className="text-xs">(4)</p>
          </div>
          <div className="flex items-end justify-between mt-3">
            <p className="text-base md:text-lg font-medium text-primary">
              {currency}${product.offerPrice}{" "}
              <span className="text-gray-500/60 text-sm line-through">
                {currency}${product.price}
              </span>
            </p>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-primary"
            >
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1 bg-primary-100 border border-primary-dull w-20 h-8 md:w-24 md:h-10 rounded text-primary font-medium cursor-pointer"
                  onClick={() => addToCart(product._id)}
                >
                  <img src={assets.cart_icon} alt="cart icon" />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 w-20 h-8 md:w-24 md:h-10 bg-primary/25 rounded select-none">
                  <button
                    onClick={() => {
                      removeFromCart(product._id);
                    }}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(product._id);
                    }}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ProductCard;
