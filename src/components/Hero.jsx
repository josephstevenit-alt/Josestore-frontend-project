import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-24 pb-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-32 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      </div>

      {/* Main Hero Container */}
      <div className="container mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Discover Premium  
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Products Designed for You
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Shop top-rated collections, secure payments, and seamless delivery.  
          Upgrade your lifestyle today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/products"
            className="px-8 py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30 hover:shadow-xl transition"
          >
            Shop Now
          </Link>

          <a
            href="#collections"
            className="px-8 py-3 rounded-xl text-lg font-semibold border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Explore Collections
          </a>
        </motion.div>

        {/* Floating Product Mock Image — Replace with your own */}
        <motion.img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Hero Product"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-16 mx-auto w-full max-w-xl rounded-2xl shadow-2xl shadow-gray-400/40 dark:shadow-black/60"
        />
      </div>
    </section>
  );
}
