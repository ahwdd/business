interface ArTechMarkProps {
  className?: string;
}

/**
 * The ARTech mark — a faceted isometric cube built from angular blue
 * and violet shards, recreated from the original Arabhardware
 * ecosystem logo (simplified to flat fills for crisp rendering at
 * small sizes).
 */
export default function ArTechMark({ className }: ArTechMarkProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      {/* Top face */}
      <path d="M30 4 L52 16 L30 28 L8 16 Z" fill="#8e0ce6" />
      {/* Left face */}
      <path d="M8 16 L30 28 L30 52 L8 40 Z" fill="#120fe6" />
      {/* Right face */}
      <path d="M52 16 L30 28 L30 52 L52 40 Z" fill="#000b7f" />
      {/* Front accent shard */}
      <path d="M30 28 L41 22 L52 28 L41 34 Z" fill="#c503e8" />
      {/* Lower accent shard */}
      <path d="M19 34 L30 28 L30 40 L19 46 Z" fill="#491aa1" />
    </svg>
  );
}