import { IconChartTrendUpFillDuo18 as DollarSign } from 'nucleo-ui-fill-duo-18'
import { IconClapperboardFillDuo18 as Clapperboard } from 'nucleo-ui-fill-duo-18'
import { IconRocketFillDuo18 as Rocket } from 'nucleo-ui-fill-duo-18'
import AnimatedNumber from './AnimatedNumber'

const icons = { DollarSign, Clapperboard, Rocket }

export default function StatCard({ numericValue, suffix, iconName, label, visible }) {
  const Icon = iconName ? icons[iconName] : null
  return (
    <div className="flex-1 min-w-[200px] bg-white border border-ink rounded-[3px] overflow-hidden">
      {/* platform stripe */}
      <div className="h-[3px] bg-transit" />
      <div className="p-6">
        {Icon && (
          <div className="mb-3">
            <Icon size={24} className="text-transit" />
          </div>
        )}
        <div className="mb-2">
          <AnimatedNumber target={numericValue} suffix={suffix} visible={visible} />
        </div>
        <div className="text-sm text-graphite leading-relaxed">{label}</div>
      </div>
    </div>
  )
}
