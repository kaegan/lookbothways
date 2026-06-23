// Two-tone station plate: red icon segment joined to a dark label segment.
export default function StationTag({ icon: Icon, label, className = '' }) {
  return (
    <div className={`inline-flex items-stretch w-max rounded-[3px] overflow-hidden ${className}`}>
      {Icon && (
        <span className="flex items-center bg-transit text-white px-2.5">
          <Icon className="w-3.5 h-3.5" />
        </span>
      )}
      <span className="flex items-center bg-ink text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5">
        {label}
      </span>
    </div>
  )
}
