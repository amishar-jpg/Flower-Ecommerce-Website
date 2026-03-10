"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          width="14"
          height="14"
          fill={star <= Math.round(rating) ? "#f59e0b" : "none"}
          stroke="#f59e0b"
          strokeWidth="1.2"
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78z" />
        </svg>
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist(product);
  };

  const inWishlist = isInWishlist(product.id);
  const originalPrice = (product.price * 1.3).toFixed(2);

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group bg-white border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer">
        {/* Image area */}
        <div className="relative w-full h-60 bg-gray-50 overflow-hidden flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />

          {/* Hover action bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1 py-3 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center w-9 h-9 border border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-500 transition-colors duration-200"
              aria-label="Add to cart"
            >
              <ShoppingCart size={15} />
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`flex items-center justify-center w-9 h-9 border transition-colors duration-200 ${
                inWishlist
                  ? "border-green-500 text-green-600"
                  : "border-gray-200 text-gray-500 hover:border-green-500 hover:text-green-600"
              }`}
              aria-label="Wishlist"
            >
              <Heart size={15} className={inWishlist ? "fill-current" : ""} />
            </button>
            <Link
              href={`/product/${product.id}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-9 h-9 border border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-500 transition-colors duration-200"
              aria-label="Quick view"
            >
              <Eye size={15} />
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="px-4 pt-3 pb-4">
          <StarRating rating={product.rating} />
          <h3 className="text-sm font-medium text-gray-800 mt-1.5 mb-1.5 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-bold text-sm">
              ${product.price}
            </span>
            <span className="text-red-400 text-xs font-medium">-10%</span>
            <span className="text-gray-400 text-xs line-through">
              ${originalPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
