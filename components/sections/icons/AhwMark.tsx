interface BrandIconProps {
  className?: string;
}
 
/**
 * The shared "AH" geometric logomark used by AHW Store, AHW Esports,
 * and the parent Arabhardware brand.
 */
export default function AhwMark({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22.3,49.2h-7.7v-7.7h7.7V49.2z M45.4,49.2h-7.7V33.8H30v-7.7h7.7v-7.7H22.3v15.4h-7.7V18.5h7.7v-7.7h15.4v7.7h7.7L45.4,49.2z" />
    </svg>
  );
}
