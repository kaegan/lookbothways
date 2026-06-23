import AnimatedNumber from './AnimatedNumber'

export default function StatCard({ numericValue, suffix, label, accent, visible }) {
  return (
    <div className="cs-panel flex-1 min-w-[210px] p-6">
      <AnimatedNumber
        target={numericValue}
        suffix={suffix}
        visible={visible}
        colorClass={accent ? 'text-transit' : 'text-ink'}
      />
      <div className="text-sm text-graphite leading-relaxed mt-3">{label}</div>
    </div>
  )
}
