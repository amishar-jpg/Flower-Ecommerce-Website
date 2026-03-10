"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const router = useRouter();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <Heart size={80} className="mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Your Wishlist is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Save your favorite products for later by adding them to your
            wishlist.
          </p>
          <Link
            href="/"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-green-500 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Continue Shopping</span>
        </button>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Wishlist</h1>
          <button
            onClick={clearWishlist}
            className="text-red-500 hover:text-red-600 font-semibold transition-colors duration-300"
          >
            Clear Wishlist
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 shadow-lg"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <Link href={`/product/${item.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-green-500 transition-colors duration-300 cursor-pointer">
                    {item.name}
                  </h3>
                </Link>

                <p className="text-2xl font-bold text-green-600 mb-4">
                  ${item.price}
                </p>

                {/* Move to Cart Button */}
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="w-full bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                >
                  <ShoppingCart size={18} />
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/"
            className="bg-white text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-200"
          >
            Continue Shopping
          </Link>
          <Link
            href="/cart"
            className="bg-green-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:scale-105"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
