// components/ui/BackToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { icons } from "@/lib/icons";
import { EASE } from "@/lib/animations";

const ArrowUp = icons.arrowUp;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: EASE }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-ink text-paper shadow-glass-lg sm:bottom-8 sm:right-8"
        >
          {/* Liquid fill rises from the bottom on hover */}
          <motion.span
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={{ duration: 0.45, ease: EASE }}
            className="absolute inset-0 rounded-full bg-brand-red"
            aria-hidden="true"
          />
          <motion.span
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="relative z-10"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}