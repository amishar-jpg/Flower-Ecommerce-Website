"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const tabs = [
  { label: "New Products", value: "all" },
  { label: "Best Seller", value: "plant" },
  { label: "Featured", value: "flower" },
];

const banners = [
  {
    tag: "Plant Collection",
    title: "Summer Terrariums Plants",
    desc: "Plants help make your house more beautiful. Limited edition. Eco-friendly. Not just for working out.",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80",
    reverse: false,
  },
  {
    tag: "Plant Collection",
    title: "Summer Terrariums Plants",
    desc: "Plants help make your house more beautiful. Limited edition. Eco-friendly. Not just for working out.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    reverse: true,
  },
];

const ProductGrid = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div id="products" className="bg-white">
      {/* ── Featured Banners ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 gap-0">
        {banners.map((b, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 ${
              b.reverse ? "" : ""
            } border border-gray-100`}
          >
            {/* Image side */}
            <div
              className={`relative h-72 md:h-80 bg-gray-50 overflow-hidden ${
                b.reverse ? "order-last md:order-last" : ""
              }`}
            >
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Text side */}
            <div
              className={`flex flex-col justify-center px-10 py-10 bg-white ${
                b.reverse ? "order-first md:order-first" : ""
              }`}
            >
              <p className="font-playfair italic text-green-600 text-lg mb-2">
                {b.tag}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                {b.desc}
              </p>
              <div>
                <button className="bg-green-700 text-white text-sm font-semibold px-7 py-3 hover:bg-green-800 active:scale-95 transition-all duration-200">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Trending Products ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trending Products
          </h2>
          <div className="flex justify-center mt-2 mb-6">
            <span className="block w-8 h-0.5 bg-green-600"></span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-8 mb-10 border-b border-gray-100 pb-3">
          {tabs.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`text-sm font-medium pb-1 transition-all duration-200 ${
                filter === value
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-base">No products found</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductGrid;
