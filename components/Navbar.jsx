"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();

  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/40 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Florique sprout icon — inline SVG */}
            <svg
              viewBox="0 0 36 52"
              width="20"
              height="29"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter
                  id="florGlow"
                  x="-40%"
                  y="-40%"
                  width="180%"
                  height="180%"
                >
                  <feGaussianBlur stdDeviation="1.4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g
                stroke="#22C55E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#florGlow)"
              >
                <path d="M18 50 C18 42 17 32 18 8" fill="none" />
                <path
                  d="M18 34 C11 27 2 23 5 12 C7 4 19 22 18 34 Z"
                  fill="none"
                />
                <path
                  d="M18 22 C25 15 34 11 31 2 C28 -5 17 14 18 22 Z"
                  fill="none"
                />
              </g>
            </svg>

            {/* Brand name */}
            <span className="font-playfair text-[21px] font-normal text-white tracking-[0.14em] leading-none">
              Florique
            </span>
          </Link>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-gray-300 font-medium hover:text-green-400 transition-all duration-300 group"
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Search"
            >
              <Search size={20} className="text-white" />
            </button>

            {/* Wishlist Icon */}
            <Link
              href="/wishlist"
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-0.5 relative"
              aria-label="Wishlist"
            >
              <Heart size={20} className="text-white" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* User Account Icon */}
            <button
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-0.5 hidden sm:block"
              aria-label="Account"
            >
              <User size={20} className="text-white" />
            </button>

            {/* Cart Icon with Badge */}
            <Link
              href="/cart"
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-0.5 relative"
              aria-label="Cart"
            >
              <ShoppingCart size={20} className="text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-4 backdrop-blur-md bg-black/60 rounded-lg px-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 font-medium hover:text-green-400 transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
