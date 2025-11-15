import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative w-full h-52 overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
        />

        {/* Hover Buttons */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition duration-300 rounded-xl">
          <button
            onClick={() => addToCart(product)}
            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition"
          >
            <ShoppingCart size={20} />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
          {product.description}
        </p>

        {/* Price & Buy Button */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ₹{product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
