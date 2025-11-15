// src/pages/Products.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import useScrollTop from "../hooks/useScrollTop";

export default function Products() {
  useScrollTop();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search") || "";

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    document.title = "Products - E-Store";
  }, []);

  // Filter products based on search term
  useEffect(() => {
    const term = searchQuery.toLowerCase();
    setFilteredProducts(
      products.filter((p) => p.title.toLowerCase().includes(term))
    );
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-wide">
        {searchQuery ? `Search results for "${searchQuery}"` : "All Products"}
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
