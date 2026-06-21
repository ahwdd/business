// components/sections/Ecosystem.tsx
"use client";

import { motion } from "framer-motion";
import { icons } from "@/lib/icons";
import { ecosystemBrands } from "@/lib/content";
import { VIEWPORT, drawLine, fadeUpItem, hoverLift, scaleIn } from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import AhwMark from "./icons/AhwMark";
import ArGamezMark from "./icons/ArGamezMark";
import ArTechMark from "./icons/ArTechMark";

const ArrowUpRight = icons.arrowUpRight;

// Each brand's badge: how to render its mark, and the solid badge
// background that matches that mark's own brand color (light theme —
// no border/ring, the color itself carries the identity).
const BRAND_BADGE: Record<
  string,
  { render: (className: string) => React.ReactNode; bg: string }
> = {
  Arabhardware: {
    render: (className) => <AhwMark variant="red" className={className} />,
    bg: "transparent", // AhwMark draws its own solid red background
  },
  "AHW Store": {
    render: (className) => <AhwMark variant="black" className={className} />,
    bg: "transparent", // AhwMark draws its own solid black background
  },
  "AHW Esports": {
    render: (className) => <AhwMark variant="red" className={className} />,
    bg: "transparent",
  },
  ArGamez: {
    render: (className) => <ArGamezMark className={className} />,
    bg: "#fff",
  },
  ARTech: {
    render: (className) => <ArTechMark className={className} />,
    bg: "#fff",
  },
};

// Grid placement for the hub-and-spoke layout (3x3, desktop only).
// Center cell is Arabhardware; the four corners are the satellites.
const SPOKE_POSITION = [
  "lg:col-start-2 lg:row-start-2", // Arabhardware — center
  "lg:col-start-1 lg:row-start-1", // AHW Store — top-left
  "lg:col-start-3 lg:row-start-1", // AHW Esports — top-right
  "lg:col-start-1 lg:row-start-3", // ArGamez — bottom-left
  "lg:col-start-3 lg:row-start-3", // ARTech — bottom-right
];

// Connector lines from center (50,50) to each corner, in percentage
// viewBox units. Drawn shorter than full length so they terminate at
// the edge of each card rather than its center.
const CONNECTORS = [
  "M50 50 L22 22",
  "M50 50 L78 22",
  "M50 50 L22 78",
  "M50 50 L78 78",
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-310 px-6">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow icon="share" label="Our ecosystem" />
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={1}
              variants={fadeUpItem}
              className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink"
            >
              One group, five brands,
              <br />
              one audience.
            </motion.h2>
          </div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            custom={2}
            variants={fadeUpItem}
            className="max-w-sm text-sm leading-relaxed text-body sm:text-base"
          >
            Every brand carries equal weight in the group — Arabhardware sits
            at the center, with each division extending its reach into media,
            commerce, and competition.
          </motion.p>
        </div>

        {/* Hub-and-spoke layout */}
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
          {/* Connector lines (desktop only) */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden="true"
          >
            {CONNECTORS.map((d, i) => (
              <motion.path
                key={d}
                d={d}
                stroke="currentColor"
                className="text-ink/10"
                strokeWidth="0.3"
                strokeDasharray="2 2"
                fill="none"
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                variants={drawLine}
                transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
              />
            ))}
          </svg>

          {ecosystemBrands.map((brand, i) => {
            const badge = BRAND_BADGE[brand.name];
            const isCenter = brand.isCenter;
            const isAhwFamily = badge.bg === "transparent";

            return (
              <motion.a
                key={brand.name}
                href={brand.href}
                target={brand.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                custom={isCenter ? 0 : i + 1}
                variants={isCenter ? scaleIn : fadeUpItem}
                whileHover={hoverLift}
                className={`group relative z-10 flex min-h-45 flex-col justify-between overflow-hidden rounded-card border p-6 transition-all duration-400 ${
                  isCenter
                    ? "border-brand-red/25 bg-paper shadow-red-glow"
                    : "border-ink/6 bg-mist hover:bg-paper hover:shadow-glass-lg"
                } ${SPOKE_POSITION[i]} ${
                  isCenter ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125 ${
                    isCenter ? "bg-brand-red/10" : "bg-ink/4"
                  }`}
                />

                <div className="relative flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl"
                    style={isAhwFamily ? undefined : { backgroundColor: badge.bg }}
                  >
                    {badge.render(isAhwFamily ? "h-full w-full" : "h-full w-full p-2")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-body/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-red" />
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {brand.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {brand.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}