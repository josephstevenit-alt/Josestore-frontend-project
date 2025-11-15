import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

// ✅ FIXED IMPORT (correct way for named export)
import { products as productsData } from "../data/products";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    // Fake delay to show Loader animation
    setTimeout(() => {
      setFeatured(productsData.slice(0, 6)); // pick first 6 products
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div className="w-full">

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-12">
        <SectionTitle title="Shop by Category" subtitle="Find your style" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <CategoryCard
            title="Men"
            image="https://i.pinimg.com/1200x/4f/2a/38/4f2a3855f404255e7bcb92fe665e8870.jpg"
            link="/products?cat=men"
          />
          <CategoryCard
            title="Women"
            image="https://i.pinimg.com/736x/70/c9/cd/70c9cdc86929028fa83952d28b4e26d1.jpg"
            link="/products?cat=women"
          />
          <CategoryCard
            title="Accessories"
            image="https://i.pinimg.com/736x/5c/6a/42/5c6a42c0d5a924a5645c3442946abb9c.jpg"
            link="/products?cat=accessories"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <SectionTitle
          title="Featured Products"
          subtitle="Trending items picked for you"
        />

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
          >
            {featured.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </motion.div>
        )}
      </section>

      {/* CTA Banner */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl my-14 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get 20% Off On Your First Order!
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Use code <span className="font-semibold">WELCOME20</span> at checkout.
        </p>

        <motion.a
          href="/products"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-7 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-md cursor-pointer"
        >
          Shop Now
        </motion.a>
      </section>
    </div>
  );
}
