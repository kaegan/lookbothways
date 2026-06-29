// Type-forward wordmark for the Wayfinding signage system: an ink badge with a
// double-headed "both ways" arrow, set against the Look Both Ways name.
export default function Wordmark({ className = '', textClass = 'text-lg' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="inline-flex items-center justify-center bg-ink text-white rounded-[3px] h-6 w-7 shrink-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 12" className="w-4 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <polyline points="8,2 4,6 8,10" />
          <polyline points="16,2 20,6 16,10" />
        </svg>
      </span>
      <span className={`font-heading font-bold text-ink tracking-tight leading-none ${textClass}`}>
        Look Both Ways
      </span>
    </span>
  )
}
