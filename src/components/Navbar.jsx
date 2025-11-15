// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Menu, X, ShoppingCart, Moon, Sun, Search } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Dark mode toggle
  const toggleDarkMode = () => {
    const theme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", theme);
  };

  // NavLink active style
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded font-medium ${
      isActive ? "text-blue-600 dark:text-blue-300" : "text-gray-700 dark:text-gray-200"
    } hover:text-blue-600 dark:hover:text-blue-300 transition`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-wide"
        >
          JoeStore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/products" className={navClass}>Products</NavLink>
          <NavLink to="/cart" className={navClass}>Cart</NavLink>
          <NavLink to="/checkout" className={navClass}>Checkout</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 pl-9 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500 dark:text-gray-300" />
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Cart drawer button */}
          <button
            onClick={() => document.body.dispatchEvent(new Event("open-cart"))}
            className="relative p-2"
          >
            <ShoppingCart size={22} />
            {cart.length > 0 && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                {cart.length}
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-white dark:bg-black">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/products" className={navClass}>Products</NavLink>
          <NavLink to="/cart" className={navClass}>Cart</NavLink>
          <NavLink to="/checkout" className={navClass}>Checkout</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 pl-9 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500 dark:text-gray-300" />
          </div>

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg w-full justify-center"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="text-sm">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => document.body.dispatchEvent(new Event("open-cart"))}
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg w-full justify-center"
          >
            <ShoppingCart size={20} />
            Cart ({cart.length})
          </button>
        </div>
      )}
    </nav>
  );
}
