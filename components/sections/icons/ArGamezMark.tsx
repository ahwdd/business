interface ArGamezMarkProps {
  className?: string;
  /** Unique id suffix so multiple instances don't share gradient defs. */
  id?: string;
}

/**
 * The ArGamez mark — a warm orange-to-red gradient "controller" shape
 * with a small dark accent cluster, recreated from the original
 * Arabhardware ecosystem logo.
 */
export default function ArGamezMark({ className, id = "argamez" }: ArGamezMarkProps) {
  const gradA = `${id}-grad-a`;
  const gradB = `${id}-grad-b`;

  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradA} x1="38.1" y1="28" x2="44.5" y2="16.9" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#EEC32D" />
          <stop offset="0.27" stopColor="#F1952C" />
          <stop offset="0.6" stopColor="#F3602B" />
          <stop offset="0.86" stopColor="#F53E2A" />
          <stop offset="1" stopColor="#F6322A" />
        </linearGradient>
        <linearGradient id={gradB} x1="15.4" y1="44.3" x2="42.8" y2="16.9" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#EEC32D" />
          <stop offset="0.14" stopColor="#EEBD2D" />
          <stop offset="0.31" stopColor="#EFAD2D" />
          <stop offset="0.51" stopColor="#F1922C" />
          <stop offset="0.73" stopColor="#F36C2B" />
          <stop offset="0.96" stopColor="#F53C2A" />
          <stop offset="1" stopColor="#F6322A" />
        </linearGradient>
      </defs>

      {/* Small dark accent cluster (top-left plus shape) */}
      <path
        fill="currentColor"
        className="text-ink"
        d="M22.8,28.6h-2.6V26h-2.3v2.6h-2.6V31h2.6v2.6h2.3V31h2.6V28.6z"
      />

      {/* Upper-right gradient sweep */}
      <path
        fill={`url(#${gradA})`}
        d="M51.9,23h-4.5c-0.2,0-0.4,0-0.5,0c-0.1,0-0.2,0-0.3,0c-1-0.8-2.1-1.4-3.3-1.8c-0.8-0.2-1.6-0.3-2.4-0.3
          c-0.2,0-0.4,0-0.6,0c-0.5,0-0.9,0.1-1.4,0.2c-1.5,0.3-2.9,1.1-4,2.1c-0.3,0.3-0.6,0.6-0.9,0.9c-0.3,0.4-0.6,0.7-0.8,1.1
          c-0.2-0.2-0.4-0.5-0.6-0.7c-0.7-1-1.2-2.2-1.5-3.4c1.7-1.9,3.9-3.3,6.5-3.9c0.4-0.1,0.8-0.2,1.2-0.2c0.5-0.1,1.1-0.1,1.6-0.1
          c0.1,0,0.2,0,0.3,0c0.4,0,0.8,0,1.2,0.1c0.4,0,0.8,0.1,1.1,0.2c0.3,0.1,0.6,0.1,0.9,0.2c0.9,0.2,1.7,0.5,2.5,0.9
          c0.7,0.4,1.4,0.8,2,1.3c0.7,0.6,1.4,1.2,2,1.9c0.1,0.1,0.1,0.1,0.2,0.2C51.2,22,51.6,22.5,51.9,23z"
      />

      {/* Main controller body — large gradient sweep */}
      <path
        fill={`url(#${gradB})`}
        d="M53.8,29.7c0,0.7-0.1,1.5-0.2,2.2c-0.1,0.4-0.2,0.8-0.3,1.2c-0.4,1.5-1.1,3-2.1,4.2c-1.4,1.9-3.2,3.3-5.4,4.2
          c-1.5,0.6-3.2,1-5,1c-0.5,0-1,0-1.5-0.1c-0.3,0-0.6-0.1-0.9-0.1c-1-0.2-2-0.5-3-0.9c-0.5-0.2-1-0.5-1.5-0.8
          c-0.8-0.5-1.5-1.1-2.2-1.7c-0.7-0.7-1.2-1.4-1.7-2.2c-1.1-1.7-1.8-3.6-2-5.7c0-0.4-0.1-0.9-0.1-1.3c0-0.2,0-0.3,0-0.5
          c0-0.3,0-0.5-0.1-0.8c-0.6-4.3-4.3-7.5-8.7-7.5c-4.9,0-8.8,3.9-8.8,8.8c0,3.2,1.7,6,4.3,7.5c1.3,0.8,2.9,1.3,4.6,1.3
          c3.6,0,6.8-2.2,8.1-5.3c0.4,1.6,1.1,3.2,2.1,4.6c0.7,0.9,1.6,1.7,2.6,2.3c0.1,0.1,0.3,0.1,0.4,0.2c0,0.2,0,0.4-0.1,0.5
          c-0.1,0.4-0.3,0.8-0.5,1.2c-0.3,0.4-0.6,0.7-1,0.9c-1.5-0.6-2.8-1.6-3.7-2.9c-0.5,0.3-1,0.6-1.5,0.9c-1.8,0.9-3.8,1.5-6,1.5
          c-1.3,0-2.5-0.2-3.7-0.5c-5.3-1.6-9.2-6.5-9.2-12.4c0-7.1,5.8-12.9,12.9-12.9c4.6,0,8.6,2.4,10.9,5.9c0.5,0.8,0.9,1.6,1.3,2.5
          c0.1,0.4,0.3,0.8,0.4,1.2c0.3,1,0.4,2.1,0.4,3.3c0,2.1,0.7,4,2,5.6c1.6,2,4.1,3.2,6.8,3.2c0.3,0,0.6,0,0.9,0
          c0.3,0,0.7-0.1,1-0.2c1.7-0.4,3.1-1.2,4.3-2.4c0.4-0.4,0.8-0.9,1.1-1.4c0.4-0.7,0.8-1.4,1-2.2c0-0.1,0.1-0.3,0.1-0.4H43v-4.2
          h10.7C53.7,28.4,53.8,29,53.8,29.7z"
      />

      {/* Inner highlight ring */}
      <circle cx="40.8" cy="29.7" r="3.8" fill="none" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}