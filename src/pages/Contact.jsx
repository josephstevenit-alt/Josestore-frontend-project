// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react"; // npm i lucide-react
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .send(serviceID, templateID, form, publicKey)
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Oops! Something went wrong. Try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side - Info with Icons and Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-900 dark:text-white flex flex-col justify-center space-y-6"
        >
          <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Get in Touch</h2>
          <p className="text-lg mb-6 drop-shadow-sm">
            Have questions about a product, your order, or anything else?  
            Send us a message and our team will get back to you promptly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-indigo-600 dark:text-indigo-400" />
              <p>Tirupathur, Tamil Nadu, India</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-indigo-600 dark:text-indigo-400" />
              <p>+91 9043409645</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-indigo-600 dark:text-indigo-400" />
              <p>josephstevenit@gmail.com</p>
            </div>
          </div>

          {/* Optional Map Image */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.212435749239!2d78.0123456789!3d12.345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7d2b7f0e1234%3A0x123456789abcdef0!2sTirupathur%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              className="w-full h-64 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-5"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Send a Message
          </h2>

          <div>
            <label className="text-gray-700 dark:text-gray-200 font-medium">Your Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200 font-medium">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:text-white"
              placeholder="your@example.com"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200 font-medium">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg h-28 resize-none focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:text-white"
              placeholder="Write your message..."
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
