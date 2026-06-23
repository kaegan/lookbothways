import { useState, useEffect, useRef } from 'react'
import posthog from 'posthog-js'
import { IconPlusFillDuo18 as Plus } from 'nucleo-ui-fill-duo-18'

const faqs = [
  {
    q: 'Where does the data come from?',
    a: "Transit data comes from TransLink's GTFS feed (stop locations and trip frequencies). Population data comes from Statistics Canada's 2021 Census at the dissemination area level.",
  },
  {
    q: 'How is the gap score calculated?',
    a: "For each area, I count the total daily transit trips within a 600-meter walking distance of its centre and divide by the resident population to get trips per capita. That per-capita figure is percentile-ranked against all areas above a density floor (400 people/km\u00B2), and the gap score is the squared inverse of that percentile. Fewer trips per resident = higher gap. Areas below the density floor are shown in gray and left ungraded.",
  },
  {
    q: 'Is the data accurate?',
    a: "It's directional, not definitive. The GTFS feed captures scheduled service, not real-time reliability, and the census data is from 2021 so new developments won't show up. Some edges are rough (e.g. a zone near a SkyTrain station might still score high if bus feeder routes are sparse). This is a starting point for conversation, not a planning tool.",
  },
  {
    q: 'How does this connect to the role at Swiftly?',
    a: "I picked a problem Swiftly's customers know well: where transit service falls short. Then I built a small interactive piece around it. It also got me hands-on with the kind of data Swiftly works with, like GTFS feeds. As a Customer Training & Adoption Specialist I'd spend my days turning this sort of complexity into training that agencies can actually use. Thanks for scrolling this far.",
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [open])

  return (
    <div className="border-b border-rule">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => { if (!open) posthog.capture('faq_opened', { question: q }); setOpen(!open) }}
      >
        <span className="text-base sm:text-lg font-semibold text-ink group-hover:text-transit transition-colors pr-4">
          {q}
        </span>
        <span className={`text-faint group-hover:text-transit shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <Plus className="w-5 h-5" />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="pb-5 text-graphite leading-relaxed text-sm sm:text-base max-w-2xl">
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative px-6 sm:px-12 py-16 sm:py-24 bg-gray-50 border-t border-rule"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-8 tracking-tight font-heading">
          FAQ
        </h2>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
