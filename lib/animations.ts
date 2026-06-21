// lib/animations.ts
import type { Transition, Variants } from "framer-motion";

export const EASE: Transition["ease"] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.4,
  base: 0.6,
  slow: 0.8,
} as const;

/** Standard viewport settings for scroll-triggered reveals. */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

/** Fade + rise reveal, used for headings, paragraphs, and badges. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE },
  },
};

/** Same as fadeUp, but accepts a custom index for staggered children. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, delay: i * 0.06, ease: EASE },
  }),
};

/** Subtle scale-in, for cards and panels. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE },
  },
};

/** Continuous gentle float, for ambient background shapes. */
export const floatSlow: Transition = {
  duration: 9,
  repeat: Infinity,
  ease: "easeInOut",
};

export const floatSlower: Transition = {
  duration: 12,
  repeat: Infinity,
  ease: "easeInOut",
};

/** SVG path "draw" reveal — used for underline accents. */
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, ease: EASE, delay: 0.5 },
  },
};

/** Hover lift used by interactive cards. */
export const hoverLift = { y: -5 };