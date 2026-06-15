"use client";

import { motion } from "framer-motion";
import { icons } from "@/lib/icons";
import { services } from "@/lib/content";
import { VIEWPORT, fadeUpItem, hoverLift } from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const ArrowUpRight = icons.arrowUpRight;

export default function Services() {
  return (
    <section id="services" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow icon="grid" label="What we do" />
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            custom={1}
            variants={fadeUpItem}
            className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink"
          >
            Services built for
            <br />
            the full campaign cycle.
          </motion.h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i % 6}
              variants={fadeUpItem}
              whileHover={hoverLift}
              className="group relative flex flex-col overflow-hidden rounded-card border border-ink/[0.06] bg-mist p-6 transition-all duration-300 hover:border-brand-red/20 hover:bg-paper hover:shadow-glass-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-body/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-4 w-4 text-body/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-red" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {service.desc}
              </p>

              <span className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-brand-red transition-transform duration-500 ease-[var(--ease-nav)] group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}