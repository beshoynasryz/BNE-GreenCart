import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  const handleLogin = () => {
    setOpen(false);
    setUser({ name: "John Doe" });
    setShowUserLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowUserLogin(false);
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/">
        <img className="h-9" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/">Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img className="h-4 w-4" src={assets.search_icon} alt="search icon" />
        </div>

        <div className="relative cursor-pointer">
          <img className="h-6 w-6" src={assets.cart_icon} alt="cart icon" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {!user ? (
          <button
            onClick={handleLogin}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <img
              src={assets.profile_icon}
              className="w-10 cursor-pointer"
              alt="Profile Icon"
            />

            <ul
              className={`absolute top-12 right-0 bg-white shadow-md rounded-lg w-40 z-10 flex flex-col transition-all duration-200 ${
                open ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  navigate("my-orders");
                }}
              >
                My Orders
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        <img
          className="h-6 w-6"
          src={open ? assets.menu_icon : assets.menu_icon}
          alt="menu icon"
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>
          All Products
        </NavLink>
        {user && (
          <NavLink to="/products" onClick={() => setOpen(false)}>
            My orders
          </NavLink>
        )}
        <NavLink to="/" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
        {!user ? (
          <button
            onClick={handleLogin}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
