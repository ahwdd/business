// components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { aboutHighlights } from "@/lib/content";
import { VIEWPORT, fadeUp, fadeUpItem, hoverLift } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-310 px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left: heading */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              variants={fadeUp}
              className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink"
            >
              A combination of creative
              solutions and professional execution.
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={1}
              variants={fadeUpItem}
              className="mt-6 max-w-lg text-base leading-relaxed text-body sm:text-lg"
            >
              We&apos;re privileged to offer a wide range of content services
              that reach over 48,000,000 technophiles each month — covering
              custom content, creative strategy, esports operations, and a
              dedicated e-commerce arm under AHW Store.
            </motion.p>
          </div>

          {/* Right: highlight cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {aboutHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                custom={i}
                variants={fadeUpItem}
                whileHover={hoverLift}
                className={`group relative overflow-hidden rounded-card border border-ink/6 bg-mist p-6 transition-colors duration-300 hover:bg-paper hover:shadow-glass-lg ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-red/6 transition-transform duration-500 group-hover:scale-150" />
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-[11px] font-bold text-paper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}