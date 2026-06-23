import posthog from 'posthog-js'
import StatCard from './StatCard'
import Timeline from './Timeline'
import ClientLogos from './ClientLogos'
import TechLogos from './TechLogos'
import YouTubeEmbed from './YouTubeEmbed'
import StationTag from './StationTag'

function HighlightedHeadline({ text, accentWord }) {
  if (!accentWord) return text
  const idx = text.toLowerCase().indexOf(accentWord.toLowerCase())
  if (idx === -1) return text
  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + accentWord.length)
  const after = text.slice(idx + accentWord.length)
  return <>{before}<span className="text-transit">{match}</span>{after}</>
}

export default function Section({ section, showDivider }) {
  return (
    <div>
      {showDivider && (
        <div className="h-px bg-gray-200" />
      )}

      <section
        id={section.id}
        className={`relative px-6 sm:px-12 py-16 sm:py-24 ${section.bg}`}
      >
        <div className="max-w-3xl mx-auto">
          {section.tag && (
            <div className="mb-5">
              <StationTag label={section.tag} />
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6 tracking-tight font-heading">
            <HighlightedHeadline text={section.headline} accentWord={section.accentWord} />
          </h2>

          {section.screenshot ? (
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14 mt-2">
              <div className="flex-1 min-w-0">
                {section.body && (
                  Array.isArray(section.body) ? (
                    section.body.map((paragraph, i) => (
                      <p key={i} className={`text-lg text-graphite leading-relaxed${i > 0 ? ' mt-4' : ''}`}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-lg text-graphite leading-relaxed">
                      {section.body}
                    </p>
                  )
                )}
              </div>
              <div className="flex-1 min-w-0 w-full">
                <div className="rounded-[4px] overflow-hidden border-2 border-ink">
                  <img
                    src={section.screenshot.src}
                    alt={section.screenshot.alt}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : section.image ? (
            <div className="flex flex-col md:flex-row md:items-start gap-8 mt-2">
              <div className="flex-1">
                {section.body && (
                  <p className="text-lg text-graphite leading-relaxed">
                    {section.body}
                  </p>
                )}
                {section.pullQuote && (
                  <p className="mt-4 text-lg text-graphite leading-relaxed">
                    {section.pullQuote}
                  </p>
                )}
              </div>
              <figure className="shrink-0 md:w-64 lg:w-72">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="rounded-[3px] border-2 border-ink w-full"
                  loading="lazy"
                />
                {section.image.caption && (
                  <figcaption className="mt-2 text-sm text-faint italic">
                    {section.image.caption}
                  </figcaption>
                )}
              </figure>
            </div>
          ) : (
            <>
              {section.body && (
                Array.isArray(section.body) ? (
                  section.body.map((paragraph, i) => (
                    <p key={i} className={`text-lg text-graphite leading-relaxed max-w-2xl${i > 0 ? ' mt-4' : ''}`}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-lg text-graphite leading-relaxed max-w-2xl">
                    {section.body}
                  </p>
                )
              )}

              {section.pullQuote && (
                <p className="mt-4 text-lg text-graphite leading-relaxed max-w-2xl">
                  {section.pullQuote}
                </p>
              )}
            </>
          )}

          {section.timeline && <Timeline steps={section.timeline} />}

          {section.stats && (
            <div className="flex flex-wrap gap-4 mt-2">
              {section.stats.map((stat) => (
                <StatCard key={stat.label} {...stat} visible={true} />
              ))}
            </div>
          )}

          {section.logos && <ClientLogos logos={section.logos} label={section.logosLabel} />}

          {section.techLogos && <TechLogos />}

          {section.youtube && (
            <>
              <YouTubeEmbed url={section.youtube} />
              {section.youtubeCaption && (
                <p className="mt-2 text-sm text-faint italic">{section.youtubeCaption}</p>
              )}
            </>
          )}

          {section.links && (
            <div className="flex flex-wrap gap-4 mt-8">
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('cta_clicked', { label: link.label, url: link.url })}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-[3px] text-sm font-semibold transition-colors ${link.primary
                    ? 'bg-ink hover:bg-transit text-white'
                    : 'border border-ink text-ink hover:bg-ink hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
