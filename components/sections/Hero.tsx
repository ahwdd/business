// components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { icons } from "@/lib/icons";
import { heroStats } from "@/lib/content";
import {
  DURATION,
  EASE,
  drawLine,
  fadeUpItem,
  floatSlow,
  floatSlower,
} from "@/lib/animations";

const ArrowUpRight = icons.arrowUpRight;
const Sparkles = icons.sparkles;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-var(--nav-height))] items-center overflow-hidden bg-paper pt-(--nav-height) pb-16 sm:pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-noise-line opacity-[0.05]" />
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-1/4 h-105 w-105 rounded-full bg-brand-red blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-24 bottom-0 h-90 w-90 rounded-full bg-ink/4 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-310 px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <div>
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUpItem}
              className="text-[clamp(2.6rem,6.5vw,5.2rem)] font-extrabold leading-[1.02] tracking-tight text-ink"
            >
              We build the
              <br />
              <span className="relative inline-block">
                stories tech
                <motion.svg
                  initial="hidden"
                  animate="show"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-red"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <motion.path
                    variants={drawLine}
                    d="M2 9.5C40 3 100 1 198 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              <br />
              communities run on.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUpItem}
              className="mt-7 max-w-lg text-base leading-relaxed text-body sm:text-lg"
            >
              From content and production to esports and live broadcasting —
              Arabhardware Business delivers full-stack creative and
              operational solutions for the region&apos;s leading tech and
              gaming brands.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUpItem}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="shine-sweep group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03]"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/25 hover:bg-mist"
              >
                Explore our ecosystem
              </a>
            </motion.div>
          </div>

          {/* Right: stat panel with floating glass shapes weaving through it */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUpItem}
            className="relative"
          >
            {/* Floating glass shapes — sit behind the panel and drift across its edges */}
            <motion.div
              animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [0, 4, 0] }}
              transition={floatSlow}
              className="absolute -right-6 -top-8 z-0 hidden h-24 w-24 rounded-3xl border border-ink/6 bg-paper/70 shadow-glass backdrop-blur-md sm:block"
            />
            <motion.div
              animate={{ y: [0, 16, 0], x: [0, -8, 0], rotate: [0, -3, 0] }}
              transition={floatSlower}
              className="absolute -bottom-7 -left-6 z-20 hidden h-16 w-16 rounded-2xl border border-brand-red/20 bg-brand-red/6 backdrop-blur-md sm:block"
            />

            <div className="glass-panel relative z-10 overflow-hidden rounded-card-lg p-7 shadow-glass-lg sm:p-9">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-red/8 blur-3xl" />

              <div className="mb-6 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-body/60">
                <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                MENA&apos;s #1 Tech &amp; Gaming Media Group
              </div>

              <div className="grid grid-cols-2 gap-5">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * DURATION.fast * 0.25,
                      duration: DURATION.base,
                      ease: EASE,
                    }}
                    className="rounded-2xl border border-ink/5 bg-paper/70 p-5"
                  >
                    <div className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[12px] leading-snug text-body/60">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Third floating shape — drifts above the panel's corner */}
            <motion.div
              animate={{ y: [0, 14, 0], x: [0, -6, 0] }}
              transition={{ ...floatSlow, delay: 3 }}
              className="absolute -right-5 bottom-10 z-20 hidden h-12 w-12 rounded-2xl border border-ink/6 bg-paper/80 shadow-glass backdrop-blur-md lg:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}