import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { products as initialProducts } from "../data/products";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    rating: "",
    image: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("admin_products");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(initialProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("admin_products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (!form.title || !form.price || !form.category || !form.image) {
      alert("Please fill all required fields!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: form.title,
      price: Number(form.price),
      category: form.category,
      rating: Number(form.rating || 4.0),
      image: form.image,
    };

    setProducts([newProduct, ...products]);

    setForm({
      title: "",
      price: "",
      category: "",
      rating: "",
      image: "",
    });
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Admin Panel
      </motion.h1>

      {/* Add Product Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border rounded-xl p-6 shadow-lg mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="font-medium text-gray-700">Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="Product title"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Price *</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="1999"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Category *</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="Electronics"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Rating</label>
            <input
              type="number"
              max="5"
              min="1"
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="4.5"
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-medium text-gray-700">Image URL *</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-1"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={addProduct}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md font-semibold"
        >
          Add Product
        </motion.button>
      </motion.div>

      {/* Product Table */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full border rounded-xl bg-white shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Rating</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">
                  No products available.
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </td>
                  <td className="p-3">{p.title}</td>
                  <td className="p-3">₹{p.price}</td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3">{p.rating}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="text-red-600 font-semibold hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
