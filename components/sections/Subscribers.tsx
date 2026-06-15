"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { subscriberStats } from "@/lib/content";
import Counter from "@/components/ui/Counter";
import { VIEWPORT, fadeUp, fadeUpItem, hoverLift } from "@/lib/animations";

export default function Subscribers() {
  return (
    <section className="relative bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-14 max-w-2xl">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink"
          >
            A community that shows up,
            every platform, every day.
          </motion.h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subscriberStats.map((stat, i) => {
            const Icon = getIcon(stat.icon);
            return (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                custom={i}
                variants={fadeUpItem}
                whileHover={hoverLift}
                className="group relative overflow-hidden rounded-card border border-ink/[0.06] bg-paper p-6 transition-shadow duration-300 hover:shadow-glass-lg"
              >
                <div className="mb-5 flex items-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-body">{stat.label}</p>

                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-brand-red/[0.05] transition-transform duration-500 group-hover:scale-150" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}