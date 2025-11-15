import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12 px-4 sm:px-0">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>

      {/* Animated Gradient Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-3 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
      />

      {/* Subtitle (optional) */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-base sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
