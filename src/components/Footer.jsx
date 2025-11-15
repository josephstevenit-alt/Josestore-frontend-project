// src/components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation(); // Get current path

  // Function to determine active link
  const linkClass = (path) =>
    `footer-link hover:text-blue-600 dark:hover:text-blue-400 transition ${
      location.pathname === path ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
    }`;

  return (
    <footer className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border-t border-gray-300/30 dark:border-gray-700/40 mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            FocusStore
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Your one-stop destination for premium products.  
            Bringing modern design, quality, and seamless shopping to your home.
          </p>

          {/* Social */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <SocialIcon href="https://facebook.com" icon={<Facebook size={20} />} />
            <SocialIcon href="https://instagram.com" icon={<Instagram size={20} />} />
            <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} />
            <SocialIcon href="mailto:support@focusstore.com" icon={<Mail size={20} />} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className={linkClass("/products")}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className={linkClass("/cart")}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className={linkClass("/checkout")}>
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Support
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>
              <Link to="/help" className={linkClass("/help")}>
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/privacy" className={linkClass("/privacy")}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className={linkClass("/terms")}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/shipping" className={linkClass("/shipping")}>
                Shipping Info
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-gray-700 dark:text-gray-300 border-t border-gray-300/30 dark:border-gray-700/40 text-sm">
        © {year} FocusStore — All rights reserved.
      </div>
    </footer>
  );
}

// Reusable social icon component
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition shadow-md cursor-pointer scale-105 hover:shadow-blue-500/40"
    >
      {icon}
    </a>
  );
}
