"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/content";
import { VIEWPORT, fadeUpItem } from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function Partners() {
  // Split into two rows for a layered marquee effect
  const mid = Math.ceil(partners.length / 2);
  const rowA = partners.slice(0, mid);
  const rowB = partners.slice(mid);

  return (
    <section id="partners" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow icon="users" label="Trusted by" />
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            custom={1}
            variants={fadeUpItem}
            className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink"
          >
            Backed by the names
            <br />
            that define the industry.
          </motion.h2>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative flex flex-col gap-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mist to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mist to-transparent sm:w-40" />

        <MarqueeRow items={rowA} reverse={false} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}

function MarqueeRow({ items, reverse }: { items: string[]; reverse: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-3 pr-3 ${
          reverse ? "animate-marquee-slow-reverse" : "animate-marquee-slow"
        }`}
      >
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center whitespace-nowrap rounded-full border border-ink/[0.06] bg-paper px-6 py-3 text-sm font-semibold tracking-wide text-body/70 transition-colors hover:text-ink"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}