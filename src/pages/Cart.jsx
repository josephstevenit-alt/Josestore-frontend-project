// src/pages/Cart.jsx
import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // -------------------------------
  // TEMPORARY DUMMY DATA FOR TESTING
  // -------------------------------
  const testCart = [
    {
      id: 1,
      title: "Sample Product 1",
      price: 1200,
      quantity: 1,
      image: "https://i.pinimg.com/736x/79/7c/2d/797c2dcb9dffa76d83f2a11a7b33a8ba.jpg",
    },
    {
      id: 2,
      title: "Sample Product 2",
      price: 800,
      quantity: 2,
      image: "https://i.pinimg.com/736x/7b/f6/19/7bf61992009bb9560b5adab996e4b161.jpg",
    },
  ];

  // Use real cart if it has items, otherwise use dummy data
  const cartItems = cart.length ? cart : testCart;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            Your cart is empty
          </h2>
          <Link
            to="/products"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-2xl shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div className="flex-1 flex flex-col justify-between w-full">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
                    ₹ {item.price}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      -
                    </button>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 mt-3 hover:underline"
                  >
                    <Trash2 size={18} /> Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 p-6 border rounded-2xl shadow-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Order Summary
            </h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Total:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                ₹ {total}
              </span>
            </p>

            <button
              onClick={clearCart}
              className="w-full py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition mb-3"
            >
              Clear Cart
            </button>

            <Link
              to="/checkout"
              className="w-full inline-block text-center py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
