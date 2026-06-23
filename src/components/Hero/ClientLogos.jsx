// Static client roster under a mono section label — calm, signage-style listing.
export default function ClientLogos({ logos, label = 'Enterprise customers I supported' }) {
  return (
    <div className="mt-10 border-t border-rule pt-7">
      <div className="cs-mono text-[11px] tracking-[0.16em] uppercase text-faint mb-[18px]">
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3.5">
        {logos.map((name) => (
          <span key={name} className="text-base font-semibold text-graphite">
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
