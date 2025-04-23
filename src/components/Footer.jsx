import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-black pt-8 pb-4 mt-16">
      <div className="w-full px-2 sm:px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 animate-fade-in-up">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src={assets.logo} alt="Logo" className="h-12 mb-3" />
          <p className="text-sm opacity-90 mb-2 text-center md:text-left">
            GreenCart - Your trusted source for fresh groceries delivered fast and safe.
          </p>
         
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <ul className="text-base space-y-2 opacity-95">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:beshoynasry0@gmail.com" className="underline hover:text-black-dull">beshoynasry0@gmail.com</a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:01095604355" className="underline hover:text-black-dull">01095604355</a>
            </li>
            <li>
              <span className="font-semibold">Address:</span> 123 Green Street, Cairo, Egypt
            </li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="text-base space-y-2 opacity-95">
            <li><a href="#" className="hover:underline hover:text-black-dull">Home</a></li>
            <li><a href="#" className="hover:underline hover:text-black-dull">Best Sellers</a></li>
            <li><a href="#" className="hover:underline hover:text-black-dull">Offers & Deals</a></li>
            <li><a href="#" className="hover:underline hover:text-black-dull">Contact Us</a></li>
            <li><a href="#" className="hover:underline hover:text-black-dull">FAQs</a></li>
          </ul>
        </div>
        {/* Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">Info</h3>
          <ul className="text-base space-y-2 opacity-95">
            <li><span className="font-semibold">Open:</span> 8am - 10pm</li>
            <li><span className="font-semibold">Support:</span> Live Chat</li>
            <li>
              <span className="font-semibold">Follow us:</span>
              <span className="ml-2">
                <a href="#" className="hover:underline hover:text-black-dull">Facebook</a> |{" "}
                <a href="#" className="hover:underline hover:text-black-dull">Instagram</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center text-xs opacity-70 mt-6 text-black animate-fade-in">
        &copy; {new Date().getFullYear()} GreenCart. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;