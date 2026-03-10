"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FlowerRow = ({ images, direction = "left", duration = 40 }) => {
  // Triple images for truly seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="flex overflow-hidden py-2 gap-1">
      <motion.div
        className="flex gap-1 shrink-0"
        initial={{
          x: direction === "left" ? "0%" : "-66.666%",
        }}
        animate={{
          x: direction === "left" ? "-66.666%" : "0%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="shrink-0 w-32 h-32 rounded-lg overflow-hidden opacity-40 relative"
          >
            <Image
              src={image}
              alt={`Flower ${index}`}
              fill
              className="object-cover"
              sizes="128px"
              unoptimized
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FlowerRow;
