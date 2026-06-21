// components/sections/icons/AhwMark.tsx
interface AhwMarkProps {
  className?: string;
  variant?: "red" | "black";
}

const BG: Record<NonNullable<AhwMarkProps["variant"]>, string> = {
  red: "var(--color-brand-red)",
  black: "var(--color-ink)",
};

export default function AhwMark({ className, variant = "red" }: AhwMarkProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <rect x="0" y="0" width="60" height="60" rx="14" fill={BG[variant]} />
      <path
        fill="#ffffff"
        d="M22.3,49.2h-7.7v-7.7h7.7V49.2z M45.4,49.2h-7.7V33.8H30v-7.7h7.7v-7.7H22.3v15.4h-7.7V18.5h7.7v-7.7h15.4v7.7h7.7L45.4,49.2z"
      />
    </svg>
  );
}