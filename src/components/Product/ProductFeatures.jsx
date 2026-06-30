import { useState } from 'react'
import { IconMapFillDuo18 as Map } from 'nucleo-ui-fill-duo-18'
import { IconCursorRippleFillDuo18 as MousePointerClick } from 'nucleo-ui-fill-duo-18'
import StationTag from '../Hero/StationTag'

// Screenshots live in /public/screenshots and are referenced by URL so a
// missing capture degrades to the ScreenshotFrame placeholder instead of
// breaking the build.
const rankedOverviewImg = '/screenshots/risk-scored.png'
const reportCardImg = '/screenshots/report-card.png'

const features = [
  {
    icon: Map,
    tag: 'Ranked Overview',
    headline: 'The city’s worst intersections triaged',
    body: "Vancouver’s worst intersections are ranked. The numbered badges flag the top 25 hotspots. #1 is the city’s worst.",
    screenshot: rankedOverviewImg,
    alt: 'Vancouver map with the 25 highest-risk intersections marked by numbered badges',
  },
  {
    icon: MousePointerClick,
    tag: 'Evidence Card',
    headline: 'See the crash record for every signal',
    body: 'Click any intersection for a breakdown of its letter grade, percentile, total crashes, injury versus property-only counts, injury rate, a five-year trend, and how it ranks against the city average.',
    screenshot: reportCardImg,
    alt: 'Report card showing a risk grade, crash counts, injury rate, and a crashes-by-year chart',
  },
]

function ScreenshotFrame({ feature }) {
  const [imgError, setImgError] = useState(false)
  const Icon = feature.icon

  return (
    <div className="relative rounded-[4px] overflow-hidden border-2 border-ink">
      {!imgError ? (
        <img
          src={feature.screenshot}
          alt={feature.alt}
          className="w-full h-auto block"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="aspect-video flex items-center justify-center cs-hatch text-faint">
          <div className="text-center">
            <Icon className="w-10 h-10 mx-auto mb-2" />
            <span className="text-sm">Screenshot: {feature.tag}</span>
          </div>
        </div>
      )}
    </div>
  )
}

function FeatureBlock({ feature, index }) {
  const isReversed = index % 2 !== 0

  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}>
      {/* Text side */}
      <div className="flex-1 min-w-0">
        <div className="mb-4">
          <StationTag label={feature.tag} />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-ink mb-3 tracking-tight font-heading">
          {feature.headline}
        </h3>
        <p className="text-base sm:text-lg text-graphite leading-relaxed max-w-lg">
          {feature.body}
        </p>
      </div>

      {/* Screenshot side */}
      <div className="flex-1 min-w-0 w-full">
        <ScreenshotFrame feature={feature} />
      </div>
    </div>
  )
}

export default function ProductFeatures() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Feature blocks */}
        <div className="space-y-16 sm:space-y-20">
          {features.map((feature, i) => (
            <FeatureBlock key={feature.tag} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
