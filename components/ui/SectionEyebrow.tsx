// components/ui/SectionEyeBrow.tsx
"use client";

import { motion } from "framer-motion";
import type { IconKey } from "@/lib/icons";
import { getIcon } from "@/lib/icons";
import { fadeUp, VIEWPORT } from "@/lib/animations";

interface SectionEyebrowProps {
  label: string;
  icon: IconKey;
  className?: string;
}

export default function SectionEyebrow({
  label,
  icon,
  className = "",
}: SectionEyebrowProps) {
  const Icon = getIcon(icon);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={fadeUp}
      className={`mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-body/60 ${className}`}
    >
      <Icon className="h-3.5 w-3.5 text-brand-red" />
      <span className="h-px w-7 bg-ink/15" />
      {label}
    </motion.div>
  );
}