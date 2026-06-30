import { useState, useEffect, useRef } from 'react'
import posthog from 'posthog-js'
import { IconPlusFillDuo18 as Plus } from 'nucleo-ui-fill-duo-18'

const faqs = [
  {
    q: 'What does this map actually show?',
    a: "By default it shows the 25 most dangerous signalized intersections in Vancouver, ranked by five years of crash data. Click any numbered badge for the full breakdown. Flip on 'All intersections' in the layer panel to see all 966 signals at once: bigger, redder dots are riskier.",
  },
  {
    q: 'Where does the data come from?',
    a: "Two real open datasets: the City of Vancouver traffic-signals dataset (the 966 signal locations) and ICBC's reported-crash records for Vancouver, 2016 to 2020. Every crash count on the map comes straight from ICBC. Nothing is invented.",
  },
  {
    q: 'How is the risk score calculated?',
    a: "Each crash gets snapped to its nearest signal within 50 metres. For every intersection I tally total crashes and weight the injury (casualty) ones 3x heavier than property-damage, then rank all 966 into a 0-to-1 percentile. The score is relative: a 0.9 means riskier than 90% of Vancouver signals.",
  },
  {
    q: 'Is the data definitive?',
    a: "Nope, it's directional. ICBC only captures reported crashes, so near-misses are invisible, and 2020 reflects way less traffic during COVID. Snapping each crash to the nearest signal is a heuristic, not a forensic reconstruction. Think of it as a starting point for a conversation, not a final engineering call.",
  },
  {
    q: 'How does this connect to the Product Marketing role?',
    a: (<>This whole thing is product marketing in miniature. I took a messy public dataset, found the angle, and built something interactive that makes the point in a glance. That's the job: take something complex and get people to care. I also built it fast, which comes down to AI fluency. I like <a href="https://x.com/wadefoster/status/2038979630590509553" target="_blank" rel="noopener noreferrer" className="text-transit underline hover:text-ink transition-colors">this AI fluency rubric from Zapier</a>, and I'd put myself in the "adoptive" tier and climbing. Thanks for scrolling this far!</>),
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
