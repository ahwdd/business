"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { icons } from "@/lib/icons";
import { navLinks } from "@/lib/content";
import { EASE } from "@/lib/animations";

const MenuIcon = icons.menu;
const CloseIcon = icons.close;
const ArrowUpRight = icons.arrowUpRight;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          maxWidth: scrolled ? 980 : 1240,
          paddingTop: scrolled ? 8 : 10,
          paddingBottom: scrolled ? 8 : 10,
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.7)"
            : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(10,10,10,0.06)"
            : "0 0px 0px rgba(10,10,10,0)",
        }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`flex w-full items-center justify-between rounded-full border px-4 backdrop-blur-xl sm:px-6 ${
          scrolled ? "border-ink/[0.06]" : "border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper">
            <svg
              viewBox="0 0 60 60"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22.3,49.2h-7.7v-7.7h7.7V49.2z M45.4,49.2h-7.7V33.8H30v-7.7h7.7v-7.7H22.3v15.4h-7.7V18.5h7.7v-7.7h15.4v7.7h7.7L45.4,49.2z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight text-ink">
              Arabhardware
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-body/60">
              Business
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-body transition-colors duration-300 hover:text-ink"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 ease-[var(--ease-nav)] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="shine-sweep hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] sm:flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper/80 text-ink transition-colors lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 right-4 top-[72px] z-40 overflow-hidden rounded-3xl border border-ink/[0.06] bg-paper/90 p-3 shadow-glass-lg backdrop-blur-xl sm:left-6 sm:right-6 lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-ink transition-colors hover:bg-mist"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-body/40" />
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-2xl bg-ink px-4 py-3.5 text-sm font-semibold text-paper"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}