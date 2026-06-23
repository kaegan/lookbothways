// Transit name-plate logo: dark plate, red "M" tile, MIND THE GAP wordmark.
export default function NamePlate({ size = 'md', className = '' }) {
  const dims = {
    sm: { tile: 'w-7 h-7 text-sm', word: 'text-xs px-3', radius: 'rounded-[3px]' },
    md: { tile: 'w-[34px] h-[34px] text-[17px]', word: 'text-[15px] px-[14px]', radius: 'rounded-[3px]' },
  }[size]

  return (
    <span className={`inline-flex items-center overflow-hidden bg-ink ${dims.radius} ${className}`}>
      <span className={`flex items-center justify-center bg-transit text-white font-bold ${dims.tile}`}>M</span>
      <span className={`text-white font-bold tracking-[0.04em] ${dims.word}`}>MIND THE GAP</span>
    </span>
  )
}
