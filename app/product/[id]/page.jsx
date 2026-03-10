"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Heart, ShoppingCart, ArrowLeft, Minus, Plus, Leaf, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const StarRow = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} viewBox="0 0 20 20" width="16" height="16"
        fill={s <= Math.round(rating) ? "#f59e0b" : "none"}
        stroke="#f59e0b" strokeWidth="1.2">
        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78z" />
      </svg>
    ))}
  </div>
);

const perks = [
  { icon: Truck,       label: "Free Delivery",    sub: "On orders over $50" },
  { icon: Leaf,        label: "Live Guarantee",   sub: "30-day plant health" },
  { icon: RotateCcw,   label: "Easy Returns",     sub: "Hassle-free returns" },
  { icon: ShieldCheck, label: "Secure Checkout",  sub: "SSL encrypted" },
];

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f7f4]">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Product not found</p>
          <button onClick={() => router.push("/")}
            className="text-green-600 font-semibold hover:underline">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const inWishlist = isInWishlist(product.id);
  const originalPrice = (product.price * 1.25).toFixed(2);

  return (
    <div className="min-h-screen bg-[#f9f7f4]">

      {/* Toast */}
      <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 bg-gray-900 text-white text-sm font-medium px-5 py-3.5 rounded-full shadow-2xl transition-all duration-500 ${added ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <ShoppingCart size={15} />
        Added to cart
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Back */}
        <button onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-medium mb-8 transition-colors duration-200">
          <ArrowLeft size={16} />
          Back to Products
        </button>

        {/* Main card */}
        <div className="bg-white grid md:grid-cols-2 overflow-hidden shadow-sm">

          {/* ── Left: Image ── */}
          <div className="relative bg-gray-50 min-h-120 md:min-h-145">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              priority
            />
            {/* Category pill over image */}
            <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-1.5">
              {product.category}
            </span>
            {product.stock < 10 && (
              <span className="absolute top-5 right-5 bg-red-500 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5">
                Only {product.stock} left
              </span>
            )}
          </div>

          {/* ── Right: Details ── */}
          <div className="flex flex-col px-10 py-10">

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <StarRow rating={product.rating} />
              <span className="text-sm text-gray-400 font-medium">{product.rating} / 5.0</span>
            </div>

            {/* Name */}
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
              {product.name}
            </h1>

            {/* Price row */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <span className="text-base text-gray-400 line-through">${originalPrice}</span>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5">SAVE 20%</span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 mb-5" />

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Availability */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
              <span className="text-sm text-gray-500">
                {product.stock > 0
                  ? <><span className="text-green-600 font-semibold">In Stock</span> — {product.stock} units available</>
                  : <span className="text-red-500 font-semibold">Out of Stock</span>}
              </span>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Quantity</p>
              <div className="inline-flex items-center border border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150 disabled:opacity-30"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-semibold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150 disabled:opacity-30"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-40 text-white text-sm font-semibold tracking-wide uppercase py-4 flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-200"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
              <button
                onClick={() => addToWishlist(product)}
                className={`w-full text-sm font-semibold tracking-wide uppercase py-4 flex items-center justify-center gap-2 border transition-all duration-200 active:scale-[0.98] ${
                  inWishlist
                    ? "bg-green-50 border-green-500 text-green-600"
                    : "bg-white border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600"
                }`}
              >
                <Heart size={16} className={inWishlist ? "fill-green-500 text-green-500" : ""} />
                {inWishlist ? "Saved to Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-3">
              {perks.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-2.5 p-3 bg-gray-50">
                  <Icon size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{label}</p>
                    <p className="text-[11px] text-gray-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
