"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Animation variant presets ───────────────────────────────────────────────
const VARIANTS = {
  fadeUp:    { hidden: { opacity: 0, y: 48 },                   visible: { opacity: 1, y: 0 } },
  fadeDown:  { hidden: { opacity: 0, y: -48 },                  visible: { opacity: 1, y: 0 } },
  fadeIn:    { hidden: { opacity: 0 },                           visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -70 },                  visible: { opacity: 1, x: 0 } },
  slideRight:{ hidden: { opacity: 0, x: 70 },                   visible: { opacity: 1, x: 0 } },
  jumpIn:    { hidden: { opacity: 0, y: 56, scale: 0.94 },      visible: { opacity: 1, y: 0, scale: 1 } },
  zoomIn:    { hidden: { opacity: 0, scale: 0.82 },             visible: { opacity: 1, scale: 1 } },
  flipUp:    { hidden: { opacity: 0, rotateX: 18, y: 40 },      visible: { opacity: 1, rotateX: 0, y: 0 } },
};

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

// ── Single element reveal ───────────────────────────────────────────────────
/**
 * ScrollReveal — wraps any children, animates them when they enter the viewport.
 * @param {string}  variant   — one of the VARIANTS keys (default "fadeUp")
 * @param {number}  delay     — seconds before the animation starts
 * @param {number}  duration  — animation duration in seconds
 * @param {boolean} once      — whether to animate only once (default true)
 * @param {string}  className — forwarded to the wrapper element
 * @param {string}  as        — HTML tag for the wrapper (default "div")
 */
export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.65,
  className = "",
  once = true,
  as = "div",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </Tag>
  );
}

// ── Stagger container ───────────────────────────────────────────────────────
/**
 * StaggerContainer — when in-view, staggers all direct StaggerChild elements.
 * @param {number} stagger — seconds between each child animation
 * @param {number} delay   — seconds before the first child starts
 */
export function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
  delay = 0,
  once = true,
  margin = "-80px 0px",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger child ───────────────────────────────────────────────────────────
/**
 * StaggerChild — must live inside a StaggerContainer. Inherits its
 * visible/hidden state from the parent and animates with the chosen variant.
 */
export function StaggerChild({
  children,
  variant = "fadeUp",
  duration = 0.6,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      transition={{ duration, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
