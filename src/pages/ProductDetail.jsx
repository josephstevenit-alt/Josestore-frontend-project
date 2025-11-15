// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import useScrollTop from "../hooks/useScrollTop";
import { useEffect } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  useScrollTop();

  // find product by ID
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.title} - E-Store`;
    } else {
      document.title = "Product Not Found - E-Store";
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-red-600">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Product Image */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {product.title}
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            Category: {product.category}
          </p>

          <p className="text-xl font-semibold text-green-600 mb-6">
            ₹ {product.price}
          </p>

          <p className="text-yellow-500 font-medium mb-6">
            ⭐ Rating: {product.rating} / 5
          </p>

          {/* Buy Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
