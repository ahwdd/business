"use client";

import { motion } from "framer-motion";
import { icons } from "@/lib/icons";
import { contactInfo } from "@/lib/content";
import { VIEWPORT, fadeUpItem, scaleIn } from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const ArrowUpRight = icons.arrowUpRight;
const Mail = icons.mail;
const MapPin = icons.mapPin;

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={scaleIn}
          className="glass-panel relative overflow-hidden rounded-card-lg px-6 py-12 sm:px-12 sm:py-16 lg:px-20"
        >
          {/* Ambient glow accents */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-red/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-ink/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-noise-line opacity-[0.04]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow icon="sparkles" label={contactInfo.eyebrow} />

              <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
                {contactInfo.title}
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-body sm:text-lg">
                {contactInfo.desc}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="shine-sweep group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
                <a
                  href="#ecosystem"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/25 hover:bg-mist"
                >
                  View our ecosystem
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Locations panel */}
            <div className="grid gap-4">
              {contactInfo.locations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial="hidden"
                  whileInView="show"
                  viewport={VIEWPORT}
                  custom={i + 1}
                  variants={fadeUpItem}
                  className="group flex items-center gap-4 rounded-card border border-ink/[0.06] bg-paper/70 p-5 transition-all duration-300 hover:border-brand-red/20 hover:shadow-glass-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-base font-bold tracking-tight text-ink">
                      {loc.city}
                    </div>
                    <div className="text-sm text-body">{loc.detail}</div>
                  </div>
                </motion.div>
              ))}

              <div className="flex items-center gap-3 rounded-card border border-brand-red/20 bg-brand-red/[0.06] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <p className="text-sm leading-snug text-body">
                  Looking for a custom build instead?{" "}
                  <a
                    href="https://ahw.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline decoration-brand-red/40 underline-offset-2 transition-colors hover:text-brand-red"
                  >
                    Visit AHW Store
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}