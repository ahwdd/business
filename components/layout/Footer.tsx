// components/layout/footer.tsx
"use client";

import { motion } from "framer-motion";
import { getIcon, icons } from "@/lib/icons";
import { footerLinks } from "@/lib/content";
import { VIEWPORT, fadeUp } from "@/lib/animations";
import AhwMark from "@/components/sections/icons/AhwMark";

const ArrowUpRight = icons.arrowUpRight;
const GlobeIcon = icons.globe;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-20 pb-10">
      <div className="absolute inset-0 bg-noise-line opacity-[0.05]" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-brand-red/10 blur-[120px]" />

      <div className="relative mx-auto max-w-310 px-6">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <AhwMark className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">
                  Arabhardware
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Business
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              The largest tech &amp; gaming media group in the MENA region —
              content, esports, broadcasting, and e-commerce under one
              ecosystem.
            </p>

            <div className="mt-7 flex items-center gap-2.5">
              {footerLinks.social.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/60 transition-all duration-300 hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Menu links */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.menu.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Stay in the loop
            </h4>
            <p className="mb-5 text-sm leading-relaxed text-white/45">
              Drops, partnerships, and ecosystem updates — straight to your
              inbox, no noise.
            </p>
            <form
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/4 p-1.5 backdrop-blur-md transition-colors duration-300 focus-within:border-brand-red/40"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-red px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-brand-red-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="text-xs text-white/35"
          >
            © {new Date().getFullYear()} Arabhardware Business. All rights
            reserved.
          </motion.span>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-xs font-medium text-white/45">
            <GlobeIcon className="h-3.5 w-3.5 text-brand-red" />
            Operating across MENA &amp; GCC
          </div>
        </div>
      </div>
    </footer>
  );
}