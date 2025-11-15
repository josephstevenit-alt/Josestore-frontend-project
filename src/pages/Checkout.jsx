// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { CreditCard, Truck, User, MapPin, Phone } from "lucide-react";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill Name, Phone & Address.");
      return;
    }
    alert(`Order placed successfully!\nTotal: ₹${total}`);
    clearCart();
    setForm({ name: "", email: "", phone: "", address: "", city: "", pincode: "", payment: "cod" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 drop-shadow-lg"
      >
        Checkout
      </motion.h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* --- Shipping Form --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <User size={28} /> Shipping Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
                <User size={16} /> Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-indigo-400"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-indigo-400"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
                <Phone size={16} /> Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-indigo-400"
                placeholder="+91 9876543210"
                pattern="[0-9]{10,15}"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
                <MapPin size={16} /> City
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-indigo-400"
                placeholder="Mumbai"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1">
                <MapPin size={16} /> Full Address *
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mt-1 h-24 resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-indigo-400"
                placeholder="House no, street name, nearby landmark"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-gray-200">Pincode</label>
              <input
                type="number"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-indigo-400"
                placeholder="400001"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <CreditCard size={20} /> Payment Method
            </h3>
            <div className="flex gap-6 text-gray-700 dark:text-gray-200">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={form.payment === "online"}
                  onChange={handleChange}
                />
                Online Payment
              </label>
            </div>
          </div>
        </motion.div>

        {/* --- Order Summary --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
            <Truck size={28} /> Order Summary
          </h2>

          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition">
                <p>{item.title} <span className="text-gray-500 dark:text-gray-400">x{item.quantity}</span></p>
                <p>₹ {item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <hr className="my-4 border-gray-300 dark:border-gray-600" />

          <div className="flex justify-between text-xl font-semibold text-gray-900 dark:text-white">
            <p>Total</p>
            <p>₹ {total}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOrder}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl shadow-md hover:bg-green-700 transition"
          >
            Place Order
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
