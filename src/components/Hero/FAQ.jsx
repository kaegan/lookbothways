import { useState, useEffect, useRef } from 'react'
import posthog from 'posthog-js'
import { IconPlusFillDuo18 as Plus } from 'nucleo-ui-fill-duo-18'

const faqs = [
  {
    q: 'What does this map actually show?',
    a: 'By default the map shows the 25 most dangerous signalized intersections in Vancouver, ranked by five years of crash data \u2014 click any numbered badge to see the full breakdown. Enable "All intersections" in the layer panel to reveal all 966 signals: bigger, redder dots are riskier.',
  },
  {
    q: 'Where does the data come from?',
    a: "Two real open datasets: the City of Vancouver traffic-signals dataset (the 966 signal locations) and ICBC's reported-crash records for Vancouver, 2016\u20132020. Every crash count on the map comes straight from ICBC \u2014 nothing is invented.",
  },
  {
    q: 'How is the risk score calculated?',
    a: "Each crash is snapped to its nearest signal within 50 metres. For every intersection I tally total crashes and weight injury (casualty) crashes 3\u00D7 property-damage ones, then rank all 966 intersections into a 0\u20131 percentile. The score is relative: a 0.9 means riskier than 90% of Vancouver signals.",
  },
  {
    q: 'Is the data definitive?',
    a: "It's directional, not definitive. ICBC data captures reported crashes, so unreported near-misses are invisible, and 2020 reflects far less traffic during COVID-19. Snapping crashes to the nearest signal is a heuristic, not a forensic reconstruction. This is a starting point for a conversation, not a final engineering judgment.",
  },
  {
    q: 'How does this connect to the Product Marketing role?',
    a: (<>Product marketing is the work of turning something complex into a story a buyer can act on. I took a messy public dataset, found the angle, and built an interactive piece that makes the point at a glance &mdash; positioning, messaging, and content in miniature, in Miovision's exact domain. Moving this fast leans hard on AI fluency; I like <a href="https://x.com/wadefoster/status/2038979630590509553" target="_blank" rel="noopener noreferrer" className="text-transit underline hover:text-ink transition-colors">this AI fluency rubric from Zapier</a> and I'd put myself in the "adoptive" tier, working toward transformative. Thanks for scrolling this far.</>),
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
