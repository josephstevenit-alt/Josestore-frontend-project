import React from "react";
import { motion } from "framer-motion";

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden px-6 py-3 rounded-xl font-semibold
        text-white bg-gradient-to-r from-blue-600 to-indigo-600
        dark:from-blue-700 dark:to-indigo-700
        shadow-md hover:shadow-xl active:shadow-lg
        backdrop-blur-lg transition-all duration-300
        ${className}
      `}
    >
      {/* Shine Effect */}
      <span
        className={`
          absolute inset-0 w-3/4 h-full 
          bg-gradient-to-r from-transparent via-white/30 to-transparent 
          transform -translate-x-full rotate-12 
          pointer-events-none
          animate-shine
        `}
      />

      {children}
    </motion.button>
  );
}
