"use client";

import React from "react";
import FlowerBackground from "./FlowerBackground";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Flower Background */}
      <FlowerBackground />
      {/* Enhanced Dark Gradient Overlay - Lighter for visibility */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60 z-5"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="text-center max-w-4xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="block w-6 h-px bg-green-400 opacity-80"></span>
            <p className="text-green-400 text-xs uppercase tracking-[0.3em] font-semibold opacity-90">
              Handpicked Collection
            </p>
            <span className="block w-6 h-px bg-green-400 opacity-80"></span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            style={{ textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
          >
            Plants &amp; <span className="italic text-green-300">Flowers</span>
          </h1>

          {/* Thin decorative line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-12 h-px bg-white/20"></span>
            <span className="block w-2 h-2 rounded-full bg-green-400/60"></span>
            <span className="block w-12 h-px bg-white/20"></span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300/90 max-w-xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
            Fresh plants and beautiful flowers carefully selected to bring life
            and elegance into your space.
          </p>

          {/* CTA Button - solid, no gradient */}
          <div className="flex items-center justify-center gap-4">
            <button className="bg-green-500 text-white font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-green-400 active:scale-95 transition-all duration-300 shadow-lg shadow-green-900/40">
              Explore Collection
            </button>
            <button className="text-white/70 text-sm tracking-widest uppercase font-medium hover:text-white transition-colors duration-300 border-b border-white/30 hover:border-white pb-0.5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
