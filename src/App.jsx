import Header from './components/Layout/Header'
import MapSection from './components/Map/MapSection'
import ProductFeatures from './components/Product/ProductFeatures'
import HeroSections from './components/Hero/HeroSections'
import FAQ from './components/Hero/FAQ'
import Footer from './components/Layout/Footer'

const heroStats = [
  { value: '3,590', label: 'areas analyzed', dot: 'bg-ink', valueColor: 'text-ink' },
  { value: '67K', label: 'underserved', dot: 'bg-transit', valueColor: 'text-transit' },
  { value: '72', label: 'critical gaps', dot: 'bg-signal', valueColor: 'text-ink' },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-ink font-sans">
      <Header />

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-24 sm:pt-28">
        <div className="grid lg:grid-cols-[1fr_300px] border-b border-rule">
          {/* Message */}
          <div className="py-12 sm:py-16 lg:pr-12 lg:border-r border-rule">
            {/* Directional strip */}
            <div className="inline-flex items-stretch border-[1.5px] border-ink rounded-[3px] overflow-hidden mb-8">
              <span className="flex items-center bg-ink text-white px-3 text-sm" aria-hidden="true">&#9654;</span>
              <span className="flex items-center px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.14em]">
                METRO VANCOUVER&nbsp;&nbsp;·&nbsp;&nbsp;COVERAGE GAP ANALYSIS
              </span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.04] mb-6 font-heading">
              <span className="text-transit">67,000</span> residents live in Metro Vancouver's transit blind spots
            </h1>
            <p className="text-lg sm:text-xl text-graphite leading-relaxed max-w-xl">
              MindTheGap finds areas where people live but buses and trains don't reach.
            </p>
          </div>

          {/* Coordinate / method rail */}
          <div className="cs-mono py-8 sm:py-10 lg:py-16 lg:pl-9 border-t border-rule lg:border-t-0">
            <div className="text-[11px] tracking-[0.1em] text-faint mb-1.5">STATION</div>
            <div className="text-sm font-medium text-ink mb-6">49.2827&deg; N, 123.1207&deg; W</div>
            <div className="text-[11px] tracking-[0.1em] text-faint mb-1.5">METHOD</div>
            <div className="text-[13px] leading-relaxed text-graphite">
              600&thinsp;m walking radius<br />
              3,590 dissemination areas<br />
              2021 census + GTFS
            </div>
          </div>
        </div>

        {/* Stat signage strip */}
        <div className="grid grid-cols-3 border-b border-rule">
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 sm:py-7 flex items-baseline gap-3 sm:gap-4 ${i > 0 ? 'pl-4 sm:pl-7' : ''} ${i < heroStats.length - 1 ? 'border-r border-rule' : ''}`}
            >
              <span className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full shrink-0 -translate-y-0.5 ${s.dot}`} />
              <div>
                <div className={`text-2xl sm:text-[2.4rem] font-bold tracking-tight leading-none font-heading ${s.valueColor}`}>
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs tracking-[0.12em] uppercase text-faint mt-1.5 sm:mt-2">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Map ── */}
      <section id="map" className="max-w-6xl mx-auto px-6 sm:px-8 pt-14 sm:pt-16">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <span className="bg-ink text-white text-[11px] font-bold tracking-[0.12em] px-3 py-1.5 rounded-[3px]">THE MAP</span>
          <span className="text-sm text-graphite">Every zone scored by how underserved it is. Redder = worse.</span>
        </div>
        <div className="border-2 border-ink rounded-[4px] overflow-hidden">
          <MapSection />
        </div>
      </section>

      <ProductFeatures />

      {/* ── Transition: product → about ── */}
      <div className="h-px bg-ink/10" />
      <div id="origin" className="relative bg-gray-50 border-y border-rule py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="cs-mono text-[11px] tracking-[0.18em] uppercase text-faint mb-3">A little about Kaegan</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight font-heading">
            The kind of person who shows up to <span className="text-transit">city hall</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-graphite max-w-xl mx-auto">
            Hi Swiftly! 👋 I'm Kaegan.
          </p>
          <p className="mt-4 text-base sm:text-lg text-graphite max-w-xl mx-auto">
            At 10 years old, I put on my best (only) suit and asked my mom to drive me to city hall so I could speak at a community hearing about the proposed Evergreen Line. It took two more decades, but the line was eventually built.
          </p>          <p className="mt-4 text-base sm:text-lg text-graphite max-w-xl mx-auto">
            These days I'm a daily transit rider, and reliability is what decides whether I take the bus or drive. When TransLink floated a plan to speed up the #19 that runs past my house by spacing out the stops, I read every detail and wrote in with my thoughts.
          </p>
        </div>
      </div>

      <HeroSections />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
