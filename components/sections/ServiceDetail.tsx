// components/sections/ServiceDetail.tsx
"use client";

import { motion } from "framer-motion";
import { icons } from "@/lib/icons";
import type { Service } from "@/lib/content";
import {
  VIEWPORT,
  fadeUp,
  fadeUpItem,
  floatSlow,
  floatSlower,
  scaleIn,
} from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const ArrowUpRight = icons.arrowUpRight;
const Sparkles = icons.sparkles;

interface ServiceDetailProps {
  service: Service;
  index: number;
  next: Service;
}

export default function ServiceDetail({ service, index, next }: ServiceDetailProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-paper pt-(--nav-height) pb-16 sm:pb-20">
        <div className="absolute inset-0 bg-noise-line opacity-[0.05]" />
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/4 h-105 w-105 rounded-full bg-brand-red/[0.07] blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-24 bottom-0 h-90 w-90 rounded-full bg-ink/4 blur-[120px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-310 px-6">
          <motion.a
            href="/#services"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-body transition-colors duration-300 hover:text-ink"
          >
            <ArrowUpRight className="h-3.5 w-3.5 rotate-225 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All services
          </motion.a>

          <div className="flex flex-col gap-3">
            <motion.span
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-mono text-sm font-semibold tracking-widest text-brand-red"
            >
              {number}
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUpItem}
              className="max-w-2xl text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight text-ink"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUpItem}
              className="mt-3 max-w-xl text-base leading-relaxed text-body sm:text-lg"
            >
              {service.intro}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUpItem}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="/#contact"
                className="shine-sweep group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03]"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/25 hover:bg-mist"
              >
                View all services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="relative bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-310 px-6">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionEyebrow icon="sparkles" label="What's included" />
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                variants={fadeUp}
                className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight text-ink"
              >
                Built around how this
                <br />
                actually gets used.
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                custom={1}
                variants={fadeUpItem}
                className="mt-5 max-w-md text-sm leading-relaxed text-body sm:text-base"
              >
                {service.desc}
              </motion.p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.highlights.map((highlight, i) => (
                <motion.div
                  key={highlight}
                  initial="hidden"
                  whileInView="show"
                  viewport={VIEWPORT}
                  custom={i}
                  variants={fadeUpItem}
                  className="group relative overflow-hidden rounded-card border border-ink/6 bg-mist p-6 transition-colors duration-300 hover:bg-paper hover:shadow-glass-lg"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-red/6 transition-transform duration-500 group-hover:scale-150" />
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red/10 ring-1 ring-inset ring-brand-red/20">
                    <Sparkles className="h-4 w-4 text-brand-red" />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-ink">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA panel ── */}
      <section className="relative overflow-hidden bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-310 px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={scaleIn}
            className="glass-panel relative overflow-hidden rounded-card-lg px-6 py-12 sm:px-12 sm:py-16 lg:px-20"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-red/8 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-ink/4 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-noise-line opacity-[0.04]" />

            <motion.div
              animate={{ y: [0, -14, 0], x: [0, 8, 0], rotate: [0, 3, 0] }}
              transition={floatSlow}
              className="absolute -right-5 -top-6 z-0 hidden h-20 w-20 rounded-3xl border border-ink/6 bg-paper/70 shadow-glass backdrop-blur-md sm:block"
            />
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
              transition={floatSlower}
              className="absolute -bottom-6 left-6 z-0 hidden h-14 w-14 rounded-2xl border border-brand-red/20 bg-brand-red/6 backdrop-blur-md sm:block"
            />

            <div className="relative flex flex-col items-center gap-5 text-center">
              <SectionEyebrow icon="grid" label="Ready when you are" className="justify-center" />
              <h2 className="max-w-xl text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight text-ink">
                Let&apos;s bring {service.title.toLowerCase()} to your next launch.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-body sm:text-base">
                Tell us about your brand and timeline — our team replies
                within one business day.
              </p>
              <a
                href="/#contact"
                className="shine-sweep group mt-2 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03]"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Next service ── */}
      <section className="relative bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-310 px-6">
          <motion.a
            href={`/services/${next.slug}`}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="group flex flex-col items-start justify-between gap-6 rounded-card-lg border border-ink/6 bg-paper p-8 transition-all duration-300 hover:border-brand-red/20 hover:shadow-glass-lg sm:flex-row sm:items-center sm:p-10"
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-body/50">
                Next service
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {next.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-body">
                {next.desc}
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </motion.a>
        </div>
      </section>
    </>
  );
}