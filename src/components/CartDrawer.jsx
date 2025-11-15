// src/components/CartDrawer.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cartOpen, toggleCart, cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={toggleCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-[88%] sm:w-[380px] backdrop-blur-xl bg-white/20 border-l border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.2)] rounded-l-3xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/20">
              <h2 className="text-lg font-semibold text-white drop-shadow">Your Cart</h2>
              <button onClick={toggleCart} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {cart.length === 0 ? (
                <p className="text-center text-white/80 mt-10 text-sm">
                  Your cart is empty ✨
                </p>
              ) : (
                cart.map(item => (
                  <motion.div
                    key={item.id}
                    className="flex items-center justify-between bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-3"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-xl object-cover shadow"
                      alt={item.title}
                    />
                    <div className="flex-1 mx-3 text-white">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-white/80">₹{item.price}</p>

                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 bg-white/20 backdrop-blur border border-white/30 rounded-lg"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>

                        <span className="text-sm font-medium">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 bg-white/20 backdrop-blur border border-white/30 rounded-lg"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-300 hover:text-red-400 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-white/20 p-5 bg-white/10 backdrop-blur-xl">
                <div className="flex justify-between text-white font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <button
                  onClick={() => {
                    toggleCart();
                    window.location.href = "/checkout";
                  }}
                  className="w-full mt-4 py-3 bg-white/30 backdrop-blur text-white font-semibold rounded-xl shadow-lg hover:bg-white/40 transition"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
