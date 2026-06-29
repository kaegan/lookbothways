import Wordmark from './Wordmark'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t-2 border-ink">
      <div className="py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <Wordmark textClass="text-base" />
            <p className="text-sm text-graphite font-medium">
              Scoring every signalized intersection in Vancouver on real crash data.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2 text-sm text-graphite">
            <div className="flex gap-4">
              <a href="mailto:hello@lookbothways.fyi" className="text-graphite hover:text-transit transition-colors">Email</a>
              <a href="https://www.linkedin.com/in/kaegandonnelly" target="_blank" rel="noopener noreferrer" className="text-graphite hover:text-transit transition-colors">LinkedIn</a>
            </div>
            <p>
              Data from{' '}
              <a href="https://opendata.vancouver.ca" className="text-graphite underline hover:text-transit transition-colors" target="_blank" rel="noopener noreferrer">City of Vancouver</a>
              {' '}&amp; ICBC
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
