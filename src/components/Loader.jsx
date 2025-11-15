import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <motion.div
        className="
          w-16 h-16 rounded-full 
          border-4 border-gray-300 dark:border-gray-700 
          border-t-blue-600 dark:border-t-indigo-500
        "
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: "linear",
        }}
      />
    </div>
  );
}
